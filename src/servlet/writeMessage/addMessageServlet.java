package servlet.writeMessage;

import dao.impl.AddMessageImpl;
import dao.impl.UserDaoImpl;
import pojo.addMessage;
import pojo.user;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;


public class addMessageServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html; charset=utf-8");
        response.setCharacterEncoding("utf-8");
        PrintWriter pw=response.getWriter();
        user user= (pojo.user) request.getSession().getAttribute("login");
        String name= user.getUserName();
        //System.out.println(name);
        //System.out.println(name);
        String addMessage=request.getParameter("addMessage");
        user user1=new UserDaoImpl().findByUserName(name);
        int userID=user1.getUserID();
        System.out.println(userID);
        int messageID= Integer.parseInt(request.getParameter("messageID"));
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String addComTime = df.format(new Date());
        //System.out.println(addComTime);
        addMessage add=new addMessage(userID,messageID,addMessage,addComTime);
        System.out.println(add);
        int result=new AddMessageImpl().saveAddMess(add);
        if(result==1){
            pw.print(1);

        }else{
            pw.print(2);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
