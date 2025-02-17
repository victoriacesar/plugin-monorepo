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
const firebase_repository_1 = require("../../repository/firebase-repository");
const data_service_1 = require("../data-service");
jest.mock('../../repository/firebase-repository.ts', () => {
    return {
        FirebaseRepository: jest.fn().mockImplementation(() => ({
            saveExtractions: jest.fn(),
            listExtractions: jest.fn(),
        })),
    };
});
describe('DataService', () => {
    let dataService;
    let mockRepository;
    beforeEach(() => {
        mockRepository =
            new firebase_repository_1.FirebaseRepository();
        mockRepository.saveExtractions.mockResolvedValue(undefined);
        mockRepository.listExtractions.mockResolvedValue({});
        dataService = new data_service_1.DataService();
        dataService.repository = mockRepository;
    });
    it('should save the data calling saveExtractions method', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'mock-token';
        const data = {
            device: 'device-test',
            origin: 'origin-test',
            os: 'os-test',
            themeSwitchCount: 1,
        };
        mockRepository.saveExtractions.mockResolvedValueOnce();
        yield dataService.saveData(token, data);
        expect(mockRepository.saveExtractions).toHaveBeenCalledWith(token, data);
        expect(mockRepository.saveExtractions).toHaveBeenCalledTimes(1);
    }));
    it('should return list of extractions when listData is called', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = 'mock-token';
        const mockDataList = {
            'key1': {
                data: {
                    device: 'device-test',
                    origin: 'origin-test',
                    os: 'os-test',
                    themeSwitchCount: 1,
                },
                timestamp: 1739665692274,
            },
            'key2': {
                data: {
                    device: 'device-test',
                    origin: 'origin-test',
                    os: 'os-test',
                    themeSwitchCount: 1,
                },
                timestamp: 1739665874053,
            },
        };
        mockRepository.listExtractions.mockResolvedValueOnce(mockDataList);
        const result = yield dataService.listData(token);
        expect(mockRepository.listExtractions).toHaveBeenCalledTimes(1);
        expect(mockRepository.listExtractions).toHaveBeenCalledWith(token);
        expect(result).toBe(mockDataList);
    }));
});
