$(document).ready(function(){

$('.load').delay(1000).fadeOut();

$('#container').delay(1600).queue(function(){
    $(this).removeClass("welcomemoved").dequeue();
});

$('.logo').delay(2000).queue(function(){
    $(this).removeClass("logo_welcome").dequeue();
});




$('.slidenav').click(function() { 
    $('#container').toggleClass('moved');
});

/*
$('.slidenav_one').click(function() { 
    $("#container").animate({marginLeft: '-100%'}, 700);
});

$('.slidenav_two').click(function() { 
    $("#container").animate({marginLeft: '0%'}, 700);
});
*/

var fullheight = $(window).height();
var fullwidth = $(window).width();

$('.fullheight').css('height', $(window).height());
$('.buehne').css('width', $(window).width());
$('#supercontainer').css('width', $(window).width());

//$('.buehne_inside').css('width', $(window).width()-100);
//$('.buehne_inside').css('height', $(window).width()-100);

var newfullwidth = fullwidth * 2; //alert(newfullwidth);
$('#container').css('width', newfullwidth);


var resizeTimer,
$window = $(window);

function imageresize() {
    $('.fullheight').css('height', $(window).height());
    $('.buehne').css('width', $(window).width());
    $('#supercontainer').css('width', $(window).width());

    //$('.buehne_inside').css('width', $(window).width()-100);
	//$('.buehne_inside').css('height', $(window).width()-100);
	var fullwidth = $(window).width();

    var newfullwidth = fullwidth * 2;
	$('#container').css('width', newfullwidth);
}
imageresize();


$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(imageresize, 100);
}).resize();




}); // ende doc ready