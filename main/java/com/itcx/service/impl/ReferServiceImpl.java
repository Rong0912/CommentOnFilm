package com.itcx.service.impl;

import com.itcx.dao.ReferMapper;
import com.itcx.po.Refer;
import com.itcx.service.ReferService;
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
public class ReferServiceImpl implements ReferService {

    @Resource
    private ReferMapper referMapper;
    //查询部门

    @Override
    public List<Refer> selectAll() {
        return referMapper.selectAll();
    }

    @Override
    public List<Refer> demandRefer(Refer refer) {
        return referMapper.demandRefer(refer);
    }

    @Override
    public void deleteRefer(int id) {
        referMapper.deleteRefer(id);
    }

    @Override
    public List<Refer> referCreate(Refer refer) {
        return referMapper.referCreate(refer);
    }

    @Override
    public List<Refer> updateRefer(Refer refer) {
        return referMapper.updateRefer(refer);
    }

    @Override
    public Refer selectById(int id) {
        return referMapper.selectById(id);
    }
}