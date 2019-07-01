package com.itcx.service;
import java.util.List;

import com.itcx.po.Grade;

public interface GradeService {
    List<Grade> selectAll();
    List<Grade> demand(Grade grade);
    void deleteGrade(int classID);
    List<Grade> createGrade(Grade grade);
    Grade selectByID(int classID);
    List<Grade> updateGrade(Grade grade);
}

