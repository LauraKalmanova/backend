import {ArticleModel} from '../database/models/article.model';

// Create a new article
export const createArticle = async (articleData) => {
    try {
        const newArticle = new ArticleModel(articleData);
        await newArticle.save();
        return newArticle;
    } catch (err) {
        throw new Error('Could not create article');
    }
};

// Get all articles
export const getAllArticles = async (searchWord) => {
    try {
        const articles = await ArticleModel.find({
                $or: [
                    { title: { $regex: searchWord, $options: 'i' } },
                    { content: { $regex: searchWord, $options: 'i' } }
                ]
            }
        );
        return articles;
    } catch (err) {
        throw new Error('Could not fetch articles');
    }
};


// Get articles by author
export const getArticlesByAuthor = async (authorName) => {
    try {
        const article = await ArticleModel.find({ author: authorName });
        if (!article) {
            throw new Error('Articles not found');
        }
        return article;
    } catch (err) {
        throw new Error('Could not fetch article');
    }
};

// Get articles by id
export const findArticleById = async (id) => {
    try {
        const article = await ArticleModel.findById(id, 'category');
        const similarArticles = await ArticleModel.find({
            category: article.category
        })
        return {article, similarArticles};
    } catch (err) {
        throw new Error('Could not fetch article');
    }
};

// Update an existing article
export const updateArticle = async (id, articleData) => {
    try {
        const article = await ArticleModel.findByIdAndUpdate(id, articleData, { new: true });
        if (!article) {
            throw new Error('Article not found');
        }
        return article;
    } catch (err) {
        throw new Error('Could not update article');
    }
};

// Delete an existing article
export const deleteArticle = async (id) => {
    try {
        const article = await ArticleModel.findByIdAndDelete(id);
        if (!article) {
            throw new Error('Article not found');
        }
        return article;
    } catch (err) {
        throw new Error('Could not delete article');
    }
};
