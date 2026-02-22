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
        },[cid],[])
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light p-4  ">
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
          <Link className="nav-link active fw-bold" aria-current="page" href="categories">EVERYTHING</Link>
        </li>
                  {category.slice(0, 5).map((a) => (
                    <li className="nav-item ">
                      <Link className="nav-link text-black" href={`/categories/${a.slug}`}>{a.name}</Link>
                    </li>
                  ))}
              
              </ul>
            </div>
            <div className="d-flex gap-4 text-white">
              <Link className='text-decoration-none text-black ' href="/">Home</Link>
              <Link className='text-decoration-none text-black' href="/about">About</Link>
              <Link className='text-decoration-none text-black' href="/contact">Contact</Link>
              <li className='text-black'>$0.00 </li>
              <li className='text-black'><Link className='text-decoration-none text-black' href="/cart"><FaShoppingCart /> {state.cart.length} </Link></li>
              <li className='text-black'><FaUserLarge />
</li>
            </div>
          </div>
     </nav>
     <div className='container'>
      <h1 className='fw-bold text-uppercase pb-5'>{cid}</h1>
      <div className='row'>
      {data.map((a) => (
           
              <div className="col-lg-3 mb-4">
                 <div className="card p-3 h-100 border-0 shadow ">
        <Link href={`/details/${a.id}`}className="text-decoration-none text-dark">
        <img className="card-img border-0 w-75 hit mx-auto d-block card" src={a.thumbnail} alt='' /> </Link>
        <div className="card-body text-center  ">
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
