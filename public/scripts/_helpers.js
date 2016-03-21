//--------------------------------------------------------------
// Helper Functions
//--------------------------------------------------------------

// Takes paused timeline and starts animation timeline
//
function handleAnimation(tl) {
	if (tl) {
		tl.restart();
	}
}

// Takes timeline and reverts to paused start state
//
function handleHideAnimation(tl) {
	if (tl) {
		tl.pause(0, true);
	}
}

// Debounce a function "func" for a given time "wait"
//
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, 
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Returns true if device is Mobile.
//
function isMobile() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
		return true;
	} else {
		return false;
	}
}