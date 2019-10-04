const Article = require('./../models/articleModel');
const moment = require('moment');
/*********************
 *  ARTICLE GET
 **********************/

 module.exports.article_get_all = (req,res) => {
    /* 
    //otsime andmebaasist artiklid
    Article.find(null,null,(err, data) =>{
        //console.log(articles);
        // kuvame kliendile artiklite vaate, andes kaasa kõik artiklid objekt muutujana
        res.render('article/all.ejs',{
            title: 'Latest news',
            articles: data,
            moment: moment
        });
    }); 
    */
    //võimalik täita ka viidatud objektid (nt. user)
    Article.find()
    .populate('author')
    .exec((err,data) =>{
        res.render('article/all.ejs',{
            title: 'Latest News',
            articles: data,
            moment: moment
        });      
    });
 }

 module.exports.article_get_single = (req,res) => {
    //otsime andmebaasist ühe kindla artikli objectID alusel
    Article.find({_id : req.params.id})
        .populate('author')
        .exec((err, data) =>{
        //console.log(data);
        //genereerime html dokumendi vahevara abil
        res.render('article/single.ejs',{
            title: data.title,
            articles: data,
            moment: moment
        });
    });
 }