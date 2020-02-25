import { AppModeEnum } from '../enums';

const env = process.env;

export default {
    mode: env.APP_MODE,
    port: env.APP_PORT,
    isDevelopment: this.mode === AppModeEnum.DEVELOPMENT,
    isProduction: this.mode === AppModeEnum.PRODUCTION,
}
