import { Sequelize } from 'sequelize';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

const sequelize = new Sequelize(requireEnv('DB_NAME'), requireEnv('DB_USER'), requireEnv('DB_PASSWORD'), {
  host: 'localhost',
  dialect: 'mysql'
});


async function testConnectDatabase() {
  await sequelize.authenticate();
  await sequelize.sync({ force: false, match: /^koa_news_admin$/, alter: false })
  console.log('test === Connection has been established successfully.');
}

(async () => {
  try {
    await testConnectDatabase();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();


export {
  sequelize
}