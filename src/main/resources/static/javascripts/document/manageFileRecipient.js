function addLetterToFile() {
	var check=document.getElementsByName("ufileId");
	var values = [];
	for (i = 0; i < check.length; i++) 
	{
		if (check[i].checked == true) 
		{
			values.push(check[i].value);
		}
	}
	if(values.length==0)
	{
		bootbox.alert("Please select file to tag letter or create new file");
	}
	if(values.length>1)
	{
		bootbox.alert("Please select only one file to tag letter");
	}
	else if(values.length==1)
	{
		$("#addLetterfileId").val(values);

		bootbox.confirm("Do you want to tag letter to this file?", function(result){ 

			if(result==true)
			{
				$("#addLterToFilefrmid").submit();
			}
		})
	}	
}
function viewFile(tab,fileId,filerecptId1) {		
	$("#tabb").val(tab);
	$("#filerecptId").val(filerecptId1);
	$("#fid").val(fileId);
	$("#viewFileForm").submit();		
}
$("#exporttoexcel").click(function()
		{
	  var data = $(".checkbox:checked").map(function() {
	   	    return this.value;
	   	  }).toArray();
	   	   	   	 
	   	   if(data==null || data=="")
	  		     {
	  		       bootbox.alert('Please choose atleast one file');
	  		     }   		
	  	       else
	  		     {	
	  	    	  
	  	    	 $("#exporttoexcelreceipents").submit();
	  		     }	
		})	
		
//====================FILE CREATION START=====================================================	


function getallDeptByOffice(ofcid) {
	showAjaxLoader();
$.ajax({
		url : 'getallDeptByOffice.htm',
		dataType: "json",
		data : {
			ofcid : ofcid,
		},
		success : function(response) 
		{
			
			 var data=response;
			 var html="<option value=select>---Select---</option>"
			 $.each(data, function(index, value) {					
				  html=html+"<option value="+value.id+">"+value.name+"</option>";
			 });
			 
			 $('#deptlstSendTo').empty().append(html);
			 hideAjaxLoader();
		}
		,error: function(error)
		{
			hideAjaxLoader();
			
		}
});
	$("#deptlstSendTo_div").show();
}
function office(val) {
	
	if(val=='HO')
	{
	  $("#depdivtid").show();
	  $("#divsdivtid").hide();
	  $("#divsdivtid").val("");
	
	}
	else if(val=='DO')
	{
	 
	  $("#divsdivtid").show();
	  $("#depdivtid").hide();
	  $("#depdivtid").val("");
	}
	else{
	
	 $("#divsdivtid").hide();
	  $("#depdivtid").hide();
	  $("#divsdivtid").val("");
	  $("#depdivtid").val("");
	
	}
	
}  
function officeByType(val)
{
	
	 $("#ofcdivtid").show();
	if(val=='HO')
	{
		 $("#HeadOfcSpan").show();
		  $("#divOfcSpan").hide();
	}
	else if(val=='DO')
	{
		 $("#HeadOfcSpan").hide();
		  $("#divOfcSpan").show();
	}
	else
	{
		 $("#divsdivtid").hide();
		  $("#depdivtid").hide();
		  $("#divsdivtid").val("");
		  $("#depdivtid").val("");
		  $("#ofcdivtid").hide();
		  
	}
	
}
function seenFile(filerecptId)
{	
	
	$("#filerecptIdSeen").val(filerecptId);
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
		    		
		    		
		    		$("#seenFileForm").submit();
		    		}
		    }
		});
	 
}
//====================FILE CREATION END=====================================================
function viewHistoryData(fid){
	
		 var NWin = window.open("view-file-history.htm?fileidv="+fileidv+"", '', 'height=800,width=800');
	     if (window.focus) 
	     {
	       NWin.focus();
	     }
	     return false;
}
/*document.getElementsByClassName("bootbox-input bootbox-input-text form-control").style.height = "100px";
*/
function callFoRAndRecall(type,fileid,prereciId)
{
	var sms="";
	if(type==0)
	{
		sms="Are you sure to Call For...!";
	
	}
else	    	
	{
	sms="Are you sure to Re-Call ...!";
	}

	bootbox.confirm({
	    
		message: sms,
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
	    		var calltype="";
	    	if(type==0)
	    		{
	    		calltype="callfor";
	    		
	    		}
	    	else	    	
	    		{
	    		calltype="recall";
	    		}
	    
	    		
	         	$("#calltype").val(calltype);
	    		$("#preRecpid").val(prereciId);
	    		$("#fileidcall").val(fileid);
	    		 /* $("#postRecpid").val(recId);*/ 
	 	 	    $("#callForrecallForm").submit();
	    		}
	    }
	});
	}
 
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
function createpartfile(filerecepientid)
{
bootbox.confirm({
	    
		message: "Are you sure?",
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
	$("#filerecepientid_cpf").val(filerecepientid);
	 $("#createpartfile").submit();
    		}
	    }
});
}
//Get the Project Name on Change of Client
function loadProjectByClient(clientid)
{
	
	if(clientid!="")
	{

		showAjaxLoader();
		$.ajax({
			url : 'getAllProjectByClient.htm',
			dataType: "json",
			data : {
				clientid : clientid,
			},
			success : function(response) 
			{
				var data=response;

				var trHTML='<option value="0">None</option>';
				$.each(data, function(i, value) 
						{

					trHTML +='<option value="'+value.projectid+'">'+value.projectname+' | '+value.projectcode+'</option>';

						});
			
				$('#project').empty().append(trHTML);
				hideAjaxLoader();
			}
			,error: function(error)
			{
				hideAjaxLoader();

			}
		});
	}

}
//Get the Work Name on Change of Work
function getProjectWorkDetails(project)
{
	if(project=="")
		{
		bootbox.alert("Please select project !");
		}
	else
		{
	showAjaxLoader();
	$.ajax({
		url : 'getWorkDetails.htm',
		dataType: "json",
		data : {
			project : project,
		},
		success : function(response) 
		{
			var data=response;
			var trHTML='<option value="0">None</option>';
			$.each(data, function(i, value) 
			{
				trHTML +='<option value="'+value.workId+'">'+value.workCode+' | '+value.workName+'</option>';
				
			});
			$('#work').empty().append(trHTML);
			hideAjaxLoader();
		}
		,error: function(error)
		{
			hideAjaxLoader();
			
		}
	});
		}
} 
//check file number dublicacy
function checkFileNameDublicacy()
{
	  var dept=$("#dept").val();
			var office=$("#ofcid").val();
			var project=$("#project").val();
			var work=$("#work").val();
			var client=$("#client").val();
			var activity=$("#activityID").val();
			var title=$("#title").val();
			var subject=$("#sub").val();
			var fileNameActual=$("#fileNameActual").val();
			var custodian=$("#empOfficeMapIdascustodian").val();			
			
		
			if(project=="0" && work!="0")
			{				
				bootbox.alert("Please select project !");
			}
			
			 else  if(title=="")
			{
			bootbox.alert("Please enter title !");
			}
			else if(subject=="")
			{
			bootbox.alert("Please enter subject !");
			}
			else if(fileNameActual=="")
			{
			bootbox.alert("Please select file name !");
			}
			else if(custodian=="")
				{
				bootbox.alert("Please select Custodian !");
				}

			else
				{
				
				if(client!="")
				{	
					if(client.indexOf("||") !=-1)
					{
						var clientArr=client.split("||");
						client=clientArr[0];
					}
					else
					{
						client="0";
					}
				}
				else
				{
					client="0";
				}
				$("#hdn_client").val(client);	


				if(dept=="")
				{
					dept="NA";

				}
				if(office=="")
				{
					office="NA";

				}
				if(activity=="")
				{
					activity="NA";

				}
			showAjaxLoader();
			
		
	$.ajax({
		url : 'checkFileNameDublicacy.htm',
		dataType: "json",
		data : {
			dept : dept,
			office : office,
			project : project,
			work : work,
			client :client,
			activity : activity,
		},
		success : function(response) 
		{
			var data=response;
			if(data!=null)
				{		
				var thtml='';
				
				if(data.isfilelst=="Yes")
					{					
			        	var data1=data.filelst;
							$.each(data1, function(ii, value) 
							{	
								$("#hdn_fileid").val(value.fid);
					     		thtml=thtml+'<p><span>'+(ii+1)+')</span> <span id="'+value.fid+'">'+value.fname+'</span></p>'; 
							});
							
						$("#flistdiv").empty().append(thtml);				
						$("#modal_volumefile").modal("show");
					}
				else
					{
					$("#isvolumefile").val("No");
					$("#hdn_fileid").val("NA");
					$("#filecreateform").submit();
					}			
				}
			else
				{
			
				$("#isvolumefile").val("No");
				$("#hdn_fileid").val("NA");
				$("#filecreateform").submit();
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
function createVolumefile()
{
	$("#isvolumefile").val("Yes");
	$("#filecreateform").submit();
}

function reopenFile(fileid,filerecptid)
{
	
	$("#fileidreopen").val(fileid);
	$("#filerecptidreopen").val(filerecptid);
	$("#filereopenform").submit();
 }
function closefile(status,fileid,filerecptid)//or closed file
{

bootbox.confirm({
	    
		message: "Do you want to close file and send to completed list?",
	    buttons: {
	        cancel: {
	            label: '<i class="fa fa-times"></i> No'
	        },
	        confirm: {
	            label: '<i class="fa fa-check"></i> Yes'
	        }
	    },
	    callback: function (result) {
	    	
	    	if(result==true)
	    		{
	    		$("#status").val(status);
	    		$("#filerecptidclose").val(filerecptid);
	    		$("#fileidclose").val(fileid);
	    		$("#closefileform").submit();
	    		}
	    }
	});
	
 }
//"client" is search text box id
//getClientCode.htm in FileMonitoringController
//Autocomplete requir autocompleet.css and autocompleet.js
$('#client').autocomplete({	
	serviceUrl: 'getClientCode.htm',
	paramName: "clientcode",
	delimiter: ",",
	transformResult: function(response) {
		return {
			//must convert json to javascript object before process
			suggestions: $.map($.parseJSON(response), function(item) {
				return {                      
					value: item.clientid+"||"+item.clientcode					
				
				};
			})

		};
	}
});





