package com.itcx.controller;
import com.itcx.po.Refer;
import com.itcx.po.Staff;
import com.itcx.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
public class StaffController {

    @Autowired
    private StaffService staffService;
    private int newid;
    @RequestMapping("/staff")
    public String findAll(Model model) {
        List<Staff> staffs =staffService.selectAll();
        model.addAttribute("staffs", staffs);
        return "staff";
    }
    @RequestMapping("/staff/list.action")
    @ResponseBody
    public String demand(Model model,Staff staff){
        List<Staff> staffs=staffService.demandStaff(staff);
        model.addAttribute("staffs",staffs);
        return "staff";
    }

    @RequestMapping("/staff/delete")
    @ResponseBody
    public void delete(@RequestParam("staffID") int staffID){
        staffService.deleteStaff(staffID);

    }
    @RequestMapping("/staff/create")
    @ResponseBody
    public String create(Model model,Staff staff){
        List<Staff> staffs=staffService.createStaff(staff);
        System.out.println(staffs);
        model.addAttribute("staffs",staffs);
        return "staff";
    }
    @ResponseBody
    @RequestMapping("/staff/selectById")
    public Staff selectById(int staffID){
        System.out.println(staffID);
        this.newid=staffID;
        return staffService.selectById(staffID);
    }
    @ResponseBody
    @RequestMapping("/staff/update")
    public String update(Model model,Staff staff){
        staff.setStaffID(newid);
        List<Staff> staffs=staffService.updateStaff(staff);
        model.addAttribute("staffs",staffs);
        return "staff";
    }





    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(String username,String password, Model model,
                        HttpSession session) {
// 通过账号和密码查询用户
        Staff staff = new Staff();
        staff.setLoginName(username);
        staff.setLoginPwd(password);
        Staff user = staffService.login(staff);
        System.out.println(user);
        if(user != null){
            // 将用户对象添加到 Session
            session.setAttribute("USER", user);
           // 重定向到主页面的跳转方法
            return "redirect:department";

        }
        model.addAttribute("msg", "账号或密码错误，请重新输入！");
// 返回到登录页面
        return "login";
    }
    /**
     * 向用户主页面跳转
     */
//    @RequestMapping(value="/main")
//    public String toMain() {
//        return "department";
//    }
//    /**
//     * 退出登录
//     */
    @RequestMapping(value = "/logout")
    public String logout(HttpSession session) {
// 清除 Session
        session.invalidate();
// 重定向到登录页面的跳转方法
        return "redirect:login";
    }
}

