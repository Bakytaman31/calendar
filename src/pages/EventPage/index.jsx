import React from 'react';
import './style.css';
import img from './images/def_img.png';

export default function EventPage() {
  return (
    <div className="container">
		<div className="event-page-title">
			<span>Lorem ipsum</span>
		</div>
		<div className="event-page-place-date">
			<div className="event-page-date">
				<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.66675 7.99996C1.66675 6.7538 1.66675 6.13073 1.9347 5.66663C2.11023 5.36259 2.36271 5.11011 2.66675 4.93457C3.13085 4.66663 3.75393 4.66663 5.00008 4.66663H15.0001C16.2462 4.66663 16.8693 4.66663 17.3334 4.93457C17.6375 5.11011 17.8899 5.36259 18.0655 5.66663C18.3334 6.13073 18.3334 6.7538 18.3334 7.99996V7.99996C18.3334 8.3115 18.3334 8.46727 18.2664 8.58329C18.2225 8.6593 18.1594 8.72242 18.0834 8.76631C17.9674 8.83329 17.8116 8.83329 17.5001 8.83329H2.50008C2.18854 8.83329 2.03277 8.83329 1.91675 8.76631C1.84074 8.72242 1.77762 8.6593 1.73374 8.58329C1.66675 8.46727 1.66675 8.3115 1.66675 7.99996V7.99996Z" fill="#888888"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 14.8333C1.66675 16.719 1.66675 17.6618 2.25253 18.2475C2.83832 18.8333 3.78113 18.8333 5.66675 18.8333H14.3334C16.219 18.8333 17.1618 18.8333 17.7476 18.2475C18.3334 17.6618 18.3334 16.719 18.3334 14.8333V11.5C18.3334 11.0286 18.3334 10.7929 18.187 10.6464C18.0405 10.5 17.8048 10.5 17.3334 10.5H2.66675C2.19534 10.5 1.95964 10.5 1.81319 10.6464C1.66675 10.7929 1.66675 11.0286 1.66675 11.5V14.8333ZM5.83341 13C5.83341 12.6885 5.83341 12.5327 5.9004 12.4167C5.94429 12.3407 6.00741 12.2775 6.08342 12.2337C6.19944 12.1667 6.35521 12.1667 6.66675 12.1667H8.33342C8.64495 12.1667 8.80072 12.1667 8.91675 12.2337C8.99276 12.2775 9.05588 12.3407 9.09976 12.4167C9.16675 12.5327 9.16675 12.6885 9.16675 13C9.16675 13.3115 9.16675 13.4673 9.09976 13.5833C9.05588 13.6593 8.99276 13.7225 8.91675 13.7663C8.80072 13.8333 8.64495 13.8333 8.33342 13.8333H6.66675C6.35521 13.8333 6.19944 13.8333 6.08342 13.7663C6.00741 13.7225 5.94429 13.6593 5.9004 13.5833C5.83341 13.4673 5.83341 13.3115 5.83341 13ZM5.9004 15.75C5.83341 15.866 5.83341 16.0218 5.83341 16.3333C5.83341 16.6449 5.83341 16.8006 5.9004 16.9167C5.94429 16.9927 6.00741 17.0558 6.08342 17.0997C6.19944 17.1667 6.35521 17.1667 6.66675 17.1667H8.33342C8.64495 17.1667 8.80072 17.1667 8.91675 17.0997C8.99276 17.0558 9.05588 16.9927 9.09976 16.9167C9.16675 16.8006 9.16675 16.6449 9.16675 16.3333C9.16675 16.0218 9.16675 15.866 9.09976 15.75C9.05588 15.674 8.99276 15.6109 8.91675 15.567C8.80072 15.5 8.64495 15.5 8.33342 15.5H6.66675C6.35521 15.5 6.19944 15.5 6.08342 15.567C6.00741 15.6109 5.94429 15.674 5.9004 15.75ZM10.8334 13C10.8334 12.6885 10.8334 12.5327 10.9004 12.4167C10.9443 12.3407 11.0074 12.2775 11.0834 12.2337C11.1994 12.1667 11.3552 12.1667 11.6667 12.1667H13.3334C13.645 12.1667 13.8007 12.1667 13.9167 12.2337C13.9928 12.2775 14.0559 12.3407 14.0998 12.4167C14.1667 12.5327 14.1667 12.6885 14.1667 13C14.1667 13.3115 14.1667 13.4673 14.0998 13.5833C14.0559 13.6593 13.9928 13.7225 13.9167 13.7663C13.8007 13.8333 13.645 13.8333 13.3334 13.8333H11.6667C11.3552 13.8333 11.1994 13.8333 11.0834 13.7663C11.0074 13.7225 10.9443 13.6593 10.9004 13.5833C10.8334 13.4673 10.8334 13.3115 10.8334 13ZM10.9004 15.75C10.8334 15.866 10.8334 16.0218 10.8334 16.3333C10.8334 16.6449 10.8334 16.8006 10.9004 16.9167C10.9443 16.9927 11.0074 17.0558 11.0834 17.0997C11.1994 17.1667 11.3552 17.1667 11.6667 17.1667H13.3334C13.645 17.1667 13.8007 17.1667 13.9167 17.0997C13.9928 17.0558 14.0559 16.9927 14.0998 16.9167C14.1667 16.8006 14.1667 16.6449 14.1667 16.3333C14.1667 16.0218 14.1667 15.866 14.0998 15.75C14.0559 15.674 13.9928 15.6109 13.9167 15.567C13.8007 15.5 13.645 15.5 13.3334 15.5H11.6667C11.3552 15.5 11.1994 15.5 11.0834 15.567C11.0074 15.6109 10.9443 15.674 10.9004 15.75Z" fill="#888888"/>
				<path d="M5.83325 3L5.83325 5.5" stroke="#888888" strokeWidth="2" strokeLinecap="round"/>
				<path d="M14.1667 3L14.1667 5.5" stroke="#888888" strokeWidth="2" strokeLinecap="round"/>
				</svg>
				<span>21.03.2023</span>
			</div>
			<div className="event-page-place">
				<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M10.3994 16.9679C11.7158 16.2735 15.8332 13.7736 15.8332 9.66671C15.8332 6.44505 13.2215 3.83337 9.99984 3.83337C6.77818 3.83337 4.1665 6.44505 4.1665 9.66671C4.1665 13.7736 8.28392 16.2735 9.6003 16.9679C9.85226 17.1008 10.1474 17.1008 10.3994 16.9679ZM9.99984 12.1667C11.3805 12.1667 12.4998 11.0474 12.4998 9.66671C12.4998 8.286 11.3805 7.16671 9.99984 7.16671C8.61913 7.16671 7.49984 8.286 7.49984 9.66671C7.49984 11.0474 8.61913 12.1667 9.99984 12.1667Z" fill="#888888"/>
				</svg>
				<span>г. Бишкек</span>
			</div>
		</div>

		<div className="event-page-img">
			<img src={img} alt=""/>
		</div>

		<div className="event-page-content">
			<h2 className="event-page-subtitle">О мероприятии</h2>
			<p>Lorem ipsum dolor sit amet consectetur. Ultricies viverra egestas tellus et nibh. Consectetur lectus magna rhoncus maecenas malesuada vitae vel gravida condimentum. Sapien nunc condimentum pharetra aliquam scelerisque cras. Lectus vehicula lorem sit neque tempus sociis. Nec massa in volutpat volutpat neque mauris. Phasellus nibh fringilla eros sit eu diam elit orci tempus. Sit a habitasse feugiat id egestas consequat id augue quis. Natoque nisl convallis massa elementum platea at odio eget. Vel a tortor tortor faucibus est at egestas ipsum diam. Ut a viverra montes auctor senectus sit. Fermentum porttitor malesuada cras sit diam tristique proin lacus. Elit mi urna amet et tortor ultrices id facilisis. Fermentum turpis nec ultrices suspendisse risus purus a. Lectus quis mi eu nibh eu convallis aliquam. Tortor lectus nisi varius condimentum ullamcorper faucibus ac tellus duis. Nulla risus nam aliquet metus in tempor adipiscing. Enim praesent tortor arcu ipsum nibh sed facilisi sed. Bibendum convallis commodo dolor vitae cras fringilla. Quis sapien in urna diam.

			Fermentum turpis nec ultrices suspendisse risus purus a. Lectus quis mi eu nibh eu convallis aliquam. Tortor lectus nisi varius condimentum ullamcorper faucibus ac.

			Lorem ipsum dolor sit amet consectetur. Ultricies viverra egestas tellus et nibh. Consectetur lectus magna rhoncus maecenas malesuada vitae vel gravida condimentum. Sapien nunc condimentum pharetra aliquam scelerisque cras. Lectus vehicula lorem sit neque tempus sociis. Nec massa in volutpat volutpat neque mauris. Phasellus nibh fringilla eros sit eu diam elit orci tempus. Sit a habitasse feugiat id egestas consequat id augue quis. Natoque nisl convallis massa elementum platea at odio eget. Vel a tortor tortor faucibus est at egestas ipsum diam. Ut a viverra montes auctor senectus sit. Fermentum porttitor malesuada cras sit diam tristique proin lacus. Elit mi urna amet et tortor ultrices id facilisis. Fermentum turpis nec ultrices suspendisse risus purus a. Lectus quis mi eu nibh eu convallis aliquam. Tortor lectus nisi varius condimentum ullamcorper faucibus ac tellus duis. Nulla risus nam aliquet metus in tempor adipiscing. Enim praesent tortor arcu ipsum nibh sed facilisi sed. Bibendum convallis commodo dolor vitae cras fringilla. Quis sapien in urna diam.</p>

			<div className="event-page-video">
				<iframe src="https://www.youtube.com/embed/l6rS8Dv5g-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
			</div>

			<h2 className="event-page-subtitle">Где и когда?</h2>
			<span><b>Дата проведения:</b> 21.03.2023</span>
			<span><b>Время:</b> 13:30</span>
			<span><b>Место события:</b> Площадь Ала-Тоо</span>
			<span><b>Вход:</b> свободный</span>

			<h2 className="event-page-subtitle">Организатор</h2>
			<span><b>ФИО:</b> Баланиев Баланча Баланчиевич</span>
			<span><b>Номер телефона:</b> +996 777 777 777</span>
			<span><b>Почта:</b> balanchiev@gmail.com </span>
		</div>

	</div>
  )
}
