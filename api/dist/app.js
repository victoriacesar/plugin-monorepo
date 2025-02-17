"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authMiddleware_1 = require("./middleware/authMiddleware");
const rateLimitPerTokenMiddleware_1 = require("./middleware/rateLimitPerTokenMiddleware");
const data_controller_1 = require("./controllers/data-controller");
const payloadValidation_middleware_1 = require("./middleware/payloadValidation.middleware");
const collect_data_dto_1 = require("./dto/collect-data.dto");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/collect', authMiddleware_1.authMiddleware, rateLimitPerTokenMiddleware_1.rateLimitPerTokenMiddleware, (0, payloadValidation_middleware_1.validateDto)(collect_data_dto_1.CollectDataDto), data_controller_1.collectData);
app.get('/list', data_controller_1.listData);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
exports.default = app;
