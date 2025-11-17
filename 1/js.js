const btn = document.querySelector('.j-btn-test');
const logo1 = document.querySelector('.btn_icon')
const logo2 = document.querySelector('.btn_icon2')

btn.addEventListener('click', () => {
  btn.classList.toggle('btn--magic');
  logo1.classList.toggle('btn_icon');
  logo2.classList.toggle('btn_icon');
});