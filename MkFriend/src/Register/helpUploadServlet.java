package Register;

import pojo.member;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


@MultipartConfig(maxFileSize=5765004,fileSizeThreshold=1000)

public class helpUploadServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession session=request.getSession(true);
        member m= (member) session.getAttribute("login");
        boolean ok=true;
        String name=null;
        if(m==null){
            ok=false;
            response.sendRedirect("/login.jsp");
        }
        else {
            name = m.getLogname();
            String path = request.getServletContext().getRealPath("/upload");
            Part part = request.getPart("fileName");
            //System.out.println(path);
            String header = part.getHeader("Content-Disposition");
            //获取上传文件名字
            String fileName = FileUtil.getFileName(header);
            part.write(path + File.separator + name + "_" + fileName);
            String sql = "update member set pic=? where logname=?";
            try {
                Connection conn = JDBCUtil.getConn();
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setString(1, name + "_" + fileName);
                ps.setString(2, name);
                ps.executeUpdate();//跟新的时候用

            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (SQLException e) {
                e.printStackTrace();
            }
            String newname=name + "_" + fileName;

            request.setAttribute("oldname", fileName);
            request.setAttribute("newname", newname);
            response.sendRedirect("/uploadSccess.jsp?oldname="+fileName+"&newname="+newname);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
