import React from 'react'
import Item_card from './Item_card';
import { useSelector } from 'react-redux';

function Hunting({ping, setping}) {
    const products=useSelector((state)=>state.product.productlist);
  return (
    <>
       <div className='filter'>
            <button>Fire Arms</button>
            <button>Ammunition</button>
            <button>Hunting Gear</button>
        </div>
    <div style={{display:"flex",justifyContent:"space-around", padding:"50px", flexWrap:"wrap"}}>
      {products?.filter((el)=>el.activity=="hunting").map((el)=><Item_card el={el} ping={ping} setping={setping}/>)}
    </div>
    </>
  )
}

export default Hunting