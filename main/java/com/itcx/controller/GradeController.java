package com.itcx.controller;
import com.itcx.po.Staff;
import com.itcx.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.itcx.po.Grade;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class GradeController {

    @Autowired
    private GradeService gradeService;
    @RequestMapping("/class")
    public String findAll(Model model) {
        List<Grade> grades = gradeService.selectAll();
        model.addAttribute("grades", grades);
        return "grade";
    }
    @RequestMapping("/class/list.action")
    public String demand(Model model,Grade grade){
        List<Grade> grades=gradeService.demand(grade);
        model.addAttribute("grades",grades);
        return "grade";
    }
    @RequestMapping("/class/delete")
    @ResponseBody
    public void delete(@RequestParam("classID") int classID){
        gradeService.deleteGrade(classID);

    }

    @RequestMapping("/class/create")
    @ResponseBody
    public String create(Model model, Grade grade){
        List<Grade> grades=gradeService.createGrade(grade);
        model.addAttribute("grades",grades);
        return "grade";
    }

    @RequestMapping("/class/selectById")
    @ResponseBody
    public Grade selectByID(int classID){
        return gradeService.selectByID(classID);
    }
    @RequestMapping("/class/update")
    @ResponseBody
    public String update(Model model, Grade grade){
        List<Grade> grades=gradeService.updateGrade(grade);
        model.addAttribute("grades",grades);
        return "grade";
    }


}

