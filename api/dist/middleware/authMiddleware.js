"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const extractToken = (authHeader) => {
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return null;
    return authHeader.split(' ')[1];
};
const isValidToken = (token, validTokens) => {
    return !!token && validTokens.includes(token);
};
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = extractToken(authHeader);
    const validTokens = [process.env.TOKEN_1, process.env.TOKEN_2];
    if (!isValidToken(token, validTokens)) {
        res.status(403).json({ error: 'Acesso negado' });
        return;
    }
    req.token = token;
    next();
};
exports.authMiddleware = authMiddleware;
