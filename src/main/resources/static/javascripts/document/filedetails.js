


    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $("#fixbreadcrumb").addClass('fixbreadcrumb');
            } else {
                $("#fixbreadcrumb").removeClass('fixbreadcrumb');
            }
        });
    }());

//========================DISPLAY LETTER====================START==================
	function displayLetter(id)
	 {    
	    
	    $("#lid").val(id);
	    $("#ldf").submit();

	 }
	function displayUploadedFile(id)
	 {    
	    
	    $("#lid1").val(id);
	    $("#ldf1").submit();

	 }
	//========================DISPLAY LETTER====================END==================
		//=======================DELETE DRAFT===================START==================
	function deleteDraft(id)
	 {    
		bootbox.confirm({
		    title: "Delete Draft",
		    message: "Do you want to delete?",
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
		    	 $("#noteid").val(id);
		    	 
		 	    $("#deletedraftnote").submit();
		 	    
		    		}
		    }
		});
	    
	   
	    

	 }
	//======================DELETE DRAFT==================END==================
	
		//=======================SUBMIT OBJECT===================START==================
	function submitObjectForm() {
		
		
			  var note_editor1 = CKEDITOR.instances['editor1'].getData();
			  if(note_editor1!="")
				  {
				  bootbox.confirm({
					   title: "Objection confirmation !",
					    message: "Do you want to send query ?",
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
					    		$("#note_object").val(note_editor1); 
								 
							     // $("#objectform").submit();
					    		}
					    }
					});
			  
				  }
			  else
				  {
				  bootbox.alert("Please Enter Note ?");
				  }
			
		
	}
	
	//=======================SUBMIT OBJECT===================START==================
	//=======================APPROVE / REJECT/DRAFT/SENDTO/MARKUP/MARKDOWN FILE ===================START==================
	 function submitForm(buttonType) {
		 if(buttonType=="APPROVE")
			 {
			 bootbox.confirm({
				    title: "File Approval",
				    message: "Do you want to approve file ?",
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
				    		 var note_editor1 = CKEDITOR.instances['editor1'].getData();
				    		 if(note_editor1=="")
				    			 {
				    			 bootbox.alert("Please write note !");
				    			 }
				    		 else
				    			 {
				    			 $("#noteApp").val(note_editor1);
				    			 $("#approvefile").submit();
				    			 }
				    		
				    		}
				    }
				});
		
			 }
		 else if(buttonType=="REJECT")
		 {
			 bootbox.confirm({
				    title: "File Reject",
				    message: "Do you want to reject file ?",
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
				    		 var note_editor1 = CKEDITOR.instances['editor1'].getData();
				    		 if(note_editor1=="")
				    			 {
				    			 bootbox.alert("Please write note !");
				    			 }
				    		 else
				    			 {
				    		 $("#rejectfile").submit();
				    			 }
				    		}
				    }
				});

		 }
		 
		 //draft data
		 else if(buttonType=="DRAFT")
			 {		
			  var note_editor1 = CKEDITOR.instances['editor1'].getData();
			  var corresupload = $(".corrDocs").map(function() {
			   	    return this.value;
			   	  }).toArray();				
			
			  if(note_editor1!="" && corresupload=="")
			  {				  
				  //save notesheet as draft
				 
				   bootbox.confirm({
					    title: "Save note as draft",
					    message: "Do you want to save note as Draft ?",
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
					    		//$("#bid").val(buttonType);
					    	
					    		$("#editor1_draft").val(note_editor1);			    		
					    		
					  		    $("#saveNotesheetAsDraftForm").submit();
					    		}
					    }
					}); 
		   
			  }
			  else if(note_editor1=="" && corresupload!="")
			  {	//upload correspondance doc
				 
				    bootbox.confirm({
					    title: "Upload document",
					    message: "Do you want to upload document ?",
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
					    		if(note_editor1=="")
					    			{
					    			note_editor1="empty";
					    			}
					    	
					    		 $("#corrnote").val(note_editor1);					    		
					    		 $("#actionTakenByDc").val(buttonType);
					  		  $("#uploadCorreForm").submit();
					    		}
					    }
					}); 
			  }
			  else if(note_editor1!="" && corresupload!="")
			  {	
				  //save Note & Upload documents				
				    bootbox.confirm({
					    title: "save Note & Upload Letter",
					    message: "Do you want to save Note & Upload Letter?",
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
					    		if(note_editor1=="")
				    			{
				    			note_editor1="empty";
				    			}
					    			 $("#corrnote").val(note_editor1);					    		
					    		 $("#actionTakenByDc").val(buttonType);
					  		  $("#uploadCorreForm").submit();
					    		}
					    }
					});
			  }
			  else
				  {
				  bootbox.alert("Please enter note or upload letter ?");
				  }
		 }
		
		 else if(buttonType=="SENDTO")
			 {
			 var draftcntid=$("#draftcntid").val();
			
				var dftsts=$("#draftStatus").val();
			
				 var noteEditor = CKEDITOR.instances['editor1'].getData();
				 if(noteEditor=="" && dftsts=="" && draftcntid=="")
				 {
				 bootbox.alert("Please Enter Note ?");
				 }
				 else if(noteEditor!="" && dftsts=="" && draftcntid=="")
				 {//create note and send	
				 
				 bootbox.confirm({
					    title: "Send File",
					    message: "Do you want to send file?",
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
					    		 $("#draftStatus").val("createAndsend");
					    		 
								 filesubmit(noteEditor);
					    		}
					    }
					});
				
				 }
				 else  if((noteEditor=="") && (dftsts=="Yes" || draftcntid!="Yes"))
			
					{
					 //only update all draft data and send note 
					  bootbox.confirm({
					    title: "Send Draft Note",
					    message: "Do you want to send Draft Note ?",
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
					    		$("#draftStatus").val("sendDraft");									
								 filesubmit(noteEditor);
					    		}
					    }
					});
				
					}
				else if(dftsts=="Yes" && noteEditor!="")
				{
					//bootbox.alert("If you have draft then you are not allow to send note.Please send draft only");
					//SEND BOTH NOTE AS WELL AS SEND EXISTING DRAFT
					 
					  bootbox.confirm({
						    title: "Send Note & Draft",
						    message: "Do you want to save and send Draft Note ?",
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
						    	 $("#issenddraftAndNoteSendto").val("Yes");
						    	 filesubmit(noteEditor);
									//filesubmit(noteEditor);
						    	// filesubmitMarkupMarkDown(noteEditor,"MARKUP");
						    		}
						    }
						}); 
					 //bootbox.alert("If you have draft then you are not allow to send note.Please send draft only");
				
				}
				
	 } 
		 else if(buttonType=="MARKUP")
		 {
			 
			 $("#formtype").val("MARKUP");
			 $("#actionTakenmd").val(buttonType);			
				var dftsts=$("#draftStatusmud").val();
				
				 var noteEditor = CKEDITOR.instances['editor1'].getData();
				
					
				if((noteEditor=="") && (dftsts=="Yes"))// || draftcntid!="Yes"
					{//only update all draft data and send noye 
				
					 bootbox.confirm("Do you want to send Draft Note ?", function(result)
							 { 
						 if(result==true)
							 {
							
							 $("#draftStatusmud").val("sendDraft");
							 filesubmitMarkupMarkDown(noteEditor,"MARKUP");
							 }
						 else
							 {						
							
							 }
							 });
					}
				else if(dftsts=="Yes" && noteEditor!="")
					
				{
				
			
					 
					  bootbox.confirm({
						    title: "Send Note & Draft",
						    message: "Do you want to save and send Draft Note ?",
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
						    	// $("#draftStatus").val("sendnoteSendotherdraft");
						    		$("#issenddraftAndNoteMud").val("Yes");
						    	 filesubmitMarkupMarkDown(noteEditor,"MARKUP");
						    		}
						    }
						}); 
				}
				else
					{
					
			 if(noteEditor=="")
				 {
				 bootbox.alert("Please Enter Note ?");
				 }
			 else
				 {//create note and send	
			
				 $("#draftStatusmud").val("createAndsend");
				 filesubmitMarkupMarkDown(noteEditor,"MARKUP");
				 }
			 
			 
			 }
			
		 
		 } 
	 else if(buttonType=="MARKDOWN")
	 {
		 $("#formtype").val("MARKDOWN");
		 $("#actionTakenmd").val(buttonType);
		 var draftcntid=$("#draftcntid").val();
			var dftsts=$("#draftStatusmud").val();
			 var noteEditor = CKEDITOR.instances['editor1'].getData();
			 $("#actionTakenmd").val(buttonType);
			
			if((noteEditor=="") && (dftsts=="Yes" || draftcntid!="Yes"))
				{//only update all draft data and send note  
				 bootbox.confirm("Do you want to send Draft Note ?", function(result)
						 { 
					 if(result==true)
						 {
						 $("#draftStatusmud").val("sendDraft");
						 filesubmitMarkupMarkDown(noteEditor,"MARKDOWN");
						 }
					 else
						 {
					
						 
						 }
						 });
				}
			else if(dftsts=="Yes" && noteEditor!="")
			{//only update  draft data and send note 
						 
				  bootbox.confirm({
					    title: "Send Note & Draft",
					    message: "Do you want to save and send Draft Note ?",
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
					    	// $("#draftStatusmud").val("sendnoteSendotherdraft");
					    		$("#issenddraftAndNoteMud").val("Yes");
					    		
					    	 filesubmitMarkupMarkDown(noteEditor,"MARKDOWN");
					    		}
					    }
					}); 
			}
			else
				{
		 if(noteEditor=="")
			 {
			 bootbox.alert("Please Enter Note ?");
			 }
		 else
			 {//create note and send
			
			 $("#draftStatusmud").val("createAndsend");
			 filesubmitMarkupMarkDown(noteEditor,"MARKDOWN");
			 }
		 
		 
		 }
	 }
		// 
	 else if(buttonType=="QUERY")
	 {
		 
		 $("#formtype").val(buttonType);
		 $("#actionTakenmd").val(buttonType);			
			var dftsts=$("#draftStatusmud").val();
			
			 var noteEditor = CKEDITOR.instances['editor1'].getData();
			
				
			if((noteEditor=="") && (dftsts=="Yes"))// || draftcntid!="Yes"
				{//only update all draft data and send noye as query
			
				 bootbox.confirm("Do you want to send Draft Note as Query?", function(result)
						 { 
					 if(result==true)
						 {
						
						 $("#draftStatusmud").val("sendDraft");
						 filesubmitMarkupMarkDown(noteEditor,buttonType);
						 }
					 else
						 {						
						
						 }
						 });
				}
			else if(dftsts=="Yes" && noteEditor!="")
				
			{
			
		
				 
				  bootbox.confirm({
					    title: "Send Note & Draft as Query",
					    message: "Do you want to save and send Draft Note as Query?",
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
					    	// $("#draftStatus").val("sendnoteSendotherdraft");
					    		$("#issenddraftAndNoteMud").val("Yes");
					    	 filesubmitMarkupMarkDown(noteEditor,buttonType);
					    		}
					    }
					}); 
			}
			else
				{
				
		 if(noteEditor=="")
			 {
			 bootbox.alert("Please Enter Query Note ?");
			 }
		 else
			 {//create note and send as query	
		
			 $("#draftStatusmud").val("createAndsend");
			 filesubmitMarkupMarkDown(noteEditor,buttonType);
			 }
		 
		 
		 }
		
	 
	 } 
		 
		
	 }
		
		 //COMMON FUNCTION
		 function filesubmitMarkupMarkDown(noteEditor,type)
		 {
			 var selecteduser ="";
		
			 $("#notesheetmud").val(noteEditor);
			
			
			 if(type=="MARKUP")
				 {
				
				 selecteduser = $(".checkboxmarkup:checked").map(function() {
				   	    return this.value;
				   	  }).toArray();
		
				 $("#chkmud").val(selecteduser);
				
				 }
			 else if(type=="MARKDOWN")
			 {
				 
			 selecteduser = $(".checkboxmarkdown:checked").map(function() {
			   	    return this.value;
			   	  }).toArray();
			
			    $("#chkmud").val(selecteduser);
			
			 }
			 else if(type=="QUERY")
			 {
				 
			 selecteduser = $(".checkboxquery:checked").map(function() {
			   	    return this.value;
			   	  }).toArray();
			
			    $("#chkmud").val(selecteduser);
			
			 }
			 else
				 {
				 
				 }
			
			
	
		 
		  
		  if(selecteduser=="" ||selecteduser.length==0)
			{
			bootbox.alert("Please choose at least one employee");
			}
		 else
			 {
			
			 $("#markupdownform").submit();
			 }
		 }
		
		
	//======================APPROVE / REJECT/DRAFT/SENDTO/MARKUP/MARKDOWN FILE ===================END==================
		
		
		
		function filesubmit(noteEditor)
		 
		 {
			 
		
			 $("#notesheet").val(noteEditor);
			 var ofcid=$("#ofclstSendTo").val();
			 var selectedrole = $(".checkboxData:checked").map(function() {
			   	    return this.value;
			   	  }).toArray();
			
		var dept=$("#deptlstSendTo").val();
		
	
				var div=$("#divSendTo").val();
			 if(ofcid=="")
			 {
			 bootbox.alert("Please select Office");
			 }
		 
		 else if(ofcid=="HO" && dept=="")
		{
		bootbox.alert("Please select Department");
		}
		else if(ofcid=="Division" && div=="")
		{
			bootbox.alert("Please select Division");
		}
		  
		 else if(selectedrole=="" ||selectedrole.length==0)
			{
			bootbox.alert("Please choose at least one employee");
			}
		 else
			 {
			 $("#sendtoform").submit();
			 }
		 }	 
	//======================GET ALL EMP  FOR SEND TO===================START==================
		
		function getallEmpBySendTo(ofctype){
			showAjaxLoader();
			var deptid=$("#deptlstSendTo").val();
			
			var ofcid=$("#OfficeSendTo").val();
			
					var trHTML='';					
				   	$.ajax({
				 	      url : './getallEmpBySendTo',
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
					 	 		
					 	 	
					 	 			trHTML +='<tr><td>'+(i+1)+'</td><td>'+value.designation+'</td><td>'+value.name+'</td><td><div class="radio"><label><input type="radio" value="'+value.rollid+'/'+value.userid+'"	class="checkboxData" name="chkSendTo"></label></div></td></tr>';
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
				 	    		//bootbox.alert("No Department");
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
		//======================GET ALL EMP  FOR SEND TO===================END==================
			//=====================CLEAR DATA====WHILE OPENING THE MODAL===============START==================
	function clearSendto()
	{
		
		document.getElementById("sendtoform").reset();
		$('#tbody_SendTo').empty();
		$("#divSendTo_div").hide();
		$("#deptlstSendTo_div").hide();
		
	}
	//=====================CLEAR DATA====WHILE OPENING THE MODAL===============END==================
//=============OPEN MODAL FOR SEND TO===============
	function openSendToModal()
	{
		clearSendto();
		$("#sendto").modal("show");
		
	}
	
		//====================LOAD NOTESHEET=======BY NOTE ID========START==================
	function loadNotesheetByid(noteid)
	{
		
		bootbox.confirm({
		    title: "Edit",
		    message: "Do you want to edit?",
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
		    		showAjaxLoader();
		    	  	$.ajax({
		  	 	      url : './getNotesheetByid',
		  	 	      type:'GET',
		  	 	     data : ({			 	    
		  	 	    	'noteid':noteid,
		  	 	    	 }),
		  	 	      cache:false,
		  	 	      asynch:false,
		  	 	      success : function(response) 
		  	 	      {
		  	 	    	 var obj=jQuery.parseJSON(response);		
		  		 	 	 $.each(obj, function(i, value) 
		  					    {
		  		 	 		
		  		 	    	 CKEDITOR.instances['editor1'].setData(value.notedata);
		  		 	     	
		  		 	    	if(value.id!="")
		  		 	    		{
		  		 	    		$("#notesheetid").val(value.id);
		  		 	    		$("#notesheetidSN").val(value.id);
		  		 	    		}
		  		 	    	
		  		 	    	
		  		 	    	$("#takeaction").text("(Edit)");
		  		 	    	$("#draftStatus").val("Yes");
		  		 	        $('#btn_save_').text('Update');
		  		 	    	$("#notesheemudtid").val(value.id);
		  		 	    	
		  			    	}); 
		  		 	 	hideAjaxLoader();
		  	 	      },
		  		   	error:function(transport)
		  		    {
		  		   		//bootbox.alert("No Division Found");
		  		   	hideAjaxLoader();
		  		    }
		  	 	  
		  	 	  });
		    		}
		    }
		});
				
	 

 	
	}
	//====================LOAD NOTESHEET=======BY NOTE ID========END==================
function selectQuery(id)
{
	
	$(".fa fa-question-circle").css("color","red");
	$("#query"+id).css("color","#00cc11");
}


	
function resetData()
{
	
	
	$("#viewFileForm").submit();
	
}
//====================GET ALL EMP BY MARKDOWN======START==================
//get all Emp By MarkDown
function getallEmpByMarkDown(){
	showAjaxLoader();
	var deptid=$("#deptmarkdown").val();
	var ofcid=$("#ofclstMarkdown").val();
	var divid=$("#divmarkdown").val();
			var trHTML='';					
		   	$.ajax({
		 	      url : './getallEmpByMarkDown',
		 	      type:'GET',
		 	     data : ({			 	    
		 	    	'deptid':deptid,
		 	    	'ofcid':ofcid,
		 	    	'divid':divid,
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
			 	 		
			 	    	trHTML +='<tr><td>'+(i+1)+'</td><td>'+value.designation+'</td><td>'+value.name+'</td><td><input type="checkbox"	value="'+value.rollid+'" class="checkboxMd" name="chkmarkdown"></td></tr>';
			 	    	cnt++;
						    });
			 	 	 if(cnt>0)
			 	 		 {
			 	 		 
			 	 		 }
			 	 	 else
			 	 		 {
			 	 		trHTML='<tr><td></td><td>No Record Found</td><td></td><td></td></tr>';
			 	 		 }
			 	 	$('#tbody_markdown').empty().append(trHTML); 
			 	   	 }
		 	    	else{
		 	    		bootbox.alert("No Department");
		 	    	}
		 	    	hideAjaxLoader();
		 	      },
			   	error:function(transport)
			    {
			   		//bootbox.alert("No Division Found");
			   		hideAjaxLoader();
			    }
		 	  
		 	  });
		
	}  
//====================GET ALL EMP BY MARKDOWN=====END==================
//====================GET ALL EMP BY MARKUP======START==================
function getallEmpByMarkUp(){	
	showAjaxLoader();
	var deptid=$("#deptlstMarkup").val();
	var ofcid=$("#ofclstMarkup").val();
	var divid=$("#divmarkup").val();
	
			var trHTMLMarkUp='';					
		   	$.ajax({
		 	      url : './getallEmpByMarkUp',
		 	      type:'GET',
		 	     data : ({			 	    
		 	    	'deptid':deptid,
		 	    	'ofcid':ofcid,
		 	    	'divid':divid,
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
			 	 		
			 	 		trHTMLMarkUp +='<tr><td>'+(i+1)+'</td><td>'+value.designation+'</td><td>'+value.name+'</td><td><input type="checkbox"	value="'+value.rollid+'" class="checkbox" name="chkmarkup"></td></tr>';
			 	 		cnt++;
						    }); 
			 	 	 
			 	 	 if(cnt>0)
		 	 		 {
		 	 		 
		 	 		 }
		 	 	 else
		 	 		 {
		 	 		trHTMLMarkUp='<tr><td></td><td>No Record Found</td><td></td><td></td></tr>';
		 	 		 }
			 		 $('#tbody_markup').empty().append(trHTMLMarkUp); 
			 		
			 	   	 }
		 	    	else{
		 	    		//bootbox.alert("No Department");
		 	    	}
		 	    	hideAjaxLoader();
		 	      },
			   	error:function(transport)
			    {
			   		hideAjaxLoader();
			   		//bootbox.alert("No Division Found");
			    }
		 	  
		 	  });
		
	}
//====================GET ALL EMP BY MARKUP======END==================
function clear()
{

document.getElementById("markdownform").reset();
document.getElementById("markupform").reset();
$('#tbody_markup').empty();
$('#tbody_markdown').empty();
}
function openmarkupmodal()
{
$("#markup").modal("show");
clear();
}
function openmarkdownmodal()
{
$("#markdown").modal("show");
clear();
}
function openquerymodal()
{
$("#querymodal").modal("show");
//clear();
}
function openobjectmodal()
{
$("#objectmodal").modal("show");
//clear();
}

//====================GET ALL DEPT BY OFC======START==================
function getallDeptByOffice(ofcid) {
	
	
if(ofcid=="")
	{
	$('#deptlstSendTo').empty();
	$("#deptlstSendTo_div").hide();
	$('#tbody_SendTo').empty();
	}
else
	{
	$.ajax({
			url : 'getallDeptByOffice.htm',
			dataType: "json",
			data : {
				ofcid : ofcid,
			},
			success : function(response) 
			{
			
				 var data=response;
				 var html="<option value=''>---Select---</option>"
				 $.each(data, function(index, value) {
					
					  html=html+"<option value="+value.id+">"+value.name+"</option>";
				 });
				 
				 $('#deptlstSendTo').empty().append(html);
				 hideAjaxLoader();
			},
			error:function(transport)
		    {
		   		hideAjaxLoader();
		   		//bootbox.alert("No Division Found");
		    }
	});
	$("#deptlstSendTo_div").show();
	}
}
//====================GET ALL DEPT BY OFC======END==================
//===================CHECK START==================
	function chackConfi()	
	{
		
		 var chkConf = $(".checkboxData:checked").map(function() {
		   	    return this.value;
		   	  }).toArray();
		 var constatus="N";
		 if(chkConf!="" || chkConf!=null)
			 {
			 constatus="Y";
			 }
		 else
			 {
			 constatus="N";
			 }
		 $("#isconfigquery").val(constatus);
		 $("#isconfigMud").val(constatus);
		 $("#isconfigSendTo ").val(constatus);
		 
	}
	//===================CHECK START==================
		//===================CHECK URGENT START==================
function chackUrgent()	
{
	 var chkurgent = $(".checkurgent:checked").map(function() {
	   	    return this.value;
	   	  }).toArray();
	 var chk="N";
	 if(chkurgent!="")
		 {
		 chk="Y";
		 }
	 else
		 {
		 chk="N";
		 }
	
	 $("#isurgentMud").val(chk);
	 $("#isurgentSendTo ").val(chk);
	
}
//===================CHECK URGENT END==================
//===================LAND =======================START========================================================================
function prepareLandSchdule(landId){
		var Id = landId;
		document.getElementById("scheduleId").value = Id;
		
	    bootbox.confirm ({
	    	message: "Do you want to Schedule?",
	    	callback: function (proceed)
	    	{
	    		if(proceed) 
	    		{
	    			$('#landSchedule').submit();
	    		}
	    	}
	    });
	}
	function prepareWaterDemandNote(landId){
		var Id = landId;
		document.getElementById("waterDemandId").value = Id;
		
	    bootbox.confirm ({
	    	message: "Do you want to Prepare?",
	    	callback: function (proceed)
	    	{
	    		if(proceed) 
	    		{
	    			$('#waterDemandNote').submit();
	    		}
	    	}
	    });
	}
	
	function prepareDemandNote(landId){
		var Id = landId;
		document.getElementById("demandId").value = Id;
		
	    bootbox.confirm ({
	    	message: "Do you want to Prepare?",
	    	callback: function (proceed)
	    	{
	    		if(proceed) 
	    		{
	    			$('#demandNote').submit();
	    		}
	    	}
	    });
	}
	
	function prepareAllotment(landId){
		var Id = landId;
		document.getElementById("allotmentId").value = Id;
		
	    bootbox.confirm ({
	    	message: "Do you want to Prepare?",
	    	callback: function (proceed)
	    	{
	    		if(proceed) 
	    		{
	    			$('#allotment').submit();
	    		}
	    	}
	    });
	}
	
	 function ViewScorecard1(){

		 

		 $('#showScorecard1').submit();
		 }
	 
function ViewScorecard2(){

		 

		 $('#showScorecard2').submit();
		 }
function ViewScorecard3(){

	 

	 $('#showScorecard3').submit();
	 }


function viewWaterDemand(){
		 $('#waterDemandPDF').submit();
		 }
	 
//===================LAND =======================END========================================================================
//========================DOCUMENT VERIFICATION====================START==================
function loadVerifyDocId(id)
 {
	$("#docid_v").val(id);
	$("#verifydoc").modal("show");
 }
 function loadRejectDocId(id)
 {
	 $("#docid_r").val(id);
	 $("#rejectdoc").modal("show");
 }
function actionOnDoc(data)
{
	
	if(data=="VERIFY")
		{
		
		bootbox.confirm({
		    title: "Verification of document !",
		    message: "Do you want to Verify?",
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
		    		var remark_v=$("#remarksV").val();
		    		if(remark_v=="")
		    			{
		    			bootbox.alert("Please Enter the remarks");
		    			}
		    		else{
		    			
		    			$('#verifydocForm').submit();
		    		}
		    		}
		    }
		});
	
		
		}
	else if(data=="REJECT")
		{
		
		bootbox.confirm({
		    title: "Rejection of document !",
		    message: "Do you want to Reject?",
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
		    		var remark_r=$("#remarksR").val();
		    		if(remark_r=="")
		    		{
		    		bootbox.alert("Please Enter the remarks");
		    		}
		    	else{
		    		$('#rejectdocForm').submit();
		    	}
		    		}
		    }
		});
		
	
		}
	}
//========================DOCUMENT VERIFICATION====================END==================
//========================PREVIEW NOTESHEET===============START==================
$("#btnpreview").click(function(){
	$('#notepreviewform').submit();
	/* bootbox.confirm({
	    title: "Preview note sheet",
	    message: "Do you want to Preview?",
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
	    		$('#notepreviewform').submit();
	    		}
	    }
	}); */
	
	
	});
//========================PREVIEW NOTESHEET===============END==================
 /* function generateNotePdf()
 {
	 var notepdflst = $(".chekboxNote:checked").map(function() {
	  	    return this.value;
 	  }).toArray();
	 alert(notepdflst);
	 if(notepdflst=="")
		 {
		 alert("Please choose atleast one note..");
		 }
	 else
		 {
		 
		 $("#noteidlst").val(notepdflst);
			$('#notepdfform').submit();
		 }
	 
	
 }
 $("#btnprint").click(function(){
	 generateNotePdf();
	    
	}); */
 


//====================NOTE SHEET ZOOMIN/ZOOMOUT===========START===============================
var count=0;
$(document).ready(function(){
	$("#btnzoomin").click(function(){
	    $("#panelfullscreen").addClass("panelfullscreen");
	    $("body").css("overflow-y" , "hidden");
	    count++;
	    $("#btnzoomin").hide();
	    $("#btnzoomout").show();
	    $("#btnprint").show();
	    
	});
	$("#btnzoomout").click(function(){		
		
	    $("#panelfullscreen").removeClass("panelfullscreen");
	    $("body").css("overflow-y" , "auto");	    
	    count=0;   
	    
	    $("#btnwritenote_in").show();
	    $("#btnzoomin").show();
	    $("#btnzoomout").hide();
	    $("#btnprint").hide();
	    $("#btnwritenote_out").hide();
	  
	    
	});
	
	$("#btnwritenote_in").click(function(){
		var editor11 = CKEDITOR.instances['editor1'].getData();		 
	    CKEDITOR.instances.editor_write_note.setData(editor11);
	    $("#panelfullscreen").addClass("panelfullscreen_edit panelfullscreen");
	    $("body").css("overflow-y" , "hidden");
	    count++;
	    $("#btnwritenote_in").hide();
	    $("#btnwritenote_out").show();
	    $("#btnzoomin").hide();
	    
	});
	$("#btnwritenote_out").click(function(){		
		var editor_write_note1 = CKEDITOR.instances['editor_write_note'].getData();		 
	    CKEDITOR.instances.editor1.setData(editor_write_note1);
	    $("#panelfullscreen").removeClass("panelfullscreen_edit panelfullscreen");
	    $("body").css("overflow-y" , "auto");	    
	    count=0;
	    $("#btnzoomin").show();
	    $("#btnwritenote_in").show();
	    $("#btnwritenote_out").hide();
	    $("#btnzoomout").hide();
	    showzoomoutnote();
	});	
	
	$("#zoom_corespondense").hide();	
	$("#btn_zoom_corespondense").click(function(){
		$("#zoom_corespondense").show();
		$("#zoom_notesheet").hide();
		$("#btn_zoom_notesheet").parent().removeClass("active");
		$("#btn_zoom_corespondense").parent().addClass("active");
	    
	});
	$("#btn_zoom_notesheet").click(function(){
		showzoomoutnote();
	});
	function showzoomoutnote()
	{
		$("#zoom_corespondense").hide();
		$("#zoom_notesheet").show();
		$("#btn_zoom_notesheet").parent().addClass("active");
		$("#btn_zoom_corespondense").parent().removeClass("active");

	}	
	
});
//====================NOTE SHEET ZOOMIN/ZOOMOUT===========END===============================
//===================CHECK FILE TYPE (PDF,JPG)=======AND SIZE OF UPLOADED DOCUMENTS====START===============================

function checkPdfJpegfiles(id)
{
	//|| ext[1]=="JPEG" || ext[1]=="jpeg" || ext[1]=="PNG" || ext[1]=="png" ||
	var flag=0;
	 var myfile=$('#corresuploaddoc'+id).val();			
           var ext = myfile.split('.');
         
              if(ext[1]=="pdf" || ext[1]=="jpg" || ext[1]=="JPG"){
           	flag=1;
           }
           else{
        	   flag=0;
           	bootbox.alert("Please select pdf or image(jpg) file only");
           	document.getElementById("corresuploaddoc"+id).value = "";
           }
              
              if(flag==1)
            	  {
            	  checkFileSize(id);
            	  }      
   
}
//===================CHECK FILE TYPE (PDF,JPG)=======AND SIZE OF UPLOADED DOCUMENTS====END===============================
//================VIEW CORRESPONDANCE DOCUMENTS====START===============================
function viewCorresDoc(coid)
{
	$("#corid").val(coid);
	$("#displaycorrdocForm").submit();
	
}
//================VIEW CORRESPONDANCE DOCUMENTS====END===============================
//=============ADD MORE LETTER====START===============================
var count=2;
$("#plus").click(function()
{
	
var htmldata='<tr id="row'+count+'"><td>'+count+'</td><td><input type="text" class="form-control" id="subject" name="subject"></td><td><input type="text" class="form-control" name="letterno"></td><td><div class="datepicker_con"><input type="text" class="form-control jqueryNDatePicker" placeholder="dd/mm/yyyy" id="date'+count+'" name="date"></div></td></td><td><input type="file" onchange="checkPdfJpegfiles();"  id="corresuploaddoc'+count+'" class="corrDocs form-control" name="files"><span class="text-danger">(Upload jpg or pdf files less than 10MB)</span></td><td><button type="button"  onclick="deleterow('+count+');" class="btn btn-xs btn-danger"><i class="fa fa-minus"></i></i></button></td></tr>';

$("#tbody").append(htmldata);
count++;
});
function deleterow(id)
{

$($("#row"+id).closest("tr")).remove();

} 
//=============ADD MORE LETTER====END===============================
	//=============CHECK DOCUMENTS SIZE DYNAMICALLY====START===============================
function checkFileSize(id)
{
	
   var fup = document.getElementById("#corresuploaddoc"+id);
   var fileName = fup.value;
   var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
   
	if (typeof ($("#corresuploaddoc"+id)[0].files) != "undefined") {
        var size = parseFloat($("#corresuploaddoc"+id)[0].files[0].size / 1024).toFixed(2);
       // alert(size + " KB.");
       //3070 means 3*1024=3070kb=3mb
       if(size>10240)
    	   {
    	   bootbox.alert('Please choose file less than 10MB');
    	  document.getElementById("#corresuploaddoc"+id).value = "";
    	   }
    } else {
    	bootbox.alert("This browser does not support HTML5.");
    }
   
}
//=============CHECK DOCUMENTS SIZE DYNAMICALLY====END===============================

 
$(function () {
	CKEDITOR.replace('editor1');
	CKEDITOR.replace("object_note");
    CKEDITOR.replace("editor2",
    		{
    		     height: 350
    		});
   CKEDITOR.replace('editor_write_note',
   		{
	     height: 360
	});
   
   
});
 

	$("html").removeClass("fixed").addClass("viewfile");


 			//=============VIEW CORRESPONDANCE DOCS IN PDF===START===============================
 		    function viewCorresDocInPdf(corresponid)
 		    {
 		    	 
 		    	$("#corresponid").val(corresponid);
 		    	$("#gencorpdfForm").submit();
 		    }
 		    //========Added By Ipsita================
 		   function viewResponseDocInPdf(corresponid)
		    {
		    	$("#correspondenceid").val(corresponid);
		    	$("#genResponseForm").submit();
		    }
 		    //========Ended By Ipsita===============
 			//=============VIEW CORRESPONDANCE DOCS IN PDF===END===============================
 			//=============LOAD CORRESP. LETTER BY ID===START===============================
 		   function loadCorresLetterById(corresid)
		    {
 			  showAjaxLoader();
 			  $("#letterapprove").show();
 			  document.getElementById("btnletterSave").value="Update";
 			  $("#datacontent").empty();
 				$.ajax({
		  	 	      url : './getLettersContentByid',
		  	 	      type:'GET',
		  	 	     data : ({			 	    
		  	 	    	'corresid':corresid,
		  	 	    	 }),
		  	 	      cache:false,
		  	 	      asynch:false,
		  	 	      success : function(response) 
		  	 	      {
		  	 	    	  if(response!="")
		  	 	    		  {
		  	 	    		  
		  	 	    	 var obj=jQuery.parseJSON(response);		
		  		 	 	 $.each(obj, function(i, value) 
		  					    {
		  		 	 		if(value.lettercontent!="")
		  		 	 			{
		  		 	 		    CKEDITOR.instances['editor2'].setData(value.lettercontent);
		  		 	 		
		  		 	 			}		  		 	 		
		  		 	 	
		  		 	 		else
		  		 	 			{
		  		 	 		bootbox.alert("No Data Found");
		  		 	 	 CKEDITOR.instances['editor2'].setData(" ");
		  		 	 			}
		  		 	 		
		  		 	 	$("#correspondenceId").val(value.correspondenceId);
		  		 	 	 
		  		 	 	$("#draftNo").val(value.draftNo);
		  		 	 	$("#letterno").val(value.lnumber);
		  		 	 $("#date").val(value.cdate);
		  		     	$("#subject").val(value.subject);
		  		 	    	
		  		 	 	$("#ckeditormodal").modal("show");
		  		 	 $("#corrid").val(value.correspondenceId);//for approve letter
		  			    	}); 
		  	 	    		  }
		  	 	    	hideAjaxLoader();
		  	 	    	
		  	 	      },
		  		   	error:function(transport)
		  		    {
		  		   	hideAjaxLoader();
		  		   	 CKEDITOR.instances['editor2'].setData(" ");
		  		    }
		  	 	  
		  	 	  });		    
		    	
		    }
 		//=============LOAD CORRESP. LETTER BY ID===END===============================
 			
 			//============CREATE LETTER==START===============================
 		   $("#btncreateletter").click(function()
 				   {
 			  CKEDITOR.instances['editor2'].setData(" ");
 			  $("#datacontent").empty();
 			 document.getElementById("btnletterSave").value="Save";			
 			$("#letterapprove").hide();
 			  $("#ckeditormodal").modal("show");
 				   });
 		//============CREATE LETTER==END===============================
 
 			
 			
 			
 			function getTextAsData() {
				
 				var objEditor = CKEDITOR.instances["editor2"];
 				var q = objEditor.getData();
 			 
 			
			}
 			
 			
 
 		//==============PRINT DRAFT LETTER==================START===========
 			 $(function () {
						     $("#btnprint").click(function () {
						    	
						    	 var contents =$("#").html();
						    		
						        var htmllayout='<div class="panel-body" id="noteContent"><div class="col-md-12"><div class="notesheet_paper"><div class="single_notesheet_paper"><div class="np_left"><img src="resources/images/logo_black.jpg" class="img-responsive"></div><div class="np_right"><h1 class="notesheet_heading">NOTE SHEET</h1></div></div>'+contents+'</div></div></div>';
						         var frame1 = $('<iframe />');
						         frame1[0].name = "frame1";
						         frame1.css({ "position": "absolute", "top": "-1000000px" });
						         $("body").append(frame1);
						         var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
						         frameDoc.document.open();
						         //Create a new HTML document.
						         frameDoc.document.write('<html><head><title>DIV Contents</title>');
						         frameDoc.document.write('</head><body>');
						         //Append the external CSS file.
						         frameDoc.document.write('<link rel="stylesheet" href="resources/vendor/bootstrap/css/bootstrap.css">');
						         frameDoc.document.write('<link rel="stylesheet" href="resources/stylesheets/theme.css">');
						         frameDoc.document.write('<link rel="stylesheet" href="resources/stylesheets/theme-custom.css">');
						        
						
						         //Append the DIV contents.
						         frameDoc.document.write(htmllayout);
						         frameDoc.document.write('</body></html>');
						         frameDoc.document.close();
						         setTimeout(function () {
						             window.frames["frame1"].focus();
						             window.frames["frame1"].print();
						             frame1.remove();
						         }, 500);
									 
								
								 
						     });
						 });
 			//==============PRINT DRAFT LETTER==================END===========
 				
 				//ADD ENCLOSURE START
 				function addEncloRow(tableID) {
		var table = document.getElementById(tableID);

		var rowCount = table.rows.length;
		var row = table.insertRow(rowCount);

		var colCount = table.rows[0].cells.length;

		for(var i=0; i<colCount; i++) {

			var newcell	= row.insertCell(i);

			newcell.innerHTML = table.rows[1].cells[i].innerHTML;
			//alert(newcell.childNodes);
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
				case "select-one":
					newcell.childNodes[0].selectedIndex = 0;
					break;		
			}
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
	//view/add enclosure in file
	function setValueEnclosed(letter,correspid,status,type){
	
		/*try
		{*/
        var headingsms="All Enclosures";
		if(type=="OBJECT" || type== "RESPONSE")
			{
			headingsms="All Documents";
			$("#entype").hide();
			$("#enname").hide();

			$("#enclo_doclst").hide();
			$("#object_doclst").show();
			}
		else
			{
			$("#entype").show();
			$("#enname").show();
			
			$("#enclo_doclst").show();
			$("#object_doclst").hide();
			
			}
		
		document.getElementById("eletterNo").value = letter;
		$("#correspid").val(correspid);
		if(status!="PENDING")
		{
			$("#uploadviewspanid").text(headingsms);
			$("#addenclosureDiv").hide();
		}
		else
		{
			$("#addenclosureDiv").show();
		}
		
		
		
		
		if(type=="OBJECT" || type== "RESPONSE")
		{
			if(type=="OBJECT")
				{
				type="OBJECTION"
				}
		
			getAllObjectResponseAttachment(correspid,type)
		}
		else
			{
			getallEnclosureByCorrespondanceid(correspid,type);
			}
		
		/*}
		catch(e)
		{
			console.log("some resource not found in setValueEnclosed of filedetails.js");
		}*/
	}
	
	function submitEncloserForm(){
		$("#encloseFile").submit();
	}
	
	//====================GET ALL ENCLOUSURE======START==================
	function getallEnclosureByCorrespondanceid(correspondanceid,type){
		$("#tbody_object").html(""); 
		$("#tbody_enclo").html("");
		showAjaxLoader();
				var html='';
				var htmlobj='';
			   	$.ajax({
			 	      url : './getallEnclosureByCorrespondanceid.htm',
			 	      type:'GET',
			 	     data : ({			 	    
			 	    	'correspondanceid':correspondanceid,
			 	    	
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
				 	   		
						 	   		 if(type=="OBJECT" || type=="RESPONSE")
						 	   		 {
						 	   			 
						 	   			 htmlobj+='<tr><td>'+(i+1)+'</td><td>'+value.docFilename+'</td><td><a href="#" class="btn btn-success btn-xs"  onclick="downloadEnclosure('+value.enclosureMapId+');"><i class="fa fa-download" aria-hidden="true"></i></span></td></tr>';
		
						 	   		 }
						 	   	
						 	   		 else
						 	   		 {
						 	   			 html +='<tr><td>'+(i+1)+'</td><td>'+value.enclosuretype+'</td><td>'+value.enclosureName+'</td><td><a href="#" class="btn btn-success btn-xs"  onclick="downloadEnclosure('+value.enclosureMapId+');"><i class="fa fa-download" aria-hidden="true"></i></span></td></tr>';
		
						 	   		 }

				 	   	        	 cnt++;
				 	   			 });
				 	   	 
				 	   	
				 	 	 
				 	   	 }
			 	    	 else
			 	    		 {
			 	    		htmlobj +='<tr><td colspan="4"></td></tr>';
			 	    		bootbox.alert("No Record Found");
			 	    		 }
			 	    	// alert("htmlobj============"+htmlobj);
			 	    	if(type=="OBJECT" || type=="RESPONSE")
			 	    		 {
			 	    		$("#tbody_object").empty().append(htmlobj);
			 	    		 }
			 	    	 else
			 	    		 {
			 	    		$("#tbody_enclo").empty().append(html);
			 	    		 }		 	
			 	
			 	
			 	   hideAjaxLoader();
			 	      },
				   	error:function(error)
				    {
				   		hideAjaxLoader();
				    }
			 	  
			 	  });
			
		}
	function getAllObjectResponseAttachment(correspid,type){
		$("#tbody_object").html("");
		showAjaxLoader();
				var html='';
				var htmlobj='';
			   	$.ajax({
			 	      url : './getAllObjectResponseAttachment.htm',
			 	      type:'GET',
			 	     data : ({			 	    
			 	    	'correspondanceid':correspid,
			 	    	'type':type,
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
				 	   			 htmlobj+='<tr><td>'+(i+1)+'</td><td>'+value.docFilename+'</td><td><a href="#" class="btn btn-success btn-xs"  onclick="downloadEnclosure('+value.enclosureMapId+');"><i class="fa fa-download" aria-hidden="true"></i></span></td></tr>';
		
				 	   	        	 cnt++;
				 	   			 });
				 	   	 
				 	   	
				 	 	 
				 	   	 }
			 	    	 else
			 	    		 {
			 	    		htmlobj +='<tr><td colspan="4"></td></tr>';
			 	    		bootbox.alert("No Record Found");
			 	    		 }
			 	    
			 	    		$("#tbody_object").empty().append(htmlobj);


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
 
		//============APPROVE LETTER===================START===============
	function approveLetter()
	{
		
		
		var editor2 = CKEDITOR.instances['editor2'].getData();	
	
	   
		$("#lettercontentAp").val(editor2);
		$("#approveletterfromfile").submit();
		
	}
			//============APPROVE LETTER===================end===============
		
			function viewCorrespondanceHistory(corrid)
			{
					
					
					showAjaxLoader();
					$.ajax({
			  	 	      url : './getCorrespondanceHistoryByParentId.htm',
			  	 	      type:'GET',
			  	 	     data : ({			 	    
			  	 	    	'corresid':corrid,
			  	 	    	 }),
			  	 	      cache:false,
			  	 	      asynch:false,
			  	 	      success : function(response) 
			  	 	      {
			  	 	    	var trHTML='';
			  	 	    	
			  	 	    	  if(response!="")
			  	 	    		  {
			  	 	    		  
			  	 	    	 var obj=jQuery.parseJSON(response);		
			  		 	 	 $.each(obj, function(i, value) 
			  					    {
			  		 	 		var type="";
			  		 	 	
			  		 	 		/*  if(value.corrType =="DRAFT")
			  		 	 			 {
			  		 	 			number_type=value.draftNo+"(DRAFT)";
			  		 	 			 }
			  		 	 		 else{
			  		 	 			number_type=value.letterno+"(LETTER)"
			  		 	 		 } */
			  		 	 		/* <td>'+number_type+'</td> */
			  		 	 		 if(value.corrType =="DRAFT")
			  		 	 			 {
			  		 	 			type="<span class='label badge label-danger'>DRAFT</span>";
			  		 	 			 }
			  		 	 		 else{
			  		 	 			
			  		 	 		type="<span class='label badge label-success'>LETTER</span>";
			  		 	 		 }
			  		 	 		var date_=(value.modifiedDate).substr(0, 10);
			  		 	 		trHTML +='<tr><td>'+(i+1)+'</td><td>'+type+'</td><td>'+value.name+'</td><td>'+date_+'</td><td><a class="btn btn-xs btn-circle btn-success btn-round" href="#"	onclick="viewCorresDocInPdf('+value.correspondenceId+');"><i class="fa fa-eye" aria-hidden="true"></i></a>	</td></tr>';
						 	 	
			  			    	}); 
			  	 	    		  }
							else{
								trHTML='<tr><td colspan="5">No Record Found</td></tr>';
							}
			  	 	      $("#tbody_corresp").empty().append(trHTML);
			  	 	      hideAjaxLoader();
			  	 	      },
			  		   	error:function(transport)
			  		    {
			  		   	hideAjaxLoader();
			  		    }
			  	 	  
			  	 	  });
					
					$("#viewLetterHistModal").modal("show");
			}
			
			//show correspondance according to corr type
			function showCorByType(type)
			{
			
				if(type=="ALL")
					{
					$("#tbl_corres .corType_all").show();
					$("#tbl_corres .corType_draft").hide();
					$("#tbl_corres .corType_letter").hide();
					$("#tbl_corres .corType_object").hide();
					}
				else if(type=="DRAFT")
					{
					$("#tbl_corres .corType_draft").show()
					$("#tbl_corres .corType_all").hide();
					
					$("#tbl_corres .corType_letter").hide();
					$("#tbl_corres .corType_object").hide();
					}
				else if(type=="LETTER")
				{
					$("#tbl_corres .corType_letter").show();
					$("#tbl_corres .corType_all").hide();
					$("#tbl_corres .corType_draft").hide();
					$("#tbl_corres .corType_object").hide();
					
				}
				else if(type=="OBJECT")
				{
					
					$("#tbl_corres .corType_object").show();
					$("#tbl_corres .corType_letter").hide();
					$("#tbl_corres .corType_all").hide();
					$("#tbl_corres .corType_draft").hide();
					
				}
				else
					{
					$("#tbl_corres .corType_all").show();
					$("#tbl_corres .corType_draft").hide();
					$("#tbl_corres .corType_letter").hide();
					$("#tbl_corres .corType_object").hide();
					}
				
			}
			//get department by office 
			function getallDeptByOfficeData(ofcid) {
			
				if(ofcid=="")
				{				
				$('#deptlstSendTo').empty();
				 $("#deptlstSendTo_div").hide();
				}
			else
				{
				showAjaxLoader();
				$.ajax({
						url : 'checkofficetype.htm',
						dataType: "json",
						data : {
							ofcid : ofcid,
						},
						success : function(response) 
						{
							/*var html="<option value=''>---Select---</option>"*/
						
						if(response!="")
							{
							$.each(response, function(index, value) {
								
								if(value.ofctype=="HO")
									{
									$("#deptlstSendTo_div").show();
									}
								else
								{
									 $("#deptlstSendTo_div").hide();
									
									 getallEmpBySendTo("DO");
								}
							
							 });
							
							
							}
						else
							{
							
							}
						hideAjaxLoader();
							 
						},
						error:function(error)
					    {
					   		hideAjaxLoader();
					    }
				});
			
			};
			}
			
			function cleardraft()
			{
				CKEDITOR.instances['editor2'].setData(" ");
			}
 
	
//###########################################################################################
	
			
			function saveStageApproval(fileId){		
			bootbox.confirm("Do you want to approve this Stage?",
					function(result) {
						if (result == true) {
							
							saveStageApproval2(fileId);
						}
					}) 
			}
			
	function saveStageApproval2(fileId){
		showAjaxLoader();
		$.ajax({
		url : './saveStateApproval',
		type : 'GET',
		data : ({
			fileId : fileId
			
		}),
		cache : false,
		asynch : false,
		success : function(response) {
			if (response == "saved") {
				
				bootbox.alert("This stage has approved successfully.");
				
			
			} else if(response == "completed"){
				
				bootbox.alert("Sorry,Your Approval process is already completed.");
			}else{
				bootbox.alert("Sorry,unable to Approve the file, Please try again.");
			}
			hideAjaxLoader();
		},
		error : function(transport) {
			hideAjaxLoader();
			bootbox.alert("Unable to perform this operation, please try again");
		}

	});
	}	
	
	function saveStageApprovalWater(fileId){		
		bootbox.confirm("Do you want to approve this Stage?",
				function(result) {
					if (result == true) {
						
						saveStageApprovalWater2(fileId);
					}
				}) 
		}
		
function saveStageApprovalWater2(fileId){
	showAjaxLoader();
	$.ajax({
	url : './saveStageApprovalForWater',
	type : 'GET',
	data : ({
		fileId : fileId
		
	}),
	cache : false,
	asynch : false,
	success : function(response) {
		if (response == "saved") {
			
			bootbox.alert("This stage has approved successfully.");
			
		
		} else if(response == "completed"){
			
			bootbox.alert("Sorry,Your Approval process is already completed.");
		}else{
			bootbox.alert("Sorry,unable to Approve the file, Please try again.");
		}
		hideAjaxLoader();
	},
	error : function(transport) {
		hideAjaxLoader();
		bootbox.alert("Unable to perform this operation, please try again");
	}

});
}			
//....START...........LAND PREVIEW(water Application) button onclick function.................	
function viewWaterApplication(applicationId){
	
	var Id = applicationId;
	document.getElementById("applicationIdPdf").value = Id;
	
	$('#generatePreview').submit();
	
}
//....END...........LAND PREVIEW(water Application) button onclick function.................	



//=======================SUBMIT QUERY===================START==================
function submitReplayForm() {
	

		  var note_editor1 = CKEDITOR.instances['editor1'].getData();
		  if(note_editor1!="")
			  {
				 bootbox.confirm({
					    title: "Replay to Query !",
					    message: "Do you want to replay ?",
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
					    		 $("#notesheetQR").val(note_editor1);
					    		
					    		 
							       $("#replayqueryform").submit();
					    		}
					    }
					});
					  
	
			  }
		  else
			  {
			  bootbox.alert("Please Enter Note ?");
			  }
	
}
//=======================SUBMIT QUERY===================END==================

/*  ##################################################   OBJECTION RELATED FUNCTIONS   ################################################### */
//OBJECTION VALIDATION
function submitobjectForm()
{
	var objectionNote = CKEDITOR.instances['object_note'].getData();
	if(objectionNote=="")
	{
		bootbox.alert("Objection Note cannot be blank !");
	}
	else
	{
		bootbox.confirm({
	        title : "Confirm",
	        message : "Are you sure you want to Object on this file ?",
	        buttons : {
	            confirm : {label : labelYes,className: "btn-success"},
	            cancel : {label : labelNo,className: "btn-warning"}
	        },
	        callback: function(result) 
	        {
	        	if (result == true) 
				{
	        		$("#objectForm").submit();
				}
	        }
		});
	}
}

function checkPreviousObjection(fileId)
{
	$.ajax({
		url : 'checkPreviousObjectionForSpecificFile.htm',
		type : 'GET',
		data : {
			fileId : fileId,
		},
		cache : false,
		asynch : false,
		success : function(response) 
		{
			if(response !="")
			{
				var obj=jQuery.parseJSON(response);		
				$.each(obj, function(i, value) 
				{
	 	 			if(value.result== "success")
	 	 			{
	 	 				openobjectmodal();
	 	 			}
					else if (value.result == "MAX_OBJECTION_EXCEEDED") 
					{
						bootbox.alert(value.noOfDaysAllowed);
					}
					else if (value.result == "MAX_DAYS_EXCEEDED") {
						bootbox.alert(value.noOfDaysAllowed);
					}
				}); 
			}
		},
		error : function(transport) {
			bootbox.alert("Unable to perform this operation, please try again");
		}
	});
}
/*  ##################################################   OBJECTION RELATED FUNCTIONS   ################################################### */


		