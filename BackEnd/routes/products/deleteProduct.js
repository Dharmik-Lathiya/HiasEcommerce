const product = require("../../models/products");




const deleteProducts = async (req,res)=>{
    console.log("dfghj");
    

     let data = await product.findByIdAndDelete(req.body.id).them(()=>{
        res.status(200).send("SuccessFully Deleted")
     }).catch((err)=>res.status(400).send(err))
    
}

module.exports = deleteProducts