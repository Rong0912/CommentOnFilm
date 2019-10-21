package servlet.loginout;

import pojo.user;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


public class loginoutServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /*HttpSession session=request.getSession(true);
        user m= (user) session.getAttribute("login");
        boolean ok=true;
        if(m==null){
            ok=false;
            response.sendRedirect("/login");
        }
        else {
            continueDoPost(request,response);
        }*/


    }
    public void continueDoPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException {
       /* HttpSession session=request.getSession(true);
        session.invalidate();  */        //销毁用户的session对象
        //response.sendRedirect("/index.html"); //返回主页
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session=request.getSession(true);
        session.invalidate();
        response.sendRedirect("/index.html");

    }
}
