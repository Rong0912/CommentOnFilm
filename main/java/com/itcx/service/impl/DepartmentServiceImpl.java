package com.itcx.service.impl;

import com.itcx.common.utils.PageBean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.itcx.dao.DepartmentMapper;
import com.itcx.po.Department;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.itcx.service.DepartmentService;

import javax.annotation.Resource;

@Service
@Transactional
public class DepartmentServiceImpl implements DepartmentService{

    @Resource
    private DepartmentMapper departmentMapper;

    @Override
    public List<Department> selectAll() {
        return departmentMapper.selectAll();
    }
    //查询部门
    public List<Department> findDep (String depName) {
        return departmentMapper.findDep(depName);
    }
    //添加部门
    public List<Department> addDep (Department department) {
        return departmentMapper.addDep(department);
    }
    //修改部门
    public List<Department> updateDep(Department department){
        return departmentMapper.updateDep(department);
    }

    public Department selectId(int id) {
        return departmentMapper.selectById(id);
    }

    //删除部门
    public void deleteDep (int id) {
        departmentMapper.deleteDep(id);
    }

    //分页

    public PageBean<Department> getPagingList(Integer page, Integer rows, String... param)
    {
        Department dep=new Department();
        Map<String, String> map = new HashMap<>();
        // 当前页
        map.put("start", ((page-1) * rows)+"");
        // 每页数
        map.put("rows", rows+"");
        if(param!=null&&param.length>=1) {
            dep.setDepName(param[0]);
            map.put("depName", dep.getDepName());
        }
        // 查询客户列表(自定义 sql 语句)
        List<Department> customers = departmentMapper.selectMapperPagingList(map);
        int count=departmentMapper.selectCountBydepName(map);
        /*// 查询客户列表总记录数(通过条件查询生成动态 sql 语句)
        Example example = new Example(Department.class);
        Criteria ct = example.createCriteria();
        ct.andLike("depName", "%"+dep.getDepName()+"%");
        Integer count = departmentMapper.selectCountByExample(example);*/
        // 创建 Page 返回对象
        PageBean<Department> result = new PageBean<>();
        result.setPage(page);
        result.setRows(customers);
        result.setSize(rows);
        result.setTotal(count);
        return result;
    }


}
