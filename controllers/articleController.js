const Article = require('./../models/articleModel');
/*********************
 *  ARTICLE GET
 **********************/

 module.exports.article_get_all = (req,res) => {
    //otsime andmebaasist artiklid
    let query = Article.find(null,null,(err, data) =>{
        //console.log(articles);
        // kuvame kliendile artiklite vaate, andes kaasa kõik artiklid objekt muutujana
        res.render('article/all.ejs',{
            title: 'Latest news',
            articles: data
        });
    })
 }

 module.exports.article_get_single = (req,res) => {
    //otsime andmebaasist ühe kindla artikli objectID alusel
    let query = Article.find({_id : req.params.id},null,(err, data) =>{
        //console.log(data);
        //genereerime html dokumendi vahevara abil
        res.render('article/single.ejs',{
            title: data.title,
            articles: data
        });
    });
 }