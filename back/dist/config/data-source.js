"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const users_1 = __importDefault(require("../entities/users"));
const Appointments_1 = __importDefault(require("../entities/Appointments"));
const credentials_1 = __importDefault(require("../entities/credentials"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: false,
    dropSchema: false,
    logging: false,
    entities: [users_1.default, Appointments_1.default, credentials_1.default],
    subscribers: [],
    migrations: [],
});
