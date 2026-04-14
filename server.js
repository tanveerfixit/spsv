const fs = require('fs');
const path = require('path');

// Ensure tmp directory exists for logging
const tmpDir = path.join(__dirname, 'tmp');
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir);
}

const logFile = path.join(tmpDir, 'error.log');

function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, logMessage);
  console.log(message);
}

log('Starting application...');
log(`Current directory: ${process.cwd()}`);
log(`Entry point: ${__filename}`);

// Set production environment
process.env.NODE_ENV = 'production';
process.env.HOSTNAME = '0.0.0.0';
process.env.PORT = process.env.PORT || 3000;

log(`Environment: NODE_ENV=${process.env.NODE_ENV}, PORT=${process.env.PORT}`);

// Check for required environment variables
if (!process.env.NEXTAUTH_SECRET) {
  log('WARNING: NEXTAUTH_SECRET is not set. This will cause NextAuth to fail.');
}
if (!process.env.DATABASE_URL) {
  log('WARNING: DATABASE_URL is not set. Database connections will fail.');
}

// Set the directory to the app root
process.chdir(__dirname);

// Standalone server path
const standalonePath = path.join(__dirname, '.next', 'standalone', 'server.js');

log(`Checking for standalone server at: ${standalonePath}`);

if (fs.existsSync(standalonePath)) {
  log('Standalone server found. Starting...');
  try {
    require(standalonePath);
  } catch (error) {
    log(`FATAL ERROR during require: ${error.message}`);
    log(error.stack);
    process.exit(1);
  }
} else {
  log('FATAL ERROR: Standalone server not found at ' + standalonePath);
  log('Please ensure you have run "npm run build" and the .next/standalone directory is present on the server.');
  process.exit(1);
}
