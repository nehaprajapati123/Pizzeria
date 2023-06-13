const mongodb = require('mongodb');
const express = require('express');
const mongoClient = mongodb.MongoClient;

const dbUrl = 'mongodb://127.0.0.1:27017';
const dbname = 'Pizzeria';

mongoClient.connect(dbUrl,(err,connection)=>{
    if(err){
        console.log("not connected: "+err);

    }
    else{
        databases = connection.db(dbname)
        console.log('database connected');
        databases.collection("ingredients").find({}).toArray((err,data)=>{
            if(err){
                console.log('Throe Error');

            }
            else{
                // for(i = 0;i<data.length;i++){
                //     let INGdata = data[i];
                //     // console.log(data);
                //     console.log(`${INGdata.id},${INGdata.tname},${INGdata.price},${INGdata.image}`);
                //     console.log();
                // }
                console.log(data);
                console.log('Work Done');
            }
        })


    }
})