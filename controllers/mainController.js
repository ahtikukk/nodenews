exports.getHomePage = function(req,res){
    res.render('index.ejs',{
        title: 'Home page'
    });
}

exports.getHello = (req,res) => {
    res.send('Hello World!');
}