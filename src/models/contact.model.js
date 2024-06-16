import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);
export { Contact };