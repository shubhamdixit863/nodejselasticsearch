// all our apis here
const express=require("express");  // required express package
const app=express();  // express function 
const cors=require("cors");
const {getData,insertData,createIndex,deleteData}=require("./elastic");
app.use(cors());

app.use(express.json()); // it is required to parse post body data
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
    const indexName=req.body.indexName;
    const id=req.params.id
    try {
        let result=await deleteData(indexName,id);
        res.json(result);

        
    } catch (error) {
        res.json(error);

    }



});

app.delete("/edit-post/:id", async (req, res) => {
    const indexName=req.body.indexName;
    const id=req.params.id
    try {
        let result=await deleteData(indexName,id);
        res.json(result);

        
    } catch (error) {
        res.json(error);

    }



});



app.listen(8080,function(){
    console.log("Server running on port ",8080)
})