<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/22
  Time: 12:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<HEAD><%@ include file="head.txt" %></HEAD>
<HTML><BODY >
<CENTER>
    <a>密码更新成功！</a>
    <BR>您的新密码：<%=request.getParameter("newPassword")%>
    <BR>您的旧密码：<%=request.getParameter("oldPassword")%>

</CENTER>
</BODY>
</HTML>