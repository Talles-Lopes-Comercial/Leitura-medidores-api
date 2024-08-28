import axios from 'axios';
import fs from 'fs';





const GEMINI_API_URL = 'https://api.geminiai.com/v1/process-image';
const GEMINI_API_KEY = 'AIzaSyBO-mDyaimjeLxZkD0UfR2DCRA4GWXKAvA';  // Substitua pela sua chave da Gemini AI

export const geminiService = {
  processImage: async (imagePath: string) => {
    try {
      const image = fs.createReadStream(imagePath);

      const response = await axios.post(GEMINI_API_URL, image, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': Bearer ${GEMINI_API_KEY},
        },
  },
    );

      return Response.date;
    },
        catch (error) {
      console.error('Erro ao processar imagem:', error);
      throw new Error('Falha ao processar a imagem com a Gemini AI');
    } finally {
      fs.unlinkSync(imagePath); // Remove a imagem após o processamento
    }
  }
};
