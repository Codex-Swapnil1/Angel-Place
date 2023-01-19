var jwt = require('jsonwebtoken');
const authenticator=(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1];
    try{
        if(token){
            jwt.verify(token, 'shhhhh', function(err, decoded) {
                if(decoded){
                    const userID=decoded.userID;
                    console.log(userID);
                    req.body.userID=userID;
                   next();
                } else{
                    res.send({"msg":"pls login "});
                }
              });
        }else{
            res.send({"msg":"pls login"})
        }
      
    }catch(err){
        console.log(err);
        res.send({"msg":"something went wrong,try again later"})
    }
}
module.exports={authenticator}