import {Router} from "express";
import userRoutes from "./user.route"
import authRoutes from "./auth.route"
import articleRoutes from "./article.route"
import commentRoute from "./comment.route";
const router = Router();

router.use('/vi/user', userRoutes);
router.use('/vi/auth', authRoutes);
router.use('/vi/article', articleRoutes);
router.use('/vi/comment', commentRoute);

export default router;