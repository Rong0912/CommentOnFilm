package Register;

import pojo.member;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DAO {
    /*
     * 注册功能
     * 登陆验证功能*/

    public boolean register(Connection con, user user) throws SQLException {
        boolean flag = false;
        PreparedStatement pstmt = null;
        String sql = "insert into user(userName,password)values(?,?)";
        pstmt = con.prepareStatement(sql);
        pstmt.setString(1, user.getUserName());
        pstmt.setString(2, user.getPassword());
        if (pstmt.executeUpdate() > 0) {
            flag = true;
        }
        return flag;
    }


    public int login(String name,String password) throws SQLException, ClassNotFoundException {
        Connection con=JDBCUtil.getConn();
        member member=null;
        String sql = "select * from member where logname=? ";
        PreparedStatement pstmt = con.prepareStatement(sql);
        pstmt.setString(1, name);
        ResultSet rs = pstmt.executeQuery();//通过传进来的对象的值进行查询

        if (rs.next()) {
            member=new member();
            member.setLogname(rs.getString(1));
            member.setPassword(rs.getString(2));

        }
        if(member==null){
            return 0;
        }
        else if(!member.getPassword().equals(password)){
            return -1;
        }
        else{
            return 1;
        }
    }


    //查询数据库中的所有数据
    public List<member> GetPost() throws SQLException, ClassNotFoundException {
        List<member> list = new ArrayList<>();
        Connection conn = JDBCUtil.getConn();
        Statement stmt = conn.createStatement();
        String sql;

        sql = "SELECT * FROM member";
        ResultSet rs = stmt.executeQuery(sql);
        // 展开结果集数据库
        while (rs.next()) {
            // 通过字段检索

            String logname = rs.getString("logname");
            String phone = rs.getString("phone");
            String email = rs.getString("email");
            String message = rs.getString("message");
            member member=new member(logname,phone,email,message);
            list.add(member);
        }
        return list;
    }

}
