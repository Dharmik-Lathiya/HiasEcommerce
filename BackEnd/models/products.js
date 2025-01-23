const mongoose = require('mongoose');
const validator = require('validator');



const ProductsSchema = new mongoose.Schema({


    name: {
        type: String,
        required: [true, 'Name is required'],
      },
      desc:{
        type:String,
        required:[true , 'desciption is required']

      },
      price:{
        type:Number,
        required:[true , 'price is required']
      },
      discount:{
        type:Number
      },
      imgUrl:[{
        type:String,
        required:[true , 'Url is required'],
        validate: { 
            validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
            message: 'Must be a Valid URL' 
          }
      }],
      stock:{
        type:Number
      },
      orders:{
        type:Number
      }
       

});


module.exports = mongoose.model('products', ProductsSchema);
