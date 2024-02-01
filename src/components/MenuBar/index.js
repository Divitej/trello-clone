import React from "react";

import { CiHeart } from "react-icons/ci";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { CgBrowser } from "react-icons/cg";

import "./index.css"

const MenuBar = () => {
    const followingProfileImageUrls= ["https://d1b5fx1reua6f1.cloudfront.net/wp-content/uploads/2022/08/Profile-67.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYlze3zqrBi9OZLPUfdLsVyYqFZNKoip0Kw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJlUhlV--rPwiMBkxbqSraEYCdVmVyDrWfQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUttRzIyicZGpfcHVryzRiTx_rRdYTJH-SA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUZx_LL5Cu4SwnCQhMgHqQr16KSxmuylU0CehcQDluZ5l5pjmlFFUeuaXElS87dwzFh4&usqp=CAU"]
    return(
        <div className="menu-bar">
            <div className="brackets">
                <h3>Brackets</h3>
            </div>
            <div className="menu">
                <div className="menu-left">
                    <CiHeart />
                    <div className="public">
                        <HiOutlineGlobeAsiaAustralia />
                        <p>Public</p>
                    </div>
                    <CgBrowser />
                </div>
                <div className="menu-right">
                    <div className="profiles">
                        {
                            followingProfileImageUrls.map((item,index) => {
                                return(
                                    <img src={item} alt="profile" key={index} />
                                )
                            })
                        }
                        <div className="plus-44">
                            +44
                        </div>
                    </div>
                    <div className="menu-text">
                        <h3>Menu</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar