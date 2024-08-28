import Express from 'express';

import readingRoutes from '../src/routers/readingRouter';

export const app = Express();
export const port = 3000;
app.use(Express.json());
app.use('/api', readingRoutes);
app.listen(port, () => { console.log(`Servidor rodando em http://localhost:${port}`); });

function express() {
  throw new Error('Function not implemented.');
}
