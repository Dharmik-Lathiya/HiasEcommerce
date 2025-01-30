const OrderSchema = require("../../models/ordes");
const productSchema = require("../../models/products");

const createOrders = async (req,res)=>  {

        console.log(req.body);
        
        let total = 0;
        let i = 0;
        
        
        let data = await productSchema.find({_id:{$in:req.body.products}})
        
            
        data.forEach(node =>{
             total += (node.price * req.body.quantity[i])
            i++;
        })

        const newOrder = new OrderSchema({...req.body,total:total})
        
        newOrder.save().then(()=>{
            res.status(200).send({
                success:true,
                message:"done"
            })
            
        }).catch((err) => {
            res.status(400).send({success:false,message:err})
        });

}

module.exports = createOrders;