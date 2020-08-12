// Style
import '../scss/main.scss';

// Polyfills
import './polyfills';

// Declarations
import './declarations';

// Image
import './utility/images';

// Video
import './utility/video';

// Images

// Components
import { preloader } from '../components/preloader/preloader';
import videoControl from '../components/gallery/videoControl';

window.addEventListener('load', () => {
	// preloader();
	// Video control
  if (document.querySelector('.video-control')) videoControl();
  
	console.log('Page fully loaded');
});

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM fully loaded and parsed but without images');
});
