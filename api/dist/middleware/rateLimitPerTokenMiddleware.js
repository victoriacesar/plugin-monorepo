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
exports.rateLimitPerTokenMiddleware = void 0;
const firebase_repository_1 = require("../repository/firebase-repository");
const repository = new firebase_repository_1.FirebaseRepository();
const rateLimitPerTokenMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.token;
    const tenMinutes = 10 * 60 * 1000;
    try {
        const recentRequests = yield repository.getRecentRequests(token, tenMinutes);
        if (recentRequests && Object.keys(recentRequests).length >= 5) {
            res.status(429).json({
                error: 'Limite de requisições excedido. Tente novamente mais tarde.',
            });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao verificar limite de requisições' });
    }
});
exports.rateLimitPerTokenMiddleware = rateLimitPerTokenMiddleware;
