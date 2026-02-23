import Link from 'next/link'
import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";

function page() {
  return (
    <>
    <section className='py-5 '>
        <div className='container mt-5 mb-5'>       
<form className='card p-5 marg2 shadow border-0'>
    <div className="marg3">
  <div className="mb-3">
    <h3 className='fw-bold py-4 display-5'>User Login</h3>
    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address: </label>
    <input type="email" className="px-5" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password:</label>
    <input type="password" className="px-5" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button> <br/>
  <div className='mt-3'>
<Link href="/" className="text-decoration-none ">
 <span><BsArrowLeftShort />
</span>
  <span> Back to homepage</span>
  </Link>
 </div>
  </div>
</form>
 </div>
    </section>
    </>
  )
}

export default page
