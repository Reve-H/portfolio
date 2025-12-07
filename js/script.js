let mainText = ['한발한발 나아가는 000 입니다.'];
let main_selec_text = document.querySelector('.main_txt');

main_selec_text.innerHTML = mainText;

let mainCon = document.querySelector('.contents');

setInterval(() => (
  mainCon.innerHTML = new Date()), 1000);
  
let conImags = document.querySelectorAll('.con_items');


if (conImags.length > 1 ) {
  conImags[0].classList.add('.on');
  console.log(conImags);
}