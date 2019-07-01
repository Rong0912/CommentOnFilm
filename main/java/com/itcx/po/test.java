package com.itcx.po;
class MyClass {
    int x;
    MyClass(int i) {
        x = i;
    }
    public static void main(String args[]) {
        MyClass m1 = new MyClass(100);
        MyClass m2 = new MyClass(100);
        if (m1.equals(m2)) {
            System.out.println("Both are equal");
        } else {
            System.out.println("Both are not equal");
        }
    }
}