var flights = document.getElementById("flights");
var hotels = document.getElementById("hotels");
var cars = document.getElementById("cars");
var cruises = document.getElementById("cruises");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var plane = document.getElementById("plane");
var home = document.getElementById("home");
var car = document.getElementById("car");
var ship = document.getElementById("ship");

hotels.style.display = "none";
cars.style.display = "none";
cruises.style.display = "none";

function f(){
	flights.style.display = "block";
	hotels.style.display = "none";
	cars.style.display = "none";
	cruises.style.display = "none";
	a.style.background = "#FFF";
	a.style.color = "#05948d";
	plane.style.color = "#05948d";
	b.style.background = "#05948d";
	b.style.color = "#FFF";
	home.style.color = "#FFF";
	c.style.background = "#1cbbb4";
	c.style.color = "#FFF";
	car.style.color = "#FFF";
	d.style.background = "#19a59f";
	d.style.color = "#FFF";
	ship.style.color = "#FFF";
}

function h(){
	flights.style.display = "none";
	hotels.style.display = "block";
	cars.style.display = "none";
	cruises.style.display = "none";
	a.style.background = "#43b3ae";
	a.style.color = "#FFF";
	plane.style.color = "#FFF";
	b.style.background = "#FFF";
	b.style.color = "#05948d";
	home.style.color = "#05948d";
	c.style.background = "#1cbbb4";
	c.style.color = "#FFF";
	car.style.color = "#FFF";
	d.style.background = "#19a59f";
	d.style.color = "#FFF";
	ship.style.color = "#FFF";
}

function ca(){
	flights.style.display = "none";
	hotels.style.display = "none";
	cars.style.display = "block";
	cruises.style.display = "none";
	a.style.background = "#43b3ae";
	a.style.color = "#FFF";
	plane.style.color = "#FFF";
	b.style.background = "#05948d";
	b.style.color = "#FFF";
	home.style.color = "#FFF";
	c.style.background = "#FFF";
	c.style.color = "#05948d";
	car.style.color = "#05948d";
	d.style.background = "#19a59f";
	d.style.color = "#FFF";
	ship.style.color = "#FFF";
}

function cr(){
	flights.style.display = "none";
	hotels.style.display = "none";
	cars.style.display = "none";
	cruises.style.display = "block";
	a.style.background = "#43b3ae";
	a.style.color = "#FFF";
	plane.style.color = "#FFF";
	b.style.background = "#05948d";
	b.style.color = "#FFF";
	home.style.color = "#FFF";
	c.style.background = "#1cbbb4";
	c.style.color = "#FFF";
	car.style.color = "#FFF";
	d.style.background = "#FFF";
	d.style.color = "#05948d";
	ship.style.color = "#05948d";
}