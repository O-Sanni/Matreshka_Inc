package com.example.bookstoredatabase.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "russian_gifts")

public class Gifts {

    @Id
    @GeneratedValue
    @Column(name = "gift_id")
    private long giftId;


    @Column(name = "gift_name")
    private String giftName;

    @Column(name = "gift_description", length = 1500)
    private String giftDescription;

    @Column(name = "gift_price")
    private double giftPrice;

    @Column(name = "gift_website")
    private String giftWebsite;

    @Column (name="gift_picture")
    private String giftPicture;

    public Gifts() {
        super();
    }

    public Gifts (String giftName, String giftDescription, double giftPrice, String giftWebsite, String giftPicture) {
        super();

        this.giftName = giftName;
        this.giftDescription = giftDescription;
        this.giftPrice = giftPrice;
        this.giftWebsite=giftWebsite;
        this.giftPicture=giftPicture;
    }

    public long getId() {
        return giftId;
    }

    public void setId(long gift_id) {
        this.giftId = gift_id;
    }

    public String getGiftName() {
        return giftName;
    }

    public void setGiftName(String giftName) {
        this.giftName = giftName;
    }

    public String getGiftDescription() {
        return giftDescription;
    }
    public void setGiftDescription(String giftDescription) {
        this.giftDescription = giftDescription;
    }

    public Double getGiftPrice() {
        return giftPrice;
    }

    public void setGiftPrice(Double giftPrice){
        this.giftPrice=giftPrice;
    }
    public String getGiftWebsite() {
        return giftWebsite;
    }

    public void setGiftWebsite(String giftWebsite){
        this.giftWebsite=giftWebsite;
    }
    public String getGiftPicture() {
        return giftPicture;
    }

    public void setGiftPicture(String giftPicture){
        this.giftPicture=giftPicture;
    }
}