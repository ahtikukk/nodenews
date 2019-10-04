//impordime sisse vahevara
const Express = require('express');
const Dotenv = require('dotenv');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');
const Ejs = require('ejs');

Dotenv.config();
//impordime routerid
const mainRouter = require('./routes/main');
const articleRouter = require('./routes/article');
const userRouter = require('./routes/user');
//paneme kokk rakenduse
const app = Express();
app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());
//seadistame frontend mooroti
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', Ejs.renderFile);

//andmebaasi ühendamine
const uri = "mongodb+srv://"+ process.env.DBUSER +":"+ process.env.DBPASSWORD +"@cluster0-w6vf1.gcp.mongodb.net/nodenews?retryWrites=true&w=majority";
Mongoose.connect(uri, {useNewUrlParser: true});


app.use('/', mainRouter);
app.use('/articles', articleRouter);
app.use('/users', userRouter);

//käivitame HTTP serveri
app.listen(process.env.PORT, process.env.HOSTNAME, () =>{
    console.log('Server is running at http://'+ process.env.HOSTNAME +':'+ process.env.PORT + '/');
});
