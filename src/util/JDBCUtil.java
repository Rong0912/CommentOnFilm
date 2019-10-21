package util;

import java.sql.*;
import java.util.*;

public class JDBCUtil {
    //三大核心接口
    private static Connection conn=null;
    private static PreparedStatement pstmt=null;
    private static ResultSet rs=null;

    public static ResourceBundle bundle;
    static {
        //获取db.propreties的属性
        bundle=ResourceBundle.getBundle("db");
    }
    //创建数据库连接
    public static Connection getConn() throws ClassNotFoundException, SQLException {
        String JDBC_driver=bundle.getString("driver");
        String url=bundle.getString("url");
        String username=bundle.getString("username");
        String password=bundle.getString("password");
        Class.forName(JDBC_driver);
        //System.out.println(JDBC_driver+username+password+url);
        conn= DriverManager.getConnection(url,username,password);
        return conn;
    }
    //关闭数据库连接
    public static void closeConn(){
        if(rs!=null){
            try {
                rs.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if(pstmt!=null){
            try {
                pstmt.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if(conn!=null){
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }


    //发送 增 ,删,改 的语句的方法
    public int exeOther(String sql,Object...params) throws SQLException, ClassNotFoundException {

        pstmt=getConn().prepareStatement(sql);
        //System.out.println(sql);
        for(int i=0;i<params.length;i++){
            pstmt.setObject(i+1, String.valueOf(params[i]));
        }
        int result=pstmt.executeUpdate();
        return result;

    }

    //专门用于发送查询语句
    public ResultSet exeQuery( String strSQL,Object... params) throws SQLException, ClassNotFoundException {

        try{
            pstmt=getConn().prepareStatement(strSQL);
            for(int i=0;i<params.length;i++){
                pstmt.setObject(i+1, params[i]);
            }
            rs=pstmt.executeQuery();
            System.out.println(rs);
            return rs;

        } catch(SQLException e){
            e.printStackTrace();
            return null;
        }
    }
}



