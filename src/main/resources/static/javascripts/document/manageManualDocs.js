
 
 $(document).ready(function(){
	   $(document).ajaxStart(function(){
	    	$("#wait").css("display", "block");
	        
	    });
	    $(document).ajaxComplete(function(){
	        $("#wait").css("display", "none");
	    });
	    
	});


 function getRoomWiseRack(roomId) {
 	
	$("#rackID").empty();
	$("#rackID").hide();
	 
 	$.ajax({
			url : 'getroomwiserack.htm',
			dataType: "json",
			data : {
				roomId : roomId,
			},
			success : function(response) 
			{
				 
				 var data=response;
				 var html="<option value=select>---Select---</option>"
				 $.each(data, function(index, value) {
					  html=html+"<option value="+value.rackId+">"+value.rackNumber+"  ,Total Cells--"+value.noOfCell+"</option>";
				 });
				 
				 $('#rackId').empty().append(html);
			}
 	});
		
	}
 
function getRackDetails(rackId,messageType,messageText) 
{
	var roomId=$("#roomID option:selected").val();
	if(typeof messageType == 'undefined')
	{
		messageType = "";
		messageText = "";
	}

	$.ajax({
			url : 'getrackdetails.htm',
			dataType: "json",
			data : {
				roomId : roomId,
				rackId : rackId,
				messageType : messageType,
				messageText : messageText,
			},
			success : function(response) 
			{
				 
				 var data=response;	  
				 var dataLength=data.length;
			    
				 if(dataLength>1)
					 {
					   var noOfCell=data[0].noOfCell;
					   var htmlTopShelf="<div class='col-xs-12 top shelf'></div>";
					    
					  
					   $("#rackID").show();
					   $("#rackID").empty().append(htmlTopShelf);
					   for(var i=1;i<=parseInt(noOfCell);i++)
					   {
							$("#rackID").append("<ul class='bk-list bk-list clearfix' onmouseup='filemovement(1)'   ondrop='drop(event,"+i+")' ondragover='allowDrop(event)' id='cell"+i+"'>");
							$("#rackID").append("</ul>");
							$("#rackID").append("<div class='col-xs-12 shelf'> <i data-toggle='tooltip' title='add' onclick=addFileToCell("+roomId+","+rackId+","+i+")></i><label>cell-"+i+"</label></div>");
					   }
					   
					  	    for(var j=1;j<=dataLength;j++)
							{
					  	    	if(typeof data[j] != 'undefined')
						    	$("#cell"+data[j].cellNo).append("<li id='li"+j+"' lang='"+roomId+","+rackId+","+data[j].docId+"' draggable='true' ondragstart='drag(event)'><div class='bk-book book-1'><div class='bk-front'><div class='bk-cover-back'></div><div class='bk-cover'></div></div><div class='bk-back'></div><div class='bk-right'></div><div class='bk-left' data-name='"+data[j].file+"'  onclick=editFileToCell("+roomId+","+rackId+","+data[j].cellNo+","+data[j].docId+","+data[j].deptId+")><h2><span>"+data[j].file+"</span></h2></div><div class='bk-top'>"+data[j].deptCode+"</div><div class='bk-bottom'></div></div></li>");
					 	    	
							}  
					 }
				 else
					 {
					   var noOfCell=data[0].noOfCell;
					   var htmlTopShelf="<div class='col-xs-12 top shelf'></div>";
					    
					  
					   $("#rackID").show();
					   $("#rackID").empty().append(htmlTopShelf);
					   for(var i=1;i<=noOfCell;i++)
						   {
								
								$("#rackID").append("<ul class='bk-list bk-list clearfix' id="+i+">");
								$("#rackID").append("</ul>");
								$("#rackID").append("<div class='col-xs-12 shelf'><i onclick=addFileToCell("+roomId+","+rackId+","+i+")></i></div>");
								
						   }
					 }
				 
				if(messageType == "success_msg")
				{
					$("#messageDivSuccess").show();
					$("#successMsgSpanId").html(messageText);
					$("#messageDivError").hide();
					$("#errorMsgSpanId").html("");
				}
				else if(messageType == "error_msg")
				{
				   $("#messageDivError").show();
					$("#errorMsgSpanId").html(messageText);
					$("#messageDivSuccess").hide();
					$("#successMsgSpanId").html("");
				}
				else
				{
					$("#messageDivSuccess").hide();
					$("#successMsgSpanId").html("");
					$("#messageDivError").hide();
					$("#errorMsgSpanId").html("");
				}
				
					//+"<< ---- messageText ======>>"+);
			}
	});
}
  
 
 
 function getSelectedRack(roomId,rckId) {
	$("#cmbRackID").empty();
	$.ajax({
			url : 'getroomwiserack.htm',
				dataType: "json",
				data : {
					roomId : roomId,
				},
				success : function(response) 
				{
					var data=response;
					var html="<option value='0'>---Select---</option>";
				    $.each(data, function(index, value) {
				      var status;
				       if(rckId==value.rackId)
				       {
				    	 status="selected";
				       }
				      else
				      {
				    	 status="";
				       }
						 html=html+"<option value="+value.rackId+" title="+value.rackId+" "+status+">"+value.rackNumber+"</option>";
					 });
					 
					 $('#cmbRackID').empty().append(html);
				}
	 	});
			
	}
 function getRackWiseCell(rackId,cellId)
 {
	 $("#cmbCellNo").empty();
	 var roomId=$("#roomModalId2").val();
	 $.ajax({
			url : 'getRackWiseCell.htm',
			dataType: "json",
			data : {
				rackId : rackId,
				roomId : roomId,
			},
			success : function(response) 
			{
				 var data=response;
				 var html="";
				 
				 html=html+"<option value="+cellId+" selected>"+cellId+"</option>"; 
				 $.each(data, function(index, value) {
					var noOfCell=data[0].noOfCell;
					html=html+"<option value='0'>---Select---</option>"; 
					 for(var i=1;i<=parseInt(noOfCell);i++)
					   {
						 html=html+"<option value="+i+">"+i+"</option>";
					   }
				 });
				 $('#cmbCellNo').empty().append(html);
			} 
	}); 
		
 }
 
function getSelectDocManual(roomId,rackId,cellId,docId)
{
	$("#fileNM").val(""); 
	$.ajax({
			url : 'getSelectDocManual.htm',
			dataType: "text",
			data : {
				rackId : rackId,
				roomId : roomId,
				cellId : cellId,
				docId  : docId,
			},
			success : function(response) 
			{
				var data=response;
				$("#fileNM").val(data);
	        } 
   }); 


}
  
  
 function addFileToCell(roomId,rackId,cellId) {
	
	 var fileNames = document.getElementsByName("filename");
	 for( var i = 0; i < fileNames.length; i ++ ) {
		    fileNames[i].value="";
		} 
	 
	 $("#roomModalId").val(roomId);
	 $("#rackModalId").val(rackId);
	 $("#rackCellId").val(cellId);
	 $("#notificationModal").modal();
}
 

 function addFile() {
	 
	 var roomModlId=$("#roomModalId").val();
	 var rackModlId=$("#rackModalId").val();
	 var rackCellModelId=$("#rackCellId").val();
	 var docDeptId=$("#cmbDept").val();
	if($("#filename").val() == "")
	 {
		 bootbox.alert("Please enter document name");
		 return false;
	 }
	
	 /* var fileNames = document.getElementsByName("filename");
	 var fileArr = [];
	 
	 for( var i = 0; i < fileNames.length; i ++ ) {
		    var n = fileNames[i].value;
		    fileArr.push(n);
		}  */
	 
		var fileNM=$("#filename").val().replace(':', '').replace(/\s+/g, " ");
		
		$.ajax({
			url : 'savefiletorack.htm',
			type: "POST",
			data : {
				"${_csrf.parameterName}" : "${_csrf.token}",
				roomId : roomModlId,
				rackId : rackModlId,
				rackCellId : rackCellModelId,
				/* files : JSON.stringify(fileArr).replace(/]|[[]/g, ""), */
				fileNM : fileNM,
				deptId:docDeptId
			},
			success : function(response) 
			{
				var messageType = response.substring(response.indexOf("~")+1,response.indexOf("^"));
				var messageText = response.substring(response.indexOf("^")+1);
				getRackDetails(rackModlId,messageType,messageText);
			}
 	});
}
 
function editFileToCell(roomId,rackId,cellId,docId,deptId)
{
  
   bootbox.confirm("Do you want to edit document?", function(result) {
	if (result == true)
	{ 
      $("#roomModalId2").val(roomId);
	  $("#rackModalId2").val(rackId);
	  $("#rackCellId2").val(cellId);
	  $("#txhFileId").val(docId);
	  $("#cmbDept2").val(deptId);
	  $("#editDocModal").modal();
	  getSelectDocManual(roomId,rackId,cellId,docId);
	  getSelectedRack(roomId,rackId);
	  getRackWiseCell(rackId,cellId);
	 }});
	 
 }
 function editFile()
 {
	 var roomModlId=$("#roomModalId2").val();
	 var rackfileId=$("#txhFileId").val();
	 var rackModlId=$("#rackModalId2").val();
	 var rackCellModelId=$("#rackCellId2").val();
	 var fileNM = $("#fileNM").val().replace(':', '').replace(/\s+/g, " ");
	 var newrackId=$("#cmbRackID").val();
	 var newcellId=$("#cmbCellNo").val();
	 var newdeptId=$("#cmbDept2").val();
	 
	 if($("#fileNM").val() == "")
	 {
		 bootbox.alert("Please enter document name.");
		 return false;
	 }	 

    $.ajax({
			url : 'editRackfileNM.htm',
			type: "POST",
			data : {
				"${_csrf.parameterName}" : "${_csrf.token}",
				fileId : rackfileId,
				rackId : rackModlId,
				rackCellId : rackCellModelId,
				roomId : roomModlId,
				fileNM : fileNM.replace(/]|[[]/g, ""),
				newrackId : newrackId,
				newcellId : newcellId,
				newdeptId : newdeptId
				
				 
			},
			success : function(response) 
			{
				var messageType = response.substring(response.indexOf("~")+1,response.indexOf("^"));
				var messageText = response.substring(response.indexOf("^")+1);
				getRackDetails(rackModlId,messageType,messageText);
			}
 	});
	 
 }
 function deleteFile()
 {
   bootbox.confirm("Do you want to delete document?", function(result) {
   if (result == true)
   { 
	 var rackdocId=$("#txhFileId").val();
	 var rackModlId=$("#rackModalId2").val();
 	$.ajax({
			url : 'deleteRackfileNM.htm',
			type: "POST",
			data : {
				"${_csrf.parameterName}" : "${_csrf.token}",
				rackdocId : rackdocId,
				
			},
			success : function(response) 
			{
				var messageType = response.substring(response.indexOf("~")+1,response.indexOf("^"));
				var messageText = response.substring(response.indexOf("^")+1);
				getRackDetails(rackModlId,messageType,messageText);
				 
			}
 	});
   }});
	 
 }
 function hide(id)
 {
   if(id==1)
   {
 	$("#messageDivSuccess").hide();
   }else{
	   $("#messageDivError").hide();  
   }
 }

function allowDrop(ev) {
    ev.preventDefault();
  
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev,destCell) {
	
     ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    $("#dt").html(" ");
    $("#dt").text(document.getElementById(data).lang);
   
    filemovement(destCell);
    /* alert(inf.id); */
}
function filemovement(destCell)
{
	
 var data=$("#dt").text();
var arr=data.split(",");
var roomId=arr[0];
var rackId=arr[1];
//var cellId=arr[2];
var cellId=destCell;
var docId=arr[2];


$.ajax({
	url : 'movefile.htm',
	type: "POST",
	data : {
		"${_csrf.parameterName}" : "${_csrf.token}",
		roomId : roomId,
	
		rackId : rackId,
		cellId:cellId,
		docId:docId,
		 
	},
	success : function(response) 
	{
		var messageType ="";
		var messageText ="";
		if(response=="success")
			{
			 messageType = "success_msg";
			 messageText ="File  is moved successfully.";
			
			}
		else
			{
			messageType = "error_msg";
			messageText ="Unable to move file";
			}
		
		//getRackDetails(rackModlId,messageType,messageText);
	}
	});
	
$("#dt").text("data:---"+data)
 $("#dt").html(" ");  
}