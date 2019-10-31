//impordime sisse vahevara
const Express = require('express');
const Dotenv = require('dotenv');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const Ejs = require('ejs');

//impordime routerid
const mainRouter = require('./routes/main');
const articleRouter = require('./routes/article');
const userRouter = require('./routes/user');

//paneme kokk rakenduse
Dotenv.config();
const app = Express();
app.use(Express.static('public'));
app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());

//seadistame frontend mooroti
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', Ejs.renderFile);

//andmebaasi ühendamine


Mongoose.connect(process.env.DBURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 5000
    }, 
    (err)=>
    {
        if(err) console.log(err);
    }
);

//rakendame routerid
app.use('/', mainRouter);
app.use('/articles', articleRouter);
app.use('/users', userRouter);

//käivitame HTTP serveri
app.listen(process.env.PORT, process.env.HOSTNAME, () =>{
    console.log('Server is running at http://'+ process.env.HOSTNAME +':'+ process.env.PORT + '/');
});
