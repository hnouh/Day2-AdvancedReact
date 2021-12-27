import {useState} from 'react'
const Products=()=>{
    const LIST_PRODUTCS = [
        {
          id: 0,
          title: "SAMSUNG GALAXY S9",
          price: 720.0,
        },
        {
          id: 1, 
          title: "iPHONE X",
          price: 999.0,
        },
      ];

      const [products,setProducts]=useState(LIST_PRODUTCS)
      const [productTitle,setProductTitle]=useState('')
      const [productPrice,setProductPrice]=useState(0)
      const [productId,setProductId]=useState()

      function AddProduct(e){
        e.preventDefault();
        let obj={id:productId,title:productTitle,price:productPrice}
        products.push(obj);
        setProducts(products)
        setProductTitle('')
        setProductPrice(0)
        setProductId()
      }

      return (
        <>
        <form>
        <input type='number' value={productId} placeholder='id' onChange={(e)=>{setProductId(e.target.value)}}></input>
        <input type='number'value={productPrice} placeholder='price' onChange={(e)=>{setProductPrice(e.target.value)}}></input>
        <input type='text' value={productTitle} placeholder='title' onChange={(e)=>{setProductTitle(e.target.value)}}></input>
        <button onClick={(e)=>{AddProduct(e)}} >Add product </button>
        </form>
        
        {products.map((product) =>{
            return(
                <>
                <h3>{product.title}: {product.price}</h3>
                </>
            )
        })}
        </>
    )
}

export default Products