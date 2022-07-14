package com.app.infinity.controller;

import com.app.infinity.dto.ScheduleDTO;
import com.app.infinity.exception.AlreadyExistsException;
import com.app.infinity.exception.DateBeforeTheCurrentException;
import com.app.infinity.exception.NotFoundException;
import com.app.infinity.service.impl.ScheduleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
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

  @GetMapping
  public List<ScheduleDTO> getAll(){
    return service.getAll();
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String, String> handleValidationException(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();

    ex.getBindingResult().getAllErrors().forEach((err) -> {
      String fieldName = ((FieldError) err).getField();
      String errorMessage = err.getDefaultMessage();

      errors.put(fieldName, errorMessage);
    });

    return errors;
  }

  @ResponseStatus(HttpStatus.NOT_FOUND)
  @ExceptionHandler(NotFoundException.class)
  public Map<String, String> handleNotFoundException() {
    Map<String, String> error = new HashMap<>();

    error.put("UserId", "Not found");

    return error;
  }

  @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
  @ExceptionHandler(AlreadyExistsException.class)
  public Map<String, String> handleAlreadyExistsException() {
    Map<String, String> error = new HashMap<>();

    error.put("ScheduleDate", "Already exists");

    return error;
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(DateBeforeTheCurrentException.class)
  public Map<String, String> handleDateBeforeTheCurrentException() {
    Map<String, String> error = new HashMap<>();

    error.put("ScheduleDate", "Is in the past");

    return error;
  }

}
