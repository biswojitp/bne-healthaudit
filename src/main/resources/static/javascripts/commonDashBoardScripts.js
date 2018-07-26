/* 
 * This file is to show the different Counts on the Dashboard page 
 * Put your individual functions here with proper comments
 */


/*
 * Author : Bikash, 18-Jul-2017
 * Below function is used for FINANCE, to bring the count of Pending Vouchers and to be shown on the Dashboard
 */
function getPendingVoucherCount()
{
	document.getElementById("totalPendingCount").innerHTML = "";
	document.getElementById("pendingJournalCount").innerHTML = "";
	document.getElementById("pendingContraCount").innerHTML = "";
	document.getElementById("pendingReceiptCount").innerHTML = "";
	document.getElementById("pendingPaymentCount").innerHTML = "";
	$.ajax({
		url : './getPendingVoucher',
		type : 'GET',
		data : ({
		}),
		cache : false,
		asynch : false,
		success : function(response) 
		{
			if (response != "") 
			{
				var totalPendingCount = 0;
				var voucherwiseCountArr = response.split("<###>");

				totalPendingCount = parseInt(voucherwiseCountArr[0])+parseInt(voucherwiseCountArr[1])+parseInt(voucherwiseCountArr[2])+parseInt(voucherwiseCountArr[3]);

				if(totalPendingCount == "" || totalPendingCount == "0")
					document.getElementById("voucherCountDetailsDiv").style.display="none";
				else
					document.getElementById("voucherCountDetailsDiv").style.display="";

				document.getElementById("pendingJournalCount").innerHTML = voucherwiseCountArr[0]<10 ? "0"+voucherwiseCountArr[0] : voucherwiseCountArr[0];
				document.getElementById("pendingContraCount").innerHTML = voucherwiseCountArr[1]<10 ? "0"+voucherwiseCountArr[1] : voucherwiseCountArr[1];
				document.getElementById("pendingReceiptCount").innerHTML = voucherwiseCountArr[2]<10 ? "0"+voucherwiseCountArr[2] : voucherwiseCountArr[2];
				document.getElementById("pendingPaymentCount").innerHTML = voucherwiseCountArr[3]<10 ? "0"+voucherwiseCountArr[3] : voucherwiseCountArr[3];
				document.getElementById("totalPendingCount").innerHTML = totalPendingCount<10 ? "0"+totalPendingCount : totalPendingCount;
			}
			else
			{
				document.getElementById("voucherCountDetailsDiv").style.display="none";
				document.getElementById("totalPendingCount").innerHTML = "00";
			}
/*
			else 
			{
				document.getElementById("pendingJournalCount").innerHTML = "0";
				document.getElementById("pendingContraCount").innerHTML = voucherwiseCountArr[1];
				document.getElementById("pendingReceiptCount").innerHTML = voucherwiseCountArr[2];
				document.getElementById("pendingPaymentCount").innerHTML = voucherwiseCountArr[3];
				document.getElementById("totalPendingCount").innerHTML = totalPendingCount;
			}
*/
		},
		error : function(loan) {
		}
	});
}



function geFAMSDashboardDetails()
{
	
	document.getElementById("newLetters").innerHTML = "";
	document.getElementById("newLettersUrgent").innerHTML = "";
	document.getElementById("newFiles").innerHTML = "";
	
  	
	$.ajax({
		url : './get-fams-inbox.htm',
		type : 'GET',
		data : ({
		}),
		cache : false,
		asynch : false,
		success : function(response) 
		{
			if (response != "") 
			{
				data = $.parseJSON(response);
				$.each(data, function(i, item) {
					
					
					document.getElementById("inboxid").innerHTML = item.total;
					document.getElementById("newLetters").innerHTML = item.letter;
					document.getElementById("newLettersUrgent").innerHTML =item.letterUrgent;
					document.getElementById("newFiles").innerHTML = item.files;
				});
				
				
				 
			}
			else
			{
			}
 
		},
		error : function(error) {
			console.log(error);
		}
	});


}




