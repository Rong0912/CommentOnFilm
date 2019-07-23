package pojo;

public class member {
    private String logname;
    private String password;
    private String phone;
    private String email;
    private String message;
    public member(){ }

    public member(String logname, String password) {
        this.logname = logname;
        this.password = password;
    }

    public member(String logname, String password, String phone, String email, String message) {
        this.logname = logname;
        this.password = password;
        this.phone = phone;
        this.email = email;
        this.message = message;
    }
    public member(String logname,  String phone, String email, String message) {
        this.logname = logname;

        this.phone = phone;
        this.email = email;
        this.message = message;
    }



    public String getLogname() {
        return logname;
    }

    public void setLogname(String logname) {
        this.logname = logname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "member{" +
                "logname='" + logname + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", message='" + message + '\'' +
                '}';
    }

    public static void main(String[] args) {
        String x="fmn";
        System.out.println(x.toUpperCase());
        String y=x.replace('f','F');
        y=y+"wxy";
        System.out.println(y);
    }
}
