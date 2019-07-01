package com.itcx.controller;
import com.itcx.common.utils.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.itcx.po.Department;

import java.sql.SQLOutput;
import java.util.List;
import com.itcx.service.DepartmentService;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;
    private int newid;
  /*  @RequestMapping("/department")
    public String findAll(Model model) {
        List<Department> departments = departmentService.selectAll();
        model.addAttribute("departments", departments);
        return "department";
    }*/
    @RequestMapping("/department/list.action")
    public String demand(Model model ,@RequestParam("depName") String depName) {
        List<Department> departments = departmentService.findDep(depName);
        System.out.println(departments);
        model.addAttribute("departments", departments);
        return "department";
    }
    @ResponseBody
    @RequestMapping("/department/add")
    public String addDep(Model model ,Department department) {
        System.out.println(department);
        List<Department> departments = departmentService.addDep(department);
        model.addAttribute("departments", departments);
        return "department";
    }
    @ResponseBody
    @RequestMapping("/department/selectById")
    public Department selectId(int id){
        this.newid=id;
        System.out.println(departmentService.selectId(id));
        return departmentService.selectId(id);
    }
    @ResponseBody
    @RequestMapping(value = "/department/updateDep",method = RequestMethod.POST)
    public String updateDep(Model model,Department department){
        department.setId(newid);
        System.out.println(department);
        List<Department> departments=departmentService.updateDep(department);
        model.addAttribute("departments",departments);
        //Map里面添加key=“departments”，value=“departments”对象的意思，
        // 最后把这个model返回一个jsp，在jsp页面上就能得到这个departments对象了！
        return "department";
    }
    @RequestMapping("/department/delete")
    @ResponseBody
    public void delete(@RequestParam("id") int id) {
        System.out.println(id);
        departmentService.deleteDep(id);



    }

//    @RequestMapping("/department/list.action")//删除
//    public ModelAndView fin...........dDep(String depName){
//        ModelAndView mav=new ModelAndView();
//        List<Department> departments=departmentServic
//
//
//
//
//        e.findDep(depName);
//        mav.addObject("depart
//        ments",departments
//        );
//        mav.setViewName("department");
//        return mav;


//分页
    @RequestMapping("/department")
    public String list(@RequestParam(defaultValue="1")Integer page,
                       @RequestParam(defaultValue="5")Integer rows,
                       @RequestParam(defaultValue="")String depName, Model model) {
// 条件查询分页后的部门集合
        PageBean<Department> departs = departmentService.getPagingList(page, rows,
                depName);
        model.addAttribute("page", departs);
// 添加参数
        model.addAttribute("depName", depName);
        return "department";
   }
}


