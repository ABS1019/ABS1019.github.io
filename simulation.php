<?php $page="sim"; include 'site/header.html';?>

<script>
	window.onload = function() {
		var track = document.getElementById("racetrack"),
		c = track.getContext("2d"),
		PI_Two = Math.PI * 2,
		drivers = {
			alonso: 'images/simulation/alonso-car.png',
			bottas: 'images/simulation/bottas-car.png',
			button: 'images/simulation/button-car.png',
			ericsson: 'images/simulation/ericsson-car.png',
			hamilton: 'images/simulation/hamilton-car.png',
			hulkenberg: 'images/simulation/hulkenberg-car.png',
			kvyat: 'images/simulation/kvyat-car.png',
			maldonado: 'images/simulation/maldonado-car.png',
			massa: 'images/simulation/massa-car.png',
			nasr: 'images/simulation/nasr-car.png',
			perez: 'images/simulation/perez-car.png',
			raikkonen: 'images/simulation/raikkonen-car.png',
			ricciardo: 'images/simulation/ricciardo-car.png',
			rosberg: 'images/simulation/rosberg-car.png',
			rossi: 'images/simulation/rossi-car.png',
			sainz: 'images/simulation/sainz-car.png',
			verstappen: 'images/simulation/verstappen-car.png',
			vettel: 'images/simulation/vettel-car.png'
		},
		car = new Image();
		
		// Green fill for racetrack canvas
		c.fillStyle = "#008518";
		c.fillRect(0, 0, track.width, track.height);
		
		// Black stroke outline for racetrack
		c.strokeStyle = "#000000";
		c.lineWidth = 10;
		c.strokeRect(0, 0, track.width, track.height);



      function loadDrivers(drivers, callback) {
        var cars = {},
        loaded_Drivers = 0,
        all_drivers = 0;

        // increment the number of participants from drivers array
        for(var each_driver in drivers) { all_drivers++; }

        for(var each_driver in drivers) {
        	// Creates new image for each driver
        	cars[each_driver] = new Image();
          	cars[each_driver].onload = function() {
          		// On load, as long as the loaded drivers is >= the all drivers array
          		// callback eac h driver in the cars array
          		if(++loaded_Drivers >= all_drivers) {
          			callback(cars);
          		}
          	};
          	// Sets source for each driver from the driver array to the car array  
          	cars[each_driver].src = drivers[src];
        }
      }

      loadDrivers(drivers, function(cars) {
        c.drawImage(cars.alonso, 50, 50);
        c.drawImage(cars.bottas, 50, 100);
        c.drawImage(cars.button, 100, 50);
        c.drawImage(cars.ericsson, 100, 100);
        c.drawImage(cars.grosjean, 100, 150);
        c.drawImage(cars.hamilton, 150, 100);
        c.drawImage(cars.hulkenberg, 150, 150);
        c.drawImage(cars.kvyat, 200, 150);
        c.drawImage(cars.maldonado, 150, 200);
        c.drawImage(cars.massa, 200, 200);
        c.drawImage(cars.nasr, 250, 200);
        c.drawImage(cars.perez, 200, 250);
        c.drawImage(cars.raikkonen, 250, 250);
        c.drawImage(cars.ricciardo, 300, 250);
        c.drawImage(cars.rosberg, 250, 300);
        c.drawImage(cars.rossi, 300, 300);
        c.drawImage(cars.sainz, 350, 300);
        c.drawImage(cars.stevens, 300, 350);
        c.drawImage(cars.verstappen, 350, 350);
        c.drawImage(cars.vettel, 400, 350);
      });
		
		


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