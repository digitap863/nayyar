import express from 'express';
import { addBlog, addGallery, addTeam, addTestimonial, adminLogin, createService, deleteBlog, deleteGallery, deleteService, deleteTeam, deleteTestimonial, getBlogById, getBlogs, getGallerys, getServices, getTeamById, getTeams, getTestimonials, getTestimonialsById, singleService, singleServiceDesc, singleServiceDescription, singleServiceNames, updateBlog, updateService, updateTeam, updateTestimonial, uploadEditorImage } from '../controllers/controllers.mjs';
import { upload } from '../helpers/multer.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';



const router = express.Router();


console.log("inside the route")
router.post("/login", adminLogin)

router.post("/add-service", authMiddleware,upload.single('Image'), createService)
router.get("/services", getServices)
router.get("/service/:id", singleService)
router.get("/service-desc/:id", singleServiceDesc)
router.get("/service-description-one/:id", singleServiceDescription)
router.get("/servicenames", singleServiceNames)
router.delete("/service/:id", authMiddleware, deleteService)
router.put("/service/:id",authMiddleware, upload.single('Image'), updateService);


//storin the imahe in tot the cloudinary..
router.post('/upload-editor-image', upload.single('image'), uploadEditorImage);

router.get("/testimonials",getTestimonials)
router.get("/testimonials/:id",getTestimonialsById)
router.post("/testimonials", authMiddleware,upload.single('Image'), addTestimonial)
router.put("/testimonials/:id",upload.single('Image'),updateTestimonial)
router.delete("/testimonials/:id",deleteTestimonial)


router.get("/gallery",getGallerys)
router.post("/gallery", authMiddleware,upload.single('Image'), addGallery)
router.delete("/gallery/:id",deleteGallery)

// Blog routes
router.get("/blogs", getBlogs)
router.get("/blogs/:id", getBlogById)
router.post("/blogs", authMiddleware, upload.fields([
    { name: 'Image', maxCount: 1 },
    { name: 'authorImage', maxCount: 1 }
]), addBlog)
router.put("/blogs/:id", authMiddleware, upload.fields([
    { name: 'Image', maxCount: 1 },
    { name: 'authorImage', maxCount: 1 }
]), updateBlog)
router.delete("/blogs/:id", authMiddleware, deleteBlog)

// Team routes
router.get("/teams", getTeams)
router.get("/teams/:id", getTeamById)
router.post("/teams", authMiddleware, upload.single('Image'), addTeam)
router.put("/teams/:id", authMiddleware, upload.single('Image'), updateTeam)
router.delete("/teams/:id", authMiddleware, deleteTeam)

export default router;
