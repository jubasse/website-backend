const env = process.env;
const type = 'mongodb';
const password = encodeURIComponent(env.DB_PASSWORD || '');

export default {
    entities: ['dist/entities/*.entity.ts'],
    logging: env.DB_LOGGING === 'true',
    synchronize: env.DB_SYNCHRONIZE === 'true',
    type,
    url: `${type}+srv://${env.DB_USERNAME}:${password}@${env.DB_HOST}/test?retryWrites=true&w=majority`,
    ssl: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscribers',
    }
};
