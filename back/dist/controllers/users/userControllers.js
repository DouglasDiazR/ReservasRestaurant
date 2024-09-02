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
exports.loginUsers = exports.registerUsers = exports.getUserById = exports.getAllUsers = void 0;
const usersServices_1 = require("../../services/usersServices");
const credentialsServices_1 = require("../../services/credentialsServices");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersServices_1.getAllUsersServices)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, usersServices_1.getUserByIdServices)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getUserById = getUserById;
const registerUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser = yield (0, usersServices_1.createUsersService)({
            name,
            email,
            birthdate,
            nDni,
            username,
            password,
        });
        res.status(201).json({ message: "user created successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.registerUsers = registerUsers;
const loginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const credential = yield (0, credentialsServices_1.validateCredential)({
            username,
            password,
        });
        const user = yield (0, usersServices_1.findUserByCredentialId)(credential.id);
        res.status(200).json({ loggin: true, user });
    }
    catch (error) {
        console.error("Login error:", error.message);
        res.status(404).json({ message: error.message });
    }
});
exports.loginUsers = loginUsers;
