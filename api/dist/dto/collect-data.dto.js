"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectDataDto = void 0;
const class_validator_1 = require("class-validator");
class CollectDataDto {
}
exports.CollectDataDto = CollectDataDto;
__decorate([
    (0, class_validator_1.IsString)()
], CollectDataDto.prototype, "device", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O campo 'os' deve ser uma string" })
], CollectDataDto.prototype, "os", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "O campo 'origin' deve ser uma URL válida" })
], CollectDataDto.prototype, "origin", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: "O campo 'themeSwitchCount' deve ser um número" })
], CollectDataDto.prototype, "themeSwitchCount", void 0);
