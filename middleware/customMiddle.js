export function customMiddle(req,res,next){
    const{username}=req.body;
    if(username=="alan"){
        req.user=username
        next();
    }else{
        res.status(400).send("invalid user")
    }
}