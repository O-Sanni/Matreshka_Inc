package com.example.bookstoredatabase.model;

import javax.persistence.*;

@Entity
@Table(name = "requests")

public class Requests {

    @Id
    @GeneratedValue
    @Column(name = "request_id")
    private long requestId;


    @Column(name = "requester_name")
    private String requesterName;

    @Column(name = "requester_email")
    private String requesterEmail;

    @Column(name = "requester_phone_number")
    private String requesterPhoneNumber;

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "english_item_name")
    private String englishItemName;

    @Column(name = "request_date")
    private String requestDate;

    @Column(name = "date_completed")
    private String dateCompleted;

    public Requests() {
        super();
    }

    public Requests(String requesterName, String requesterEmail, String requesterPhoneNumber, String itemName, String englishItemName, String requestDate, String dateCompleted) {
        super();

        this.requesterName = requesterName;
        this.requesterEmail = requesterEmail;
        this.requesterPhoneNumber=requesterPhoneNumber;
        this.itemName = itemName;
        this.englishItemName=englishItemName;
        this.requestDate=requestDate;
        this.dateCompleted=dateCompleted;
    }

    public long getId() {
        return requestId;
    }

    public void setId(long requestId) {
        this.requestId = requestId;
    }

    public String getRequesterName() {
        return requesterName;
    }

    public void setRequesterName(String requesterName) {
        this.requesterName = requesterName;
    }

    public String getRequesterEmail() {
        return requesterEmail;
    }

    public void setRequesterEmail(String requestorEmail) {
        this.requesterEmail = requestorEmail;
    }

    public String getRequesterPhoneNumber(){
        return requesterPhoneNumber;
    }

    public void setRequesterPhoneNumber(String requesterPhoneNumber){
        this.requesterPhoneNumber=requesterPhoneNumber;
    }
    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getEnglishItemName(){
        return englishItemName;
    }

    public void setEnglishItemName(String englishItemName){
        this.englishItemName=englishItemName;
    }

    public String getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(String requestDate) {
        this.requestDate = requestDate;
    }

    public String getDateCompleted() {
        return dateCompleted;
    }

    public void setDateCompleted(String dateCompleted) {
        this.dateCompleted = dateCompleted;
    }
}
