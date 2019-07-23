import com.sun.deploy.net.HttpRequest;
import com.sun.deploy.net.HttpResponse;
import pojo.member;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class LoginFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest request1= (HttpServletRequest) request;
        HttpServletResponse response1= (HttpServletResponse) response;
        String path=request1.getServletPath();
        HttpSession session=request1.getSession(true);
        member m= (member) session.getAttribute("login");

        if(m==null){
            response1.sendRedirect("/login.jsp");
        }else{
            chain.doFilter(request,response);
        }
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
