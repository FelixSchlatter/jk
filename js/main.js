$(document).ready(function(){


$('#container').click(function() { 
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