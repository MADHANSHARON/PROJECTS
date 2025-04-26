import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

export const About = ({setPlayvideo}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayvideo(true)}}  />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit, error magni quae veritatis temporibus illo veniam explicabo cum qui itaque quibusdam! Omnis fuga eveniet placeat esse perspiciatis at doloremque?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsam veniam. Enim ex quasi amet provident ut, voluptatibus autem atque tempora ipsum velit eius voluptatem praesentium ullam at ad animi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum sint eum odio vitae adipisci iusto, assumenda earum, qui architecto distinctio numquam provident saepe perspiciatis reiciendis quos libero molestias expedita.</p>
        </div>

    </div>
  )
}
export default About