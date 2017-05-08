$(document).ready(function(){
// https://projects.lukehaas.me/scrollify/
 $(function() {
     $.scrollify({
      section : ".snp_v",
      scrollbars:false,
      scrollSpeed: 750,
      updateHash: false,
      before: function(){
        var currentSlide = $.scrollify.current();
        var ref = currentSlide.attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

        if (currentSlide.context.id == "s1") { 
           $('#vid1').removeClass('fadetoblack'); 
           $('.insidenav').removeClass('insidenavvisi'); 
           $('#n1 .letterholder').addClass('letterholdervisi'); 
           $('#bar').removeClass('b1 b2 b3 b4 b5');
           $('#bar').addClass('b1');
           $('.scrolldown .up').removeClass('udhidden');
           $('.scrolldown .down').removeClass('udhidden');
           $('.scrolldown .up').addClass('udhidden');
           $('#hinweis').text('scroll down');
         } 
        if (currentSlide.context.id == "s2") { 
           $('.insidenav').removeClass('insidenavvisi'); 
           $('#n1 .letterholder').removeClass('letterholdervisi');
           $('#n2 .insidenav').addClass('insidenavvisi'); 
           $('#vid1').addClass('fadetoblack'); 
           $('#bar').removeClass('b1 b2 b3 b4 b5');
           $('#bar').addClass('b2');
           $('.scrolldown .up').removeClass('udhidden');
           $('.scrolldown .down').removeClass('udhidden');
           $('#hinweis').text('scroll');
         }
        if (currentSlide.context.id == "s3") { 
           $('.insidenav').removeClass('insidenavvisi'); 
           $('#n1 .letterholder').removeClass('letterholdervisi');
           $('#n3 .insidenav').addClass('insidenavvisi'); 
           $('#vid1').addClass('fadetoblack'); 
           $('#bar').removeClass('b1 b2 b3 b4 b5');
           $('#bar').addClass('b3');
           $('.scrolldown .up').removeClass('udhidden');
           $('.scrolldown .down').removeClass('udhidden');
           $('#hinweis').text('scroll');
         }
        if (currentSlide.context.id == "s4") { 
           $('.insidenav').removeClass('insidenavvisi');
           $('#n1 .letterholder').removeClass('letterholdervisi');
           $('#n4 .insidenav').addClass('insidenavvisi');
           $('#vid1').addClass('fadetoblack'); 
           $('#bar').removeClass('b1 b2 b3 b4 b5'); 
           $('#bar').addClass('b4');
           $('.scrolldown .up').removeClass('udhidden');
           $('.scrolldown .down').removeClass('udhidden');
           $('#hinweis').text('scroll');
         }
        if (currentSlide.context.id == "s5") { 
           $('.insidenav').removeClass('insidenavvisi'); 
           $('#n1 .letterholder').removeClass('letterholdervisi');
           $('#n5 .insidenav').addClass('insidenavvisi'); 
           $('#vid1').addClass('fadetoblack');
           $('#bar').removeClass('b1 b2 b3 b4 b5');
           $('#bar').addClass('b5'); 
           $('.scrolldown .up').removeClass('udhidden');
           $('.scrolldown .down').addClass('udhidden');
           $('#hinweis').text('scroll up');
        }
       
      }
    });
});

 $(".pagination a").on("click",function() {
    $.scrollify.move($(this).attr("href"));
    return false;
  });

$('.next').click(function (e) {  
    $.scrollify.next()
});

$('.previous').click(function (e) {
    $.scrollify.previous()
})

$('.clicker').click(function() { 
    $('.contentcontainer').show();
    $('.contentcontainer').addClass('visi');
    var show = $(this).attr("data-shower");
    var newshow = '#'+show;
    $(newshow).show();
    //alert(newshow);
    $.scrollify.disable();
    if (show == 'trailer') { $('.contentcontainer').addClass('cinemamode');}
});

var iframe = $('#vimeo-player')[0];
var player = $f(iframe);

$('.closey').click(function() { 
  $('.contentcontainer').removeClass('visi cinemamode');
  $('.content').delay(500).hide();
  $('.contentcontainer').hide();
  player.api('pause');
  $.scrollify.enable();
});

$('.galleryimg').bind('inview', function (event, visible) { 
  if (visible == true) { 
    var bigsrc = $(this).attr("data-bigsrc");
    $(this).one("load", function() {
      $(this).parent('.gallery_item_inside').find('.imgpreload').fadeOut();
    }).attr("src", bigsrc);
  } 
});


$("#sn2").hover(function() {
    $('#n2 .insidenav').addClass('hovernav');
  }, function() {
    $('#n2 .insidenav').removeClass('hovernav');
  }
);
$("#sn3").hover(function() {
    $('#n3 .insidenav').addClass('hovernav');
  }, function() {
    $('#n3 .insidenav').removeClass('hovernav');
  }
);
$("#sn4").hover(function() {
    $('#n4 .insidenav').addClass('hovernav');
  }, function() {
    $('#n4 .insidenav').removeClass('hovernav');
  }
);
$("#sn5").hover(function() {
    $('#n5 .insidenav').addClass('hovernav');
  }, function() {
    $('#n5 .insidenav').removeClass('hovernav');
  }
);






}); // ende doc ready