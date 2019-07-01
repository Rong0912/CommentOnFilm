package com.itcx.service.impl;

import com.itcx.common.utils.MD5Util;

import com.itcx.dao.StaffMapper;
import com.itcx.dao.StudentMapper;
import com.itcx.po.Staff;
import com.itcx.po.Student;
import com.itcx.service.StaffService;
import com.itcx.service.StudentService;
import org.apache.tools.ant.types.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.itcx.dao.DepartmentMapper;
import com.itcx.po.Department;
import java.util.List;
import com.itcx.service.DepartmentService;

import javax.annotation.Resource;

@Service
@Transactional
public class StaffServiceImpl implements StaffService {

    @Resource
    private StaffMapper staffMapper;
    //查询部门

    @Override
    public List<Staff> selectAll() {
        return staffMapper.selectAll();
    }


    public Staff login(Staff staff) {
        String loginPwd = MD5Util.getMD5Value(staff.getLoginPwd());
        staff.setLoginPwd(loginPwd);
        return staffMapper.login(staff);
    }

    @Override
    public List<Staff> demandStaff(Staff staff) {
        return staffMapper.demandStaff(staff);
    }

    @Override
    public void deleteStaff(int staffID) {
        staffMapper.deleteStaff(staffID);
    }

    @Override
    public List<Staff> createStaff(Staff staff) {
        return staffMapper.createStaff(staff);
    }

    @Override
    public Staff selectById(int staffID) {
        return staffMapper.selectById(staffID);
    }

    @Override
    public List<Staff> updateStaff(Staff staff) {
        return staffMapper.updateStaff(staff);
    }
}