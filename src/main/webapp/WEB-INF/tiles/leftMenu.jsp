<%@ page language="java" pageEncoding="utf-8" contentType="text/html; charset=UTF-8"%>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>



<script type="text/javascript">

$(function() 
{
	// this will get the full URL at the address bar
	var url = window.location.href;
  
	$(".nav-main a").each(function() 
	{
		// checks if its the same on the address bar

		/* *************   Following part, added for Vouchers [Tapan, 22May2017]   *****************   */
		var urlAppender = url.substring(0, (url.lastIndexOf("/")));
		var urlLastName = url.substring((url.lastIndexOf("/") + 1));

		if (urlLastName == "searchVoucher.htm") 
		{
			url = urlAppender + "/" + '${parentUrl}';
		}
		
		
		/* *************   Till this, added for Vouchers [Tapan, 22May2017]   *****************   */

		if (url == (this.href)) 
		{
			$(this).closest("li").addClass("current");
			//for making parent of submenu active
			$(this).closest("li").parent().addClass("nav-expanded nav-active");
			$(this).closest("li").parent().parent().addClass("nav-expanded nav-active");
			$(this).closest("li").parent().parent().parent().addClass("nav-expanded nav-active");
			$(this).closest("li").parent().parent().parent().parent().addClass("nav-expanded nav-active");
			$(this).closest("li").parent().parent().parent().parent().parent().addClass("nav-expanded nav-active");
			$(this).closest("li").parent().parent().parent().parent().parent().parent().addClass("nav-expanded nav-active");
		}
	});
});
</script>

<style>
/* .current a {
	color: #0af !important;
	background: rgb(30, 36, 43);
} */

.current a i {
	color: #0f82bb !important;
}

.current a i:before {
	content: "\f04b";
}
</style>

<aside id="sidebar-left" class="sidebar-left">

	<div class="sidebar-header">
		<div class="sidebar-title" style="color: white;">Manage :</div>
		<div class="sidebar-toggle hidden-xs" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
			<i class="fa fa-bars" aria-label="Toggle sidebar"></i>
		</div>
	</div>

	<div class="nano">
		<div class="nano-content">
			<nav id="menu" class="nav-main" role="navigation">
				<ul class="nav nav-main">
					<li>
						<a href="./welcome">
							<i class="fa fa-home" aria-hidden="true"></i>
							<span>Dashboard</span>
						</a>
					</li>
					<li class="nav-parent">
						<a> 
						<i class="fa fa-cogs" aria-hidden="true"></i> 
							<span>User Operation</span>
						</a>
						<ul class="nav nav-children">
							<li>
								<a href="./signup.htm">
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 Signup
								 </a>
							</li>
							
							
							
							<!-- <li>
								<a href="./createrole.htm">
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 Role
								 </a>
							</li> -->
							
							<li class="nav-parent">
								<a href="#">
									<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
									Patient Details
								</a>
								<ul class="nav nav-children">
									<li>
										<a href="./patientComplicationDetails.htm">
											<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
											  Patient List
										</a>
									</li>
									<li>
										<a href="./sampleDetails.htm">
											<i class="fa fa-long-arrow-right" aria-hidden="true"></i> 
											Samples 
										</a>
									</li>
									<!-- <li>
										
										<a href="./complicationDetails.htm">
											<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
											Complications 
											
										</a>
									</li> -->
								</ul>
							</li>
						</ul>
					</li>
					<!-- <li class="nav-parent">
						<a> 
						<i class="fa fa-tasks" aria-hidden="true"></i> 
							<span>Project Assignment</span>
						</a>
						<ul class="nav nav-children">
							<li>
								<a href="./projectsDetails.htm">
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 Project
								 </a>
							</li>
							
							<li>
								<a href="./moduleDetails.htm">
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 Module
								 </a>
							</li>
							<li>
								<a href="./dsReport.htm">
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 Daily Status Report
								 </a>
							</li>
							<li>
								<a>
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 Project Phases
								 </a>
							</li>
							<li>
								<a>
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 Project Report
								 </a>
							</li>
							<li>
								<a>
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 Project Time Line
								 </a>
							</li>
							<li>
								<a>
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 Project Manager
								 </a>
							</li>
							<li class="nav-parent">
								<a>
									<i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
									Task Assignment
								</a>
								<ul class="nav nav-children">
									<li>
										<a>
											<i class="fa fa-long-arrow-right" aria-hidden="true"></i> 
											Assign Task
										</a>
									</li>
									<li>
										<a>
											<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
											 Assignment Progress
										</a>
									</li>
									<li>
										<a>
											<i class="fa fa-long-arrow-right" aria-hidden="true"></i> 
											Others
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</li> -->
					<li class="nav-parent">
						<a> 
						<i class="fa fa-bar-chart" aria-hidden="true"></i> 
							<span>Reports</span>
						</a>
						<ul class="nav nav-children">
							<li>
								<a>
								 <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
								 	Resource Overview
								 </a>
							</li>
							<li>
								<a>
									<i class="fa fa-chevron-circle-right" aria-hidden="true"></i> 
									Team Overview
								</a>
							</li>
							<li>
								<a>
									<i class="fa fa-chevron-circle-right" aria-hidden="true"></i> 
									Task TimeSheet
								</a>
							</li>
							<li>
								<a>
									<i class="fa fa-chevron-circle-right" aria-hidden="true"></i> 
									Project TimeSheet
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</aside>

