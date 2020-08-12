export function preloader(): void {
	const preload = document.querySelector('.preloader') as HTMLElement;
	const site = document.querySelector('.site-wrapper') as HTMLElement;

	if (!preload || !site) {
		return;
	}

	site.style.opacity = '1';

	setTimeout(() => (preload.style.transform = 'translate(0, 100%)'), 3000);
	setTimeout(() => (preload.style.display = 'none'), 4000);
}
