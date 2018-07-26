<%@ page language="java" pageEncoding="utf-8" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<script src="resources/javascripts/commonDashBoardScripts.js"></script>

<style>
/*
.panel-body table tr td label.menuNameLabel {
	color: red;
}
 */
.panel-body table tr td label.totalCountLabel {
	cursor: pointer;
}
.panel-body table tr td label.totalCountLabel:hover {
	color: #00618e;
	text-decoration: underline;
}
.menuNameLabel {
	padding-top: 3px;
	padding-bottom: 3px;
	margin-bottom: 0px;
}
</style>

<section role="main" class="content-body">
	<header class="page-header">
		<h2>Dashboard</h2>
		<div class="right-wrapper pull-right">
			<ol class="breadcrumbs">
				<li>
					<a href="./welcome">
						<i class="fa fa-home"></i>
					</a>
				</li>
				<li><span>Dashboard</span></li>
			</ol>
		</div>
	</header>

	<!-- start: page -->
	<div class="row">
		<div class="col-lg-12" style="padding:0;">
		
		<div class="col-lg-4 col-sm-12">
				<section class="panel dashboard_panel">
					<header class="panel-heading">
						<div class="panel-actions">
							<!-- <a><label>0</label></a> -->
						</div>
		
						<h2 class="panel-title">
							<a>My Profile</a>
						</h2>
					</header>
					<div class="panel-body">
						
					</div>
				</section>
	
			</div>
		
			<div class="col-lg-4 col-sm-12">
				<section class="panel dashboard_panel">
					<header class="panel-heading">
						<div class="panel-actions">
							<a><label>0</label></a>
						</div>
		
						<h2 class="panel-title">
							<a href="#"></a>
						</h2>
					</header>
					<div class="panel-body">
						<table class="table">
							<tbody>
								<tr>
									<td><label class="menuNameLabel">#</label></td>
									<td><a href="#">0</a></td>
								</tr>
								<tr>
									<td><label class="menuNameLabel">#</label></td>
									<td><a href="#">0</a></td>
								</tr>
								<tr>
									<td><label class="menuNameLabel">#</label></td>
									<td><a href="#">0</a></td>
								</tr>
								<tr>
									<td><label class="menuNameLabel">#</label></td>
									<td><a href="#">0</a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
	
			</div>								

			
		</div>
	</div>
	<!-- start: user dashboard -->
	<!-- end: user dashboard -->
	<!-- end: page -->
</section>

<script type="text/javascript">
$(document).ready(function() 
{
	// The following function is called when Dashboard page is loaded. It shows the Pending Vouchers count for the current User and Role.
	getPendingVoucherCount();
	geFAMSDashboardDetails();
});
</script>
