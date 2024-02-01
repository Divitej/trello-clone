import React from "react"

import { RiMessage2Line,RiAttachment2  } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

import { UnderLine } from "./styledComponent"
import './index.css'
import PLUS from '../../assets/images/plus-circle-icon.png'

const Card = props => {
    const { data } = props
    const { imgLink,colors, cardHeading, cardDescription, followingProfileImageUrls, comments, likes, followers} = data
    return(
        <div className="card">
            {imgLink ? <img src={imgLink} alt="card" className="card-img" /> : null}
            <div className="colors-underline">
                {colors.map((item,index) => {
                    return(
                        <UnderLine color={item} key={index} />
                    )
                })}
            </div>
            <div className="card-description">
                <h3>{cardHeading}</h3>
                <p>{cardDescription}</p>
            </div>

            <div className="card-footer">
                <div className="following-profile-images">
                    {followingProfileImageUrls.map((item,index) => {
                        return(
                            <img src={item} key={index} alt="following-profile" />
                        )
                    })}
                    <img src={PLUS} alt="add" />

                </div>
                <div className="card-footer-right">
                    <span>{comments} <RiMessage2Line /></span>
                    <span>{likes} <CiHeart /></span>
                    <span>{followers} <RiAttachment2  /></span>
                </div>
            </div>

        </div>
    )
}

export default Card