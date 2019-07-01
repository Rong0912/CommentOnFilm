package com.itcx.controller;
import com.itcx.po.Post;
import com.itcx.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class PostController {
    @Autowired
    private PostService postService;
    private int newid;
    @RequestMapping("/post")
    public String findAll(Model model) {
        List<Post> posts = postService.selectAll();
        model.addAttribute("posts", posts);
        return "post";
    }

    @RequestMapping("/post/demand")

    public String Demand(Model model, Post post){
//        System.out.println(1111);

        List<Post>posts=postService.findPost(post);
//        System.out.println(posts);
        model.addAttribute("posts",posts);
        return "post";
    }
    @RequestMapping("/post/delete")
    @ResponseBody
    public void delete(@RequestParam("postID") int postID){
//        System.out.println(postID);
        postService.deletePost(postID);

    }

    @RequestMapping("/post/create")
    public String createPost(Model model,Post post){
        System.out.println(post);
        List<Post>posts=postService.createPost(post);
        model.addAttribute("posts",posts);
        return "post";
    }

    @RequestMapping("/post/findById")
    @ResponseBody
    public Post findById(int postID){
        System.out.println(postID);
        this.newid=postID;
        return postService.findById(postID);
    }

    @RequestMapping("/post/update")
    @ResponseBody
    public String updatePost(Model model,Post post){
        post.setPostID(newid);
        System.out.println(post);
        List<Post> posts = postService.updatePost(post);
        model.addAttribute("posts",posts);
        return "post";
    }
}
