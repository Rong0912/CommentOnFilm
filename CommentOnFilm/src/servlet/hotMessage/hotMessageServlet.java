package servlet.hotMessage;

import dao.impl.HotMessageImpl;
import pojo.hotMessage;
import pojo.user;
import util.Page;
import util.PageUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;


public class hotMessageServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String code=request.getParameter("code");//搜索框
        int everyPage=4;//每页记录数
        int totalCount= Math.toIntExact(new HotMessageImpl().count(code));//总页数
        String scurrentPage=request.getParameter("currentPage");
        int currentPage=1;
        if(scurrentPage==null){
            currentPage=1;//从第一页开始访问

        }
        else{
            currentPage=Integer.parseInt(scurrentPage);
        }
        //分页信息
        Page page= PageUtil.createPage(everyPage,totalCount,currentPage);
        //分页数据信息
        List<hotMessage> list=new HotMessageImpl().findBookByPage(page,code);
        //System.out.println(list);
        request.setAttribute("page",page);
        request.setAttribute("list",list);
        request.getRequestDispatcher("hotMessage.jsp").forward(request,response);

    }
}
