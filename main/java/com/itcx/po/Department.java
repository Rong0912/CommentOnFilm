package com.itcx.po;
/**
 * 部门
 * @author fujiansheng
 *
 */
public class Department {
    private int id;

    private String depName;

    private int isCancel;

    @Override
    public String toString() {
        return "Department{" +
                "id='" + id + '\'' +
                ", depName='" + depName + '\'' +
                ", isCancel=" + isCancel +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDepName() {
        return depName;
    }

    public void setDepName(String depName) {
        this.depName = depName;
    }

    public int getIsCancel() {
        return isCancel;
    }

    public void setIsCancel(int isCancel) {
        this.isCancel = isCancel;
    }

    //.... 省略get/set方法

}
