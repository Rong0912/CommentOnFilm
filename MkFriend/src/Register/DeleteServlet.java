package Register;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class DeleteServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String id=request.getParameter("id");
        //System.out.println(id);
       // String name=request.getParameter("userName");
        String sql="delete from user where userID=?";
        JDBCUtil jdbcUtil=new JDBCUtil();
        try {
            jdbcUtil.exeOther(sql,id);
            response.sendRedirect("/Register/SQLServlet");
            JDBCUtil.closeConn();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
