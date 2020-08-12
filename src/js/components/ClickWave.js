const ClickWaveInit = () => {
  const items = document.querySelectorAll('.wave-animation');

  items.forEach(item => {
    //if checkbox or label that bound to checkbox checked set them animated class
    const checkbox = document.querySelector(`#${item.getAttribute('for')}`);
    if (item.checked || (checkbox && checkbox.checked)) item.classList.add('wave-animated');

    item.addEventListener('click', () => {
      //toggle animation
      if (item.classList.contains('wave-toggle')) {
        item.classList.toggle('wave-animated');
        return null;
      }

      //reset animation
      item.classList.remove('wave-animated');
      void item.offsetWidth;
      item.classList.add('wave-animated');
    })
  });
}

export default ClickWaveInit