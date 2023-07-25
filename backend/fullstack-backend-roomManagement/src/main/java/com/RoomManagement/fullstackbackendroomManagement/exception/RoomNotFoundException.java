package com.RoomManagement.fullstackbackendroomManagement.exception;

public class RoomNotFoundException extends RuntimeException{

    public RoomNotFoundException(int rid){
        super("could not found the room with this rid"+rid);
    }
}
