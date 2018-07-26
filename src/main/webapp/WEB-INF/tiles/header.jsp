<%@ page language="java" pageEncoding="utf-8" contentType="text/html; charset=UTF-8"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>



<style>
#currtDesgRole {
	height: 5px;
	color: #015a86;
	background: #e8e9ea;
}
#currtDesgRole:hover {
	cursor: pointer;
	color: #000000;
	background: #efefef;
}

</style>

 
<header class="header">
	<c:set value="${pageContext.response.locale}" var="locale" scope="page"></c:set>
	<c:set value="hi" var="hi" scope="page"></c:set>
	<c:set value="en" var="en" scope="page"></c:set> 
	<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
	  
	<script type="text/javascript">
	$( document ).ready(function() 
	{
		var localeVar="${pageContext.response.locale}" ;
		
		if(localeVar=="en")
			$("#localeId").val(1);
		else if(localeVar=="hi")
			$("#localeId").val(2);
		else if(localeVar=="or")	
			$("#localeId").val(3);
	});
	  
	function changeLocale(localeID) 
	{
		if(localeID=='1')
		{
			location.href = "?lang=en";
		}
		else if(localeID=='2')
		{
			location.href = "?lang=hi";
		}
		else if(localeID=='3')
		{
			location.href = "?lang=or";
		}
	}
	
	</script>
 
	<div class="logo-container">
		<a href="./welcome" class="logo" >
			<img src="/images/healthcare.jpg" height="100" width="60"/>
		</a>
		<div class="visible-xs toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
			<i class="fa fa-bars" aria-label="Toggle sidebar"></i>
		</div>
	</div>
			
	<!-- start: search & user box -->
	<div class="header-right">
	
		<span class="separator"></span>
		<div id="userbox" class="userbox">
			<c:choose> 
				<c:when test="${pageContext.request.userPrincipal.name != null}">
					<form id="logoutForm" method="POST" action="${contextPath}/logout">
						<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
					</form>
					<a href="#" data-toggle="dropdown">
						<figure class="profile-picture">
							<img src="resources/images/user.jpg" alt="Joseph Doe" class="img-circle" data-lock-picture="resources/images/!logged-user.jpg" />
						</figure>
						<div class="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
							<span class="name">${pageContext.request.userPrincipal.name}</span>
						</div>
						<i class="fa custom-caret"></i>
					</a>
					<div class="dropdown-menu">
						<ul class="list-unstyled">
							<li class="divider"></li>
							<li>
								<a role="menuitem" tabindex="-1" href="#"><i class="fa fa-user"></i> My Profile</a>
							</li>
							<li>
								<a onclick="document.forms['logoutForm'].submit()" role="menuitem" tabindex="-1" style="cursor: pointer;"><i class="fa fa-power-off"></i> Logout</a>
							</li>
						</ul>
					</div>
				</c:when>
			</c:choose>
		</div>
	</div>
	

	<!-- end: search & user box -->
</header>

