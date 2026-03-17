"use client"
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { motion, useScroll, useMotionValueEvent } from "motion/react"

function Cart() {
   
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
  let { state, dispatch } = useContext(CartContext)
  return (
    <>
      <section>
         <nav className="navbar navbar-expand-lg navbar-light p-4 category-page bg-white ">
          <div className="container-fluid ">
            <Link href="/">
            <img className=" navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" alt='' />
            </Link> 
            <ul className="navbar-nav mx-auto d-flex d-lg-none flex-row gap-3 text-center ">
              <li className="nav-item">
                  <Link className="nav-link text-black" href="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-black" href="/about">About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-black" href="/contact">Contact</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-black nav-icon" href="/cart">
                    <FaShoppingCart /> {state.cart.length}
                  </Link>
                </li>

                <li className="nav-item d-none">
                  <Link className="nav-link text-black nav-icon" href="/user">
                    <FaUserLarge />
                  </Link>
                </li>
            </ul>          
            <button 
      className="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav gap-3 text-uppercase align-items-center mx-4">
                <li className="nav-item">
                  <Link className="nav-link fw-bold" href="/categories">EVERYTHING</Link>
                </li>
                
                  {category.slice(0, 5).map((a) => (
                    <li className="nav-item " key={a.slug}>
                      <Link className="nav-link text-black d-md-block d-lg-block" href={`/categories/${a.slug}`}>{a.name}</Link>
                    </li>
                  ))}
              
              </ul>
          
              <ul className="navbar-nav ms-auto align-items-center gap-4 nav-right">
                <li className="nav-item">
                  <Link className="nav-link text-black" href="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-black" href="/about">About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-black" href="/contact">Contact</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-black nav-icon" href="/cart">
                    <FaShoppingCart /> {state.cart.length}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-black nav-icon" href="/user">
                    <FaUserLarge />
                  </Link>
                </li>
              </ul>
              </div>
          </div>
     </nav>
        
      </section>
      <section className='py-5'>
        <div className='container'>
          <table-responsive>
            <h3 className='fw-bold display-5 mb-4'>CART</h3>
            
            {state.cart.map((a) => (
              <tr>
                <td><img src={a.thumbnail} className="w-25 h-25 img-fluid" alt='' /></td>
                <td className='fw-bold '>{a.title}</td>
                <td className='fw-bold px-5'>${a.price}</td>
                <td><span  className='btn btc p-2' onClick={() => dispatch({ type: "removefromcart", payload: a.id })}>Remove </span> </td>
              </tr>
            ))}
          </table-responsive>
        </div>
      </section>
    </>
  )
}

export default Cart
