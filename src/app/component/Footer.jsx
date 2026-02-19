import React from 'react'

function footer() {
  return (
    <>
      <section className="py-5">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-3 ">
              <h3 className="pb-3">Quick Links </h3>
              <p>Home</p>
              <p>About</p>
              <p>My Account</p>
              <p>Cart </p>
              <p>Contact </p>
            </div>
            <div className="col-lg-3">
              <h3 className="pb-3">For Her </h3>
              <p>Women Jeans</p>
              <p>Tops and Shirts</p>
              <p>Women Jackets</p>
              <p>Heels and Flats</p>
              <p>Women Accessories </p>
            </div>
            <div className="col-lg-3">
              <h3 className="pb-3">For Him </h3>
              <p>

                Men Jeans
              </p>
              <p>
                Men Shirts
              </p>
              <p>
                Men Shoes
              </p>
              <p>
                Men Accessories
              </p>
              <p>
                Men Jackets
              </p>
            </div>
            <div className="col-lg-3">
              <h3 className="pb-3">DOWNLOAD  </h3>
              <img className="w-50" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/playstore-free-img.png" alt='' />
            </div>
          </div>
        </div>
      </section>
      <div className="border " />
      <section className="pt-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <p>Copyright © 2026 Brandstore</p>
            <div>
              <p>Powered by Brandstore </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default footer
