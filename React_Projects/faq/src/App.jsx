import { useState } from 'react'

import './App.css'

const Faqitem=({question,answer})=>{
  const [show,setShow]=useState(false);
  const open=()=>{
  setShow(!show);
}

   return(
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={open}>
        {question}
      </div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
         {answer}
        </div>
      </div>
    </div>
   )
}
const Faq =({data})=>{
  return(
    <div className='faq-accordion'>
      <h2>FAQs</h2>
      {data.map((item)=>(<Faqitem key={item.id} question={item.question} answer={item.answer} />))}
    </div>
  )
}

const data=[{id:1,question:"what is react?",answer:"it is a framework."},
  {id:2,question:"what is react ?",answer:"it is a framework."},{id:3,question:"what is react?",answer:"it is a framework."}
]


function App() {


  return (
    <>
     <Faq data={data} />
    </>
  )
}

export default App
