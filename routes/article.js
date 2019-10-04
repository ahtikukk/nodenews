const Express = require('express');
const Router = Express.Router();
const articleController = require('../controllers/articleController');
const Article = require('./../models/articleModel');

Router.get('/create', async (req,res)=>{
    console.log(req.body.title);
        let newArticle = new Article({
            title : 'dfsfsdfsdf',
            content : 'sdfsdfsdfsd',
            description: 'aasdsgetrewterytretertertert',
            author : '5d8de60251327120d0052622'
        });
        let result = await newArticle.save();
        res.send(result);
});




Router.get('/:id', articleController.article_get_single);

Router.get('/', articleController.article_get_all);

module.exports = Router;