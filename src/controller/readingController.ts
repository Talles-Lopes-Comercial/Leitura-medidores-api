import { Request, Response } from 'express';
import { reading } from '../models/reading';
import { readingService } from '../services/readingServices';
import { geminiService } from '../services/geminiServices'

export const ReadingController = {
  getReading : (_req: Request, res: Response) => {
    const Reading = readingService.getreading (); res.json(Reading);
  },
  getReadingById: (req: Request, res: Response) => {
    const reading  = readingService.getreadingById(
        parseInt(req.params.id));
    if (!reading) {
      return res.status(404).json(
        {
          message: 'Leitura não encontrada'

        }
      );
    }
    res.json(reading);
  },

  createReading: (req: Request, res: Response) => {
      const novaReading: reading = req.body;
      const reading = readingService.createreading(novaReading); res.status(201).json(reading);
  },
  updateReading: (req: Request, res: Response) => {
      const updatedreading: reading = req.body;
    const Reading = readingService.updatedreading(parseInt(req.params.id), updatedreading);
      if (!Reading) {
        return res.status(404).json(
          { message: 'Leitura não encontrada'}
        );
    }
    res.json(Reading);
  },
  deleteReading: (req: Request, res: Response) => {
    const sucesso = readingService.deletereading(parseInt(req.params.id));
    if (!sucesso) {
      return res.status(404).json(
        { message: 'Leitura não encontrada' }
      );
    }
    res.status(204).send();
  },
  processReadingFromImage: async (req: Request, res: Response) => {
      try {
        const imagePath = req.file?.path;

        if (!imagePath) {
          return res.status(400).json({ message: 'Nenhuma imagem foi enviada' });
        }

         // Processa a imagem com a Gemini AI
        const result = await geminiService.processImage(imagePath);

         // Exemplo: Supondo que o retorno seja algo como { tipo: 'água', valor: 120, data: '2024-08-27' }
        /*const newreading: reading = {// Será definido pelo banco de dados ou lógica interna
          id: 0,
          type : result.Type,
          value: result.value,
          date: new Date('result.date'),
        }  ;*/

         // Aqui você pode salvar a leitura no banco de dados se desejar
         // leituraService.createLeitura(novaLeitura);

        res.json(novaLeitura);
      }
      catch (error) {
      res.status(500).json({ message: 'Erro ao processar a imagem' });
    }
}

};
