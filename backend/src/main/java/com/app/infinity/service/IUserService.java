package com.app.infinity.service;

import com.app.infinity.dto.ScheduleDTO;
import com.app.infinity.dto.UserDTO;

import java.util.List;

public interface IUserService {

  UserDTO create(UserDTO userDTO);

  UserDTO getById(Long id);

  List<ScheduleDTO> getAllScheduleById(Long id);

  UserDTO getByEmailAndPassword(String email, String password);

}