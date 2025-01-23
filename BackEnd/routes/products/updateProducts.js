const product = require("../../models/products");




const updateProducts = async (req,res)=>{
    console.log("dfghj");
    


     let data = await product.findByIdAndUpdate(req.body.id,req.body.update).then(()=>{
        res.status(200).send("SuccessFully updated")
     }).catch((err)=>res.status(400).send(err))
    
}

module.exports = updateProducts