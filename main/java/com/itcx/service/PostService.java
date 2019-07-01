package com.itcx.service;
import java.util.List;

import com.itcx.po.Post;

public interface PostService {
    List<Post> selectAll();
    List<Post> findPost(Post post);
    void deletePost(int postID);

    List<Post> createPost(Post post);

    List<Post> updatePost(Post post);

    Post findById(int postID);
}
