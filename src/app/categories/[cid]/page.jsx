"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
    let {cid}=useParams()
     let [data, setData]=useState([])
        useEffect(()=>{
            fetch(`https://dummyjson.com/products/category/${cid}`).then(a=>a.json()).then(b=>setData(b.products))
        },[cid])
  return (
    <>
    
      {cid}
      {data.map((a) => (
              <div className="col-3 mb-4">
                <div className="card p-3">
                  <img className="card-img w-75" src={a.thumbnail} alt='' />
                  <div className="card-body hh">
                    <h4 className='txt'>{a.title}</h4>
                    <p>${a.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
  )
}

export default page
