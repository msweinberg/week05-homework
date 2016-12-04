// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
$(document).ready(function(){

// Take a user's input and update the background image of the page based on that input. 
// make the background image reflect user input based on the Technical Requirements below.
// Technical Requirements

var newyork = ["new york", "new york city", "nyc"]
var sanfran = ["san francisco", "sf", "bay area"]
var losangeles = ["los angeles", "la", "lax"]

// Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
$("#submit-btn").click(function(e){

	// Prevent a form submission using the event.preventDefault() function
	e.preventDefault();

	// Store user input in var city
	// Call $.val() on inputs to get the string value of your user's input
	// displays picture regardless of case the user uses
	var city = $("#city-type").val().toLowerCase()
	console.log(city)

// Create if / else if / else conditionals to control the flow of your application
// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code
// 	if (newyork.indexOf(city) > -1) {
// 		$("body").css("background", "url(./images/nyc.jpg)")
// 	} else if (city === "san francisco" || city === "sf" || city === "bay area"){
// 		$("body").css("background", "url(./images/sf.jpg)")
// 	} else if (city === "los angeles" || city === "la" || city === "lax"){
// 		$("body").css("background", "url(./images/la.jpg)")
// 	} else if (city === "austin" || city === "atx")
// })

	if (newyork.indexOf(city) > -1) {
		$("body").css("background", "url(./images/nyc.jpg) no-repeat center center fixed")
	} else if (sanfran.indexOf(city) > -1){
		$("body").css("background", "url(./images/sf.jpg) no-repeat center center fixed")
	} else if (losangeles.indexOf(city) > -1){
		$("body").css("background", "url(./images/la.jpg) no-repeat center center fixed")
	} else {
		$(".container").append("We currently don't have images for this city. Check back later!")
	}
// reset the input placeholder 
	$("input:text").val("");



})

// Write at least six different lines of pseudocode and display them inline as JavaScript comments
// Get the first element from an attribute name using $.attr()

})