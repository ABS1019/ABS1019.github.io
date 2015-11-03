<?php $page="news"; include 'site/header.html';?>
<!-- div container for carousel -->
<div class="container carousel-boxsize">
	<div class="row">
		<div class="col-md-12">
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
				<div class="item active">
					<img src="images/carousel/riccardo.JPG" alt="slide1">
					
				<!-- Add picture here along with some text or a button -->
			
				</div>
				<div class="item">
					<img src="images/carousel/botas.jpg" alt="slide2">
					
				<!-- Add picture here along with some text or a button -->
			
				</div>
				<div class="item">
					<img src="images/carousel/ericsson.jpg" alt="slide3">
					
				<!-- Add picture here along with some text or a button -->
			
				</div>
				<div class="item">
					<img src="images/carousel/ferrari_silverstone.jpg" alt="slide4">
					
				<!-- Add picture here along with some text or a button -->
				
				</div>
				<div class="item">
					<img src="images/carousel/vettel.jpg" alt="slide5">
					
				<!-- Add picture here along with some text or a button -->
			
				</div>
			</div>
		</div>
		<!-- Icon for carousel controls -->
		<a href="#main-carousel" class="carousel-control left" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
		</a>
		<a href="#main-carousel" class="carousel-control right" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span>
		</a>
	</div>
</div>
<div class="container">
	<div class="row">
		<div class="col-md-12">
			
		</div>
	</div>
</div>

<?php include 'site/footer.html';?>