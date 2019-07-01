package com.itcx.po;
/**
 * 部门
 * @author fujiansheng
 *
 */
public class Grade {
    private  int classID;
    private String className;
    private int lessonTypeId;
    private String beginTime;
    private String endTime;
    private String state;
    private String totalCount;
    private String goCount;
    private String leaveCount;
    private String lessonName;
    private  String remark;

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Override
    public String toString() {
        return "Grade{" +
                "classID=" + classID +
                ", className='" + className + '\'' +
                ", lessonTypeId=" + lessonTypeId +
                ", beginTime='" + beginTime + '\'' +
                ", endTime='" + endTime + '\'' +
                ", state='" + state + '\'' +
                ", totalCount='" + totalCount + '\'' +
                ", goCount='" + goCount + '\'' +
                ", leaveCount='" + leaveCount + '\'' +
                ", lessonName='" + lessonName + '\'' +
                ", remark='" + remark + '\'' +
                '}';
    }

    public String getLessonName() {
        return lessonName;
    }

    public void setLessonName(String lessonName) {
        this.lessonName = lessonName;
    }

    public int getLessonTypeId() {
        return lessonTypeId;
    }

    public void setLessonTypeId(int lessonTypeId) {
        this.lessonTypeId = lessonTypeId;
    }

    public int getClassID() {
        return classID;
    }

    public void setClassID(int classID) {
        this.classID = classID;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getBeginTime() {
        return beginTime;
    }

    public void setBeginTime(String beginTime) {
        this.beginTime = beginTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(String totalCount) {
        this.totalCount = totalCount;
    }

    public String getGoCount() {
        return goCount;
    }

    public void setGoCount(String goCount) {
        this.goCount = goCount;
    }

    public String getLeaveCount() {
        return leaveCount;
    }

    public void setLeaveCount(String leaveCount) {
        this.leaveCount = leaveCount;
    }

}