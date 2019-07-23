package dao.impl;


import dao.MemberDao;
import dao.Page;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;
import pojo.member;
import util.C3POUtil;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BookDaoImpl implements MemberDao {
    QueryRunner qr;
    public BookDaoImpl(){
        qr=new QueryRunner(C3POUtil.getDs());
    }


    @Override
    public Long count(String code) {
        String select_sql=null;
        if(code==null){
            select_sql="select count(*) from member";
        }else{
            select_sql="select count(*) from member where logname like '%"+code+"%'";
        }

        Long count=0l;
        try {
            count=qr.query(select_sql,new ScalarHandler<>());
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return count;
    }


    @Override
    public List<member> findBookByPage(Page page,String code) {
        String select_sql=null;
        List<member>list=new ArrayList<>();
        if (code == null) {
            select_sql = "select * from member limit ? , ?";

        } else {
            select_sql = "select * from member where logname like '%"+code+"%' limit ? , ?";
            }
        try {

            list = qr.query(select_sql, new BeanListHandler<>(member.class), new Object[]{page.getBeginIndex(), page.getEveryPage()});

        } catch (SQLException e) {
                e.printStackTrace();
            }return list;
        }
}
