import React, { useEffect, useRef } from 'react';
import './style.css';
import logo from './images/logo.svg';
import standart from './images/standart.svg';
import uvel from './images/uvel.svg';
import kg from './images/kg.png';
import ru from './images/ru.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {

	const {t, i18n} = useTranslation();

		const nav = useRef();
		const langUnderBlock = useRef();
		const uvelUnderBlock = useRef();
		const back = useRef();
	
	 const onBurgerClick = () => {
		console.log(nav.current)
		nav.current.classList.toggle(`burger-active`);
		back.current.classList.toggle(`header__logo_active`);
	};

	 const onCloseClick = () => {
		nav.current.classList.remove(`burger-active`);
		back.current.classList.remove(`header__logo_active`);
	};

	 const onLangClick = () => {
		if (langUnderBlock.current.classList.contains(`under_header__sublist_unactive`)) {
			langUnderBlock.current.classList.remove(`under_header__sublist_unactive`);
		} else {
			langUnderBlock.current.classList.add(`under_header__sublist_unactive`);
		}
	};


	 const onUvelClick = () => {
		if (uvelUnderBlock.current.classList.contains(`under_header__sublist_unactive`)) {
			uvelUnderBlock.current.classList.remove(`under_header__sublist_unactive`);
		} else {
			uvelUnderBlock.current.classList.add(`under_header__sublist_unactive`);
		}
	};

	const changeLang = lang => {
		i18n.changeLanguage(lang);
	  }
  return (
    <header className="header">
		<div className="header__container">
			<div className="header__body">

				<div className="header__burger" onClick={onBurgerClick}>
					<div className="header__burger_line"></div>
					<div className="header__burger_line"></div>
					<div className="header__burger_line"></div>
				</div>


				<Link to="/" className='header__logo' relative="path" ref={back}>
					<img src={logo} alt=""/>
				</Link>


				<nav className="header__menu" ref={nav}>
          <Link to="/" className='header__logo_burger' relative="path">
						<img src="./images/logo.svg" alt=""/>
          </Link>

					<div className="social-medias">
						<a href="https://www.facebook.com/minculturegovkg/" className="soc-med">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_261_368)">
								<path d="M17.5425 13.398L18.2036 9.08737H14.0677V6.29002C14.0677 5.11069 14.6454 3.96117 16.4979 3.96117H18.3784V0.291281C18.3784 0.291281 16.6718 0 15.0403 0C11.6338 0 9.40752 2.06447 9.40752 5.80195V9.08737H5.62109V13.398H9.40752V23.8188C10.1668 23.938 10.9449 24 11.7376 24C12.5303 24 13.3085 23.938 14.0677 23.8188V13.398H17.5425Z" fill="#687076"/>
								</g>
								<defs>
								<clipPath id="clip0_261_368">
								<rect width="24" height="24" fill="white"/>
								</clipPath>
								</defs>
							</svg>
						</a>

						<a href="https://www.instagram.com/madaniyat_gov.kg/?hl=ru" className="soc-med">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_261_370)">
								<path fillRule="evenodd" clipRule="evenodd" d="M12.0001 5.83781C8.59677 5.83781 5.83789 8.59669 5.83789 12C5.83789 15.4032 8.59677 18.1621 12.0001 18.1621C15.4033 18.1621 18.1622 15.4032 18.1622 12C18.1622 8.59669 15.4033 5.83781 12.0001 5.83781ZM12.0001 15.9999C9.79091 15.9999 8.00005 14.2091 8.00005 12C8.00005 9.79083 9.79091 7.99997 12.0001 7.99997C14.2092 7.99997 16 9.79083 16 12C16 14.2091 14.2092 15.9999 12.0001 15.9999Z" fill="#687076"/>
								<path d="M18.4056 7.03434C19.2009 7.03434 19.8456 6.38967 19.8456 5.59434C19.8456 4.79906 19.2009 4.15439 18.4056 4.15439C17.6103 4.15439 16.9656 4.79906 16.9656 5.59434C16.9656 6.38967 17.6103 7.03434 18.4056 7.03434Z" fill="#687076"/>
								<path fillRule="evenodd" clipRule="evenodd" d="M12 0C8.74097 0 8.33231 0.0138281 7.05239 0.0722344C5.77514 0.1305 4.9028 0.333328 4.13948 0.63C3.35039 0.936656 2.68116 1.347 2.01408 2.01412C1.34695 2.6812 0.936609 3.35044 0.629953 4.13953C0.333281 4.9028 0.130453 5.77514 0.0721875 7.05239C0.0137812 8.33231 0 8.74097 0 12C0 15.2589 0.0137812 15.6676 0.0721875 16.9475C0.130453 18.2248 0.333281 19.0971 0.629953 19.8604C0.936609 20.6495 1.34695 21.3187 2.01408 21.9859C2.68116 22.653 3.35039 23.0633 4.13948 23.37C4.9028 23.6666 5.77514 23.8695 7.05239 23.9277C8.33231 23.9861 8.74097 23.9999 12 23.9999C15.2589 23.9999 15.6676 23.9861 16.9475 23.9277C18.2248 23.8695 19.0971 23.6666 19.8604 23.37C20.6495 23.0633 21.3187 22.653 21.9859 21.9859C22.653 21.3187 23.0633 20.6495 23.37 19.8604C23.6666 19.0971 23.8695 18.2248 23.9277 16.9475C23.9861 15.6676 23.9999 15.2589 23.9999 12C23.9999 8.74097 23.9861 8.33231 23.9277 7.05239C23.8695 5.77514 23.6666 4.9028 23.37 4.13953C23.0633 3.35044 22.653 2.6812 21.9859 2.01412C21.3187 1.347 20.6495 0.936656 19.8604 0.63C19.0971 0.333328 18.2248 0.1305 16.9475 0.0722344C15.6676 0.0138281 15.2589 0 12 0ZM12 2.1622C15.2041 2.1622 15.5836 2.17439 16.849 2.23214C18.0189 2.28553 18.6543 2.481 19.0772 2.6453C19.6373 2.86298 20.037 3.12305 20.457 3.54295C20.8769 3.96286 21.1369 4.36266 21.3546 4.92272C21.519 5.34558 21.7144 5.98097 21.7678 7.15092C21.8255 8.41631 21.8377 8.79586 21.8377 12C21.8377 15.2041 21.8255 15.5836 21.7678 16.849C21.7144 18.0189 21.519 18.6543 21.3546 19.0772C21.1369 19.6373 20.8769 20.037 20.457 20.457C20.037 20.8769 19.6373 21.1369 19.0772 21.3546C18.6543 21.519 18.0189 21.7144 16.849 21.7678C15.5838 21.8255 15.2043 21.8377 12 21.8377C8.79558 21.8377 8.41617 21.8255 7.15092 21.7678C5.98097 21.7144 5.34558 21.519 4.92272 21.3546C4.36261 21.1369 3.96286 20.8769 3.54291 20.457C3.123 20.037 2.86294 19.6373 2.6453 19.0772C2.48095 18.6543 2.28548 18.0189 2.23209 16.849C2.17434 15.5836 2.16216 15.2041 2.16216 12C2.16216 8.79586 2.17434 8.41631 2.23209 7.15092C2.28548 5.98097 2.48095 5.34558 2.6453 4.92272C2.86294 4.36266 3.123 3.96286 3.54291 3.54295C3.96286 3.12305 4.36261 2.86298 4.92272 2.6453C5.34558 2.481 5.98097 2.28553 7.15092 2.23214C8.41631 2.17439 8.79586 2.1622 12 2.1622Z" fill="#687076"/>
								</g>
								<defs>
								<clipPath id="clip0_261_370">
								<rect width="24" height="24" fill="white"/>
								</clipPath>
								</defs>
							</svg>
						</a>

						<a href="https://www.youtube.com/channel/UCBLTWiQHgtfLqTJPcEK6KmQ" className="soc-med">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_261_372)">
								<path fillRule="evenodd" clipRule="evenodd" d="M22.7462 4.83407C23.1185 5.20883 23.3859 5.67482 23.5216 6.18541C24.0234 8.06996 24.0234 12 24.0234 12C24.0234 12 24.0234 15.93 23.5216 17.8145C23.3859 18.3251 23.1185 18.7911 22.7462 19.1658C22.3738 19.5406 21.9095 19.811 21.3998 19.95C19.5234 20.4545 12.0234 20.4545 12.0234 20.4545C12.0234 20.4545 4.52344 20.4545 2.64707 19.95C2.13737 19.811 1.6731 19.5406 1.30073 19.1658C0.928354 18.7911 0.660943 18.3251 0.525256 17.8145C0.0234375 15.93 0.0234375 12 0.0234375 12C0.0234375 12 0.0234375 8.06996 0.525256 6.18541C0.660943 5.67482 0.928354 5.20883 1.30073 4.83407C1.6731 4.4593 2.13737 4.18891 2.64707 4.04996C4.52344 3.54541 12.0234 3.54541 12.0234 3.54541C12.0234 3.54541 19.5234 3.54541 21.3998 4.04996C21.9095 4.18891 22.3738 4.4593 22.7462 4.83407ZM15.8416 12L9.56885 8.43134V15.5686L15.8416 12Z" fill="#687076"/>
								</g>
								<defs>
								<clipPath id="clip0_261_372">
								<rect width="24" height="24" fill="white"/>
								</clipPath>
								</defs>
							</svg>
						</a>

						<a href="https://t.me/madaniyat_gov_kg" className="soc-med">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_261_374)">
								<path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.4301 8.85893C11.263 9.3444 8.93026 10.3492 5.43201 11.8733C4.86395 12.0992 4.56638 12.3202 4.53929 12.5363C4.49351 12.9015 4.95083 13.0453 5.57359 13.2411C5.6583 13.2678 5.74608 13.2954 5.83606 13.3246C6.44876 13.5238 7.27295 13.7568 7.70141 13.766C8.09007 13.7744 8.52385 13.6142 9.00276 13.2853C12.2713 11.079 13.9585 9.96381 14.0644 9.93977C14.1392 9.92281 14.2427 9.90148 14.3129 9.96385C14.3831 10.0262 14.3762 10.1443 14.3687 10.176C14.3234 10.3691 12.5282 12.0381 11.5992 12.9018C11.3096 13.171 11.1042 13.362 11.0622 13.4056C10.9681 13.5033 10.8722 13.5958 10.7801 13.6846C10.2109 14.2333 9.78403 14.6448 10.8037 15.3168C11.2938 15.6397 11.6859 15.9067 12.0771 16.1731C12.5043 16.4641 12.9304 16.7543 13.4817 17.1157C13.6222 17.2077 13.7564 17.3034 13.887 17.3965C14.3842 17.751 14.8309 18.0694 15.3827 18.0186C15.7034 17.9891 16.0346 17.6876 16.2028 16.7884C16.6003 14.6631 17.3817 10.0585 17.5623 8.16097C17.5782 7.99473 17.5583 7.78197 17.5423 7.68857C17.5263 7.59518 17.4929 7.46211 17.3715 7.3636C17.2277 7.24694 17.0058 7.22234 16.9065 7.22408C16.4551 7.23203 15.7627 7.47282 12.4301 8.85893Z" fill="#687076"/>
								</g>
								<defs>
								<clipPath id="clip0_261_374">
								<rect width="24" height="24" fill="white"/>
								</clipPath>
								</defs>
							</svg>
						</a>


					</div>

					<ul className="header__list">
						<li>
            <Link to="/" className='header__link active' relative="path">
							Главная
              </Link>
						</li>
						<li>
            <Link to="/allEvents" className='header__link' relative="path">
							Все публикации
              </Link>
						</li>
					</ul>

					<ul className="header__sublist">
						<li id="first_menu" onClick={onUvelClick}>
							<a href="#" className="header__link">
								<img src={standart} alt=""/>
								<span className="with-after">Стандартный</span>
							</a>

							<div className="under_header__sublist under_header__sublist_unactive" ref={uvelUnderBlock}>
								<a href="#">
									<img src={uvel} alt=""/>
									<span>Увеличенный</span>
								</a>
							</div>
						</li>

						<li id="last_menu" onClick={onLangClick}>
							{i18n.language === "RU" ? <a href="#" className="header__link" onClick={() => changeLang("RU")}>
								<img src={ru} alt=""/>
								<span className="with-after">Русский</span>
							</a> : <a href="#" className="header__link" onClick={() => changeLang("KG")}>
								<img src={kg} alt=""/>
								<span className="with-after">Кыргызча</span>
							</a>}
							

							<div className="under_header__sublist under_header__sublist_unactive" ref={langUnderBlock}>
								{i18n.language === "RU" ? <a href="#" onClick={() => changeLang("KG")}>
									<img src={kg} alt=""/>
									<span>Кыргызский</span>
								</a>: <a href="#" onClick={() => changeLang("RU")}>
									<img src={ru} alt=""/>
									<span>Орусча</span>
								</a>}
							</div>
						</li>
					</ul>
					<div className="close" onClick={onCloseClick}>
						
					</div>
				</nav>

				<div style={{width: "20px"}}></div>

			</div>
		</div>
	</header>
  )
}
