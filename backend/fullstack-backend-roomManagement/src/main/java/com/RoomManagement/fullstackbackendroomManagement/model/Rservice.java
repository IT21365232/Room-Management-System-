package com.RoomManagement.fullstackbackendroomManagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Rservice {

    @Id
    private Integer SId;
    private String Sname;
    private String Email;
    private String Splace;

    public Integer getSId() {
        return SId;
    }

    public void setSId(Integer SId) {
        this.SId = SId;
    }

    public String getSname() {
        return Sname;
    }

    public void setSname(String sname) {
        Sname = sname;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getSplace() {
        return Splace;
    }

    public void setSplace(String splace) {
        Splace = splace;
    }
}
