/**
 * ===================================================================
 * Main js
 *
 * -------------------------------------------------------------------
 */

(function($) {

	"use strict";

	/* --------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
    var useSmallSlides = false;
    var windowWidth;
    var getWidth = function () {
        return $(window).width();
    }
    var setSlidesPath = function() {
        var width = getWidth();
        if (width < 1201) {
            useSmallSlides = true;
        }
    }

    /* --------------------------------------------------- */
	/*  set slider images list
	------------------------------------------------------ */
    var loadHomeSlides = function() {
        var slides = [
            "katrinafeature2",
            "abbynaotofeature2",
            "hollemanfeature3",
            "fononfeature2",
            "alexandriapaulfeature2",
            "madyfeature",
            "marianabaltazarfeature",
            "cooperfeature",
            "barbra1",
            "hollemanfeature5",
            "johnlukerainfeature",
            "norahfeature2",
            "annetomas",
            "joyfeature",
            "johnsonfamilyfeature",
            "mckenziefeature",
            "barbra2",
            "laurenfeature",
            "kearstenjustin1",
            "idilfeature",
            "kevin1",
            "cassidyfeature",
            "connorfeature"
        ];

        var slidesFullPath = [];
        var buildAndDeploy = true;
        for(var i = 0; i < slides.length; i++) {
            var path = '/images/slides/';
            if (useSmallSlides) {
                path = path + 'small/';
            }
            var domain = 'https://hellocandor.netlify.com'
            var fileName = slides[i] + '.jpg';
            if (buildAndDeploy) {
                var path = domain+path;
            }
            slidesFullPath.push({src: path+fileName});
        }

        /* --------------------------------------------------- */
        /*  Vegas Slideshow
        ------------------------------------------------------ */
        $(".home-slides").vegas({
            transition: 'fade',
            transitionDuration: 850,
            delay: 5000,
            slides: slidesFullPath
        });

        $('a#sliderNext').on('click', function () {
            $(".home-slides").vegas('next');
        });

        $('a#sliderPrev').on('click', function () {
            $(".home-slides").vegas('previous');
        });

    }

   $(window).load(function() {
      // will first fade out the loading animation
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(200).fadeOut("slow");

        setSlidesPath();
        loadHomeSlides();
      });
    });

    $(window).resize(function() {
        setSlidesPath();
    });

  	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */
  	$(".fluid-video-wrapper").fitVids();

	/*-----------------------------------------------------*/
	/* tabs
  	-------------------------------------------------------*/
	$(".tab-content").hide();
	$(".tab-content").first().show();

	$("ul.tabs li").click(function () {
	   $("ul.tabs li").removeClass("active");
	   $(this).addClass("active");
	   $(".tab-content").hide();
	   var activeTab = $(this).attr("data-id");
	   $("#" + activeTab).fadeIn(700);
	});


	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------*/
  	$('.smoothscroll').on('click', function (e) {

	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


  	/* --------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()


	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	$('#contactForm').validate({

		/* submit via ajax */
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');

			$.ajax({

		      type: "POST",
		      url: "http://hellocandor.com/shared/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() {

		      	sLoader.fadeIn();

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut();
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut();
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut();
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });
  		}

	});


})(jQuery);
