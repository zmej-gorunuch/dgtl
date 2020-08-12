export function header(): void {
	const header = document.querySelector('header') || document.querySelector('.header');

	//init header animation
	window.addEventListener('load', () => {
		header.classList.add('header--animate');
	});

	initBurger(header);
	initScrollTo(header);
}

function initBurger(header: Element): void {
	const nav = header.querySelector('nav');
	const burger = document.querySelector('.burger');

	if (!burger || !nav) {
		return;
	}

	burger.addEventListener('click', () => {
		menuClose(header);
	});
}

function initScrollTo(header: Element) {
	const list = header.querySelectorAll('nav li');

	list.forEach((element: Element) => {
		element.addEventListener('click', () => {
			menuClose(header);
		});
	});
}

function menuClose(header: Element): void {
	const body = document.body;
	const nav = header.querySelector('nav');
	const burger = document.querySelector('.burger');

	burger.classList.toggle('active');
	header.classList.toggle('active');
	nav.classList.toggle('menu-open');
	body.classList.toggle('no-scroll-mobile');
}
