"use client"
import { CartContext } from '@/app/context/CartContext';
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

function page() {
    let {cid}=useParams()
    
      let {state, dispatch} = useContext  (CartContext)
     let [data, setData]=useState([])
     let [category, setCategory] = useState([])
        useEffect(()=>{

            fetch(`https://dummyjson.com/products/category/${cid}`).then(a=>a.json()).then(b=>setData(b.products))
            fetch("https://dummyjson.com/products/categories").then(a => a.json()).then(b => setCategory(b))
             import("bootstrap/dist/js/bootstrap.bundle.min.js");
        },[cid],[])
  return (
    <>
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
     <div className='container'>
      <h1 className='fw-bold text-uppercase pb-5 text-center'>{cid}</h1>
      <div className='row'>
      {data.map((a) => (
           
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                 <div className="card product-card p-3 h-100 border-0 shadow ">
        <Link href={`/details/${a.id}`}className="text-decoration-none text-dark">
        <img className="card-img-top border-0 w-75 hit mx-auto d-block card img-fluid" src={a.thumbnail} alt='' /> </Link>
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
          </>
  )
}

export default page
