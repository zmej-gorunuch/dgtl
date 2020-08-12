import { OffsetData } from '../interfaces/types';

export function offsetWithScroll(el: HTMLElement): OffsetData {
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft,
	};
}

export function offsetWithoutScroll(el: HTMLElement): OffsetData {
	const rect = el.getBoundingClientRect();

	return {
		top: rect.top,
		left: rect.left,
	};
}
// // example use
// let ElementOffset = offset(element);
// console.log(ElementOffset.left, ElementOffset.top);
//End Function offset element

//------Element x,y of element------//
// let rect = element.getBoundingClientRect();
// let bodyRect = document.body.getBoundingClientRect();
// let offsetTop = bodyRect.top - rect.top;
// console.log(rect.top, rect.right, rect.bottom, rect.left);
// console.log("Element is " + offsetTop + " vertical pixels from <body>");
//------End Element x,y of element------//
