const { PrismaClient } = require('@prisma/client');

async function testConnection(host) {
  const url = `mysql://u583652021_userspsv:Tani8877@${host}:3306/u583652021_spsv`;
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: url,
      },
    },
  });

  console.log(`Testing connection to: ${host}...`);
  try {
    await prisma.$connect();
    console.log(`✅ SUCCESS: Connected to ${host}`);
    
    // Try a simple query
    const result = await prisma.$queryRaw`SELECT 1 as connected`;
    console.log(`📊 Query result:`, result);
    
    return true;
  } catch (error) {
    console.error(`❌ FAILED: Connection to ${host} failed.`);
    console.error(`Error message: ${error.message}`);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  console.log('--- Database Connection Diagnostic ---');
  
  const results = {};
  results.localhost = await testConnection('localhost');
  console.log('-----------------------------------');
  results['127.0.0.1'] = await testConnection('127.0.0.1');
  
  console.log('\n--- Diagnostic Summary ---');
  console.log('localhost:', results.localhost ? 'Works' : 'Fails');
  console.log('127.0.0.1:', results['127.0.0.1'] ? 'Works' : 'Fails');
}

main().catch(console.error);
