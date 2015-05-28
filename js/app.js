//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mousedown = false;
//when clicking on control list items
$(".controls").on("click", "li",function () {
	
	//deselect sibling elements
	$(this).siblings().removeClass("selected");
	//select clicked elements
	$(this).addClass("selected");
	//cache color here
	color = $(this).css("background-color");
});
	
//when add color is pressed
$("#revealColorSelect").click(function () {
	//show color select or hide the select
	changeColor();
	$("#colorSelect").toggle();
});

function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color","rgb(" + r + "," + g + ", " + b + ")");
}

//when color sliders change
	$("input[type=range]").change(changeColor);
	//update the new color span


//when new color is pressed 
$("#addNewColor").click(function() {
	var $newColor = $("<li></li>");
	$newColor.css("background-color",$(newColor).css("background-color"));

	//append to list
	$(".controls ul").append($newColor);
	//select the new color

	$newColor.click();



});
	
//on mouse events on the canvas
	//draw lines
$canvas.mousedown(function(e){
	lastEvent = e
	mousedown = true;
	}).mousemove(function(e){
		if(mousedown)
		{
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.strokeStyle = color;
		context.lineTo(e.offsetX,e.offsetY);
		context.stroke();
		lastEvent = e;
		}

	}).mouseup(function(){
		mousedown = false;
	});

	context.stroke();


