package com.itcx.po;

import java.util.List;

/**
 * 部门
 * @author fujiansheng
 *
 */
public class Post {
    private int postID;
    private String postName;
    private int depID;
    private String depName;

    @Override
    public String toString() {
        return "Post{" +
                "postID=" + postID +
                ", postName='" + postName + '\'' +
                ", depID=" + depID +
                ", depName='" + depName + '\'' +
                '}';
    }

    public int getDepID() {
        return depID;
    }

    public void setDepID(int depID) {
        this.depID = depID;
    }

    public String getDepName() {
        return depName;
    }

    public void setDepName(String depName) {
        this.depName = depName;
    }

    //    private List<Department> departments;
//
//    public List<Department> getDepartments() {
//        return departments;
//    }
//
//    public void setDepartments(List<Department> departments) {
//        this.departments = departments;
//    }

    public int getPostID() {
        return postID;
    }

    public void setPostID(int postID) {
        this.postID = postID;
    }

    public String getPostName() {
        return postName;
    }

    public void setPostName(String postName) {
        this.postName = postName;
    }
}
