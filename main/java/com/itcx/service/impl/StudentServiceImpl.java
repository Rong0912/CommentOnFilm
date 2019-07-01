package com.itcx.service.impl;

import com.itcx.dao.StudentMapper;
import com.itcx.po.Student;
import com.itcx.service.StudentService;
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
public class StudentServiceImpl implements StudentService {

    @Resource
    private StudentMapper studentMapper;
    //查询部门

    @Override
    public List<Student> selectAll() {
        return studentMapper.selectAll();
    }}