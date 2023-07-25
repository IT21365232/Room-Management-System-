package com.RoomManagement.fullstackbackendroomManagement.controller;

import com.RoomManagement.fullstackbackendroomManagement.exception.RoomNotFoundException;
import com.RoomManagement.fullstackbackendroomManagement.model.User;
import com.RoomManagement.fullstackbackendroomManagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }
    @GetMapping("/user/{rid}")
    User getUserById(@PathVariable int rid){
        return userRepository.findById(rid)
                .orElseThrow(()->new RoomNotFoundException(rid));
    }

    @PutMapping("/user/{rid}")
    User updateUser(@RequestBody User newUser,@PathVariable int rid){
        return userRepository.findById(rid)
                .map(user -> {

                    user.setAC(newUser.getAC());
                    user.setStatus(newUser.getStatus());
                    user.setBedType(newUser.getBedType());
                    user.setCheckStatus(newUser.getCheckStatus());
                    user.setFacilities(newUser.getFacilities());
                    user.setLocation(newUser.getLocation());
                    user.setRoomType(newUser.getRoomType());
                    return userRepository.save(user);
                }).orElseThrow(()-> new RoomNotFoundException(rid));
    }
    @DeleteMapping("/user/{rid}")
    String deleteUser(@PathVariable int rid){
        if(!userRepository.existsById(rid)){
            throw new RoomNotFoundException(rid);
        }
        userRepository.deleteById(rid);
        return "Room with id "+rid+" has been deleted";
    }

}
