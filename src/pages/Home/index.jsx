import React from 'react';
import './style.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'
import img from './images/def_img.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import EventCard from '../../components/EventCard';
import Datepicker from '../../components/Datepicker';

export default function Home() {
	const navigate = useNavigate();
	const months = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь'
	  ];
	const currentDate = new Date();
	const currentMonth = months[currentDate.getMonth()];

	const lastEvents = [...Array(4)];
	const events = [...Array(6)]

	function handleClick() {
	  navigate("/allEvents");
	}
  return (
    <div className="container">
		<h1 className="main-title">Мероприятия за {currentMonth}</h1>

		<div className="events-content-by-date">
			<div className="events-content-by-date-pre">
				<div className="events-content-content">
					{lastEvents.map(() => (
						<EventCard/>
					))}
				</div>
				<span className="show-all-span" onClick={handleClick}>Показать все</span>
			</div>

			<div className="events-content-calender">
				
				<Datepicker/>
			</div>
		</div>


		<h1 className="main-title">Последния мероприятия</h1>
		<div id="events-content-for-main-page" className="events-content">
			{events.map(() => (
				<EventCard/>
			))}
		</div>
	</div>
  )
}
