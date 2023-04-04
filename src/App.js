



import './App.css';
import { useState } from 'react';
import Products from './Products';
import NavB from './NavB'
import AddProduct from './AddProduct';

function App() {
  const [showForm, setShowForm]=useState(false)
  const [products, setProduct]=useState([
    {
      id:1,
      pname:'The Alchemist',
      price:  500,
      image: "b1"
    },
    {
      id:2,
      pname:'Sherlock Holmes',
      price:  200,
      image: "b2"
    },
    {
      id:3,
      pname:'Five point Someone',
      price:  500,
      image: "b3"
    },
    
    
  ])
  const addProdruct =(product)=>{
    setProduct([...products,product])
  }
  


  return (
    
    <div className= "container" >
      
      <header>
        <NavB onAdd={ () => setShowForm(!showForm)}></NavB>
      </header>
      <div>
     { showForm && <AddProduct onAdd={addProdruct}></AddProduct>}
     <Products products={products}></Products>
     </div>
     {/* {console.log(products)} */}
    </div>
  );
}

export default App;


// import './App.css';


// import { useEffect, useState } from 'react';
// import Products from './Products';
// import NavB from './NavB'
// import AddProduct from './AddProduct';

// import bmc from './Images/b1.jpg'
// import smartwax from './Images/b2.jpg'
// import turbo from './Images/b3.jpg'

// function App() {
//   const [showForm, setShowForm]=useState(false)
//   const [products, setProduct]=useState([])
//   const [cartProducts,setCartProducts]=useState([])

//   useEffect (() =>{
//     const fetchProduct= async()=>{
//       const res=await fetch('http://localhost:3333/products');
//       //console.log(res);
//       const newData = await res.json()
//       setProduct(newData)
//     }
//     fetchProduct()
//   },[])
  
 
//   const addProdruct = async(product)=>{
//     const res = await fetch('http://localhost:3333/products',{
//       method:'POST',
//       headers:{
//         'Content-type': 'application/json'
  
//       },
//       body: JSON.stringify(product)
//     })
//     //console.log(JSON.stringify(product))

//     setProduct([...products,product])
//   }
//   const addToCart= async(id)=>{
//      const res=await fetch(`http://localhost:3333/products/${id}`) 
//       const newData = await res.json()
//       const resCart=await fetch(`http://localhost:3333/cart/${id}`) 
//       const cartData = await resCart.json()

//       if(Object.keys(cartData).length!==0){
//         console.log(cartData.count);
//         cartData.count =cartData.count+1
//         console.log(cartData.count);
//         const resPut = await fetch(`http://localhost:3333/cart/${id}`,{
//       method:'PUT',
//       headers:{
//         'Content-type': 'application/json'
  
//       },
//       body: JSON.stringify(cartData)
//     })
//     console.log(cartData)

//       }
      
//       else{
//         newData.count=1
//         const respush = await fetch('http://localhost:3333/cart',{
//       method:'POST',
//       headers:{
//         'Content-type': 'application/json'
  
//       },
//       body: JSON.stringify(newData)
//     })
//     console.log(newData);
//       }


    
//   }
  


//   return (
    
//     <div >
//       <header>
//         <NavB onAdd={ () => setShowForm(!showForm)}></NavB>
//       </header>
//       <div>
//      { showForm && <AddProduct onAdd={addProdruct}></AddProduct>}
//      <Products products={products} onClick={addToCart}></Products>
//      </div>
//      {/* {console.log(products)} */}
//     </div>
//   );
// }

// export default App;
