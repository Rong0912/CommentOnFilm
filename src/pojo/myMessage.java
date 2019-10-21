package pojo;

public class myMessage {
    public int messageID;
    public int userID ;
    public String userName;
    public String title;
    public String comTime;
    public String comMessage;
    public String comPic;
    public String pic;

    public myMessage(String pic,String userName, String title, String comTime, String comMessage, String comPic) {
        this.userName = userName;
        this.title = title;
        this.comTime = comTime;
        this.comMessage = comMessage;
        this.comPic = comPic;
        this.pic=pic;
    }

    public myMessage(int messageID, String userName, String title, String comTime, String comMessage, String comPic, String pic) {
        this.messageID = messageID;
        this.userName = userName;
        this.title = title;
        this.comTime = comTime;
        this.comMessage = comMessage;
        this.comPic = comPic;
        this.pic = pic;
    }

    public myMessage(int userID, String title, String comTime, String comMessage, String comPic) {
        this.userID = userID;
        this.title = title;
        this.comTime = comTime;
        this.comMessage = comMessage;
        this.comPic = comPic;
    }

    public myMessage(int messageID, String title, String comTime, String comMessage) {
        this.userID = messageID;
        this.title = title;
        this.comTime = comTime;
        this.comMessage = comMessage;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public myMessage(){}

    public int getMessageID() {
        return messageID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setMessageID(int messageID) {
        this.messageID = messageID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getComTime() {
        return comTime;
    }

    public void setComTime(String comTime) {
        this.comTime = comTime;
    }

    public String getComMessage() {
        return comMessage;
    }

    public void setComMessage(String comMessage) {
        this.comMessage = comMessage;
    }

    public String getComPic() {
        return comPic;
    }

    public void setComPic(String comPic) {
        this.comPic = comPic;
    }

    @Override
    public String toString() {
        return "myMessage{" +
                "messageID=" + messageID +
                ", userID=" + userID +
                ", userName='" + userName + '\'' +
                ", title='" + title + '\'' +
                ", comTime='" + comTime + '\'' +
                ", comMessage='" + comMessage + '\'' +
                ", comPic='" + comPic + '\'' +
                ", pic='" + pic + '\'' +
                '}';
    }
}
