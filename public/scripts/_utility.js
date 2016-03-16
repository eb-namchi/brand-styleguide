function initModal() {
	var modal_open = false;
	function handleModalOpen() {
		if (!modal_open) {
			var modal = document.getElementById('modal_YT');
			modal.classList.remove('modal--hide');
			modal.classList.remove('modal--none');
			modal_open = true;
			modal.children[0].children[0].src = "https://www.youtube.com/embed/dxSTm_XuNvE?autoplay=1";
		}	
	}
	function handleModalClose(e) {
		if (!e.target.parentNode.classList.contains('modal__container')) {
			var modal = document.getElementById('modal_YT');
			modal.classList.add('modal--hide');
			modal.classList.add('modal--none');
			modal_open = false;
			setTimeout(function() {
				modal.children[0].children[0].src = "";
			}, 300)
		}
		
	}
	var play = document.getElementById('slide6__play');
	play.addEventListener('click', handleModalOpen);
	var play_txt = document.getElementById('slide6__title');
	play_txt.addEventListener('click', handleModalOpen);
	var blackout = document.getElementById('modal_YT');
	blackout.addEventListener('click', handleModalClose);
}

function removeWidows() {
	var textNodes = Array.prototype.slice.call(document.getElementsByClassName("txt"));
	textNodes.forEach(function(item) {
		var wordArray = item.textContent.split(" ");
		if (wordArray.length > 1) {
			wordArray[wordArray.length - 2] += "&nbsp;" + wordArray[wordArray.length - 1];
			wordArray.pop();
			item.innerHTML = wordArray.join(" ");
		}
	})
}