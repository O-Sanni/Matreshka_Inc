package com.example.bookstoredatabase.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "russian_books")

public class Books {

    @Id
    @GeneratedValue
    @Column(name = "book_id")
    private long bookId;

    @Column(name = "book_name")
    private String bookName;

    @Column(name = "book_english_name")
    private String bookEnglishName;

    @Column(name = "book_author")
    private String bookAuthor;

    @Column(name = "book_description",length = 1500)
    private String bookDescription;

    @Column(name = "book_category")
    private String bookCategory;

    @Column(name = "book_price")
    private double bookPrice;

    @Column(name = "book_website")
    private String bookWebsite;

    @Column (name="book_picture")
    private String bookPicture;

    public Books() {
        super();
    }

    public Books (String bookName,String bookEnglishName, String bookAuthor, String bookDescription,String bookCategory, double bookPrice, String bookWebsite, String bookPicture) {
        super();

        this.bookName = bookName;
        this.bookEnglishName=bookEnglishName;
        this.bookAuthor=bookAuthor;
        this.bookDescription = bookDescription;
        this.bookCategory = bookCategory;
        this.bookPrice = bookPrice;
        this.bookWebsite=bookWebsite;
        this.bookPicture=bookPicture;
    }

    public long getId() {
        return bookId;
    }

    public void setId(long bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }
    public String getBookEnglishName(){
        return bookEnglishName;
    }
    public void setBookEnglishName(String bookEnglishName){
        this.bookEnglishName=bookEnglishName;
    }
    public String getBookAuthor() {
        return bookAuthor;
    }

    public void setBookAuthor(String bookAuthor) {
        this.bookAuthor = bookAuthor;
    }
    public String getBookDescription() {
        return bookDescription;
    }
    public void setBookDescription(String bookDescription) {
        this.bookDescription = bookDescription;
    }

    public String getBookCategory() {
        return bookCategory;
    }

    public void setBookCategory(String bookCategory){
        this.bookCategory=bookCategory;
    }
    public Double getBookPrice() {
        return bookPrice;
    }

    public void setBookPrice(Double bookPrice){
        this.bookPrice=bookPrice;
    }
    public String getBookWebsite() {
        return bookWebsite;
    }

    public void setBookWebsite(String bookWebsite){
        this.bookWebsite=bookWebsite;
    }
    public String getBookPicture() {
        return bookPicture;
    }

    public void setBookPicture(String bookPicture){
        this.bookPicture=bookPicture;
    }
}
