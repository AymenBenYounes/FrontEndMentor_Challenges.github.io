import { useState } from 'react'
import News from './components/News'
import Field from './components/Field'
import dashboard from './assets/illustration-dashboard.png'
import Footer from './components/Footer'
const App = () => {

  return (
    <div className="box-border p-0 m-0">
      <News />      
      <Field />
      <img className='my-12 mx-auto w-image sm:w-morehalf lg:w-half 2xl:w-lesshalf' src={dashboard} alt="dashboard"></img>
      <Footer />
    </div>
  )
}

export default App
