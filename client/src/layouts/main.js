import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import './main.scss'

export default function Main({ children }) {
  return (
    <div className="main__container_layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
