import { parseConfig } from '../utils/parseConfig.util';

const config = parseConfig({
    globalPath: {
        info        : "Base path for api products",
        default     : "/api/tc-products-api",
    },
    port: {
        info        : "Port for application",
        env         : "PORT",
        required    : true,
    },
    tokens: {
        tokenSecret: {
            info        : "Token Secret JWT",
            env         : "TOKEN_SECRET",
            required    : true,
        },
        tokenSesion: {
            info        : "Token Sesion",
            env         : "TOKEN_SESION",
            required    : true,
        },
    },
    microservices: {
        MS_GENERATE_TOKEN: {
            info        : "Microservice for generate token",
            env         : "MS_GENERATE_TOKEN",
            required    : true,
        },
        MS_PRODUCTS: {
            info        : "Microservice for manage products",
            env         : "MS_PRODUCTS",
            required    : true,
        }
    }
});

export default config;