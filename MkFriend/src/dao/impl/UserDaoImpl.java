package dao.impl;

import Register.user;
import pojo.member;
import dao.IUserDao;
import org.apache.commons.dbutils.QueryRunner;
import util.C3POUtil;
import java.sql.SQLException;
import java.util.ArrayList;


public class UserDaoImpl implements IUserDao {
    QueryRunner qr;

    public UserDaoImpl() {
        qr = new QueryRunner(C3POUtil.getDs());
    }

    @Override
    public int saveUser(member member) {
        String insert_Sql = "insert into member(logname,password,phone,email,message) values(?,?,?,?,?)";
        try {
            int result = qr.update(insert_Sql, new Object[]{member.getLogname(), member.getPassword(), member.getPhone(), member.getEmail(), member.getMessage()});
            System.out.println(result > 0 ? "insert success" : "插入失败");
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            //
        }
        return 0;
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

    /*@Override
    public int updateUser(member member) {
        String sql="update member set pic=? where logname=?";
        int result=0;
        try {
            result=qr.update(sql,new Object[]{user.getUsername(),user.getPassword(),user.getUserID()});
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return result;
    }*/
/*
    @Override
    public List<User> getAllUsers() {
        String select_sql="select * from user";
        List<User>users=new ArrayList<>();
        try {
            users=qr.query(select_sql,new BeanListHandler<User>(User.class));
            System.out.println(users);
            for(User user:users){
                System.out.println(user);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return users;
    }

    @Override
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
    }

    //批量插入

    public void batch() throws SQLException {
        String insert_sql="insert into user(userName,password) values(?,?)";
        Object[][]params=new Object[3][];
        for(int i=0;i<params.length;i++) {
            params[i]=new Object[] {"菜鸟"+(i+1),(i+1)};
        }
        qr.batch(insert_sql, params);
    }*/


}
