<?php $page="sim"; include 'site/header.html';?>

<script>
	window.onload = function() {
		var track = document.getElementById("racetrack"),
		c = track.getContext("2d"),
		PI_Two = Math.PI * 2,
		car = new Image();
		
		// Green fill for racetrack canvas
		c.fillStyle = "#008518";
		c.fillRect(0, 0, track.width, track.height);
		
		// Black stroke outline for racetrack
		c.strokeStyle = "#000000";
		c.lineWidth = 10;
		c.strokeRect(0, 0, track.width, track.height);

		car.src = "images/simulation/perez-car.png";

		car.onload = function() {
			c.drawImage(car, 50, 50);
		};
		
	};
</script>
<div class="jumbotron" style="background:transparent !important">
	<h1>Formula 1 Race Simulator</h1>
	<div class="container sim-buttons">
		<button>Button 1</button>
		<button>Button 2</button>
		<button>Button 3</button>
		<button>Button 4</button>
	</div>
	<canvas id="racetrack" width="1700" height="800" class="track-size"></canvas>
	
	<div class="container live-leaderboard"></div>
</div>

<?php include 'site/footer.html';?>