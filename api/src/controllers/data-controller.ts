import { Request, Response } from 'express';
import { DataService } from '../services/data-service';

const dataService = new DataService();

export const collectData = async (req: Request, res: Response) => {
  const payload = req.dto;
  const token = req.token;

  try {
    await dataService.saveData(token as string, payload);
    res.status(200).json({ message: 'Dados salvos com sucesso' });
  } catch (error: any) {
    res.status(500).json({ error: 'Erro ao salvar dados' });
  }
};

export const listData = async (req: Request, res: Response) => {
  const { token } = req.query;

  try {
    const data = await dataService.listData(token as string);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar dados' });
  }
};
