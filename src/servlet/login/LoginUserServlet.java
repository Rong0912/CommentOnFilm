package servlet.login;

import pojo.user;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


public class LoginUserServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out=response.getWriter();
        user user=new user();
        user= (user) request.getSession().getAttribute("login");
        if(user==null){
            out.print(1);
        }else{

        String name= user.getUserName();
        //System.out.println(name);
        //String tip="您还未登录！";
        //System.out.println(name);
        /*request.getRequestDispatcher("/index.html").forward(request,response);*/
        out.print(name);
        out.flush();
        out.close();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
