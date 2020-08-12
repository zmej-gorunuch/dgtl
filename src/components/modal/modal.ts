export function modal(): void {
	const openModalButtons = document.querySelectorAll('.open-modal');

	//Activate modal on click
	openModalButtons.forEach((button: Element) => {
		button.addEventListener('click', (event: MouseEvent) => {
			event.preventDefault();

			const hashId = button.getAttribute('href');

			// window.location.hash = `${hashId}`;
			activateModal(hashId);
		});
	});

	//Activate modal on load
	const windowHash = window.location.hash;
	//TODO link with id
	if (windowHash !== '' && document.querySelector(`${windowHash}`).classList.contains('modal')) {
		activateModal(windowHash);
	}
}

function openModal(modal: Element): void {
	modal.classList.add('open');
	document.body.style.overflow = 'hidden';
}

function closeModal(modal: Element): void {
	modal.classList.remove('open');
	document.body.style.overflow = 'auto';
}

function activateModal(hashId: string): void {
	const modal = document.querySelector(hashId);

	//open modal
	openModal(modal);

	//close modal on miss click
	modal.addEventListener('click', ({ target }: MouseEvent) => {
		if (target instanceof Element) {
			target.querySelector('.modal__window') && closeModal(modal);
		}
	});

	//close modal on cross click
	modal.querySelector('.modal__cross').addEventListener('click', closeModal.bind(null, modal));
}
