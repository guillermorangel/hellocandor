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
	/*  Vegas Slideshow
	------------------------------------------------------ */
	$(".home-slides").vegas({
		transition: 'fade',
		transitionDuration: 1000,
		delay: 5000,
    	slides: [
            // { src: "//hellocandor.com/build/images/slides/marianabaltazar.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra1.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra2.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra3.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra4.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra5.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra6.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra7.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra8.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra9.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra10.jpg" },
            // { src: "//hellocandor.com/build/images/slides/barbra11.jpg" },
            // { src: "//hellocandor.com/build/images/slides/cassidy.jpg" },
            // { src: "//hellocandor.com/build/images/slides/connor.jpg" },
            // { src: "//hellocandor.com/build/images/slides/cooper.jpg" },
            // { src: "//hellocandor.com/build/images/slides/emily.jpg" },
            // { src: "//hellocandor.com/build/images/slides/joy0.jpg" },
            // { src: "//hellocandor.com/build/images/slides/joy1.jpg" },
            // { src: "//hellocandor.com/build/images/slides/joy2.jpg" },
            // { src: "//hellocandor.com/build/images/slides/katrina.jpg" },
            // { src: "//hellocandor.com/build/images/slides/kevin.jpg" },
            // { src: "//hellocandor.com/build/images/slides/lauren1.jpg" },
            // { src: "//hellocandor.com/build/images/slides/lauren2.jpg" },
            // { src: "//hellocandor.com/build/images/slides/lauren3.jpg" },
            // { src: "//hellocandor.com/build/images/slides/lauren4.jpg" },
            // { src: "//hellocandor.com/build/images/slides/lauren5.jpg" },
            // { src: "//hellocandor.com/build/images/slides/mckenzie1.jpg" },
            // { src: "//hellocandor.com/build/images/slides/reginna.jpg" },
            // { src: "//hellocandor.com/build/images/slides/thetas1.jpg" },
            // { src: "//hellocandor.com/build/images/slides/thetas2.jpg" },
            // { src: "//hellocandor.com/build/images/slides/thetas3.jpg" },
            // { src: "//hellocandor.com/build/images/slides/thetas4.jpg" },
            // { src: "//hellocandor.com/build/images/slides/thetas5.jpg" },
            // { src: "//hellocandor.com/build/images/slides/thetas6.jpg" },
            // { src: "//hellocandor.com/build/images/slides/annetomas1.jpg" },
            // { src: "//hellocandor.com/build/images/slides/annetomas2.jpg" },
            // { src: "//hellocandor.com/build/images/slides/annetomas3.jpg" },
            // { src: "//hellocandor.com/build/images/slides/annetomas4.jpg" }
            { src: "/images/slides/katrina.jpg" },
            { src: "/images/slides/barbra1.jpg" },
            { src: "/images/slides/barbra2.jpg" },
            { src: "/images/slides/barbra3.jpg" },
            { src: "/images/slides/barbra4.jpg" },
            { src: "/images/slides/barbra5.jpg" },
            { src: "/images/slides/barbra6.jpg" },
            { src: "/images/slides/barbra7.jpg" },
            { src: "/images/slides/barbra8.jpg" },
            { src: "/images/slides/barbra9.jpg" },
            { src: "/images/slides/barbra10.jpg" },
            { src: "/images/slides/barbra11.jpg" },
            { src: "/images/slides/cassidy.jpg" },
            { src: "/images/slides/connor.jpg" },
            { src: "/images/slides/emily.jpg" },
            { src: "/images/slides/joy0.jpg" },
            { src: "/images/slides/joy1.jpg" },
            { src: "/images/slides/joy2.jpg" },
            { src: "/images/slides/lauren1.jpg" },
            { src: "/images/slides/lauren2.jpg" },
            { src: "/images/slides/lauren3.jpg" },
            { src: "/images/slides/lauren4.jpg" },
            { src: "/images/slides/lauren5.jpg" },
            { src: "/images/slides/reginna.jpg" },
            { src: "/images/slides/thetas1.jpg" },
            { src: "/images/slides/thetas2.jpg" },
            { src: "/images/slides/thetas3.jpg" },
            { src: "/images/slides/thetas4.jpg" },
            { src: "/images/slides/thetas5.jpg" },
            { src: "/images/slides/thetas6.jpg" },
            { src: "/images/slides/annetomas1.jpg" },
            { src: "/images/slides/annetomas2.jpg" },
            { src: "/images/slides/annetomas3.jpg" },
            { src: "/images/slides/annetomas4.jpg" },
            { src: "/images/slides/marianabaltazar1.jpg" },
            { src: "/images/slides/marianabaltazar2.jpg" },
            { src: "/images/slides/marianabaltazar3.jpg" },
            { src: "/images/slides/marianabaltazar4.jpg" },
            { src: "/images/slides/marianabaltazar5.jpg" },
            { src: "/images/slides/marianabaltazar6.jpg" },
            { src: "/images/slides/marianabaltazar7.jpg" },
            { src: "/images/slides/marianabaltazar8.jpg" },
            { src: "/images/slides/marianabaltazar9.jpg" },
            { src: "/images/slides/marianabaltazar10.jpg" },
            { src: "/images/slides/marianabaltazar11.jpg" },
            { src: "/images/slides/marianabaltazar12.jpg" },
            { src: "/images/slides/marianabaltazar13.jpg" },
            { src: "/images/slides/marianabaltazar14.jpg" },
            { src: "/images/slides/marianabaltazar15.jpg" },
            { src: "/images/slides/marianabaltazar16.jpg" },
            { src: "/images/slides/marianabaltazar17.jpg" },
            { src: "/images/slides/marianabaltazar18.jpg" },
            { src: "/images/slides/marianabaltazar18.jpg" },
            { src: "/images/slides/cooper1.jpg" },
            { src: "/images/slides/cooper2.jpg" },
            { src: "/images/slides/cooper3.jpg" },
            { src: "/images/slides/cooper4.jpg" },
            { src: "/images/slides/cooper5.jpg" },
            { src: "/images/slides/cooper6.jpg" },
            { src: "/images/slides/cooper7.jpg" },
            { src: "/images/slides/cooper8.jpg" },
            { src: "/images/slides/cooper9.jpg" },
            { src: "/images/slides/idil1.jpg" },
            { src: "/images/slides/idil2.jpg" },
            { src: "/images/slides/idil3.jpg" },
            { src: "/images/slides/johnsonfamily1.jpg" },
            { src: "/images/slides/johnsonfamily2.jpg" },
            { src: "/images/slides/johnsonfamily3.jpg" },
            { src: "/images/slides/justinkearsten1.jpg" },
            { src: "/images/slides/justinkearsten2.jpg" },
            { src: "/images/slides/justinkearsten3.jpg" },
            { src: "/images/slides/justinkearsten4.jpg" },
            { src: "/images/slides/justinkearsten5.jpg" },
            { src: "/images/slides/mckenzie1.jpg" },
            { src: "/images/slides/mckenzie2.jpg" },
            { src: "/images/slides/mckenzie3.jpg" },
            { src: "/images/slides/mckenzie4.jpg" },
            { src: "/images/slides/mckenzie5.jpg" },
            { src: "/images/slides/mckenzie6.jpg" },
            { src: "/images/slides/mckenzie7.jpg" },
            { src: "/images/slides/mckenzie8.jpg" },
            { src: "/images/slides/mckenzie9.jpg" },
            { src: "/images/slides/mckenzie10.jpg" },
            { src: "/images/slides/mckenzie11.jpg" },
            { src: "/images/slides/mckenzie12.jpg" },
            { src: "/images/slides/mckenzie13.jpg" },
            { src: "/images/slides/mckenzie14.jpg" }
    	]
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
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	}


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
		      url: "http://hellocandor.com/inc/sendEmail.php",
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