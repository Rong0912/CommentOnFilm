package com.itcx.service.impl;

import com.itcx.dao.PostMapper;
import com.itcx.po.Post;
import com.itcx.service.PostService;
import org.apache.tools.ant.types.Mapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import javax.annotation.Resource;

@Service
@Transactional
public class PostServiceImpl implements PostService {

    @Resource
    private PostMapper postMapper;

    @Override
    public List<Post> selectAll() {
        return postMapper.selectAll();
    }

    @Override
    public List<Post> findPost(Post post) {
        return postMapper.findPost(post);
    }

    @Override
    public void deletePost(int postID) {
         postMapper.deletePost(postID);
    }

    @Override
    public List<Post> createPost(Post post) {
        return postMapper.createPost(post);
    }

    @Override
    public List<Post> updatePost(Post post) {
        return postMapper.updatePost(post);
    }

    @Override
    public Post findById(int postID) {
        return postMapper.findById(postID);
    }

//    @Override
//    public  PageBean<Crmpost> getPagingList(Integer page,Integer rows,String...param){
//        Crmpost post=new Crmpost();
//        Map<String,String> map=new HashMap<>();
//        //当前页
//        map.put("start",((page-1)*rows)+"");
//        //每页数
//        map.put("rows",rows+"");
//        String postName="";
//        String depid="";
//        if(null!=param&&param.length>1){
//            postName=param[0];
//            depid=param[1];
//            map.put("postName",postName);
//            map.put("depid",depid);
//        }
//        Object crmPostDao;
//        List<Crmpost> posts=crmPostDao.selectPageList( map);
//        return null;
//    }

}
