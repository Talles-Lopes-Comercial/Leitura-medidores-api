import { Router } from 'express';
import { ReadingController } from '../controller/readingController';
import upload from '../middleware/upload';
const router = Router();

router.get('/reading', ReadingController.getReading);
router.get('/reading/:id', ReadingController.getReadingById);
router.post('/reading', ReadingController.getReading);
router.put('/reading/:id', ReadingController.updateReading);
router.delete('/reading/:id', ReadingController.updateReading);
router.post('./reading/upload')
upload.single('image', ReadingController.processReadingFromImage);
export default router;
