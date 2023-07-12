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
            <Link to="/tvshows">Tv Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recent">Recently Added</Link>
            <Link to="/mylist">My List</Link>
          </div>

          <FiSearch />

    </nav>

  )
}

export default Header