// all our apis here
const express=require("express");  // required express package
const app=express();  // express function 
const {getData,insertData,createIndex}=require("./elastic");

app.use(express.json()); // it is required to parse post body data
app.get("/posts",async(req,res)=>{
   // console.log(req.headers.key);
    //console.log(req.body);
    const data=await getData("posts");
    let responseData=data.hits.hits
    for(let i=0;i<responseData.length;i++){
       // console.log(responseData[i]._source.name);
        //console.log(responseData[i]._source.age);
    }
    res.json(responseData);
})

app.post("/posts",async(req,res)=>{

    let result=await insertData(req.body,"posts");

    console.log(req.body);
    res.json(result);

});

// creating index -->
app.post("/createIndex",async (req,res)=>{
    const indexName=req.body.name;
   const result= await createIndex(indexName);

   res.json(result);
})




app.listen(8080,function(){
    console.log("Server running on port ",8080)
})