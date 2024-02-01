import React from "react"


import { BsThreeDots } from "react-icons/bs";


import './index.css'

const TopHead = props => {
    const {name} = props

    return(
        <div className="topHead">
            <p>{name}</p>
            <span><BsThreeDots /></span>
        </div>
    )
}

export default TopHead