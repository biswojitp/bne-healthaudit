<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<script src="/javascripts/common.js"></script>
<link rel="stylesheet" href="/stylesheets/autocompleet.css" />
<script src="/javascripts/document/jquery.autocomplete.min.js"></script>
<link rel="stylesheet" href="/assets/vendor/jquery_datepicker/jquery.datepick.css">
<script src="/assets/vendor/jquery_datepicker/jquery.plugin.js"></script>
<script src="/assets/vendor/jquery_datepicker/jquery.datepick.js"></script>

<style>
.datepicker_con>input {
	width: 100%;
	border-radius: 3px;
	border: 1px solid #aaaaaa;
}
</style>

<script type="text/javascript">

function check()
{
	
	if($("#firstName").val() == "")
	{
		 bootbox.alert("Please Enter First Name");
		 return false;
	}
	else if($("#lastName").val() == "")
	{
		 bootbox.alert("Please Enter Last Name");
		 return false;
	}
	
	else if($("#email").val() == "")
	{
		 bootbox.alert("Please Enter Email");
		 return false;
	} 
	else if($("#mobile").val() == "")
	{
		 bootbox.alert("Please Enter Mobile");
		 return false;
	} 
	else if($("#referalSource").val() == "")
	{
		 bootbox.alert("Please Select Referal Source");
		 return false;
	} 
	else if($("#dob").val() == "")
	{
		 bootbox.alert("Please Enter Date Of Birth");
		 return false;
	} 
	else if($("#referalSource").val() == "")
	{
		 bootbox.alert("Please Select Referal Source");
		 return false;
	} 
	else
	{
		$('#savePatientComplicationDetails').submit(); 
	}
}
function test(){
	alert("How r u??");
}
</script>
<section role="main" class="content-body">
	<header class="page-header">
		<h2>
			<spring:message code="PATIENT.MANAGEMENT.TITLE" />
		</h2>
		<%-- <div class="right-wrapper pull-right">
			<ol class="breadcrumbs">
				<li> <a href="./"> <i class="fa fa-home"></i></a></li>
				<li><span><spring:message code="PROPERTY.MNGMNTTREATMENTPLANT.TITLE" /></span></li>
			</ol>
		</div> --%>
	</header>

	<%@ include file="/WEB-INF/view/message.jsp"%>

	<div class="row">
		<div class="col-lg-12">
			<section class="panel">
				<header class="panel-heading">
					<div class="panel-actions">
						<c:choose>
							<c:when test="${not empty patientDetailsById.patientId}">
								<a href="#" class="fa fa-caret-down"></a>
								<c:set var="sectionHead" value="block"></c:set>
							</c:when>
							<c:when test="${empty patientDetailsById.patientId}">
								<a href="#" class="fa fa-caret-up"></a>
								<c:set var="sectionHead" value="none"></c:set>
							</c:when>
						</c:choose>
					</div>
					<h2 class="panel-title">
						<c:choose>
							<c:when test="${not empty patientDetailsById.patientId}">
								<h2 class="panel-title">
									<span><spring:message code="PATIENT.DETAILS.EDIT" /></span>
								</h2>
							</c:when>
							<c:otherwise>
								<h2 class="panel-title">
									<span><spring:message code="PATIENT.DETAILS.CREATE" /></span>
								</h2>
							</c:otherwise>
						</c:choose>
					</h2>
				</header>

				<div class="panel-body" style="display:${sectionHead}">
					<div class="col-md-12">
						<form class="form-horizontal form-bordered" id="savePatientComplicationDetails" action="./savePatientComplicationDetails.htm" method="post">
							<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
							<input type="hidden" name="patientId" value="${patientDetailsById.patientId}" id="patientId" />
							

							<div class="row">

								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="HOME.REGISTER.FIRSTNAME" />:</label>
										<div class="col-md-12">
											<input type="text" name="firstName" class="form-control"
												id="firstName" maxlength="9"
												onchange="validateNameAndCode(this)"
												value="${patientDetailsById.firstName}">
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="HOME.REGISTER.LASTNAME" />:</label>
										<div class="col-md-12">
											<input type="text" name="lastName" class="form-control"
												id="lastName" maxlength="9"
												onchange="validateNameAndCode(this)"
												value="${patientDetailsById.lastName}">
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="HOME.REGISTER.CLINICNAME" />:</label>
										<div class="col-md-12">
											<input type="text" name="clinicName" class="form-control"
												id="clinicName" maxlength="9"
												onchange="validateNameAndCode(this)"
												value="${patientDetailsById.clinicName}">
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="HOME.REGISTER.EMAIL" />:</label>
										<div class="col-md-12">
											<input type="text" name="email" class="form-control"
												id="email" maxlength="100"
												onchange="validateEmail(this)"
												value="${patientDetailsById.email}">
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="HOME.REGISTER.MOBILE" />:</label>
										<div class="col-md-12">
											<input type="text" name="mobile" class="form-control"
												id="mobile" maxlength="12"
												onchange="validateNameAndCode(this);validateMobileNo(this)"
												value="${patientDetailsById.mobile}">
										</div>
									</div>
								</div>

								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.REFERALSOURCE" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="referalSource"
												id="referalSource" data-plugin-selectTwo
												onchange="showDiv(this);show(this)">
												<option value=""><spring:message
														code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${referalList}" var="referalList">
													<c:choose>
														<c:when
															test="${ referalList.referalSource eq patientDetailsById.referalSource}">
															<option value="${referalList.referalSource}"selected="selected">${patientDetailsById.referalSource}</option>
														</c:when>
														<c:otherwise>
															<option value="${referalList.referalSource}">${referalList.referalSource}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>

							</div>

							<div class="row">

								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="HOME.REGISTER.DOB" />:</label>
										<div class="col-md-12 datepicker_con">
											<input type="text" class="form-control jqueryNDatePicker"
												name="dob" id="dob"
												value="<fmt:formatDate value='${patientDetailsById.dob}' pattern='dd/MM/yyyy' />"
												placeholder="dd/mm/yyyy" onclick="validateDate()"
												maxlength="12"/>
										</div>
									</div>
								</div>

								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message code="PATIENT.DETAILS.DATEOFCONSULTATION" />:</label>
										<div class="col-md-12 datepicker_con">
											<input type="text"  class="form-control jqueryNDatePicker" id="doc" name="doc" 
											value="<fmt:formatDate value='${patientDetailsById.doc}' pattern='dd/MM/yyyy' />"
												placeholder="dd/mm/yyyy" onchange="dofprocedure()"	maxlength="12">
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.NEXTDATEOFCONSULTATION" />:</label>
										<div class="col-md-12 datepicker_con">
											<input type="text"  class="form-control jqueryNDatePicker" id="nextDoc" name="nextDoc"
											value="<fmt:formatDate value='${patientDetailsById.nextDoc}' pattern='dd/MM/yyyy' />"
												placeholder="dd/mm/yyyy" onclick="validateDate()"		 
												 maxlength="12"	>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message code="PATIENT.DETAILS.DATEOFPROCESSING" />:</label>
										<div class="col-md-12 datepicker_con">
											<input type="text" class="form-control jqueryNDatePicker" id="dop" name="dop"
											value="<fmt:formatDate value='${patientDetailsById.dop}' pattern='dd/MM/yyyy' />"
												placeholder="dd/mm/yyyy" onclick="validateDate()"	
												maxlength="12" onchange="test(this)">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.NOOFCHILD" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="noOfChild" id="noOfChild" data-plugin-selectTwo onchange="showDiv(this);show(this)">
												<option value=""><spring:message
														code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${noOfChildList}" var="noOfChildObj">
													<c:choose>
														<c:when
															test="${ noOfChildObj.noOfChild eq patientDetailsById.noOfChild}">
															<option value="${noOfChildObj.noOfChild}"
																selected="selected">${patientDetailsById.noOfChild}</option>
														</c:when>
														<c:otherwise>
															<option value="${noOfChildObj.noOfChild}">${noOfChildObj.noOfChild}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.CURRENTCONTRACEPTION" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="currentContraception"
												id="currentContraception" data-plugin-selectTwo
												onchange="showDiv(this);show(this)">
												<option value=""><spring:message
														code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${contraceptionList}"
													var="contraceptionList">
													<c:choose>
														<c:when
															test="${ contraceptionList.currentContraception eq patientDetailsById.currentContraception}">
															<option value="${contraceptionList.contraceptionId}"
																selected="selected">${patientDetailsById.currentContraception}</option>
														</c:when>
														<c:otherwise>
															<option value="${contraceptionList.currentContraception}">${contraceptionList.currentContraception}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>

								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.SURGEONNAME" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="user.userId" id="userId"
												data-plugin-selectTwo onchange="showDiv(this);show(this)">
												<option value=""><spring:message
														code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${userList}" var="userList">
													<c:choose>
														<c:when
															test="${ userList.userId eq patientDetailsById.user.userId}">
															<option value="${userList.userId}" selected="selected">${patientDetailsById.user.firstName}</option>
														</c:when>
														<c:otherwise>
															<option value="${userList.userId}">${userList.firstName}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.PROCEDURENAME" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="procedureName" id="procedureName" data-plugin-selectTwo onchange="showDiv(this);show(this)">
												<option value=""><spring:message code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${procedureNameList}" var="procedureNameObj">
													<c:choose>
														<c:when
															test="${ procedureNameObj.procedureName eq patientDetailsById.procedureName}">
															<option value="${procedureNameObj.procedureName}"
																selected="selected">${patientDetailsById.procedureName}</option>
														</c:when>
														<c:otherwise>
															<option value="${procedureNameObj.procedureName}">${procedureNameObj.procedureName}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>
							</div>


							<div class="row">
								<div class="col-md-3 col-sm-3">
								<div class="form-group">
									<label class="col-md-12 required" for="inputDefault"><spring:message
											code="PATIENT.DETAILS.PREANXIOLYTIC" />:</label> 
										<div class="col-md-12">
											<select class="form-control" id="preAnxiolytic" name="preAnxiolytic">
										<option value="">
											<spring:message code="COMMON.LABEL.DROPDOWN.SELECT" />
										</option>
										<c:choose>
											<c:when test="${patientDetailsById.preAnxiolytic eq true}">
												<option value="1" selected="selected">Yes</option>
												<option value="0">No</option>
											</c:when>
											<c:when test="${patientDetailsById.preAnxiolytic eq false}">
												<option value="0" selected="selected">No</option>
												<option value="1">Yes</option>

											</c:when>
											<c:otherwise>
												<option value="0">No</option>
												<option value="1">Yes</option>
											</c:otherwise>
										</c:choose>
									</select>
								</div>
								</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.COMMENT" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="comment" id="comment"
												data-plugin-selectTwo onchange="showDiv(this);show(this)">
												<option value=""><spring:message
														code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${commentList}" var="commentList">
													<c:choose>
														<c:when
															test="${ commentList.comment eq patientDetailsById.comment}">
															<option value="${commentList.comment}"
																selected="selected">${patientDetailsById.comment}</option>
														</c:when>
														<c:otherwise>
															<option value="${commentList.comment}">${commentList.comment}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-5 col-sm-5">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message	code="PATIENT.DETAILS.ALLERGY" />:</label>
										<div class="col-md-12">
											<input type="text" name="allergy" class="form-control" id="allergy" maxlength="9" onchange="validateNameAndCode(this)"
												value="${patientDetailsById.allergy}">
										</div>
									</div>
								</div>
							</div>
							<%-- <div class="row">
							<div class="col-md-5 col-sm-5">
									<div class="form-group">
										<label class="col-md-12" for="inputDefault"><spring:message	code="PATIENT.DETAILS.DESCRIPTION" />:</label>
										<div class="col-md-12">
											<textarea name="specificComment" class="form-control"
												maxlength="190" id="specificComment">${patientDetailsById.specificComment} </textarea>
										</div>
									</div>
								</div>
							</div> --%>
							<div class="row">
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="COMPLICATION.DETAILS.INFECTION" />:</label>
										<div class="col-md-12">
											<select class="form-control" id="infection" name="infection">
												<option value="">
													<spring:message code="COMMON.LABEL.DROPDOWN.SELECT" />
												</option>
												<c:choose>
													<c:when test="${patientDetailsById.infection eq true}">
														<option value="1" selected="selected">Yes</option>
														<option value="0">No</option>
													</c:when>
													<c:when
														test="${patientDetailsById.infection eq false}">
														<option value="0" selected="selected">No</option>
														<option value="1">Yes</option>

													</c:when>
													<c:otherwise>
														<option value="0">No</option>
														<option value="1">Yes</option>
													</c:otherwise>
												</c:choose>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="COMPLICATION.DETAILS.COMPLICATIONSECTION" />:</label>
										<div class="col-md-12">
											<input type="text" name="complicationSection" class="form-control" id="complicationSection" maxlength="100" onchange="validateNameAndCode(this)"
												value="${patientDetailsById.complicationSection}">
										</div>
									</div>
								</div>
								
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message code="COMPLICATION.DETAILS.HEEMATOSPERMIA" />:</label>
										<div class="col-md-12">
											<input type="text" name="hematospermia" class="form-control" id="haematospermia" maxlength="9" onchange="validateNameAndCode(this)"
												value="${patientDetailsById.hematospermia}">
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="COMPLICATION.DETAILS.FAILUREVASIOTOMY" />:</label>
										<div class="col-md-12">
											<select class="form-control" id="failureVasiotomy" name="failureVasiotomy">
												<option value="">
													<spring:message code="COMMON.LABEL.DROPDOWN.SELECT" />
												</option>
												<c:choose>
													<c:when test="${patientDetailsById.failureVasiotomy eq true}">
														<option value="1" selected="selected">Yes</option>
														<option value="0">No</option>
													</c:when>
													<c:when
														test="${patientDetailsById.failureVasiotomy eq false}">
														<option value="0" selected="selected">No</option>
														<option value="1">Yes</option>

													</c:when>
													<c:otherwise>
														<option value="0">No</option>
														<option value="1">Yes</option>
													</c:otherwise>
												</c:choose>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="COMPLICATION.DETAILS.CHRONICSCROTALPAIN" />:</label>
										<div class="col-md-12">
											<input type="text" name="chronicScrotalPain" class="form-control"
												id="chronicScrotalPain" maxlength="12"
												onchange="validateNameAndCode(this)"
												value="${patientDetailsById.chronicScrotalPain}">
										</div>
									</div>
								</div>

								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message code="COMPLICATION.DETAILS.PAINONEJACULATION" />:</label>
										<div class="col-md-12">
											<input type="text" name="painOnEjaculation" class="form-control" id="painOnEjaculation" maxlength="100" onchange="validateNameAndCode(this)"
												value="${patientDetailsById.painOnEjaculation}">
										</div>
									</div>
								</div>
							</div>

							
							<div class="row">
										
								<div class="col-md-5 col-sm-5">
									<div class="form-group">
										<label class="col-md-12" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.DESCRIPTION" />:</label>
										<div class="col-md-12">
											<textarea name="description" class="form-control"
												maxlength="250" id="description">${patientDetailsById.description} </textarea>
										</div>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-sm-12" style="margin-top: 30px;">
									<div class="form-group text-center">
										<c:if test="${not empty patientDetailsById.patientId}">
											<button type="submit" class="btn btn-success">
												<spring:message code="COMMON.BUTTON.UPDATE"></spring:message>
											</button>

										</c:if>
										<c:if test="${empty patientDetailsById.patientId}">
											<button type="button" class="btn btn-success"
												onclick="check()">
												<spring:message code="COMMON.BUTTON.SAVE"></spring:message>
											</button>
										</c:if>
										<a href="./patientComplicationDetails.htm"><input type="button"
											class="btn btn-danger"
											value=<spring:message code="COMMON.BUTTON.BACK"></spring:message>></a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			<section class="panel">
				<header class="panel-heading">
					<div class="panel-actions">
						<c:choose>
							<c:when test="${not empty patientDetailsById.patientId}">
								<a href="#" class="fa fa-caret-up"></a>
								<c:set var="sectionHead" value="none"></c:set>
							</c:when>
							<c:when test="${empty patientDetailsById.patientId}">
								<a href="#" class="fa fa-caret-down"></a>
								<c:set var="sectionHead" value="block"></c:set>
							</c:when>
						</c:choose>
					</div>
					<h2 class="panel-title">
						<spring:message code="PATIENT.DETAILS.LIST" />
					</h2>
				</header>
				<div class="panel-body" style="display:${sectionHead}">
						<table class="table table-bordered table-striped mb-none"
							id="datatable-default">
							<thead>
								<tr>
									<th><spring:message code="PROJECT.COMMON.SLNO" /></th>
									<th><spring:message code="PATIENT.DETAILS.PATIENTID" /></th>
									<th><spring:message code="HOME.REGISTER.CLINICNAME" /></th>
									<th><spring:message code="PATIENT.DETAILS.SURGEONNAME" /></th>
									<th><spring:message	code="PATIENT.DETAILS.DATEOFCONSULTATION" /></th>
									<th><spring:message code="PATIENT.DETAILS.NEXTDATEOFCONSULTATION" /></th>
									<th><spring:message code="COMMON.LABEL.OPTION" /></th>


								</tr>
							</thead>
							<tbody>
								<c:set scope="page" var="row" value="1" />
								<c:forEach items="${patientDetailsList}" var="patientDetails">
									<tr class="gradeX">
										<td>${row}</td>
										<td>${patientDetails.patientId}</td>
										<td>${patientDetails.clinicName}</td>
										<td>${patientDetails.user.firstName}</td>
										<td>${patientDetails.doc}</td>
										<td>${patientDetails.nextDoc}</td>
										<td>
										<a class="btn btn-xs btn-circle btn-warning" onclick="edit(${patientDetails.patientId})">
										 <i class="fa fa-pencil" aria-hidden="true" title=<spring:message code="COMMON.LABEL.EDIT"/>></i></a>
										<a href="#"class="btn btn-xs btn-circle btn-warning" target="_blank">
										 <a href="pdf.htm?patientId=${patientDetails.patientId}&page=purchaseorder" class="btn btn-xs btn-circle btn-warning" target="_blank"> 
										<i class="fa fa-file-pdf-o" aria-hidden="true" title=<spring:message code="COMMON.BUTTON.ICONOPEN"/>></i>
										</a>
										</td>

									</tr>
									<c:set value="${row+1}" var="row" />
								</c:forEach>
							</tbody>
						</table>
					</div>
			</section>
		</div>
	</div>
</section>

<form id="editPatientId" action="./patientComplicationDetails.htm" method="post">
					<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
						<input type="hidden" name="patientId" id="propertyBuildingId">
</form>
<script type="text/javascript">

function edit(patientId){
	        bootbox.confirm ({
	    	message: "Do you want to edit Patient details ?",
	    	callback: function (proceed)
	    	{
	    	 if(proceed)
	     		 
	    	 {
	    	   document.getElementById("propertyBuildingId").value=patientId;
	    	   $('#editPatientId').submit();
	    	 }
	    	}
	    })
	}

</script>
<script type="text/javascript">
$(".jqueryNDatePicker").datepick({
	constrainInput:false,
		dateFormat: 'dd/mm/yyyy',
		showOnFocus: true,
		
	});
</script>
