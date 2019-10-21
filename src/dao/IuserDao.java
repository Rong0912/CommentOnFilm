package dao;

import pojo.user;

import java.sql.SQLException;
import java.util.List;

public interface IuserDao {
    int saveUser(user user);
    int login(String name,String password) throws SQLException, ClassNotFoundException;
    int updateUser(String phone,String email,String new1) throws SQLException, ClassNotFoundException;
    user findByUserName(String userName);
    user findByUserID(String userID) throws SQLException;
    /*List<user> getAllUsers();*/
}
