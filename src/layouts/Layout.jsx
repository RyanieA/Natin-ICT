import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Layout({children}) {
  return (
    <Fragment>
        <Navbar />
        {children}
        <Footer />
    </Fragment>
  )
}

