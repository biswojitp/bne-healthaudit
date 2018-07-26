/**
 * @author:AMIT K MEHER
 * @date : 30-03-2017
 */



//===================check the uploaded file size dynamicaly==start====================================
function checkdynamicFile(count)
{

	var fup = document.getElementById("document"+count);
	var fileName = fup.value;
	var ext = fileName.substring(fileName.lastIndexOf('.') + 1);		    
	if (typeof ($("#document"+count)[0].files) != "undefined") {
		var size = parseFloat($("#document"+count)[0].files[0].size / 1024).toFixed(2);
		// alert(size + " KB.");
		//3070 means 3*1024=3070kb=3mb
		if(size>5120)
		{
			bootbox.alert('Please choose file less than 3MB');
			document.getElementById("document"+count).value = "";
		}
	} else {
		bootbox.alert("This browser does not support HTML5.");
	}

}
//===================check the uploaded file size dynamicaly==end====================================

//===================check the uploaded file size not dynamicaly==start====================================
function Checkfiles()
{
	var fup = document.getElementById("document");
	var fileName = fup.value;
	var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

	if (typeof ($("#document")[0].files) != "undefined") {
		var size = parseFloat($("#document")[0].files[0].size / 1024).toFixed(2);
		// alert(size + " KB.");
		//3070 means 3*1024=3070kb=3mb
		if(size>3070)
		{
			bootbox.alert('Please choose file less than 3MB');
			document.getElementById("document").value = "";
		}
	} else {
		bootbox.alert("This browser does not support HTML5.");
	}

}


//===================check the uploaded file size not dynamicaly==start====================================






