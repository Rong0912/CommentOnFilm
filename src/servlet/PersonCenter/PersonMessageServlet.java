package servlet.PersonCenter;

import dao.impl.AddMessageImpl;
import dao.impl.MyCommentImpl;
import dao.impl.UserDaoImpl;
import pojo.user;
import util.FileUtil;
import util.JDBCUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;


public class PersonMessageServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        user user= (pojo.user) request.getSession().getAttribute("login");
        String name=user.getUserName();
        user user1=new UserDaoImpl().findByUserName(name);
        int userID=user1.getUserID();
        List list=new MyCommentImpl().getAllMessage(userID);
        List list1=new AddMessageImpl().giveAll(userID);
        request.setAttribute("list2",list);
        request.setAttribute("list3",list1);
        request.setAttribute("list",user1);
        //System.out.println(user1);
        request.getRequestDispatcher("personMessage.jsp").forward(request,response);
    }
}
