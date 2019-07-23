<%@ page import="pojo.member" %><%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/18
  Time: 21:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="head.txt" %>
<html>
<head>
    <title>注册成功</title>
</head>

<body>
<%
    /*转发情况下使用 ，但是新的页面超链接会失效
    member member= (member) request.getAttribute("member");
    String logname=member.getLogname();
    String email=member.getEmail();
    String phone=member.getPhone();
    String message=member.getMessage();*/

    String logname=request.getParameter("logname");
    String email=request.getParameter("email");
    String phone=request.getParameter("phone");
    String message=request.getParameter("message");
%>
<center>
    <table>
        <br>
        <a style="color: deepskyblue">注册成功！</a>
        <tr><td>会员名称:</td><td><%=logname%></td></tr><br>
        <tr><td>联系电话:</td><td><%=phone%></td></tr><br>
        <tr><td>电子邮件:</td><td><%=email%></td></tr><br>

    </table>
    <table>
        <tr><td><Font size=3>您的简历和交友标准：</Font></td></tr>
        <tr>
            <td><TextArea name="message" Rows="6" Cols="30"><%=message%></TextArea></td>
        </tr>

    </table>

</center>


</body>
</html>
