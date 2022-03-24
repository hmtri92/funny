import express from 'express';
import site from '../app/controllers/SiteController.mjs';

const router = express.Router();

router.use('/', site.index)

export default router;