import carSchema from "./models/car.model.js"


export async function addcar(req,res){
    try{
        console.log(req.body);
        // const {...car}= req.body
        const { name,price,email,torque,profile,mileage,brand } = req.body;
        await carSchema 
        .create({name,price,email,torque,profile,mileage,brand})
        .then(()=>{
            res.status(201).send({msg:"successully created"});
        })
        .catch((error)=>{
            res.status(404).send({error:error});
        });
        }catch(error){
            res.status(500).send(error)
        }
}













export async function getcars(req,res){
    try {
        const data=await carSchema.find();
        res.status(200).send(data)
        console.log(data);
    } catch (error) {
        res.status(500).send(error)
    }
}



export async function getdataforedit(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
        const data = await carSchema.findOne({_id:id})
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error)
    }
}



export async function updatecar(req,res) {
    try {
        const {id}=req.params;
        console.log(id);
    const {...car}=req.body
    await carSchema.updateOne({_id:id},{$set:{...car}})
        res.status(201).send({msg:"updated"})
    } catch (error) {
        res.status(400).send(error)
    }
}




export async function deletecar(req, res) {
    try {
        const { id } = req.params;
        console.log(id);    

      await carSchema.deleteOne({ _id: id });
       res.status(200).send({msg:"successfully deleted"})
    } catch (error) {
        console.error(error);
        res.status(400).send({ error});
    }
}


