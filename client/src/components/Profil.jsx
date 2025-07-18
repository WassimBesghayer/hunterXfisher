import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { edituser, logout } from "../redux/userSlice";
import "./styling/user_profil.css";


function Profil({ping, setping}) {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [edited, setedited] = useState(
    {
      name: user?.name,
      lastname: user?.lastname,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
      bank_card: user?.bank_card
    }
  )
  return (
    <div className="core-profil">

<div className="container">
  <div className="main-body">
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="profil-card">
          <div className="profil-card-body">
            <div className="d-flex flex-column align-items-center text-center user_info">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
                className="rounded-circle"
                width={150}
              />
              <p>{user?.name} {user?.lastname}</p>
              <h3>{user?.category}</h3>
              <div className="mt-3">
                <button className="btn btn-primary" onClick={()=>{dispatch(edituser({id:user._id,edited})); setping(!ping)}}>Edit</button>
                <button className="btn btn-primary" onClick={()=>{dispatch(logout()); navigate("/login"); }}>logout</button>
              </div> 
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-md-8">
        <div className="profil-card mb-3">
          <div className="-profil-card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">First Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" placeholder={user?.name} style={{border:"none"}} onChange={(e)=>setedited({...edited, name:e.target.value})}/>
              </div>
            </div>
            <hr />
                 <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Last Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" placeholder={user?.lastname} style={{border:"none"}} onChange={(e)=>setedited({...edited, lastname:e.target.value})}/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">e-mail</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" placeholder={user?.email} onChange={(e)=>setedited({...edited, email:e.target.value})}/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" placeholder={user?.phone} onChange={(e)=>setedited({...edited, phone:e.target.value})}/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" placeholder={user?.address} onChange={(e)=>setedited({...edited, address:e.target.value})}/>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Bank ID</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" placeholder={user?.bank_card} onChange={(e)=>setedited({...edited, bank_card:e.target.value})}/>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Profil;