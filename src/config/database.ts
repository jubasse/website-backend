const env = process.env;
const type = env.DB_TYPE;

export default {
    entities: ['dist/entities/*.entity.ts'],
    logging: env.TYPEORM_LOGGING === 'true',
    synchronize: env.TYPEORM_SYNCHRONIZE === 'true',
    type,
    url: process.env.TYPEORM_URL,
    ssl: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscribers',
    },
};
