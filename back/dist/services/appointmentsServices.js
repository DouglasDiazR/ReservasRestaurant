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
exports.cancelAppointmentsService = exports.getAppointmentsByIdServices = exports.getAllAppointmentsServices = exports.scheduleAppointmentsService = void 0;
const repositories_1 = require("../repositories");
const scheduleAppointmentsService = (scheduleAppointmentsDto) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield repositories_1.usersRepository.findOneBy({
        id: scheduleAppointmentsDto.userId,
    });
    if (!user)
        throw Error("User not found");
    const newAppointment = repositories_1.appointmentsRepositoty.create(scheduleAppointmentsDto);
    yield repositories_1.appointmentsRepositoty.save(newAppointment);
    newAppointment.users = user;
    yield repositories_1.appointmentsRepositoty.save(newAppointment);
    return newAppointment;
});
exports.scheduleAppointmentsService = scheduleAppointmentsService;
const getAllAppointmentsServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield repositories_1.appointmentsRepositoty.find();
    return allAppointments;
});
exports.getAllAppointmentsServices = getAllAppointmentsServices;
const getAppointmentsByIdServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield repositories_1.appointmentsRepositoty.findOne({
        where: { id: id },
    });
    if (!appointment)
        throw new Error("Appointment not found");
    return appointment;
});
exports.getAppointmentsByIdServices = getAppointmentsByIdServices;
const cancelAppointmentsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield repositories_1.appointmentsRepositoty.findOneBy({
        id: id,
    });
    if (!appointment)
        throw Error("Appointment not found");
    appointment.status = "cancelled";
    yield repositories_1.appointmentsRepositoty.save(appointment);
});
exports.cancelAppointmentsService = cancelAppointmentsService;
