// require('nodelist-foreach-polyfill');

const InitSelects = () => {
  const selects = document.querySelectorAll('.select');

  if (selects.length === 0) return null;

  selects.forEach(select => initSelect(select));
}

export const initSelect = select => {
  const field = select.querySelector('.select__field');
  const input = select.querySelector('input');
  const list = select.querySelector('.select__list');
  const options = list.querySelectorAll('.select__option');

  //show list on focus
  select.addEventListener('click', () => {

    // list.classList.('open');
    list.classList.toggle('open');

    select.addEventListener('mouseleave', () => {

      list.classList.remove('.open');
    })
  })

  // hide list on focusout
  // select.addEventListener('focusout', () => {
  //   console.log('out');

  //   list.classList.remove('.open');
  // })

  //show list on list hover in
  list.addEventListener('mouseenter', () => {
    list.classList.add('hovered');
  })

  //hide list on list hover out
  list.addEventListener('mouseleave', () => {
    list.classList.remove('hovered');
    list.classList.remove('open');
  })

  //set value of input equal clicked option textContent and hide list
  options.forEach(option => {
    option.addEventListener('click', () => {
      // input.value = option.dataset.val;
      input.value = option.textContent;
      list.classList.remove('hovered');
      list.classList.remove('.open');
      field.textContent = option.textContent;
      select.classList.add('fill-select');
    })
  });
}

export default InitSelects;