function slideNext() {
	if (current !== total - 1) {
		current += 1;
		var next = "#slide_" + current;
		var anim = animationTl[current];
		var anim_prev = animationTl[current-1];
		smoothScroll.animateScroll(next, 0, {easing: 'easeInQuad', callback: changeScrollTop});
		setTimeout(function() { 
			handleAnimation(anim);
			handleHideAnimation(anim_prev); 
		}, 500);
		handleNavTracker(current);
		console.log('handle' + current);
		handleReturnCards(current-1);
	}
}

function slidePrev() {
	if (current !== 0) {
		current -= 1;
		var next = "#slide_" + current;
		var anim = animationTl[current];
		var anim_prev = animationTl[current+1];
		smoothScroll.animateScroll(next, 0, {easing: 'easeInQuad', callback: changeScrollTop});
		setTimeout(function() { 
			handleAnimation(anim);
			handleHideAnimation(anim_prev); 
		}, 500);
		handleNavTracker(current);
		handleReturnCards(current+1);
	}
}

function handleScroll() {

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
	var scroll = document.getElementById('view');
	scroll.addEventListener('mousewheel', scrollTrigger );
	scroll.addEventListener("DOMMouseScroll", scrollTrigger );
	window.addEventListener('keydown', handleKey );
}

function initPhoneNav() {
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

		function findDeck() {
			if (current === 2 || current === 4 || current === 5 || current === 7) {
				var slide = "slide_" + current;
				slide = document.getElementById(slide);
				return slide.children[4];
			} else {
				return false;
			}
		};

		if (!xDown || !yDown ) {
			return;
		}

		var xUp = e.changedTouches[0].pageX;
		var yUp = e.changedTouches[0].pageY;

		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;

		if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
			if (xDiff > 0) {
				handleNextCard(findDeck());
			} else {
				handlePrevCard(findDeck());
			}
		} else if ( Math.abs( yDiff ) > Math.abs( xDiff )) {
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