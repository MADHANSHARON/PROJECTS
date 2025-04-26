import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [amount,setAmount]=useState(1);
  const [fromCurrency,setFromCurrency]=useState("USD");
  const [toCurrency,settoCurrency]=useState("INR");
  const [conCurrency,setconCurrency]=useState(null);
  const [currentcurrency,setCurrentcurrency]=useState(null);
  

  useEffect(()=>{
    const getExchange=async () =>{
      try{
        let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(url);
        //console.log(res);
        setCurrentcurrency(res.data.rates[toCurrency]);
        

     }catch(error){
        console.error("error",error);
     }
    };
    getExchange();
  },[fromCurrency,toCurrency]);

useEffect(()=>{
  if(currentcurrency !==null){
    setconCurrency((amount * currentcurrency).toFixed(2));
  }
},[amount,currentcurrency]);

  function changeamt(e){
    const value =e.target.value;
    setAmount(isNaN(value) ? 0 :value);
  }
  const changefromcurrency =(e)=>{
    setFromCurrency(e.target.value);
  }
  const changetocurrency =(e)=>{
    settoCurrency(e.target.value);
  }
  return (
    <>
      <div className='currency-container'>
        <div className="box"></div>
        <div className="data">
          <h2>Currency Converter</h2>
          <div className="input-container">
            <label htmlFor="amt">Amount : </label>
            <input type="number" id="amt" onChange={changeamt} value={amount}/>
          </div>
          <div className="input-container">
            <label htmlFor="fromCurrency">From Currency</label>
            <select name="" id="froMCurrency" onChange={changefromcurrency} value={fromCurrency}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="CNY">CNY</option>
              <option value="INR">INR</option>
              <option value="BRL">BRL</option>
              <option value="ZAR">ZAR</option>
            </select>

          </div>
          <div className="input-container">
            <label htmlFor="toCurrency">To Currency</label>
            <select name="" id="toCurrency" onChange={changetocurrency} value={toCurrency}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="CNY">CNY</option>
              <option value="INR">INR</option>
              <option value="BRL">BRL</option>
              <option value="ZAR">ZAR</option>
            </select>
          </div>
          <div className="result">
            <p>{amount} {fromCurrency} is equal to {conCurrency } {toCurrency}</p>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default App
