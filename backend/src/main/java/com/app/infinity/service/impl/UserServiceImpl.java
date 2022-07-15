package com.app.infinity.service.impl;

import com.app.infinity.dto.ScheduleDTO;
import com.app.infinity.dto.UserDTO;
import com.app.infinity.entity.Schedule;
import com.app.infinity.entity.User;
import com.app.infinity.exception.AlreadyExistsException;
import com.app.infinity.exception.NotFoundException;
import com.app.infinity.repository.UserRepository;
import com.app.infinity.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements IUserService {

  @Autowired
  private UserRepository repository;

  @Override
  public UserDTO create(UserDTO userDTO) {
    try {
      User user = new User();
      user.setName(userDTO.getName());
      user.setEmail(userDTO.getEmail());
      user.setPassword(userDTO.getPassword());
      User result = repository.save(user);

      return new UserDTO(result);
    } catch (Exception err) {
      throw new AlreadyExistsException();
    }
  }

  @Override
  public UserDTO getById(Long id) {
    if(repository.findById(id).isEmpty()){
      throw new NotFoundException();
    }

    User result = repository.findById(id).get();
    return new UserDTO(result);
  }

  @Override
  public List<ScheduleDTO> getAllScheduleById(Long id) {
    if(repository.findById(id).isEmpty()){
      throw new NotFoundException();
    }

    User user = repository.findById(id).get();
    List<Schedule> result = user.getSchedule();
    List<ScheduleDTO> toReturn = new ArrayList<>();

    result.forEach(mySchedule -> {
      toReturn.add(new ScheduleDTO(mySchedule));
    });

    return toReturn;
  }

  @Override
  public UserDTO getByEmailAndPassword(String email, String password) {
    if(Objects.equals(email, "empty") || Objects.equals(password, "empty")){
      throw new NotFoundException();
    }

    User result = repository.findByEmailAndPassword(email, password);

    if (result == null){
      throw new NotFoundException();
    }

    return new UserDTO(result);
  }
}
