import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import { authMiddleware } from './middleware/authMiddleware';
import { rateLimitPerTokenMiddleware } from './middleware/rateLimitPerTokenMiddleware';
import { collectData, listData } from './controllers/data-controller';
import { validateDto } from './middleware/payloadValidation.middleware';
import { CollectDataDto } from './dto/collect-data.dto';

const app = express();

app.use(cors());
app.use(express.json());

app.post(
  '/collect',
  authMiddleware,
  rateLimitPerTokenMiddleware,
  validateDto(CollectDataDto),
  collectData
);
app.get('/list', listData);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
