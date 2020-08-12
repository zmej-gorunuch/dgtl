import { googleMapStyle } from './google-map-styles';

export function initGoogleMap(): void {
	const maps = document.querySelectorAll('.google-map') as NodeListOf<HTMLElement>;

	maps.forEach((map: HTMLElement) => {
		const myLatLng = {
			lat: Number(map.dataset.lat),
			lng: Number(map.dataset.lng),
		};

		const zoom = Number(map.dataset.zoom) || 14;
		const markerTitle = map.dataset.marker_title || '';
		const markerImg = map.dataset.marker_url;

		const gMap = new google.maps.Map(map, {
			center: myLatLng,
			zoom: zoom,
			disableDefaultUI: true,
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: true,
			fullscreenControl: true,
			styles: googleMapStyle,
		});

		new google.maps.Marker({
			map: gMap,
			position: myLatLng,
			title: markerTitle,
			icon: markerImg,
		});
	});
}
