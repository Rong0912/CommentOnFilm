package com.itcx.service.impl;

import com.itcx.dao.LessontypeMapper;
import com.itcx.po.Lessontype;
import com.itcx.service.LessontypeService;
import org.apache.tools.ant.types.Mapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.itcx.dao.DepartmentMapper;
import com.itcx.po.Department;
import java.util.List;
import com.itcx.service.DepartmentService;

import javax.annotation.Resource;

@Service
@Transactional
public class LessontypeServiceImpl implements LessontypeService {

    @Resource
    private LessontypeMapper lessontypeMapper;
    //查询部门

    @Override
    public List<Lessontype> selectAll() {
        return lessontypeMapper.selectAll();
    }

    @Override
    public List<Lessontype> findLesson(String lessonName) {
        return lessontypeMapper.findLesson(lessonName);
    }
    @Override
    public void deleteLesson(int ID){
        lessontypeMapper.deleteLesson(ID);
    }
    @Override
    public List<Lessontype> createLesson(Lessontype lessontype){
        return lessontypeMapper.createLesson(lessontype);
    }

     @Override
    public Lessontype selectById(String ID) {
        return lessontypeMapper.selectById(ID);
    }

    @Override
    public List<Lessontype>updateLesson(Lessontype lessontype){
        return lessontypeMapper.updateLesson(lessontype);
    }

}
