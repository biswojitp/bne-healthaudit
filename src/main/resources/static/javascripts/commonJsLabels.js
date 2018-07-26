/* ###############  Global messages to be shown in Voucher screens  ################# */

/** ====START : ================================================  GLOBAL MESSAGES FOR -FINANCIAL ACCOUNTING- ============================================================= */

labelDropdownTextSelect = "- Select -";
labelYes = "Yes";
labelNo = "No";
labelConfirm = "Confirm !!";
labelReceiptVchPreview = "PREVIEW (Receipt Voucher)";
labelPaymentVchPreview = "PREVIEW (Payment Voucher)";
labelJournalVchPreview = "PREVIEW (Journal Voucher)";
labelContraVchPreview = "PREVIEW (Contra Voucher)";

errMsgVchrNoExists = "Voucher No. already exists.";
errMsgEnterAccount = "Please select an Account.";
errMsgEnterAccountInTransaction = "Please select an Account in transaction.";
errMsgSelMultiAcctsInTxnDtls = "Account must be selected for each transaction.";
errMsgSelMultiAmtsInTxnDtls = "Any of Debit or Credit amount must be provided for each transaction.";
errMsgDrAmtReqInTxnDtls = "Amount (Dr) must be provided for each transaction.";
errMsgCrAmtReqInTxnDtls = "Amount (Cr) must be provided for each transaction.";
errMsgSelMultiPartyInTxnDtls = "Party must be selected for each transaction.";
errMsgEnterValidPartyName = "Please enter a valid party name.";
errMsgValidPartyInTxnDtls = "Please enter valid party name for each transaction.";

errMsgInstTypeExists = "Please select an Instrument Type in instrument detils.";
errMsgInstNoExists = "Please enter a number in instrument detils.";
errMsgInstAmtExists = "Please enter an amount in instrument detils.";
errMsgInstDateExists = "Please enter a date in instrument detils.";
errMsgInstBankExists = "Please select an Bank in instrument detils.";
//errMsgEnterDebitAccount = "Please select a Debit Account."
errMsgEnterAmount = "Please enter an Amount."
errMsgEnterCC = "Please select a Cost Center.";
errMsgSelFinYear = "Please select a financial year";
errMsgEnterTxnAmt = "Please provide the transaction amount.";
errMsgEnterDebitAmt = "Please enter a Debit amount.";
errMsgEnterCreditAmt = "Please enter a Credit amount.";
errMsgEnterCompany = "Please select an Office (HO/DO).";
errMsgEnterDepartment = "Please select a Department.";
errMsgEnterParty = "Please select a Party.";
errMsgEnterDivision = "Please select a Division.";
errMsgEnterEmployementType = "Please select a Employeement Type.";
errMsgEnterSection = "Please select a Section.";
errMsgIncorrVoucherNo = "The Voucher No. is incorrect.";
errMsgEnterVoucherDate = "Please select Provisional Date.";
errMsgEnterStartDate = "Please enter Transaction Start Date.";
errMsgEnterEndDate = "Please enter Transaction End Date.";
errMsgVoucherType = "Please Select Voucher Type."
errMsgEnterTxnMode = "Please select Transaction mode.";
/*errMsgEnterRecptMode = "Please select Transaction type.";
errMsgEnterTxnChqNo = "Please enter Cheque/Transaction no.";
errMsgEnterTxnChqDate = "Please select Cheque/Transaction date.";*/
errMsgEnterRecptMode = "Please select Instrument type.";
errMsgEnterTxnChqNo = "Please enter Instrument no.";
errMsgEnterTxnChqDate = "Please select Instrument date.";
errMsgEnterNarration = "Please provide Narration of this voucher.";
errMsgOneRow = "Voucher must have at least one transaction entry.";
errMsgOneDrOneCrRow = "Voucher must have at least one debit and one credit entry.";
errMsgOneDrRow = "Voucher must have at least one debit entry.";
errMsgOneCrRow = "Voucher must have at least one credit entry.";
errMsgConfirmCreate = "Do you want to proceed ?";
errMsgConfirmVerified = "Do you want to proceed ?";
errMsgConfirmApprove = "Are you sure you want to Approve the voucher ?";
errMsgConfirmRevert = "Are you sure you want to Revert the voucher ?";
errMsgConfirmEdit = "Do you want to Edit the voucher ?";
errMsgEnterRevertRemarks = "Please provide the remarks for reverting this Voucher.";
errMsgTxnDtGTVchrDt = "Instrument date must be smaller than or equal to Provisional date.";
errMsgVchrDtGTCurrDt = "Provisional date should be smaller than or equal to current date."
errMsgOneRowMustInDelete = "At least one row should be there.";
errMsgEnterVerifyRevertRemarks = "Please provide verifier remarks for reverting this Voucher.";
errMsgEnterApproveRevertRemarks = "Please provide approver remarks for reverting this Voucher.";
errMsgStartDtGTEndDt = "Start date should be smaller than or equal to End date.";
errMsgPayblAndDrMismatch = "Net Payable amount and amount paid are not matching. Please check the entries again.";
errMsgRecvblAndCrMismatch = "Net Receivable amount and amount received are not matching. Please check the entries again.";
errMsgDrCrMismatch = "Debit and Credit amount are not matching. Please check the entries again.";
errMsgNetRecvblNeg = "The Net amount is negative. Please check.";
errMsgChgTxnModeBankToCash = "Are you sure you want to change the transaction from Bank To Cash ?";
errMsgChgTxnModeCashToBank = "Are you sure you want to change the transaction from Cash to Bank ?";
errMsgselonebank = "Please select at least one Bank account.";
errMsgselonecash = "Please select at least one Cash account.";
errMsgsameDrCrvalue = "Both Debit and Credit amount can not be provided for one Account.";
confMsgSameDetails = "Do you want to provide same Party/Project/Works name for all transactions ? ";
confMsgRcvSameDetails = "Do you want to provide same Project/Works name for all transactions ? ";
confMsgChngAccInfo = "Do you want to change the account related information?";
errMsgSelectDivision = "Please select a division.";
errMsgSelectSection = "Please select a section.";
errMsgPayblAndVirtualAccountAmountMismatch = "The Account balance is lower than the amount to be paid.";
confMsgChngInstrumentInfo = "Do you want to change the Transaction related information?";
/*errMsgVerification = "Please provide verification remarks for this Voucher.";
errMsgApproval = "Please provide approver remarks for this Voucher.";*/

/** ==== END : ================================================  GLOBAL MESSAGES FOR -FINANCIAL ACCOUNTING- ============================================================= */


/** ==== START : ================================================  GLOBAL MESSAGES FOR -PAYROLL- ============================================================= */

errMsg_SelOneCheckbox = "Please select at least one record to proceed.";
/*confMsg_CantBeUndoneForSelRecords = "This process can not be undone for the selected records. Do you want to proceed ?";*/
confMsg_CantBeUndoneForSelRecords = "Attendance for selected employees will be processed now for payroll and cannot be reverted. Do you want to proceed?";
confMsg_CantBeUndoneForSelRecordsAfterJV = "This would create the Journal and further changes will not be allowed for the selected records. Do you want to proceed ?";
/** ==== END : ================================================  GLOBAL MESSAGES FOR -PAYROLL- ============================================================= */


/* ###############  END : Global messages to be shown in Voucher screens  ################# */
