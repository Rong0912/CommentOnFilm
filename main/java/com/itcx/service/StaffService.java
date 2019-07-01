package com.itcx.service;

import com.itcx.po.Staff;

import java.util.List;

public interface StaffService {
    public List<Staff> selectAll();
    Staff login(Staff staff);
    List<Staff> demandStaff(Staff staff);

    void deleteStaff(int staffID);
    List<Staff> createStaff(Staff staff);

    Staff selectById(int id);

    List<Staff> updateStaff(Staff staff);
}

