//https://github.com/ganlanyuan/tiny-slider
import { tns } from 'tiny-slider/src/tiny-slider';

export default function TinySlider() {
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');

  const slider = tns({
    container: '.slider',
    items: 1,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
      },
      700: {
        gutter: 30,
      },
      900: {
        items: 3,
      },
    },
  });

  prevBtn && prevBtn.addEventListener('click', e => {
    e.preventDefault();

    slider.goTo('prev');
  })

  nextBtn && nextBtn.addEventListener('click', e => {
    e.preventDefault();

    slider.goTo('next');
  })
}
