<?php $page="sim"; include 'site/header.html';?>

<script>
        window.onload = function() {

/******************* Start of cars loaded on racetrack ************************/

                function load_drivers(race, callback) {
                        var driver_array = {},
                        loaded_drivers = 0,
                        total_drivers = 0;
                        
                        // get num of race
                        for(var each_driver in race) {
                                total_drivers++;
                        }
                        
                        for(var each_driver in race) {
                                driver_array[each_driver] = new Image();
                                driver_array[each_driver].onload = function() {
                                        if(++loaded_drivers >= total_drivers) {
                                                callback(driver_array);
                                        }
                                };
                                driver_array[each_driver].src = race[each_driver];
                        }
                }
                var canvas = document.getElementById('racetrack'),
                context = canvas.getContext('2d');
                
                var race = {
                        alonso: 'images/simulation/alonso-car.png',
                        bottas: 'images/simulation/bottas-car.png',
                        button: 'images/simulation/button-car.png',
                        ericsson: 'images/simulation/ericsson-car.png',
                        grosjean: 'images/simulation/grosjean-car.png',
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
                        stevens: 'images/simulation/stevens-car.png',
                        verstappen: 'images/simulation/verstappen-car.png',
                        vettel: 'images/simulation/vettel-car.png'
                };
                
                // In order of drivers qualifying starting grid position from 20th-1st
                load_drivers(race, function(driver_array) {
                        context.drawImage(driver_array.rossi,240,675);
                        context.drawImage(driver_array.stevens,280,625);
                        context.drawImage(driver_array.button,320,675);
                        context.drawImage(driver_array.alonso,360,625);
                        context.drawImage(driver_array.nasr,400,675);
                        context.drawImage(driver_array.ericsson,440,625);
                        context.drawImage(driver_array.maldonado,480,675);
                        context.drawImage(driver_array.verstappen,520,625);
                        context.drawImage(driver_array.grosjean,560,675);
                        context.drawImage(driver_array.perez,600,625);
                        context.drawImage(driver_array.ricciardo,640,675);
                        context.drawImage(driver_array.hulkenberg,680,625);
                        context.drawImage(driver_array.sainz,720,675);
                        context.drawImage(driver_array.kvyat,760,625);
                        context.drawImage(driver_array.vettel,800,675);
                        context.drawImage(driver_array.raikkonen,840,625);
                        context.drawImage(driver_array.bottas,880,675);
                        context.drawImage(driver_array.massa,920,625);
                        context.drawImage(driver_array.rosberg,960,675);
                        context.drawImage(driver_array.hamilton,1000,625);
                });

/******************* End of cars loaded on racetrack ************************/


/******************* Start of drawing road for racetrack ********************/

                // Green fill for racetrack canvas
                context.fillStyle = "#008518";
                context.fillRect(0, 0, canvas.width, canvas.height);
                
                // Black stroke outline for racetrack
                context.strokeStyle = "#000000";
                context.lineWidth = 10;
                context.strokeRect(0, 0, canvas.width, canvas.height);
                

/******************* Main racetrack roadmap draw ***************************/
                
                // Starting grid straight
                context.fillStyle = "#7A7A7A";
                context.fillRect(275, 575, 900, 170);
                
                //Starting grid position lines
                context.beginPath();
                context.moveTo(283,669);
                context.lineTo(295,669);
                context.lineTo(295,699);
                context.lineTo(283,699);
                context.lineTo(283,697);
                context.lineTo(293,697);
                context.lineTo(293,671);
                context.lineTo(283,671);
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                
                
                        // context.drawImage(driver_array.rossi,240,675);
                        // context.drawImage(driver_array.stevens,280,625);
                
                //20th
                context.beginPath();
                context.moveTo(283,669);
                context.lineTo(295,669);
                context.lineTo(295,699);
                context.lineTo(283,699);
                context.lineTo(283,697);
                context.lineTo(293,697);
                context.lineTo(293,671);
                context.lineTo(283,671);
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //19th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //18th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //17th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //16th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //15th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //14th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //13th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //12th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //11th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //10th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //9th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //8th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //7th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //6th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //5th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //4th
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //3rd
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //2nd
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                //1st
                context.beginPath();
                context.moveTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.lineTo();
                context.closePath();
                context.fillStyle = "white";
                context.fill();
                
                
/******************* End of drawing road for racetrack ********************/
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