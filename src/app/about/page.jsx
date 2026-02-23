"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { CartContext } from '../context/CartContext';



function Page() {
      let {state, dispatch} = React.useContext(CartContext)
  let [data, setData] = useState([])
  let [category, setCategory] = useState([])
  useEffect((a) => {
    fetch("https://dummyjson.com/products").then(a => a.json()).then(b => setData(b.products))
    fetch("https://dummyjson.com/products/categories").then(a => a.json()).then(b => setCategory(b))
  }, [])
  return (

    <>

      <section className="parallax2 ">
        <nav className="navbar navbar-expand-lg navbar-dark p-4 nb container-fluid">
          <div className="container-fluid ">
            <Link href="/">
              <img className=" navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1@2x-free-img.png" alt='' />
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
                      <Link className="nav-link text-white" href={`/categories/${a.slug}`}>{a.name}</Link>
                    </li>
                  ))}
              
              </ul>

            </div>
            <div className="d-flex gap-4 text-white">
              <Link className='text-decoration-none text-white' href="/">Home</Link>
              <Link className='text-decoration-none text-white' href="/about">About</Link>
              <Link className='text-decoration-none text-white' href="/contact">Contact</Link>
              <li className='text-white'><Link className='text-decoration-none text-white' href="/cart"><FaShoppingCart /> {state.cart.length} </Link></li>
              <li className='text-white'><Link className='text-decoration-none text-white' href="/user"><FaUserLarge /></Link> </li>
            </div>
          </div>
        </nav>
        <div className="i2 space-y-3">
          <h1 className="display-3 fw-semibold">About us</h1>
        </div>

      </section>

      <section className='clr py-5'>
        <div className='container clr1'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column justify-content-center'>
              <div className='line1 ms-5'></div>
              <h1 className='ms-5'>Who We Are</h1>
              <p className='ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. </p>
            </div>

            <div className='col-lg-6 p-0'>
              <img className='w-100' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className=' py-5'>
        <div className='container '>
          <div className='line'></div>
          <div className='pt-3 text-center'>
            <h4>A Few Words About </h4>
            <h2>Our Team</h2>
            <p className=''>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
              Class
              <br /> aptent taciti sociosqu ad litora torquent per conubia nostra </p>
          </div>
          <div className='ww py-4'>
            <div className='row justify-content-center gap-3 text-center '>
              <div className='col-lg-3 clr p-4 rounded '>
                <img className='w-25' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team2-free-img.png" alt="" />
                <h3 className='pt-3'>Harvey Spector</h3>
                <p>Founder - CEO</p>
              </div>
              <div className='col-lg-3 clr p-4 rounded '>
                <img className=' w-25' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team1-free-img.png" alt="" />
                <h3 className='pt-3'>Jessica Pearson</h3>
                <p>Founder - CEO</p>
              </div>
              <div className='col-lg-3 clr p-4 rounded'>
                <img className='w-25' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team3-free-img.png" alt="" />
                <h3 className='pt-3'>Rachel Zain</h3>
                <p>Founder - CEO</p>
              </div>

            </div>
            <div className='row justify-content-center gap-3 text-center py-2'>
              <div className='col-lg-3 clr p-4'>
                <img className='w-25' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team4free-img.png" alt="" />
                <h3 className='pt-3'>Luise Litt</h3>
                <p>Founder - CEO</p>
              </div>
              <div className='col-lg-3 clr p-4'>
                <img className='w-25' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team5-free-img.png" alt="" />
                <h3 className='pt-3'>Katrina Bennett</h3>
                <p>Founder - CEO</p>
              </div>
              <div className='col-lg-3 clr p-4'>
                <img className='w-25' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team6-free-img.png" alt="" />
                <h3 className='pt-3'>Mike Ross</h3>
                <p>Founder - CEO</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="parallax3 ">

        <div className="i3 space-y-3 col-lg-3">
          <div className='line m1'></div>
          <div className="display-5 fw-semibold">Follow
          </div>
          <div className='d-flex gap-4 justify-content-center pt-3 fs-5'>
            <span><BsFacebook />
            </span>
            <span><IoLogoTwitter />
            </span>
            <span><RiInstagramFill />
            </span>
            <span><SiGmail />
            </span>
          </div>



        </div>

      </section>
      {/* <section className="py-5 ">
        <div className="container">
          <div className="row marg">
            <div className="col-lg-3 ">
              <img className=" pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" alt />
              <div className="text-center">
                <h4>Worldwide Shipping </h4>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
              </div>
            </div>
            <div className="col-lg-3 ">
              <img className=" pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" alt />
              <div className="text-center">
                <h4>Worldwide Shipping </h4>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
              </div>
            </div>
            <div className="col-lg-3">
              <img className="pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" alt />
              <div className="text-center">
                <h4>Worldwide Shipping </h4>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
              </div>
            </div>
            <div className="col-lg-3">
              <img className="pb-3 d-block mx-auto img-fluid imz" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" alt />
              <div className="text-center">
                <h4>Worldwide Shipping </h4>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}


    </>
  )
}

export default Page
