


/**
 * @author Dushmanta Tanty
 * Validating Upload Inward Letter
 */

function checkEnclosureSizeAndType()
{	 	
	var fup = document.getElementById("edocumentfile");
	var fileName = fup.value;
	var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

	if (typeof ($("#edocumentfile")[0].files) != "undefined") {
		var size = parseFloat($("#edocumentfile")[0].files[0].size / 1024).toFixed(2);

		if(size>3070)
		{
			document.getElementById("msg").innerHTML = "Size exceeds 3 MB!";
			document.getElementById("edocumentfile").value = "";
		}
		else{
			var myfile=$('#edocumentfile').val();			
			var ext = myfile.split('.');

			if(ext[1]=="pdf"){
				document.getElementById("msg").innerHTML = " ";
			}
			else{
				document.getElementById("msg").innerHTML = "Please select pdf file only!";
				document.getElementById("edocumentfile").value = "";
			}	
		}
	} else {
		bootbox.alert("This browser does not support HTML5.");
	}

}
//==================VIEW LETTER BOX START=====================================================

$("html").addClass("sidebar-left-collapsed");//to slide left menu to left
$("#noteArea").val("");

function savenote() {
	var notes=$("#noteArea").val();


	if(notes=="") { 
		bootbox.alert("Please write marginal instruction...!");
	} 
	else {
		$("#noteidA").val(notes);

		bootbox.confirm({
			title: "save",
			message: "Do you want to save?",
			buttons: {
				cancel: {
					label: '<i class="fa fa-times"></i> Cancel'
				},
				confirm: {
					label: '<i class="fa fa-check"></i> Confirm'
				}
			},
			callback: function (result) {
				if(result==true)
				{

					$("#myLetterForm").submit();


				}
			}
		});
	}
	/* var flag = window.confirm("Are you sure  want save?");
	 				if(flag==true) {
	 					 $("#myLetterForm").submit();	
	 				}	 */			

}




function sendLetter() {	

	bootbox.confirm({
		title: "Send",
		message: "Do you want to send?",
		buttons: {
			cancel: {
				label: '<i class="fa fa-times"></i> Cancel'
			},
			confirm: {
				label: '<i class="fa fa-check"></i> Confirm'
			}
		},
		callback: function (result) {
			if(result==true)
			{
				var data=$(".checkboxSelected").map(function(){
					return this.value;
				}).toArray();

				if(data!="")
				{
					var noted=$("#noteArea").val();
					if(noted=="")
					{
						bootbox.alert("Please write marginal instruction...!");
					}
					else
					{
						$("#noteSendto").val(noted);
						$("#sendtoform").submit();
					}
				}
				else{
					bootbox.alert("Please choose User !");
				}

			}
		}
	});
}


function modalForSendLetter()
{
	if($("#isUrgentId").prop('checked') == true){
		var isurgent =$("#isUrgentId").val();
		$("#isUrgentIdModel").val(isurgent);
	}
	else{
		$("#isUrgentIdModel").val(0);
	}
	$("#modalForSendLetter").modal("show");
	$('#tbody_SendTo').html(" ");
	$('#tbody_selectedUser').html(" ");

	//clear();		
}


function getallSedtoUserBydept() {
	//HO
	var ofcid=$("#OfficeSendTo").val();
	var deptid=$("#deptlstSendTo").val();
	getallEmpBySendTo(deptid,"HO",ofcid)
}

function getallSedtoUser(type) {
	$('#tbody_SendTo').empty().append('<tr><td></td><td>No Record Found</td><td></td><td></td></tr>');
	
	if(type=="DEPT")
	{

		getallSedtoUserBydept();
	}
	else
	{
		
		showAjaxLoader();
		$("#deptlstSendTo_div").hide();
		var ofcid=$("#OfficeSendTo").val();
		var deptid=$("#deptlstSendTo").val();
		
		$.ajax({
			url : 'checkofficetype.htm',
			dataType: "json",
			data : {
				ofcid : ofcid,
			},
			success : function(response) 
			{				
				
				if(response!="")
				{
					$.each(response, function(index, value) {
						
						if(value.ofctype=="HO")
						{
							//IF HO

							$("#deptlstSendTo_div").show();
						}
						else
						{
						

							getallEmpBySendTo("NA","DO",ofcid)
						}



					});


				}
				else
				{

				}

				hideAjaxLoader();
			}
			,error: function(error)
			{
				hideAjaxLoader();

			}
		}); 
	}
}





//get all Emp By sendto
function getallEmpBySendTo(deptid,ofctype,ofcid){
	showAjaxLoader();
	/*var deptid=$("#deptlstSendTo").val();
	 			var ofctype=$("#ofclstSendTo").val();
	 			var divid=$("#divSendTo").val();
	 			var ofcid=$("#OfficeSendTo").val();*/
	if(deptid=="")
	{
		deptid="NA";
	}
	var trHTML='';					
	$.ajax({
		url : './getAllEmpToSendLetter',
		type:'GET',
		data : ({			 	    
			'deptid':deptid,
			'ofctype':ofctype,

			'ofcid':ofcid,
		}),
		cache:false,
		asynch:false,
		success : function(response) 
		{

			if(response !="")
			{
				var cnt=0;
				var obj=jQuery.parseJSON(response);		
				$.each(obj, function(i, value) 
						{
					var empdetails="";
					var ofctype=value.officetype;

					if(ofctype=="")
					{
						ofctype="NA";
					}
					var deptid=value.deptid;
					if(deptid=="")
					{
						deptid="NA";
					}
					var sectionid=value.sectionid;
					if(sectionid=="")
					{
						sectionid="NA";
					}

					var officeid=value.officeid;
					if(officeid=="")
					{
						officeid="NA";
					}	 					 	 			

					empdetails=officeid+"/"+deptid+"/"+sectionid+"/"+value.empId+"/"+value.role;


					trHTML +='<tr id="row'+(i+1)+'"><td>'+(i+1)+'</td><td>'+value.designation+'</td><td>'+value.name+'</td><td><div class="checkbox"><label><input type="checkbox" lang="'+value.name+'" title="'+empdetails+'" readonly value="'+value.designation+'"	class="checkbox"  onclick="addSelectedUser(this,'+(i+1)+');" name="chkSendTo"></label></div></td></tr>';
					cnt++;
						}); 

				if(cnt>0)
				{

				}
				else
				{
					trHTML='<tr><td></td><td>No Record Found</td><td></td><td></td></tr>';
				}
				$('#tbody_SendTo').empty().append(trHTML); 

			}
			else{
				trHTML='<tr><td></td><td>No Record Found</td><td></td><td></td></tr>';
				$('#tbody_SendTo').empty().append(trHTML); 
			}
			hideAjaxLoader();
		},
		error:function(transport)
		{
			hideAjaxLoader();
			trHTML='<tr><td></td><td>No Record Found</td><td></td><td></td></tr>';
			$('#tbody_SendTo').empty().append(trHTML); 
		}

	});

}

function displayLetter(id)
{   
	$("#lid").val(id);
	$("#ldf").submit();

}



var delcnt=1;
function addSelectedUser(obj,id)
{
	var deg=obj.value;
	var name=obj.lang;
	var empdetails=obj.title;

	var trHTML1 ='<tr id="delcnt'+(delcnt)+'"><td>'+(delcnt)+'</td><td>'+deg+'</td><td>'+name+'</td><td><div class="checkbox"><label><input type="checkbox" readonly value="'+empdetails+'" readonly="readonly" checked	class="checkboxSelected"  name="chkSendTo"></label></div></td><td><div class="checkbox"><label><input type="checkbox"  value="'+empdetails+'" 	class="checkboxSelected1"  name="frequentemployees"></label></div></td><td><input class="btn btn-danger btn-xs" value="-" onclick="deleteselectedrow('+delcnt+')" type="button"></td></tr>';
	$('#tbody_selectedUser').append(trHTML1);
	$("#row"+id).closest('tr').html(" ");

	delcnt++;
}


function deleteselectedrow(id)
{

	$($("#delcnt"+id).closest("tr")).remove();

} 
function clearSelectedUser()
{
	$('#tbody_selectedUser').html(" ");
}

function sendfrequent()
{
	bootbox.confirm({
		title: "Send",
		message: "Do you want to send?",
		buttons: {
			cancel: {
				label: '<i class="fa fa-times"></i> Cancel'
			},
			confirm: {
				label: '<i class="fa fa-check"></i> Confirm'
			}
		},
		callback: function (result) {
			if(result==true)
			{
				var data=$(".selectefreuser:checked").map(function(){
					return this.value;
				}).toArray();

				if(data!="")
				{

					var noted=$("#noteArea").val();
					if(noted=="")
					{
						bootbox.alert("Please write marginal instruction...!");
					}
					else
					{
						if($("#isUrgentId").prop('checked') == true){

							var isurgent =$("#isUrgentId").val();


							$("#isUrgentIdModel_fm").val(isurgent);

						}
						else{

							$("#isUrgentIdModel_fm").val(0);
						}


						$("#notefrequent").val(noted);
						$("#sendFrequentForm").submit();
					}
				}
				else{
					bootbox.alert("Please choose User !");
				}

			}
		}
	});

}
function reset()
{
	$("#noteArea").val("");
}
//======================DOWNLOAD ENCLOSURE==================
function downloadEnclosure(encid)
{

	$("#encid").val(encid);
	$("#downloadEnclosure").submit();
}

function seenLetter(filerecptId)
{	
	var noteArea=$("#noteArea").val();
	if(noteArea=="")
	{
		bootbox.alert("Please write marginal instruction...!");
	}
	else
	{

		$("#note").val(noteArea);
		$("#receverRecptid").val(filerecptId);
		bootbox.confirm({

			message: "Are you sure ?",
			buttons: {
				cancel: {
					label: '<i class="fa fa-times"></i> Cancel'
				},
				confirm: {
					label: '<i class="fa fa-check"></i> Confirm'
				}
			},
			callback: function (result) {
				if(result==true)
				{
					if($("#isUrgentId").prop('checked') == true){
						var isurgent =$("#isUrgentId").val();
						$("#isUrgent_seen").val(isurgent);
					}
					else{

						$("#isUrgent_seen").val(0);
					}

					$("#seenletterForm").submit();
				}
			}
		});

	}


}
//generate file name
function generateFileNumber()
{
	var title=$("#title").val();
	var sub=$("#sub").val();
	var acti=$("#activityID").val();


	$("#fileNameActual").val(title+"/"+sub);

	if(acti!="")
	{
		$("#fileNameActual").val(acti+"/"+title+"/"+sub);
	}



}


function downloadTransferLetter(request){
	$("#requestId").val(request);
	$("#downloadTransferLetterForm").submit();
}	

function downloadRetirementLetter(request){
	$("#retirementId").val(request);
	$("#downloadRetirementLetterForm").submit();
}	