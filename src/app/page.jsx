"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { CartContext } from './context/CartContext';
import { motion, useScroll, useMotionValueEvent } from "motion/react"

function page() {
  let { state, dispatch } = useContext(CartContext)
  let [data, setData] = useState([])
  let [category, setCategory] = useState([])
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
  useEffect(() => {
    fetch("https://dummyjson.com/products").then(a => a.json()).then(b => setData(b.products))
    fetch("https://dummyjson.com/products/categories").then(a => a.json()).then(b => setCategory(b))
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])


  return (
    <>

 <motion.nav className="navbar navbar-expand-lg navbar-dark p-3 nb glass-nav"
        style={{ position: 'fixed',top: 0,left: 0,width: '100%',zIndex: 1000}}
          animate={{
            y: hidden ? -140 : 0,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          >
          <div className="container-fluid d-flex align-items-center">
            <Link href="/" className="d-flex align-items-center">
              <img className="navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1@2x-free-img.png" alt="" />
            </Link>
    <button 
      className="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav gap-3 text-uppercase align-items-center mx-4 ">
                <li className="nav-item">
                  <Link className="nav-link fw-bold" href="/categories">EVERYTHING</Link>
                </li>

                {category.slice(0, 5).map((a) => (
                  <li key={a.slug} className="nav-item d-none d-lg-flex">
                    <Link className="nav-link text-white" href={`/categories/${a.slug}`}>
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="navbar-nav ms-auto mt-3 mt-lg-0 align-items-center gap-4 nav-right ">
                <li className="nav-item">
                  <Link className="nav-link text-white" href="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" href="/about">About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" href="/contact">Contact</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white nav-icon" href="/cart">
                    <FaShoppingCart /> {state.cart.length}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white nav-icon" href="/user">
                    <FaUserLarge />
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </motion.nav>
      <section className="parallax1">
        <div className="i space-y-3">
          <h1 className="display-5 fw-semibold">Raining Offers For
            <br /> Hot Summer!
          </h1>
          <h4 >25% Off On All Products </h4>
          <div className="d-flex gap-3 py-3 ">
            <Link href={`/categories/`} className="p-2  btn1"> Shop now</Link>
            <Link href={`/contact/`} className="p-2  btn2"> Find more</Link>


          </div>
        </div>

      </section>
    

      <section className="container py-5">
        <div className="row text-center justify-content-center ">

          <div className='col-6 col-md-2 p-3'>
            <img className='img-fluid' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt='' />
          </div>
          <div className='col-6 col-md-2 p-3'>
            <img className='img-fluid' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt='' />
          </div>
          <div className='col-6 col-md-2 p-3'>
            <img className='img-fluid' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png" alt='' />
          </div>
          <div className='col-6 col-md-2 p-3'>
            <img className='img-fluid' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png" alt='' />
          </div>
          <div className='col-6 col-md-2 p-3'>
            <img className='img-fluid' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt='' />
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container ">
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-4 bar mb-2">
              <img className="w-100 hi " src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg" alt='' />
              <div className="pos">
                <h3> 20% Off On Beauty </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. </p>
                <Link href={`/categories/beauty/`} className="p-2  btn1"> Shop now</Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 bar mb-2">
              <img className="w-100 hi " src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg" alt='' />
              <div className="pos">
                <h3> 10% Off On Perfume </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. </p>
                <Link href={`/categories/fragrances/`} className="p-2  btn1"> Shop now</Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 bar mb-2">
              <img className="w-100 hi " src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg" alt='' />
              <div className="pos">
                <h3> 40% Off On Decoration </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. </p>
                <Link href={`/categories/home-decoration/`} className="p-2  btn1"> Shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgcol">

        <div className="container">
          <h1 className="text-center py-4 ">FEATURED PRODUCTS</h1>
          <div className="row">

            {data.map((a) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">

                <div className="card product-card h-100 border-0 shadow-sm">
                  <Link href={`/details/${a.id}`} className="text-decoration-none text-dark">
                    <img className="card-img border-0 w-75 h-100 mx-auto d-block card" src={a.thumbnail} alt='' />
                  </Link>
                  <div className="card-body text-center  ">
                    <Link href={`/details/${a.id}`} className="text-decoration-none text-dark">
                      <h5 className='fw-bold'>{a.title}</h5>
                    </Link>
                    <div className='d-flex mt-4 justify-content-between align-items-center'>
                      <span className='btn btc p-2' onClick={() => dispatch({ type: "addtocart", payload: a })}>Add to cart </span>
                      <span className=' fw-bold '>${a.price}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bgcol parallax">
        <div className="container ">
          <div className=" content1">
            <h4>Limited Time Offer </h4>
            <h2 className="display-5 fw-bold">Special Edition </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br />
              ullamcorper mattis, pulvinar dapibus leo. </p>

            <h4 className="pb-3">Buy This T-shirt At 20% Discount, Use Code OFF20 </h4>
            <Link href={`/categories/`} className=" btn1 p-3 border-0 btn1 fw-bold px-5  "> Shop now</Link>
          </div>
        </div>
      </section>
      <section className="py-5 ">
        <div className="container">
          <div className="row  ">
            <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
              <img className=" pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" alt='' />
              <div className="text-center">
                <h4>Worldwide Shipping </h4>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 ">
              <img className=" pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" alt='' />
              <div className="text-center">
                <h4>Best Quality </h4>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <img className="pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" alt='' />
              <div className="text-center">
                <h4>Best Offers</h4>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <img className="pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" alt='' />
              <div className="text-center">
                <h4>Secure Payments </h4>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default page
