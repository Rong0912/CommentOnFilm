package pojo;

public class hotMessage {
    public int messID;
    public String pic;
    public String title;
    public String comMessage;
    public String comTime;
    public String userName;


    public hotMessage(){}
    public hotMessage(int messID, String pic, String title, String comMessage, String comTime, String userName) {
        this.messID = messID;
        this.pic = pic;
        this.title = title;
        this.comMessage = comMessage;
        this.comTime = comTime;
        this.userName = userName;
    }

    public int getMessID() {
        return messID;
    }

    public void setMessID(int messID) {
        this.messID = messID;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getComMessage() {
        return comMessage;
    }

    public void setComMessage(String comMessage) {
        this.comMessage = comMessage;
    }

    public String getComTime() {
        return comTime;
    }

    public void setComTime(String comTime) {
        this.comTime = comTime;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "hotMessage{" +
                "messID=" + messID +
                ", pic='" + pic + '\'' +
                ", title='" + title + '\'' +
                ", comMessage='" + comMessage + '\'' +
                ", comTime='" + comTime + '\'' +
                ", userName='" + userName + '\'' +
                '}';
    }
}
