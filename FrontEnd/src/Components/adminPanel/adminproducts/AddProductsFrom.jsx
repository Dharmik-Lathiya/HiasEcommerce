import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function AddProductsFrom(props) {


  const {prodid} = useParams()
    const [formData, setFormData] = useState({
        name: "",
        desc: "",
        imgUrl: [],
        category: "",
        price: "",
        stock: "",
      });
    
      let imgUrl = formData.imgUrl;
      
      const [flag,setFlag] = useState(false);

      
      const  handleChange =  (e) => {
        const { name, value, files } = e.target;  
        

        if(files){
          for(let file of files){




            const reader = new FileReader();
             reader.onload = (file) => {
              imgUrl.push(reader.result);
              setFlag(!flag)
            }
             reader.readAsDataURL(file);
            
        }
        }
            setFormData({
                ...formData,
                [name]:files ? imgUrl :value
            });
        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        
        fetch("http://localhost:3000/admin/addProducts",{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(formData)
        }).then((res)=>{
            res.json().then(data =>{
              console.log(data);
              
            })
        }).catch(err => {console.log(err);
        })

      };

      useEffect(()=>{

        
        document.getElementById('imgset').innerHTML = " ";
        imgUrl.forEach((url) =>{
          
          let img = document.createElement('img');
          img.width = 100
          img.height = 100
          img.src = url
          document.getElementById('imgset').appendChild(img);
      })
      

      if(prodid){
        fetch("http://localhost:3000/admin/allProducts", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({filter:{_id:prodid}})
        }).then(res => {
          res.json().then(data => {
            console.log(data);
            setFormData(...data)
    
          })
        })
          imgUrl = formData.imgUrl;
        document.getElementById('imgset').innerHTML = " ";
        imgUrl.forEach((url) =>{
          
          let img = document.createElement('img');
          img.width = 100
          img.height = 100
          img.src = url
          document.getElementById('imgset').appendChild(img);
      })

         
      }
      },[flag])

    
      return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-2xl">
          <h2 className="text-xl font-bold mb-4 text-center">Add Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter product name"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium">Description</label>
              <textarea
                id="description"
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter product description"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium">Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
                multiple
              />
            <div id='imgset'>
             
        </div>
                            
                            
                    
            
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
                required
              >
                <option value="">Select a category</option>
                <option value="Menswear">Men's wear</option>
                <option value="Womenswear">Women's wear</option>
                <option value="kidwear">kid's wear</option>
                <option value="sports">Sports wear</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter price"
                required
              />
            </div>
            <div>
              <label htmlFor="stock" className="block text-sm font-medium">Stock</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
                placeholder="Enter stock quantity"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Add Product
            </button>
          </form>
        </div>
      )
}
