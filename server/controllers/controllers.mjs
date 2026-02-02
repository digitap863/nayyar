import "dotenv/config";
import fs from 'fs';
import jwt from "jsonwebtoken";
import path from 'path';
import { fileURLToPath } from 'url';
import Blog from "../model/blog.mjs";
import Gallery from "../model/gallery.mjs";
import Team from "../model/team.mjs";
import Testimonial from '../model/testimonial.mjs';


// Convert import.meta.url to a filename
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = path.dirname(__filename);

const adminCredentials = {
    adminid: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
}

const adminLogin = (req, res) => {
    try {

        const { email, password } = req.body.data;
        console.log(email, password, "!!!!!!!!!!!!!!!!!!!!!!")

        if (email && password) {
            if (adminCredentials.adminid !== email) {
                return res
                    .status(401)
                    .send({ message: "Invalid Credentials", success: false });
            }
            if (adminCredentials.password !== password) {
                return res
                    .status(401)
                    .send({ message: "Invalid Password", success: false });
            }
            const token = jwt.sign(
                { id: adminCredentials.adminid, role: "admin" },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d",
                }
            );

            res
                .status(200)
                .send({ message: "login successful", success: true, token });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message, success: false });
    }
};

const deleteFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(`Error deleting file ${filePath}: ${err.message}`);
            } else {
                resolve(`File deleted successfully: ${filePath}`);
            }
        });
    });
};




const uploadEditorImage = async (req, res) => {
    try {
        // req.file.path contains the URL from Cloudinary (if you've configured multer-storage-cloudinary)
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded.' });
        }

        // Send the public URL of the uploaded image back to the frontend
        res.status(200).json({
            success: true,
            message: 'Image uploaded successfully!',
            url: req.file.path
        });

    } catch (error) {
        console.error('Error uploading image to editor:', error);
        res.status(500).json({ success: false, message: 'Server error during image upload.' });
    }
};

// Testimonial Controllers

const addTestimonial = async (req, res) => {
    try {
        console.log("i am in th post of the testimonialassssssssssssssssssssssssssssssssssssssss")
        // For now, we are only handling text fields. Image can be added later.
        const { name, position, message } = req.body;
        if (!name || !position || !message) {
            return res.status(400).json({ success: false, message: 'Please provide name, position, and message.' });
        }

        console.log(req.file)

        const uploadedImageUrl = req.file.path;
        console.log(uploadedImageUrl)


        const newTestimonial = new Testimonial({
            name,
            position,
            message,
            Image: uploadedImageUrl,
        });
        await newTestimonial.save();
        res.status(201).json({ success: true, message: 'Testimonial added successfully!', data: newTestimonial });
    } catch (error) {
        console.error('Error adding testimonial:', error);
        res.status(500).json({ success: false, message: 'Error adding testimonial', error });
    }
};

const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: testimonials });
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        res.status(500).json({ success: false, message: 'Error fetching testimonials', error });
    }
};

const getTestimonialsById = async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Testimonial.findOne({ _id: id });

        return res.status(200).send({ data: service, success: true });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message, success: false });
    }
}


const getTestimonialById = async (req, res) => {
    try {
        const { id } = req.params;
        const testimonial = await Testimonial.findById(id);
        if (!testimonial) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }
        res.status(200).json({ success: true, data: testimonial });
    } catch (error) {
        console.error('Error fetching testimonial:', error);
        res.status(500).json({ success: false, message: 'Error fetching testimonial', error });
    }
};

const updateTestimonial = async (req, res) => {
    try {
        const { id } = req.params;

        const existingTestimonial = await Testimonial.findById(id);
        if (!existingTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        const { name, position, message } = req.body;

        console.log(position, "position in updateTestimonial");

        const updatedData = {
            name,
            position,
            message,
        };

        if (req.file) {
            updatedData.Image = req.file.path; // req.file.path will be the Cloudinary URL
        } else {
            updatedData.Image = existingTestimonial.Image;
        }

        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Testimonial updated successfully',
            testimonial: updatedTestimonial,
        });
    } catch (error) {
        console.error('Error updating Testimonial:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};

const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

        if (!deletedTestimonial) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }

        res.status(200).json({ success: true, message: 'Testimonial deleted successfully' });
    } catch (error) {
        console.error('Error deleting testimonial:', error);
        res.status(500).json({ success: false, message: 'Error deleting testimonial', error });
    }
};



const getGallerys = async (req, res) => {
    try {
        const gallerys = await Gallery.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: gallerys });
    } catch (error) {
        console.error('Error fetching gallerys:', error);
        res.status(500).json({ success: false, message: 'Error fetching gallerys', error });
    }
};

const addGallery = async (req, res) => {
    try {
        console.log("i am in th post of the galleryassssssssssssssssssssssssssssssssssssssss")
        // For now, we are only handling text fields. Image can be added later.
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ success: false, message: 'Please provide title, position, and message.' });
        }

        console.log(req.file)

        const uploadedImageUrl = req.file.path;
        console.log(uploadedImageUrl)


        const newgallery = new Gallery({
            title,
            Image: uploadedImageUrl,
        });
        await newgallery.save();
        res.status(201).json({ success: true, message: 'gallery added successfully!', data: newgallery });
    } catch (error) {
        console.error('Error adding gallery:', error);
        res.status(500).json({ success: false, message: 'Error adding gallery', error });
    }
}

const deleteGallery = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedGallery = await Gallery.findByIdAndDelete(id);

        if (!deletedGallery) {
            return res.status(404).json({ success: false, message: 'Gallery not found' });
        }

        res.status(200).json({ success: true, message: 'Gallery deleted successfully' });
    } catch (error) {
        console.error('Error deleting Gallery:', error);
        res.status(500).json({ success: false, message: 'Error deleting Gallery', error });
    }
}


// Blog Controllers

const addBlog = async (req, res) => {
    try {
        console.log("Adding new blog post");
        const { heading, subHeading, description, authorName, authorPosition } = req.body;

        if (!heading || !subHeading || !description || !authorName || !authorPosition) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
        }

        console.log(req.files);

        // Handle multiple file uploads
        const blogImageUrl = req.files['Image'] ? req.files['Image'][0].path : null;
        const authorImageUrl = req.files['authorImage'] ? req.files['authorImage'][0].path : null;

        if (!blogImageUrl || !authorImageUrl) {
            return res.status(400).json({ success: false, message: 'Please upload both blog image and author image.' });
        }

        const newBlog = new Blog({
            heading,
            subHeading,
            description,
            Image: blogImageUrl,
            authorName,
            authorImage: authorImageUrl,
            authorPosition
        });

        await newBlog.save();
        res.status(201).json({ success: true, message: 'Blog added successfully!', data: newBlog });
    } catch (error) {
        console.error('Error adding blog:', error);
        res.status(500).json({ success: false, message: 'Error adding blog', error });
    }
};

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: blogs });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).json({ success: false, message: 'Error fetching blogs', error });
    }
};

const getBlogById = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findOne({ _id: id });

        if (!blog) {
            return res.status(404).send({ message: 'Blog not found', success: false });
        }

        return res.status(200).send({ data: blog, success: true });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message, success: false });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const existingBlog = await Blog.findById(id);
        if (!existingBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const { heading, subHeading, description, authorName, authorPosition } = req.body;

        const updatedData = {
            heading,
            subHeading,
            description,
            authorName,
            authorPosition,
        };

        // Handle blog image update
        if (req.files && req.files['Image']) {
            updatedData.Image = req.files['Image'][0].path;
        } else {
            updatedData.Image = existingBlog.Image;
        }

        // Handle author image update
        if (req.files && req.files['authorImage']) {
            updatedData.authorImage = req.files['authorImage'][0].path;
        } else {
            updatedData.authorImage = existingBlog.authorImage;
        }

        const updatedBlog = await Blog.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Blog updated successfully',
            blog: updatedBlog,
        });
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({ success: false, message: 'Blog not found' });
        }

        res.status(200).json({ success: true, message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).json({ success: false, message: 'Error deleting blog', error });
    }
};


// Team Controllers

const addTeam = async (req, res) => {
    try {
        console.log("Adding new team member");
        const { name, position, linkedinlink } = req.body;

        if (!name || !position || !linkedinlink) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
        }

        console.log(req.file);

        const teamImageUrl = req.file ? req.file.path : null;

        if (!teamImageUrl) {
            return res.status(400).json({ success: false, message: 'Please upload team member image.' });
        }

        const newTeam = new Team({
            name,
            position,
            Image: teamImageUrl,
            linkedinlink
        });

        await newTeam.save();
        res.status(201).json({ success: true, message: 'Team member added successfully!', data: newTeam });
    } catch (error) {
        console.error('Error adding team member:', error);
        res.status(500).json({ success: false, message: 'Error adding team member', error });
    }
};

const getTeams = async (req, res) => {
    try {
        const teams = await Team.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: teams });
    } catch (error) {
        console.error('Error fetching team members:', error);
        res.status(500).json({ success: false, message: 'Error fetching team members', error });
    }
};

const getTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.findOne({ _id: id });

        if (!team) {
            return res.status(404).send({ message: 'Team member not found', success: false });
        }

        return res.status(200).send({ data: team, success: true });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message, success: false });
    }
};

const updateTeam = async (req, res) => {
    try {
        const { id } = req.params;

        const existingTeam = await Team.findById(id);
        if (!existingTeam) {
            return res.status(404).json({ message: 'Team member not found' });
        }

        const { name, position, linkedinlink } = req.body;

        const updatedData = {
            name,
            position,
            linkedinlink,
        };

        // Handle image update
        if (req.file) {
            updatedData.Image = req.file.path;
        } else {
            updatedData.Image = existingTeam.Image;
        }

        const updatedTeam = await Team.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedTeam) {
            return res.status(404).json({ message: 'Team member not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Team member updated successfully',
            team: updatedTeam,
        });
    } catch (error) {
        console.error('Error updating team member:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};

const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTeam = await Team.findByIdAndDelete(id);

        if (!deletedTeam) {
            return res.status(404).json({ success: false, message: 'Team member not found' });
        }

        res.status(200).json({ success: true, message: 'Team member deleted successfully' });
    } catch (error) {
        console.error('Error deleting team member:', error);
        res.status(500).json({ success: false, message: 'Error deleting team member', error });
    }
};


export {
    addBlog, addGallery, addTeam, addTestimonial, adminLogin,
    deleteBlog, deleteGallery, deleteTeam, deleteTestimonial,
    getBlogById, getBlogs, getGallerys, getTeamById, getTeams,
    getTestimonialById, getTestimonials, getTestimonialsById,
    updateBlog, updateTeam, updateTestimonial, uploadEditorImage
};

