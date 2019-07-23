package Register;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

//通过对jsp页面传过来的不同路径在servlet里的doget（）方法里进行判断
//@WebServlet(urlPatterns = {"*.do"})
 /*      String name = request.getParameter("name");
         String servletPath = request.getServletPath();
         if (servletPath.contains("login")) {
         doLogin(request, response);
         } else if (servletPath.contains("update")) {
         doUpdate(request, response);
         }else if(servletPath.contains("modify")){
         doModify(request,response);
         }*/
//然后在各自的方法里分别去实现，这样可以在同一个UserServlet里实现增删查改，就不用写四个Sevlet了



public class AddServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String name=request.getParameter("userName");
        String pwd=request.getParameter("password");
        String sql="insert into user ( userName,password) values(?,?)";
        JDBCUtil jdbcUtil=new JDBCUtil();
        try {
            jdbcUtil.exeOther(sql,name,pwd);
            response.sendRedirect("/Register/SQLServlet");
            JDBCUtil.closeConn();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
