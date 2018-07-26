<%@ page import = "java.io.*,java.util.*" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" pageEncoding="utf-8" contentType="text/html; charset=UTF-8"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

 
<!doctype html>

<html class="fixed">
<head>
<title>HealthEdit</title>
<!-- Favicon -->
	<link rel="shortcut icon" href="/images/favicon.png">
	<link rel="stylesheet" href="/assets/vendor/jquery_datepicker/jquery.datepick.css">
	<script src="/assets/vendor/jquery_datepicker/jquery.plugin.js"></script>
	<script src="/assets/vendor/jquery_datepicker/jquery.datepick.js"></script>
	<script src="/assets/vendor/jquery/jquery.js"></script>
		
	<!-- Vendor CSS -->
	<link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.css" />
	<link rel="stylesheet" href="/assets/vendor/font-awesome/css/font-awesome.css" />
	<link rel="stylesheet" href="/assets/vendor/magnific-popup/magnific-popup.css" />
	<link rel="stylesheet" href="/assets/vendor/bootstrap-datepicker/css/datepicker3.css" />
	<link rel="stylesheet" href="/assets/vendor/bootstrap-fileupload/bootstrap-fileupload.min.css" />
	<link rel="stylesheet" href="/assets/vendor/jquery-datatables-bs3/assets/css/datatables.css" />

	<!-- Theme CSS -->
	<link rel="stylesheet" href="/assets/stylesheets/theme.css" />

	<!-- Skin CSS -->
	<link rel="stylesheet" href="/assets/stylesheets/skins/default.css" />

	<!-- Theme Custom CSS -->
	<link rel="stylesheet" href="/assets/stylesheets/theme-custom.css">
	<link rel="stylesheet" href="/assets/vendor/bootstrap-multiselect/bootstrap-multiselect.css" />
   	<link href="/assets/vendor/multi_select/css/multi-select.css" media="screen" rel="stylesheet" type="text/css">
	<!-- Head Libs -->
	<script src="/assets/vendor/modernizr/modernizr.js"></script>
	<script src="/assets/vendor/jquery/jquery.js"></script>
</head>

<body>	
		<section class="body-sign" >
			<div class="center-sign">
				<div class="panel panel-sign">
					<div class="panel-title-sign mt-xl text-right">
						<h2 class="title text-uppercase text-bold m-none"><i class="fa fa-user mr-xs"></i> Sign Up</h2>
					</div>
					<div class="panel-body">
							<p class="text-success">
								 <c:if test="${not empty message}">
								 	<spring:message code="HOME.SIGNUP.SUCCESS"/>
								 </c:if>
							</p>
							<p class="text-warning">
								<c:if test="${not empty error}">
									<spring:message code="HOME.SIGNUP.ERROR"/>
								 </c:if>
							</p>
						 <br>
						<form action="saveSignUp.htm" method="post">
							 <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/> 
							<div class="form-group mb-none">
								<div class="row">
									<div class="col-sm-4 mb-lg">
										<label><spring:message code="HOME.REGISTER.FIRSTNAME"/></label>
										<input name="firstName" type="text" class="form-control input-lg" />
									</div>
									<div class="col-sm-4 mb-lg">
										<label><spring:message code="HOME.REGISTER.LASTNAME"/></label>
										<input name="lastName" type="text" class="form-control input-lg" />
									</div>
									<div class="col-sm-4 mb-lg">
								<label><spring:message code="HOME.REGISTER.USERNAME" /></label> 
								<input name="userName" type="text" class="form-control input-lg" />
							</div>
									
								</div>
							</div>

					<div class="form-group mb-lg">
						<div class="row">
							<div class="col-sm-4 mb-lg">
										<label><spring:message code="HOME.REGISTER.DEPARTMENT"/></label>
										<input name="department" type="text" class="form-control input-lg" />
									</div>
							<div class="col-sm-4 mb-lg">
								<label><spring:message code="HOME.REGISTER.MOBILE" /></label> 
								<input name="mobile" type="text" class="form-control input-lg" />
							</div>
							<div class="col-sm-4 mb-lg">
								<label><spring:message code="HOME.REGISTER.DOB" /></label> 
								<input name="dob" type="text" class="form-control input-lg" />
							</div>

						</div>
					</div>

					<div class="form-group mb-none">
								<div class="row">
									<div class="col-sm-6 mb-lg">
										<label><spring:message code="HOME.REGISTER.PASSWORD"/></label>
										<input name="password" type="password" class="form-control input-lg" />
									</div>
									<div class="col-sm-6 mb-lg">
										<label><spring:message code="HOME.REGISTER.CONFPASSWORD"/></label>
										<input name="confirmpassword" type="password" class="form-control input-lg" />
									</div>
								</div>
								<div class="row">
									<div class="col-sm-6 mb-lg">
										<label><spring:message code="HOME.REGISTER.GENDER"/></label>
										<input name="gender" type="text" class="form-control input-lg" />
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-8">
									<div class="checkbox-custom checkbox-default">
										<input id="AgreeTerms" name="agreeterms" type="checkbox"/>
										<label for="AgreeTerms">I agree with <a href="#">terms of use</a></label>
									</div>
								</div>
								<div class="col-sm-4 text-right">
									<button type="submit" class="btn btn-primary hidden-xs">Sign Up</button>
									<button type="submit" class="btn btn-primary btn-block btn-lg visible-xs mt-lg">Sign Up</button>
								</div>
							</div>

							<span class="mt-lg mb-lg line-thru text-center text-uppercase">
								<span>or</span>
							</span>

							<div class="mb-xs text-center">
								<a class="btn btn-facebook mb-md ml-xs mr-xs">Connect with <i class="fa fa-facebook"></i></a>
								<a class="btn btn-twitter mb-md ml-xs mr-xs">Connect with <i class="fa fa-twitter"></i></a>
							</div>

							<p class="text-center">Already have an account? <a href="login.htm">Sign In!</a>

						</form>
					</div>
				</div>

				<p class="text-center text-muted mt-md mb-md">&copy; Copyright 2014. All Rights Reserved.</p>
			</div>
		</section>
		<!-- end: page -->
		</body>
		</html>

