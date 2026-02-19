"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

function page() {
     let [data, setData]= useState([])
        let [category, setCategory] = useState([])
        useEffect((a)=>{
         fetch("https://dummyjson.com/products").then(a => a.json()).then(b => setData(b.products))
         fetch("https://dummyjson.com/products/categories").then(a => a.json()).then(b => setCategory(b))
        },[])
    return (
        <>
            <section className="parallax4">
                <nav className="navbar navbar-expand-lg navbar-dark p-4 nb container-fluid">
                    <div className="container-fluid ">
                        <img className=" navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1@2x-free-img.png" alt />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/categories">EVERYTHING</Link>
                </li>
               
                  {category.slice(0, 4).map((a) => (
                    <li className="nav-item">
                      <Link className="nav-link" href={`/categories/${a.slug}`}>{a.name}</Link>
                    </li>
                  ))}
              </ul>
                        </div>
                        <div className="d-flex gap-4 text-white">
                            <Link className='text-decoration-none text-white' href="/">Home</Link>
                            <Link className='text-decoration-none text-white' href="/about">About</Link>
                            <Link className='text-decoration-none text-white' href="/contact">Contact</Link>
                            <li>$0.00 </li>
                            <li className='text-white'><FaShoppingCart /></li>
                                                        <li className='text-white'><FaUserLarge /> </li>
                        </div>
                    </div>
                </nav>
                <div className="i2 space-y-3">
                    <h1 className="display-3 fw-semibold">Contact us</h1>
                </div>

            </section>

            <section className='bg-light'>
                <div className='container '>
                    <div className='text-center py-4'>
                        <h2>Have any queries? </h2>
                        <h5 className='display-6 fw-bold'>We're here to help.​ </h5>
                        <div className='line mt-3'></div>

                        <div className='row justify-content-center g-4 py-4'>
                            <div className='col-lg-3'>
                                <div className='card bg-white p-4 rounded shadow border-0'>
                                    <h2 className='fw-semibold'>Sales</h2>
                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus. </p>
                                    <p className='text-primary fw-bold'>1800 123 4567 </p>
                                </div>
                            </div>

                            <div className='col-lg-3'>
                                <div className='card bg-white p-4 rounded shadow border-0'>
                                    <h2 className='fw-semibold'>Sales</h2>
                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus. </p>
                                    <p className='text-primary fw-bold'>1800 123 4567 </p>
                                </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='card bg-white p-4 rounded shadow border-0'>
                                    <h2 className='fw-semibold'>Sales</h2>
                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus. </p>
                                    <p className='text-primary fw-bold'>1800 123 4567 </p>
                                </div>
                            </div>
                            <div className='col-lg-3 '>
                                <div className='card bg-white p-4 rounded shadow border-0'>
                                    <h2 className='fw-semibold'>Sales</h2>
                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus. </p>
                                    <p className='text-primary fw-bold'>1800 123 4567 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6  d-flex flex-column justify-content-center'>
                            <span className='fw-bold'>Don't be a stranger!</span>
                            <h1>You tell us. We listen. </h1>
                            <p>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus. </p>
                        </div>

                        <div className='col-lg-6'>
                            <div class="mb-3">
                                <div className='card p-5 border-0 rounded shadow-sm'>
                                    <label htmlFor="exampleFormControlInput1" className="form-label pt-4"></label>
                                    <input type="text" className="form-control g-3" id="exampleFormControlInput1" placeholder="Name*" />
                                    <label htmlFor="exampleFormControlInput1" className="form-label pt-4"></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject*" />
                                    <label htmlFor="exampleFormControlInput1" className="form-label pt-4"></label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email*" />
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label pt-4"></label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} defaultValue={""} placeholder="MESSAGE*" />
                                        <div className='pt-5'>
                                            <button className='btn btn-primary p-2 '>SEND MESSAGE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     
                </div>
            </section>
        </>
    )
}

export default page
