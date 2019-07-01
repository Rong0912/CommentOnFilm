package com.itcx.dao;

import java.util.List;

import com.itcx.po.Post;


public interface PostMapper {

    List<Post> selectAll();
    List<Post> findPost(Post post);
    void deletePost(int postID);
    List<Post> createPost(Post post);

    List<Post> updatePost(Post post);

    Post findById(int postID);
}
