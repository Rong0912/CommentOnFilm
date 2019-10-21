package servlet.writeMessage;

import dao.impl.AddMessageImpl;
import dao.impl.MyCommentImpl;
import dao.impl.UserDaoImpl;
import pojo.addMessage;
import pojo.myMessage;
import pojo.user;
import util.FileUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@MultipartConfig(maxFileSize=5765004,fileSizeThreshold=1000)
public class writeMessageServlet extends HttpServlet {
    static String name=null;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html; charset=utf-8");
        response.setCharacterEncoding("utf-8");
        PrintWriter pw=response.getWriter();



        String title = request.getParameter("title");
        //System.out.println(title);
        String message = request.getParameter("message");
        //System.out.println(message);
        String picture = request.getParameter("picture");
        System.out.println(picture);
        String pic = null;
        if (picture == null || picture.equals("undefined")) {

            System.out.println("no picture");


        } else {
            String path = request.getServletContext().getRealPath("/hotMes_file");
            Part part = request.getPart("picture");//这里的picture和文件输入框里的name相同
            //System.out.println(path);
            String header = part.getHeader("Content-Disposition");
            //获取上传文件名字
            String fileName = FileUtil.getFileName(header);
            //System.out.println(fileName);
            //System.out.println("执行44行");
            part.write(path + File.separator + fileName);
            pic = picture;
        }

        if (title.length() == 0 || message.length() == 0) {
            response.sendRedirect("/writeMessage");
        } else {
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String registerTime = df.format(new Date());
            int userID = new UserDaoImpl().findByUserName(name).getUserID();
            myMessage myMessage = new myMessage(userID, title, registerTime, message, pic);
            int result = new MyCommentImpl().saveComment(myMessage);
            if (result == 1) {
                System.out.println("insert success");
            }
            response.sendRedirect("/writeMessage");
             }
        }



    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        user user= (pojo.user) request.getSession().getAttribute("login");
        name=user.getUserName();
        //System.out.println(name);
        myMessage myMessage=new MyCommentImpl().findByUserName(name);
        request.setAttribute("myMessage",myMessage);

        List list=new MyCommentImpl().getAllMessage(0);
        List list1=new AddMessageImpl().giveAll(0);
        request.setAttribute("list",list);
        request.setAttribute("list1",list1);
        System.out.println(list1);
        //System.out.println(list1);
        request.getRequestDispatcher("writeMessage.jsp").forward(request,response);
    }
}
