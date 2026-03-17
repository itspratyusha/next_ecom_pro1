"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { CartContext } from '../context/CartContext';

function page() {
    let {state, dispatch} = useContext(CartContext)
    let [data, setData] = useState([])
    let [category, setCategory] = useState([])
      useEffect(() => {
        
         fetch("https://dummyjson.com/products").then(a => a.json()).then(b => setData(b.products))
         fetch("https://dummyjson.com/products/categories").then(a => a.json()).then(b => setCategory(b))
          
      }, [])
  return (
    <>
    <section>
     <nav className="navbar navbar-expand-lg navbar-dark p-4 category-page ">
          <div className="container-fluid ">
            <Link href="/">
            <img className=" navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" alt='' />
            </Link>           
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav gap-3 text-uppercase">
                   <li className="nav-item text-white">
          <Link className="nav-link active fw-bold text-black" aria-current="page" href="categories">EVERYTHING</Link>
        </li>
                  {category.slice(0, 5).map((a) => (
                    <li className="nav-item " key={a.slug}>
                      <Link className="nav-link text-black d-none d-md-block d-lg-block" href={`/categories/${a.slug}`}>{a.name}</Link>
                    </li>
                  ))}
              
              </ul>
            </div>
            <ul className="d-flex gap-4 text-black">
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
     </nav>
     </section>
        <section>
        <div className="container">
          <h1 className="text-center pb-5 fw-bold ">ALL IN ONE PRODUCTS</h1>
          <div className="row">
            {data.map((a) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={a.id}>
                 
        <div className="card product-card p-3 h-100 border-0 shadow ">
        <Link href={`/details/${a.id}`}className="text-decoration-none text-dark">
        <img className=" card-img-top img-fluid mx-auto d-block w-75"  
        style={{ height: "200px", objectFit: "contain" }}
         src={a.thumbnail} alt='' /> 
        </Link>
        <div className="card-body d-flex flex-column justify-content-between text-center mt-3 ">
           <Link href={`/details/${a.id}`}className="text-decoration-none text-dark">
          <h5 className='fw-bold'>{a.title}</h5> </Link>
          <div className='d-flex mt-4 justify-content-between align-items-center'>
         <span  className='btn btc p-2' onClick={() => dispatch({type:"addtocart", payload:a})}>Add to cart </span>
          <span className=' fw-bold '>${a.price}</span>
          </div>
        </div>
      </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  )
}

export default page
