package util;

import java.util.ArrayList;
import java.util.List;

public class repalceM {

    public static String mingGan( String str){
        String s=str;

        List<String > list=new ArrayList<>();
        list.add("fuck");
        list.add("傻逼");
        list.add("操");

        for(int i=0;i<str.length();i++){
            char a =str.charAt(i);

            if(list.contains(a)){
                s=s.replace(String.valueOf(a),"**");
            }
        }
    return s;

    }

    public static void main(String[] args) {
        System.out.println(repalceM.mingGan("daa"));
    }

}
