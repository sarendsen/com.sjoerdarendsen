/*
* Fuck jQuery, oldskool baby!
*/

function init() {

	
	// Get the rest up and running
	//menu();
	//bg_image();
}

function menu() {
	var tabs = document.getElementsByClassName('tab');

	for (index = 0; index < tabs.length; ++index) {
		tabs[index].addEventListener('click', function(e) {
			var page = document.getElementById(e.target.href.split("#")[1]);
			var current_page = document.getElementsByClassName('page-active')[0];

			if(page.id == current_page.id && current_page !== "") {
				return;
			}

			// unset all active classes
			for (index = 0; index < tabs.length; ++index) {
				tabs[index].className = 'tab';
			}
			// Set other classes
			e.srcElement.className = "tab active";
			page.className = "page page-active";
			current_page.className = "page page-hidden";
			return false;

		}, false);
	}
}


function bg_image() {
	//images = ['img_1', 'img_2'];
	num = Math.floor((Math.random()*2)+1);
	num = 3;
	//num = 2;
	hue = Math.floor((Math.random()*100)+1);
	var wrapper = document.getElementById('bg-wrapper');
	wrapper.innerHTML = "<img id='bg-image' src='img/bg_" + num + ".jpg' />";
	//document.write('<img scr="img/ny_' + num + '.jpg" />');
}