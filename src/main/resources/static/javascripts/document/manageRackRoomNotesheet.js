
//==========================Manage Rack==========================================================
function saveManageRack()
{
	$('#divMsg').empty();
	if($("#cmbRoom").val() == 0)
	{
	  bootbox.alert("Please select room no.");
	  return false;
	}
	if($("#inputDefault1").val() == "")
	{
		 bootbox.alert("Please enter rack no.");
		 return false;
	}
	
	if($("#inputDefault2").val() == "")
	{
		 bootbox.alert("Please enter number of cells.");
		 return false;
	}
	else
	{
		$('#frmRack').submit(); 
	}
}
function cancelData()
{
	
	  document.getElementById("addbody").style.display = "none";
	  document.getElementById("show_hide").className = "fa fa-caret-up";	
	  $("#frmRack")[0].reset();
}


//===========================MANAGE ROOMS==========================================================
function saveManageRoom()
{  
	$('#divMsg').empty();
	if($("#inputDefault").val() == "")
	{
		 bootbox.alert("Please enter room no.");
		 return false;
	}
	else
	{
	   $('#frmRoom').submit(); 
	}
}
function cancelData()
{
	
	  document.getElementById("addbody").style.display = "none";
	  document.getElementById("show_hide").className = "fa fa-caret-up";
	  $("#frmRoom")[0].reset();
	  
}
