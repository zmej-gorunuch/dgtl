/**
 * Initialize scroll-to elements to scroll to the linked element on click
 * @param {Boolean} isLog // log the offset of the linked element
 */
export default function ScrollTo(isLog) {
  const scrollLinks = document.querySelectorAll('.scroll-to');

  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const scrollToElement = document.querySelector(link.getAttribute('href'));

      isLog && console.log(scrollToElement.offsetTop);

      window.scrollTo({
        top: scrollToElement.offsetTop,
        behavior: 'smooth',
      });
    });
  });
}
