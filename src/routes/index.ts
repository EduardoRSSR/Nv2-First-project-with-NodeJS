// src/routes/index.ts
import { Router } from 'express';

import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
// vai direcionar todas as requisições iniciadas por /appointments para o appointmentsRouter

export default routes;
