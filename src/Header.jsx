import React from "react"
import {Link,} from "react-router-dom"
import Logo from "./logo.png"
import "./Responsive.css"


let Header = ()  => {
  return(
    <>
      <header className="Header_main_con">
        <section className="Header_section">
          <div className="logo_section">
            <img src={Logo} alt="Logo" className="Header_logo" />
          </div>
          <div className="nav_section">
            <nav>
              <ul className="Navbar">
                <Link to  = "/"><li className="List_item">HOME</li></Link>
                <Link to  = "/about"><li className="List_item">ABOUT</li></Link>
                <Link to  = "/HotItem"><li className="List_item">HOT ITEMS</li></Link>
                <Link to  = "/contact"><li className="List_item">CONTACT</li></Link>
              </ul>
            </nav>
          </div>
          <div className="button_section">
            <button className="Header_btn" ><i className="fa-regular fa-user"></i>Sign in</button>
            <button className="header_btn2"><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header;