import Link from 'next/link'
import React from 'react'

function footer() {
  return (
    <>
      <section className="py-5">
        <div className="container ">
          <div className="row ">
            <div className="col-12 col-sm-6 col-lg-3 mb-4  ">
              <h3 className="pb-3 fw-bold">Quick Links </h3>
             <p> <Link href="/" className='text-decoration-none text-black ais'>Home</Link> </p>
               <p><Link href="/about/" className='text-decoration-none text-black ais'>About</Link> </p>
               <p><Link href="" className='text-decoration-none text-black ais'>My Account</Link> </p>
              <p><Link href="" className='text-decoration-none text-black ais'>Cart</Link> </p>
              <p><Link href="/contact/" className='text-decoration-none text-black ais'>Contact</Link> </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <h3 className="pb-3 fw-bold">For Her </h3>
              <p> <Link href="/categories/beauty" className='text-decoration-none text-black ais'>Beauty</Link> </p>
               <p><Link href="/categories/groceries" className='text-decoration-none text-black ais'>Groceries</Link> </p>
               <p><Link href="/categories/beauty" className='text-decoration-none text-black ais'>Accessories</Link> </p>
              <p><Link href="/categories/fragrances" className='text-decoration-none text-black ais'> Women Fragrance</Link> </p>
              <p><Link href="/categories/home-decoration" className='text-decoration-none text-black ais'>Decoration</Link> </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <h3 className="pb-3 fw-bold">For Him </h3>
              <p><Link href="/categories/fragrances" className='text-decoration-none text-black ais'>Men Perfumes</Link> </p>
              <p> <Link href="/categories/home-decoration" className='text-decoration-none text-black ais'> Decoration</Link> </p>
               <p><Link href="/categories/fragrances" className='text-decoration-none text-black ais'> Fragrance </Link> </p>
               <p><Link href="/categories/groceries" className='text-decoration-none text-black ais'>Groceries </Link> </p>
              <p><Link href="/categories/home-decoration" className='text-decoration-none text-black ais'> Accessories</Link> </p>
              
          
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
              <h3 className="pb-3 fw-bold">DOWNLOAD</h3>
              
              <Link  href={`https://play.google.com/store/games?device=windows`} target="_blank" ><img className="w-50 img-fluid ais1" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/playstore-free-img.png" alt='' /> </Link> 
               <Link  href={`https://www.apple.com/app-store/`} target="_blank" ><img className="w-50 mt-2 img-fluid p-0 ais1" src="https://imgs.search.brave.com/IMNz4UsLaRyK_IouoNatRUNpUcQyJd2rdmG1xJLYZ5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmF2/ZS5jb20vc3RhdGlj/LWFzc2V0cy9pbWFn/ZXMvb3B0aW1pemVk/L2FwcC1zdG9yZS1i/YWRnZS5lbi5wbmc" alt='' /> </Link> 
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
