package Register;

import pojo.member;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


public class helpModifyPasswordServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        String oldPassword=request.getParameter("old");
        String newPassword=request.getParameter("new");
        PrintWriter pw=response.getWriter();
        HttpSession session=request.getSession(true);
        member m= (member) session.getAttribute("login");
        boolean ok=true;
        String name=null;
        if(m==null){
            ok=false;
            pw.print("0");
            /*response.sendRedirect("/login.jsp");*/
        }
        else {


            name = m.getLogname();
            PreparedStatement ps=null;
            try {
                Connection conn = JDBCUtil.getConn();
                String sql="select password from member where logname=? and password=?";
                ps=conn.prepareStatement(sql);
                ps.setString(1,name);
                ps.setString(2,oldPassword);
                ResultSet rs=ps.executeQuery();
                if(rs.next()){
                    String update_sql="update member set password=? where logname=?";
                    PreparedStatement ps2 = conn.prepareStatement(update_sql);
                    System.out.println(update_sql);
                    ps2.setString(1,newPassword);
                    ps2.setString(2,name);
                    int result=ps2.executeUpdate();
                    if(result==1){
                        pw.print("11");

                    }else if(oldPassword.equalsIgnoreCase(newPassword)){
                        pw.print("与原始密码相同，建议重新修改！");

                    }
                    else {
                        pw.print("密码修改失败！");
                    }

                }else{
                    pw.print("原始密码错误！");

                }


            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (SQLException e) {
                e.printStackTrace();
            }


        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
