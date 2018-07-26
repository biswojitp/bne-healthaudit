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

function edit(sampleId){
    bootbox.confirm ({
	message: "Do you want to edit Sample details ?",
	callback: function (proceed)
	{
	 if(proceed)
 		 
	 {
	   document.getElementById("propertyBuildingId").value=sampleId;
	   $('#editSampleId').submit();
	 }
	}
})
}

function check()
{
	
	if($("#result1stSample").val() == "")
	{
		 bootbox.alert("Please Enter Result Of 1st Sample");
		 return false;
	}
	else if($("#action1stSample").val() == "")
	{
		 bootbox.alert("Please Enter Action 1st Sample");
		 return false;
	}
	else if($("#result2ndSample").val() == "")
	{
		 bootbox.alert("Please Enter Result Of 2nd Sample");
		 return false;
	} 
	else if($("#action2ndSample").val() == "")
	{
		 bootbox.alert("Please Enter Action 2nd Sample");
		 return false;
	} 
	else
	{
		$('#createSample').submit(); 
	}
}
</script>
<section role="main" class="content-body">
	<header class="page-header">
		<h2>
			<spring:message code="PATIENT.SAMPLE.TITLE" />
		</h2>
	</header>

	<%@ include file="/WEB-INF/view/message.jsp"%>

	<div class="row">
		<div class="col-lg-12">
			<section class="panel">
				<header class="panel-heading">
					<div class="panel-actions">
						<c:choose>
							<c:when
								test="${not empty sampleDetailsById.sampleId}">
								<a href="#" class="fa fa-caret-down"></a>
								<c:set var="sectionHead" value="block"></c:set>
							</c:when>
							<c:when test="${empty sampleDetailsById.sampleId}">
								<a href="#" class="fa fa-caret-up"></a>
								<c:set var="sectionHead" value="none"></c:set>
							</c:when>
						</c:choose>
					</div>
					<h2 class="panel-title">
						<c:choose>
							<c:when
								test="${not empty sampleDetailsById.sampleId}">
								<h2 class="panel-title">
									<span><spring:message code="COMPLICATION.DETAILS.EDIT" /></span>
								</h2>
							</c:when>
							<c:otherwise>
								<h2 class="panel-title">
									<span><spring:message code="COMPLICATION.DETAILS.CREATE" /></span>
								</h2>
							</c:otherwise>
						</c:choose>
					</h2>
				</header>

				<div class="panel-body" style="display:${sectionHead}">
					<div class="col-md-12">
						<form class="form-horizontal form-bordered" id="createSample" action="./createSample.htm" method="post">
						<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
						<input type="hidden" name="sampleId" value="${sampleDetailsById.sampleId}" id="sampleId" />
						<div class="row">
						<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.DETAILS.PATIENTID" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="patientDetails.patientId" id="patientId"
												data-plugin-selectTwo onchange="showDiv(this);show(this)">
												<option value=""><spring:message code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${patientDetailsList}" var="patientDetailsObj">
													<c:choose>
														<c:when
															test="${ patientDetailsObj.patientId eq sampleDetailsById.patientDetails.patientId}">
															<option value="${patientDetailsObj.patientId}" selected="selected">${sampleDetailsById.patientDetails.patientId}</option>
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
												code="PATIENT.SAMPLE.1STRESULT" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="sampleResult1"
												id="result1stSample" data-plugin-selectTwo
												onchange="showDiv(this);show(this)">
												<option value=""><spring:message
														code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${sampleResultList}" var="sampleResultObj">
													<c:choose>
														<c:when
															test="${ sampleResultObj.result eq sampleDetailsById.sampleResult1}">
															<option value="${sampleResultObj.result}" selected="selected">${sampleResultObj.result}</option>
														</c:when>
														<c:otherwise>
															<option value="${sampleResultObj.result}">${sampleResultObj.result}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"> <spring:message code="PATIENT.SAMPLE.1STACTION" /></label>
										<div class="col-md-12">
											<input type="text" class="form-control" name="action1stSample" id="action1stSample" value="${sampleDetailsById.action1stSample}"  maxlength="20" onchange ="validateNameAndCode(this)" /> 
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.SAMPLE.2NDRESULT" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="sampleResult2" id="sampleResult2" data-plugin-selectTwo
												onchange="showDiv(this);show(this)">
												<option value=""><spring:message
														code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${sampleResultList}" var="sampleResultObj">
													<c:choose>
														<c:when
															test="${ sampleResultObj.result eq sampleDetailsById.sampleResult2}">
															<option value="${sampleResultObj.result}" selected="selected">${sampleResultObj.result}</option>
														</c:when>
														<c:otherwise>
															<option value="${sampleResultObj.result}">${sampleResultObj.result}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"> <spring:message code="PATIENT.SAMPLE.2NDACTION" /></label>
										<div class="col-md-12">
											<input type="text" class="form-control" name="action2ndSample" id="action2ndSample" value="${sampleDetailsById.action2ndSample}"  maxlength="20" onchange ="validateNameAndCode(this)" /> 
										</div>
									</div>
								</div>
								</div>
								<div class="row">
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message code="PATIENT.SAMPLE.3RDRESULT" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="sampleResult3"
												id="sampleResult3" data-plugin-selectTwo
												onchange="showDiv(this);show(this)">
												<option value=""><spring:message
														code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${sampleResultList}" var="sampleResultObj">
													<c:choose>
														<c:when
															test="${ sampleResultObj.result eq sampleDetailsById.sampleResult3}">
															<option value="${sampleResultObj.result}" selected="selected">${sampleResultObj.result}</option>
														</c:when>
														<c:otherwise>
															<option value="${sampleResultObj.result}">${sampleResultObj.result}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"> <spring:message code="PATIENT.SAMPLE.3RDACTION" /></label>
										<div class="col-md-12">
											<input type="text" class="form-control" name="action3rdSample" id="action3rdSample" value="${sampleDetailsById.action3rdSample}"  maxlength="20" onchange ="validateNameAndCode(this)" /> 
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"><spring:message
												code="PATIENT.SAMPLE.4THRESULT" />:</label>
										<div class="col-md-12">
											<select class="form-control" name="sampleResult4"
												id="sampleResult4" data-plugin-selectTwo
												onchange="showDiv(this);show(this)">
												<option value=""><spring:message code="COMMON.LABEL.DROPDOWN.SELECT" /></option>
												<c:forEach items="${sampleResultList}" var="sampleResultObj">
													<c:choose>
														<c:when
															test="${ sampleResultObj.result eq sampleDetailsById.sampleResult4}">
															<option value="${sampleResultObj.result}" selected="selected">${sampleResultObj.result}</option>
														</c:when>
														<c:otherwise>
															<option value="${sampleResultObj.result}">${sampleResultObj.result}</option>
														</c:otherwise>
													</c:choose>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"> <spring:message code="PATIENT.SAMPLE.4THACTION" /></label>
										<div class="col-md-12">
											<input type="text" class="form-control" name="action3rdSample" id="action3rdSample" value="${sampleDetailsById.action4thSample}"  maxlength="20" onchange ="validateNameAndCode(this)" /> 
										</div>
									</div>
								</div>
						</div>
						<div class="row">
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"> <spring:message code="PATIENT.SAMPLE.SAMPLEDATE" /></label>
										<div class="col-md-12 datepicker_con">
											<input type="text" class="form-control jqueryNDatePicker" id="sampleDate" name="sampleDate"
											value="<fmt:formatDate value='${sampleDetailsById.sampleDate}' pattern='dd/MM/yyyy' />"
												placeholder="dd/mm/yyyy" onclick="validateDate()"	
												maxlength="12" onchange="test(this)">
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"> <spring:message code="PATIENT.SAMPLE.DUEDATE" /></label>
										<div class="col-md-12 datepicker_con">
											<input type="text" class="form-control jqueryNDatePicker" id="sampleDueDate" name="sampleDueDate"
											value="<fmt:formatDate value='${sampleDetailsById.sampleDueDate}' pattern='dd/MM/yyyy' />"
												placeholder="dd/mm/yyyy" onclick="validateDate()"	
												maxlength="12" onchange="test(this)">
										</div>
									</div>
								</div>
								<div class="col-md-3 col-sm-3">
									<div class="form-group">
										<label class="col-md-12 required" for="inputDefault"> <spring:message code="PATIENT.SAMPLE.TELSMSDATE" /></label>
										<div class="col-md-12 datepicker_con">
											<input type="text" class="form-control jqueryNDatePicker" id="telSmsDate" name="telSmsDate"
											value="<fmt:formatDate value='${sampleDetailsById.telSmsDate}' pattern='dd/MM/yyyy' />"
												placeholder="dd/mm/yyyy" onclick="validateDate()"	
												maxlength="12" onchange="test(this)">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-12" style="margin-top: 30px;">
									<div class="form-group text-center">
										<c:if
											test="${not empty sampleDetailsById.sampleId}">
											<button type="submit" class="btn btn-success">
												<spring:message code="COMMON.BUTTON.UPDATE"></spring:message>
											</button>

										</c:if>
										<c:if test="${empty sampleDetailsById.sampleId}">
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
								test="${not empty sampleDetailsById.sampleId}">
								<a href="#" class="fa fa-caret-up"></a>
								<c:set var="sectionHead" value="none"></c:set>
							</c:when>
							<c:when test="${empty sampleDetailsById.sampleId}">
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
									<th><spring:message code="PATIENT.SAMPLE.SAMPLEDATE" /></th>
									<%-- <th><spring:message code="COMPLICATION.DETAILS.LARGEHEMATOMA" /></th>
									<th><spring:message	code="COMPLICATION.DETAILS.CHRONICSCROTALPAIN" /></th>
									<th><spring:message	code="COMPLICATION.DETAILS.PAINONEJACULATION" /></th>
									<th><spring:message code="COMMON.LABEL.OPTION" /></th> --%>
								</tr>
							</thead>
							<tbody>
								<c:set scope="page" var="row" value="1" />
								<c:forEach items="${sampleList}" var="sampleObj">
									<tr class="gradeX">
										<td>${row}</td>
										<td>${sampleObj.patientDetails.patientId}|${sampleObj.patientDetails.firstName}</td>
										<td>${sampleObj.sampleDate}</td>
										<%-- <td>${complicationDetails.largeHematoma}</td>
										<td>${complicationDetails.chronicScrotalPain}</td>
										<td>${complicationDetails.painOnEjaculation}</td> --%>
										<td><a class="btn btn-xs btn-circle btn-warning" onclick="edit(${sampleObj.sampleId})"> 
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

<form id="editSampleId" action="./sampleDetails.htm" method="post">
 <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
	<input type="hidden" name="sampleId" id="propertyBuildingId">
</form>
<script type="text/javascript">
function edit(sampleId){
	        bootbox.confirm ({
	    	message: "Do you want to edit Sample details ?",
	    	callback: function (proceed)
	    	{
	    	 if(proceed)
	     		 
	    	 {
	    	   document.getElementById("propertyBuildingId").value=sampleId;
	    	   $('#editSampleId').submit();
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

