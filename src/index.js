const express =  require("express");
const bodyParser=require("body-parser");

const {PORT}=require('./config/serverConfig');
const cityRepository = require('./repository/city-repository');
const setupandStartServer= async()=>{

    // create the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));



    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}.`);
        const repo = new cityRepository();
        repo.createCity({name:"New Delhi"});
    })
}

setupandStartServer();