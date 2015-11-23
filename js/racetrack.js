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

/******************* End of cars loaded on racetrack ************************/

/******************* Start of drawing road for racetrack ********************/

	// Green fill for racetrack canvas
		context.fillStyle = "#008518";
		context.fillRect(0,0,canvas.width,canvas.height);
	// Black stroke outline for racetrack
		context.strokeStyle = "#000000"; context.lineWidth = 10;
		context.strokeRect(0,0,canvas.width,canvas.height);
		

/******************* Main racetrack roadmap ********************************/
		
// Grey track here, white lines for curbs etc added after >>>
	// Starting grid straight
		context.fillStyle = "#7A7A7A";
		context.fillRect(275,575,1250,170);	
	// First bend
		context.beginPath(); context.moveTo(1520,745);
		context.quadraticCurveTo(1880,745,1875,400); 
		context.lineTo(1705,400);
		context.quadraticCurveTo(1710,575,1520,575); 
		context.fill();		
	// Second bend
		context.beginPath(); context.moveTo(1875,400);
		context.lineTo(1875,200); context.quadraticCurveTo(1880,15,1705,15);
		context.lineTo(1705,400); context.closePath();
		context.fill();
	// Straight -> third bend
		context.beginPath(); context.moveTo(1705,400);
		context.arcTo(1705,200,1655,200,30); context.lineTo(1255,200);
		context.lineTo(1255,15); context.lineTo(1705,15); context.closePath();
		context.fill();		
	// Fourth bend
		context.beginPath(); context.moveTo(1255,15);
		context.arcTo(1005,15,1005,115,40); context.arcTo(1005,380,1155,380,150);
		context.lineTo(1255,380); context.closePath(); context.fill();
	// Fifth bend
		context.beginPath(); context.moveTo(1255,380);
		context.arcTo(1455,380,1455,395,5); context.lineTo(1455,215);
		context.lineTo(1255,215); context.closePath(); context.fill();
		context.beginPath(); context.moveTo(1455,215);
		context.arcTo(1655,215,1655,315,80); context.lineTo(1655,400);
		context.quadraticCurveTo(1655,550,1520,560); context.lineTo(1455,560);
		context.closePath(); context.fill();
	// Next curve -> long straight
		context.beginPath(); context.moveTo(1455,560); context.lineTo(1100,560);
		context.lineTo(1100,395); context.lineTo(1455,395); context.closePath();
		context.fill();
		context.beginPath(); context.moveTo(1100,560);
		context.quadraticCurveTo(1000,560,900,520); 
		context.lineTo(260,250); context.lineTo(260,80); context.quadraticCurveTo(1000,395,900,364);
		context.lineTo(1100,395); context.closePath(); context.fill();
	// Sixth and seventh bends before finishing straight
		context.beginPath(); context.moveTo(261,80);
		context.quadraticCurveTo(15,0,15,200); context.quadraticCurveTo(15,200,15,600);
		context.lineTo(220,375); context.quadraticCurveTo(220,240,220,300);
		context.arcTo(220,200,261,250,30);
		context.closePath(); context.fill();		

	// behind drivers bend inside
		context.beginPath(); context.moveTo(220,375);
		context.arcTo(220,575,275,575,40); context.lineTo(275,575);
		context.lineTo(275,745); context.lineTo(100,745); context.closePath();
		context.fill();
		
	// // // 9 bottom left
		context.beginPath(); context.moveTo(15,600);
		context.arcTo(15,745,100,745,80); context.lineTo(220,745); context.lineTo(220,375);
		context.closePath(); context.fill();

// Grid positions for each driver and gridlines on starting straight       
         
	// Raceline - white
		context.beginPath(1065,575); context.lineTo(1095,575); 
		context.lineTo(1095,745); context.lineTo(1065,745);
		context.lineTo(1065,575); context.closePath();
		context.fillStyle = "white"; context.fill();
	// Black sections
		context.beginPath(1065, 575); context.lineTo(1080,575);
		context.lineTo(1080,609); context.lineTo(1065,609);
		context.lineTo(1065,575); context.closePath();
		context.fillStyle = "black"; context.fill();
		context.beginPath(1080,609); context.lineTo(1095,609);
		context.lineTo(1095,643); context.lineTo(1080,643);
		context.lineTo(1080,609); context.closePath();
		context.fill();
		context.beginPath(1065,643); context.lineTo(1080,643);
		context.lineTo(1080,677); context.lineTo(1065,677);
		context.lineTo(1065,643); context.closePath();
		context.fill();
		context.beginPath(1080,677); context.lineTo(1095,677);
		context.lineTo(1095,711); context.lineTo(1080,711);
		context.lineTo(1080,677); context.closePath();
		context.fill();
		context.beginPath(1065,711); context.lineTo(1080,711);
		context.lineTo(1080,745); context.lineTo(1065,745);
		context.lineTo(1065,711); context.closePath();
		context.fill();
		
// White lines on racetrack
// Inside line
		context.strokeStyle = "white";
	// 1
		context.beginPath(); context.moveTo(275,575);
		context.lineTo(1525,575); context.stroke();
	// 2
		context.beginPath(); context.moveTo(1520,575);
		context.quadraticCurveTo(1710,575,1705,400); context.stroke();
	// 3
		context.beginPath(); context.moveTo(1705,400);
		context.arcTo(1705,200,1655,200,30); context.stroke();	
	// 4
		context.beginPath(); context.moveTo(1675,200);
		context.arcTo(1255,200,1255,215,5); context.arcTo(1255,215,1305,215,5);
		context.lineTo(1555,215); context.stroke();	
	// 5 - arcTo
		context.beginPath(); context.moveTo(1555,215);
		context.arcTo(1655,215,1655,315,80); context.stroke();
	// 6 - quadratic curve
		context.beginPath(); context.moveTo(1655,295);
		context.lineTo(1655,400);
		context.quadraticCurveTo(1655,550,1520,560); 
		context.lineTo(1100,560); context.stroke();	
	// 7 quadratic curve into long straight
		context.beginPath(); context.moveTo(1100,560);
		context.quadraticCurveTo(1000,560,900,520); 
		context.lineTo(260,250);
		context.stroke();
	// 8
		context.beginPath(); context.moveTo(261,250);
		context.quadraticCurveTo(220,240,220,300);
		context.lineTo(220,375);
		context.stroke();
	// 9
		context.beginPath(); context.moveTo(220,375);
		context.arcTo(220,575,275,575,40); context.lineTo(275,575);
		context.stroke();
		
// Outside line
	// 1
		context.beginPath(); context.moveTo(275,745);
		context.lineTo(1525,745); context.stroke();
	// 2
		context.beginPath(); context.moveTo(1520,745);
		context.quadraticCurveTo(1880,745,1875,400); context.stroke();
	// 3
		context.beginPath(); context.moveTo(1875,400); context.lineTo(1875,200);
		context.quadraticCurveTo(1880,15,1705,15); context.stroke();
	// 4
		context.beginPath(); context.moveTo(1705,15);
		context.arcTo(1005,15,1005,115,40); context.stroke();
	// 5
		context.beginPath(); context.moveTo(1005,55);
		context.lineTo(1005,155); context.arcTo(1005,380,1155,380,150);
		context.stroke();
	// 6
		context.beginPath(); context.moveTo(1155,380);
		context.arcTo(1455,380,1455,395,5);
		context.arcTo(1455,395,1405,395,5);
		context.lineTo(1100, 395); context.stroke();
	// 7
		context.beginPath(); context.moveTo(1100,395);
		context.quadraticCurveTo(1000,395,900,355);
		context.lineTo(260,80);
		context.stroke();
	// // 8
		context.beginPath(); context.moveTo(261,80);
		context.quadraticCurveTo(15,0,15,200); context.quadraticCurveTo(15,200,15,600);
		context.stroke();
	// // 9
		context.beginPath(); context.moveTo(15,600);
		context.arcTo(15,745,275,745,80); context.lineTo(275,745);
		context.stroke();
		
// Red/white curbs for racetrack
		context.setLineDash([8,4]); context.strokeStyle = "red";
	//First bend
		context.beginPath(); context.moveTo(1520,575);
		context.quadraticCurveTo(1710,575,1705,400);
		context.stroke(); context.closePath();
	//Second bend
		context.beginPath(); context.moveTo(1705,250);
		context.arcTo(1705,200,1655,200,30); context.lineTo(1650,200);
		context.stroke(); context.closePath();
	// Sharp third bend
		context.beginPath(); context.moveTo(1350,200);
		context.arcTo(1255,200,1255,215,5); context.arcTo(1255,215,1305,215,5);
		context.lineTo(1350,215); context.stroke();
	// Fourth turn, both sides
		context.beginPath(); context.moveTo(1330,380);
		context.arcTo(1455,380,1455,395,5); context.arcTo(1455,395,1405,395,5);
		context.lineTo(1330,395); context.stroke();
	// Run up to AND long straight
		context.beginPath(); context.moveTo(1520,560);
		context.lineTo(1100,560); context.stroke(); context.closePath();
	// Bend after straight
		context.beginPath(); context.moveTo(261,250);
		context.quadraticCurveTo(220,240,220,300);
		context.lineTo(220,375); context.stroke(); context.closePath();
	// Final bend before finishing straight
		context.beginPath(); context.moveTo(220,475);
		context.arcTo(220,575,275,575,40); context.lineTo(325,575);
		context.stroke(); context.closePath();
		context.beginPath(); context.moveTo(261,80);
		context.quadraticCurveTo(15,0,15,200); context.stroke();
		context.beginPath(); context.moveTo(15,600);
		context.arcTo(15,745,275,745,80); context.lineTo(275,745);
		context.stroke();
		
	//Starting grid position lines
		context.lineWidth = 3; context.setLineDash([]); context.strokeStyle = "white";
	// 20th
		context.beginPath(); context.moveTo(283,669);
		context.lineTo(295,669); context.lineTo(295,699);
		context.lineTo(283,699); context.stroke();
	// 19th
		context.beginPath(); context.moveTo(323,619);
		context.lineTo(335,619); context.lineTo(335,649);
		context.lineTo(323,649); context.stroke();
	// 18th
		context.beginPath(); context.moveTo(363,669);
		context.lineTo(375,669); context.lineTo(375,699);
		context.lineTo(363,699); context.stroke();
	// 17th
		context.beginPath(); context.moveTo(403,619);
		context.lineTo(415,619); context.lineTo(415,649);
		context.lineTo(403,649); context.stroke();
	// 16th
		context.beginPath(); context.moveTo(443,669);
		context.lineTo(455,669); context.lineTo(455,699);
		context.lineTo(443,699); context.stroke();
	// 15th
		context.beginPath(); context.moveTo(483,619);
		context.lineTo(495,619); context.lineTo(495,649);
		context.lineTo(483,649); context.stroke();
	// 14th
		context.beginPath(); context.moveTo(523,669);
		context.lineTo(535,669); context.lineTo(535,699);
		context.lineTo(523,699); context.stroke();
	// 13th
		context.beginPath(); context.moveTo(563,619);
		context.lineTo(575,619); context.lineTo(575,649);
		context.lineTo(563,649); context.stroke();
	// 12th
		context.beginPath(); context.moveTo(603,669);
		context.lineTo(615,669); context.lineTo(615,699);
		context.lineTo(603,699); context.stroke();
	// 11th
		context.beginPath(); context.moveTo(643,619);
		context.lineTo(655,619); context.lineTo(655,649);
		context.lineTo(643,649); context.stroke();
	// 10th
		context.beginPath(); context.moveTo(683,669);
		context.lineTo(695,669); context.lineTo(695,699);
		context.lineTo(683,699); context.stroke();
	// 9th
		context.beginPath(); context.moveTo(723,619);
		context.lineTo(735,619); context.lineTo(735,649);
		context.lineTo(723,649); context.stroke();
	// 8th
		context.beginPath(); context.moveTo(763,669);
		context.lineTo(775,669); context.lineTo(775,699);
		context.lineTo(763,699); context.stroke();
	// 7th
		context.beginPath(); context.moveTo(803,619);
		context.lineTo(815,619); context.lineTo(815,649);
		context.lineTo(803,649); context.stroke();
	// 6th
		context.beginPath(); context.moveTo(843,669);
		context.lineTo(855,669); context.lineTo(855,699);
		context.lineTo(843,699); context.stroke();
	// 5th
		context.beginPath(); context.moveTo(883,619);
		context.lineTo(895,619); context.lineTo(895,649);
		context.lineTo(883,649); context.stroke();
	// 4th
		context.beginPath(); context.moveTo(923,669);
		context.lineTo(935,669); context.lineTo(935,699);
		context.lineTo(923,699); context.stroke();
	// 3rd
		context.beginPath(); context.moveTo(963,619);
		context.lineTo(975,619); context.lineTo(975,649);
		context.lineTo(963,649); context.stroke();
	// 2nd
		context.beginPath(); context.moveTo(1003,669);
		context.lineTo(1015,669); context.lineTo(1015,699);
		context.lineTo(1003,699); context.stroke();
	// 1st
		context.beginPath(); context.moveTo(1043,619);
		context.lineTo(1055,619); context.lineTo(1055,649);
		context.lineTo(1043,649); context.stroke();
		
	//White line between starting grids
		context.beginPath(); context.moveTo(250,660); context.lineTo(1065,660);
		context.stroke();

/******************* End of drawing road for racetrack ********************/

// Drivers added after drawing of racetrack - so drivers are drawn above racetrack
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
};