import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo_crypt.png"
import arrow_icon from "../../assets/arrow_icon.png"
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (e) => {
    switch (e.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"})
        break;
      }
      case "cny": {
        setCurrency({name: "cny", symbol: "¥"})
        break;
      }
      default: {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={"/"}>
      <div className='logo'>
        <img src={logo} alt=""/>
        <span>CRYPTOJAIYQ</span>
      </div>
      </Link>
      <ul>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/jaiyq-coin"}><li>Feature</li></Link>
        <Link to={"/pricing"}><li>Pricing</li></Link>
        <Link to={"/blog"}><li>Blog</li></Link>
      </ul>
    <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="cny">CNY</option>
        </select>
        <Link to={"/sign-up"}><button>Sign up<img src={arrow_icon} alt=""/></button></Link>
    </div>
    </div>
  )
}

export default Navbar
