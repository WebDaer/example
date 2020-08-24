const slider = document.querySelectorAll('.slider_position .avatar');
const polosa = document.querySelector('.polosa');
const btleft = document.querySelector('.left_btn');
const btright = document.querySelector('.right_btn');
let mobile = document.querySelector('.mobile_meny')
let burger = document.querySelector('.burger');
let animitems =document.querySelectorAll('.animitems');
burger.onclick = function(){
	burger.classList.toggle('burger_active');
	mobile.classList.toggle('mobile_meny');
	mobile.classList.toggle('mobile_meny_active');

}

let left = 0;
let active = 1;
 function leftscroll(){
	left = left - 60;
	if(left<-120){
		left = 0;
		slider[active+1].classList.remove('avatar_active');
		active = 0;
	}
	polosa.style.marginLeft = left +'px';
	active++;
	
		slider[active].classList.remove('avatar_active');
		slider[active+1].classList.add('avatar_active');
	

}

function rightscroll(){
	left = left + 60;
	if(left>0){
		left = -180;
		slider[active+1].classList.remove('avatar_active');
		active = 0;
	}
	polosa.style.marginLeft = left +'px';
	
	

}
btright.addEventListener("click",leftscroll);
btleft.addEventListener("click",rightscroll);

if(animitems.length>0){

	window.addEventListener('scroll',animOnScroll);
	function animOnScroll(){
		for(i=0; i<animitems.length; i++){
			const animitem = animitems[i];
			const animitemHeight = animitem.offsetHeight;
			const animitemOffSet = getCoords(animitem).top;
			let animitemPoint = window.innerHeight - animitemHeight / 4; 
			if (animitemHeight>window.innerHeight){
				animitemPoint = animitemHeight - window.innerHeight / 4; 
			}
			if((pageYOffset>animitemOffSet-animitemPoint)&& pageYOffset<(animitemOffSet+animitemHeight)){
				animitem.classList.add('trans_active');
			}
			else{
				animitem.classList.remove('trans_active');
			}
		}

	}
	
	setTimeout(animOnScroll, 500);

}
function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset
  };

}
