import React from 'react'

function Page() {
  return (
    <>
    
        <section className="parallax1">
    <nav className="navbar navbar-expand-lg navbar-dark p-4 nb container-fluid">
      <div className="container-fluid ">
        <img className=" navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1@2x-free-img.png" alt />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">EVERYTHING</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">WOMEN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">MEN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ACCESSORIES</a>
            </li>
          </ul>
        </div>
        <div className="d-flex gap-4 text-white">
        <a href="/about">About </a>
          <li>Contact Us </li>
          <li>$0.00 </li>
          <li>icon</li>
          <li>icon</li>
        </div>
      </div>
    </nav>
    <div className="i space-y-3">
      <h1 className="display-3 fw-semibold">Raining Offers For</h1>
        </div>
   
  </section>
    </>
  )
}

export default Page
