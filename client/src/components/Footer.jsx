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
                    <b className="text-dark">hunter<span className="text-muted">
                        <img src="/assets/gun-fishing-rod.png" className="img-fluid mb-1 "/></span> fisher
                    </b>
                    </h5>
                    <p className="social mt-md-3 mt-2">
                        <span>
                            <i className="fa fa-facebook " aria-hidden="true" />
                        </span>
                        <span>
                            <i className="fa fa-linkedin" aria-hidden="true" />
                        </span>
                        <span>
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </span>
                    </p>
                    <small className="copy-rights cursor-pointer">
                    Ⓒ 2025 Wassim BESGHAYER
                    </small>
                    <br />
                    <small>made in GoMyCode &nbsp;
                        <img id='tn-flag' src='https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg'/>
                        &nbsp; Gabes HackerSpace</small><br/>
                    <small>All Rights Resered. </small>
                </div>
                <div className="col-md-3 col-12  my-sm-0 mt-5">
                    <ul className="colum-1">
                        <li className="mt-md-3 mt-4">Our Products</li>
                        <li>Hunting gears</li>
                        <li>Fishing gears</li>
                        <li>Camping equipments</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="col-md-3 col-12 my-sm-0 mt-5">
                    <ul className="colum-2">
                        <li className="mt-md-3 mt-4">Find us in</li>
                        <li><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg></span>87 Mongi Slim st. - Gabes, Tunisia</li>
                        <li><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></span>75 123 456</li>
                        <li><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 64l0 96 64 0 0-96 194.7 0L416 93.3l0 66.7 64 0 0-66.7c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0L192 0c-35.3 0-64 28.7-64 64zM0 160L0 480c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm480 32l-352 0 0 288c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg></span>75 123 457</li>
                        <li><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox-flag" viewBox="0 0 16 16"><path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8zM5 7c0 .334-.164.264-.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0"/><path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3"/></svg></span>Mail Box 47 - 6000 Gabes</li>
                        <li><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/></svg></span>contact@hunterxfisher.com</li>
                    </ul>
                </div>
                <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                    <ul className="colum-3">
                        <li className="mt-md-3 mt-4">Offer</li>
                        <li>Cancellation request</li>
                        <li>Help center</li>
                        <li>Privacy policy</li>
                        <li>About us</li>
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