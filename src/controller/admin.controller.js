import { Contact } from '../models/contact.model.js';
import { Service } from '../models/service.model.js';
import { User } from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js';
// import * as logger from 'morgan';
const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    return res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}
const getAllContact = async (req, res) => {
  try {
    const users = await Contact.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No Contact found' });
    }
    return res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    next(error)
  }
}

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updateUser = await User.updateOne({ _id: id }, {
      $set: updatedUserData
    })
    return res.status(200).json(updateUser)
  } catch (error) {
    next(error)
  }
}

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error)
  }
}
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    next(error)
  }
}
const createService = async (req, res) => {
  try {
    const { service, description, price, provider } = req.body;

    // console.log("FIle me ha", req.file);
    const imageLocalPath = req.file.path
    // console.log("Image Path", imageLocalPath);
    if (!imageLocalPath) {
      return res.status(400).json({ message: 'Please Upload Image' })
    }
    const image = await uploadOnCloudinary(imageLocalPath);
    if (!image) {
      return res.status(400).json({ message: 'Image not uploaded' })
    }

    // req.file?.image
    const newService = await Service.create({ service, description, price, provider, image: image.url });
    return res.status(201).json(newService);
  } catch (error) {
    next(error)
    // console.error(error);
  }
}
const deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    await Service.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    next(error)
  }
}
const updateServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const { service, description, price, provider } = req.body;
    let updatedData = { service, description, price, provider };

    // Check if there is an image file to upload
    if (req.file) {
      const imageLocalPath = req.file.path;
      const image = await uploadOnCloudinary(imageLocalPath);
      if (!image) {
        return res.status(400).json({ message: 'Image not uploaded' });
      }
      updatedData.image = image.url;
    }

    const updatedService = await Service.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found' });
    }

    return res.status(200).json(updatedService);
  } catch (error) {
    // console.error(error);
    // return res.status(500).json({ message: 'Internal Server Error' });
    next(error)
  }
}
const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json(service);
  } catch (error) {
    // console.error('Error fetching service:', error);
    next(error);
    // res.status(500).json({ message: 'Internal Server Error' });
  }
};
const getContactsById = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    // console.error('Error fetching contact:', error);
    // res.status(500).json({ message: 'Internal Server Error' });
    next(error);
  }
};
const updateContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedContactData = req.body;
    const updatedContact = await Contact.updateOne({ _id: id }, {
      $set: updatedContactData
    })
    return res.status(200).json(updatedContact)
  } catch (error) {
    next(error)
  }
}
export { getAllUser, getAllContact, deleteUserById, getUserById, updateUserById, deleteContactById, createService, deleteService, updateServiceById, getServiceById, getContactsById, updateContactById }