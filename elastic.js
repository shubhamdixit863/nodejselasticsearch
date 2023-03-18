require('dotenv').config({ })
const { Client } = require('@elastic/elasticsearch')
////console.log(process.env.ELASTIC_CLOUD_ID)
const client = new Client({
    cloud: {
      id: process.env.ELASTIC_CLOUD_ID,
    },
    auth: {
      username: process.env.ELASTIC_USERNAME,
      password: process.env.ELASTIC_PASSWORD,
    },
  })


// Arrow function syntax to create index in elastic search
  const createIndex=(indexName)=>{
    const pro= new Promise((resolve,reject)=>{
      client.indices.create({ index: indexName }).then(data=>{
       // //console.log(data); // resolved result
    
       resolve(data);
      }).catch(err=>{
        ////console.log(err);
        reject(err);
      })

    })
  return pro;

}

// Async await
const createIndexAsyncAwait=async (indexName)=>{

    return  await client.indices.create({ index: indexName })

}

const insertData=async (data,indexName)=>{

  //creating the document inside elasticearch

 return await client.index({
    index: indexName,
    document: data,
  });



}
  

const getData=async (indexName)=>{

  //creating the document inside elasticearch
 const result = await client.search({
    index: indexName,
    query: { match_all: {} },
  });
//console.log(result);
return result;

}


const deleteData=async (indexName,id)=>{
  const result = await client.delete({
    index: indexName,
    id: id,
  });

return result;
}

const updateData=async (indexName,id)=>{
  const result = await client.update({
    index: indexName,
    id: id,
    
  });

return result;
}



module.exports={
  createIndex,
  createIndexAsyncAwait,
  insertData,
  getData,
  deleteData
  

}