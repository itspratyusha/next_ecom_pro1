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
import { motion, useScroll, useMotionValueEvent } from "motion/react"



function Page() {
      let {state, dispatch} = React.useContext(CartContext)
  let [data, setData] = useState([])
  let [category, setCategory] = useState([])
   const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
  useEffect((a) => {
    fetch("https://dummyjson.com/products").then(a => a.json()).then(b => setData(b.products))
    fetch("https://dummyjson.com/products/categories").then(a => a.json()).then(b => setCategory(b))
  }, [])
  return (

    <>
 <motion.nav className="navbar navbar-expand-lg navbar-dark p-3 nb1"
          animate={{
            y: hidden ? -140 : 0,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          >
          <div className="container-fluid d-flex align-items-center">
            <Link href="/" className="d-flex align-items-center">
              <img className="navv" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1@2x-free-img.png" alt="" />
            </Link>

            <div className="collapse navbar-collapse" id="navbarNav">


              <ul className="navbar-nav gap-3 text-uppercase align-items-center ms-4">
                <li className="nav-item">
                  <Link className="nav-link fw-bold" href="/categories">EVERYTHING</Link>
                </li>

                {category.slice(0, 5).map((a) => (
                  <li key={a.slug} className="nav-item">
                    <Link className="nav-link text-white" href={`/categories/${a.slug}`}>
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="navbar-nav ms-auto align-items-center gap-4 nav-right">
                <li className="nav-item">
                  <Link className="nav-link text-white" href="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" href="/about">About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" href="/contact">Contact</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white nav-icon" href="/cart">
                    <FaShoppingCart /> {state.cart.length}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white nav-icon" href="/user">
                    <FaUserLarge />
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </motion.nav>
      <section className="parallax2 ">
       
        <div className="i2 space-y-3">
          <h1 className="display-3 fw-semibold">About us</h1>
        </div>

      </section>

      <section className='clr py-5'>
        <div className='container clr1'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center'>
              <div className='line1 ms-5'></div>
              <h1 className='ms-5'>Who We Are</h1>
              <p className='ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. </p>
            </div>

            <div className='col-lg-6 p-0'>
              <img className='w-100 img-fluid p-2' src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img.jpg" alt="" />
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
          <div className='row gap-4 justify-content-center pt-3 fs-5'>
            <span className='col-12 col-lg-auto col-md-3'><BsFacebook />
            </span>
            <span className='col-12 col-lg-auto col-md-3'><IoLogoTwitter />
            </span>
            <span className='col-12 col-lg-auto col-md-3' ><RiInstagramFill />
            </span>
            <span className='col-12 col-lg-auto col-md-3'><SiGmail />
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
