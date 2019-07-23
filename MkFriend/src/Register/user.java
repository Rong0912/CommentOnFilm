package Register;

public class user {
    private int userID;
    private String userName;
    private String password;
    public user(){ }

    public user(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public user(int userID, String userName, String password) {
        this.userID = userID;
        this.userName = userName;
        this.password = password;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
