import Register.DAO;
import Register.JDBCUtil;
import dao.Page;
import dao.impl.BookDaoImpl;
import pojo.member;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;



public class helpShowMemberServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String code=request.getParameter("logname");
        int everyPage=5;//每页记录数
        int totalCount= Math.toIntExact(new BookDaoImpl().count(code));//总页数
        String scurrentPage=request.getParameter("currentPage");
        int currentPage=1;
        if(scurrentPage==null){
            currentPage=1;//从第一页开始访问

        }
        else{
            currentPage=Integer.parseInt(scurrentPage);
        }
        //分页信息
        Page page=PageUtil.createPage(everyPage,totalCount,currentPage);
        //分页数据信息
        List <member> list=new BookDaoImpl().findBookByPage(page,code);
        //System.out.println(list);
        request.setAttribute("page",page);
        request.setAttribute("list",list);
        request.getRequestDispatcher("/choiceLookType.jsp").forward(request,response);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
