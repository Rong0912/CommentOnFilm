package dao.impl;

import dao.IhotMessage;
import dao.hotMessPageDao;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import org.apache.commons.dbutils.handlers.ScalarHandler;
import pojo.hotMessage;
import pojo.user;
import util.C3POUtil;
import util.Page;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class HotMessageImpl implements IhotMessage, hotMessPageDao {
    QueryRunner qr;
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    String comTime=df.format(new Date());
    public HotMessageImpl(){
        qr=new QueryRunner(C3POUtil.getDs());
    }
    @Override
    public int saveHotMessage(hotMessage hotMessage) {


        String insert_sql="insert into hotmessage(title,comMessage,comTime,userName) values (?,?,?,?)";
        int result=0;
        try {
            result=qr.update(insert_sql,new Object[]{"111","2222",comTime,"333"});
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public int deleteHotMessage(int messID) {
        String delete_sql="delete from hotmessage where messID=?";
        int result=0;
        try {
            result= qr.update(delete_sql,new Object[]{messID});
            System.out.println(result>0?"success":"failure");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return result;
    }
    /*@Test
    public void delete(){
        new HotMessageImpl().deleteHotMessage(102);
    }*/

    @Override
    public int updateHotMessage(hotMessage hotMessage) {
        String sql="update hotmessage set comMessage=?, comTime =? where messID=?";
        int result=0;
        try {
            result=qr.update(sql,new Object[]{"sdadadadsa",comTime,101});
        }catch (SQLException e) {
            e.printStackTrace();
        }
        return result;
    }
    /*@Test
    public void update(){
        new HotMessageImpl().updateHotMessage( );
    }*/

    @Override
    public List<hotMessage> getAllMessage() {
        String sql="select * from hotmessage";
        List<hotMessage> list=new ArrayList<>();
        try {
            list= qr.query(sql,new BeanListHandler<>(hotMessage.class));
            System.out.println(list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    @Override
    public hotMessage findbyTitle(String title) {
        String select_sql="select * from hotmessage where title=?";
        hotMessage hotMessage=null;
        try {
            hotMessage=qr.query(select_sql,new BeanHandler<>(pojo.hotMessage.class),title);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return hotMessage;
    }

    @Override
    public Long count(String code) {
        String select_sql=null;
        if(code==null){
            select_sql="select count(*) from hotmessage";
        }else{
            select_sql="select count(*) from hotmessage where title like '%"+code+"%'";
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
    public List<hotMessage> findBookByPage(Page page, String code) {
        String select_sql=null;
        List<hotMessage>list=new ArrayList<>();
        if (code == null) {
            select_sql = "select * from hotmessage limit ? , ?";

        } else {
            select_sql = "select * from hotmessage where title like '%"+code+"%' limit ? , ?";
        }
        try {

            list = qr.query(select_sql, new BeanListHandler<>(hotMessage.class), new Object[]{page.getBeginIndex(), page.getEveryPage()});

        } catch (SQLException e) {
            e.printStackTrace();
        }return list;
    }
}

   /* @Test
    public void seslect(){
        System.out.println( new HotMessageImpl().getAllMessage());
    }*/

