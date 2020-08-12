export default function () {
  //Phone mask
  const numberInputs = document.querySelectorAll('.phone-mask');

  numberInputs.forEach(numberInput => {
    console.log(numberInput);

    numberInput.addEventListener('input', e => {
      const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  });
}
