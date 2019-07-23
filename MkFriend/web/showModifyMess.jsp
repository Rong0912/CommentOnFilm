<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/22
  Time: 14:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="head.txt" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<center>
<h3> 修改注册信息成功！</h3>
    新的手机号：<%=request.getParameter("newPhone")%><br><br>
    新的邮箱号：<%=request.getParameter("newEmail")%><br><br>
    新的简介信息：<%=request.getParameter("newMessage")%>
</center>
</body>
</html>
