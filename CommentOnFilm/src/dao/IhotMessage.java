package dao;

import pojo.hotMessage;
import pojo.user;
import util.Page;

import java.util.List;

public interface IhotMessage {

    int saveHotMessage(hotMessage hotMessage);
    int deleteHotMessage(int messID );
    int updateHotMessage(hotMessage hotMessage);
    List<hotMessage> getAllMessage();
    hotMessage findbyTitle(String title);

}
