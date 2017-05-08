$(document).ready(function(){


$('#container').click(function() { 
    $('#container').toggleClass('moved');
});


var fullheight = $(window).height();
$('.fullheight').height(fullheight);

var resizeTimer,
$window = $(window);
function imageresize() {
    var fullheight = $(window).height();
    $('.fullheight').height(fullheight);
    
    if ($window.width() < 780) {}
}
imageresize();
$window.resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(imageresize, 100);
});




}); // ende doc ready