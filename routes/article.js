const Express = require('express');
const Router = Express.Router();
const Article = require('./../models/articleModel');

//TODO: liiguta funktsioon kontrollerisse
Router.get('/', (req,res) => {
    //otsime andmebaasist artiklid
    let query = Article.find(null,null,(err, articles) =>{
        //console.log(articles);
        //genereerime html dokumendi vahevara abil
        res.render('index.ejs',{
            title: 'Latest news',
            data: articles
        });
    });
    
});

Router.get('/:id',(req,res) => {
    let query = Article.find({_id : req.params.id},null,(err, articles) =>{
        //console.log(articles);
        //genereerime html dokumendi vahevara abil
        res.render('index.ejs',{
            title: 'Latest news',
            data: articles
        });
    });
});

Router.post('/create', async (req,res)=>{
    console.log(req.body.title);
        let newArticle = new Article({
            title : req.body.title,
            content : req.body.content,
            description: req.body.description,
            author : '5d8de60251327120d0052622'
        });
        let result = await newArticle.save();
        res.send(result);
});

module.exports = Router;