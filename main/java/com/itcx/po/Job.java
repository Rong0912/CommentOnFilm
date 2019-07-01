package com.itcx.po;

public class Job {
    private  int id;
    private  String stunane;
    private  String gender;
    private  String classid;
    private  String jobState;
    private String jobTime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStunane() {
        return stunane;
    }

    public void setStunane(String stunane) {
        this.stunane = stunane;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getClassid() {
        return classid;
    }

    public void setClassid(String classid) {
        this.classid = classid;
    }

    public String getJobState() {
        return jobState;
    }

    public void setJobState(String jobState) {
        this.jobState = jobState;
    }

    public String getJobTime() {
        return jobTime;
    }

    public void setJobTime(String jobTime) {
        this.jobTime = jobTime;
    }
}
