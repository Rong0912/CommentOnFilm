package com.itcx.service.impl;

import com.itcx.dao.GradeMapper;
import com.itcx.service.GradeService;
import org.springframework.stereotype.Service;
import com.itcx.po.Grade;
import java.util.List;

import javax.annotation.Resource;

@Service

public class GradeServiceImpl implements GradeService {

    @Resource
    private GradeMapper gradeMapper;
    //查询部门

    public List<Grade> selectAll() {
        return gradeMapper.selectAll();
    }

    @Override
    public List<Grade> demand(Grade grade) {
        return gradeMapper.demand(grade);
    }

    @Override
    public void deleteGrade(int classID) {
        gradeMapper.deleteGrade(classID);

    }

    @Override
    public List<Grade> createGrade(Grade grade) {
        return  gradeMapper.createGrade(grade);
    }

    @Override
    public Grade selectByID(int classID) {
        return gradeMapper.selectById(classID);
    }

    @Override
    public List<Grade> updateGrade(Grade grade) {
        return gradeMapper.updateGrade(grade);
    }

//    @Override
//    public List<Department> findAll() {
//        eturn this.departmentDao.selectAll();
//    }

//    @Override
//    public List<Department> selectAll() {
//        return null;
//    }
}
