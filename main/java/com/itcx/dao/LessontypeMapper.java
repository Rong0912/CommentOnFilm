package com.itcx.dao;

import java.util.List;
import com.itcx.po.Department;
import com.itcx.po.Lessontype;

public interface LessontypeMapper {

    List<Lessontype> selectAll();
    List<Lessontype> findLesson(String lessonName);
    void deleteLesson(int ID);
    List<Lessontype> createLesson(Lessontype lessontype);
    List<Lessontype> updateLesson(Lessontype lessontype);
    Lessontype selectById(String ID);
}