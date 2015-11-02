$('ul.nav li.dropdown').hover(function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(50).slideDown(400);
}, function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(50).slideUp(400);
});