package com.app.infinity.controller;

import com.app.infinity.dto.ScheduleDTO;
import com.app.infinity.exception.NotFoundException;
import com.app.infinity.service.impl.ScheduleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

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

  @ResponseStatus(HttpStatus.NOT_FOUND)
  @ExceptionHandler(NotFoundException.class)
  public Map<String, String> handleNotFoundException() {
    Map<String, String> error = new HashMap<>();

    error.put("Schedule", "Not found");

    return error;
  }

}
