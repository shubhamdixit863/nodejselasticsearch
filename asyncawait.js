const launchBrowser=require("./otherfile");

let obj={
  "isbn": "123-456-222",  
 "author": 
    {
      "lastname": "Doe",
      "firstname": "Jane"
    },
"editor": 
    {
      "lastname": "Smith",
      "firstname": "Jane"
    },
  "title": "The Ultimate Database Study Guide",  
  "category": ["Non-Fiction", "Technology"]
 }





async function Allioperations(){
  
}

async function MyConsole(data){
   return new Promise((res,rej)=>{
     setTimeout(()=>{
         res(data);
     },1000)
  
  
    })
}


async function iterateAndRun(){
  const t0 = performance.now();
var j=0;
  for( key in obj ){
    console.log(1);
   j= await launchBrowser(key);
   // await Delay(2000);  // you can introduce delay of 
   //let d= await  MyConsole("some data");
    //console.log(d);

    //const t1 = performance.now();
    //console.log(data);

//console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
console.log(1);
  }
/// d is not accesible here

console.log("J",j);
  
}
iterateAndRun();