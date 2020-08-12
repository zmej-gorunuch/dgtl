import { offsetWithoutScroll } from '../helpers/offsetElement'; //Window size, scroll - function

export default function LazyLoad() {
  const LazyImages = document.querySelectorAll('[data-src]');
  const LazyBackground = document.querySelectorAll('[data-url]');
  const loadOffset = window.innerHeight * 1.5;

  //Lazy load img
  LazyImages.forEach(img => {
    const LazyLoadImageBind = () => LazyLoadImage(img, LazyLoadImageBind);

    document.addEventListener('scroll', LazyLoadImageBind);
    LazyLoadImageBind();
  });

  function LazyLoadImage(img, LazyLoadImageBind) {
    const imageOffset = offsetWithoutScroll(img).top;

    if (imageOffset <= loadOffset) {
      img.src = img.dataset.src;
      document.removeEventListener('scroll', LazyLoadImageBind);
    }
  }

  //Lazy load bg
  LazyBackground.forEach(bgImg => {
    const LazyLoadBgBind = () => LazyLoadBg(bgImg, LazyLoadBgBind);

    document.addEventListener('scroll', LazyLoadBgBind);
    LazyLoadBgBind();
  });

  function LazyLoadBg(bgImg, LazyLoadBhBind) {
    const bgOffset = offsetWithoutScroll(bgImg).top;

    if (bgOffset <= loadOffset) {
      bgImg.style.backgroundImage = `url(${bgImg.dataset.url})`;

      document.removeEventListener('scroll', LazyLoadBhBind);
    }
  }
}
