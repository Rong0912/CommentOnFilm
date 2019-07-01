package com.itcx.controller;
import com.itcx.po.Student;
import com.itcx.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

@Controller
public class StudentController {

    @Autowired
    private StudentService studentService;
    @RequestMapping("/student")
    public String findAll(Model model) {
        List<Student> students = studentService.selectAll();
        model.addAttribute("students", students);
        return "student";
    }
}
