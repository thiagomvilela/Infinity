package com.app.infinity.service.impl;

import com.app.infinity.dto.ScheduleDTO;
import com.app.infinity.entity.Schedule;
import com.app.infinity.entity.User;
import com.app.infinity.exception.AlreadyExistsException;
import com.app.infinity.exception.DateBeforeTheCurrentException;
import com.app.infinity.exception.NotFoundException;
import com.app.infinity.repository.ScheduleRepository;
import com.app.infinity.repository.UserRepository;
import com.app.infinity.service.IScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ScheduleServiceImpl implements IScheduleService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private ScheduleRepository scheduleRepository;

  @Override
  public ScheduleDTO create(ScheduleDTO scheduleDTO) {
    Schedule schedule = new Schedule();

    try {
      User user = userRepository.findById(scheduleDTO.getUserId()).get();
      schedule.setUser(user);
    } catch (Exception err) {
      throw new NotFoundException();
    }

    if (scheduleDTO.getScheduleDate().compareTo(LocalDateTime.now()) < 0){
      throw new DateBeforeTheCurrentException();
    }

    try {
      schedule.setScheduleDate(scheduleDTO.getScheduleDate());
      schedule.setService(scheduleDTO.getService());

      Schedule result = scheduleRepository.save(schedule);

      return new ScheduleDTO(result);

    } catch (Exception err) {
      throw new AlreadyExistsException();
    }
  }

  @Override
  public List<ScheduleDTO> getAll() {
    List<Schedule> result = scheduleRepository.findAll();
    List<ScheduleDTO> toReturn = new ArrayList<>();

    result.forEach(mySchedule -> {
      toReturn.add(new ScheduleDTO(mySchedule));
    });

    return toReturn;
  }
}
