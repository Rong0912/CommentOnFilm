<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/26
  Time: 9:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Modify password</title>
    <script type="text/javascript" src="/js/jquery-3.2.1.js"></script>
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
<BODY >
<Font size=2>
    <CENTER>
        <BR><h1>renew password</h1>
        <FORM >
            <BR>手机号码:<Input id="phone" type="text" name="phone"><br>
            <BR>邮箱号码:<Input id="email" type="text" name="email"><br>
            <BR>新的密码: <Input id="new" type=password name="new1"><br>
            <BR>确认密码: <Input id="new2" type=password name="new2"><br>
            <BR><button type="button" class="btn btn-primary btn-block btn-large" onclick="passCheck()">提交</button>

        </Form>
    </CENTER>
</Font>
</BODY>
</HTML>