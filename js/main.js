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
$('.fullheight').css('height', $(window).height());

var resizeTimer,
$window = $(window);

function imageresize() {
    $('.fullheight').css('height', $(window).height());
    if ($window.width() < 780) {}
}
imageresize();


$window.resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(imageresize, 100);
});




}); // ende doc ready