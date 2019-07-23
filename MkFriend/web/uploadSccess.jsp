<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/22
  Time: 10:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<HEAD><%@ include file="head.txt" %></HEAD>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%
    String oldname= request.getParameter("oldname");
    String newname= request.getParameter("newname");

%>
<center>
    <%=oldname%>成功上传<br>
    上传后的文件名字<%=oldname%><br>
    保存后的文件名字<%=newname%><br>
    <img style="width: 200px ;height: 200px" src="upload/<%=newname%>">
    <a>图片效果</a>

</center>
</body>
</html>
