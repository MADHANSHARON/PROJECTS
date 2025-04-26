import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


export const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "16e300ca-482d-4813-b686-e8d44ff03ed2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className="contact-info">
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut recusandae voluptate consectetur, odit reiciendis ea dolore. Culpa architecto fuga laudantium deleniti ex non, eos beatae necessitatibus veniam odit sed illum.</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> abcdefghijklm@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> +1234-5678-789</li>
                <li> <img src={location_icon} alt="" /> 77 middle street,cambridge,MA 02139,United States</li>
            </ul>
        </div>
        <div className="contact-info">
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label >Write your messages here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn' >Submit now <img src={white_arrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
