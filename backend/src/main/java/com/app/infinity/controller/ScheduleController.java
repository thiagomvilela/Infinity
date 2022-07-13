package com.app.infinity.controller;

import com.app.infinity.dto.ScheduleDTO;
import com.app.infinity.service.impl.ScheduleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {

  @Autowired
  private ScheduleServiceImpl service;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<String> create(@Valid @RequestBody ScheduleDTO scheduleDTO){
    service.create(scheduleDTO);
    return ResponseEntity.ok("Created");
  }

}
