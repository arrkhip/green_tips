// mobile menu
$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__menu').toggleClass('header__menu--open');
	$('body').toggleClass('scroll-hidden');
});


// video
var overlay = document.getElementById('overlay');
var vid = document.getElementById('video');

if(overlay.addEventListener){
		overlay.addEventListener("click", play, false)
	}else if(overlay.attachEvent){
		overlay.attachEvent("onclick", play)
	}

function play() { 
    if (vid.paused){
        vid.play(); 
        overlay.className = "o";
    }else {
        vid.pause(); 
        overlay.className = "";
    }
} 