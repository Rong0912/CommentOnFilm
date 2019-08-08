package servlet.login;

import dao.impl.UserDaoImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

public class updatePwdServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter pw=response.getWriter();
        String phone =request.getParameter("phone");
        String emial=request.getParameter("email");
        String new1=request.getParameter("new1");

        int result=0;
        try {
            result=new UserDaoImpl().updateUser(phone,emial,new1);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        if(result==-1){

            pw.print("密码修改失败！");//密码修改失败！
        }
        if(result==0){
            pw.print("邮箱或手机号错误！");//邮箱或手机号错误！
        }else{
            pw.print(1);//密码修改成功
            /*response.setContentType("text/html;charset=utf-8");
            pw.print("<script type='text/javascript'>alert('密码修改成功!')</script>");
            pw.print("<script type='text/javascript'>location.href='/login'</script>");
            pw.flush();
            pw.close();*/
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /*request.getRequestDispatcher("updatePwd.jsp").forward(request,response);*/
    }
}
