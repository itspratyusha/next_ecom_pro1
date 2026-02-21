import Link from 'next/link'
import React from 'react'

function footer() {
  return (
    <>
      <section className="py-5">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-3 ">
              <h3 className="pb-3 fw-bold">Quick Links </h3>
             <p> <Link href="/" className='text-decoration-none text-black'>Home</Link> </p>
               <p><Link href="/about/" className='text-decoration-none text-black'>About</Link> </p>
               <p><Link href="" className='text-decoration-none text-black'>My Account</Link> </p>
              <p><Link href="" className='text-decoration-none text-black'>Cart</Link> </p>
              <p><Link href="/contact/" className='text-decoration-none text-black'>Contact</Link> </p>
            </div>
            <div className="col-lg-3">
              <h3 className="pb-3 fw-bold">For Her </h3>
              <p> <Link href="/categories/beauty" className='text-decoration-none text-black'>Beauty</Link> </p>
               <p><Link href="/categories/groceries" className='text-decoration-none text-black'>Groceries</Link> </p>
               <p><Link href="/categories/beauty" className='text-decoration-none text-black'>Accessories</Link> </p>
              <p><Link href="/categories/fragrances" className='text-decoration-none text-black'> Women Fragrance</Link> </p>
              <p><Link href="/categories/home-decoration" className='text-decoration-none text-black'>Decoration</Link> </p>
            </div>
            <div className="col-lg-3">
              <h3 className="pb-3 fw-bold">For Him </h3>
              <p><Link href="/categories/fragrances" className='text-decoration-none text-black'>Men Perfumes</Link> </p>
              <p> <Link href="/categories/home-decoration" className='text-decoration-none text-black'> Decoration</Link> </p>
               <p><Link href="/categories/fragrances" className='text-decoration-none text-black'> Fragrance </Link> </p>
               <p><Link href="/categories/groceries" className='text-decoration-none text-black'>Groceries </Link> </p>
              <p><Link href="/categories/home-decoration" className='text-decoration-none text-black'> Accessories</Link> </p>
              
          
            </div>
            <div className="col-lg-3">
              <h3 className="pb-3 fw-bold">DOWNLOAD</h3>
              <Link  href={`https://play.google.com/store/games?device=windows`} target="_blank" ><img className="w-50" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/playstore-free-img.png" alt='' /> </Link> 
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

export default footer
