const burgerBtn = document.querySelector("header__burger");
		const nav = document.querySelector("nav");
		const lang = document.querySelector("first_menu");
		const langUnderBlock = document.querySelector("under_header__sublist");
		const uvel = document.querySelector("last_menu");
		const uvelUnderBlock = document.querySelector("under_header__sublist");
		const close = document.querySelector("close");
		const back = document.querySelector("header__logo");

		export const onBurgerClick = () => {
			nav.classList.toggle(`burger-active`);
			back.classList.toggle(`header__logo_active`);
		};

		export const onCloseClick = () => {
			nav.classList.remove(`burger-active`);
			back.classList.remove(`header__logo_active`);
		};

		export const onLangClick = () => {
			if (langUnderBlock.classList.contains(`under_header__sublist_unactive`)) {
				langUnderBlock.classList.remove(`under_header__sublist_unactive`);
			} else {
				langUnderBlock.classList.add(`under_header__sublist_unactive`);
			}
		};


		export const onUvelClick = () => {
			if (uvelUnderBlock.classList.contains(`under_header__sublist_unactive`)) {
				uvelUnderBlock.classList.remove(`under_header__sublist_unactive`);
			} else {
				uvelUnderBlock.classList.add(`under_header__sublist_unactive`);
			}
		};