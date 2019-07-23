<%--
  Created by IntelliJ IDEA.
  User: Crush
  Date: 2019/7/22
  Time: 15:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ include file="head.txt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<html>
<head>
        <%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path ;
%>


    <base href="basePath">


    <title>会员展示</title>
    <style type="text/css">
        .td{width: 100px}
    </style>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-3.2.1.js"></script>

    <script>
    function update(){//将隐藏的div展示出来

        window.location.href="/helpShowMemberServlet";
        //$("#update").css("display","block");
    }

    function update2() {

        $("#update").css("display","none");
    }

    function update3(){

        window.location.href="/helpShowMemberServlet?logname="+document.getElementById("logname").value;
        //$("#update").css("display","block");
    }
</script>
</head>
<BODY bgcolor="#faebd7" >
    <center>
        <Font size=3>

            <FORM >
                <BR>显示全体会员
                <INPUT type="hidden" value="1" name="showPage" size=6>
                <button type="button" class="btn btn-primary btn-block btn-large" onclick="update()">显示</button>
            </Form>

            <FORM >
                <br>输入要查找的会员名：
                <INPUT type="text" id="logname"  name="logname" size=10 onclick="update2()">&nbsp;
                <button type="button" class="btn btn-primary btn-block btn-large" onclick="update3()">显示</button>

            </FORM>
            <div id="update"  <% if(request.getAttribute("list")==null){
                out.print("style=display:none");
            } %>>

                <table  border="1" cellspacing="0">
                    <tr>
                        <td width="100">会员名</td>
                        <td width="100">电话</td>
                        <td width="100">email</td>
                        <td width="150">简历和女友标准</td>
                        <%--<td>照片</td>--%>
                    </tr>
                    <c:forEach items="${list}" var="user">
                        <tr>
                            <td>${user.logname}</td>
                            <td>${user.phone}</td>
                            <td>${user.email}</td>
                            <td>${user.message}</td>

                        </tr>
                    </c:forEach>
                </table>
                <br>
                <table>
                <tr>
                    <td width="150">当前为第${page.currentPage}页,共${page.totalPage}页</td>
                    <td width="200">
                        <c:choose>
                            <c:when test="${page.hasPrePage}">
                                <a href="<%=path %>/helpShowMemberServlet?currentPage=1">首页</a> |
                                <a href="<%=path %>/helpShowMemberServlet?currentPage=${page.currentPage -1 }">上一页</a>
                            </c:when>
                            <c:otherwise>
                                首页 | 上一页
                            </c:otherwise>
                        </c:choose>

                        <c:choose>
                            <c:when test="${page.hasNextPage}">
                                <a href="<%=path %>/helpShowMemberServlet?currentPage=${page.currentPage + 1 }">下一页</a> |
                                <a href="<%=path %>/helpShowMemberServlet?currentPage=${page.totalPage }">尾页</a>
                            </c:when>
                            <c:otherwise>
                                下一页 | 尾页
                            </c:otherwise>
                        </c:choose>
                        </td>
                    </tr>
                </table>
            </div>
        </Font>
    </center>


</BODY>
</html>
