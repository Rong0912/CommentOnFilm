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
import java.sql.SQLException;

public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter pw=response.getWriter();
        String logname=request.getParameter("name");
        String password=request.getParameter("password");
        member m=null;
        HttpSession session=request.getSession(true);
        m= (member) session.getAttribute("login");
        //未登陆的情况
        if(m==null){
            m=new member(logname,password);
            session.setAttribute("login",m);
            //session.setMaxInactiveInterval(60);
        }

        try {
            int result=new DAO().login(logname,password);
            //System.out.println(result);
            if (result==0) {
                pw.print("用户不存在！");
            }
            else if (result==-1) {
                pw.print("密码错误！");
            }
            else {
                pw.print("11");

            }

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
