$(document).ready(function(){

$('.load').delay(1500).fadeOut();

$('#container').delay(1700).queue(function(){
    $(this).removeClass("welcomemoved").dequeue();
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