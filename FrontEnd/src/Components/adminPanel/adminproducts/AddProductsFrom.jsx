import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AddProductsForm() {
  const { prodid } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    imgUrl: [],
    category: "",
    price: "",
    stock: "",
  });
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const fileArray = Array.from(files);
      const imageUrls = fileArray.map(file => URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, imgUrl: [...prev.imgUrl, ...imageUrls] }));
      setFlag(!flag);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = prodid ? "http://localhost:3000/admin/updateProducts" : "http://localhost:3000/admin/addProducts";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prodid ? { update: formData } : formData)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  const deleteProduct = () => {
    fetch("http://localhost:3000/admin/deleteProducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: prodid })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (prodid) {
      fetch("http://localhost:3000/admin/allProducts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filter: { _id: prodid } })
      }).then(res => res.json())
        .then(data => setFormData(data[0]))
        .catch(err => console.log(err));
    }
  }, [prodid]);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg w-[90%]">
      <h2 className="text-2xl font-bold mb-4 text-center">{prodid ? "Update Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="w-full p-2 border rounded-lg" required />
        <textarea name="desc" value={formData.desc} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded-lg" required></textarea>
        <input type="file" multiple accept="image/*" onChange={handleChange} className="w-full p-2 border rounded-lg" />
        <div className="flex flex-wrap gap-2">
          {formData.imgUrl.map((url, index) => (
            <img key={index} src={url} alt="Product" className="w-24 h-24 object-cover rounded-lg" />
          ))}
        </div>
        <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded-lg" required>
          <option value="">Select Category</option>
          <option value="Menswear">Men's Wear</option>
          <option value="Womenswear">Women's Wear</option>
          <option value="kidwear">Kid's Wear</option>
          <option value="sports">Sports Wear</option>
        </select>
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded-lg" required />
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" className="w-full p-2 border rounded-lg" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          {prodid ? "Update Product" : "Add Product"}
        </button>
        {prodid && <button onClick={deleteProduct} className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mt-3">Delete Product</button>}
      </form>
    </div>
  );
}
