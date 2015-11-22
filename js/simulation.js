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
		
		// // In order of drivers qualifying starting grid position from 20th-1st
		// load_drivers(race, function(driver_array) {
		// 		context.drawImage(driver_array.rossi,240,675);
		// 		context.drawImage(driver_array.stevens,280,625);
		// 		context.drawImage(driver_array.button,320,675);
		// 		context.drawImage(driver_array.alonso,360,625);
		// 		context.drawImage(driver_array.nasr,400,675);
		// 		context.drawImage(driver_array.ericsson,440,625);
		// 		context.drawImage(driver_array.maldonado,480,675);
		// 		context.drawImage(driver_array.verstappen,520,625);
		// 		context.drawImage(driver_array.grosjean,560,675);
		// 		context.drawImage(driver_array.perez,600,625);
		// 		context.drawImage(driver_array.ricciardo,640,675);
		// 		context.drawImage(driver_array.hulkenberg,680,625);
		// 		context.drawImage(driver_array.sainz,720,675);
		// 		context.drawImage(driver_array.kvyat,760,625);
		// 		context.drawImage(driver_array.vettel,800,675);
		// 		context.drawImage(driver_array.raikkonen,840,625);
		// 		context.drawImage(driver_array.bottas,880,675);
		// 		context.drawImage(driver_array.massa,920,625);
		// 		context.drawImage(driver_array.rosberg,960,675);
		// 		context.drawImage(driver_array.hamilton,1000,625);
		// });
/******************* End of cars loaded on racetrack ************************/

/******************* Start of drawing road for racetrack ********************/

		// Green fill for racetrack canvas
		context.fillStyle = "#008518";
		context.fillRect(0,0,canvas.width,canvas.height);
		
		// Black stroke outline for racetrack
		context.strokeStyle = "#000000"; context.lineWidth = 10;
		context.strokeRect(0,0,canvas.width,canvas.height);
		

/******************* Main racetrack roadmap draw ***************************/
		
// Grey track here, white lines for curbs etc added after >>>
		
		// Starting grid straight
		context.fillStyle = "#7A7A7A";
		context.fillRect(275,575,1250,170);
		
		// First bend
		context.beginPath(); context.moveTo(1520,745);
		context.quadraticCurveTo(1880,745,1875,400); 
		context.lineTo(1705,400);
		context.quadraticCurveTo(1710,575,1520,575); 
		context.fillStyle = "#7A7A7A"; context.fill();
		
		// Second bend
		context.beginPath(); context.moveTo(1875,400);
		context.lineTo(1875,200); context.quadraticCurveTo(1880,15,1705,15);
		context.lineTo(1705,400); context.closePath();
		context.fillStyle = "#7A7A7A"; context.fill();
		
		// Straight -> third bend
		context.beginPath(); context.moveTo(1705,400);
		context.arcTo(1705,200,1655,200,30); context.lineTo(1255,200);
		context.lineTo(1255,15); context.lineTo(1705,15); context.closePath();
		context.fillStyle = "#7A7A7A"; context.fill();
		
		// Fourth bend
		
		
		// Fifth bend
		
		
		// Curve -> long straight
		
		

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
		context.fillStyle = "black"; context.fill();
		
		context.beginPath(1065,643); context.lineTo(1080,643);
		context.lineTo(1080,677); context.lineTo(1065,677);
		context.lineTo(1065,643); context.closePath();
		context.fillStyle = "black"; context.fill();
		
		context.beginPath(1080,677); context.lineTo(1095,677);
		context.lineTo(1095,711); context.lineTo(1080,711);
		context.lineTo(1080,677); context.closePath();
		context.fillStyle = "black"; context.fill();
		
		context.beginPath(1065,711); context.lineTo(1080,711);
		context.lineTo(1080,745); context.lineTo(1065,745);
		context.lineTo(1065,711); context.closePath();
		context.fillStyle = "black"; context.fill();
		
// White lines on racetrack
		// Inside line
		// 1
		context.beginPath(); context.moveTo(275,575);
		context.lineTo(1525,575); context.strokeStyle = "white";
		context.stroke();
		// 2 - red/white curbs for first turn
		context.beginPath(); context.moveTo(1520,575);
		context.quadraticCurveTo(1710,575,1705,400); context.strokeStyle = "white";
		context.stroke();
		// 3
		context.beginPath(); context.moveTo(1705,400);
		context.arcTo(1705,200,1655,200,30);
		context.strokeStyle = "white"; context.stroke();	
		
		// 4
		context.beginPath(); context.moveTo(1675,200);
		context.arcTo(1255,200,1255,215,5); context.arcTo(1255,215,1305,215,5);
		context.lineTo(1655,215);
		context.strokeStyle = "white"; context.stroke();	
		
		
		// Outside line
		// 1
		context.beginPath(); context.moveTo(275,745);
		context.lineTo(1525,745); context.strokeStyle = "white";
		context.stroke();
		// 2
		context.beginPath(); context.moveTo(1520,745);
		context.quadraticCurveTo(1880,745,1875,400); context.strokeStyle = "white";
		context.stroke();
		// 3
		context.beginPath(); context.moveTo(1875,400); context.lineTo(1875,200);
		context.quadraticCurveTo(1880,15,1705,15);
		context.strokeStyle = "white"; context.stroke();
		
		// 4
		context.beginPath(); context.moveTo(1705,15);
		context.arcTo(1005,15,1005,115,40);
		context.strokeStyle = "white"; context.stroke();
		
		// 5
		context.beginPath(); context.moveTo(1005,55);
		context.lineTo(1005,155); context.arcTo(1005,380,1155,380,150);
		context.strokeStyle = "white"; context.stroke();
		
		// 6
		
// Red/white curbs for racetrack
		//First bend
		context.setLineDash([8,4]); context.strokeStyle = "red";
		context.beginPath(); context.moveTo(1520,575);
		context.quadraticCurveTo(1710,575,1705,400);
		context.stroke();
		context.closePath();
		
		//Second bend
		context.beginPath(); context.moveTo(1705,250);
		context.arcTo(1705,200,1655,200,30);
		context.stroke(); context.closePath();
		
		// Sharp third bend
		context.beginPath(); context.moveTo(1345,200);
		context.arcTo(1255,200,1255,215,5); context.arcTo(1255,215,1305,215,5);
		context.lineTo(1345,215); context.stroke();
		
		// Fourth turn, both sides
		
		
		//Starting grid position lines - 20th
		context.beginPath(); context.moveTo(283,669);
		context.lineTo(295,669); context.lineTo(295,699);
		context.lineTo(283,699); context.lineTo(283,697);
		context.lineTo(293,697); context.lineTo(293,671);
		context.lineTo(283,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//19th
		context.beginPath(); context.moveTo(323,619);
		context.lineTo(335,619); context.lineTo(335,649);
		context.lineTo(323,649); context.lineTo(323,647);
		context.lineTo(333,647); context.lineTo(333,621);
		context.lineTo(323,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		//18th
		context.beginPath(); context.moveTo(363,669);
		context.lineTo(375,669); context.lineTo(375,699);
		context.lineTo(363,699); context.lineTo(363,697);
		context.lineTo(373,697); context.lineTo(373,671);
		context.lineTo(363,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//17th
		context.beginPath(); context.moveTo(403,619);
		context.lineTo(415,619); context.lineTo(415,649);
		context.lineTo(403,649); context.lineTo(403,647);
		context.lineTo(413,647); context.lineTo(413,621);
		context.lineTo(403,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		//16th
		context.beginPath(); context.moveTo(443,669);
		context.lineTo(455,669); context.lineTo(455,699);
		context.lineTo(443,699); context.lineTo(443,697);
		context.lineTo(453,697); context.lineTo(453,671);
		context.lineTo(443,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//15th
		context.beginPath(); context.moveTo(483,619);
		context.lineTo(495,619); context.lineTo(495,649);
		context.lineTo(483,649); context.lineTo(483,647);
		context.lineTo(493,647); context.lineTo(493,621);
		context.lineTo(483,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		//14th
		context.beginPath(); context.moveTo(523,669);
		context.lineTo(535,669); context.lineTo(535,699);
		context.lineTo(523,699); context.lineTo(523,697);
		context.lineTo(533,697); context.lineTo(533,671);
		context.lineTo(523,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//13th
		context.beginPath(); context.moveTo(563,619);
		context.lineTo(575,619); context.lineTo(575,649);
		context.lineTo(563,649); context.lineTo(563,647);
		context.lineTo(573,647); context.lineTo(573,621);
		context.lineTo(563,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		//12th
		context.beginPath(); context.moveTo(603,669);
		context.lineTo(615,669); context.lineTo(615,699);
		context.lineTo(603,699); context.lineTo(603,697);
		context.lineTo(613,697); context.lineTo(613,671);
		context.lineTo(603,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//11th
		context.beginPath(); context.moveTo(643,619);
		context.lineTo(655,619); context.lineTo(655,649);
		context.lineTo(643,649); context.lineTo(643,647);
		context.lineTo(653,647); context.lineTo(653,621);
		context.lineTo(643,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		//10th
		context.beginPath(); context.moveTo(683,669);
		context.lineTo(695,669); context.lineTo(695,699);
		context.lineTo(683,699); context.lineTo(683,697);
		context.lineTo(693,697); context.lineTo(693,671);
		context.lineTo(683,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//9th
		context.beginPath(); context.moveTo(723,619);
		context.lineTo(735,619); context.lineTo(735,649);
		context.lineTo(723,649); context.lineTo(723,647);
		context.lineTo(733,647); context.lineTo(733,621);
		context.lineTo(723,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		//8th
		context.beginPath(); context.moveTo(763,669);
		context.lineTo(775,669); context.lineTo(775,699);
		context.lineTo(763,699); context.lineTo(763,697);
		context.lineTo(773,697); context.lineTo(773,671);
		context.lineTo(763,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//7th
		context.beginPath(); context.moveTo(803,619);
		context.lineTo(815,619); context.lineTo(815,649);
		context.lineTo(803,649); context.lineTo(803,647);
		context.lineTo(813,647); context.lineTo(813,621);
		context.lineTo(803,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		//6th
		context.beginPath(); context.moveTo(843,669);
		context.lineTo(855,669); context.lineTo(855,699);
		context.lineTo(843,699); context.lineTo(843,697);
		context.lineTo(853,697); context.lineTo(853,671);
		context.lineTo(843,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//5th
		context.beginPath(); context.moveTo(883,619);
		context.lineTo(895,619); context.lineTo(895,649);
		context.lineTo(883,649); context.lineTo(883,647);
		context.lineTo(893,647); context.lineTo(893,621);
		context.lineTo(883,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		//4th
		context.beginPath(); context.moveTo(923,669);
		context.lineTo(935,669); context.lineTo(935,699);
		context.lineTo(923,699); context.lineTo(923,697);
		context.lineTo(933,697); context.lineTo(933,671);
		context.lineTo(923,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//3rd
		context.beginPath(); context.moveTo(963,619);
		context.lineTo(975,619); context.lineTo(975,649);
		context.lineTo(963,649); context.lineTo(963,647);
		context.lineTo(973,647); context.lineTo(973,621);
		context.lineTo(963,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		//2nd
		context.beginPath(); context.moveTo(1003,669);
		context.lineTo(1015,669); context.lineTo(1015,699);
		context.lineTo(1003,699); context.lineTo(1003,697);
		context.lineTo(1013,697); context.lineTo(1013,671);
		context.lineTo(1003,671); context.closePath();
		context.fillStyle = "white"; context.fill();
		//1st
		context.beginPath();
		context.moveTo(1043,619);
		context.lineTo(1055,619); context.lineTo(1055,649);
		context.lineTo(1043,649); context.lineTo(1043,647);
		context.lineTo(1053,647); context.lineTo(1053,621);
		context.lineTo(1043,621); context.closePath();
		context.fillStyle = "white"; context.fill();
		
// ALL TURNS AND CHICANES ADDED HERE AFTER STARTING STRAIGHT //		
		
		// 
		
		
		
/******************* End of drawing road for racetrack ********************/

/******************* End of drawing road for racetrack ********************/









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