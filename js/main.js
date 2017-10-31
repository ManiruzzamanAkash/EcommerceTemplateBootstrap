jQuery(document).ready(function(){


	//Hover over navigation bar active
	$(".dropdown").hover(
		function() { 
			$('.dropdown-menu', this).show();
		},
		function() { 
			$('.dropdown-menu', this).hide();
		});


    /**Scroll and active go to top**/

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').removeClass('animated slideOutRight hidden');
            $('.scroll-to-top').addClass('animated slideInRight');
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').addClass('animated slideOutRight');
            $('.scroll-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scroll-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    /**Scroll and active go to top**/



    /** Sticky Navigation bar On scroll **/
    var navOffset = $(".header-navigation").offset().top;
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        if (scrollPos >= navOffset) {
            $(".header-navigation").addClass("navbar-fixed, navbar-fixed-top");
            // $(".header-cart").addClass('block')
            $(".header-navigation").addClass("sticky-top");
        } else {
            $(".header-navigation").removeClass("navbar-fixed, navbar-fixed-top");
        }

    });
    /** Sticky Navigation bar On scroll **/




    



    //Start owl carousel
    //$(".owl-carousel").owlCarousel();
    var owl = $('.owl-carousel');
    var slidesPerPage = 4;
    owl.owlCarousel({
    	animateOut: 'lightSpeedOut',
    	animateIn: 'lightSpeedIn',
    	items:slidesPerPage,
    	loop:true,
    	margin:10,
    	autoplay:true,
    	autoplayTimeout:1500,
    	autoplayHoverPause:true,
        // nav    : true,
        smartSpeed :900
        // navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });
    $('.play').on('click',function(){
    	owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
    	owl.trigger('stop.owl.autoplay')
    })

    $(".owl-prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".owl-next").click(function () {
        owl.trigger('next.owl.carousel');
    });



    //Initialize wow()
    new WOW().init();


    //Featured products hover over stylish


    $('.item-full').addClass('hidden');

    $(".featured1").hover(function(){
        $(".featured1-inner").removeClass('slideOutLeft hidden width0');
        $(".featured1-inner").addClass('fadeIn width70');
    }).mouseleave(function(){
        $(".featured1-inner").removeClass('slideInRight width70');
        $(".featured1-inner").addClass('slideOutLeft hidden width0');
    });
    $(".featured2").hover(function(){
        $(".featured2-inner").removeClass('slideOutLeft hidden width0');
        $(".featured2-inner").addClass('fadeIn width70');
    }).mouseleave(function(){
        $(".featured2-inner").removeClass('slideInRight width70');
        $(".featured2-inner").addClass('slideOutLeft hidden width0');
    });
    $(".featured3").hover(function(){
        $(".featured3-inner").removeClass('slideOutLeft hidden width0');
        $(".featured3-inner").addClass('fadeIn width70');
    }).mouseleave(function(){
        $(".featured3-inner").removeClass('slideInRight width70');
        $(".featured3-inner").addClass('slideOutLeft hidden width0');
    });
    $(".featured4").hover(function(){
        $(".featured4-inner").removeClass('slideOutLeft hidden width0');
        $(".featured4-inner").addClass('fadeIn width70');
    }).mouseleave(function(){
        $(".featured4-inner").removeClass('slideInRight width70');
        $(".featured4-inner").addClass('slideOutLeft hidden width0');
    });
    $(".featured5").hover(function(){
        $(".featured5-inner").removeClass('slideOutLeft hidden width0');
        $(".featured5-inner").addClass('fadeIn width70');
    }).mouseleave(function(){
        $(".featured5-inner").removeClass('slideInRight width70');
        $(".featured5-inner").addClass('slideOutLeft hidden width0');
    });




    /** Validations ***/

//Sign Up Page Validation
// $("#signUpForm").validate();



/** Validations ***/


});