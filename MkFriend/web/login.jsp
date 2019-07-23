<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/19
  Time: 11:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="head.txt" %>
<html>
<head>
    <title>login</title>
    <style type="text/css">
        #name{width: 250px;height: 40px}
        #pwd{width: 250px;height: 40px}

    </style>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-3.2.1.js"></script>
    <script type="text/javascript">
        function loadCheck() {
            var name=document.getElementById("name").value;
            var password=document.getElementById("pwd").value;
            if(name.length==0||password.length==0){
                alert("账号或密码为空！");
                return;
            }

            $.post("/Register/LoginServlet",{"name":name,"password":password},function(data){
                if(data=="11"){
                    var url = "/loginSuccess.jsp?name=" + name;
                    window.location.href=url;
                }else{
                    alert(data);
                }
                //使用空白div显示
                //$("#insert").html(data);
            });

            /*xmlhttp.onreadystatechange=getResult;
            //xmlhttp.open("POST","//<%--${pageContext.request.contextPath}--%>/Register/LoginServlet",true);
            //alert("222")
            //如果上面为post必须加下面这一行
            xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp.send("u="+name+"&p="+password);*/



        }
        function getResult() {
            if(xmlhttp.readyState==4){
                if(xmlhttp.status==200){
                    var rec=xmlhttp.responseText;
                    document.getElementById("#insert").innerHTML=rec;
                }
                else {
                    alert("连接失败！")
                }
            }

        }

    </script>
</head>
<body bgcolor="#faebd7">
<center>
    <h1> login</h1>

    <input id="name" name="userName" maxlength="20"  placeholder="用户名" type="text" required="required" /><br><br>
    <input id="pwd" name="password" maxlength="20"  placeholder="密码" type="password" required="required" /><br><br>
    <button type="button" class="btn btn-primary btn-block btn-large" onclick="loadCheck()">登录</button>
    <div id="insert" style="color:red;padding:10px;font-size:12px"></div>


</center>
</body>
</html>
