import React from 'react'
import "./styling/basket.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteorder } from '../redux/orderSlice';

function Basket({ping, setping}) {
  // Assuming orders are fetched from a Redux store
  // and the user is logged in, we can filter orders by the user's name.
  const orders=useSelector((state)=>state.order.orderlist);
  // Assuming the user is logged in and their name is available
  // in the Redux store or context.
  const dispatch=useDispatch();
  // Fetching the user's full name from the Redux store
  // This assumes the user object has 'name' and 'lastname' properties.
  const user = useSelector((state) => state.user.user);
  // Constructing the full name for filtering orders
  // This is necessary to match the buyer field in the orders.
    let fullname=user?.name+" "+user?.lastname;


  return (
    <div className='basket'>
        <div className="container mt-5 mb-5">
  <div className="d-flex justify-content-center row">
    <div className="col-md-8">
      <div className="p-2">
        <h4>Shopping cart</h4>
        <div className="d-flex flex-row align-items-center pull-right">
          <span className="mr-1">Sort by:</span>
          <span className="mr-1 font-weight-bold">Price</span>
          <i className="fa fa-angle-down" />
        </div>
      </div>

      {orders?.filter((el)=>el?.buyer==fullname).map((el)=>
      <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div className="mr-1">
          <img
            className="rounded"
            src={el?.productimage}
            width={70}
          />
        </div>
        <div className="d-flex flex-column align-items-center product-details">
          <span className="font-weight-bold">{el?.productname}</span>
          <div className="d-flex flex-row product-desc">
            <div className="size mr-1">
              <span className="text-grey">Size:</span>
              <span className="font-weight-bold">&nbsp;M</span>
            </div>
            <div className="color">
              <span className="text-grey">Color:</span>
              <span className="font-weight-bold">&nbsp;Grey</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center qty">
          <i className="fa fa-minus text-danger" />
          <h5 className="text-grey mt-1 mr-1 ml-1">{el?.qty}</h5>
          <i className="fa fa-plus text-success" />
        </div>
        <div>
          <h5 className="text-grey">{el?.amount} TND</h5>
        </div>
        <div>
          <h5 className="text-grey"><button onClick={()=>{dispatch(deleteorder(el?._id));setping(!ping);alert("your order is deleted")}}>X</button></h5>
        </div>
        <div className="d-flex align-items-center">
          <i className="fa fa-trash mb-1 text-danger" />
        </div>
      </div>)}
 
    </div>
  </div>
</div>

    </div>
  )
}

export default Basket