import { WindowSizeData } from '../interfaces/types';

/** Get window width and height object */
export function windowSizeData(isLog: boolean): WindowSizeData {
	const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; //get window style
	const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //get window style

	isLog && console.log(`windowWidth = ${width}, windowHeight = ${height}`);

	return { width, height };
}

/** Get window scroll position */
export function windowScrollData(isLog: boolean): number {
	isLog && console.log(`windowScroll = ${window.pageYOffset || document.documentElement.scrollTop}`);

	return window.pageYOffset || document.documentElement.scrollTop; // window scroll top offset
}

//Window load
// windowSizeData();
// windowScrollData();

// window.scrollTo(0, 500);//scroll to 500px

// window.addEventListener('resize', windowSizeData);
// window.addEventListener('scroll', windowScrollData);
//End Window data
