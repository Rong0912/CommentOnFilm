package servlet.login;

import dao.impl.UserDaoImpl;
import pojo.user;
import util.JDBCUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static sun.misc.MessageUtils.out;


public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html; charset=utf-8");
        response.setCharacterEncoding("utf-8");
        String userName=request.getParameter("username");
        String pwd=request.getParameter("password");
        String email=request.getParameter("email");
        String phone= request.getParameter("phone");
        String sex=request.getParameter("sex");
        String address=request.getParameter("location");
        //System.out.println(address);
        String pic=null;
        /*String insert_Sql="insert into user(userName,pwd,email,phone,sex,address) values(?,?,?,?,?,?)";
        JDBCUtil jdbcUtil=new JDBCUtil();
        int result=0;
        try {
            result=jdbcUtil.exeOther(insert_Sql,userName,pwd,email,phone,sex,address);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }*/

        SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd ");
        String registerTime=df.format(new Date());
        user user=new user(userName,pwd,email,phone,sex,address,pic,registerTime);
        //System.out.println(user);
        int result=new UserDaoImpl().saveUser(user);
        //System.out.println(result);
        PrintWriter out = response.getWriter();
        if(result==1){

            out.print("<script type='text/javascript'>alert('注册成功')</script>");
            out.print("<script type='text/javascript'>location.href='/login'</script>");
            out.flush();
            out.close();
        }
        else {

            out.print("<script type='text/javascript'>alert('注册失败')</script>");
            out.print("<script type='text/javascript'>location.href='/Register'</script>");

        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.getRequestDispatcher("/register.html").forward(request,response);
    }
}
