let mainText = ['한발한발 나아가는 지원자 입니다.'];
let main_selec_text = document.querySelector('.main_txt');

main_selec_text.innerHTML = mainText;

let mainCon = document.querySelector('.contents');

setInterval(() => (
  mainCon.innerHTML = new Date()), 1000);
  
let conImag = document.querySelectorAll('.con_items');
conImag.addEventListener('click', (e) => {
  console.log(e);
})