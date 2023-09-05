import React, {useState} from "react";
import "./Navbar.css";


//import images
import logo from "../../assets/lo.jpg";

//import icons
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { BsWindowDesktop } from "react-icons/bs";

const Navbar = () => {

  //statement to hold th navbar state
  const [navbar, setNavbar]=useState('navbar')

  //function to show navbar on smaller width screens
  const showNavbar=()=>{
    setNavbar('navbar showNavbar')
  }
  
  //function to remove navbar on smaller width screens
const removeNavbar=()=>{
  setNavbar('navbar ')
}

  //functon to add a background to the Navbar when we scroll a certain height on the windonw
  const[header, setHeader]=useState('header')
  const addBg= ()=>{
    if(window.scrollY >= 20){
      setHeader('header addBg')
    }
  }

window.addEventListener('scroll', addBg)


  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="Logo image" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar}  className="listItem">
            <a href="/" className="link">
              Used Cars
            </a>
          </li>
          <li onClick={removeNavbar}  className="listItem">
            <a href="/" className="link">
              New Cars
            </a>
          </li>
          <li onClick={removeNavbar}  className="listItem">
            <a href="/" className="link">
              Auction
            </a>
          </li>
          <li onClick={removeNavbar}  className="listItem">
            <a href="/" className="link">
              Sell
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className="icon closeicon" onClick={removeNavbar} />
      </div>
      <div className="signUp flex">
        <div className="text">Sign Up</div>

        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  )
}

export default Navbar
