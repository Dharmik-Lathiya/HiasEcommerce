const product = require("../../models/products");




const deleteProducts = async (req,res)=>{
    

     let data = await product.findByIdAndDelete(req.body.id).then(()=>{
        res.status(200).send({msg:"SuccessFully Deleted"})
     }).catch((err)=>res.status(400).send(err))
    
}

module.exports = deleteProducts