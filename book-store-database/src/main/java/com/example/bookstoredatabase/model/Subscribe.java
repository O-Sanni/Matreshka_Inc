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


    @Column(name = "age")
    private int age;

    public Subscribe() {
        super();
    }

    public Subscribe(String email, int age) {
        super();
        this.email = email;
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

    public void setAge(int age) {
        this.age = age;
    }
    public int getAge() {
        return age;
    }
}