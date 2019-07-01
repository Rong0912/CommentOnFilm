package com.itcx.po;

public class Refer {
    private  int id;
    private  String source;
    private  String referName;
    private  String username;
    private  String state;
    private  String resourceLevel;
    private String gender ;
    private String isJob;
    private String phone;
    private String idcard;
    private String weixin;
    private String qq;
    private String address;
    private String email;
    private String byAcademy;
    private String remark;

    @Override
    public String toString() {
        return "Refer{" +
                "id=" + id +
                ", source='" + source + '\'' +
                ", referName='" + referName + '\'' +
                ", username='" + username + '\'' +
                ", state='" + state + '\'' +
                ", resourceLevel='" + resourceLevel + '\'' +
                ", gender='" + gender + '\'' +
                ", isJob='" + isJob + '\'' +
                ", phone='" + phone + '\'' +
                ", idcard='" + idcard + '\'' +
                ", weixin='" + weixin + '\'' +
                ", qq='" + qq + '\'' +
                ", address='" + address + '\'' +
                ", email='" + email + '\'' +
                ", byAcademy='" + byAcademy + '\'' +
                ", remark='" + remark + '\'' +
                '}';
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getIsJob() {
        return isJob;
    }

    public void setIsJob(String isJob) {
        this.isJob = isJob;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getIdcard() {
        return idcard;
    }

    public void setIdcard(String idcard) {
        this.idcard = idcard;
    }

    public String getWeixin() {
        return weixin;
    }

    public void setWeixin(String weixin) {
        this.weixin = weixin;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getByAcademy() {
        return byAcademy;
    }

    public void setByAcademy(String byAcademy) {
        this.byAcademy = byAcademy;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getReferName() {
        return referName;
    }

    public void setReferName(String referName) {
        this.referName = referName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getResourceLevel() {
        return resourceLevel;
    }

    public void setResourceLevel(String resourceLevel) {
        this.resourceLevel = resourceLevel;
    }
}
