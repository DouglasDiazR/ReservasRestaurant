"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialsRepository = exports.appointmentsRepositoty = exports.usersRepository = void 0;
const data_source_1 = require("../config/data-source");
const Appointments_1 = __importDefault(require("../entities/Appointments"));
const credentials_1 = __importDefault(require("../entities/credentials"));
const users_1 = __importDefault(require("../entities/users"));
exports.usersRepository = data_source_1.AppDataSource.getRepository(users_1.default);
exports.appointmentsRepositoty = data_source_1.AppDataSource.getRepository(Appointments_1.default);
exports.credentialsRepository = data_source_1.AppDataSource.getRepository(credentials_1.default);
