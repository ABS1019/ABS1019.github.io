<?php $page="sim"; include 'site/header.html';?>

<script>
	window.onload = function() {
		var canvas = document.getElementById("myCanvas"),
		c = canvas.getContext("2d");
		
		c.fillStyle = "black";
		c.fillRect(0, 0, canvas.width, canvas.height);
	};
</script>
<div class="container" style="margin-top: 50px; padding: 0;">
	<h1>Formula 1 Race Simulator</h1>
	<div class="sim-buttons">
		<button>Button 1</button>
		<button>Button 2</button>
		<button>Button 3</button>
		<button>Button 4</button>
	</div>
	<canvas id="myCanvas" width="1200" height="550"></canvas>
	
	<div class="live-leaderboard"></div>
</div>

<?php include 'site/footer.html';?>