package com.itcx.po;

public class Lessontype {
    private  String ID;
    private  String lessonName;
    private  String lessoncost;
    private  String totalTime;
    private  String remark;

    @Override
    public String toString() {
        return "Lessontype{" +
                "ID='" + ID + '\'' +
                ", lessonName='" + lessonName + '\'' +
                ", lessoncost='" + lessoncost + '\'' +
                ", totalTime='" + totalTime + '\'' +
                ", remark='" + remark + '\'' +
                '}';
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getLessonName() {
        return lessonName;
    }

    public void setLessonName(String lessonName) {
        this.lessonName = lessonName;
    }

    public String getLessoncost() {
        return lessoncost;
    }

    public void setLessoncost(String lessoncost) {
        this.lessoncost = lessoncost;
    }

    public String getTotalTime() {
        return totalTime;
    }

    public void setTotalTime(String totalTime) {
        this.totalTime = totalTime;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
