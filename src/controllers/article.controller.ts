import * as articleService from "../services/article.service"
import {Request, Response} from "express";
import {isAdmin} from "../middlewares/article.middleware";

// Create a new article
export const createArticle = [isAdmin, async (req, res) => {
    try {
        const article = await articleService.createArticle(req.body);
        res.status(201).json(article);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}];

// Get all articles
export const getAllArticles = async (req, res) => {
    const searchWord = req.query.word || ''

    try {
        const articles = await articleService.getAllArticles(searchWord);
            res.json(articles);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const findArticleById = async (req: Request, res: Response)=> {
    const id = req.params.id

    try {
        const article = await articleService.findArticleById(id)
        res.send(article)
    } catch (e) {
        res.status(500).send("No articles with this id")
    }
}

// Get articles by author
export const getArticlesByAuthor = async (req, res) => {
    try {
        const authorName = req.params.author;
        const articles = await articleService.getArticlesByAuthor(authorName);
        res.json(articles);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

// Update an existing article
export const updateArticle = [isAdmin, async (req, res) => {
    const myObject = req.body
    const id = myObject._id
    delete myObject._id
    const update = myObject
    try {
        const article = await articleService.updateArticle(id, update);
        res.send(article);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}];

// Delete an existing article
export const deleteArticle = [isAdmin, async (req, res) => {
    try {
        const article = await articleService.deleteArticle(req.params.id);
        res.json(article);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}];

