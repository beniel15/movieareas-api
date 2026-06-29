import express from 'express';
import { MovieIndex, MovieTest, MovieCreate, MovieUpdate, MovieDelete } from '../controllers/movies.controller.js';

const router = express.Router();

router.get('/', MovieIndex);
router.get('/test', MovieTest);
router.post('/', MovieCreate);
router.put('/:id', MovieUpdate);

router.delete('/:id', MovieDelete);

export default router;