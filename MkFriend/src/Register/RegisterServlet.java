package Register;

import pojo.member;
import dao.impl.UserDaoImpl;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String logname=request.getParameter("logname");
        String password=request.getParameter("password");
        String phone=request.getParameter("phone");
        String email=request.getParameter("email");
        String message=request.getParameter("message");
        member member=new member(logname,password,phone,email,message);
        UserDaoImpl userDao=new UserDaoImpl();
        userDao.saveUser(member);
        //System.out.println("insert success");
        //request.setAttribute("member",member);
        //response.sendRedirect("/RegisterSuccess.jsp?member="+member);
        //request.getRequestDispatcher("/RegisterSuccess.jsp?member="+member).forward(request,response);
        response.sendRedirect("/RegisterSuccess.jsp?logname="+logname+"&phone="+phone+"&email="+email+"&message="+message);
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
