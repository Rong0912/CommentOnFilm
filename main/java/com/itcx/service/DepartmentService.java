package com.itcx.service;
import java.util.List;

import com.itcx.common.utils.PageBean;
import com.itcx.po.Department;

public interface DepartmentService{
    List<Department> selectAll();
    List<Department> findDep( String depName);
    void deleteDep( int id);
    List<Department> addDep(Department department);
    List<Department> updateDep(Department department);

    PageBean<Department> getPagingList(Integer page, Integer rows, String... param);
    Department selectId(int id);
}
