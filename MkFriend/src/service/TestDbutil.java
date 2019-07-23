package test;

import pojo.member;
import dao.impl.UserDaoImpl;
import org.junit.Test;


import java.awt.print.Book;
import java.util.List;

public class TestDbutil {


    @Test
    public void insert() {
        UserDaoImpl userDao = new UserDaoImpl();
        userDao.saveUser(new member("2", "1", "1", "1", "1"));

    }

}