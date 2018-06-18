// var head_bd = document.querySelector('.header__container');
// // head_bd.style.backgroundPositionX = 500 + 'px';  RABOAET 
// head_bd.addEventListener('mousemove', function (e) {
// 	mscreenX = e.screenX - 700;
// 	if (mscreenX > 190 && mscreenX < 500 ) {
// 	head_bd.style.backgroundPositionX = mscreenX + 'px';
// }
// });

// var Mymodal = document.querySelector('.Mymodal');
// var openModal = document.querySelector('.black__map');
// var modalConentMap = document.querySelector('.Mymodal__map')

// openModal.addEventListener('click', function(event) {
// event.preventDefault();
// Mymodal.classList.add('display_visible');
// modalConentMap.classList.add('animation_modal');
// });

// Mymodal.addEventListener('click', function() {
// Mymodal.classList.remove('display_visible');
// modalConentMap.classList.remove('animation_modal');
// });


var img_nogti = document.querySelector('.word__containerTwo');
var img_color = document.querySelector('.word__container');
var bg_position;
img_color.addEventListener ('mousemove', function(event) {
bg_position = event.screenX;
if (bg_position > 500 && bg_position < 1200) {
	img_nogti.style.backgroundPositionX = bg_position  - Math.random()*200 + 'px';
	img_color.style.backgroundPositionX = bg_position - 200 - Math.random()*200 + 'px';
}
	console.log(bg_position);

});

// img_nogti.addEventListener ('mousemove', function(e){
// coordinateX = e.screenX - 900;
// if (coordinateX > -240 && coordinateX < 500 ) {
// 	img_nogti.style.backgroundPosition =  70 + '%' +' bottom,  right bottom , ' + coordinateX +'% ' + '30%, ' + coordinateX + '% bottom';
// }
// });

// var head_bg_top = document.querySelector('.header__container')
// head_bg_top.addEventListener('click', function(){
// 	head_bg_top.classList.toggle('animation_headbg');
// });


// var tabs_1 = document.querySelector('.tabs__tab--1');
// var tabs_2 = document.querySelector('.tabs__tab--2');
// var tabs_3 = document.querySelector('.tabs__tab--3');
// var tab_content_1 = document.querySelector('.tabs__contant--1');
// var tab_content_2 = document.querySelector('.tabs__contant--2');
// var tab_content_3 = document.querySelector('.tabs__contant--3');

// function tabs_one () {
// 	tabs_2.classList.remove('tabs_inset');
// 	tab_content_2.classList.remove('tabs_content');
// 	tabs_3.classList.remove('tabs_inset');
// 	tab_content_3.classList.remove('tabs_content');
// 		tabs_1.classList.add('tabs_inset');
// 	tab_content_1.classList.add('tabs_content');
// }
// function tabs_two () {
// 	tabs_1.classList.remove('tabs_inset');
// 	tab_content_1.classList.remove('tabs_content');
// 	tabs_2.classList.add('tabs_inset');
// 	tab_content_2.classList.add('tabs_content');
// 	tabs_3.classList.remove('tabs_inset');
// 	tab_content_3.classList.remove('tabs_content');
// }

// function tabs_three () {
// 	tabs_1.classList.remove('tabs_inset');
// 	tab_content_1.classList.remove('tabs_content');
// 	tabs_2.classList.remove('tabs_inset');
// 	tab_content_2.classList.remove('tabs_content');
// 	tabs_3.classList.add('tabs_inset');
// 	tab_content_3.classList.add('tabs_content');
// }


// var social = document.querySelector('.contact__social');
// var phone = document.querySelector('.contact__phone');
// var content_soc = document.querySelector('.block__social');
// var content_phone = document.querySelector('.block__phone');

// social.addEventListener('click', function(event){
// event.preventDefault();
// content_soc.classList.toggle('contact_visible');
// });

// phone.addEventListener('click', function(event){
// event.preventDefault();
// content_phone.classList.toggle('contact_visible');
// });
