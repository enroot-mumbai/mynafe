import React from 'react'
import Footer from './Footer'
import Head from './Head'
import Navigation from './Navigation'

type Props = {
    children: any
}

function Layout({children}: Props) {
  return (
    <>
        <Head/>
        <Navigation/>
            {children}
        <Footer/>
    </>
  )
}

export default Layout