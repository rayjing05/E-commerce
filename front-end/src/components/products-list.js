import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    let result = await fetch('http://localhost:5000/get-products')
    result = await result.json();
    setProducts(result);
  }

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete"
    });
    result = await result.json()
    if (result) {
      getProducts();
    }

  }


  return (
    <div className="Products-list">
      <h1>ProductList</h1>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>price</li>
        <li>category</li>
        <li>Company</li>
        <li>Delete</li>
      </ul>
      {products.map((item, index) =>
        <ul key={item._id}>

          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button onClick={() => deleteProduct(item._id)}>remove</button>
            <Link to={"/update/" + item._id}>Update</Link>
          </li>

        </ul>
      )
      }

    </div>

  )
}

export default ProductList