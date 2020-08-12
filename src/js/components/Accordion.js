export default function Accordion() {
  let acc = document.querySelectorAll('.accordion__item');
  
  
  let resize = resizeBlock.bind(this);
  if (document.body.clientWidth >= 1200) {
    setTimeout(resize, 200);
  }
  
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', () => {
      acc[i].classList.toggle('active');
      
      let content = acc[i].nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }

      // if (document.body.clientWidth >= 1200) {
      //   setTimeout(resize, 200);
      // }
    });
  }

  //resize height of scrolling block
  function resizeBlock() {
    let scrollingBlock = document.querySelector('.scrolling');
    let scrollingBlockPlugin = document.querySelector('.mCustomScrollBox');
    let accordionBlockHeight = document.querySelector('.accordions').offsetHeight;
    if (accordionBlockHeight < 618) {
      accordionBlockHeight = 618;
    }

    scrollingBlock.style.cssText = "max-height: " + accordionBlockHeight + "px";
    scrollingBlockPlugin.style.cssText = "max-height: " + accordionBlockHeight + "px";
  }

}