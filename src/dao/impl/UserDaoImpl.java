package dao.impl;


import dao.IuserDao;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import pojo.user;
import util.C3POUtil;
import util.JDBCUtil;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


public class UserDaoImpl implements IuserDao {
    QueryRunner qr;

    public UserDaoImpl() {
        qr = new QueryRunner(C3POUtil.getDs());
    }


    @Override

    //注册时插入数据
    public int saveUser(user user) {
        /*SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String registerTime=df.format(new Date());*/
        String insert_Sql="insert into user(userName,pwd,email,phone,sex,address,registerTime) values(?,?,?,?,?,?,?)";
        int result=0;
        try {
            result=qr.update(insert_Sql,new Object[] {user.getUserName(),user.getPwd(),user.getEmail(),user.getPhone(),user.getSex(),user.getAddress(),user.getRegisterTime()});
            System.out.println(result>0?"success":"failure");
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            //
        }
        return result;
    }




    //验证登录
    @Override
    public int login(String name,String password) throws ClassNotFoundException, SQLException {
        //System.out.println(name);
        Connection con= JDBCUtil.getConn();
        //System.out.println(name);
        user user=null;
        String sql ="select * from user where userName=?";
        PreparedStatement pstmt = con.prepareStatement(sql);
        //System.out.println(name);
        pstmt.setString(1, name);
        ResultSet rs = pstmt.executeQuery();//通过传进来的对象的值进行查询
        System.out.println(rs);
        if (rs.next()) {
            //System.out.println(rs.getString("userName"));
            //System.out.println(rs.getString("pwd"));
            user=new user();
            user.setUserName(rs.getString(1));
            //System.out.println(rs.getString(1));
            user.setPwd(rs.getString(2));
            //System.out.println(user.getUserName());

        }
        if(user==null){
            return 0;
        }
        else if(!user.getPwd().equals(password)){
            return -1;
        }
        else{
            return 1;
        }
    }
    //更新密码
    @Override
    public int updateUser(String phone, String email, String new1) throws SQLException, ClassNotFoundException {
        user user=null;
        String sql="select *from user where phone=? and email=?";
        PreparedStatement ps=JDBCUtil.getConn().prepareStatement(sql);
        System.out.println(phone);
        System.out.println(email);
        ps.setString(1,phone);
        ps.setString(2,email);
        ResultSet rs=ps.executeQuery();//根据前台传来的手机号和邮箱号查找相关信息
        boolean flag=rs.next();
        int result=0;
        if(flag){
            System.out.println("111");
            String update_sql="update user set pwd=? where phone=? and email=?";
            result=qr.update(update_sql,new Object[]{new1,phone,email});
            System.out.println(result);
            if(result==1){
                return 1;  //修改成功
            }
            else{
                return -1;//修改失败
            }

        }else{
            return 0;//邮箱或手机号错误，没查找到信息
        }
    }
//根据userName查找所有信息
    @Override
    public user findByUserName(String userName) {
        String sql="select * from user where userName=?";
        user user=null;
        try {
            user=qr.query(sql,new BeanHandler<>(user.class),userName);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        System.out.println(user);
        return user;
    }


    @Override
    public user findByUserID(String userID) throws SQLException {
        String sql="select * from user where userID=?";
        user u=qr.query(sql,new BeanHandler<>(user.class),userID);
        return u;
    }





    /*@Override
    public int deleteUser(int id) {
        String delete_sql="delete from user where userID=?";
        int result=0;
        try {
           result= qr.update(delete_sql,new Object[]{id});
            System.out.println(result>0?"删除成功":"删除失败");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return result;
    }*/

/*
    @Override
    public int updateUser(user user) {
        String sql="update member set pic=? where logname=?";
        int result=0;
        try {
            result=qr.update(sql,new Object[]{});
        }catch (SQLException e) {
            e.printStackTrace();
        }
        return result;
    }
    @Override
    public List<user> getAllUsers() {
        String select_sql="select * from user";
        List<user>users=new ArrayList<>();
        try {
            users=qr.query(select_sql,new BeanListHandler<user>(user.class));
            System.out.println(users);
            for(user user:users){
                System.out.println(user);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return users;
    }
*/

    /*@Override
    public User findbyId(int id) {
        String select_sql="select userID ,userName,password from user where userID=?";
        User user=null;
        try {
            user=qr.query(select_sql,new BeanHandler<User>(User.class),id);
            System.out.println(user);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return user;
    }*/

    /*//批量插入

    public void batch() throws SQLException {
        String insert_sql="insert into user(userName,password) values(?,?)";
        Object[][]params=new Object[3][];
        for(int i=0;i<params.length;i++) {
            params[i]=new Object[] {"菜鸟"+(i+1),(i+1)};
        }
        qr.batch(insert_sql, params);
    }*/


}
