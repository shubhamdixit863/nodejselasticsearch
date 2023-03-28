// all our apis here
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('certs/key.pem', 'utf8');
var certificate = fs.readFileSync('certs/server.crt', 'utf8');
const express=require("express");  // required express package
const app=express();  // express function 
const cors=require("cors");
const authMiddleware=require("./authmiddleware");
const {getData,insertData,createIndex,deleteData,updateData}=require("./elastic");
app.use(cors());
var credentials = {key: privateKey, cert: certificate};

app.use(express.json()); // it is required to parse post body data
const secretKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

app.post("/apiconnector",(req,res)=>{
    console.log(req.body);

    res.json({message:"hi"})
})

app.post("/auth/login",(req,res)=>{
const username=req.body.username;
const password=req.body.password;

if(username=="test" && password=="test"){

    res.json({
        token:secretKey
    })
}else{
    res.status(401).json({
        message:"Wrong username password"
    })
}
  


})

app.use(authMiddleware);
app.get("/get/:indexName",async(req,res)=>{
    console.log("Api called");
   // //console.log(req.headers.key);
    ////console.log(req.body);
    const name=req.params.indexName
    if(name.length>0){
        const data=await getData(name);
    let responseData=data.hits.hits
    for(let i=0;i<responseData.length;i++){
       // //console.log(responseData[i]._source.name);
        ////console.log(responseData[i]._source.age);
    }
    res.json(responseData);
    }else{
        res.json({
            message:"Index name is required"
        });
    }
   
})

app.post("/add/:indexName",async(req,res)=>{
    const name=req.params.indexName
    if(name.length>0){
        let result=await insertData(req.body,name);

        // //console.log(req.body);
         res.json(result);
    }else{
        res.json({
            message:"Index name is required"
        });
    }

  

});

// creating index -->
app.post("/createIndex",async (req,res)=>{
    const indexName=req.body.name;
    try {
        const result= await createIndex(indexName);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
   


})


app.delete("/remove-post/:id", async (req, res) => {
    const indexName=req.body.name;
    const id=req.params.id
    try {
        let result=await deleteData(indexName,id);
        res.json(result);

        
    } catch (error) {
        res.json(error);

    }



});

app.put("/edit-post/:id", async (req, res) => {
    const indexName=req.body.indexName;
    const id=req.params.id
    const body=req.body;
    console.log(id);
    try {
        let result=await updateData(indexName,id,body);
        res.json(result);

        
    } catch (error) {
        res.json(error);

    }



});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
/*

app.listen(8080,function(){
    console.log("Server running on port ",8080)
})
*/