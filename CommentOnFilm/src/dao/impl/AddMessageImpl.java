package dao.impl;

import dao.IaddMessageDao;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import pojo.addMessage;
import pojo.hotMessage;
import util.C3POUtil;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AddMessageImpl implements IaddMessageDao {
    QueryRunner qr;
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    String comTime=df.format(new Date());
    public AddMessageImpl(){
        qr=new QueryRunner(C3POUtil.getDs());
    }
    @Override
    public int saveAddMess(addMessage addMessage) {
        String insert_sql="insert into addcomment(messageID,userID,addMessage,addComTime) values (?,?,?,?)";
        int result=0;
        try {

            result=qr.update(insert_sql,new Object[]{addMessage.getMessageID(),addMessage.getUserID(),addMessage.getAddMessage(),addMessage.getAddComTime()             });
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return result;

    }

    @Override
    public int delete(int addMessageID) {
        String delete_sql="delete from addcomment where addMessageID=?";
        int result=0;
        try {
            result=qr.update(delete_sql,new Object[]{addMessageID});
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public List<addMessage> giveAll(int userID) {

        List<addMessage> list=new ArrayList<>();
        try {
            if(userID==0){
                String sql="select messageID, userName,pic,addComTime,addMessage from addcomment,user where  addcomment.userID=user.userID order by addMessageID desc";
                list= qr.query(sql,new BeanListHandler<>(addMessage.class));
            }else{
                String sql="select messageID, userName,pic,addComTime,addMessage from addcomment,user where  addcomment.userID=user.userID and user.userID=? order by addMessageID desc";
                list= qr.query(sql,new BeanListHandler<>(addMessage.class),userID);

            }

            //System.out.println(list);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        //System.out.println(list);
        return list;
    }
}
