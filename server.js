'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
// const INDEX = path.join(__dirname, 'index.html');

const server = express()
  //.use((req, res) => res.sendFile(INDEX) )
	.use((req, res) => res.json( buses) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });
// ======================================================================
var message = [];

// var id = -1;


var buses = [ "77", "45D", "210P", "15E", "210E", "6thfloor coordinates","RajHouse","collegefront"];

var locs_buspath = [
	[[12.9601640,77.5771710],[12.9604050,77.5679080],[12.9603320,77.5635760],[12.9603740,77.5591400],[12.9627700,77.5602270],
				[12.9646730,77.5616980],[12.9705690,77.5662110],[12.9753510,77.5649530],[12.9756390,77.5624400],[12.9757190,77.5603380],
				[12.9756200,77.5564470],[12.9754730,77.5523230],[12.9796160,77.5535870],[12.9844960,77.5542030],[12.9893220,77.5543040],
				[12.9904590,77.5524670],[12.9944000,77.5527460],[12.9982650,77.5509130],[13.0036200,77.5499650],[13.0044750,77.5489430],
				[13.0077470,77.5479640],[13.0082420,77.5450980],[13.0118900,77.5440210]],
	
				[[12.9124380, 77.5370250],[12.9135280, 77.5408780],[12.9195370, 77.5422220],[12.9212090, 77.5431530],[12.9239970, 77.5436310],
				 [12.9257990, 77.5442310],[12.9283120, 77.5457500],[12.9329470, 77.5454440],[12.9370780, 77.5487860],[12.9386390, 77.5531000],
				 [12.9381020, 77.5570960],[12.9434440, 77.5584910],[12.9435480, 77.5616760],[12.9440820, 77.5642300],[12.9465780, 77.5641920],
				 [12.9473530, 77.5663180],[12.9490090, 77.5676450],[12.9518040, 77.5674670],[12.9572090, 77.5680760],[12.9580420, 77.5738000],
				 [12.9614990, 77.5752540],[12.9638110, 77.5843410],[12.9684130, 77.5866790],[12.9726740, 77.5817610],[12.9775060, 77.5729120]],
	
				[[12.9150750,77.5520280],[12.9120660,77.5523500],[12.9114970,77.5556990],[12.9118340,77.5584700],[12.9182590,77.5596680],
				 [12.9227270,77.5602720],[12.9263660,77.5610140],[12.9292270,77.5644160],[12.9322670,77.5676920],[12.9379380,77.5689480],
				 [12.9396620,77.5723900],[12.9412930,77.5736480],[12.9457710,77.5706470],[12.9490090,77.5676450],[12.9518040,77.5674670],
				 [12.9572090,77.5680760],[12.9580420,77.5738000],[12.9614990,77.5752540],[12.9638110,77.5843410],[12.9684130,77.5866790],
				 [12.9726740,77.5817610],[12.9775140,77.5717800]],
				
				[[12.9775140,77.5717800],[12.977050,77.5859420],[12.9747260,77.5869100],[12.9696250,77.5871940],[12.9672410,77.5882810],
				 [12.9635760,77.5842610],[12.9636680,77.5773680],[12.9566100,77.5738330],[12.9536110,77.5738700],[12.9493340,77.5738150],
				 [12.9412720,77.5738210],[12.9358930,77.5738590],[12.9290630,77.5736960],[12.9231950,77.5736120],[12.9215590,77.5709810],
				 [12.9197310,77.5693550],[12.9167880,77.5690660],[12.9136800,77.5672650],[12.9094690,77.5652320],
				 [12.9053260,77.5628040],[12.9032410,77.5616730]],
	
				[[12.9775140,77.5717800],[12.977050,77.5859420],[12.9747260,77.5869100],[12.9672410,77.5882810],[12.9635760,77.5842610],
				 [12.9636680,77.5773680],[12.9566100,77.5738330],[12.9536110,77.5738700],[12.9493340,77.5738150],[12.9412720,77.5738210],
				 [12.9362400,77.5801900],[12.9324710,77.5802850],[12.9308740,77.5780760],[12.9308430,77.5764020],[12.9258890,77.5772330],
				 [12.9196980,77.5742280],[12.9173980,77.5729630],[12.9136800,77.5672650],[12.9115400,77.5581920],[12.9115290,77.5559830],
				 [12.9115040,77.5520140],[12.9051090,77.5433920],[12.9010030,77.5440530],[12.8987110,77.5440260],[12.8973450,77.5467550],
				 [12.8963710,77.5484260],[12.8962310,77.5526260],[12.8949320,77.5528350]],
				 		 
				 [[12.955340,77.574287],[12.955227,77.574206],[12.95515,77.574225],[12.955071,77.574225],[12.954900,77.574287]],
			
				[[13.003777,77.556717],[13.003806,77.556555],[13.003844,77.55639],[13.003732,77.556349],
				[13.003354,77.556312],[13.003202,77.556259],[13.002974,77.556203],[13.002958,77.556203],[13.002765,77.55618],
				[13.002598,77.556118],[13.002509,77.556097]],
				
				[[12.954693,77.573850],[12.954629,77.573976],[12.954556,77.574131],[12.954587,77.574285],[12.954574,77.574445],[12.954568,77.574523],[12.954571,77.574737]]
				
				];


var names_buspath = [
						['K R Market','Rayan Circle','Water Tank Chamarajpet','Sirsi Circle','C R Police Ground','Binnypet','Binny Mill',
				   'Hunasemara Magadi Road','1st Cross Magadi Road','Magadi Road 5th Cross','Magadi Road 10th Cross',
				   'Prasanna Theatre','Rajajinagar 6th Block','Bashyam Circle (Rajajinagar)','Old Police station Rajajinagar',
				   'Rajajinagar ESI Hospital','Basaveshwara College','Navarang Talkies','Rajajinagar 1st Block(Diacon Hospital)',
				   'Rajajinagar 1st Block','Mahalakshmi Layout Entrance','Srinivasa Temple','Mahalakshmi Layout'],
	
				['AGS Layout Arehalli','AGS Layout Cross','Ittamadu','SLV Bakery','Ittamadu','Srinivasa Kalyana Mantapa','Janatha Bazaar Banashankari',
				 'Hoskerehalli Cross','Seetha Circle','Bank Colony','Srinivasa Nagar','Maruthi Circle','Subramanya Swamy Temple','Ganesha Bhavan',
				 'Hanumanthangara Ward Office','Kohinoor Ground','Ramakrishna Asharama','Bangalore High School','Chamarajapete',
				 'Makkalakoota','K R Market','Town Hall','Corporation','Mysore Bank','Kempegowda Bus Station'],
				
				['Chikkallasandra Bus Stand','Chikkallasandra Aralimara','Gowdana Palya','Prarthana School','Padmanabha Nagara','Devegowda Petrol Bunk',
				 'KIMS','Indira Nursing Home','Thyagaraja Nagara','N R Colony','Netakallappa Circle','Basavanagudi Police Station','Gandhi Bazaar',
				 'Ramakrishna Asharama','Bangalore High School','Chamarajapete','Makkalakoota','K R Market','Town Hall','Corporation',
				 'Mysore Bank','Kempegowda Bus Station'],
				
				['Kempegowda Bus Station','Maharanis College','K R circle','ST Marthas Hospital','Corporation','Town Hall','K R Market',
				 'Makkalakoota','Mahila Seva Samaja','National College','Basavanagudi Police Station','Tata Silk Farm ',
				 'M M Industries','Shasthri Bekary','Monotype corporation','Kaveri Nagara','Yarab Nagara ','Kadirenahalli Cross',
				 'Dayananda Sagar College','Kumaraswamy Layout Police Station ','Kumaraswamy Layout'],
	
				['Kempegowda Bus Station','Maharanis College','K R circle','Corporation','Town Hall','K R Market','Makkalakoota','Mahila Seva Samaja',
				 'National College','Basavanagudi Police Station','South End Circle','Nanda Talkies','Jayanagar 6th Block','Yediyur','Deepak Nursing Home',
				 'Hunase Mara','Banashankari','Kadirenahalli Cross','Prarthana school','Gowdana Palya','Chikkallasandra Aralimara','Uttarahalli',
				 'Police Station Subramanyapura','post office Subramanyapura','KEB Subramanyapura','Yadalamma Nagara','Vasanthapura Temple','Vasanthapura'],
				
				['611Computer Lab','6063rd class','6051st class','604computer ise lab','MCA class1'],
				
				['Vaishnavi Stores','Benaka Jewel','8th main road sun rise',
				'water tank','2067','2066','1975','1976','2060','Guru kripa','Ravi'],
				
				['Bit entrance','Bit ATM','Physiotherapy college','Tripthi Hotel','Tripthi Hotel end','Manjunatha stationary','Vokaliga dental college']
			]; 

wss.on('connection', function (ws) {
	var usertype = 0;
	var busorstop = "";
	console.log('Client connected');
	var iid = -1;
	var dcnt = -1;

	var watchID;

	ws.on('message', function incoming(data) {
		data = JSON.parse(data);
		if (usertype == 0) {
			usertype = data[0];
			busorstop = data[1];

			console.log(data);
			// if( usertype == 1) ws.send( JSON.stringify(buses));
			if (usertype == 1) {
				message.forEach(function (i, j) {
					if (i.uuid == data[2]) {
						iid = j;
						message[iid].removed = 0;
						message[iid].bustype = data[1];
					}
				});

				if (iid == -1) {
					iid = message.length;
					var obj = {};
					obj.uuid = data[2];
					// obj.x = 0.0;
					// obj.y = 0.0;
					obj.loc = [0.0, 0.0];
					obj.preloc = [
						[0.0, 0.0],
						[0.0, 0.0],
						[0.0, 0.0]
					];
					obj.speed = 0;
					obj.removed = 0;
					obj.bustype = data[1];
					message.push(obj);

				}
			}

		} else if (usertype == 1) {


			message[iid].loc[0] = data[0];
			message[iid].loc[1] = data[1];
			message[iid].speed = data[2];

			//dirtest++;
			//dirtest = dirtest % 3;

			//if( dirtest == 2){

			//message[ iid].preloc[0] = message[ iid].loc[0];
			//message[ iid].preloc[1] = message[ iid].loc[1];
			//}
			dcnt = (dcnt + 1) % 3;
			message[iid].preloc[dcnt][0] = data[0];
			message[iid].preloc[dcnt][1] = data[1];
			console.log( '{');
			message.forEach( function(i,j){ console.log( '{ iid: ' , j, i, '\n }');});
			console.log( '}');
		} else if (usertype == 2) {

			watchID = setInterval(function () {

				// console.log(data);

				// console.log('getnear: ', getnear(locs_buspath[4], [12.8949320, 77.5528350]));

				// ws.send( JSON.stringify( message));
				// console.log('busdistance: ', busdistance(locs_buspath[4], 5, [12.8949320, 77.5528350]));
				// console.log('busdistance: ', busdistance(locs_buspath[4], 20, [12.8949320, 77.5528350]));
				var qwe = findbusstop(busorstop, data);
				// console.log('findbusstop: ', qwe);
				var rty = findbus(dcnt, qwe[3], locs_buspath[qwe[1]], buses[qwe[1]], qwe[0]);
				// console.log( 'findbus: ', findbus( locs_buspath[0], '77', 2));'
				// console.log('findbus: ', rty);
				// ws.send( JSON.stringify( [ buses[ qwe[1]], names_buspath[ qwe[1]][ qwe[0]], qwe[2], ['Bus not found!']]));
				if (rty[1] != 98) {
					ws.send(JSON.stringify([
						buses[qwe[1]],
						names_buspath[qwe[1]][qwe[0]],
						qwe[2],
						message[rty[0]].uuid,
						rty[1],
						rty[1] / message[rty[0]].speed,
						message[rty[0]].loc[0],
						message[rty[0]].loc[1]
					]));
					console.log(
						JSON.stringify([
							buses[qwe[1]], 
							names_buspath[qwe[1]][qwe[0]], 
							qwe[2], 
							message[rty[0]].uuid, 
							rty[1],
							rty[1] / message[rty[0]].speed, 
							message[rty[0]].loc[0], 
							message[rty[0]].loc[1]
						])
					);
				} else {
					ws.send(JSON.stringify([buses[qwe[1]], names_buspath[qwe[1]][qwe[0]], qwe[2],
						['Bus not found!']
					]));
					console.log(
						JSON.stringify([buses[qwe[1]], names_buspath[qwe[1]][qwe[0]], qwe[2],
							['Bus not found!']
						])
					);
				}


			}, 3000);  
 

			//var mybusstop = findbusstop( busorstop, data);
			// console.log( mybusstop);
			//var mybusdis = findbus( locs_buspath[ mybusstop[1]], busorstop, mybusstop[0]);
			// var client = [ buses[ mybusstop[1]], names_buspath[ mybusstop[1]][ mybusstop[0]], message[ mybusdis[0]].uuid, mybusdis[1]];
			//ws.send( JSON.stringify( client));
			// console.log( mybusstop, mybusdis);
		}
	});

	ws.on('close', function () {
		if (usertype == 1) message[iid].removed = 1;
		console.log('Client disconnected');
		clearInterval(watchID);
	});

});
			
			


	function mag(a, b) {
	   var R = 6371;
	   var pi = Math.PI;
	   var rad = pi/180;
	   var lat1 = a[0]*rad;
	   var lat2 = b[0]*rad;
	   var lon1 = a[1]*rad;
	   var lon2 = b[1]*rad;
	   // earth's mean radius in km
	   var dLat = lat2-lat1;
	   var dLon = lon2-lon1;
	   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	   Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon/2) * Math.sin(dLon/2);
	   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	   var d = R * c;

	   return d;
	}

function getnear( Area, loc){
	var least = 98;
	 var cur;
	 var curj;
	Area.forEach( function( i, j){
		if( (cur = mag( loc, i)) < least){
			least = cur;
			curj = j;
			// console.log( least, curj);
		}
	});
	return [ curj, least];
}

function busdistance( Area, curj, loc){
	var near = getnear( Area, loc);
	var dis = 0;
	if( curj > near[0]){
		for( var j=near[0]; j<curj; j++){
			dis += mag( Area[j], Area[j+1]);
			console.log( dis);
		}
		if( mag( Area[ near[0]], Area[ near[0] + 1]) < mag( loc, Area[ near[0] + 1])){
			dis += near[1];
		}else dis -= near[1];
	}
	else{
		for( var j=near[0]; j>curj; j--){
			dis += mag( Area[j], Area[j-1]);
		}
		if( mag( Area[ near[0]], Area[ near[0] - 1]) < mag( loc, Area[ near[0] - 1])){
			dis += near[1];
		}else dis -= near[1];
	}
	if( dis<0){ return -dis} else{ return dis};
}

function findbus( dcnt, desj, Area, bustype, curj){
	 //dcnt=3,qwe=index of inner bus array value index,location array buses index main for loop,buses ,index of least value
	var least = 98;
	var curdis;
	var curdes;
	var busj = 0;
	message.forEach( function( i, j){
		curdis = busdistance( Area, curj, i.loc);
		curdes = busdistance( Area, desj, i.loc);
		if( i.removed == 0 && 
		   i.bustype == bustype && 
		   ( busdistance( Area, curj, i.preloc[(dcnt+1)%3]) > curdis) && 
		   ( curdes > curdis) ){
			if( curdis < least){
				least = curdis;
				busj = j;
			}
		}
	});
	return [ busj, least];
}

function findbusstop( busorstop, loc){
	var near;
	var least = [ 98, 98];
	var curj = -1;
	var desj = -1;
	names_buspath.forEach( function( i, j){
		i.forEach( function( q, w){
			if( q == busorstop){
				near = getnear( locs_buspath[j], loc);
				//index , least value from location
				if( near[1] < least[1]){
					least[0] = near[0];
					least[1] = near[1];  
					curj = j;
					desj = w;
					//console.log( 'aaa:', near);
				}
			}
		});
	});
	return [ least[0], curj, least[1], desj];
	//return index,buses index,value of least distance,index of inner bus array
}