
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
let mainGrid = document.querySelector(".main_grid");
let aside = document.querySelector("aside");
let block_content = document.querySelector(".service_block"); 

function ecr() {
	if ((getComputedStyle(aside)).display=="block") {
		mainGrid.classList.add("col-10");
		mainGrid.classList.remove("col-12");
		block_content.style.transform="";
 	 } else {
 	 	mainGrid.classList.add("col-12");
		mainGrid.classList.remove("col-10");
		block_content.style.transform="none";
 	 }

};
ecr()

window.onresize=ecr;

 
	
