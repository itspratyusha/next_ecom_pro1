"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

function page() {
    let {cid}=useParams()
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
              <ul className="navbar-nav ">
                   <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/categories">EVERYTHING</Link>
        </li>
                  {category.slice(0, 4).map((a) => (
                    <li className="nav-item">
                      <Link className="nav-link" href={`/categories/${a.slug}`}>{a.name}</Link>
                    </li>
                  ))}
              
              </ul>
            </div>
            <div className="d-flex gap-4 text-white">
              <Link className='text-decoration-none text-black ' href="/">Home</Link>
              <Link className='text-decoration-none text-black' href="/about">About</Link>
              <Link className='text-decoration-none text-black' href="/contact">Contact</Link>
              <li className='text-black'>$0.00 </li>
              <li className='text-black'><FaShoppingCart /></li>
              <li className='text-black'><FaUserLarge />
</li>
            </div>
          </div>
     </nav>
     <div className='container'>
      <h1 className='fw-bold text-uppercase'>{cid}</h1>
      <div className='row'>
      {data.map((a) => (
           
              <div className="col-lg-3 mb-4">
                <div className="card p-3">
                  <img className="card-img w-75" src={a.thumbnail} alt='' />
                  <div className="card-body hh">
                    <h4 className='txt'>{a.title}</h4>
                    <p>${a.price}</p>
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
