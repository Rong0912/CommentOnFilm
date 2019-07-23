package dao;


import pojo.member;

import java.util.List;

public interface MemberDao {

    List<member> findBookByPage(Page page,String code);
    Long count(String code);
    //List<member> findMemberByPage(Page page);/**/

}
