import React from 'react'
import { useSelector } from 'react-redux';
import Item_card from './Item_card';

function ProductList() {
    const products=useSelector((state)=>state.product.productlist);
    console.log(products)
  return (
    <div>{
        products?.map((el)=><Item_card el={el}/>)
    }</div>
  )
}

export default ProductList