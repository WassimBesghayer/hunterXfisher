import React from 'react'
import { useSelector } from 'react-redux';
import Item_card from './Item_card';

function Fishing({ping, setping}) {
    const products=useSelector((state)=>state.product.productlist);
  return (
    <div style={{display:"flex",justifyContent:"space-around", padding:"50px", flexWrap:"wrap"}}>
      {products?.filter((el)=>el.activity=="fishing").map((el)=><Item_card  ping={ping} setping={setping} el={el}/>)}
    </div>
  )
}

export default Fishing