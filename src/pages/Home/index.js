import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../../layouts/Home/Footer'
import Header from '../../layouts/Home/Header'

export default function Home({ exact, path, component }) {
  return (
    <div className='container'>
      <Header />
      <Route exact={exact} path={path} component={component}></Route>
      <Footer />
    </div>
  )
}
