$(function() {

    /*Fixed Header*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    CheckScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        CheckScroll(scrollPos, introH);

    });

    function CheckScroll(scrollPos, introH) {
         if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(Event) {
        Event.preventDefault();

        let elementid = $(this).data("scroll");
        let elementOffset =  $(elementid).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    /*navToggle*/
        navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");


    });

/*reviewsSlider  https://kenwheeler.github.io/slick/*/
let reviewsSlider = $("#reviewsSlider");

reviewsSlider.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade:true,
  infinite:true,
  arrows:false,
  dots: true,
});

});
