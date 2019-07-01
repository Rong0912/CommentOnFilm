package com.itcx.controller;
import com.itcx.po.Lessontype;
import com.itcx.service.LessontypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.itcx.po.Department;
import java.util.List;
import com.itcx.service.DepartmentService;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LessontypeController {

    @Autowired
    private LessontypeService lessontypeService;
    private String newid;
    @RequestMapping("/lesson")
    public String findAll(Model model) {
        List<Lessontype> lessontypes =lessontypeService.selectAll();
        model.addAttribute("lessontypes", lessontypes);
        return "lessontype";
    }
    @RequestMapping("/lesson/list.action")
    public String demand(Model model, @RequestParam("lessonName") String lessonName){
        List<Lessontype> lessontypes=lessontypeService.findLesson(lessonName);
        model.addAttribute("lessontypes",lessontypes);
        return "lessontype";
    }

    @RequestMapping("/lesson/delete")
    @ResponseBody
    public void deleteLesson(@RequestParam("ID") int ID){
        System.out.println(ID);
        lessontypeService.deleteLesson(ID);

    }
    @RequestMapping("/lesson/create")
    @ResponseBody
    public String create(Model model,Lessontype lessontype){
        System.out.println(lessontype);
        List<Lessontype>lessontypes=lessontypeService.createLesson(lessontype);
        model.addAttribute("lessontypes",lessontypes);
        return "lessontype";
    }
    @RequestMapping("lesson/selectById")
    @ResponseBody
    public Lessontype selectID(String ID){
        this.newid=ID;
        return lessontypeService.selectById(ID);
    }

    @RequestMapping("/lesson/update")
    @ResponseBody
    public String update(Model model,Lessontype lessontype){
        lessontype.setID(newid);
        System.out.println(lessontype);
        List<Lessontype>lessontypes=lessontypeService.updateLesson(lessontype);
        model.addAttribute("lessontypes",lessontypes);
        return "lessontype";
    }
}