"use client"
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
      <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact ">Contact</Link>
        

    </>
  )
}

export default Header
