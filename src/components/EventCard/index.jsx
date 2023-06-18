import React from 'react';
import './style.css';
import img from './images/def_img.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function EventCard({
  id,
  nameRu,
  nameKg,
  date,
  descriptionRu,
  descriptionKg,
  image
}) {
    const navigate = useNavigate();

  function handleClick() {
    navigate("/eventPage");
  }
  return (
    <div className="event" >
        <Link to="/eventPage" style={{textDecoration:"none", color:"#1C3467"}} relative='path'>
            <div className="event-image-div">
                <img src={img} alt=""/>
                <div className="event-date">
                    <span>21.03.2023</span>
                </div>
            </div>
            <div className="event-content-box">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cum fuga dignissimos autem enim aliquam necessitatibus, tempore dicta atque animi...</p>
            </div>
            </Link>
        </div>
  )
}
