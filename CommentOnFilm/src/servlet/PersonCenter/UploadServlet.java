package servlet.PersonCenter;

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

@MultipartConfig(maxFileSize=5765004,fileSizeThreshold=1000)
public class UploadServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String method=request.getParameter("method");
        //System.out.println(method);
        HttpSession session=request.getSession(true);
        user m= (user) session.getAttribute("login");
        boolean ok=true;
        String name=null;
        if(m==null){
            ok=false;
        }
        else {
            name = m.getUserName();
            String path = request.getServletContext().getRealPath("/hotMes_file");
            Part part = request.getPart("fileName");//这里的fileName和文件输入框里的name相同
            //System.out.println(path);
            String header = part.getHeader("Content-Disposition");
            //获取上传文件名字
            String fileName = FileUtil.getFileName(header);
            part.write(path + File.separator + fileName);
            int userID=new UserDaoImpl().findByUserName(name).getUserID();
            String sql1 = "update user set pic=? where userName=?";
            String sql2="insert into mycomment (comPic,userID) values (?,?)";
            try {
                PreparedStatement ps=null;
                Connection conn = JDBCUtil.getConn();
                    if("header_photo".equals(method)){
                        ps = conn.prepareStatement(sql1);
                        ps.setString(1, fileName);
                        ps.setString(2, name);
                    }
                    else {
                        //System.out.println("sql2");
                        ps=conn.prepareStatement(sql2);
                        ps.setString(1, fileName);
                        ps.setInt(2,userID);
                        //ps.setString(2, String.valueOf(userID));
                    }

                    ps.executeUpdate();//跟新的时候用

                } catch (SQLException e) {
                e.printStackTrace();
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
            if("header_photo".equals(method)){
                response.sendRedirect("/personalMessage");}
            else{
                response.sendRedirect("/editMessage");
            }
            /*request.getRequestDispatcher("/personMessage.jsp").forward(request,response);*/
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
