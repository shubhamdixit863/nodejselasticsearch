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
  
  
  function inOtherFile(){
    return new Promise((res,rej)=>{
    // som easync behaviours
      setTimeout(()=>{
        res("done");
        
      },1000)
    })
  }
  
  
  
  async function Delay(timeinMs){
     return new Promise((res,rej)=>{
      setTimeout(res,timeinMs)
      })
  }
  
  
  async function launchBrowser(data){
  
    let result=await inOtherFile(); // 10 seconds
    await Delay(5000);
  
  
  
    return new Promise((res,rej)=>{
  
      /// wrap every thing inside here
  
      // call resolve when you are done with the operation 
  
      
  
      res("its done")
      /*
      setTimeout(()=>{
        res(data);
        
      },1000)
      */
      
    })
    
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
  
    for( key in obj ){
     let data= await launchBrowser(key);
     // await Delay(2000);  // you can introduce delay of 
     //let d= await  MyConsole("some data");
      //console.log(d);
  
      //const t1 = performance.now();
      console.log(data);
  
  //console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
  
    }
  
    
  }
  iterateAndRun();