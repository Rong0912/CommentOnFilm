<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>学员关系管理系统CRM</title>
    <!-- 引入css样式文件 -->
    <!-- Bootstrap Core CSS -->
    <link href="../../css/bootstrap.min.css" rel="stylesheet">
    <!-- MetisMenu CSS -->
    <link href="../../css/metisMenu.min.css" rel="stylesheet">
    <!-- DataTables CSS -->
    <link href="../../css/dataTables.bootstrap.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="../../css/sb-admin-2.css" rel="stylesheet">
    <!-- Custom Fonts -->
    <link href="../../css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="../../css/boot-crm.css" rel="stylesheet" type="text/css">
    <style>
        .panel-group{max-height:770px;overflow: auto;}
        .leftMenu{margin:10px;margin-top:5px;}
        .panel-heading{background-color: #337ab7;border-color: #2e6da4;font-size:14px;padding-left:20px;height:36px;line-height:36px;color:white;position:relative;cursor:pointer;}/*转成手形图标*/
        .panel-heading span{position:absolute;right:10px;top:12px;}
        .menu-item-left{padding: 2px; background: transparent; border:1px solid transparent;border-radius: 6px;}
        .menu-item-left:hover{background:#C4E3F3;border:1px solid #1E90FF;}
    </style>
</head>
<body>
<div id="wrapper">
    <!-- 导航栏部分 -->
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-brand" href="">学员关系管理系统（CRM） v2.0</a>
        </div>
        <!-- 导航栏右侧图标部分 -->
        <!-- 导航栏右侧图标部分 -->
        <ul class="nav navbar-top-links navbar-right">
            <!-- 邮件通知 start -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="refer/list.action#">
                    <i class="fa fa-envelope fa-fw"></i>
                    <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-messages">
                    <li>
                        <a href="refer/list.action#">
                            <div>
                                <strong>张经理</strong> <span class="pull-right text-muted">
								<em>昨天</em>
							</span>
                            </div>
                            <div>今天晚上开会，讨论一下下个月工作的事...</div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a class="text-center" href="refer/list.action#">
                            <strong>查看全部消息</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
            <!-- 邮件通知 end -->
            <!-- 任务通知 start -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="refer/list.action#">
                    <i class="fa fa-tasks fa-fw"></i>
                    <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-tasks">
                    <li>
                        <a href="refer/list.action#">
                            <div>
                                <p>
                                    <strong>任务 1</strong>
                                    <span class="pull-right text-muted">完成40%</span>
                                </p>
                                <div class="progress progress-striped active">
                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                        <span class="sr-only">完成40%</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="refer/list.action#">
                            <div>
                                <p>
                                    <strong>任务 2</strong>
                                    <span class="pull-right text-muted">完成20%</span>
                                </p>
                                <div class="progress progress-striped active">
                                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                        <span class="sr-only">完成20%</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a class="text-center" href="refer/list.action#">
                            <strong>查看所有任务</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
            <!-- 任务通知 end -->
            <!-- 消息通知 start -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="refer/list.action#">
                    <i class="fa fa-bell fa-fw"></i>
                    <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-alerts">
                    <li>
                        <a href="refer/list.action#">
                            <div>
                                <i class="fa fa-comment fa-fw"></i> 新回复
                                <span class="pull-right text-muted small">4分钟之前</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="refer/list.action#">
                            <div>
                                <i class="fa fa-envelope fa-fw"></i> 新消息
                                <span class="pull-right text-muted small">4分钟之前</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="refer/list.action#">
                            <div>
                                <i class="fa fa-tasks fa-fw"></i> 新任务
                                <span class="pull-right text-muted small">4分钟之前</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="refer/list.action#">
                            <div>
                                <i class="fa fa-upload fa-fw"></i> 服务器重启
                                <span class="pull-right text-muted small">4分钟之前</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a class="text-center" href="refer/list.action#">
                            <strong>查看所有提醒</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
            <!-- 消息通知 end -->
            <!-- 用户信息和系统设置 start -->
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="refer/list.action#">
                    <i class="fa fa-user fa-fw"></i>
                    <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                    <li><a href="refer/list.action#"><i class="fa fa-user fa-fw"></i>
                        用户：</a>
                    </li>
                    <li><a href="refer/list.action#"><i class="fa fa-gear fa-fw"></i> 系统设置</a></li>
                    <li class="divider"></li>
                    <li>
                        <a href="logout.action">
                            <i class="fa fa-sign-out fa-fw"></i>退出登录
                        </a>
                    </li>
                </ul>
            </li>
            <!-- 用户信息和系统设置结束 -->
        </ul> <!-- 左侧显示列表部分 start-->
        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse">
                <!-- 咨询管理  折叠的分组列表 -->
                <div class="panel-heading" id="collapseListGroupHeading1" data-toggle="collapse" data-target="#collapseListGroup1" role="tab">
                    <h4 class="panel-title">
                        咨询管理 <span class="fa fa-chevron-up right"></span>
                    </h4>
                </div>
                <div id="collapseListGroup1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading1">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href="http://localhost:8080/refer">
                                <i class="fa fa-paste fa-fw"></i> 咨询学生管理
                            </a></li>

                        <li class="list-group-item">
                            <a href="http://localhost:8080/consult">
                                <i class="fa fa-lightbulb-o fa-fw"></i> 查询报名学生
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- 学工管理  折叠的分组列表 -->
                <div class="panel-heading" id="collapseListGroupHeading2" data-toggle="collapse" data-target="#collapseListGroup2" role="tab">
                    <h4 class="panel-title">
                        学工管理 <span class="fa fa-chevron-up right"></span>
                    </h4>
                </div>
                <div id="collapseListGroup2" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading2">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href="http://localhost:8080/student">
                                <i class="fa fa-suitcase fa-fw"></i> 在校学生管理
                            </a></li>

                        <li class="list-group-item">
                            <a href="">
                                <i class="fa fa-bell-o fa-fw"></i> 学生升班留班
                            </a></li>

                        <li class="list-group-item">
                            <a href="">
                                <i class="fa fa-coffee fa-fw"></i> 学生流失情况
                            </a></li>
                    </ul>
                </div>

                <!-- 教学管理  折叠的分组列表 -->
                <div class="panel-heading" id="collapseListGroupHeading3" data-toggle="collapse" data-target="#collapseListGroup3" role="tab">
                    <h4 class="panel-title">
                        教学管理 <span class="fa fa-chevron-up right"></span>
                    </h4>
                </div>
                <div id="collapseListGroup3" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading3">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href="http://localhost:8080/lesson">
                                <i class="fa fa-flash fa-fw"></i> 课程管理
                            </a>
                        </li>

                        <li class="list-group-item">
                            <a href="http://localhost:8080/class">
                                <i class="fa fa-sitemap fa-fw"></i> 班级管理
                            </a></li>
                    </ul>
                </div>

                <!-- 就业管理  折叠的分组列表 -->
                <div class="panel-heading" id="collapseListGroupHeading4" data-toggle="collapse" data-target="#collapseListGroup4" role="tab">
                    <h4 class="panel-title">
                        就业管理 <span class="fa fa-chevron-up right"></span>
                    </h4>
                </div>
                <div id="collapseListGroup4" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading4">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href="">
                                <i class="fa fa-cutlery fa-fw"></i> 学生就业情况
                            </a></li>

                        <li class="list-group-item">
                            <a href="">
                                <i class="fa fa-file-text-o fa-fw"></i> 就业报表
                            </a></li>
                    </ul>
                </div>

                <!-- 人力资源管理  折叠的分组列表 -->
                <div class="panel-heading" id="collapseListGroupHeading5" data-toggle="collapse" data-target="#collapseListGroup5" role="tab">
                    <h4 class="panel-title">
                        人力资源管理 <span class="fa fa-chevron-up right"></span>
                    </h4>
                </div>
                <div id="collapseListGroup5" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="collapseListGroupHeading5">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href="http://localhost:8080/department">
                                <i class="fa fa-dashboard fa-fw"></i> 部门管理
                            </a>
                        </li>

                        <li class="list-group-item">
                            <a href="http://localhost:8080/post">
                                <i class="fa fa-comment-o fa-fw"></i> 职务管理
                            </a>
                        </li>

                        <li class="list-group-item">
                            <a href="http://localhost:8080/staff">
                                <i class="fa fa-umbrella fa-fw"></i> 员工管理
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div><!-- 左侧显示列表部分 end-->
    </nav>
    <!-- 咨询列表查询部分  start-->
    <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">咨询学生管理</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
        <div class="panel panel-default">
            <div class="panel-body">
                <form class="form-inline" method="get" action="/refer/list.action">
                    <div class="form-group">
                        <label for="referName">咨询学生姓名</label>
                        <input type="text" class="form-control" id="referName" value="" name="username">
                    </div>
                    <div class="form-group">
                        <label for="referFrom">咨询来源</label>
                        <select class="form-control" id="referFrom" name="source">
                            <option value="">--请选择--</option>
                            <option value="网站">网站</option>
                            <option value="现场">现场</option>
                            <option value="电话">电话</option>
                            <option value="邮件">邮件</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="referUser">负责人</label>
                        <select class="form-control" id="referUser" name="referName">
                            <option value="">--请选择--</option>
                            <option value="海丽">海利</option>
                            <option value="杰克">杰克</option>
                            <option value="艾斯">艾斯</option>

                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">查询</button>
                </form>
            </div>
        </div>
        <a href="refer/list.action#" class="btn btn-primary" data-toggle="modal" data-target="#newreferDialog" onclick="clearrefer()">新建</a>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">咨询信息列表</div>
                    <!-- /.panel-heading -->
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>编号</th>
                            <th>咨询来源</th>
                            <th>咨询师</th>
                            <th>学生姓名</th>
                            <th>状态</th>
                            <th>资源级别</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <c:forEach items="${refers}" var="row">
                            <tr>
                                <td>${row.id}</td>
                                <td>${row.source}</td>
                                <td>${row.referName}</td>
                                <td>${row.username}</td>
                                <td>${row.state}</td>
                                <td>${row.resourceLevel}</td>
                                <td>
                                    <a class="btn btn-primary btn-xs" data-toggle="modal" data-target="#referEditDialog" onclick="editrefer(${row.id})">修改</a>
                                    <a class="btn btn-danger btn-xs" onclick="deleterefer(${row.id})">删除</a>
                                </td>
                            </tr>
                        </c:forEach>
                        </tbody>
                    </table>
                    <div class="col-md-12 text-right">
                        <nav><ul class="pagination"><li class="disabled"><a href="refer/list.action#">首页 </a></li><li class="disabled"><a href="refer/list.action#">上一页 </a></li><li class="active"><a href="refer/list.action#">1<spanclass="sr-only"></spanclass="sr-only"></a></li><li class="disabled"><a href="refer/list.action#">下一页</a></li><li class="disabled"><a href="refer/list.action#">尾页</a></li></ul></nav></div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
            <!-- /.col-lg-12 -->
        </div>
    </div>
    <!-- 咨询列表查询部分  end-->
</div>
<!-- 创建咨询模态框 -->
<div class="modal fade" id="newreferDialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">新建咨询信息</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="new_refer_form">
                    <div class="form-group">
                        <label for="new_cname" class="col-sm-2 control-label">
                            学生姓名
                        </label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="new_cname" placeholder="学生姓名" name="username">
                        </div>
                        <label for="new_csex" class="col-sm-2 control-label">
                            性别</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="new_csex" name="gender">
                                <option value="女">女</option>
                                <option value="男">男</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="new_source" class="col-sm-2 control-label">
                            咨询来源</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="new_source" name="source">
                                <option value="">--请选择--</option>
                                <option value="网站">网站</option>
                                <option value="现场">现场</option>
                                <option value="电话">电话</option>
                                <option value="邮件">邮件</option>
                            </select>
                        </div>
                        <label for="new_cstate" class="col-sm-2 control-label">
                            咨询状态</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="new_cstate" name="state">
                                <option value="咨询中">咨询中</option>
                                <option value="已报名">已报名</option>
                                <option value="已结束">已结束</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="new_resLevel" class="col-sm-2 control-label">
                            咨询师</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="new_resLevel" name="referName">
                                <option value="">--请选择--</option>
                                <option value="海丽">海利</option>
                                <option value="杰克">杰克</option>
                                <option value="艾斯">艾斯</option>

                            </select>
                        </div>
                        <label for="new_isjob" class="col-sm-2 control-label">
                            工作状态</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="new_isjob" name="isJob">
                                <option value="在职">在职</option>
                                <option value="应届生">应届生</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="new_phone" class="col-sm-2 control-label">联系电话</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="new_phone" placeholder="联系电话" name="phone">
                        </div>
                        <label for="new_idcard" class="col-sm-2 control-label">身份证号</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="new_idcard" placeholder="身份证号" name="idcard">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="new_weixin" class="col-sm-2 control-label">微信号</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="new_weixin" placeholder="微信号" name="weixin">
                        </div>
                        <label for="new_qq" class="col-sm-2 control-label">QQ号码</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="new_qq" placeholder="QQ号码" name="qq">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="new_address" class="col-sm-2 control-label">联系地址</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="new_address" placeholder="联系地址" name="address">
                        </div>
                        <label for="new_cmail" class="col-sm-2 control-label">邮箱地址</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="new_cmail" placeholder="Email地址" name="email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="new_byacademy" class="col-sm-2 control-label">毕业院校</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="new_byacademy" placeholder="毕业院校" name="byAcademy">
                        </div>
                        <label for="new_remark" class="col-sm-2 control-label">备注</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="new_remark" placeholder="备注" name="remark">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" onclick="createrefer()">创建咨询</button>
            </div>
        </div>
    </div>
</div>
<!-- 修改咨询模态框 -->
<div class="modal fade" id="referEditDialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">修改咨询信息</h4>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" id="edit_refer_form">
                    <input type="hidden" id="edit_id" name="id">
                    <div class="form-group">
                        <label for="edit_cname" class="col-sm-2 control-label">
                            学生姓名
                        </label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="edit_cname" placeholder="学生姓名" name="username">
                        </div>
                        <label for="edit_csex" class="col-sm-2 control-label">
                            性别</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="edit_csex" name="gender">
                                <option value="女">女</option>
                                <option value="男">男</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="edit_source" class="col-sm-2 control-label">
                            咨询来源</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="edit_source" name="source">
                                <option value="">--请选择--</option>
                                <option value="网站">网站</option>
                                <option value="现场">现场</option>
                                <option value="电话">电话</option>
                                <option value="邮件">邮件</option>
                            </select>
                        </div>
                        <label for="edit_cstate" class="col-sm-2 control-label">
                            咨询状态</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="edit_cstate" name="state">
                                <option value="咨询中">咨询中</option>
                                <option value="已报名">已报名</option>
                                <option value="已结束">已结束</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="edit_resLevel" class="col-sm-2 control-label">
                            咨询师</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="edit_resLevel" name="referName">
                                <option value="">--请选择--</option>
                                <option value="海丽">海利</option>
                                <option value="杰克">杰克</option>
                                <option value="艾斯">艾斯</option>
                            </select>
                        </div>
                        <label for="edit_isjob" class="col-sm-2 control-label">
                            工作状态</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="edit_isjob" name="isJob">
                                <option value="在职">在职</option>
                                <option value="应届生">应届生</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_phone" class="col-sm-2 control-label">联系电话</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="edit_phone" placeholder="联系电话" name="phone">
                        </div>
                        <label for="edit_idcard" class="col-sm-2 control-label">身份证号</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="edit_idcard" placeholder="身份证号" name="idcard">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_weixin" class="col-sm-2 control-label">微信号</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="edit_weixin" placeholder="微信号" name="weixin">
                        </div>
                        <label for="edit_qq" class="col-sm-2 control-label">QQ号码</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="edit_qq" placeholder="QQ号码" name="qq">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_address" class="col-sm-2 control-label">联系地址</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="edit_address" placeholder="联系地址" name="address">
                        </div>
                        <label for="edit_cmail" class="col-sm-2 control-label">邮箱地址</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="edit_cmail" placeholder="Email地址" name="email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="edit_byacademy" class="col-sm-2 control-label">毕业院校</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="edit_byacademy" placeholder="毕业院校" name="byAcademy">
                        </div>
                        <label for="edit_remark" class="col-sm-2 control-label">备注</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="edit_remark" placeholder="备注" name="remark">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" onclick="updaterefer()">保存修改</button>
            </div>
        </div>
    </div>
</div>
<!-- 引入js文件 -->
<!-- jQuery -->
<script src="../../js/jquery-1.11.3.min.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="../../js/bootstrap.min.js"></script>
<!-- Metis Menu Plugin JavaScript -->
<script src="../../js/metisMenu.min.js"></script>
<!-- DataTables JavaScript -->
<script src="../../js/jquery.dataTables.min.js"></script>
<script src="../../js/dataTables.bootstrap.min.js"></script>
<!-- Custom Theme JavaScript -->
<script src="../../js/sb-admin-2.js"></script>
<!-- 编写js代码 -->
<script type="text/javascript">
    $(function(){
        $(".panel-heading").click(function(e){
            /*切换折叠指示图标*/
            $(this).find("span").toggleClass("fa-chevron-down");
            $(this).find("span").toggleClass("fa-chevron-up");
        });
    });
    //清空新建咨询窗口中的数据
    function clearrefer() {
        $("#new_cname").val("");
        $("#new_cstate").val("");
        $("#new_phone").val("");
        $("#new_idcard").val("");
        $("#new_weixin").val("");
        $("#new_qq").val("");
        $("#new_address").val("");
        $("#new_cmail").val("");
        $("#new_byacademy").val("");
        $("#new_remark").val("");
    }
    // 创建咨询
    function createrefer() {
        var referData=$("#new_refer_form").serialize()
        $.ajax({
            url:"/refer/create",
            type:"post",
            data:referData,
            datatype:"json",
            success:function () {
                alert("职位创建成功！")
                window.location.reload();
            },
            error:function () {
                alert("职位创建失败！")
                window.location.reload();
            }

        })
        // $.post("refer/create.action",
        //     $("#new_refer_form").serialize(),function(data){
        //         if(data =="OK"){
        //             alert("咨询创建成功！");
        //             window.location.reload();
        //         }else{
        //             alert("咨询创建失败！");
        //             window.location.reload();
        //         }
        //     });
    }
    // 通过id获取修改的咨询信息
    function editrefer(id) {
        $.ajax({
            type:"post",
            url:"/refer/selectById",
            data:{"id":id},
            datatype:"text",
            success:function(data) {
                $("#edit_id").val(data.id);
                $("#edit_cname").val(data.username);
                $("#edit_csex").val(data.gender);
                $("#edit_source").val(data.source);
                $("#edit_cstate").val(data.state);
                $("#edit_resLevel").val(data.referName);
                $("#edit_isjob").val(data.isJob);
                $("#edit_phone").val(data.phone);
                $("#edit_idcard").val(data.idcard);
                $("#edit_weixin").val(data.weixin);
                $("#edit_qq").val(data.qq);
                $("#edit_address").val(data.address);
                $("#edit_cmail").val(data.email);
                $("#edit_byacademy").val(data.byAcademy);
                $("#edit_remark").val(data.remark);
            }
        });
    }
    // 执行修改咨询操作
    function updaterefer() {
        var update= $("#edit_refer_form").serialize()
        $.ajax({
            url:"/refer/update",
            data:update,
            type:"post",
            datatype:"json",
            success:function () {
                alert("咨询信息更新成功！");
                window.location.reload();
            },
            error:function () {
                alert("咨询信息更新失败！");
                window.location.reload();
            }

        })
    }
    // 删除咨询
    function deleterefer(id) {
        $.ajax({
            url:"/refer/delete",
            data:{"id":id},
            type:"post",
            datatype:"text",
            success:function () {
                alert("删除成功！")
                window.location.reload();
            },
            error:function () {
                alert("删除失败！")
                window.location.reload();
            }
        })
    }
    // {
    //     if(confirm('确实要删除该咨询吗?')) {
    //         $.post("refer/delete.action",{"id":id},
    //             function(data){
    //                 if(data =="OK"){
    //                     alert("咨询删除成功！");
    //                     window.location.reload();
    //                 }else{
    //                     alert("删除咨询失败！");
    //                     window.location.reload();
    //                 }
    //             });
    //     }
    // }
</script>

</body></html>