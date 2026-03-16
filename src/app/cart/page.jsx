"use client"
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";


function Cart() {
   
  let [data, setData] = useState([])
  let [category, setCategory] = useState([])
  useEffect(() => {
    fetch("https://dummyjson.com/products").then(a => a.json()).then(b => setData(b.products))
    fetch("https://dummyjson.com/products/categories").then(a => a.json()).then(b => setCategory(b))
  }, [])
  let { state, dispatch } = useContext(CartContext)
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light p-4  ">
          <div className="container-fluid ">
            <Link href="/">
              <img className="navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" alt='' />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav gap-3 text-uppercase">
                
                {category.slice(0, 5).map((a) => (
                  <li className="nav-item ">
                    <Link className="nav-link text-black d-none d-lg-block" href={`/categories/${a.slug}`}>{a.name}</Link>
                  </li>
                ))}

              </ul>
            </div>
            <ul className="d-flex gap-4 text-white">
              <Link className='text-decoration-none text-black ' href="/">Home</Link>
              <Link className='text-decoration-none text-black' href="/about">About</Link>
              <Link className='text-decoration-none text-black' href="/contact">Contact</Link>
              <li className='text-black'><Link className='text-decoration-none text-white' href="/cart"><FaShoppingCart /> {state.cart.length} </Link></li>
              <li className='text-black'><Link className='text-decoration-none text-white' href="/user"><FaUserLarge /></Link> </li>
            </ul>
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
