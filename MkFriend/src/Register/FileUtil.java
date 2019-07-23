package Register;

/**
 * 获取各个浏览器下的上传的文件名
 */
public class FileUtil {

    public static String getFileName(String header) {
        /**
         * String[] tempArr1 =
         * header.split(";");代码执行完之后，在不同的浏览器下，tempArr1数组里面的内容稍有区别
         * 火狐或者google浏览器下：
         * tempArr1={form-data,name="file",filename="snmp4j--api.zip"}
         * IE浏览器下：tempArr1={form-data,name="file",filename="E:\snmp4j--api.zip"}
         */

        /**
         * 火狐或者google浏览器下：tempArr2={filename,"snmp4j--api.zip"}
         * IE浏览器下：tempArr2={filename,"E:\snmp4j--api.zip"}
         */
        String[] tempArr1 = header.split(";");
        String[] tempArr2 = tempArr1[2].split("=");
        // 获取文件名，兼容各种浏览器的写法
        String fileName = tempArr2[1].substring(tempArr2[1].lastIndexOf("\\") + 1).replaceAll("\"", "");
        return fileName;
    }
}
