import { Service } from "../models/service.model.js";

const service = async (req, res, next) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ message: "No service found" });
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    // console.log(`Service ${error}`);
    next(error);
  }
};
export { service };
