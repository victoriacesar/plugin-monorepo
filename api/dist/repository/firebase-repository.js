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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseRepository = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const firebaseConfig_json_1 = __importDefault(require("../firebaseConfig.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(firebaseConfig_json_1.default),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});
const db = firebase_admin_1.default.database();
class FirebaseRepository {
    constructor() {
        this.extractions = db.ref('extractions');
    }
    saveExtractions(token, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestRef = this.extractions.child('requests').child(token);
            yield requestRef.push({ timestamp: Date.now(), data });
        });
    }
    listExtractions(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield this.extractions
                .child('requests')
                .child(token)
                .limitToLast(20)
                .once('value');
            return snapshot.val();
        });
    }
    getRecentRequests(token, timeWindow) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = Date.now();
            const snapshot = yield this.extractions
                .child('requests')
                .child(token)
                .orderByChild('timestamp')
                .startAt(now - timeWindow)
                .once('value');
            return snapshot.val();
        });
    }
}
exports.FirebaseRepository = FirebaseRepository;
