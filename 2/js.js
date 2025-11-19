const btn = document.querySelector('.j-btn-test');
const size = document.querySelector('#size');

btn.addEventListener('click', () => {
  const shirina  = document.documentElement.clientWidth;
  const hight = document.documentElement.clientHeight;


alert( `Ширина: ${shirina}, Высота: ${hight}`);
});