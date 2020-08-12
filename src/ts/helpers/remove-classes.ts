/** Remove each class from classesArray from each element */
export function removeClasses(element: HTMLElement, classes: string | string[]): void {
	if ((!Array.isArray(classes) && typeof classes !== 'string') || !element.classList) return;

	if (!Array.isArray(classes) && typeof classes === 'string') {
		element.classList.remove(classes);
		return;
	}

	classes.forEach((className: string) => element.classList.remove(className));

	return;
}
