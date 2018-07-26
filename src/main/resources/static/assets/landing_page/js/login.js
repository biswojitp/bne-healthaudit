$(document).ready(function() { 

	$('#fppanel').hide();
	$('#lpclick').hide();

	$("#fpclick").click(function(){
	    $("#lpclick").toggle();
	    $("#fppanel").toggle();
	    $("#loginpanel").toggle();
	    $(this).toggle();
	});
	$("#lpclick").click(function(){
	    $("#fpclick").toggle();
	    $("#fppanel").toggle();
	    $("#loginpanel").toggle();
	    $(this).toggle();
	});

});