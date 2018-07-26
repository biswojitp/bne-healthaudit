function toUppercase(that) 
{
	that.value = that.value.toUpperCase();
}

function isLetter(str) 
{
	return str.length === 1 && str.match(/[a-z]/i);
}

var rptOfficeTypeName = null;
function isNumber(evt) 
{
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) 
	{
		return false;
	}
	return true;
}

function isNumericValue(field)
{ 
	argvalue = field.value ;
	var validChars = "0123456789.";
	var startFrom = 0;	
	for (var n = startFrom; n < argvalue.length; n++) 
	{
		if (validChars.indexOf(argvalue.substring(n, n+1)) == -1)
		{
			field.value = field.value.substring(0,n) ;
			return false ;
		}
	}
	return true;
}

function validateMobileNo(element) 
{
	var re = /^[0-9]+$/;
	var str = element.toString();
	var str1 = element.value;
	element = (element) ? element : window.event;
	var charCode = (element.which) ? element.which : element.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) 
	{
		return false;
	}
	
	if(isNaN(str1)||str1.indexOf(" ")!=-1)
	{
		bootbox.alert("Invalid Mobile No.");
		var result = element.value.replace(/[a-zA-Z!&#@^/#+()$~%&\\\|\.''"":;*?<>{}]/g,'');
		element.value =result;
		element.focus();
		return false;
	}
	
	if (str1.length>10 || str1.length<10)
	{
		bootbox.alert("Mobile No. should be 10 digit");
		var result = element.value.replace(/[a-zA-Z!&#@^/#+()$~%&\\\|\.''"":;*?<>{}]/g,'');
	 	element.value =result;
		// document.getElementById('mobileNo').focus();
		element.value = '';
		element.focus();
		return false;
	}
	
	if(!(str1.charAt(0)=="9" || str1.charAt(0)=="8" || str1.charAt(0)=="7"))
	{
		bootbox.alert("Mobile No. should start with 9 ,8 or 7 ");
		var result = element.value.replace(/[a-zA-Z!&#@^/#+()$~%&\\\|\.''"":;*?<>{}]/g,'');
		element.value =result;
		element.value = '';
		element.focus();
		return false;
	}
	
	if (!str.match(re)) 
	{
		var result = element.value.replace(/[a-zA-Z!&#@^/#+()$~%&\\\|\.''"":;*?<>{}]/g,'');
		element.value =result;
		return false;
	}
	return true;
}


function contactNo(element)
{
	var result = element.value.replace(/^[0-9]\d{2,4}-\d{6,8}$]/g,'');
	element.value =result;
}

function validateName(element)
{
	var result = element.value.replace(/[0-9\u200B-\u200D\u201A-\u201E\u2013-\u2122\uFEFF\!@#$^&*+<>\\\/|\?~{}())(\:%]/g,'');
	element.value =result;
}

function validateContactNo(element)
{
	var result = element.value.replace(/[a-zA-Z\u200B-\u200D\u201A-\u201E\u2013-\u2122\uFEFF\!@#$^&*+=-_<>\\\/|\?~{}())(\:%]/g,'');
	element.value =result;
}

function validateNameAndCode(element)
{
	var result = element.value.replace(/[\u200B-\u200D\u201A-\u201E\u2013-\u2122\uFEFF\!@#$^&*+<>\\\/|\?~{}())(\:%]/g,'');
	element.value =result;
}

function validateAddress(element)
{
	var result = element.value.replace(/[\u200B-\u200D\u201A-\u201E\u2013-\u2122\uFEFF\!@$^&*+<>\\\/|\?~{}())(\:%]/g,'');
	element.value =result;
}

function validatePAN(Obj) 
{
	if (Obj == null) 
		Obj = window.event.srcElement;
	if (Obj.value != "") 
	{
		ObjVal = Obj.value;
		var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
		var code = /([C,P,H,F,A,T,B,L,J,G])/;
		var code_chk = ObjVal.substring(3,4);
		if (code.test(code_chk) == false) 
		{
			bootbox.alert("Invaild Personal PAN Card No.");
 			Obj.value = '';
 			Obj.focus();
 			return false;
 		}
	}
}

// * @description : validate all decimal text-boxes
// * @author : Tapan
// * @since : 15 Apr 2017
function validateDecimalField(fieldId,decimalLength,maxLength,msgLabel)
{
	// Decimal Length : Scale of the datatype of the field.
	// Max Length : Max Length including decimal.
	if($("#"+fieldId).val() != "" && parseFloat($("#"+fieldId).val()) > 0)
	{
		var fieldValue = $("#"+fieldId).val();
		if(isNaN(fieldValue))
		{
			bootbox.alert("Please enter a numeric value for " +msgLabel+ ".");
			$("#"+fieldId).val("");
			setTimeout(function(){$("#"+fieldId).focus();}, 100);
			$("#"+fieldId).focus();
			return false;
		}

		var result = "";

		/*if(fieldValue.indexOf(".") == -1)
		{
			alert("inside if block...");
			result = (parseFloat(fieldValue)).toFixed(decimalLength);
		}
		*/
		result = (parseFloat(fieldValue)).toFixed(decimalLength);

		$("#"+fieldId).val(result);
	
		if($("#"+fieldId).val().length > maxLength)
		{
			bootbox.alert("Invalid entry found for " +msgLabel+ ".");
			$("#"+fieldId).val("");
			$("#"+fieldId).focus();
			return false;
		}
		return true;
	}
	else if(isNaN($("#"+fieldId).val()))
	{
		bootbox.alert("Invalid entry found for " +msgLabel+ ".");
		$("#"+fieldId).val("");
		//$("#"+fieldId).focus();
		return false;
	}
	else
		return true;
}

//* @description : get current-date in dd-mm-yyyy
//* @author : Tapan
//* @since : 15 Apr 2017
function getCurrentDate()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();

	if(dd<10)
	{
		dd='0'+dd;
	} 
	if(mm<10)
	{
		mm='0'+mm;
	}
	var currDate = dd+'-'+mm+'-'+yyyy;
	return currDate;
}

//* @description : compares 2 dates for bigger or smaller (Format : dd/mm/yyyy)
//* @author : Tapan
//* @since : 15 Apr 2017
function checkFirstDateIsBigger(smallerDate,biggerDate)
{
	if(typeof smallerDate == "undefined" || smallerDate == "")
		smallerDate = getCurrentDate();
	if(typeof biggerDate == "undefined" || biggerDate == "")
		biggerDate = getCurrentDate();
	
	var biggerYear = biggerDate.substring(6,10);
	var biggerMonth=biggerDate.substring(3,5);
	var biggerDay=biggerDate.substring(0,2);

	eIntMonth = parseInt(biggerMonth);
	endMonth=("00"+eIntMonth.toString()).slice(-2);
	var biggerDateFinal=biggerYear+endMonth+biggerDay;
	biggerDateFinal=parseInt(biggerDateFinal);	

	var smallerYear=smallerDate.substring(6,10);
	var smallerMonth=smallerDate.substring(3,5);
	var smallerDay=smallerDate.substring(0,2);
	
	var sIntMonth=parseInt(smallerMonth);
	var startMonth=("00"+sIntMonth.toString()).slice(-2);
	var smallerDateFinal=smallerYear+startMonth+smallerDay;
	smallerDateFinal=parseInt(smallerDateFinal);
	if (smallerDateFinal > biggerDateFinal)
	{
		return true;
	}
	else
	{
		return false;
	}
}

//* @description : compares 2 dates for bigger or smaller (Format : dd/mm/yyyy)
//* @author : Tapan
//* @since : 15 Apr 2017
function checkFirstDateIsBiggereq(smallerDate,biggerDate)
{
	if(typeof smallerDate == "undefined" || smallerDate == "")
		smallerDate = getCurrentDate();
	if(typeof biggerDate == "undefined" || biggerDate == "")
		biggerDate = getCurrentDate();
	
	var biggerYear = biggerDate.substring(6,10);
	var biggerMonth=biggerDate.substring(3,5);
	var biggerDay=biggerDate.substring(0,2);

	eIntMonth = parseInt(biggerMonth);
	endMonth=("00"+eIntMonth.toString()).slice(-2);
	var biggerDateFinal=biggerYear+endMonth+biggerDay;
	biggerDateFinal=parseInt(biggerDateFinal);	

	var smallerYear=smallerDate.substring(6,10);
	var smallerMonth=smallerDate.substring(3,5);
	var smallerDay=smallerDate.substring(0,2);
	
	var sIntMonth=parseInt(smallerMonth);
	var startMonth=("00"+sIntMonth.toString()).slice(-2);
	var smallerDateFinal=smallerYear+startMonth+smallerDay;
	smallerDateFinal=parseInt(smallerDateFinal);
	if (smallerDateFinal >= biggerDateFinal)
	{
		return true;
	}
	else
	{
		return false;
	}
}

//* @description : compares 2 dates for bigger or smaller (Format : dd/mm/yyyy)
//* @author : Tapan
//* @since : 15 Apr 2017
function checkFirstDateIsSmaller(smallerDate,biggerDate)
{
	if(typeof smallerDate == "undefined" || smallerDate == "")
		smallerDate = getCurrentDate();
	if(typeof biggerDate == "undefined" || biggerDate == "")
		biggerDate = getCurrentDate();
	
	var biggerYear = biggerDate.substring(6,10);
	var biggerMonth=biggerDate.substring(3,5);
	var biggerDay=biggerDate.substring(0,2);

	eIntMonth = parseInt(biggerMonth);
	endMonth=("00"+eIntMonth.toString()).slice(-2);
	var biggerDateFinal=biggerYear+endMonth+biggerDay;
	biggerDateFinal=parseInt(biggerDateFinal);	

	var smallerYear=smallerDate.substring(6,10);
	var smallerMonth=smallerDate.substring(3,5);
	var smallerDay=smallerDate.substring(0,2);
	
	var sIntMonth=parseInt(smallerMonth);
	var startMonth=("00"+sIntMonth.toString()).slice(-2);
	var smallerDateFinal=smallerYear+startMonth+smallerDay;
	smallerDateFinal=parseInt(smallerDateFinal);
	if (smallerDateFinal < biggerDateFinal)
	{
		return true;
	}
	else
	{
		return false;
	}
}



/**  ----- START ::  ########################## FINANCIAL ACCOUNTING -- COMMON FUNCTIONS   ##########################  **/
function getAcctTypeFromAccountHead(rowNum, acctFieldId, debitAmtFieldId, creditAmtFieldId)
{
	if(rowNum.value=='')
	{
		rowNum=0;
	}
	var accountName = $("#"+acctFieldId+rowNum).val();
	
	if( $("#"+acctFieldId+rowNum).val() !="")
	{
		$.ajax({
			url : './getAccountTypeByAccountName',
			type:'GET',
			data : ({
				accountId : $("#"+acctFieldId+rowNum).val()
			}),
			cache:false,
			asynch:false,
			success : function(response) 
			{
				if(response !="")
				{
					var obj=jQuery.parseJSON(response);		
					$.each(obj, function(i, value) 
					{
						if(value.accountType!='CR')
						{
							document.getElementById(creditAmtFieldId+rowNum).value = "0.00";
							document.getElementById(debitAmtFieldId+rowNum).readOnly = false;
							document.getElementById(creditAmtFieldId+rowNum).readOnly = true;
							document.getElementById(creditAmtFieldId+rowNum).tabIndex = -1;
						}
						else
						{
							document.getElementById(debitAmtFieldId+rowNum).value = "0.00";
							document.getElementById(creditAmtFieldId+rowNum).readOnly = false;
							document.getElementById(debitAmtFieldId+rowNum).readOnly = true;
							document.getElementById(debitAmtFieldId+rowNum).tabIndex = -1;
						}
					});
				}
				else
				{
				}
			},
			error:function(transport)
			{
			}
		});
	}
	else
	{
	}
}

function enableDisableDrCrAmountFieldAsOnDrCrType(that, drcrtye, debitAmtFieldId, creditAmtFieldId, voucherType)
{
	rowNum=that.lang;
	if(rowNum.value=='')
	{
		rowNum=0;
	}
	
	var drcrtye = $("#"+drcrtye+rowNum).val();
	
	if(drcrtye!='Cr')
	{
		document.getElementById(creditAmtFieldId+rowNum).value = "0.00";
		document.getElementById(debitAmtFieldId+rowNum).readOnly = false;
		document.getElementById(creditAmtFieldId+rowNum).readOnly = true;
		document.getElementById(creditAmtFieldId+rowNum).tabIndex = -1;
	}
	else
	{
		document.getElementById(debitAmtFieldId+rowNum).value = "0.00";
		document.getElementById(creditAmtFieldId+rowNum).readOnly = false;
		document.getElementById(debitAmtFieldId+rowNum).readOnly = true;
		document.getElementById(debitAmtFieldId+rowNum).tabIndex = -1;
	}
}

//Get the Account Heads on change of Txn Mode *****
function getAccount(accountCategory,officeId) 
{
	showAjaxProcess();
	$.ajax({
		url : 'getAccountLedgerList.htm',
		dataType: "json",
		data : {
			accountCategory : accountCategory,
			officeId : officeId,
		},
		success : function(response) 
		{
			var data=response;
			var singleSelValue = "";
			var recCount = 0;
			var htmlSelect = '<option value="">' +labelDropdownTextSelect+ '</option>';
			var trHTML="";
			var htmlData="";
			
			$.each(data, function(i, value) 
			{
				recCount++;
				htmlData +='<option value="'+value.accountId+'">'+value.accountCode+" | "+value.accountName+'</option>';
				singleSelValue = value.accountId;
			});
			if(recCount == 1)
			{
				trHTML = htmlData;
				checkApplicableByAcctId(singleSelValue);
			}
			else
			{
				if(document.getElementById("currBalLabelId") != null)
					document.getElementById("currBalLabelId").style.display="none";
				trHTML = htmlSelect + htmlData;
			}

			$('#account').empty().append(trHTML); 
			hideAjaxProcess();
		}
	});

	if(typeof voucherType != 'undefined')
	{
		if(voucherType != "")
		{
			if(voucherType.toUpperCase() == "RECEIPT" || voucherType.toUpperCase() == "PAYMENT")
			{
				getVoucherNoBasedOnParams();
			}
		}
	}
}

// Get the Account Heads on change of Txn Mode *****
function getAccountType(accountCategory,officeId) 
{
	showAjaxProcess();
	$.ajax({
		url : 'getAccountLedgerList.htm',
		dataType: "json",
		data : {
			accountCategory : accountCategory,
			officeId : officeId,
		},
		success : function(response) 
		{
			var data=response;
			var singleSelValue = "";
			var recCount = 0;
			var htmlSelect = '<option value="">' +labelDropdownTextSelect+ '</option>';
			var trHTML="";
			var htmlData="";
			$.each(data, function(i, value) 
			{
				recCount++;
				htmlData +='<option value="'+value.accountId+'">'+value.accountCode+" | "+value.accountName+'</option>';
				singleSelValue = value.accountId;
			});
			if(recCount == 1)
			{
				trHTML = htmlData;
				checkApplicableByAcctId(singleSelValue);
			}
			else
			{
				if(document.getElementById("currBalLabelId") != null)
					document.getElementById("currBalLabelId").style.display="none";
				trHTML = htmlSelect + htmlData;
			}
			$('#account').empty().append(trHTML);
			
			if(accountCategory == "Bank")
			{
				$('#bank').show(200);
			}
			else
			{
				$('#bank').hide(200);
			}
			hideAjaxProcess();
		}
	});
}

function getVoucher(voucherNo,id) 
{
	$.ajax({
		url : 'getVoucherNumber.htm',
		dataType: "json",
		data : {
			voucherNo : voucherNo,
		},
		success : function(response) 
		{
			var data=response;
			if(data)
			{
				bootbox.alert(errMsgVchrNoExists);
				$("#"+id).val('');
			}
		}
	});
}

function getWorkDetails(project)
{
	$.ajax({
		url : 'getWorkDetails.htm',
		dataType: "json",
		data : {
			project : project,
		},
		success : function(response) 
		{
			var data=response;
			var trHTML='<option value="">' +labelDropdownTextSelect+ '</option>';
			$.each(data, function(i, value) 
			{
				trHTML +='<option value="'+value.workId+'">'+value.workCode+" | "+value.workName+'</option>';
			});
			$('#workId').empty().append(trHTML); 
		}
	});
}

function getDepartmentList(officeId,departmentId)
{
	$.ajax({
		url : 'getDepartmentList.htm',
		dataType: "json",
		data : {
			officeId : officeId,
		},
		success : function(response) 
		{
			var data=response;
			if(data.length > 0)
			{
				var trHTML='<option value="">' +labelDropdownTextSelect+ '</option>';
				$.each(data, function(i, value) 
				{
					trHTML +='<option value="'+value.departmentId+'">'+value.departmentCode+" | "+value.departmentName+'</option>';
					rptOfficeTypeName = value.officeTypeName;
				});
				
				$('#'+departmentId).empty().append(trHTML);
				$("#display").css("display","block");
			}
			else
			{
				rptOfficeTypeName = null;
				var trHTML='<option value=""></option>';
				$('#'+departmentId).empty().append(trHTML);
				$("#display").css("display","none");
			}
		}
	});
}

function checkAccount(id){
}

function getTransactionVoucher(voucherNo,id) 
{
	$.ajax({
		url : 'getTransactionVoucher.htm',
		dataType: "json",
		data : {
			voucherNo : voucherNo,
		},
		success : function(response) 
		{
			var data=response;
			if(data)
			{
				bootbox.alert(errMsgVchrNoExists);
				$("#"+id).val('');
			}
		}
	});
}

function generatePdf(id)
{
	document.getElementById("printVoucherId").value=id;
	$('#generatepdf').submit();
}

/**
 * @author Tapan
 * @version 1.0
 * @since 05-05-2017
 * @param CompanyID, DivisionID, VoucherType and FinYear
 * @description Find the next voucher no. based on the parameters
 */

function getVoucherNoBasedOnParams()
{
	var companyId = $("#companyId").val();
	//var divisionId = $("#divisionId").val();
	var voucherTypeId = $("#voucherTypeId").val();
	var finYear = $("#finYear").val();
	var sectionId = $("#sectionId").val();
	
	//console.log("CompanyId====>>"+companyId+ "<< --- VoucherTypeId ==>"+voucherTypeId+ "<< --- FinYear ===>" +finYear);
	$.ajax({
		url : 'getVoucherNoBasedOnParams.htm',
		dataType: "json",
		data : {
			companyId : companyId,
			sectionId : sectionId,
			voucherTypeId : voucherTypeId,
			finYear : finYear,
		},
		success : function(response) 
		{
			$.each(response, function(index, value) 
			{
				//console.log("-- RESPONSE ---- nextVoucherNoGenerated ----->>"+value.nextVoucherNoGenerated);
				if(value.nextVoucherNoGenerated.indexOf("Not Configured") != -1)
				{
					$("#voucherNo").css({ 'color': 'red'});
					$("#voucherNo").css({ 'border': '1px solid red'});
					$("#voucherNo").css({ 'box-shadow': '0px 0px 3px red;'});
				}
				else
				{
					$("#voucherNo").css({ 'color': '#3a3a3a'});
					$("#voucherNo").css({ 'border': '1px solid #848484'});
				}
				$("#voucherNo").val(value.nextVoucherNoGenerated);
			});
		},
		error : function(errRespponse)
		{
			var data=errRespponse;
		}
	});
}

/**
 * @author Tapan
 * @version 1.0
 * @since 12-05-2017
 * @param 
 * @description Set the default value to Office & Division as per the Current User mapping
 */
function checkLoggedUserDeptDivision()
{
	var compOptions = document.getElementById("companyId");
	var deptOptions = document.getElementById("departmentId");
	//var divOptions = document.getElementById("divisionId");

	for(var i=0; i<compOptions.length; i++)
	{
		var optText = compOptions.options[i].text;
		if(compOptions.options[i].text == "IDCO - Bhubaneswar")
		{
			compOptions.options[i].selected = true;
		}
	}
	for(var j=0; j<deptOptions.length; j++)
	{
		if((deptOptions.options[j].text).indexOf("Finance") != -1)
		{
			deptOptions.options[j].selected = true;
		}
	}
	/*for(var k=0; k<divOptions.length; k++)
	{
		if((divOptions.options[k].text).indexOf("BCD-I") != -1 
			&& (divOptions.options[k].text).indexOf("BCD-II") == -1
			&& (divOptions.options[k].text).indexOf("BCD-III") == -1
		)
		{
			divOptions.options[k].selected = true;
		}
	}*/
	compOptions.disabled = true;
	deptOptions.disabled = true;
	//divOptions.disabled = true;
	//getVoucherNoBasedOnParams();
}

/**
 * @author Tapan
 * @version 1.0
 * @since 30-05-2017
 * @param 
 * @description Convert the amount to Words (Rupees & Paise)
 */

function convertAmountToWords(amountToConvert) 
{
	var amountInWordsOut = "";
	if(parseFloat(amountToConvert)==0)
	{
		amountInWordsOut = "";
	}
	else if(parseFloat(amountToConvert)>0)
	{
		var fraction = Math.round(getFraction(amountToConvert)*100);
		var paiseInWords  = "";
	
		var amountInWordsWithoutPaise = convertToNumber(amountToConvert);
		
		if(fraction > 0)
		{
			if(amountInWordsWithoutPaise.lastIndexOf(" and ") != -1)
			{
				amountInWordsWithoutPaise = amountInWordsWithoutPaise.replace(" and "," ");
			}
			paiseInWords = "and "+convertToNumber(fraction)+" Paise ";
		}
		amountInWordsOut = "Rupees " + amountInWordsWithoutPaise +" "+ paiseInWords +"only";
	}
	else
	{
		amountInWordsOut = "Incorrect amount !!!";
	}
	
	return amountInWordsOut;
}

/**
 * @author Tapan
 * @description Part of the Convert to Words function
 */
function getFraction(fractionAmount) 
{
	return fractionAmount % 1;
}

/**
 * @author Tapan
 * @description Part of the Convert to Words function
 */
function convertToNumber(amountInNum)
{
	/*if ((amountInNum < 0) || (amountInNum > 999999999)) 
	{
		return "Incorrect amount found !!!";
	}*/
	var amtInCrore = Math.floor(amountInNum / 10000000);	/* Crore */ 
	amountInNum -= amtInCrore * 10000000;

	var amtInLakhs = Math.floor(amountInNum / 100000);		/* lakhs */ 
	amountInNum -= amtInLakhs * 100000;
	
	var amtInThousands = Math.floor(amountInNum / 1000);	/* thousand */ 
	amountInNum -= amtInThousands * 1000;
	
	var amtInHundreds = Math.floor(amountInNum / 100);		/* Tens (deca) */ 
	amountInNum = amountInNum % 100;						/* Ones */ 
	
	var amtInTens = Math.floor(amountInNum / 10);
	var amtInOnes = Math.floor(amountInNum % 10);
	
	var result = "";

	if (amtInCrore>0)
	{
		result += (convertToNumber(amtInCrore) + " Crore");
	}
	if (amtInLakhs>0)
	{
		result += (((result=="") ? "" : " ") + 
		convertToNumber(amtInLakhs) + " Lakh");
	}
	if (amtInThousands>0) 
	{
		result += (((result=="") ? "" : " ") + convertToNumber(amtInThousands) + " Thousand");
	}

	if (amtInHundreds) 
	{
		result += (((result=="") ? "" : " ") + convertToNumber(amtInHundreds) + " Hundred");
	}

	var arrValuesInOnes = Array("", "One", "Two", "Three", "Four", "Five", "Six","Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen","Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen","Nineteen");
	var arrValuesInTens = Array("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty","Seventy", "Eighty", "Ninety");

	if (amtInTens>0 || amtInOnes>0) 
	{
		if (result!="")
		{
			result += " and ";
		}
		if (amtInTens < 2) 
		{
			result += arrValuesInOnes[amtInTens * 10 + amtInOnes];
		}
		else 
		{
			result += arrValuesInTens[amtInTens];
			if (amtInOnes>0) 
			{
				result += (" " + arrValuesInOnes[amtInOnes]);
			}
		}
	}

	if (result=="")
	{
		result = "zero";
	}
	return result;
}

function goBack()
{
	 window.history.back();
}

function goPrintScreen()
{
	var toPrint = document.getElementById('report');
	var popupWin = window.open('', 'PRINT', 'width=1000, height=600, location=no, left=125px, top=25px');
	popupWin.document.open();
	popupWin.document.write('<html>\n<head>\n');
	popupWin.document.write('<link rel="stylesheet" type="text/css" href="resources/stylesheets/financialaccounting/fa-common-report-style.css"/>\n');
	popupWin.document.write('<link rel="stylesheet" type="text/css" href="resources/stylesheets/financialaccounting/fa-common-styles.css"/>\n');
	popupWin.document.write('</head>\n<body onload="window.print();">');
	popupWin.document.write(toPrint.innerHTML);
	popupWin.document.write('</body>\n</html>\n');
	popupWin.document.close();
}

function getdate(value){
	
	$.ajax({
		url : 'getDate.htm',
		type:'GET',
		data : ({
			year : value
		}),
		cache:false,
		asynch:false,
		success : function(response) 
		{
			//alert(response);
			if(response !="")
			{
				var obj=jQuery.parseJSON(response);
				$("#startDate").val(obj.startDate);
				$("#endDate").val(obj.endDate);
			}
		}
	});
	
}

function checkItemAvailabilityByAcctId(accountId)
{
	$.ajax({
		url : './getItemApplicableFromAccountHead.htm',
		type:'GET',
		dataType: "json",
		data : ({
			accountId : accountId,
		}),
		cache:false,
		asynch:false,
		success : function(response) 
		{
			applicable = "";
			var openingBalance = null;
			var closingBalance = null;
			var obType = null;
			var cbType = null;
			if(response !="")
			{
				var obj=response;
				openingBalance = obj.openingBalance;
				closingBalance = obj.closingBalance;
				if(obj.virtualAccount == 'Y')
				{	
					applicable = applicable+"VirtualAccount,";
				}
				if(obj.depreciation == 'Y')
				{	
					applicable = applicable+"Depreciation,";
				}
				if(obj.costCenter == 'Y')
				{
					applicable = applicable+"Cost Center,";
				}
				if(obj.project == 'Y')
				{
					applicable = applicable+"Project,";
				}
				if(obj.work == 'Y')
				{
					applicable = applicable+"Work,";
				}
				if(obj.party == 'Y')
				{	
					applicable = applicable+"Party,";
				}
				if(obj.budget == 'Y')
				{
					applicable = applicable+"Budget,";
				}
			}
			if(openingBalance > 0)
			{
				obType = "(Dr)";
			}
			else if(openingBalance < 0)
			{
				obType = "(Cr)";
				openingBalance = 0 - openingBalance;
			}
			else
			{
				obType = "";
				openingBalance = "0.00";
			}

			if(closingBalance > 0)
			{
				cbType = "(Dr)";
			}
			else if(closingBalance < 0)
			{
				cbType = "(Cr)";
				closingBalance = 0 - closingBalance;
			}
			else
			{
				cbType = "";
				closingBalance = "0.00";
			}
			applicable = applicable.slice(0, -1) + "& Opening Balance: "+openingBalance +" "+ obType+", Closing Balance: "+closingBalance +" "+ cbType;
			return applicable;
		}
	});
}

/**
* @author Tapan
* @version 1.0
* @since 13-06-2017
* @param Virtual Account Flag
* @description Shows/Hides the Instrument details labels based on the input value.
*/
function checkForVirtualAcAndShowHideReqdFieldLabels(isVirtualAccount)
{
	if(isVirtualAccount=="Y")
	{
		if(document.getElementById("txnTypeNotRqdLabelId") != null)
		{
			document.getElementById("txnTypeNotRqdLabelId").style.display = "block";
			document.getElementById("txnNoNotRqdLabelId").style.display = "block";
			document.getElementById("txnDateNotRqdLabelId").style.display = "block";
	
			document.getElementById("txnTypeRqdLabelId").style.display = "none";
			document.getElementById("txnNoRqdLabelId").style.display = "none";
			document.getElementById("txnDateRqdLabelId").style.display = "none";
		}
	}
	else
	{
		if(document.getElementById("txnTypeNotRqdLabelId") != null)
		{
			document.getElementById("txnTypeNotRqdLabelId").style.display = "none";
			document.getElementById("txnNoNotRqdLabelId").style.display = "none";
			document.getElementById("txnDateNotRqdLabelId").style.display = "none";
	
			document.getElementById("txnTypeRqdLabelId").style.display = "block";
			document.getElementById("txnNoRqdLabelId").style.display = "block";
			document.getElementById("txnDateRqdLabelId").style.display = "block";
		}
	}
}

/**
* @author Tapan
* @version 1.0
* @since 01-07-2017
* @param Table ID
* @description Returns the count of rows in a table except the Header Row
*/
function getDataTableRowLengthExceptTHcells(tableId)
{
	var totalRowCount = 0;
	var rowCount = 0;

	var table = document.getElementById(tableId);
	var rows = table.getElementsByTagName("tr")
	for (var i = 0; i < rows.length; i++) 
	{
		totalRowCount++;
		if (rows[i].getElementsByTagName("td").length > 0) 
		{
			rowCount++;
		}
	}
	return rowCount;
}

/**  ----- END ::  ########################## FINANCIAL ACCOUNTING -- COMMON FUNCTIONS   ##########################  **/

/**
 * @author Tapan
 * @version 1.0
 * @since 10-05-2017
 * @param Date Field ClassName
 * @description Generate the new Date Picker
 */
$(function() {$('.jqueryNDatePicker').datepick({
		dateFormat: 'dd/mm/yyyy', 
		showOnFocus: false, 
		showTrigger: '<button type="button" class="trigger">' + '<i class="fa fa-calendar"></i></button>'
	});	
			
	$('.jqueryNDatePicker').datepick({
		dateFormat: 'dd/mm/yyyy', 
		showOnFocus: false, 
		showTrigger: '<button type="button" class="trigger">' + '<i class="fa fa-calendar"></i></button>'
	});	
});

/**
 * @author Tapan
 * @version 1.0
 * @since 08-05-2017
 * @param FormID
 * @description Reset the form elements
 */
function resetFormElements(formId)
{
	var totalElementsLength = document.getElementById(formId).elements.length;

	console.log("totalElementsLength =============>> "+totalElementsLength);

	for(i=0; i<totalElementsLength; i++)
	{
		var formElementObj = document.getElementById(formId).elements[i];

		if(formElementObj.type.toUpperCase().indexOf("TEXT") != -1)
		{
			if(document.getElementById(formElementObj.id) != null)
				document.getElementById(formElementObj.id).value = "";
		}
		if(formElementObj.type.toUpperCase().indexOf("SELECT") != -1)
		{
			if(document.getElementById(formElementObj.id) != null)
			{
				var selectId = document.getElementById(formElementObj.id);
				var optionsText = selectId.options[0].text;
	
				if(optionsText.toUpperCase().indexOf("SELECT") != -1)
					selectId.options[0].selected = true;
				else if(optionsText.toUpperCase().indexOf("NONE") != -1)
					selectId.options[0].selected = true;
				else if(optionsText.toUpperCase().indexOf("ALL") != -1)
					selectId.options[0].selected = true;
				else if(optionsText.toUpperCase().indexOf("ACTIVE") != -1)
					selectId.options[0].selected = true;
				else
				{
					formElementObj.options.length = 0;
					var option = document.createElement("option");
					option.text = labelDropdownTextSelect;
					formElementObj.add(option,formElementObj[0]);
					selectId.options[0].selected = true;
				}
			}
		}
	}
}

function getTxnItemDetailsOnChange(account)
{
	document.getElementById("accGrpName").innerHTML="";
	//document.getElementById("accSubGrpName").innerHTML="";
	document.getElementById("accSchName").innerHTML="";
	//document.getElementById("accSubSchName").innerHTML="";
	document.getElementById("accGLHead").innerHTML="";
	if(account != ""){
		$.ajax({
			url : 'getAccountLedgerDetails.htm',
			data : {
				account : account,
			},
			success : function(response) 
			{
				var details=response.split("<###>");
				document.getElementById("accGrpName").innerHTML=details[1];
				//document.getElementById("accSubGrpName").innerHTML=details[3];
				document.getElementById("accSchName").innerHTML=details[6];
				//document.getElementById("accSubSchName").innerHTML=details[7];
				document.getElementById("accGLHead").innerHTML=details[4];
			}
		});
	}
}
function toUppercase(that) {
	that.value = that.value.toUpperCase();
}
function validateEmail(emailField){
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if (reg.test(emailField.value) == false) 
{
	bootbox.alert("Invalid Email Address ");
		var result = emailField.value.replace(/[a-zA-Z!&#@^/#+()$~%&\\\|\.''"":;*?<>{}]/g,'');
		emailField.value =result;
		emailField.value = '';
		emailField.focus();
		return false;
}
return true;
}


function AllowIFSC() {
var ifsc = document.getElementById('ifsc').value;

var reg= /[A-Z|a-z]{4}/;
if (ifsc.match(reg)) {
return true;
}
else {
bootbox.alert("You Entered wrong ifsc code");
document.getElementById("ifsc").focus();
return false;
}

}

	function AllowPASSPORT() {
var passport = document.getElementById('passportNo').value;
var reg = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/ig;
 
if (passport.match(reg)) {
return true;
}
else {
bootbox.alert("You Entered Wrong Passport No");
document.getElementById("passportNo").focus();
return false;
}

}
function checkUID(uid) {
	
	var id = document.getElementById('adharNo').value;
	var adha = id.length;

if (adha!= 12) {
	
	bootbox.alert("Please enter 12 digit Adhar No.")
return false;

} else {
return true;
}

}
//added by surya for payband by commission type
function getLookUpList(commissionType,id){
	 $.ajax({
			url : './hrms-getLookUpList.htm',
			dataType: "json",
			type:'GET',
			data: ({
				commissionType : commissionType,
			}),
			cache:false,
			asynch:false,
			success : function(response) 
			{
				var data=response;
				var html="<option value=''>--Select--</option>";
				$.each(data, function(index, value) {
				  html=html+"<option value="+value.code+">"+value.description+"</option>";
				});
				 $('#'+id).empty().append(html);
			}
	});
		
}
