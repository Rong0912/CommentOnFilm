package dao.impl;

import dao.ImyComment;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import pojo.myMessage;
import pojo.user;
import util.C3POUtil;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static com.sun.org.apache.xalan.internal.xsltc.compiler.util.Type.Object;

public class MyCommentImpl implements ImyComment {
    QueryRunner qr;
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    String comTime=df.format(new Date());
    public MyCommentImpl(){
        qr=new QueryRunner(C3POUtil.getDs());
    }
    @Override
    public myMessage findByUserName(String name) {
        String select_sql="select* from mycomment where userID=(select userID from user where userName=?)";
        //String update_sql="update mycomment set userID=(select userID from user where userName=?)";
        myMessage myMessage=null;
        try {
            myMessage=qr.query(select_sql,new BeanHandler<>(pojo.myMessage.class),name);
            //qr.update(update_sql,new Object[]{name});
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return myMessage;
    }



    @Override
    public int saveComment(myMessage myMessage) {
        String insert_sql="insert into mycomment ( userID,title,comTime,comMessage,comPic) values(?,?,?,?,?)";
        int result=0;
        try {
            result=qr.update(insert_sql,new Object[]{myMessage.getUserID(),myMessage.getTitle(),myMessage.getComTime(),myMessage.getComMessage(),myMessage.getComPic()});
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public List<myMessage> getAllMessage(int userID) {

        List<myMessage> list= new ArrayList();
        try {
            if(userID==0) {
                String sql = "select messageID,  pic,userName,title,comTime,comMessage,comPic from mycomment,user where user.userID=mycomment.userID order by messageID desc";
                list= qr.query(sql,new BeanListHandler<>(myMessage.class));
            }else {
                String sql = "select messageID,  pic,userName,title,comTime,comMessage,comPic from mycomment,user where user.userID=mycomment.userID and mycomment.userID= ? order by messageID desc";
                list= qr.query(sql,new BeanListHandler<>(myMessage.class),userID);
                System.out.println("111111");
                System.out.println(list);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public int deleteComment(int messageID) {
        String sql="delete from mycomment where messageID=?";
        int result=0;
        try {
            result=qr.update(sql,new Object[]{messageID});
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return result;
    }


}
