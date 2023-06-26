import React, { useState } from 'react'
import './navbar.css'
import { NavLink, Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const currentUSer = {
    img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    username: "John Doe",
    isAdmin: true
  };

  // const currentUSer = null;

  // window.onmouseover = () => {
  //   setActive(false);
  // }

  return (
    <>
      <header className="header">
        <div className='container'>

          <div className='firstDiv'
            onClick={() => setActive((prev) => !prev)}>
            <MenuRoundedIcon className='menu-btn' id="menu-btn"
              sx={{
                fontSize: "2.5rem",
                color: "#666",
                cursor: "pointer",
                fontWeight: "800",
              }}
            />
          </div>

          <div className='logo'>
            <NavLink to="/" className='link'>
              <span className='text'>Found</span>
            </NavLink>
            <span className='dot'>.</span>

            {/* <img src='img/logo.jpg'/> */}
          </div>

          <div className={active ? "links active" : "links"}>
            <NavLink to="/"><span>Home</span></NavLink>
            <NavLink to="/contact"> <span>Contact Us</span></NavLink>
            {
              currentUSer?.isAdmin && (
                <>
                  <NavLink className='link' to="/upload" ><span>Add product</span></NavLink>
                </>
              )
            }
            <NavLink to="/products" ><span>Proucts <KeyboardArrowDownIcon /></span>
              <div className='sub-links'>
                <span>All</span>
                <span>Electronics</span>
                <span>Stationary</span>
                <span>Calculator</span>
                <span>Id Cards</span>
                <span>Others</span>
              </div>
            </NavLink>
          </div>

          <div className="login_btn">
            {!currentUSer && <Link to="/login"><span className='btn'>Sign in</span></Link>}
            {!currentUSer && <Link to="/login"> <AccountCircleIcon className='fa-user' sx={{
              fontSize: "2.5rem",
              color: "#666",
              cursor: "pointer",
              fontWeight: "800",
              display: "none"
            }} /></Link>}

            {
              currentUSer && (
                <>
                  <div className='user' onClick={() => setOpen(!open)}>
                    <img src={currentUSer?.img} alt="" />
                    <span>{currentUSer?.username}</span>
                    {open && <div className='options'>
                      <Link className='link' to="/message" ><span>Message</span></Link>
                      <Link className='link' to="/"><span>Logout</span></Link>
                    </div>}
                  </div>
                </>
              )
            }
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar