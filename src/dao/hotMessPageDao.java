package dao;


import pojo.hotMessage;

import util.Page;

import java.util.List;

public interface hotMessPageDao {

    List<hotMessage> findBookByPage(Page page, String code);
    Long count(String code);
    //List<member> findMemberByPage(Page page);/**/

}
