const path = require('path');

// Set production environment
process.env.NODE_ENV = 'production';
process.env.HOSTNAME = '0.0.0.0';
process.env.PORT = process.env.PORT || 3000;

// Set the directory to the app root
process.chdir(__dirname);

// In Next.js standalone mode, the server is located in .next/standalone/server.js
// We require it here so Passenger can start it.
// Note: You must run 'npm run build' before deploying to generate this file.
try {
  require('./.next/standalone/server.js');
} catch (error) {
  console.error('Error: Could not find .next/standalone/server.js');
  console.error('Make sure you have run "npm run build" and the .next/standalone directory exists.');
  process.exit(1);
}
