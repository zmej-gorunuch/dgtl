export default function css(el: HTMLElement, styles: string[]): void {
	for (const property in styles) el.style[property] = styles[property];
}
