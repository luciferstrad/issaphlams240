<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
		"http://www.w3.org/TR/html4/loose.dtd">

<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=utf-8" %>
<%@ taglib uri="tags-lams" prefix="lams" %>
<%@ taglib uri="tags-fmt" prefix="fmt" %>
<%@ taglib uri="tags-core" prefix="c" %>

<lams:html>
<lams:head>
	<META HTTP-EQUIV="Refresh" CONTENT="0;URL=monitoring/monitorLesson.jsp?lessonID=<c:out value="${lessonID}"/>"/>
	<TITLE><fmt:message key="title.monitor.lesson.window"/></TITLE>
	<lams:css/>
</lams:head>

<body class="stripes">
	
		<div id="content">
			<p><fmt:message key="msg.loading.monitor.lesson.window"/></p>
		</div>
	   
		<div id="footer">
		</div><!--closes footer-->


</BODY>
	
</lams:html>
