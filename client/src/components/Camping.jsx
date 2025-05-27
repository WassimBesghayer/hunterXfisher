import React from 'react'
import { useSelector } from 'react-redux';
import Item_card from './Item_card';

function Camping({ping, setping}) {
    const products=useSelector((state)=>state.product.productlist);
  return (
    <div>
     
    <div style={{display:"flex",justifyContent:"space-around", padding:"50px", flexWrap:"wrap"}}>
      {products?.filter((el)=>el.activity=="camping").map((el)=><Item_card el={el}  ping={ping} setping={setping}/>)}
    </div>
    </div>
  )
}

export default Camping