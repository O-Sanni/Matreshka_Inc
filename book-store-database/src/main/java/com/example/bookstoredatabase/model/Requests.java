package com.example.bookstoredatabase.model;

import javax.persistence.*;
import java.sql.Date;

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

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "english_item_name")
    private String englishItemName;

    @Column(name = "item_description")
    private String itemDescription;

    @Column(name = "request_date")
    private Date requestDate;

    @Column(name = "date_completed")
    private Date dateCompleted;

    public Requests() {
        super();
    }

    public Requests(String requesterName, String requesterEmail, String itemName, String englishItemName, String itemDescription,Date requestDate, Date dateCompleted) {
        super();

        this.requesterName = requesterName;
        this.requesterEmail = requesterEmail;
        this.itemName = itemName;
        this.englishItemName=englishItemName;
        this.itemDescription = itemDescription;
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

    public void setRequesterName(String requesterNameName) {
        this.requesterName = requesterName;
    }

    public String getRequesterEmail() {
        return requesterEmail;
    }

    public void setRequesterEmail(String requestorEmail) {
        this.requesterEmail = requestorEmail;
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

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }
    public Date getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(Date requestDate) {
        this.requestDate = requestDate;
    }

    public Date getDateCompleted() {
        return dateCompleted;
    }

    public void setDateCompleted(Date dateCompleted) {
        this.dateCompleted = dateCompleted;
    }
}
