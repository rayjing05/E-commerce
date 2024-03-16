import React from 'react';

const Addproduct = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [company, seCompany] = React.useState('');

  const addproduct = async () => {

    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch('http://localhost:5000/add-product', {
      method: 'post',
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        'Content-Type': 'application/json'
      },

    });
    result = await result.json();
    console.warn(result)
  }

  return (
    <div>
      <ul className='product'>
        <h1>Add Product</h1>

        <input type='text' placeholder='Enter product Name' className='inputBox ' onChange={(e) => { setName(e.target.value) }}></input>

        <input type='text' placeholder='Enter product Price' className='inputBox ' onChange={(e) => { setPrice(e.target.value) }}></input>

        <input type='text' placeholder='Enter product Category' className='inputBox ' onChange={(e) => { setCategory(e.target.value) }}></input>

        <input type='text' placeholder='Enter product Company' className='inputBox ' onChange={(e) => { seCompany(e.target.value) }}></input>


      </ul>
      <button className='btn-signup1' onClick={addproduct}>Add Product</button>
    </div>
  );
};

export default Addproduct;
