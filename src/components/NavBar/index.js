import React from "react"


import { FaSearch } from "react-icons/fa";
import { MdOutlineSignalCellularAlt2Bar } from "react-icons/md";
import { CiCirclePlus,CiCircleInfo,CiBellOn } from "react-icons/ci";

import './index.css'
import LOGO from '../../assets/images/logo.png'

const NavBar = () => {
    return(
    <div className="navbar">
        <div className="nav-left">
            <div className="logo">
                <img src={LOGO} alt="logo" className="logo-img"/>
            </div>
            <div className="boards">
                <MdOutlineSignalCellularAlt2Bar />
                <p>Boards</p>
            </div>
            <div className="search-bar">
                <form>
                    <div className="search-field-container">
                        <input type="search" id="search" name="search" className="search-field" />
                        <div className="search-icon-container">
                            <FaSearch className="search-icon" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="nav-right">
            <CiCirclePlus className="nav-right-icon" />
            <CiCircleInfo className="nav-right-icon" />
            <CiBellOn className="nav-right-icon" />
            <img src="https://media.licdn.com/dms/image/D5603AQGh7hPLIWGwcQ/profile-displayphoto-shrink_800_800/0/1687331266124?e=2147483647&v=beta&t=FfCihQ75bbJ1V_QjF9KhoAnAzZKv7bz0fqxMu1T7YuI" alt="profile-img" className="profile-pic" />

        </div>
    </div>
    )
}

export default NavBar