<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/21
  Time: 20:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<HEAD><%@ include file="head.txt" %></HEAD>
<BODY bgcolor="#faebd7">
<Font size=2 color=blue>
    <CENTER>
        <BR>文件将被上传到 Web服务目录mkfrend的子目录image中。
        <BR>选择要上传的图像照片文件(名字不可以含有非ASCII码字符，比如汉字等)：
        <FORM action="/Register/helpUploadServlet" method="post" enctype="multipart/form-data">
            <INPUT type=FILE name="fileName" size="40">
            <BR><INPUT type="submit" name ="g" value="提交">
        </FORM>
    </CENTER>
</Font>
</BODY>
</html>
