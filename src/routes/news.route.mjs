import express from 'express';
import newsController from '../app/controllers/NewsController.mjs';

const router = express.Router();

router.use('/', newsController.index);

export default router;
