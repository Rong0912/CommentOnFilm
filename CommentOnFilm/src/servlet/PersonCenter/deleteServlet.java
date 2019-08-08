package servlet.PersonCenter;

import dao.impl.MyCommentImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;


public class deleteServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int messageID= Integer.parseInt(request.getParameter("messageID"));
        int result=new MyCommentImpl().deleteComment(messageID);
        PrintWriter pw=response.getWriter();
        if(result==1){
            pw.print(1);
        }else{
            pw.print(-1);
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
