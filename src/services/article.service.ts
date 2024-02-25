import * as articleRepository from '../repository/article.repository';
import * as commentService from '../services/comment.service';

// Create a new article
export const createArticle = async (articleData) => {
    try {
        return await articleRepository.createArticle(articleData);
    } catch (err) {
        throw new Error('Could not create article');
    }
};

// Get all articles
export const getAllArticles = async (searchWord) => {
    try {
        const articles = await articleRepository.getAllArticles(searchWord);
        return articles
    } catch (err) {
        throw new Error('Could not fetch articles');
    }
};

export const findArticleById = async (id) => {
    try {
        const article = await articleRepository.findArticleById(id)
        const comments = await commentService.getComments()
        if(article.article._id.toString() === comments[0].idArticle) {
            return { article, comments };
        } else {
            return article;
        }
    } catch (err) {
        console.log(err)
        throw new Error('Could not fetch article');
    }
}


// Get articles by author
export const getArticlesByAuthor = async (authorName) => {
    try {
        return await articleRepository.getArticlesByAuthor(authorName);
    } catch (err) {
        throw new Error('Could not fetch articles');
    }
};

// Update an existing article
export const updateArticle = async (id, articleData) => {
    try {
        return await articleRepository.updateArticle(id, articleData);
    } catch (err) {
        throw new Error('Could not update article');
    }
};

// Delete an existing article
export const deleteArticle = async (id) => {
    try {
        return await articleRepository.deleteArticle(id);
    } catch (err) {
        throw new Error('Could not delete article');
    }
};
