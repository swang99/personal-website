/* global $ */
/*eslint-env browser*/
/*jslint maxerr: 1000 */

/* Hide elements when mobile nav is clicked */
$('.js--nav-icon').click(function () {
    $('.js--hide').fadeToggle(300)});

/* About slideshow */
$(function() {
    if ($('body').is('.personal-slide')) {
        var slideIndex = 0;
        carousel();

        function carousel() {
			let x = document.getElementsByClassName("abtSlides");

			for (let i = 0; i < x.length; i++) {
				x[i].style.display = "none";
			}

			slideIndex++;
			if (slideIndex > x.length) {
				slideIndex = 1;
			}

			x[slideIndex -1 ].style.display = "block";
			setTimeout(carousel, 3000);
        }
    }
});
