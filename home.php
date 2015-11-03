<?php $page="news"; include 'site/header.html';?>

<!-- div container for marquee news -->
<div id="marquee-home" class="container hidden">
	<div class="row">
		<div class="col-md-12">
			
		</div>
	</div>
</div>


<!-- div container for carousel -->
<div id="carousel" class="container slide" data-interval="5000" data-ride="carousel">
	<div class="row">
		<div class="col-xs-12">
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
				</div>
				<div class="item">
					<img src="images/carousel/bottas.jpg" alt="slide2">
				</div>
				<div class="item">
					<img src="images/carousel/ericsson.jpg" alt="slide3">
				</div>
				<div class="item">
					<img src="images/carousel/ferrari_silverstone.jpg" alt="slide4">
				</div>
				<div class="item">
					<img src="images/carousel/vettel.jpg" alt="slide5">
				</div>
			</div>
		</div>
		<!-- Icon for carousel controls -->
		<a id="prev-slide" href="#main-carousel" class="carousel-control left" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a id="next-slide" href="#main-carousel" class="carousel-control right" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
</div>

<!-- div container for first block of news -->
<div class="container">
	<div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 1</p></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 2</p></div>
            <div class="clearfix visible-sm-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 3</p></div>
            <div class="clearfix visible-md-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 4</p></div>
            <div class="clearfix visible-sm-block"></div>
            <div class="clearfix visible-lg-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 5</p></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 6</p></div>
            <div class="clearfix visible-sm-block"></div>
            <div class="clearfix visible-md-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 7</p></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 8</p></div>
            <div class="clearfix visible-sm-block"></div>
            <div class="clearfix visible-lg-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 9</p></div>
            <div class="clearfix visible-md-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 10</p></div>
            <div class="clearfix visible-sm-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 11</p></div>
            <div class="col-sm-6 col-md-4 col-lg-3"><p class="news-p">Box 12</p></div>
	</div>
</div>
<div class="container show-more">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center more-stories">Read more stories</div>
	</div>
</div>
<!-- div container for second block of news -->
<div class="container">
	<div class="row">
		<div id="news-block2" class="col-md-12">
			
		</div>
	</div>
</div>

<?php include 'site/footer.html';?>