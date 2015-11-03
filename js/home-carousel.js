$(document).ready(function() {
	// Left click function on glyphicon in carousel
	$('#prev-slide').click(function() {
		$('#carousel').carousel('prev')
	})
	// Right click function on glyphicon in carousel
	$('#next-slide').click(function() {
		$('#carousel').carousel('next')
	})
});