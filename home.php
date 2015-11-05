<?php $page="news"; include 'site/header.html';?>

<!-- div container for carousel -->
<div id="carousel" class="container container-border slide" data-interval="5000" data-ride="carousel">
	<div class="row">
		<div class="col-xs-12">
			<!-- Carousel indicators -->
			<ol class="carousel-indicators">
				<li data-target="#main-carousel" data-slide-to="0" class="active"></li>
				<li data-target="#main-carousel" data-slide-to="1"></li>
				<li data-target="#main-carousel" data-slide-to="2"></li>
				<li data-target="#main-carousel" data-slide-to="3"></li>
				<li data-target="#main-carousel" data-slide-to="4"></li>
				<li data-target="#main-carousel" data-slide-to="5"></li>
			</ol>
			<!-- Carousel wrappers -->
			<div class="carousel-inner">
				<div class="item active">
					<img src="images/carousel/riccardo.JPG" alt="slide1"></div>
				<div class="item">
					<img src="images/carousel/bottas.jpg" alt="slide2"></div>
				<div class="item">
					<img src="images/carousel/ericsson.jpg" alt="slide3"></div>
				<div class="item">
					<img src="images/carousel/ferrari_silverstone.jpg" alt="slide4"></div>
				<div class="item">
					<img src="images/carousel/vettel.jpg" alt="slide5"></div>
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

<!-- div container for first row of news -->
<div id="all-news" class="container story-width">
	<div class="row">
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/vettel.jpg">
			<section class="story-text hover-animation">
				<p>DCDFFCSDFVFDVDSGVDFSDVCGDAHJHDGSF</p>
			</section>
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/horner.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="clearfix visible-sm-block"></div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/perez.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="clearfix visible-md-block"></div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/raikkonen.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="clearfix visible-sm-block"></div>
		<div class="clearfix visible-lg-block"></div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/pirelli.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/rosberg.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="clearfix visible-sm-block"></div>
		<div class="clearfix visible-md-block"></div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/rosberg-win.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/lh-vs-nr.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="clearfix visible-sm-block"></div>
		<div class="clearfix visible-lg-block"></div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/magnussen.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="clearfix visible-md-block"></div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/kvyat.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="clearfix visible-sm-block"></div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/vettel-puncture.jpg">
			<section class="story-text hover-animation"></section>
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3">
			<img class="story-img" src="images/stories/rossi.jpg">
			<section class="story-text hover-animation"></section>
		</div>
	</div>
</div>

<?php include 'site/footer.html';?>