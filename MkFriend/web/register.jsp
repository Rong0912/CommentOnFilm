<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/17
  Time: 20:56
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="head.txt" %>
<html>
<head>
    <title>会员注册</title>
    <style type="text/css">
        .div1{width: 650px;height: 350px;margin-left: 560px}
        #message{
            display: inline;
        }
    </style>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-3.2.1.js"></script>
    <script type="text/javascript">
        function Check(){
            var user = $("#user").val();
            var psw = $("#pwd").val();
            if(user == ""){
                $("#msg").html("用户名不能为空!");
                return false;
            }else if(psw == ""){
                $("#msg").html("用户名密码不能为空!");
                return false;
            }else{
                return true;
            }
        }

        $(function(){
            //通过jquery选择器定位username
            $(":input[name='logname']").change(function(){
                //获取logname的value值
                var val=$(this).val();//value有空格
                val=$.trim(val);//去掉空格
                //使用绝对路径
                var url="${pageContext.request.contextPath}/check";
                //去掉缓存的影响
                var args={"logname":val,"time":new Date()};
                //ajax
                $.post(url,args,function(data){
                    // alert(data);
                    //使用空白div显示
                    $("#message").html(data);
                });
            });
        });//window.onload事件
    </script>
</head>
<body bgcolor="#faebd7">

    <div class="div1">
        <br>
        <form method="post" action="/Register/RegisterServlet" onsubmit="return Check()">
            <a style="color: red">温馨提示：输入您的信息，会员名字必须由字母和数字组成</a>
            <br>
            <br>
            <p ><span style="display: inline-block; width: 95px"><a style="margin-left: 20px">用  户  名</a>   </span>
                <input id="user" name="logname" type="text" maxlength="20" >
                <span id="message" style="font-size: 12px;position: relative">  </span>
            </p>

            <p><span style="display: inline-block; width: 95px"><a style="margin-left: 20px">密 &nbsp  &nbsp  码</a></span>
                <input id="pwd" name="password" type="password" maxlength="20"  >
            </p>

            <p><span style="display: inline-block; width: 95px"><a style="margin-left: 20px">手机号码</a></span>
                <input  name="phone" type="password" maxlength="11"  >
            </p>

            <p><span style="display: inline-block; width: 95px"><a style="margin-left: 20px">电子邮件</a></span>
                <input type="text"  name="email"    maxlength="20" >
            </p>

            <p >
                <span style="display: inline-block; width: 95px;font-size: 18px;position: relative ;top: -36px">个人简介</span>
                <a><textarea id="resume" rows="5" cols="30" name="message" ></textarea></a>
            </p>


            <p>
                <input style="margin-left:120px;margin-top: 10px" type="submit" value="注册"/>
                <span id="msg" style="color: red;font-size: 12px"></span>
            </p>

        </form>
    </div>


</body>
</html>
