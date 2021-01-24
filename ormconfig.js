const dbConfig = {
  name: 'default',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'locadora',
  password: 'aUUHE,(qP3VgBxqR',
  database: 'locadora',
  synchronize: false,
  entities: ['./src/modules/**/entities/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};

module.exports = dbConfig;
