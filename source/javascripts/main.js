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
   $(window).load(function() {
      // will first fade out the loading animation
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });
  	})


  	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */
  	$(".fluid-video-wrapper").fitVids();


    /* --------------------------------------------------- */
	/*  load slider images list
	------------------------------------------------------ */
    var slides = [
        "katrinafeature.jpg",
        "annetomas.jpg",
        "cooperfeature.jpg",
        "marianabaltazarfeature.jpg",
        "barbra1.jpg",
        "kearstenjustin1.jpg",
        "johnsonfamilyfeature.jpg",
        "joyfeature.jpg",
        "mckenziefeature.jpg",
        "barbra2.jpg",
        "laurenfeature.jpg",
        "idilfeature.jpg",
        "kevin1.jpg",
        "cassidyfeature.jpg",
        "connorfeature.jpg",
    ];

    var slidesFullPath = [];
    var buildAndDeploy = true;
    for(var i = 0; i < slides.length; i++) {
        var path = '/images/slides/';
        var domain = 'http://hellocandor.com'
        var fileName = slides[i];
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