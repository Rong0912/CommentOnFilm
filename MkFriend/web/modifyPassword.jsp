<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/22
  Time: 11:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="head.txt" %>
<html>
<head>
    <title>Modify password</title>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-3.2.1.js"></script>
    <script type="text/javascript">
        function passCheck() {
            var oldPs = document.getElementById("old").value;
            var newPs = document.getElementById("new").value;
            if (oldPs.length == 0 || newPs.length == 0) {
                alert("密码不能为空！");

            }
            else {

                $.post("/Register/helpModifyPasswordServlet", {"old": oldPs, "new": newPs}, function (data) {
                    if (data == "11") {
                        var url = "/showNewPassword.jsp?newPassword=" + newPs + "&oldPassword=" + oldPs;
                        window.location.href = url;
                    } else if (data == "0") {
                        var url2 = "/login.jsp";
                        window.location.href = url2;
                    } else {
                        alert(data)
                    }

                });
            }
        }
    </script>
<BODY bgcolor="#faebd7">
<Font size=2>
    <CENTER>
        <BR>请输入您的当前的密码和新密码：
        <FORM >
            <BR>旧密码:<Input id="old" type=password name="oldPassword"><br>
            <BR>新密码: <Input id="new" type=password name="newPassword"><br>
            <BR><button type="button" class="btn btn-primary btn-block btn-large" onclick="passCheck()">提交</button>

        </Form>
    </CENTER>
</Font>
</BODY>
</HTML>