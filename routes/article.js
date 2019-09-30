const Express = require('express');
const Router = Express.Router();
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

module.exports = Router;