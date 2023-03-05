const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const {getData,insertData,createIndex}=require("./elastic");


const rl = readline.createInterface({ input, output });

rl.question('Enter the option   1- createIndex 2- insertData 3- getData  \r\n ', (answer) => {

    switch (Number(answer)) {
        case 1:
         rl.question("Enter the index name \r\n",(indexName)=>{
            createIndex(answer).then(data=>{
                console.log(data);
                rl.close();
             
            }).catch(err=>{
                console.log(err);
            })

         })   

    break;
     
            
         
            case 2:
            
            break;     
    
            case 3:
            
            break;
        default:
            break;
    }







});