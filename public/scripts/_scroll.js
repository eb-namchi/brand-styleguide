//--------------------------------------------------------------
// Scrolling Navigation Functions
//
// Requires: _helpers.js
//--------------------------------------------------------------

import { debounce, handleAnimation, handleHideAnimation } from "_helpers";

// Navigation snap scrolling for a total X number of slides
//
// Starts navigation at slide number "start"
// Slides must have ID "slide_0" to "slide_X"
// Accounts for mobile swiping, keydown, and scroll
// Optional: Animation Timeline
//
function initScroll(total, start, animationTl) {

	var current = start || 0;
	var total = total;

	// Slides to next slide
	//
	function slideNext() {
		if (current !== total - 1) {
			current += 1;
			var next = "#slide_" + current;
			smoothScroll.animateScroll(next, 0, 
				{easing: 'easeInQuad', callback: changeScrollTop});
			
			if (animationTl) {
				var anim = animationTl[current];
				var anim_prev = animationTl[current-1];
				setTimeout(function() { 
					handleAnimation(anim);
					handleHideAnimation(anim_prev); 
				}, 500);
			}
		}
	}

	// Slides to previous slide
	//
	function slidePrev() {
		if (current !== 0) {
			current -= 1;
			var next = "#slide_" + current;
			smoothScroll.animateScroll(next, 0, 
				{easing: 'easeInQuad', callback: changeScrollTop});
			
			if (animationTl) {
				var anim = animationTl[current];
				var anim_prev = animationTl[current+1];
				setTimeout(function() { 
					handleAnimation(anim);
					handleHideAnimation(anim_prev); 
				}, 500);
			}
		}
	}

	// Handles DOM and keydown triggers
	//
	function initDesktopScroll() {

		var scrollDisable = function(e) {
			e.preventDefault();
			e.stopPropagation();
		}

		var scrollTrigger = debounce(function(e) {
			var e = window.event || e;
			var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
			if (delta > 0) {
				slidePrev();
			} else if (delta < 0) {
				slideNext();
			}
		}, 200, true);

		var handleKey = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			if (e.keyCode == '38') {
		        slidePrev();
		    }
		    else if (e.keyCode == '40') {
		        slideNext();
		    }
		}

		window.addEventListener('mousewheel', scrollDisable );
		document.addEventListener('mousewheel', scrollTrigger );
		document.addEventListener("DOMMouseScroll", scrollTrigger );
		window.addEventListener('keydown', handleKey );
	}

	// Handles triggers on native
	//
	function initPhoneScroll() {
		var xDown = null;
		var yDown = null;

		function handleTouchStart(e) {
			xDown = e.touches[0].pageX;
			yDown = e.touches[0].pageY;
		};

		function handleTouchMove(e) {
			e.preventDefault();
			e.stopPropagation();
		}

		function handleTouchEnd(e) {

			if (!xDown || !yDown ) {
				return;
			}

			var xUp = e.changedTouches[0].pageX;
			var yUp = e.changedTouches[0].pageY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( yDiff ) > Math.abs( xDiff )) {
				if (yDiff > 0) {
					slideNext()
				} else {
					slidePrev();
				}
			}
			xDown = null;
			yDown = null;
		};

		document.addEventListener('touchstart', handleTouchStart, false);
		document.addEventListener('touchmove', handleTouchMove, false);
		document.addEventListener('touchend', handleTouchEnd, false);
	}

	initDesktopScroll();
	initPhoneScroll();
}