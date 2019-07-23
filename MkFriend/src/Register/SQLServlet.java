package Register;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SQLServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String  code=request.getParameter("code");
        if(code!=null) {
            String gjz = request.getParameter("gjz");
            System.out.println(gjz);

            String sql = null;
            if (code.equals("id")) {
                sql = "select userID,userName,password from user where userID like '%"+gjz+"%'";
            } else {
                sql = "select userID,userName,password from user where userName like '%"+ gjz+"%' ";
            }
            try {
                Statement stmt = JDBCUtil.getConn().createStatement();
                ResultSet rs = stmt.executeQuery(sql);
                List list2=new ArrayList();

                while (rs.next()) {
                    // 通过字段检索
                    String name = rs.getString("userName");
                    int id = rs.getInt("userID");
                    String pwd = rs.getString("password");
                    user user = new user(id, name, pwd);
                    list2.add(user);

                }request.setAttribute("list",list2);

            } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        } else{

        DAO dao=new DAO();
        List list=null;
        try {

            list=dao.GetPost();//Dao类里封装好的GetPost方法
            request.setAttribute("list",list);

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }
        request.getRequestDispatcher("success.jsp").forward(request,response);
        JDBCUtil.closeConn();
}
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
