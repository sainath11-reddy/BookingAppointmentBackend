const express = require('express');
const sequelize = require('./util/database')
var cors = require("cors")
const bodyParser = require('body-parser');
const app = express();

const routes =require('./routes/CRUD');
app.use(cors());
app.use(bodyParser.json({extended : false}))
app.use('/users', routes);

sequelize.sync().then(result=>{
    console.log('sequelize synced');
    app.listen(4000);
}).catch(err=>console.log(err));