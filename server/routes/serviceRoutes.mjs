import express from 'express';
import {
    // Service Five
    createServiceFive,
    // Service Four
    createServiceFour,
    // Service One
    createServiceOne,
    // Service Three
    createServiceThree,
    // Service Two
    createServiceTwo,
    deleteServiceFive,
    deleteServiceFour,
    deleteServiceOne,
    deleteServiceThree,
    deleteServiceTwo,
    getServiceFiveById,
    getServiceFives,
    getServiceFourById,
    getServiceFours,
    getServiceOneById,
    getServiceOnes,
    getServiceThreeById,
    getServiceThrees,
    getServiceTwoById,
    getServiceTwos,
    updateServiceFive,
    updateServiceFour,
    updateServiceOne,
    updateServiceThree,
    updateServiceTwo
} from '../controllers/serviceController.mjs';
import { upload } from '../helpers/multer.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';

const router = express.Router();

// =============================================
// SERVICE LEVEL ONE ROUTES (Categories)
// =============================================
router.get('/service-one', getServiceOnes);
router.get('/service-one/:id', getServiceOneById);
router.post('/service-one', authMiddleware, upload.none(), createServiceOne);
router.put('/service-one/:id', authMiddleware, upload.none(), updateServiceOne);
router.delete('/service-one/:id', authMiddleware, deleteServiceOne);

// =============================================
// SERVICE LEVEL TWO ROUTES (Sub-categories)
// =============================================
router.get('/service-two', getServiceTwos);
router.get('/service-two/:id', getServiceTwoById);
router.post('/service-two', authMiddleware, upload.none(), createServiceTwo);
router.put('/service-two/:id', authMiddleware, upload.none(), updateServiceTwo);
router.delete('/service-two/:id', authMiddleware, deleteServiceTwo);

// =============================================
// SERVICE LEVEL THREE ROUTES (With Image)
// =============================================
router.get('/service-three', getServiceThrees);
router.get('/service-three/:id', getServiceThreeById);
router.post('/service-three', authMiddleware, upload.single('featuredImage'), createServiceThree);
router.put('/service-three/:id', authMiddleware, upload.single('featuredImage'), updateServiceThree);
router.delete('/service-three/:id', authMiddleware, deleteServiceThree);

// =============================================
// SERVICE LEVEL FOUR ROUTES (With Image)
// =============================================
router.get('/service-four', getServiceFours);
router.get('/service-four/:id', getServiceFourById);
router.post('/service-four', authMiddleware, upload.single('featuredImage'), createServiceFour);
router.put('/service-four/:id', authMiddleware, upload.single('featuredImage'), updateServiceFour);
router.delete('/service-four/:id', authMiddleware, deleteServiceFour);

// =============================================
// SERVICE LEVEL FIVE ROUTES (Main Services with Image)
// =============================================
router.get('/service-five', getServiceFives);
router.get('/service-five/:id', getServiceFiveById);
router.post('/service-five', authMiddleware, upload.single('featuredImage'), createServiceFive);
router.put('/service-five/:id', authMiddleware, upload.single('featuredImage'), updateServiceFive);
router.delete('/service-five/:id', authMiddleware, deleteServiceFive);

export default router;
