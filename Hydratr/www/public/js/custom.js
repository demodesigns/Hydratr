function fade() {
	setTimeout(function() {
		$(".loading-overlay").toggleClass('fade');
		fade();
	}, 800);
}

fade();