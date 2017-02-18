$(document).ready(function() {
	//set some initial styles of buttons
	var blue = "#0055A2";
	document.getElementsByClassName("dataViews")[0].style.display = "none";
	$('.sysOpsButton').toggleClass('chosenColor');
	$('.cpuUsage').toggleClass('chosenColor');
	$('.imgStorage').toggleClass('chosenColor');
	$('.AP').toggleClass('chosenColor');
	$('.completedTasks').toggleClass('chosenColor');
	// js to change Supervision buttons' colors
	$('.findSofa').click(function() {
	  	$(this).toggleClass('chosenColor');
	})
	$('.findMattress').click(function() {
	  	$(this).toggleClass('chosenColor');
	})
	$('.findTvMonitor').click(function() {
	  	$(this).toggleClass('chosenColor');
	})

	$('.deleteImg').click(function() {
		$('.findSofa').toggleClass('chosenColor', false);
		$('.findMattress').toggleClass('chosenColor', false);
		$('.findTvMonitor').toggleClass('chosenColor', false);
	})
})