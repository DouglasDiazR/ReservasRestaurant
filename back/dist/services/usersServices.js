"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByCredentialId = exports.createUsersService = exports.getUserByIdServices = exports.getAllUsersServices = void 0;
const credentialsServices_1 = require("./credentialsServices");
const repositories_1 = require("../repositories");
const getAllUsersServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield repositories_1.usersRepository.find({
        relations: { appointments: true },
    });
    return allUsers;
});
exports.getAllUsersServices = getAllUsersServices;
const getUserByIdServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositories_1.usersRepository.findOne({
        where: { id: id },
        relations: { appointments: true },
    });
    if (!user)
        throw new Error("User not Found");
    return user;
});
exports.getUserByIdServices = getUserByIdServices;
const createUsersService = (createUsersDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = repositories_1.usersRepository.create(createUsersDto);
    yield repositories_1.usersRepository.save(newUser);
    const newCredential = yield (0, credentialsServices_1.createCredential)({
        username: createUsersDto.username,
        password: createUsersDto.password,
    });
    newUser.credentials = newCredential;
    const savedNewUser = yield repositories_1.usersRepository.save(newUser);
    return savedNewUser;
});
exports.createUsersService = createUsersService;
const findUserByCredentialId = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositories_1.usersRepository.findOne({
        where: { credentials: { id: credentialId } },
    });
    if (!user)
        throw new Error("User not Found");
    return user;
});
exports.findUserByCredentialId = findUserByCredentialId;
