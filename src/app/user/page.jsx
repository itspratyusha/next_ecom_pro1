"use client"
import Link from 'next/link'
import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";

function LoginPage() {
  return (
    <>
      <section className='py-5 bg-light min-vh-100 d-flex align-items-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-10 col-md-8 col-lg-5'>
              <form className='card p-4 p-md-5 shadow border-0'>
                <h3 className='fw-bold py-3 text-center display-6'>User Login</h3>


                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  <div className="form-text">We'll never share your email with anyone else.</div>
                </div>

   
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>

               
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>

        
                <button type="submit" className="btn btn-primary w-100 py-2 mb-3">Login</button>

                <div className='text-center'>
                  <Link href="/" className="text-decoration-none">
                    <BsArrowLeftShort size={20} className='me-1' />
                    Back to homepage
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage;