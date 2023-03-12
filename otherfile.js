
// if you want to make 
function inOtherFile(){
    return new Promise((res,rej)=>{
    // som easync behaviours
      setTimeout(()=>{
        res("done");
        
      },1000)
    })
  }

  // await 
  
  
  async function something(){


    return "data";
    ///
  }

 // await something();
  
  async function Delay(timeinMs){
     return new Promise((res,rej)=>{
      setTimeout(res,timeinMs)
      })
  }
  
  
  async function launchBrowser(data){
  
    let result=await inOtherFile(); // 10 seconds
    await Delay(5000);
  
  
  /*
    return new Promise((res,rej)=>{
  
      /// wrap every thing inside here
  
      // call resolve when you are done with the operation 
  
      
  
      res("its done")
      /*
      setTimeout(()=>{
        res(data);
        
      },1000)
      *
      
    })*/

    
  }

  module.exports=launchBrowser