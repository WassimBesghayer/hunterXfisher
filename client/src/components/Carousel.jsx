import React from 'react'

function Carousel() {
  return (
    <div className='container-carousel'>
        <div id="carouselExampleCaptions" className="carousel slide">
        {/* <div className="carousel-indicators">
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            id="lil"
            aria-current="true"
            aria-label="Slide 1"
            />
            <button
            type="button"
            id="lil"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
            />
            <button
            type="button"
            id="lil"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
            />
        </div> */}
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://mrwallpaper.com/images/hd/download-hunting-wallpaper-mxq7rmd43l4egbue.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block caro">
                <h1>The Best in the Field, <br/>Proven Performance.</h1>
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://wallpapercat.com/w/full/8/6/a/50101-2500x1667-desktop-hd-fishing-background-image.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block caro">
                <h1>Engineered with passion, <br/>Built to Last.</h1>
            </div>
            </div>
            <div className="carousel-item">
            <img src="https://wallpapers.com/images/featured/camping-desktop-06r8wb1zl0ftm5s0.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block caro">
                <h1>Embrace the Wild, <br/>Unleash Your Spirit.</h1>
            </div>
            </div>
        </div>

        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
  )
}

export default Carousel