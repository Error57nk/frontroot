$("#open-nav").click(()=>{
  $("#glay").css('display','block');
  $("#menu").css("visibility", "visible")
  $(".nmenu-bx_i").removeClass("ani-nav-cl").addClass("ani-nav")
  $(".clbtn").addClass('in-ef')
})
$("#cl-menu").click(()=>{
  $(".nmenu-bx_i").removeClass("ani-nav").addClass("ani-nav-cl")
  $(".clbtn").removeClass('in-ef')
  setTimeout(function(){
    $("#menu").css("visibility", "hidden")
  }, 200);
  $("#glay").css('display','none');
})

$('.main-slider').slick({
  speed: 300,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,

});
$('.client_sld').slick({
  speed: 300,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,

});
$('.cl-sld').slick({
  speed: 300,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slid-abt').slick({
  speed: 300,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$( document ).ready(function() {
  console.log( "ready!" );
  $("#npre").css('display','none')
});