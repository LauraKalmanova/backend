import {Router} from "express";
import * as commentController from '../controllers/comment.controller';
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();

router.post('/:idUser/:idArticle', commentController.createComment)
router.get('/', commentController.getComments)

export default router;