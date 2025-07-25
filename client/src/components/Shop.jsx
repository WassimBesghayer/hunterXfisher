import React from 'react'
import Item_card from './Item_card'
import Carousel from './Carousel'
import ProductList from './ProductList'

function Shop({ping, setping}) {
  return (
    <div className='container-shop'>
        <Carousel/>
        <ProductList  ping={ping} setping={setping}/>
    </div>
  )
}

export default Shop