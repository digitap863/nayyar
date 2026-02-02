import { ServiceFive, ServiceFour, ServiceOne, ServiceThree, ServiceTwo } from '../model/serviceModel.mjs';

// =============================================
// SERVICE ONE CONTROLLERS
// =============================================

export const createServiceOne = async (req, res) => {
    try {
        const { name, slug, shortDescription, hasOwnPage, pageContent, order, isActive } = req.body;

        if (!name || !slug) {
            return res.status(400).json({ success: false, message: 'Name and slug are required.' });
        }

        const existingService = await ServiceOne.findOne({ slug });
        if (existingService) {
            return res.status(400).json({ success: false, message: 'A service with this slug already exists.' });
        }

        const newService = new ServiceOne({
            name,
            slug,
            shortDescription,
            hasOwnPage: hasOwnPage === 'true' || hasOwnPage === true,
            pageContent,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        });

        await newService.save();
        res.status(201).json({ success: true, message: 'Service Level 1 created successfully!', data: newService });
    } catch (error) {
        console.error('Error creating Service One:', error);
        res.status(500).json({ success: false, message: 'Error creating service', error: error.message });
    }
};

export const getServiceOnes = async (req, res) => {
    try {
        const services = await ServiceOne.find({}).sort({ order: 1, createdAt: -1 });
        res.status(200).json({ success: true, data: services });
    } catch (error) {
        console.error('Error fetching Service Ones:', error);
        res.status(500).json({ success: false, message: 'Error fetching services', error: error.message });
    }
};

export const getServiceOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await ServiceOne.findById(id);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        console.error('Error fetching Service One:', error);
        res.status(500).json({ success: false, message: 'Error fetching service', error: error.message });
    }
};

export const updateServiceOne = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug, shortDescription, hasOwnPage, pageContent, order, isActive } = req.body;

        const existingService = await ServiceOne.findById(id);
        if (!existingService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        if (slug !== existingService.slug) {
            const slugExists = await ServiceOne.findOne({ slug, _id: { $ne: id } });
            if (slugExists) {
                return res.status(400).json({ success: false, message: 'A service with this slug already exists.' });
            }
        }

        const updatedService = await ServiceOne.findByIdAndUpdate(id, {
            name,
            slug,
            shortDescription,
            hasOwnPage: hasOwnPage === 'true' || hasOwnPage === true,
            pageContent,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        }, { new: true });

        res.status(200).json({ success: true, message: 'Service updated successfully', data: updatedService });
    } catch (error) {
        console.error('Error updating Service One:', error);
        res.status(500).json({ success: false, message: 'Error updating service', error: error.message });
    }
};

export const deleteServiceOne = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if any ServiceTwo references this ServiceOne
        const hasChildren = await ServiceTwo.findOne({ serviceOne: id });
        if (hasChildren) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete: This service has sub-services. Delete them first.'
            });
        }

        const deletedService = await ServiceOne.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, message: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting Service One:', error);
        res.status(500).json({ success: false, message: 'Error deleting service', error: error.message });
    }
};

// =============================================
// SERVICE TWO CONTROLLERS
// =============================================

export const createServiceTwo = async (req, res) => {
    try {
        const { name, slug, serviceOne, hasOwnPage, pageContent, order, isActive } = req.body;

        if (!name || !slug || !serviceOne) {
            return res.status(400).json({ success: false, message: 'Name, slug, and parent service are required.' });
        }

        const parentService = await ServiceOne.findById(serviceOne);
        if (!parentService) {
            return res.status(400).json({ success: false, message: 'Parent service (Level 1) not found.' });
        }

        const newService = new ServiceTwo({
            name,
            slug,
            serviceOne,
            hasOwnPage: hasOwnPage === 'true' || hasOwnPage === true,
            pageContent,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        });

        await newService.save();
        res.status(201).json({ success: true, message: 'Service Level 2 created successfully!', data: newService });
    } catch (error) {
        console.error('Error creating Service Two:', error);
        res.status(500).json({ success: false, message: 'Error creating service', error: error.message });
    }
};

export const getServiceTwos = async (req, res) => {
    try {
        const { serviceOne } = req.query;
        const query = serviceOne ? { serviceOne } : {};
        const services = await ServiceTwo.find(query).populate('serviceOne', 'name slug').sort({ order: 1, createdAt: -1 });
        res.status(200).json({ success: true, data: services });
    } catch (error) {
        console.error('Error fetching Service Twos:', error);
        res.status(500).json({ success: false, message: 'Error fetching services', error: error.message });
    }
};

export const getServiceTwoById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await ServiceTwo.findById(id).populate('serviceOne', 'name slug');
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        console.error('Error fetching Service Two:', error);
        res.status(500).json({ success: false, message: 'Error fetching service', error: error.message });
    }
};

export const updateServiceTwo = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug, serviceOne, hasOwnPage, pageContent, order, isActive } = req.body;

        const existingService = await ServiceTwo.findById(id);
        if (!existingService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        const updatedService = await ServiceTwo.findByIdAndUpdate(id, {
            name,
            slug,
            serviceOne,
            hasOwnPage: hasOwnPage === 'true' || hasOwnPage === true,
            pageContent,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        }, { new: true });

        res.status(200).json({ success: true, message: 'Service updated successfully', data: updatedService });
    } catch (error) {
        console.error('Error updating Service Two:', error);
        res.status(500).json({ success: false, message: 'Error updating service', error: error.message });
    }
};

export const deleteServiceTwo = async (req, res) => {
    try {
        const { id } = req.params;

        const hasChildren = await ServiceThree.findOne({ serviceTwo: id });
        if (hasChildren) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete: This service has sub-services. Delete them first.'
            });
        }

        const deletedService = await ServiceTwo.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, message: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting Service Two:', error);
        res.status(500).json({ success: false, message: 'Error deleting service', error: error.message });
    }
};

// =============================================
// SERVICE THREE CONTROLLERS
// =============================================

export const createServiceThree = async (req, res) => {
    try {
        const { name, slug, serviceOne, serviceTwo, hasOwnPage, pageContent, shortDescription, order, isActive } = req.body;

        if (!name || !slug || !serviceOne || !serviceTwo || !pageContent) {
            return res.status(400).json({ success: false, message: 'Name, slug, parent services, and page content are required.' });
        }

        const imageUrl = req.file ? req.file.path : null;

        const newService = new ServiceThree({
            name,
            slug,
            serviceOne,
            serviceTwo,
            hasOwnPage: hasOwnPage !== 'false' && hasOwnPage !== false,
            pageContent,
            shortDescription,
            featuredImage: imageUrl,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        });

        await newService.save();
        res.status(201).json({ success: true, message: 'Service Level 3 created successfully!', data: newService });
    } catch (error) {
        console.error('Error creating Service Three:', error);
        res.status(500).json({ success: false, message: 'Error creating service', error: error.message });
    }
};

export const getServiceThrees = async (req, res) => {
    try {
        const { serviceOne, serviceTwo } = req.query;
        const query = {};
        if (serviceOne) query.serviceOne = serviceOne;
        if (serviceTwo) query.serviceTwo = serviceTwo;

        const services = await ServiceThree.find(query)
            .populate('serviceOne', 'name slug')
            .populate('serviceTwo', 'name slug')
            .sort({ order: 1, createdAt: -1 });
        res.status(200).json({ success: true, data: services });
    } catch (error) {
        console.error('Error fetching Service Threes:', error);
        res.status(500).json({ success: false, message: 'Error fetching services', error: error.message });
    }
};

export const getServiceThreeById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await ServiceThree.findById(id)
            .populate('serviceOne', 'name slug')
            .populate('serviceTwo', 'name slug');
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        console.error('Error fetching Service Three:', error);
        res.status(500).json({ success: false, message: 'Error fetching service', error: error.message });
    }
};

export const updateServiceThree = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug, serviceOne, serviceTwo, hasOwnPage, pageContent, shortDescription, order, isActive } = req.body;

        const existingService = await ServiceThree.findById(id);
        if (!existingService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        const updatedData = {
            name,
            slug,
            serviceOne,
            serviceTwo,
            hasOwnPage: hasOwnPage !== 'false' && hasOwnPage !== false,
            pageContent,
            shortDescription,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        };

        if (req.file) {
            updatedData.featuredImage = req.file.path;
        }

        const updatedService = await ServiceThree.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json({ success: true, message: 'Service updated successfully', data: updatedService });
    } catch (error) {
        console.error('Error updating Service Three:', error);
        res.status(500).json({ success: false, message: 'Error updating service', error: error.message });
    }
};

export const deleteServiceThree = async (req, res) => {
    try {
        const { id } = req.params;

        const hasChildren = await ServiceFour.findOne({ serviceThree: id });
        if (hasChildren) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete: This service has sub-services. Delete them first.'
            });
        }

        const deletedService = await ServiceThree.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, message: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting Service Three:', error);
        res.status(500).json({ success: false, message: 'Error deleting service', error: error.message });
    }
};

// =============================================
// SERVICE FOUR CONTROLLERS
// =============================================

export const createServiceFour = async (req, res) => {
    try {
        const { name, slug, serviceOne, serviceTwo, serviceThree, hasOwnPage, pageContent, shortDescription, order, isActive } = req.body;

        if (!name || !slug || !serviceOne || !serviceTwo || !serviceThree || !pageContent) {
            return res.status(400).json({ success: false, message: 'Name, slug, parent services, and page content are required.' });
        }

        const imageUrl = req.file ? req.file.path : null;

        const newService = new ServiceFour({
            name,
            slug,
            serviceOne,
            serviceTwo,
            serviceThree,
            hasOwnPage: hasOwnPage !== 'false' && hasOwnPage !== false,
            pageContent,
            shortDescription,
            featuredImage: imageUrl,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        });

        await newService.save();
        res.status(201).json({ success: true, message: 'Service Level 4 created successfully!', data: newService });
    } catch (error) {
        console.error('Error creating Service Four:', error);
        res.status(500).json({ success: false, message: 'Error creating service', error: error.message });
    }
};

export const getServiceFours = async (req, res) => {
    try {
        const { serviceOne, serviceTwo, serviceThree } = req.query;
        const query = {};
        if (serviceOne) query.serviceOne = serviceOne;
        if (serviceTwo) query.serviceTwo = serviceTwo;
        if (serviceThree) query.serviceThree = serviceThree;

        const services = await ServiceFour.find(query)
            .populate('serviceOne', 'name slug')
            .populate('serviceTwo', 'name slug')
            .populate('serviceThree', 'name slug')
            .sort({ order: 1, createdAt: -1 });
        res.status(200).json({ success: true, data: services });
    } catch (error) {
        console.error('Error fetching Service Fours:', error);
        res.status(500).json({ success: false, message: 'Error fetching services', error: error.message });
    }
};

export const getServiceFourById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await ServiceFour.findById(id)
            .populate('serviceOne', 'name slug')
            .populate('serviceTwo', 'name slug')
            .populate('serviceThree', 'name slug');
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        console.error('Error fetching Service Four:', error);
        res.status(500).json({ success: false, message: 'Error fetching service', error: error.message });
    }
};

export const updateServiceFour = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug, serviceOne, serviceTwo, serviceThree, hasOwnPage, pageContent, shortDescription, order, isActive } = req.body;

        const existingService = await ServiceFour.findById(id);
        if (!existingService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        const updatedData = {
            name,
            slug,
            serviceOne,
            serviceTwo,
            serviceThree,
            hasOwnPage: hasOwnPage !== 'false' && hasOwnPage !== false,
            pageContent,
            shortDescription,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        };

        if (req.file) {
            updatedData.featuredImage = req.file.path;
        }

        const updatedService = await ServiceFour.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json({ success: true, message: 'Service updated successfully', data: updatedService });
    } catch (error) {
        console.error('Error updating Service Four:', error);
        res.status(500).json({ success: false, message: 'Error updating service', error: error.message });
    }
};

export const deleteServiceFour = async (req, res) => {
    try {
        const { id } = req.params;

        const hasChildren = await ServiceFive.findOne({ serviceFour: id });
        if (hasChildren) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete: This service has sub-services. Delete them first.'
            });
        }

        const deletedService = await ServiceFour.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, message: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting Service Four:', error);
        res.status(500).json({ success: false, message: 'Error deleting service', error: error.message });
    }
};

// =============================================
// SERVICE FIVE CONTROLLERS
// =============================================

export const createServiceFive = async (req, res) => {
    try {
        const { name, slug, serviceOne, serviceTwo, serviceThree, serviceFour, hasOwnPage, pageContent, shortDescription, order, isActive } = req.body;

        if (!name || !slug || !serviceOne || !serviceTwo || !serviceThree || !serviceFour || !pageContent) {
            return res.status(400).json({ success: false, message: 'Name, slug, all parent services, and page content are required.' });
        }

        const imageUrl = req.file ? req.file.path : null;

        const newService = new ServiceFive({
            name,
            slug,
            serviceOne,
            serviceTwo,
            serviceThree,
            serviceFour,
            hasOwnPage: hasOwnPage !== 'false' && hasOwnPage !== false,
            pageContent,
            shortDescription,
            featuredImage: imageUrl,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        });

        await newService.save();
        res.status(201).json({ success: true, message: 'Service Level 5 created successfully!', data: newService });
    } catch (error) {
        console.error('Error creating Service Five:', error);
        res.status(500).json({ success: false, message: 'Error creating service', error: error.message });
    }
};

export const getServiceFives = async (req, res) => {
    try {
        const { serviceOne, serviceTwo, serviceThree, serviceFour } = req.query;
        const query = {};
        if (serviceOne) query.serviceOne = serviceOne;
        if (serviceTwo) query.serviceTwo = serviceTwo;
        if (serviceThree) query.serviceThree = serviceThree;
        if (serviceFour) query.serviceFour = serviceFour;

        const services = await ServiceFive.find(query)
            .populate('serviceOne', 'name slug')
            .populate('serviceTwo', 'name slug')
            .populate('serviceThree', 'name slug')
            .populate('serviceFour', 'name slug')
            .sort({ order: 1, createdAt: -1 });
        res.status(200).json({ success: true, data: services });
    } catch (error) {
        console.error('Error fetching Service Fives:', error);
        res.status(500).json({ success: false, message: 'Error fetching services', error: error.message });
    }
};

export const getServiceFiveById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await ServiceFive.findById(id)
            .populate('serviceOne', 'name slug')
            .populate('serviceTwo', 'name slug')
            .populate('serviceThree', 'name slug')
            .populate('serviceFour', 'name slug');
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, data: service });
    } catch (error) {
        console.error('Error fetching Service Five:', error);
        res.status(500).json({ success: false, message: 'Error fetching service', error: error.message });
    }
};

export const updateServiceFive = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug, serviceOne, serviceTwo, serviceThree, serviceFour, hasOwnPage, pageContent, shortDescription, order, isActive } = req.body;

        const existingService = await ServiceFive.findById(id);
        if (!existingService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        const updatedData = {
            name,
            slug,
            serviceOne,
            serviceTwo,
            serviceThree,
            serviceFour,
            hasOwnPage: hasOwnPage !== 'false' && hasOwnPage !== false,
            pageContent,
            shortDescription,
            order: order || 0,
            isActive: isActive !== 'false' && isActive !== false
        };

        if (req.file) {
            updatedData.featuredImage = req.file.path;
        }

        const updatedService = await ServiceFive.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json({ success: true, message: 'Service updated successfully', data: updatedService });
    } catch (error) {
        console.error('Error updating Service Five:', error);
        res.status(500).json({ success: false, message: 'Error updating service', error: error.message });
    }
};

export const deleteServiceFive = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await ServiceFive.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        res.status(200).json({ success: true, message: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting Service Five:', error);
        res.status(500).json({ success: false, message: 'Error deleting service', error: error.message });
    }
};
