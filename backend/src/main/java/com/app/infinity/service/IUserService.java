package com.app.infinity.service;

import com.app.infinity.dto.UserDTO;

public interface IUserService {

  UserDTO create(UserDTO userDTO);

  UserDTO getById(Long id);

  UserDTO getByEmailAndPassword(String email, String password);

}