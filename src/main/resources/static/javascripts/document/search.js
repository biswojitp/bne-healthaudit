





$( document ).ready(function() {	   	

	$('#fileNumber').autocomplete({
		serviceUrl: 'getTags.htm',
		paramName: "tagName",
		delimiter: ",",
		transformResult: function(response) {

			return {
				//must convert json to javascript object before process
				suggestions: $.map($.parseJSON(response), function(item) {

					return { 

						value: item.tagName, data: item.tagName
						/*  value: item.tagName, data: item.id */

					};
				})

			};
		}
	});




	$('#appNumber').autocomplete({
		serviceUrl: 'getAppNumber.htm',
		paramName: "appName",
		delimiter: ",",
		transformResult: function(response) {

			return {
				//must convert json to javascript object before process
				suggestions: $.map($.parseJSON(response), function(item) {

					return { 

						value: item.appName, data: item.appName
						/*  value: item.tagName, data: item.id */

					};
				})

			};
		}
	});




	$('#unitNameCode').autocomplete({
		serviceUrl: 'getCompanies.htm',
		paramName: "companyName",
		delimiter: ",",
		transformResult: function(response) {

			return {
				//must convert json to javascript object before process
				suggestions: $.map($.parseJSON(response), function(item) {

					return { 

						value: item.companyName, data: item.companyName
						/*  value: item.tagName, data: item.id */

					};
				})

			};
		}
	});



	//==============start===============================
	$('#letterNumber').autocomplete({
		serviceUrl: 'getLetterNumber.htm',
		paramName: "letterkey",
		delimiter: ",",
		transformResult: function(response) {
			return {
				//must convert json to javascript object before process
				suggestions: $.map($.parseJSON(response), function(item) {

					return { 

						value: item.lnumber, data: item.lnumber
						/*  value: item.tagName, data: item.id */

					};
				})

			};
		}
	});	
	//==============end===============================




});




function searchSubmit()
{
	var tab=$("#tab").val();	
	
	if(tab==1)
	{		
		$("#searchForm").submit();
	}
	else if(tab==2)
	{	
		
		$("#searchletterForm").submit();
	}	
		
}


function projectsWork(projectId)
{
	$("#searchForm").submit();	
}


function viewFile(type,fileId) {	

	$("#actionType").val(type);
	$("#fid").val(fileId);
	$("#viewFileForm").submit();	

}


function viewLetterDetails(id,sent) {

	$("#lid").val(id);
	$("#sent").val(sent);
	$("#myLetterForm").submit();
}

function selectOffices(officeIds)
{
	var res = officeIds.split(",");
	for(var i=0;i<res.length;i++)
	{
		$('#office  option[value="'+res[i]+'"]').prop("selected", true);
	}
}

function selectDepartment(deptids)
{
	var res = deptids.split(",");
	for(var i=0;i<res.length;i++)
	{
		$('#department option[value="'+res[i]+'"]').prop("selected", true);
	}
}


function selectWorkIds(workid) {
	var res = workid.split(",");
	for(var i=0;i<res.length;i++)
	{
		$('#workSelectId option[value="'+res[i]+'"]').prop("selected", true);
	} 
}


function selectStatus(statuss) {
	var res = statuss.split(",");
	for(var i=0;i<res.length;i++)
	{
		$('#Status option[value="'+res[i]+'"]').prop("selected", true);
	} 
}

function selectNameOfIEIAs(IEIA)
{
	var res = IEIA.split(",");
	for(var i=0;i<res.length;i++)
	{
		$('#nameOfIEIA option[value="'+res[i]+'"]').prop("selected", true);
	} 
}


function setPendingWiths(setPendingWith)
{
	var res = setPendingWith.split(",");
	for(var i=0;i<res.length;i++)
	{
		$('#pendingWith option[value="'+res[i]+'"]').prop("selected", true);
	} 
}






function setFileNumber(fileNumber) {
	$("#fileNumber").val(fileNumber);	
}

function setaapNumberss(appNumber) {
	$("#appNumber").val(appNumber);	
}

function setUnitNameCodes(compnayName) {
	$("#unitNameCode").val(compnayName);	
}

function selectProject(projectId) {

	$("#projectCodeName").val(projectId);	 	
}

function setPendingDayss(pendingDays) {

	$("#pendingDays").val(pendingDays);	 	
}


function  searchFiltersRouting()
{
		var fdate=$("#requestedDateFrom").val(); 	    
		var tdate=$("#requestedDateTo").val(); 	 
		var fdatec=$("#fCreatedDateFrom").val(); 	    
		var tdatec=$("#fCreatedDateTo").val();	
		if((fdate!="" && tdate!="") || (fdatec!="" && tdatec!=""))
			{
		var fflag=checkFirstDateIsBiggereq(fdate,tdate);
		var f1flag=checkFirstDateIsBiggereq(fdatec,tdatec);
		var data="";
		if(fflag==false)
			{
			//First date is smsll so submit
			$("#searchForm").submit();
			}		
		else if(f1flag==false)
			{
			//First date is smsll so submit
			$("#searchForm").submit();
			}		
		 else {
			bootbox.alert("From Date should not be greater than To Date");
			return null;
			}
			}
		else
			{
			$("#searchForm").submit();
			}
	
}
//view letter details
function viewLetterDetails(lid,sent) 
{

	$("#lid").val(lid);
	$("#sent").val(sent);	  			
	$("#myLetterForm").submit();	
}
function viewNotesheet(fid)
{
	
	$("#fileid_np").val(fid);
	$('#notepreviewform').submit();
}

 function setTabvalue(tab)
 {
 	$("#tab").val(tab);
 	$("#file_table_div").html("");
 	$("#letter_table_div").html("");
 	
 }

