//impordime sisse vahevara
const Express = require('express');
//defineerime serveri/rakenduse parameetrid
const hostname = '127.0.0.1';
const port = 3000;

//paneme kokk rakenduse
const app = Express();

app.get('/', function(req,res){
    res.send('Tere');
});

app.get('/hello', function(req,res){
    res.send('Hello World!');
});

//käivitame HTTP serveri
app.listen(port, hostname, () =>{
    console.log('Server is running at http://'+ hostname +':'+ port + '/');
});