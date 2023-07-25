package com.RoomManagement.fullstackbackendroomManagement.controller;

import com.RoomManagement.fullstackbackendroomManagement.exception.RoomNotFoundException;
import com.RoomManagement.fullstackbackendroomManagement.model.Customer_room;
import com.RoomManagement.fullstackbackendroomManagement.repository.Customer_roomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class Customer_roomController {

    @Autowired
    private Customer_roomRepository customer_roomRepository;

    @PostMapping("/customer_room")
    Customer_room newCustomer_room(@RequestBody Customer_room newCustomer_room){
        return customer_roomRepository.save(newCustomer_room);
    }

    @GetMapping("/customer_rooms")
    List<Customer_room> getAllCustomer_rooms(){
        return customer_roomRepository.findAll();
    }
    @GetMapping("/customer_room/{cid}")
    Customer_room getCustomer_roomById(@PathVariable int cid){
        return customer_roomRepository.findById(cid)
                .orElseThrow(()->new RoomNotFoundException(cid));
    }

    @PutMapping("/customer_room/{cid}")
    Customer_room updateCustomer_room(@RequestBody Customer_room newCustomer_room,@PathVariable int cid){
        return customer_roomRepository.findById(cid)
                .map(customer_room -> {

                    customer_room.setCId(newCustomer_room.getCId());
                    customer_room.setRId(newCustomer_room.getRId());
                    customer_room.setCname(newCustomer_room.getCname());
                    customer_room.setRoomType(newCustomer_room.getRoomType());
                    customer_room.setReq(newCustomer_room.getReq());
                    newCustomer_room.setDays(newCustomer_room.getDays());

                    return customer_roomRepository.save(customer_room);
                }).orElseThrow(()-> new RoomNotFoundException(cid));
    }
    @DeleteMapping("/customer_room/{cid}")
    String deleteCustomer(@PathVariable int cid){
        if(!customer_roomRepository.existsById(cid)){
            throw new RoomNotFoundException(cid);
        }
        customer_roomRepository.deleteById(cid);
        return "Room with id "+cid+" has been deleted";
    }

}


