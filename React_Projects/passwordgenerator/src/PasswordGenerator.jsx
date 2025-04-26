import {useState} from 'react'

export const PasswordGenerator = () => {
  const [length,setLength]=useState(8);
  const [uppercase,setUppercase]=useState(true);
  const [lowercase,setLowercase]=useState(true);
  const [number,setNumber]=useState(true);
  const [symbol,setSymbol]=useState(true);
  const [password,setPassword]=useState("");

  const generatepassword = () => {
    let charset="";

    if(uppercase) charset +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lowercase) charset +="abcdefghijklmnopqrstuvwxyz";
    if(number) charset +="0123456789";
    if(symbol) charset +="!@#$%^&*()-_=+{}[]<>?/";
    
    let generatedpassword="";
    for(let i=0;i<length;i++){
      const rannumber=Math.floor(Math.random()*charset.length);
      generatedpassword+= charset[rannumber];
    }
    setPassword(generatedpassword);
  };

  const copytext =()=>{
    navigator.clipboard.writeText(password);
    alert("Text copied")
  }
 
  return (
    <>
    <div className="container">
      <h2>Strong password Generator</h2>
    <div className="inputbar">
      <label htmlFor="length">Enter length : </label>
      <input type="number" name="" id="length" onChange={(e)=>setLength(parseInt(e.target.value))} value={length}/>
    </div>
    <div className="checkbox">
      <input type="checkbox"  id="uppercase" checked={uppercase} onChange={(e)=>{setUppercase(e.target.checked)}}/>
      <label htmlFor="uppercase">Include Uppercase</label>
    </div>
    <div className="checkbox">
      <input type="checkbox"  onChange={(e)=>{setLowercase(e.target.checked)}} id="lowercase" checked={lowercase}/>
      <label htmlFor="lowercase">Include lowercase</label>
    </div>
    <div className="checkbox">
      <input type="checkbox"  onChange={(e)=>{setNumber(e.target.checked)}} id="number" checked={number}/>
      <label htmlFor="number">Include number</label>
    </div>
    <div className="checkbox">
      <input type="checkbox"  onChange={(e)=>{setSymbol(e.target.checked)}} id="symbol" checked={symbol} />
      <label htmlFor="symbol">Include symbol</label>
    </div>
    <div className="generate-btn">
      <button className='gen-btn' onClick={generatepassword}>Generate Password</button>
    </div>
    <div className="result-bar">
      <input type="text" readOnly value={password}/>
      <button className='cpy-btn' onClick={copytext} >Copy</button>
    </div>
    </div>
    </>
  )
}
