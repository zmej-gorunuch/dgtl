export default function Tab() {
  const tabs = document.querySelectorAll('.tab__link');
  const tabContent = document.querySelectorAll('.tab__content');
  tabContent[0].style.display = 'block';

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', e => {
      const target = e.target;
      const tabsName = target.dataset.name;

      for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
      }

      for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active'); //tab__link--active
      }

      document.getElementById(tabsName).style.display = 'block'; //tab__content--active

      target.classList.add('active');
    });
  }
}
