//==============MANAGE LETTER RECIPIENT===========================================
function viewLetterDetails(id,sent,recptid,tab) {
		   $("#tab").val(tab);
			$("#lid").val(id);
			$("#sent").val(sent);
			$("#letterrecptid").val(recptid);
			
			$("#myLetterForm").submit();
	}
	
	
	function seenRecentLetter(metadataid)
	{	
		
		$("#metadataid").val(metadataid);
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
			    		
			    		
			    		$("#seenRecentLetterForm").submit();
			    		}
			    }
			});
		
		
		
		 
	}
	


