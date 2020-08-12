import {
	windowScrollData
} from '../helpers/windowData';
//Need to add resize offset recounter

export default function WasScrolled() {
	// const sectionActiveEvent = new CustomEvent('section-active');
	const sectionActiveEvent = document.createEvent('CustomEvent');
	sectionActiveEvent.initCustomEvent('section-active', false, false, {
		'cmd': "blerg!"
	});

	const sectionOffset = window.innerHeight / 1.35;
	const sections = document.querySelectorAll('section');

	let sectionsScrolledCount = 0;

	//Init start
	sectionWasActive();
	document.addEventListener('scroll', sectionWasActive);
	//Init end

	//Supporter start
	function removeScrollEventForSectionWasActive() {
		document.removeEventListener('scroll', sectionWasActive);
	}

	//Supporter end

	function sectionWasActive() {
		for (let i = 0; i < sections.length; i++) {
			const sectionOffsetTop = sections[i].offsetTop;

			if (windowScrollData() >= sectionOffsetTop - sectionOffset && !sections[i].classList.contains('section--was-active')) {
				sections[i].dispatchEvent(sectionActiveEvent);
				sections[i].classList.add('section--was-active');
				sectionsScrolledCount++;

				if (sectionsScrolledCount >= sections[i].length) removeScrollEventForSectionWasActive();
			}
		}
		// sections.forEach(section => {
		// 	const sectionOffsetTop = section.offsetTop;

		// 	if (windowScrollData() >= sectionOffsetTop - sectionOffset && !section.classList.contains('section--was-active')) {
		// 		section.dispatchEvent(sectionActiveEvent);
		// 		section.classList.add('section--was-active');
		// 		sectionsScrolledCount++;

		// 		if (sectionsScrolledCount >= sections.length) removeScrollEventForSectionWasActive();
		// 	}
		// });
	}
}