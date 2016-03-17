//--------------------------------------------------------------
// Utility Functions
//--------------------------------------------------------------

// Initiates modal with id "elm_id" upon click of elm with id "open_id"
//
// Requires a modal element with class "modal" and 
// child element with class "modal__container"
// vid_link optional if there is a video as the first child of container
// NB: all arguments are strings
//
function initModal(elm_id, open_id, vid_link) {
	var modal_open = false;
	function handleModalOpen() {
		if (!modal_open) {
			var modal = document.getElementById(elm_id);
			modal.classList.remove('modal--hide');
			modal_open = !modal_open;
			
			// Set the link of video
			//
			if (vid_link) {
				modal.children[0].children[0].src = vid_link;
			}
		}	
	}
	function handleModalClose(e) {
		if (!e.target.parentNode.classList.contains('modal__container')) {
			var modal = document.getElementById(elm_id);
			modal.classList.add('modal--hide');
			modal_open = !modal_open;
			setTimeout(function() {
				modal.children[0].children[0].src = "";
			}, 300)
		}
	}

	var play = document.getElementById(open_id);
	play.addEventListener('click', handleModalOpen);
	
	var blackout = document.getElementById(elm_id);
	blackout.addEventListener('click', handleModalClose);
}


// Removes widows in all elements with class "target_class"
// NB: all arguments are strings
//
function removeWidows(target_class) {
	var textNodes = Array.prototype.slice.call(document.getElementsByClassName(target_class));
	textNodes.forEach(function(item) {
		var wordArray = item.textContent.split(" ");
		if (wordArray.length > 1) {
			wordArray[wordArray.length - 2] += "&nbsp;" + wordArray[wordArray.length - 1];
			wordArray.pop();
			item.innerHTML = wordArray.join(" ");
		}
	})
}