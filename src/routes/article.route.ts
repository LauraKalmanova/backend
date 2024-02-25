import {Router} from "express";
import * as articleController from '../controllers/article.controller';

const router = Router();

router.post('/', articleController.createArticle);
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.findArticleById)
router.get('/author/:author', articleController.getArticlesByAuthor);
router.put('/', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

export default router;