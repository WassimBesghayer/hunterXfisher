import React from 'react'
import './styling/footer.css'

function Footer() {
  return (
    <div className='container-footer'>

        <div className="container-fluid justify-content-center">
        <hr className="mx-0 px-0" />
        <footer>
            <div className="row justify-content-around mb-0 pt-5 pb-0 ">
            <div className=" col-11">
                <div className="row justify-content-center">
                <div className="col-md-3 col-12 font-italic align-items-center  mt-md-3 mt-4">
                    <h5>
                    <span>
                        {" "}
                        <img
                        src="https://extendthemes.com/wp-content/uploads/2018/06/xbox-green-min.png"
                        className="img-fluid mb-1 "
                        />
                    </span>
                    <b className="text-dark">
                        {" "}
                        hunter<span className="text-muted"> X</span> fisher
                    </b>
                    </h5>
                    <p className="social mt-md-3 mt-2">
                    {" "}
                    <span>
                        <i className="fa fa-facebook " aria-hidden="true" />
                    </span>{" "}
                    <span>
                        <i className="fa fa-linkedin" aria-hidden="true" />
                    </span>{" "}
                    <span>
                        <i className="fa fa-twitter" aria-hidden="true" />
                    </span>
                    </p>
                    <small className="copy-rights cursor-pointer">
                    Ⓒ 2025 Wassim BESGHAYER
                    </small>
                    <br />
                    <small>made in GoMyCode &nbsp;
                        <img src='https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg'/>
                        &nbsp; Gabes HackerSpace</small><br/>
                    <small>Copyright. All Rights Resered. </small>
                </div>
                <div className="col-md-3 col-12  my-sm-0 mt-5">
                    <ul className="list-unstyled">
                    <li className="mt-md-3 mt-4">Our Solution</li>
                    <li>Intergrated Security Platform</li>
                    <li>Core Features</li>
                    <li>Product Features</li>
                    <li>Pricing</li>
                    </ul>
                </div>
                <div className="col-md-3 col-12 my-sm-0 mt-5">
                    <ul className="list-unstyled">
                    <li className="mt-md-3 mt-4">Your needs</li>
                    <li>Intergrated Security Platform</li>
                    <li>Core Features</li>
                    <li>Product Features</li>
                    <li>Pricing</li>
                    </ul>
                </div>
                <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                    <ul className="list-unstyled">
                    <li className="mt-md-3 mt-4">Offer</li>
                    <li>Intergrated Security Platform</li>
                    <li>Core Features</li>
                    <li>Product Features</li>
                    <li>Pricing</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </footer>
        </div>

    </div>
  )
}

export default Footer