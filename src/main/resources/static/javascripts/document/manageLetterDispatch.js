
function loaddata(corresid)
{
	$("#noforecpt").val(0);
	$("#corresid").val(corresid);
	$("#modalgenerateletter").modal("show");

	

}
function loaddataforUploadletter(corresid)
{
	//alert(corresid);
	$("#corids").val(corresid);
	$("#uploadletter").modal("show");
	
	

}
function downloadCorr(corresid)
{
	
	$("#corrid_down").val(corresid);
	$("#downloadFowm").submit();

	

}


	function generateLetterNo()
	{
		var noforecpt=$("#noforecpt").val();
	if(noforecpt=="")
		{
		bootbox.alert("Please Enter No Of Recipient");
		}
	
	else
		{		
		
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
			    		
			    		
			    		$("#generateLetterForm").submit();
			    		}
			    }
			});
		
			
		}
	
	}

	//====================GET ALL ENCLOUSURE======START==================
	function getallEnclosureByCorrespondanceid(correspondanceid){		  
		
		
				var html='';					
			   	$.ajax({
			 	      url : './getallEnclosureByCorrespondanceid',
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
				 	 		//'+value.enclosureMapId+'
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
			 	    	 
			 	      },
				   	error:function(error)
				    {
				   		
				    }
			 	  
			 	  });
			
		}
	function downloadEnclosure(encid)
	{
		
		$("#encid").val(encid);
		$("#downloadEnclosure").submit();
	}
	//====================GET ALL ENCLOSURE======END==================