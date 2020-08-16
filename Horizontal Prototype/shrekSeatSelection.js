var numOfRows = 4;
var numOfCols = 8;
var ticketPrice = 10.00;

var total = 0.0;

//Times
var poloTimes = 	["8:00 AM", "11:00 AM", "5:00 PM", "9:00 PM"];
var grantTimes = 	["12:00 PM", "2:00 PM","4:00 PM", "6:00 PM"];
var kpTimes = 		["1:15 PM", "5:30 PM", "7:00 PM", "9:00 PM"];
var vitalTimes =	["8:30 AM", "9:00 AM", "12:00 PM", "2:45 PM"];

// Polo Park Times -------------
var shrekPoloTime1 = [["row1",[false, false,false,false,true,true,false,false]],["row2",[true,true,false,false,true,true,false,false]],["row3",[false, false, true, false, false, true, true, false]],["row4",[true, true, true, false, false, false, false, false]]];
var shrekPoloTime2 = [["row1",[true, true, true, true, false, true, true, false]],["row2",[false, true, true, true, false, false, true, true]],["row3",[false, false, false]],["row4",[false, false, true, false, true, false, false, false]]];
var shrekPoloTime3 = [["row1",[false, false, false, false, false, false, false, false]],["row2",[false, false, true, true, false, false, true, true]],["row3",[true, true, false, false, false, true, true, false]],["row4",[false, false, false, false, false, false, false, false]]]
var shrekPoloTime4 = [["row1",[true, true, false, false, false, false, false]],["row2",[false, false, true, true, true, true, false, false]],["row3",[false, false, false, false, false, true, true, true]],["row4",[false, true, true, true, false, false, false, true]]]

// Grant Park Times ------------
var shrekGrantTime1 = [["row1", [false, false, false, false, false, false, true, true]],["row2",[false, false, true, true, false, false, true, true]], ["row3",[true,true,true,true,true,true,true,true]], ["row4", [false, false, false, true, true, false, false, true]]]
var shrekGrantTime2 = [["row1", [false, false, true, false, true, true, false, true] ],["row2", [false, false, true, true, true, true, true, false] ],["row3", [false, true, false, true, true, true, false, false] ],["row 4", [true, true, false, false, true, true, true, false] ]];
var shrekGrantTime3 = [["row1", [true, false, false, false, false, true, false, true] ],["row2", [false, false, false, false, false, true, false, true] ],["row3", [true, true, true, true, true, false, false, false] ],["row 4", [true, false, false, true, true, false, false, true] ]];
var shrekGrantTime4 = [["row1", [false, false, false, false, true, true, false, true] ],["row2", [true, true, true, false, false, false, false, false] ],["row3", [false, false, false, false, false, false, false, true] ],["row 4", [false, false, true, false, true, false, true, true] ]];

// Kildonan Place Times ---------
var shrekKPTime1 = [["row1", [false, false, false, true, true, true, false, true] ],["row2", [false, false, false, true, true, true, false, true] ],["row3", [false, true, false, false, true, true, true, false] ],["row 4", [false, true, true, false, false, false, false, false] ]];
var shrekKPTime2 = [["row1", [true, false, false, true, true, false, false, true] ],["row2", [false, true, false, false, true, true, false, false] ],["row3", [false, true, false, true, false, true, false, false] ],["row 4", [true, false, true, false, false, false, true, false ] ]];
var shrekKPTime3 = [["row1", [false, false, false, false, true, false, false, false ] ],["row2", [false, true, false, true, false, true, false, false ] ],["row3", [false, false, true, true, true, false, false, false ] ],["row 4", [false, false, false, false, false, true, true, true ] ]];
var shrekKPTime4 = [["row1", [true, false, true, true, false, false, false, true] ],["row2", [false, true, false, false, false, false, false, false] ],["row3", [false, false, true, true, true, false, false, false  ] ],["row 4", [true, false, false, false, false, false, false, false  ] ]];

// St. Vital Center Times -------
var shrekVitalTime1 = [["row1", [false, false, true, false, false, true, false, false] ],["row2", [true, false, false, false, false, true, false, false] ],["row3", [false, false, false, false, false, false, true, true] ],["row 4", [false, false, false, true, false, false, false, false ] ]];
var shrekVitalTime2 = [["row1", [true, true, false, true, false, true, true, false] ],["row2", [false, true, false, false, false, true, true, true] ],["row3", [true, false, false, true, false, false, false, false] ],["row 4", [false, true, false, false, false, true, false, false] ]];
var shrekVitalTime3 = [["row1", [false, false, false, false, false, true, false, false] ],["row2", [false, false, true, true, true, false, false, false] ],["row3", [false, false, false, false, true, true, true, false] ],["row 4", [false, true, true, false, false, true, true, false] ]];
var shrekVitalTime4 = [["row1", [true, false, true, false, true, false, true, true] ],["row2", [false, true, false, false, true, true, false, true] ],["row3", [false, false, true, false, true, true, true, false] ],["row 4", [true, false, false, true, false, false, false, false] ]];


function selectSeats(){
	clearSeats();
	var theatreSelection = document.getElementById("movieTheatres");
	var theatre = theatreSelection.options[theatreSelection.selectedIndex].text;

	var timeSelection = document.getElementById("movieTime");
	var time = timeSelection.options[timeSelection.selectedIndex].text;

	if(theatre == "Polo Park"){
		if(time == poloTimes[0]){
			setSeats(shrekPoloTime1);
			setLocalSeats("1polo");
		}
		else if(time == poloTimes[1]){
			setSeats(shrekPoloTime2);
			setLocalSeats("2polo");
		}
		else if(time == poloTimes[2]){
			setSeats(shrekPoloTime3);
			setLocalSeats("3polo");
		}
		else if(time == poloTimes[3]){
			setSeats(shrekPoloTime4);
			setLocalSeats("4polo");
		}
	}
	else if(theatre == "Grant Park"){
		if(time == grantTimes[0]){
			setSeats(shrekGrantTime1);
			setLocalSeats("1grant");
		}
		else if(time == grantTimes[1]){
			setSeats(shrekGrantTime2);
			setLocalSeats("2grant");
		}
		else if(time == grantTimes[2]){
			setSeats(shrekGrantTime3);
			setLocalSeats("3grant");
		}
		else if(time == grantTimes[3]){
			setSeats(shrekGrantTime4);
			setLocalSeats("4grant");
		}
	}
	else if(theatre == "Kildonan Place"){
		if(time == kpTimes[0]){
			setSeats(shrekKPTime1);
			setLocalSeats("1kp");
		}
		else if(time == kpTimes[1]){
			setSeats(shrekKPTime2);
			setLocalSeats("2kp");
		}
		else if(time == kpTimes[2]){
			setSeats(shrekKPTime3);
			setLocalSeats("3kp");
		}
		else if(time == kpTimes[3]){
			setSeats(shrekKPTime4);
			setLocalSeats("4kp");
		}
	}
	else if(theatre == "St.Vital Center"){
		if(time == vitalTimes[0]){
			setSeats(shrekVitalTime1);
			setLocalSeats("1vital");
		}
		else if(time == vitalTimes[1]){
			setSeats(shrekVitalTime2);
			setLocalSeats("2vital");
		}
		else if(time == vitalTimes[2]){
			setSeats(shrekVitalTime3);
			setLocalSeats("3vital");
		}
		else if(time == vitalTimes[3]){
			setSeats(shrekVitalTime4);
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
			if(sessionStorage.getItem("Shrek " + timeTheatre + " " + i + j) != null){
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
			addSeat(shrekPoloTime1, 1, "polo");
		}
		else if(time == poloTimes[1]){
			addSeat(shrekPoloTime2, 2, "polo");
		}
		else if(time == poloTimes[2]){
			addSeat(shrekPoloTime3, 3, "polo");
		}
		else if(time == poloTimes[3]){
			addSeat(shrekPoloTime4, 4, "polo");
		}
	}
	else if(theatre == "Grant Park"){
		if(time == grantTimes[0]){
			addSeat(shrekGrantTime1, 1, "grant");
		}
		else if(time == grantTimes[1]){
			addSeat(shrekGrantTime2, 2, "grant");
		}
		else if(time == grantTimes[2]){
			addSeat(shrekGrantTime3, 3, "grant");
		}
		else if(time == grantTimes[3]){
			addSeat(shrekGrantTime4, 4, "grant");
		}
	}
	else if(theatre == "Kildonan Place"){
		if(time == kpTimes[0]){
			addSeat(shrekKPTime1, 1, "kp");
		}
		else if(time == kpTimes[1]){
			addSeat(shrekKPTime2, 2, "kp");
		}
		else if(time == kpTimes[2]){
			addSeat(shrekKPTime3, 3, "kp");
		}
		else if(time == kpTimes[3]){
			addSeat(shrekKPTime4, 4, "kp");
		}
	}
	else if(theatre == "St.Vital Center"){
		if(time == vitalTimes[0]){
			addSeat(shrekVitalTime1, 1, "vital");
		}
		else if(time == vitalTimes[1]){
			addSeat(shrekVitalTime2, 2, "vital");
		}
		else if(time == vitalTimes[2]){
			addSeat(shrekVitalTime3, 3, "vital");
		}
		else if(time == vitalTimes[3]){
			addSeat(shrekVitalTime4, 4, "vital");
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
				var key = "Shrek " + time + theatre + " " + i + j;
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
		name: "Shrek",
		seat: seat,
		time: time,
		theatre: theatre,
		image: "Images/shrekImg.jpg",
		price: ticketPrice
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
