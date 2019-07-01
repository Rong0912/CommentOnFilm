package com.itcx.dao;

import com.itcx.po.Staff;


import java.util.List;

public interface StaffMapper {
    List<Staff> selectAll();
    Staff login(Staff staff);
    List<Staff> demandStaff(Staff staff);
    void deleteStaff(int staffID);
    List<Staff> createStaff(Staff staff);
    Staff selectById(int staffID);

    List<Staff> updateStaff(Staff staff);
}
