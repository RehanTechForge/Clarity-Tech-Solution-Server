import { Router } from "express";
import { getAllUser, getAllContact, deleteUserById, getUserById, updateUserById, deleteContactById, createService, deleteService, updateServiceById, getServiceById, getContactsById, updateContactById } from "../controller/admin.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();


router.route("/users").get(authMiddleware, adminMiddleware, getAllUser)
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContact)
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById)
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUserById)
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById)
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, deleteContactById)
router.route("/contacts/:id").get(authMiddleware, adminMiddleware, getContactsById)
router.route("/contacts/update/:id").patch(authMiddleware, adminMiddleware, updateContactById)
router.route("/services/create").post(authMiddleware, adminMiddleware, upload.single("image"), createService);
router.route("/services/delete/:id").delete(authMiddleware, adminMiddleware, deleteService);
router.get('/services/:id', authMiddleware, adminMiddleware, getServiceById);
router.route("/services/update/:id").patch(authMiddleware, adminMiddleware, upload.single("image"), updateServiceById);
export default router;