const Express = require('express');
const Router = Express.Router();
const Controller = require('./../controllers/mainController');

Router.get('/', Controller.getHomePage);

Router.get('/hello', Controller.getHello);

module.exports = Router;