package com.RoomManagement.fullstackbackendroomManagement.model;


import jakarta.persistence.Id;
import jakarta.persistence.Entity;

@Entity
public class Customer_room {

    @Id
    private Integer CId;
    private Integer RId;

    private String Cname;
    private String roomType;
    private Integer days;

    public String getReq() {
        return req;
    }

    public void setReq(String req) {
        this.req = req;
    }

    private String req;

    public Integer getRId() {
        return RId;
    }

    public void setRId(Integer RId) {
        this.RId = RId;
    }



    public Integer getCId() {
        return CId;
    }

    public void setCId(Integer CId) {
        this.CId = CId;
    }

    public String getCname() {
        return Cname;
    }

    public void setCname(String cname) {
        Cname = cname;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public Integer getDays() {
        return days;
    }

    public void setDays(Integer days) {
        this.days = days;
    }


}
