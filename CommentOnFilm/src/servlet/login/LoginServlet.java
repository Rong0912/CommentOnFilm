package servlet.login;



import dao.impl.UserDaoImpl;
import pojo.user;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.sql.Connection;
import java.sql.SQLException;

public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        //request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        /*response.setContentType("text/html;charset=utf-8");*/
        //request.setCharacterEncoding("UTF-8");
        String userName= URLDecoder.decode(request.getParameter("userName"));
        System.out.println(userName);
        String password=request.getParameter("password");
        //验证验证码是否正确
        String code=request.getParameter("code");
        //System.out.println(code);

        String sessionCode=request.getSession().getAttribute("code").toString();
        //System.out.println(sessionCode);

        request.getSession().removeAttribute("sessionCode");

        user user=null;

        response.setContentType("text/html;charset=utf-8");
        PrintWriter pw=response.getWriter();
        HttpSession session=request.getSession(true);



        try {
            int result=new UserDaoImpl().login(userName,password);
            if (result==0) {
                pw.print("您还未注册！");
            }
            else if (result==-1) {
                pw.print("密码错误！");
            }
            else if (code != null && !"".equals(code) && sessionCode != null && !"".equals(sessionCode)) {
                if (code.equalsIgnoreCase(sessionCode)) {
                    pw.print("11");//通过
                    user= (user) session.getAttribute("login");
                    //未登陆的情况
                    if(user==null){
                        user=new user(userName,password);
                        session.setAttribute("login",user);
                        //session.setMaxInactiveInterval(60);
                    }else {//已经登陆的情况
                        session.invalidate();
                        user=new user(userName,password);
                        session.setAttribute("login",user);
                        //session.setMaxInactiveInterval(60);
                    }
                } else {
                    pw.print("验证码错误！");
                }
            } else {
                pw.print("验证码错误！");

            }

        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }


    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.getRequestDispatcher("/login.html").forward(request,response);
    }
}
