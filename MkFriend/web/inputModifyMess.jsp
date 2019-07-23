<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/22
  Time: 14:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="head.txt" %>
<html>
<head>
    <title>modify registerMessage</title>
</head>
<body bgcolor="#faebd7">
<center>
<Font size=2>
    <form  action="/Register/helpModifyMessServlet" method="post">
        <table>
            <tr>
                <td>新联系电话:</td>
                <td><Input type=text name="newPhone"></td>
            </tr>
            <tr>
                <td>新电子邮件:</td>
                <td><Input type=text name="newEmail"></td>
            </tr>
        </table>
        <table>
            <tr>
                <td>新简历和交友标准：</td>
            </tr>
            <tr>
                <td><TextArea name="newMessage" Rows="6" Cols="30">
          </TextArea>
                </td>
            </tr>
            <tr>
                <td><Input type=submit name="g" value="提交修改"></td>
            </tr>
            <tr>
                <td><Input type=reset value="重置"></td>
            </tr>
        </table>
    </form>>
</Font>
</CENTER>

</body>
</html>
