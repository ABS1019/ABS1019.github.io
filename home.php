<?php $page="news"; include 'site/header.html';?>

<div>
	
</div>
<!-- Carousel indicators -->
<ol class="carousel-indicators">
	<li data-target="#main-carousel" data-slide-to="0" class="active"></li>
	<li data-target="#main-carousel" data-slide-to="1"></li>
	<li data-target="#main-carousel" data-slide-to="2"></li>
	<li data-target="#main-carousel" data-slide-to="3"></li>
	<li data-target="#main-carousel" data-slide-to="4"></li>		
</ol>

<!-- Carousel wrappers -->
<div class="carousel-inner">
	<div class="active item">
		<img src="/carousel/alonso.jpg" alt="Slide 1">
		
<!-- Add picture here along with some text or a button -->

	</div>
	<div class="active item">
		<img src="/carousel/botas.jpg" alt="Slide 2">
		
<!-- Add picture here along with some text or a button -->

	</div>
	<div class="active item">
		<img src="/carousel/ericsson.jpg" alt="Slide 3">
		
<!-- Add picture here along with some text or a button -->

	</div>
	<div class="active item">
		<img src="/carousel/ferrari_silverstone.jpg" alt="Slide 4">
		
<!-- Add picture here along with some text or a button -->
	
	</div>
	<div class="active item">
		<img src="/carousel/riccardo.jpg" alt="Slide 5">
		
<!-- Add picture here along with some text or a button -->
	
	</div>
</div>

<!-- Icon for carousel controls -->
<a href="#main-carousel" class="carousel-control left" data-slide="prev">
	<span class="glyphicon glyphicon-chevron-left"></span>
</a>
<a href="#main-carousel" class="carousel-control right" data-slide="next">
	<span class="glyphicon glyphicon-chevron-right"></span>
</a>

<?php include 'site/footer.html';?>