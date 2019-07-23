package Register;

import pojo.member;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;


public class helpModifyMessServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String newPhone=request.getParameter("newPhone");
        String newEmail=request.getParameter("newEmail");
        String newMessage=request.getParameter("newMessage");
        HttpSession session=request.getSession(true);
        member m= (member) session.getAttribute("login");
        boolean ok=true;
        if(m==null){
            ok=false;
            response.sendRedirect("/login.jsp");
        }
        else {
            String name=m.getLogname();
            String sql = "update member set phone=? ,email=?,message=? where logname=?";

            try {
                Connection conn = JDBCUtil.getConn();
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setString(1, newPhone);
                ps.setString(2, newEmail);
                ps.setString(3, newMessage);
                ps.setString(4,name);
                ps.executeUpdate();//跟新的时候用
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (SQLException e) {
                e.printStackTrace();
            }

            response.sendRedirect("/showModifyMess.jsp?newPhone="+newPhone+"&newEmail="+newEmail+"&newMessage="+newMessage);
        }




    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
