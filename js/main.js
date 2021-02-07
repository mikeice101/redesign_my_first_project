let elem = document.querySelectorAll(".services");
let buttonFull = document.querySelector(".button_full");
let valueButtonFull = document.querySelector(".button_full p");
let mobilNavButton = document.querySelector(".mobil_nav");
let mobilNavButtonClose = document.querySelector(".mobil_nav_close");
let mobilNav = document.querySelector(".mobil_nav_full");
let head = document.querySelector("header");
mobilNavButton.onclick = function (){
 mobilNav.classList.add("mobil_nav_active");
head.style.overflow="visible"; function menuLeft() {
   mobilNav.style.right="320px";
  
}

setTimeout(menuLeft, 100);
 };
 
 mobilNavButtonClose.onclick = function (){
	  mobilNav.style.right="0px";
  
 function menuRight() {
 mobilNav.classList.remove("mobil_nav_active");
 
}

setTimeout(menuRight, 500);
 }; 

buttonFull.onclick = function (){
 elem[1].classList.toggle("hidden");
 if (valueButtonFull.innerHTML == "Скрыть") {
	valueButtonFull.innerHTML  = "Показать все услуги";
 } else {
 valueButtonFull.innerHTML = "Скрыть";
 }
 
};
$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	

	let boxs = document.querySelectorAll('.call_button');
let val =0;
let overlay = document.querySelector('.overlay');
let popup = document.querySelector('.popup');


let Popup = new Popap({
	overlay:".overlay",
	popup:'.popup',
	box:'.call_button',
	clos:'.popup_close'
	})
function Popap(obj) {
	let that=this;
	this.overlay=document.querySelector(obj.overlay);
	this.popup=document.querySelector(obj.popup);
	this.box=document.querySelectorAll(obj.box);
	this.clos=document.querySelector(obj.clos);
	
	this.open = function (content) {
		that.overlay.style.display="block";
		that.popup.style.display="block";
		
	}
	this.close = function () {
		that.overlay.style.display="none";
		that.popup.style.display="none";
	}
	for (let i=0;i<this.box.length;i++) {
		this.box[i].onclick = function clik() {
			that.open(that.box[i].innerHTML)
		} 
	}
	this.overlay.onclick = function clik() {
			return that.close()
		}
	this.clos.onclick = function clik() {
			return that.close()
		}
} 
