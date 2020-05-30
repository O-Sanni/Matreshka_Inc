package com.example.bookstoredatabase.model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Subscribe")
public class Subscribe {
    @Id
    @GeneratedValue
    @Column(name = "subscription_id")
    private long subscriptionId;


    @Column(name = "email")
    private String email;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "age")
    private int age;

    public Subscribe() {
        super();
    }

    public Subscribe(String email,String fullName, int age) {
        super();
        this.email = email;
        this.fullName = fullName;
        this.age = age;
    }

    public long getId() {
        return subscriptionId;
    }

    public void setId(long subscriptionId) {
        this.subscriptionId = subscriptionId;
    }


    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setAge(int age) {
        this.age = age;
    }
    public int getAge() {
        return age;
    }
}