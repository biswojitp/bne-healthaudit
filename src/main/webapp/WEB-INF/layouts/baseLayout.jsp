<%@ page import = "java.io.*,java.util.*" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ page language="java" pageEncoding="utf-8" contentType="text/html; charset=UTF-8"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

 
<!doctype html>

<html class="fixed">
<head>
<title>HealthEdit</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Health:ERP Systems">
	<meta name="keywords" content="Health:HealthAudit Systems, KeybyteSystems Technologies">
	<meta name="author" content="KeybyteSystems Technologies">

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
	

	
			<section class="body">
				<!-- start: header -->
				<tiles:insertAttribute name="header" /> 
				<!-- end: header -->

				<div class="inner-wrapper">			
	
					<tiles:insertAttribute name="leftMenu" /> 
	
					<!-- Body -->
					<tiles:insertAttribute name="body" />
					<!-- Body end-->
				</div>
			</section>
		
	<!-- Vendor -->

	<script src="/assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js"></script>
	<script src="/assets/vendor/bootstrap/js/bootstrap.js"></script>
	<script src="/assets/vendor/nanoscroller/nanoscroller.js"></script>
	<script src="/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
	<script src="/assets/vendor/magnific-popup/magnific-popup.js"></script>
	<script src="/assets/vendor/jquery-placeholder/jquery.placeholder.js"></script>
	<script src="/assets/vendor/bootstrap-fileupload/bootstrap-fileupload.min.js"></script>
	<script src="/assets/vendor/jquery-datatables/media/js/jquery.dataTables.js"></script>
	<script src="/assets/vendor/jquery-datatables-bs3/assets/js/datatables.js"></script>
	<script src="/assets/vendor/bootstrap-multiselect/bootstrap-multiselect.js"></script>
	<!-- Theme Base, Components and Settings -->
	<script src="/assets/javascripts/theme.js"></script>
	<script src="/assets/javascripts/bootbox.min.js"></script>
	<!-- Theme Custom -->
	<script src="/assets/javascripts/theme.custom.js"></script>
	
	<!-- Theme Initialization Files -->
	<script src="/assets/javascripts/theme.init.js"></script>

	<!-- Examples -->
	<script src="/assets/javascripts/tables/examples.datatables.default.js"></script>
	<script src="/assets/javascripts/tables/examples.datatables.row.with.details.js"></script>

</body>
</html>