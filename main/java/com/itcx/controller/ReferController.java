package com.itcx.controller;
import com.itcx.po.Refer;
import com.itcx.service.ReferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ReferController {

    @Autowired
    private ReferService referService;
    private int newid;
    @RequestMapping("/refer")
    public String findAll(Model model) {
        List<Refer>refers = referService.selectAll();
        model.addAttribute("refers", refers);
        return "refer";
    }
    @RequestMapping("/refer/list.action")
    public String demand(Model model,Refer refer){
        System.out.println(refer);
        List<Refer> refers=referService.demandRefer(refer);
        model.addAttribute("refers",refers);
        return "refer";
    }

    @RequestMapping("/refer/delete")
    @ResponseBody
    public void delete(@RequestParam("id") int id){
        System.out.println(id);
        referService.deleteRefer(id);


    }
    @ResponseBody
    @RequestMapping("/refer/create")
    public String create(Model model,Refer refer){
        System.out.println(refer);
        List<Refer>refers=referService.referCreate(refer);
        System.out.println(refers);
        model.addAttribute("refers",refers);
        return "refer";
    }
    @ResponseBody
    @RequestMapping("/refer/selectById")
    public Refer selectById(int id){
        System.out.println(id);
        this.newid=id;
        return referService.selectById(id);

    }
    @ResponseBody
    @RequestMapping("/refer/update")
    public String update(Model model,Refer refer){
        refer.setId(newid);
        List<Refer> refers=referService.updateRefer(refer);
        model.addAttribute("refers",refers);
        return "refer";

    }
}