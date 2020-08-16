
var numOfRows = 4;
var numOfCols = 8;
var total = 0.00;
var ticketPrice = 10.00;


//Times
var poloTimes = 	["9:30 AM", "12:45 PM", "5:15 PM", "7:00 PM"];
var grantTimes = 	["11:00 PM", "1:03 PM","4:35 PM", "8:20 PM"];
var kpTimes = 		["1:15 PM", "6:35 PM", "9:20 PM", "11:30 PM"];
var vitalTimes =	["8:45 AM", "12:30 PM", "3:55 PM", "7:00 PM"];


// Polo Park Times -------------
var grinchPoloTime1 = [["row1",[false, false,false,false,true,true,false,false]],["row2",[true,true,false,false,true,true,false,false]],["row3",[false, false, true, false, false, true, true, false]],["row4",[true, true, true, false, false, false, false, false]]];
var grinchPoloTime2 = [["row1",[true, true, true, true, false, true, true, false]],["row2",[false, true, true, true, false, false, true, true]],["row3",[false, false, false]],["row4",[false, false, true, false, true, false, false, false]]];
var grinchPoloTime3 = [["row1",[false, false, false, false, false, false, false, false]],["row2",[false, false, true, true, false, false, true, true]],["row3",[true, true, false, false, false, true, true, false]],["row4",[false, false, false, false, false, false, false, false]]]
var grinchPoloTime4 = [["row1",[true, true, false, false, false, false, false]],["row2",[false, false, true, true, true, true, false, false]],["row3",[false, false, false, false, false, true, true, true]],["row4",[false, true, true, true, false, false, false, true]]]

// Grant Park Times ------------
var grinchGrantTime1 = [["row1", [false, false, false, false, false, false, true, true]],["row2",[false, false, true, true, false, false, true, true]], ["row3",[true,true,true,true,true,true,true,true]], ["row4", [false, false, false, true, true, false, false, true]]]
var grinchGrantTime2 = [["row1", [false, false, true, false, true, true, false, true] ],["row2", [false, false, true, true, true, true, true, false] ],["row3", [false, true, false, true, true, true, false, false] ],["row 4", [true, true, false, false, true, true, true, false] ]];
var grinchGrantTime3 = [["row1", [true, false, false, false, false, true, false, true] ],["row2", [false, false, false, false, false, true, false, true] ],["row3", [true, true, true, true, true, false, false, false] ],["row 4", [true, false, false, true, true, false, false, true] ]];
var grinchGrantTime4 = [["row1", [false, false, false, false, true, true, false, true] ],["row2", [true, true, true, false, false, false, false, false] ],["row3", [false, false, false, false, false, false, false, true] ],["row 4", [false, false, true, false, true, false, true, true] ]];

// Kildonan Place Times ---------
var grinchKPTime1 = [["row1", [false, false, false, true, true, true, false, true] ],["row2", [false, false, false, true, true, true, false, true] ],["row3", [false, true, false, false, true, true, true, false] ],["row 4", [false, true, true, false, false, false, false, false] ]];
var grinchKPTime2 = [["row1", [true, false, false, true, true, false, false, true] ],["row2", [false, true, false, false, true, true, false, false] ],["row3", [false, true, false, true, false, true, false, false] ],["row 4", [true, false, true, false, false, false, true, false ] ]];
var grinchKPTime3 = [["row1", [false, false, false, false, true, false, false, false ] ],["row2", [false, true, false, true, false, true, false, false ] ],["row3", [false, false, true, true, true, false, false, false ] ],["row 4", [false, false, false, false, false, true, true, true ] ]];
var grinchKPTime4 = [["row1", [true, false, true, true, false, false, false, true] ],["row2", [false, true, false, false, false, false, false, false] ],["row3", [false, false, true, true, true, false, false, false  ] ],["row 4", [true, false, false, false, false, false, false, false  ] ]];

// St. Vital Center Times -------
var grinchVitalTime1 = [["row1", [false, false, true, false, false, true, false, false] ],["row2", [true, false, false, false, false, true, false, false] ],["row3", [false, false, false, false, false, false, true, true] ],["row 4", [false, false, false, true, false, false, false, false ] ]];
var grinchVitalTime2 = [["row1", [true, true, false, true, false, true, true, false] ],["row2", [false, true, false, false, false, true, true, true] ],["row3", [true, false, false, true, false, false, false, false] ],["row 4", [false, true, false, false, false, true, false, false] ]];
var grinchVitalTime3 = [["row1", [false, false, false, false, false, true, false, false] ],["row2", [false, false, true, true, true, false, false, false] ],["row3", [false, false, false, false, true, true, true, false] ],["row 4", [false, true, true, false, false, true, true, false] ]];
var grinchVitalTime4 = [["row1", [true, false, true, false, true, false, true, true] ],["row2", [false, true, false, false, true, true, false, true] ],["row3", [false, false, true, false, true, true, true, false] ],["row 4", [true, false, false, true, false, false, false, false] ]];


function selectSeats(){
	clearSeats();
	var theatreSelection = document.getElementById("movieTheatres");
	var theatre = theatreSelection.options[theatreSelection.selectedIndex].text;

	var timeSelection = document.getElementById("movieTime");
	var time = timeSelection.options[timeSelection.selectedIndex].text;

	if(theatre == "Polo Park"){
		if(time == poloTimes[0]){
			setSeats(grinchPoloTime1);
			setLocalSeats("1polo");
		}
		else if(time == poloTimes[1]){
			setSeats(grinchPoloTime2);
			setLocalSeats("2polo");
		}
		else if(time == poloTimes[2]){
			setSeats(grinchPoloTime3);
			setLocalSeats("3polo");
		}
		else if(time == poloTimes[3]){
			setSeats(grinchPoloTime4);
			setLocalSeats("4polo");
		}
	}
	else if(theatre == "Grant Park"){
		if(time == grantTimes[0]){
			setSeats(grinchGrantTime1);
			setLocalSeats("1grant");
		}
		else if(time == grantTimes[1]){
			setSeats(grinchGrantTime2);
			setLocalSeats("2grant");
		}
		else if(time == grantTimes[2]){
			setSeats(grinchGrantTime3);
			setLocalSeats("3grant");
		}
		else if(time == grantTimes[3]){
			setSeats(grinchGrantTime4);
			setLocalSeats("4grant");
		}
	}
	else if(theatre == "Kildonan Place"){
		if(time == kpTimes[0]){
			setSeats(grinchKPTime1);
			setLocalSeats("1kp");
		}
		else if(time == kpTimes[1]){
			setSeats(grinchKPTime2);
			setLocalSeats("2kp");
		}
		else if(time == kpTimes[2]){
			setSeats(grinchKPTime3);
			setLocalSeats("3kp");
		}
		else if(time == kpTimes[3]){
			setSeats(grinchKPTime4);
			setLocalSeats("4kp");
		}
	}
	else if(theatre == "St.Vital Center"){
		if(time == vitalTimes[0]){
			setSeats(grinchVitalTime1);
			setLocalSeats("1vital");
		}
		else if(time == vitalTimes[1]){
			setSeats(grinchVitalTime2);
			setLocalSeats("2vital");
		}
		else if(time == vitalTimes[2]){
			setSeats(grinchVitalTime3);
			setLocalSeats("3vital");
		}
		else if(time == vitalTimes[3]){
			setSeats(grinchVitalTime4);
			setLocalSeats("4vital");
		}
	}
}

function setSeats(seats){
	for(var i = 0; i < numOfRows; i++){
		for(var j = 0; j < numOfCols; j++){
			if(seats[i][1][j] == true){
				var id = i + "" + j;
				document.getElementById(id).disabled = true;
			}
		}
	}
}

function setLocalSeats(timeTheatre){
	for(var i = 0; i < numOfRows; i++){
		for(var j = 0; j < numOfCols; j++){
			if(sessionStorage.getItem("The Grinch " + timeTheatre + " " + i + j) != null){
				var id = i + "" + j;
				document.getElementById(id).disabled = true;
			}
		}
	}
}

function clearSeats(){
	for(var i = 0; i < numOfRows; i++){
		for(var j = 0; j < numOfCols; j++){
			var id = i + "" + j;
			document.getElementById(id).disabled = false;
			document.getElementById(id).checked = false;
		}
	}
}

function add(){
	var theatreSelection = document.getElementById("movieTheatres");
	var theatre = theatreSelection.options[theatreSelection.selectedIndex].text;

	var timeSelection = document.getElementById("movieTime");
	var time = timeSelection.options[timeSelection.selectedIndex].text;

	if(theatre == "Polo Park"){
		if(time == poloTimes[0]){
			addSeat(grinchPoloTime1, 1, "polo");
		}
		else if(time == poloTimes[1]){
			addSeat(grinchPoloTime2, 2, "polo");
		}
		else if(time == poloTimes[2]){
			addSeat(grinchPoloTime3, 3, "polo");
		}
		else if(time == poloTimes[3]){
			addSeat(grinchPoloTime4, 4, "polo");
		}
	}
	else if(theatre == "Grant Park"){
		if(time == grantTimes[0]){
			addSeat(grinchGrantTime1, 1, "grant");
		}
		else if(time == grantTimes[1]){
			addSeat(grinchGrantTime2, 2, "grant");
		}
		else if(time == grantTimes[2]){
			addSeat(grinchGrantTime3, 3, "grant");
		}
		else if(time == grantTimes[3]){
			addSeat(grinchGrantTime4, 4, "grant");
		}
	}
	else if(theatre == "Kildonan Place"){
		if(time == kpTimes[0]){
			addSeat(grinchKPTime1, 1, "1kp");
		}
		else if(time == kpTimes[1]){
			addSeat(grinchKPTime2, 2, "2kp");
		}
		else if(time == kpTimes[2]){
			addSeat(grinchKPTime3, 3, "3kp");
		}
		else if(time == kpTimes[3]){
			addSeat(grinchKPTime4, 4, "kp");
		}
	}
	else if(theatre == "St.Vital Center"){
		if(time == vitalTimes[0]){
			addSeat(grinchVitalTime1, 1, "vital");
		}
		else if(time == vitalTimes[1]){
			addSeat(grinchVitalTime2, 2, "vital");
		}
		else if(time == vitalTimes[2]){
			addSeat(grinchVitalTime3, 3, "vital");
		}
		else if(time == vitalTimes[3]){
			addSeat(grinchVitalTime4, 4, "vital");
		}
	}
}


function addSeat(seats, time, theatre){
	var numSeats = 0;

	for(var i = 0; i < numOfRows; i++){
		for(var j = 0; j < numOfCols; j++){
			var id = i + "" + j;
			if(document.getElementById(id).checked == true){
				document.getElementById(id).checked = false;
				seats[i][1][j] = true;
				var key = "The Grinch " + time + theatre + " " + i + j;
				sessionStorage.setItem(key, "taken");
				addToCart(i, j, time, theatre);
				numSeats++;
			}
		}
	}
	if(numSeats > 0){
		alert("You've booked " + numSeats + " ticket(s) to 'The Grinch'");
		window.location.href = "./index.html";
	}
	else{
		alert("No seats are selected");
	}
}


function addToCart(row, col, time, theatre){
	var shoppingCart = sessionStorage.getItem('shoppingCart');
	var seatLetter = String.fromCharCode(col+64);
	var seat = row + "" + col;


	if(shoppingCart == null){
		shoppingCart = [];
	}
	else{
		shoppingCart = JSON.parse(shoppingCart);
	}

	var movieTicket = {
		id: shoppingCart.length,
		item: "ticket",
		name: "The Grinch",
		seat: seat,
		time: time,
		theatre: theatre,
		image: "Images/theGrinchimg.jpg",
		price: 10.00
	};

	shoppingCart.push(movieTicket);
	sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}


function loadMovieTimes(){

	var theatreSelection = document.getElementById("movieTheatres");
	var theatre = theatreSelection.options[theatreSelection.selectedIndex].text;

	var times = document.getElementById("movieTime");

	var size = times.length;
	var i = 0;

	while(i < size){
		times.remove(0);
		i++;
	}

	if(theatre == "Polo Park"){
		loadTimeSelection(poloTimes, times);
	}
	else if(theatre == "Grant Park"){
		loadTimeSelection(grantTimes, times);
	}
	else if(theatre == "Kildonan Place"){
		loadTimeSelection(kpTimes, times);
	}
	else if(theatre == "St.Vital Center"){
		loadTimeSelection(vitalTimes, times);
	}
}

function abbrevToTheatre(abbrev){
	var theatre = "";
	if(abbrev == "polo"){
		theatre = "Polo Park";
	}
	else if(abbrev = "grant"){
		theatre = "Grant Park";
	}
	else if(abbrev = "kp"){
		theatre = "Kildonan Place";
	}
	else if(abbrev = "vital"){
		theatre = "St.Vital Center"
	}
	return theatre;
}

function loadTimeSelection(theatreTimes, selector){
	var i = 0;

	while(i < theatreTimes.length){
		var option = document.createElement("option");
		option.text = theatreTimes[i];
		selector.add(option);
		i++;
	}
}

function updateSeatTotal(id){
	var txt = "Total:";

	if(document.getElementById(id).checked == true){
		total = total + ticketPrice;
	}
	else{
		total = total - ticketPrice;
	}

	txt = txt + " $" + total;

	document.getElementById("tempTotal").innerHTML = txt;
}

$(document).ready(function(){

	$('#myModal').modal({
	    backdrop: 'static',
	    keyboard: false,
	    show: false
	})

});


loadMovieTimes();

document.getElementById("viewSeats").onclick = selectSeats;
document.getElementById("exit").onclick = clearSeats;
