package com.RoomManagement.fullstackbackendroomManagement.controller;

import com.RoomManagement.fullstackbackendroomManagement.exception.RoomNotFoundException;
import com.RoomManagement.fullstackbackendroomManagement.model.Room;
import com.RoomManagement.fullstackbackendroomManagement.model.Rservice;
import com.RoomManagement.fullstackbackendroomManagement.repository.RoomRepository;
import com.RoomManagement.fullstackbackendroomManagement.repository.RserviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class RserviceController {

    @Autowired
    private RserviceRepository rserviceRepository;

    @PostMapping("/rservice")
    Rservice newRservice(@RequestBody Rservice newRservice){
        return rserviceRepository.save(newRservice);
    }

    @GetMapping("/rservices")
    List<Rservice> getAllRservices(){

        return rserviceRepository.findAll();
    }
    @GetMapping("/rservice/{sid}")
    Rservice getRserviceById(@PathVariable int sid){
        return rserviceRepository.findById(sid)
                .orElseThrow(()->new RoomNotFoundException(sid));
    }

    @PutMapping("/rservice/{sid}")
    Rservice updateRservice(@RequestBody Rservice newRservice,@PathVariable int sid){
        return rserviceRepository.findById(sid)
                .map(rservice -> {

                    rservice.setSname(newRservice.getSname());
                    rservice.setEmail(newRservice.getEmail());
                    rservice.setSplace(newRservice.getSplace());

                    return rserviceRepository.save(rservice);
                }).orElseThrow(()-> new RoomNotFoundException(sid));
    }
    @DeleteMapping("/rservice/{sid}")
    String deleteRservice(@PathVariable int sid){
        if(!rserviceRepository.existsById(sid)){
            throw new RoomNotFoundException(sid);
        }
        rserviceRepository.deleteById(sid);
        return "Room with id "+sid+" has been deleted";
    }



}
