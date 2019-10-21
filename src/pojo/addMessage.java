package pojo;

public class addMessage {
    private int addMessageID;
    private int messageID;
    private int userID;
    private String addMessage;
    private String addComTime;
    public String pic;
    public String userName;

    public addMessage(){

    }

    public addMessage(String userName,String pic,String addComTime,String addMessage,int messageID  ) {
        this.addMessage = addMessage;
        this.addComTime = addComTime;
        this.pic = pic;
        this.userName = userName;
        this.messageID=messageID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public addMessage(int userID, int messageID, String addMessage, String addComTime) {

        this.userID = userID;
        this.messageID = messageID;
        this.addMessage = addMessage;
        this.addComTime=addComTime;
    }

    public int getAddMessageID() {
        return addMessageID;
    }

    public String getAddMessage() {
        return addMessage;
    }

    public void setAddMessage(String addMessage) {
        this.addMessage = addMessage;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public void setAddMessageID(int addMessageID) {
        this.addMessageID = addMessageID;
    }

    public int getMessageID() {
        return messageID;
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

    public String getaddMessage() {
        return addMessage;
    }

    public void setaddMessage(String addMessage) {
        this.addMessage = addMessage;
    }

    public String getAddComTime() {
        return addComTime;
    }

    public void setAddComTime(String addComTime) {
        this.addComTime = addComTime;
    }

    @Override
    public String toString() {
        return "addMessage{" +
                "addMessageID=" + addMessageID +
                ", messageID=" + messageID +
                ", userID=" + userID +
                ", addMessage='" + addMessage + '\'' +
                ", addComTime='" + addComTime + '\'' +
                ", pic='" + pic + '\'' +
                ", userName='" + userName + '\'' +
                '}';
    }
}
