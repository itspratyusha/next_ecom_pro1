"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


function page() {
  let[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products").then(a=>a.json()).then(b=>setData(b.products))
    },[])

  return (
    <>
  
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous" />
  <link rel="stylesheet" href="page1.css" />
  <section className="parallax1">
    <nav className="navbar navbar-expand-lg navbar-dark p-4 nb container-fluid">
      <div className="container-fluid ">
        <img className=" navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1@2x-free-img.png" alt='' />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">EVERYTHING</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">WOMEN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">MEN</a>
            </li>
            
          </ul>
        </div>
        <div className="d-flex gap-4 text-white">
           <Link className='text-decoration-none text-white' href="/">Home</Link>
            <Link className='text-decoration-none text-white' href="/about">About</Link>
            <Link className='text-decoration-none text-white' href="/contact">Contact</Link>

          <span>$0.00 </span>
          <span>icon</span>
          <span>icon</span>
        </div>
      </div>
    </nav>
    <div className="i space-y-3">
      <h1 className="display-3 fw-semibold">Raining Offers For
        <br /> Hot Summer!
      </h1>
      <h4 >25% Off On All Products </h4>
      <div className="d-flex gap-3 py-3 ">
        <button className="p-2 border-0 btn1">Shop now</button>
        <button className="p-2 btn2 border rounded-0 ">Find more</button>
      </div>
    </div>
    
  </section>
  <section className="container py-5">
    <div className="d-flex gap-2 p-4 justify-content-between">
      <div>
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt='' />
      </div>
      <div>
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt='' />
      </div>
      <div>
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt='' />
      </div>
      <div>
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt='' />
      </div>
      <div>
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt='' />
      </div>
    </div>
  </section>
  <section className="py-4">
    <div className="container ">
      <div className="row ">
        <div className="col-lg-4 bar">
          <img className="w-100 hi " src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg" alt='' />
          <div className="pos">
            <h3> 20% Off On Tank Tops </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. </p>
            <button className="p-2 border-0 btn1">Shop now</button>
          </div>
        </div>
        <div className="col-lg-4 bar ">
          <img className="w-100 hi " src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg" alt='' />
          <div className="pos">
            <h3> 20% Off On Tank Tops </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. </p>
            <button className="p-2 border-0 btn1">Shop now</button>
          </div>
        </div>
        <div className="col-lg-4 bar">
          <img className="w-100 hi" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg" alt='' />
          <div className="pos">
            <h3> 20% Off On Tank Tops </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum. </p>
            <button className="p-2 border-0 btn1">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="bgcol">
    <div className="container">
      <h1 className="text-center py-4 ">Featured products</h1>
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-3 mb-4">
              <div className="card p-3">
                <img className="card-img w-75" src={item.thumbnail} alt=''/>
                <div className="card-body hh">
                  <h4 className='txt'>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      
    </div>
  </section>
  <section className="py-5 bgcol parallax">
    <div className="container ">
      <div className=" content">
        <h4>Limited Time Offer </h4>
        <h2 className="display-5 fw-bold">Special Edition </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br />
          ullamcorper mattis, pulvinar dapibus leo. </p>
         
        <h4 className="pb-3">Buy This T-shirt At 20% Discount, Use Code OFF20 </h4>
        <button className="p-3 border-0 btn1 fw-bold w-25">Shop now</button>
      </div>
    </div>
  </section>
  <section className="py-5 ">
    <div className="container">
      <div className="row marg">
        <div className="col-lg-3 ">
          <img className=" pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" alt='' />
          <div className="text-center">
            <h4>Worldwide Shipping </h4>
            <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
          </div>
        </div>
        <div className="col-lg-3 ">
          <img className=" pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" alt='' />
          <div className="text-center">
            <h4>Worldwide Shipping </h4>
            <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
          </div>
        </div>
        <div className="col-lg-3">
          <img className="pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" alt='' />
          <div className="text-center">
            <h4>Worldwide Shipping </h4>
            <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
          </div>
        </div>
        <div className="col-lg-3">
          <img className="pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" alt='' />
          <div className="text-center">
            <h4>Worldwide Shipping </h4>
            <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container ">
      <div className="row ">
        <div className="col-lg-3 ">
          <h3 className="pb-3">Quick Links </h3>
          <p>Home</p>
          <p>About</p>
          <p>My Account</p>
          <p>Cart </p>
          <p>Contact </p>
        </div>
        <div className="col-lg-3">
          <h3 className="pb-3">Quick Links </h3>
          <p>Home</p>
          <p>About</p>
          <p>My Account</p>
          <p>Cart </p>
          <p>Contact </p>
        </div>
        <div className="col-lg-3">
          <h3 className="pb-3">Quick Links </h3>
          <p>Home</p>
          <p>About</p>
          <p>My Account</p>
          <p>Cart </p>
          <p>Contact </p>
        </div>
        <div className="col-lg-3">
          <h3 className="pb-3">Quick Links </h3>
          <img className="w-50" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/playstore-free-img.png" alt='' />
        </div>
      </div>
    </div>
  </section>
  <div className="border " />
  <section className="pt-3">
    <div className="container">
      <div className="d-flex justify-content-between">
        <p>Copyright © 2026 Brandstore</p>
        <div>
          <p>Powered by Brandstore </p>
        </div>
      </div>
    </div>
  </section>
  
</>
)
  }

export default page
