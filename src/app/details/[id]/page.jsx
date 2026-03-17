"use client"
import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { CartContext } from "@/app/context/CartContext";

function page() {
    let { id } = useParams()
   let {state, dispatch} = React.useContext(CartContext) 
    let [category, setCategory] = useState([])
    let [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then(a => a.json()).then(b => setProduct(b))     
        fetch("https://dummyjson.com/products/categories").then(a => a.json()).then(b => setCategory(b)) 
         import("bootstrap/dist/js/bootstrap.bundle.min.js");   
    }, [id],[])

    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light p-4 category-page ">
          <div className="container-fluid ">
            <Link href="/">
            <img className=" navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo@2x-free-img.png" alt='' />
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


              <ul className="navbar-nav gap-3 text-uppercase align-items-center ms-4 ">
                <li className="nav-item mb-3 mb-lg-0">
                  <Link className="nav-link fw-bold" href="/categories">EVERYTHING</Link>
                </li>
                
                  {category.slice(0, 5).map((a) => (
                    <li className="nav-item d-none d-lg-flex " key={a.slug}>
                      <Link className="nav-link text-black d-md-block d-lg-block" href={`/categories/${a.slug}`}>{a.name}</Link>
                    </li>
                  ))}
              
              </ul>
          
            <ul className="navbar-nav mx-auto gap-4">
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
         {/* Product Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* Product Image */}
                        <div className="col-12 col-md-6 text-center">
                            <img
                                src={product?.thumbnail}
                                alt={product?.title}
                                className="img-fluid rounded shadow-sm"
                                style={{ maxHeight: "400px", objectFit: "contain" }}
                            />
                        </div>

                        {/* Product Info */}
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <h1 className="fw-bold display-5">{product?.title}</h1>
                            <p className="text-muted my-3">{product?.description}</p>
                            <h3 className="fw-bold mb-4">${product?.price}</h3>
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={() => dispatch({ type: "addtocart", payload: product })}
                            >
                                Add to Cart <FaShoppingCart className="ms-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page