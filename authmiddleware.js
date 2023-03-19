const secretKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

const authMiddleware=(req,res,next)=>{
    const key=req.headers.token
  //  console.log(key);

    if(key && key==secretKey){
        next();
    }else{
        res.status(401).json({message:"Please provide valid key"})

    }


}

module.exports=authMiddleware;