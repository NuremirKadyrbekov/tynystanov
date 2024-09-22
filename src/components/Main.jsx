import React from 'react'
import Head from './Header/Head/Head'
import Home from './Home/Home'
import Footer from './Footer/Footer'

function Main({onChangeLanguage}) {
  return (
    <div className='Master'>
      <Head onChangeLanguage={onChangeLanguage}/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default Main
