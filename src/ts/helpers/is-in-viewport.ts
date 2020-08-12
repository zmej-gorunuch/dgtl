export function isInViewport(elem: HTMLElement, elemMargin: string): boolean {
	const margins = Number(elemMargin) || 20;
	const bounding = elem.getBoundingClientRect();

	const top = window.innerHeight / 2 - bounding.height - margins;
	const bottom = window.innerHeight / 2 + bounding.height + margins;

	return bounding.top >= top && bounding.bottom <= bottom;
}
