package dao;

import pojo.addMessage;

import java.util.List;

public interface IaddMessageDao {
    int saveAddMess(addMessage addMessage);
    int delete(int addMessageID);
    List<addMessage> giveAll(int userID);
}
