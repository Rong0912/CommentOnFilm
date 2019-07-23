package Register;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@WebServlet("/check")
public class AjaxCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PreparedStatement ps;
        ResultSet rs;
        String logname=request.getParameter("logname");
        //System.out.println(logname);
        String select_sql="select * from member where logname=?";
        //设置mime
        response.setContentType("text/html;charset=utf-8");
        //设置响应码
        response.setCharacterEncoding("utf-8");
        PrintWriter out=response.getWriter();
        try {
            String result = "";
            Connection connection=JDBCUtil.getConn();
            ps = connection.prepareStatement(select_sql);

            ps.setString(1, logname);
            rs = ps.executeQuery();

            //该用户已存在
            if (rs.next()) {
                result = "<font color='red'>该用户名已被注册，请重新注册</font>";
            } else {
                result = "<font color='green'>ok!</font>";
            }


            out.println(result);
        } catch(SQLException e){

            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
