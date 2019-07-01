package com.itcx.dao;

import java.util.List;

import com.itcx.po.Grade;

public interface GradeMapper {

    List<Grade> selectAll();
    List<Grade> demand(Grade grade);
    void deleteGrade(int classID);
    List<Grade> createGrade(Grade grade);
    Grade selectById(int classID);
    List<Grade> updateGrade(Grade grade);
}
