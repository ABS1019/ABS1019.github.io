<?php $page="sim"; include 'site/header.html';?>
<div class="jumbotron" style="background:transparent !important">
	<h1>Formula 1 Race Simulator</h1>
	<div class="container sim-buttons">
		<button>Button 1</button>
		<button>Button 2</button>
		<button>Button 3</button>
		<button>Button 4</button>
	</div>
	<canvas id="racetrack" width="1898" height="760" class="track-size"></canvas>
	
	<div class="container live-leaderboard"></div>
</div>
<script src="js/racetrack.js"></script>
<?php include 'site/footer.html';?>