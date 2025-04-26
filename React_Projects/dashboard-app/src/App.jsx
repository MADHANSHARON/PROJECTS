import React, { useState } from 'react'
import  {Navbar} from './components/navbar/Navbar'
import Hero from './components/hero/Background'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonial from './components/testimonial/Testimonial'
import { Contact } from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Videoplayer } from './components/videoplayer/Videoplayer'




export const App = () => {

const[playvideo,setPlayvideo]=useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
       <Title subTitle='Our program' Title='what we offer' />
       <Programs />
       <About setPlayvideo={setPlayvideo}/>
       <Title subTitle='GALLERY' Title='Campus Photos' />
       <Campus />
       <Title subTitle='TESTIMONIALS' Title='What Students Says' />
       <Testimonial />
       <Title subTitle='Contact us' Title='Get In Touch' />
       <Contact />
       <Footer />
      </div>
      <Videoplayer setPlayvideo={setPlayvideo} playvideo={playvideo} />
      
    </div>
  )
}
export default App