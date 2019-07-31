let cors = require('cors')
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require("./api-routes")
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
try {
    mongoose.connect('mongodb://127.0.0.1:27017/jointech', { useNewUrlParser: true });
    var db = mongoose.connection;
    console.log("Connection Database sucessfull.")     
} catch (error) {
    if (error)
        console.log("Erro ao se conectar com o banco de dados!");
}
var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes)
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});