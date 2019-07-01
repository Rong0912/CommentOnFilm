package com.itcx.dao;

import java.util.List;
import java.util.Map;

import com.itcx.po.Department;
import com.itcx.service.impl.Example;
import org.springframework.stereotype.Repository;

public interface DepartmentMapper {

    List<Department> selectAll();
    //CRUD
    List<Department> findDep(String depName);
    List<Department> addDep(Department department);
    List<Department> updateDep(Department department);
    void deleteDep(int id);

    //分页
    List<Department> selectMapperPagingList(Map<String, String> map);

    int selectCountBydepName(Map<String, String> map);

    Department selectById(int id);
}
