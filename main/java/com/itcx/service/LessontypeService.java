package com.itcx.service;
import java.util.List;
import com.itcx.po.Lessontype;

public interface LessontypeService{
    List<Lessontype> selectAll();
    //CRUD
    List<Lessontype> findLesson(String lessonName);
    void deleteLesson(int ID);
    List<Lessontype> createLesson(Lessontype lessontype);
    //查
    Lessontype selectById(String ID);
    List<Lessontype> updateLesson(Lessontype lessontype);


}