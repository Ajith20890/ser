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

var buses = [ "77", "45D", "210P", "15E", "210E", "demo123"];

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
				 
/* 				 [[13.001949,77.556366],[13.001960,77.556356],[13.001949,77.556326],[13.001941,77.556299],[13.001934,77.556277],
				 [13.001910,77.556267],[13.001895,77.556264],[13.001870,77.556249],[13.001868,77.556227],[13.001829,77.556237],
				 [13.001803,77.556247],[13.001785,77.556246],[13.001759,77.556245],[13.001750,77.556251],[13.001722,77.556245],
				 [13.001690,77.556246],[13.001668,77.556241],[13.001641,77.556238],[13.001626,77.556238],[13.001598,77.556234]] */
				 
/* [[12.955025,77.574106],[12.955034,77.574107],[12.955042,77.574099],[12.955045,77.574104],[12.955050,77.574103],[12.955056,77.574118],[12.955056,77.574141],[12.955086,77.574190],
[12.955034,77.574115],[12.955050,77.574132],[12.955072,77.574131],[12.955113,77.574145],[12.955139,77.574119],[12.955146,77.574076],[12.955118,77.574018],[12.955154,77.574059],
[12.955168,77.574047],[12.955176,77.574034],[12.955190,77.574172],[12.955218,77.574162],[12.955239,77.574090],[12.955261,77.573987],[12.955274,77.573996],[12.955308,77.574057],
[12.955296,77.574019],[12.955300,77.574034],[12.955342,77.574057],[12.955375,77.573938],[12.955416,77.574048],[12.955463,77.574133],[12.955487,77.574127],[12.955587,77.574108]]
	 */
	 			[[13.001248,77.556232],[13.001346,77.556219],[13.001624,77.556299],[13.001817,77.556299],
				[13.001929,77.556320],[13.002057,77.556343],[13.002149,77.556334],[13.002229,77.556369],[13.002327,77.556391],[13.002400,77.556405]] 
				
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
				 
/* 				 ['a1','b2','c3','d4','e5','f6','g7','h8','i9','j10','k11','l12','m13','n14','o15','p16','q17','r18','s19','t20','u21','v22','w23',
				 'x24','y25','z26','27','28','29','30','31','32'] */
				
				['Mangaldevi jewellary','manjunath chats','1st house','green figo house','selvan house tamil','Nokia guy','1st swift','coconut guy house','dead end road','nandini milk booth']
			]; 


wss.on('connection',  function (ws){
	var usertype = 0;
	var busorstop = "";
  	console.log('Client connected');
  	var iid = -1;
	var dcnt = -1;
	
  ws.on('message', function incoming(data) {
	data = JSON.parse( data);
	if( usertype == 0){ 
		usertype = data[0]; 
		busorstop = data[1];
		
		console.log( data);
		// if( usertype == 1) ws.send( JSON.stringify(buses));
		if( usertype == 1){
			message.forEach( function( i, j){
				if( i.uuid == data[2]){
					iid = j;
					message[iid].removed = 0;
					message[iid].bustype = data[1];
				}
			});
			
			if( iid==-1){
				iid = message.length;
				var obj = {};
					obj.uuid = data[2];
				  // obj.x = 0.0;
				  // obj.y = 0.0;
					obj.loc = [ 0.0, 0.0];
					obj.preloc = [[ 0.0, 0.0],[ 0.0, 0.0],[ 0.0, 0.0]];
					obj.speed = 0;
				  obj.removed = 0;
					obj.bustype = data[1];
				  message.push( obj);
				
			}	
		}
		
	}
	 else if( usertype == 1){
			
			
		 	message[ iid].loc[0] = data[0];
		 	message[ iid].loc[1] = data[1];
		 	message[ iid].speed = data[2];
		 	
		 	//dirtest++;
		 	//dirtest = dirtest % 3;
		 	
		 	//if( dirtest == 2){
				
				//message[ iid].preloc[0] = message[ iid].loc[0];
				//message[ iid].preloc[1] = message[ iid].loc[1];
			//}
		 	dcnt = (dcnt+1)%3;
		 	message[ iid].preloc[ dcnt][0] = data[0];
		 	message[ iid].preloc[ dcnt][1] = data[1];
			console.log( '{');
			message.forEach( function(i,j){ console.log( '{ iid: ' , j, i, '\n }');});
			console.log( '}');
	 }
	 else if( usertype == 2){
		 console.log( data);
		 
		 console.log( 'getnear: ', getnear( locs_buspath[0], data));
		 
		 // ws.send( JSON.stringify( message));
			console.log( 'busdistance: ', busdistance( locs_buspath[0], 21, data));
		 var qwe = findbusstop( busorstop, data);
		 ////return index,buses index,value of least distance,index of inner bus array
		 console.log( 'findbusstop: ', qwe);
		 var rty = findbus( dcnt, qwe[3], locs_buspath[ qwe[1]], buses[ qwe[1]], qwe[0]);
		 //dcnt=3,co -ordinates,,,,,qwe=index of inner bus array,location array buses index main for loop,buses found index in array ,index of least value
		 // console.log( 'findbus: ', findbus( locs_buspath[0], '77', 2));'
		 console.log( 'findbus: ', rty);
			// ws.send( JSON.stringify( [ buses[ qwe[1]], names_buspath[ qwe[1]][ qwe[0]], qwe[2], ['Bus not found!']]));
		 	if( rty[1] != 98){
				ws.send(JSON.stringify( [ buses[ qwe[1]], names_buspath[ qwe[1]][ qwe[0]], qwe[2], message[ rty[0]].uuid, rty[1], 
									 rty[1]/message[ rty[0]].speed,
									 ]));
			}else{ ws.send( JSON.stringify( [ buses[ qwe[1]], names_buspath[ qwe[1]][ qwe[0]], qwe[2], ['Bus Not available!']
									 ]));}
		 
		 //var mybusstop = findbusstop( busorstop, data);
		 // console.log( mybusstop);
		 //var mybusdis = findbus( locs_buspath[ mybusstop[1]], busorstop, mybusstop[0]);
		// var client = [ buses[ mybusstop[1]], names_buspath[ mybusstop[1]][ mybusstop[0]], message[ mybusdis[0]].uuid, mybusdis[1]];
		  //ws.send( JSON.stringify( client));
		// console.log( mybusstop, mybusdis);
	 }
  });
  
  ws.on('close', function(){
	  if( usertype == 1) message[iid].removed = 1;
	  console.log('Client disconnected');
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