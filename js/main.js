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



var fullheight = $(window).height();
var fullwidth = $(window).width();

$('.fullheight').css('height', $(window).height());
$('.buehne').css('width', $(window).width());

var resizeTimer,
$window = $(window);

function imageresize() {
    $('.fullheight').css('height', $(window).height());
    $('.buehne').css('width', $(window).width());
}
imageresize();


$window.resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(imageresize, 100);
});




}); // ende doc ready