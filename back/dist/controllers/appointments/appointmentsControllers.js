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
exports.cancelAppointments = exports.scheduleAppointments = exports.getAppointmentsById = exports.getAllAppointments = void 0;
const appointmentsServices_1 = require("../../services/appointmentsServices");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAppointments = yield (0, appointmentsServices_1.getAllAppointmentsServices)();
        res.status(200).json(allAppointments);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield (0, appointmentsServices_1.getAppointmentsByIdServices)(Number(id));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getAppointmentsById = getAppointmentsById;
const scheduleAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId, description } = req.body;
        const newAppointment = yield (0, appointmentsServices_1.scheduleAppointmentsService)({
            date,
            time,
            userId,
            description,
        });
        res.status(201).json({ newAppointment });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.scheduleAppointments = scheduleAppointments;
const cancelAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, appointmentsServices_1.cancelAppointmentsService)(Number(id));
        res.status(200).json({ message: "Canceled Appointment" });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.cancelAppointments = cancelAppointments;