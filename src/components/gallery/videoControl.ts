export default function videoControl() {
	console.log('in');

	const videos = document.querySelectorAll('video');
	videos.forEach((video: HTMLVideoElement) => {
		console.log('video', video);
		const control = video.nextElementSibling as HTMLElement;

		if (!control.classList.contains('video-control')) {
			console.log('video does not have a controller');
			return;
		}

		if (video && control) {
			control.addEventListener('click', () => {
				console.log('click conrtol');
				videoState(video, control);
			});
			video.addEventListener('click', () => {
				console.log('click video');
				stopVideo(video, control);
			});
		}

	});
}

function videoState(video: HTMLVideoElement, control: HTMLElement) {
	if (control.classList.contains('play')) {
		stopVideo(video, control);
	} else {
    playVideo(video, control);
		shoveHideControl(video, control);
	}
}

function stopVideo(video: HTMLVideoElement, control: HTMLElement): void {
	video.pause();
	video.removeAttribute('controls');
	control.classList.remove('play');
}

function playVideo(video: HTMLVideoElement, control: HTMLElement): void {
	video.play();
	video.setAttribute('controls', '');
	control.classList.add('play');
}

function shoveHideControl(video: HTMLVideoElement, control: HTMLElement): void {
	// if (!control.classList.contains('play')) {
	// 	return;
	// }

  // console.log('shoveHideControl');
  
	// let moveTimeout: any;
	// video.addEventListener('mouseenter', moveMouseInVideo);

	// function moveMouseInVideo() {
  //   console.log('move');
    
	// 	if (!moveTimeout) {
	// 		moveTimeout = setTimeout(() => {
	// 			moveTimeout = null;
	// 			moveHandler();
  //     }, 1000);
  //     control.style.opacity = '1';
	// 	}
	// }

	// function moveHandler() {
	// 	control.style.opacity = '0';
	// }
}
