package Register;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class UpdateServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id=request.getParameter("id");
        System.out.println(id);
        String psw=request.getParameter("newPassword");
        System.out.println(psw);
        String sql="update user set password =? where userID=?";
        System.out.println(sql);
        JDBCUtil jdbcUtil=new JDBCUtil();
        try {
            jdbcUtil.exeOther(sql,psw,id);

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        response.sendRedirect("/Register/SQLServlet");
        JDBCUtil.closeConn();

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
