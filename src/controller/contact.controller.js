import { Contact } from "../models/contact.model.js";

const contactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    await Contact.create({
      username,
      email,
      message
    });

    return res.status(201).json({
      message: "Form submitted successfully"
    });

  } catch (error) {
    next(error)
  }
}
export { contactForm };