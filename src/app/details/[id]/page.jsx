"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

function page() {
    let { id } = useParams()
    let [product, setProduct] = useState()
    let [category, setCategory] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(a => a.json()).then(b => setProduct(b))     
        fetch("https://dummyjson.com/products/categories").then(a => a.json()).then(b => setCategory(b))    
    }, [id],[])

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
                   <li class="nav-item text-white">
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
            <li className='text-black'><FaShoppingCart /></li>
                                        <li className='text-black'><FaUserLarge /> </li>
            </div>
          </div>
     </nav>
     <section>
        <div className="container py-5">
            
            <div className="d-flex justify-content-between">  
            <img src={product?.thumbnail} alt='' width="700" />  
            <div className="row justify-content-center flex-column">
            <h1 className="fw-bold display-5 text-center ">{product?.title}</h1>
            <p className="py-3 f">{product?.description}</p>
            <h3 className="fw-bold ">${product?.price}</h3>
            </div>
          
        </div>
        </div>
        </section>
        </>
    )
}

export default page