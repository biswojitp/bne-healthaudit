

//=====================MANAGE LETTER AMIT============START=================================================================

$('#encloseFile').validate({ // initialize the plugin
	onfocusout: false,
	invalidHandler: function(form, validator) {
		var errors = validator.numberOfInvalids();

		if (errors) {

			validator.errorList[0].element.focus();
		}
	},
	rules: {

		enclosureType:{
			required: true
		},
		enclosureName:{
			required: true
		},
		enclosure:{
			required: true
		},



	},
	messages: {
		enclosureType: {
			required: "Enclosure Type cannot be blank!",

		},
		enclosureName: {
			required: "Enclosure Name cannot be blank!",

		},

		enclosure:{
			required: "Enclosure cannot be blank!",
		}

	},
	errorPlacement: function (error, element) {

	}
});

function CheckPdffiles()
{
	var myfile=$('#documentfile').val();
	var ext = myfile.split('.');	
	if(ext[1]=="pdf"){
	}
	else{
		bootbox.alert("Please select pdf file only!");
		document.getElementById("documentfile").value = "";
	}

}
function submitEncloserForm(){

	$("#encloseFile").submit();

}
function validateMemonumberInEnterLetter(memovalue)
{
	var lnumberdata=$("#lnumberid").val();

	if(lnumberdata=="")
	{
		bootbox.alert("Please enter letter number!");
		$("#memoNo").val("");
	}
	else
	{

		showAjaxLoader();
		$.ajax({
			url : './validateMemonumberInEnterLetter.htm',
			type:'GET',
			dataType: "text",
			data : ({			 	    
				letterNo:lnumberdata,
				memovalue:memovalue,

			}),
			cache:false,
			asynch:false,
			success : function(response) 
			{		 	    	
				var status = response;

				if(status=="Yes")
				{
					bootbox.alert("Memo number already exits in letter number :"+lnumberdata+"");
					$("#memoNo").val("");
				}   	 


				hideAjaxLoader();				 	
			},
			error:function(transport)
			{			
				hideAjaxLoader();   		
				$("#memoNo").val("");
			}				 	  
		});
	}

}



function viewLetterDetails(id) {
	$("#lid").val(id);
	$("#myLetterForm").submit();
}

function sendLetter(id , letter) {
	$("#lsendid").val(id);
	
	bootbox.confirm({

		message: "Do you want to send letter no : " + letter + "?",
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
				$("#myLetterSendForm").submit();
			}
			
		}
	});
	
	/*var flag = window.confirm("Do you want to send letter no : " + letter + "?");
	if(flag==true) {
		$("#myLetterSendForm").submit();
	}	*/				     
}



function desgnation(val) {		
	if(val=='9') {
		$("#depdivtid").show();
		$("#divsdivtid").hide();
		$("#divId").val("");
	}
	else if(val=='23')
	{
		$("#divsdivtid").show();
		$("#depdivtid").hide();
		$("#deptId").val("");
	}
	else{	
		$("#divsdivtid").hide();
		$("#depdivtid").hide();
		$("#divId").val("");
		$("#depdivtid").val("");
	}	
}



$("#subject").val("");
function setEnclosure() {
	var copyflag =  document.getElementById("letterType1").checked;
	if(copyflag==true) {
		document.getElementById("letterType").value="E";
		$("#letterEnclosureDiv").show();			
	}
	else {
		document.getElementById("letterType").value="L";
		$("#letterEnclosureDiv").hide();	
	}
}



function deleteEncloRow(tableID){
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		for(var i=0; i<rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[0].childNodes[0];
			if(null != chkbox && true == chkbox.checked) {
				if (rowCount!=2) {
					table.deleteRow(i);
					rowCount--;
					i--;
				} 
			}
		}
	}catch(e) {
		bootbox.alert(e);
	}
}


function submitLetter() {

	var status= formValidation();

	if(status>0)
	{


		var flag =  document.getElementById("confiid").checked;
		var letterNo =  document.getElementById("lnumberid").value;

		if(flag==true) {
			var firstTimeUpload =  document.getElementById("letterType").checked;
			if (firstTimeUpload==true) {
				var encfile = document.getElementById("edocumentfile").value;
				if(encfile!="")
				{

					bootbox.confirm({

						message: "Are you sure, You don't want to add enclosure?",
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
								$("#managedocForm").submit();
							}
							else
							{
								bootbox.alert("Please add enclosure!");
							}
						}
					});


				}	 									
			}
			else {
				$("#managedocForm").submit();
			}				
		}
		else if(flag==false) {
			var file = document.getElementById("documentfile").value;
			if (file!="") {	
				$("#managedocForm").submit();
			} 
			else {

				var firstTimeUpload =  document.getElementById("letterType").checked;
				if (firstTimeUpload==true) {
					var encfile = document.getElementById("edocumentfile").value;
					if(encfile!="")
					{



						bootbox.confirm({

							message: "Are you sure, You don't want to add enclosure?",
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
									$("#managedocForm").submit();
								}
								else
								{
									bootbox.alert("Please add enclosure!");
								}
							}
						});


					}	 									
				} 
				else {
					$("#managedocForm").submit();
				}		 	    				

			}			 	    			 				 	    							 	    					 	    				
		}
	}
}

function  formValidation()
{
	var status=0;
	var dairyNo=$("#dairyNo").val();
	var sender=$("#sender").val();
	var adressee=$("#adressee").val();
	var lnumberid=$("#lnumberid").val();
	var subject=$("#subject").val();
	var documentfile=$("#documentfile").val();
	var deg=$("#designation").val();
	var dept=$("#deptId").val();
	var div=$("#divId").val();
	var memono=$("#memoNo").val();
	var copyLetter=$("#copyLetter").val();
	var docname= document.getElementById("docname").innerHTML;
	var senderdt=$("#senderDate").val();



	if(sender=="")
	{
		bootbox.alert("Sender cannot be blank!");
	}
	else if(adressee=="1" || adressee=="undefined")
	{
		bootbox.alert("Adressee cannot be blank!");
	}
	else  if(deg=="1")
	{
		bootbox.alert("Designation cannot be blank!");
	}
	else  if(lnumberid=="")
	{
		bootbox.alert("Letter Number cannot be blank!");
	}
	else  if(subject=="")
	{
		bootbox.alert("Subject cannot be blank!");
	}
	else  if(senderdt=="")
	{
		bootbox.alert("Sender Date cannot be blank!");
	}

	else if(copyLetter=="NO" && documentfile=="" && docname=="")
	{
		bootbox.alert("Upload letter!");
	}
	else if(copyLetter=="YES" && memono=="")
	{
		bootbox.alert("Memo No cannot be blank!");
	}
	else if(deg=="9")
	{

		if(dept=="1")
		{
			bootbox.alert("Department cannot be blank!");
		}
		else
		{
			status++;
		}
	}
	else if(deg=="23")
	{
		if(div=="1")
		{
			bootbox.alert("Division Office cannot be blank!");
		}
		else
		{
			status++;
		}

	}
	else
	{
		status++;
	}
	return status
}

function saveAndSendLetter() {

	var status= formValidation();

	if(status>0)
	{

		var flag =  document.getElementById("confiid").checked;
		var letterNo =  document.getElementById("lnumberid").value;		
		if(flag==true) {
			var firstTimeUpload =  document.getElementById("letterType").checked;
			if (firstTimeUpload==true) {
				var encfile = document.getElementById("edocumentfile").value;
				if(encfile!="")
				{

					bootbox.confirm({

						message: "Are you sure, You don't want to add enclosure?",
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
								$("#managedocForm").attr("action", "save-and-send-letter.htm");
								$("#managedocForm").submit();
							}
							else
							{
								bootbox.alert("Please add enclosure!");
							}
						}
					});

				}	 									
			}
			else {
				$("#managedocForm").attr("action", "save-and-send-letter.htm");
				$("#managedocForm").submit();
			}
		}
		else if(flag==false) {
			var file = document.getElementById("documentfile").value;
			if (file!="") {	
				$("#managedocForm").attr("action", "save-and-send-letter.htm");
				$("#managedocForm").submit();
			} 
			else {

				var firstTimeUpload =  document.getElementById("letterType").checked;
				if (firstTimeUpload==true) {
					var encfile = document.getElementById("edocumentfile").value;
					if(encfile!="")
					{

						bootbox.confirm({

							message: "Are you sure, You don't want to add more enclosure?",
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
									$("#managedocForm").attr("action", "save-and-send-letter.htm");
									$("#managedocForm").submit();
								}
								else
								{
									bootbox.alert("Please add enclosure!");
								}
							}
						});

					}	 									
				} 
				else {
					$("#managedocForm").attr("action", "save-and-send-letter.htm");
					$("#managedocForm").submit();
				}		 	    				

			}			 	    			 				 	    							 	    					 	    				
		}
	}
}


function displayLetterUpload() {	 
	var sender =  $("#sender").val();
	var letterNo =$("#lnumberid").val();  
	var senderDate = $("#senderDate").val(); 	
	if(sender=="")
	{
		bootbox.alert("Sender Name can not be blank");
	}
	else if(letterNo=="")
	{
		bootbox.alert("Letter Number can not be blank");
	}
	else if(senderDate=="")
	{
		bootbox.alert("Sender Date can not be blank");
	}
	else
	{
		showAjaxLoader();
		$.ajax({
			url : './findLetterEnclosureStatus',
			type:'GET',
			dataType: "text",
			data : ({			 	    
				letterNo:letterNo,
				sender:sender,
				senderDate:senderDate,
			}),
			cache:false,
			asynch:false,
			success : function(response) 
			{		 	    	
				var status = response;

				if (status=='YES') 
				{    	 		

					bootbox.confirm({

						message: "A copy of letter no  is available. Do you want to use it?",
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
								document.getElementById("copyLetter").value="YES";				 	    	 				
								$("#letterEnclosure").hide();				 	    	 			
								$("#copyletterCheckbox").show();
								$("#btn_verify").hide();
								$("#btn_verified").show();				 	    	 				
								$("#memo_div").show();
								$("#documentfile").val(null);				 	    	 					
							}							 		    	
						}
					});
				}    	 		

				else if (status=='NO')
				{					 		

					document.getElementById("copyLetter").value="NO";
					$("#copyletterCheckbox").hide();						 	
					$("#letterEnclosure").show();						 		
					$("#btn_verify").show();
					$("#btn_verified").hide();	 	    	 				
					$("#memo_div").hide();
					$("#memoNo").val(null);
				}	
				hideAjaxLoader();
			},
			error:function(transport)
			{			   		
				hideAjaxLoader();
			}				 	  
		});
	}
}	

$("#lnumberid").keyup(function(){
	$("#btn_verify").show();
	$("#btn_verified").hide();
});				
function addRow(tableID) {
	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	var colCount = table.rows[0].cells.length;
	for(var i=0; i<colCount; i++) {
		var newcell	= row.insertCell(i);
		newcell.innerHTML = table.rows[1].cells[i].innerHTML;			
		switch(newcell.childNodes[0].type) {
		case "checkbox":
			newcell.childNodes[0].checked = false;
			break;	
		case "text":
			newcell.childNodes[0].value = "";
			break;
		case "file":
			newcell.childNodes[0].file = 0;
			break;
		}
	}	
}		
function addDeleteRow(tableID){
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		for(var i=0; i<rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[0].childNodes[0];
			if(null != chkbox && true == chkbox.checked) {
				if (rowCount!=2) {
					table.deleteRow(i);
					rowCount--;
					i--;
				} 
			}
		}
	}catch(e) {
		bootbox.alert(e);
	}
} 
function setValueEnclosed(letter,issent,memo,docid){

	document.getElementById("eletterNo").value = letter;
	document.getElementById("ememoNo").value = memo;

	if(issent!="PENDING" || issent=="")
	{		
		$("#addenclosureDiv").hide();		
	}
	else
	{		
		$("#addenclosureDiv").show();
	}	
	getallEnclosureByLetterNumber(letter,docid);
}	
//====================GET ALL ENCLOUSURE======START==================
function getallEnclosureByLetterNumber(lnumber,docid){	  
	showAjaxLoader();
	$("#docid").val(docid);
	var html='';					
	$.ajax({
		url : './getallEnclosureByLetterNumber',
		type:'GET',
		data : ({			 	    
			'lnumber':lnumber,

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

					html +='<tr><td>'+(i+1)+'</td><td>'+value.enclosuretype+'</td><td>'+value.enclosureName+'</td><td><a href="#" class="btn btn-success btn-xs"  onclick="downloadEnclosure('+value.enclosureMapId+');"><i class="fa fa-download" aria-hidden="true"></i></span></td></tr>';
					cnt++;
						}); 				 	 	 
			}
			else
			{
				html +='<tr><td colspan="4"></td></tr>';
				bootbox.alert("No Record Found");
			}
			$("#tbody_enclo").empty().append(html);
			hideAjaxLoader();
		},
		error:function(error)
		{
			hideAjaxLoader();
		}

	});

}
function downloadEnclosure(encid)
{

	$("#encid").val(encid);
	$("#downloadEnclosure").submit();
}
//====================GET ALL ENCLOSURE======END==================	


function showDetails() {
	var divofc=$('#divId').val();
	var role=$('#designation').val();
	var dept="NA";
	if(role=="" || divofc=="")
	{		
		$('#addressee').empty();		
	}
	else
	{	
		showAjaxLoader();
		var html="";
		$.ajax({
			url : 'getUserDetailsByRoleOfcDept.htm',
			dataType: "json",
			data : {
				"role" : role,
				"dept" : dept,
				"office" : divofc,
			},
			success : function(response) 
			{				
				var data=response;
				if(data!="")
				{				


					$.each(data, function(index, value) {						
						html=html+"<option  value="+value.name+">"+value.name+"</option>";
					});

					$('#addressee').empty().append(html);					
				}
				else
				{
					$('#addressee').empty();					
				}
				hideAjaxLoader();
			}
			,error: function(error)
			{
				hideAjaxLoader();
				$('#addressee').empty();	
			}
		});	
	};
}
function showDetailsByDept() {
	var role=$('#designation').val();
	var dept=$('#deptId').val();
	if(dept=="")
	{
		dept="NA";
	}
	var officeid=$("#officeid").val();
	if(role=="" || dept=="")
	{		
		$('#addressee').empty();		
	}
	else
	{	
		showAjaxLoader();
		$.ajax({
			url : 'getUserDetailsByRoleOfcDept.htm',
			dataType: "json",
			data : {
				"role" : role,
				"dept" : dept,
				"office": officeid,					
			},
			success : function(response) 
			{				
				var data=response;					
				if(data!="" || data!=null)
				{				
					var html="<option value='' selected>---Select---</option>";
					var html="";
					$.each(data, function(index, value) {

						html=html+"<option  value="+value.name+">"+value.name+"</option>";
					});					 
					$('#addressee').empty().append(html);					
				}
				else
				{						
					$('#addressee').empty().append("<option value='1'>select</option>");

				}
				hideAjaxLoader();
			},error: function(error)
			{
				hideAjaxLoader();

			}
		});

	};
}



function downloadletter()
{
	$("#downloadletter").submit();
}
//download letter on clicking row letter no
function downloadletterByDocid(id)
{
	$("#docid_download").val(id);
	$("#downloadletter").submit();
}

