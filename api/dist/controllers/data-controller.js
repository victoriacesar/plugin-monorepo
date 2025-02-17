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
exports.listData = exports.collectData = void 0;
const data_service_1 = require("../services/data-service");
const dataService = new data_service_1.DataService();
const collectData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.dto;
    const token = req.token;
    try {
        yield dataService.saveData(token, payload);
        res.status(200).json({ message: 'Dados salvos com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao salvar dados' });
    }
});
exports.collectData = collectData;
const listData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.query;
    try {
        const data = yield dataService.listData(token);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao listar dados' });
    }
});
exports.listData = listData;
