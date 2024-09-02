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
exports.validateCredential = exports.createCredential = void 0;
const repositories_1 = require("../repositories");
const createCredential = (createCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = repositories_1.credentialsRepository.create(createCredentialDto);
    const savedCredentials = yield repositories_1.credentialsRepository.save(newCredential);
    return savedCredentials;
});
exports.createCredential = createCredential;
const validateCredential = (validateCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = validateCredentialDto;
    const foundCredential = yield repositories_1.credentialsRepository.findOneBy({
        username: username,
    });
    if (!foundCredential)
        throw Error("Incorrect Credential");
    if (password !== (foundCredential === null || foundCredential === void 0 ? void 0 : foundCredential.password))
        throw Error("Incorrect Credential");
    return foundCredential;
});
exports.validateCredential = validateCredential;
