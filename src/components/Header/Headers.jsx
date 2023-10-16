import React from 'react'
import logo from "../../logo.png"
import {Link} from "react-router-dom"
import {FiSearch} from "react-icons/fi"


const Header = () => {
  console.log(logo)
  return (
    <nav className='header'>

          <img src={logo} alt="" />

          <div>
            <Link to="/React-App-of-Netflix-Clone">Tv Shows</Link>
            <Link to="/React-App-of-Netflix-Clone">Movies</Link>
            <Link to="/React-App-of-Netflix-Clone">Recently Added</Link>
            <Link to="/React-App-of-Netflix-Clone">My List</Link>
          </div>

          <FiSearch />

    </nav>

  )
}

export default Header