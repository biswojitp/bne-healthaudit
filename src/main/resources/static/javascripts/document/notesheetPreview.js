/**
 * @author:AMIT K MEHER
 * @date : 30-03-2017
 */

//===========================NOTE SHEET PREVIEW==========================================================
function generateNotePdf() {
	var notepdflst = $(".selectedNotechk:checked").map(function() {
		return this.value;
	}).toArray();

	if (notepdflst == "") {
		alert("Please choose atleast one note..");
	} else {

		$("#noteidlst").val(notepdflst);
		$('#notepdfform').submit();
	}

}




var status = 0;
$('#check_all').change(function() {
	
	if (status == 0) {

		/* $(".selectedNotechk").attr("checked", true); */
		$( ".selectedNotechk" ).prop( "checked", true );

		status = 1;

	} else {
		//$(".selectedNotechk").attr("checked", false);
		$( ".selectedNotechk" ).prop( "checked", false);
		status = 0;

	}
});
