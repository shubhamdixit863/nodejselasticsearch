const {createIndex,createIndexAsyncAwait,insertData} =require("./elastic");

/*
createIndexAsyncAwait("posts").then(data=>{
    //console.log(data);
}).catch(err=>{
    //console.log(err);
})
*/
 //createIndexAsyncAwait("posts").then

 // Query the data --GET /posts/_search

 insertData({name:"john",age:20,city:"New Delhi"},"posts").then(data=>{
    //console.log(data);
}).catch(err=>{
    //console.log(err);
})