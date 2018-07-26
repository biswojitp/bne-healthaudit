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

function check()
{
	if($("#patientId").val() == "")
	{
		 bootbox.alert("Please Select Patient");
		 return false;
	} 
	else if($("#complicationSection").val() == "")
	{
		 bootbox.alert("Please Enter Complication Section");
		 return false;
	}
	else if($("#timeAfterProcedure").val() == "")
	{
		 bootbox.alert("Please Enter TimeAfter Procedure");
		 return false;
	}
	else if($("#haematospermia").val() == "")
	{
		 bootbox.alert("Please Enter Haematospermia");
		 return false;
	}
	else if($("#smallHematoma").val() == "")
	{
		 bootbox.alert("Please Enter Small Hematoma");
		 return false;
	}
	else if($("#largeHematoma").val() == "")
	{
		 bootbox.alert("Please Enter LargeHematoma");
		 return false;
	}
	else if($("#chronicScrotalPain").val() == "")
	{
		 bootbox.alert("Please Enter Chronic Scrotal Pain");
		 return false;
	}
	else if($("#painOnEjaculation").val() == "")
	{
		 bootbox.alert("Please Enter Pain On Ejaculation");
		 return false;
	}
	else if($("#infection").val() == "")
	{
		 bootbox.alert("Please select Infection");
		 return false;
	}
	else
	{
		$('#saveComplicationDetails').submit(); 
	}
}
function test(){
	alert("How r u??");
}
</script>
<section role="main" class="content-body">
	<header class="page-header">
		<h2>
			<spring:message code="PATIENT.COMPLICATION.TITLE" />
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
							<c:when
								test="${not empty complicationDetailsById.complicationId}">
								<a href="#" class="fa fa-caret-down"></a>
								<c:set var="sectionHead" value="block"></c:set>
							</c:when>
							<c:when test="${empty complicationDetailsById.complicationId}">
								<a href="#" class="fa fa-caret-up"></a>
								<c:set var="sectionHead" value="none"></c:set>
							</c:when>
						</c:choose>
					</div>
					<h2 class="panel-title">
						<c:choose>
							<c:when
								test="${not empty complicationDetailsById.complicationId}">
								<h2 class="panel-title">
									<span><spring:message code="COMPLICATION.DETAILS.EDIT" /></span>
								</h2>
							</c:when>
							<c:otherwise>
								<h2 class="panel-title">
									<span><spring:message code="COMPLICATION.DETAILS.CREATE
									" /></span>
								</h2>
							</c:otherwise>
						</c:choose>
					</h2>
				</header>

				<div class="panel-body" style="display:${sectionHead}">
					<div class="col-md-12">
						<form class="form-horizontal form-bordered" id="saveComplicationDetails" action="./saveComplicationDetails.htm" method="post">
							<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
							<input type="hidden" name="complicationId" value="${complicationDetailsById.complicationId}" id="complicationId" />
							
							<div class="row">
							<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message code="PATIENT.DETAILS.PATIENTID" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="patientDetails.patientId" id="patientId"
												data-plugin-selectTwo onchange="showDOC(this.value);show(this)">
												<option value=""><spring:message code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${patientDetailsList}" var="patientDetailsObj">
													<c:choose>
														<c:when
															test="${ patientDetailsObj.patientId eq complicationDetailsById.patientDetails.patientId}">
															<option value="${patientDetailsObj.patientId}" selected="selected">${complicationDetailsById.patientDetails.patientId}|${complicationDetailsById.patientDetails.firstName}</option>
														</c:when>
														<c:otherwise>
															<option value="${patientDetailsObj.patientId}">${patientDetailsObj.patientId}|${patientDetailsObj.firstName}</option>
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
												code="COMPLICATION.DETAILS.INFECTION" />:</label>
										<div class="col-md-12">
											<select class="form-control" id="infection" name="infection">
												<option value="">
													<spring:message code="COMMON.LABEL.DROPDOWN.SELECT" />
												</option>
												<c:choose>
													<c:when test="${complicationDetailsById.infection eq true}">
														<option value="1" selected="selected">Yes</option>
														<option value="0">No</option>
													</c:when>
													<c:when
														test="${complicationDetailsById.infection eq false}">
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
												value="${complicationDetailsById.complicationSection}">
										</div>
									</div>
								</div>
								<%-- <div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message code="PATIENT.DETAILS.DATEOFCONSULTATION" />:</label>
										<div class="col-md-12 datepicker_con">
											<input type="text"  class="form-control jqueryNDatePicker" id="doc" name="doc" 
											value="<fmt:formatDate value='${complicationDetailsById.doc}' pattern='dd/MM/yyyy' />"
												placeholder="dd/mm/yyyy" onchange="dofprocedure()"	maxlength="12">
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.DATEOFPROCESSING" />:</label>
										<div class="col-md-12 datepicker_con">
											<input type="text" class="form-control jqueryNDatePicker" id="dop" name="dop"
											value="<fmt:formatDate value='${complicationDetailsById.dop}' pattern='dd/MM/yyyy' />"
												placeholder="dd/mm/yyyy" onclick="validateDate()"	
												maxlength="12" >
										</div>
									</div>
								</div> --%>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message code="COMPLICATION.DETAILS.HEEMATOSPERMIA" />:</label>
										<div class="col-md-12">
											<input type="text" name="haematospermia" class="form-control" id="haematospermia" maxlength="9" onchange="validateNameAndCode(this)"
												value="${complicationDetailsById.haematospermia}">
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
													<c:when test="${complicationDetailsById.failureVasiotomy eq true}">
														<option value="1" selected="selected">Yes</option>
														<option value="0">No</option>
													</c:when>
													<c:when
														test="${complicationDetailsById.failureVasiotomy eq false}">
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
												value="${complicationDetailsById.chronicScrotalPain}">
										</div>
									</div>
								</div>

								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message code="COMPLICATION.DETAILS.PAINONEJACULATION" />:</label>
										<div class="col-md-12">
											<input type="text" name="painOnEjaculation" class="form-control" id="painOnEjaculation" maxlength="100" onchange="validateNameAndCode(this)"
												value="${complicationDetailsById.painOnEjaculation}">
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
												maxlength="250" id="description">${complicationDetailsById.description} </textarea>
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-12" style="margin-top: 30px;">
									<div class="form-group text-center">
										<c:if
											test="${not empty complicationDetailsById.complicationId}">
											<button type="submit" class="btn btn-success">
												<spring:message code="COMMON.BUTTON.UPDATE"></spring:message>
											</button>

										</c:if>
										<c:if test="${empty complicationDetailsById.complicationId}">
											<button type="button" class="btn btn-success"
												onclick="check()">
												<spring:message code="COMMON.BUTTON.SAVE"></spring:message>
											</button>
										</c:if>
										<a href="./complicationDetails.htm"><input type="button" class="btn btn-danger"
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
							<c:when
								test="${not empty complicationDetailsById.complicationId}">
								<a href="#" class="fa fa-caret-up"></a>
								<c:set var="sectionHead" value="none"></c:set>
							</c:when>
							<c:when test="${empty complicationDetailsById.complicationId}">
								<a href="#" class="fa fa-caret-down"></a>
								<c:set var="sectionHead" value="block"></c:set>
							</c:when>
						</c:choose>
					</div>
					<h2 class="panel-title">
						<spring:message code="COMPLICATION.DETAILS.LIST" />
					</h2>
				</header>
				<div class="panel-body" style="display:${sectionHead}">
					<table class="table table-bordered table-striped mb-none" id="datatable-default">
							<thead>
								<tr>
									<th><spring:message code="PROJECT.COMMON.SLNO" /></th>
									<th><spring:message code="PATIENT.DETAILS.PATIENTID" /></th>
									<th><spring:message code="COMPLICATION.DETAILS.SMALLHEMATOMA" /></th>
									<th><spring:message code="COMPLICATION.DETAILS.LARGEHEMATOMA" /></th>
									<th><spring:message	code="COMPLICATION.DETAILS.CHRONICSCROTALPAIN" /></th>
									<th><spring:message	code="COMPLICATION.DETAILS.PAINONEJACULATION" /></th>
									<th><spring:message code="COMMON.LABEL.OPTION" /></th>
								</tr>
							</thead>
							<tbody>
								<c:set scope="page" var="row" value="1" />
								<c:forEach items="${complicationDetailsList}" var="complicationDetails">
									<tr class="gradeX">
										<td>${row}</td>
										<td>${complicationDetails.patientDetails.patientId}|${complicationDetails.patientDetails.firstName}</td>
										<td>${complicationDetails.smallHematoma}</td>
										<td>${complicationDetails.largeHematoma}</td>
										<td>${complicationDetails.chronicScrotalPain}</td>
										<td>${complicationDetails.painOnEjaculation}</td>
										<td><a class="btn btn-xs btn-circle btn-warning" onclick="edit(${complicationDetails.complicationId})"> 
											<i class="fa fa-pencil" aria-hidden="true" title=<spring:message code="COMMON.LABEL.EDIT"/>></i>
										</a></td>

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

<form id="editComplicationId" action="./complicationDetails.htm" method="post">
 <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
	<input type="hidden" name="complicationId" id="propertyBuildingId">
</form>
<script type="text/javascript">
function edit(complicationId){
	        bootbox.confirm ({
	    	message: "Do you want to edit Complication details ?",
	    	callback: function (proceed)
	    	{
	    	 if(proceed)
	     		 
	    	 {
	    	   document.getElementById("propertyBuildingId").value=complicationId;
	    	   $('#editComplicationId').submit();
	    	 }
	    	}
	    })
	}

</script>
<form id="editComplicationId1" action="./patientDetailsToComplication.htm" method="post">
 <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
	<input type="hidden" name="patientId" id="propertyBuildingId1">
</form>
<script type="text/javascript">
function showDOC(patientId){
	document.getElementById("propertyBuildingId1").value=patientId;
	 $('#editComplicationId1').submit();
}
	 
	 
$(".jqueryNDatePicker").datepick({
	constrainInput:false,
		dateFormat: 'dd/mm/yyyy',
		showOnFocus: true,
	});
</script>

