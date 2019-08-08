package dao;

import pojo.myMessage;

import java.util.List;

public interface ImyComment {

    myMessage findByUserName(String name);
    int saveComment(myMessage myMessage);
    //List<myMessage> getAllMessage();
    List<myMessage> getAllMessage(int userID);
    int deleteComment(int messageID);

}
