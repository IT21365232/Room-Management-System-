package com.RoomManagement.fullstackbackendroomManagement.controller;

import com.RoomManagement.fullstackbackendroomManagement.exception.RoomNotFoundException;
import com.RoomManagement.fullstackbackendroomManagement.model.Room;
import com.RoomManagement.fullstackbackendroomManagement.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;

    @PostMapping("/room")
    Room newRoom(@RequestBody Room newRoom){
        return roomRepository.save(newRoom);
    }

    @GetMapping("/rooms")
    List<Room> getAllRooms(){

        return roomRepository.findAll();
    }
    @GetMapping("/room/{rid}")
    Room getRoomById(@PathVariable int rid){
        return roomRepository.findById(rid)
                .orElseThrow(()->new RoomNotFoundException(rid));
    }

    @PutMapping("/room/{rid}")
    Room updateRoom(@RequestBody Room newRoom,@PathVariable int rid){
        return roomRepository.findById(rid)
                .map(room -> {

                    room.setAC(newRoom.getAC());
                    room.setStatus(newRoom.getStatus());
                    room.setBedType(newRoom.getBedType());
                    room.setCheckStatus(newRoom.getCheckStatus());
                    room.setFacilities(newRoom.getFacilities());
                    room.setLocation(newRoom.getLocation());
                    room.setRoomType(newRoom.getRoomType());
                    room.setServiceType(newRoom.getServiceType());
                    return roomRepository.save(room);
                }).orElseThrow(()-> new RoomNotFoundException(rid));
    }
    @DeleteMapping("/room/{rid}")
    String deleteRoom(@PathVariable int rid){
        if(!roomRepository.existsById(rid)){
            throw new RoomNotFoundException(rid);
        }
        roomRepository.deleteById(rid);
        return "Room with id "+rid+" has been deleted";
    }

    

}
