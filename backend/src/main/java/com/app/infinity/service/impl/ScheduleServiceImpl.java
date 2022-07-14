package com.app.infinity.service.impl;

import com.app.infinity.dto.ScheduleDTO;
import com.app.infinity.entity.Schedule;
import com.app.infinity.entity.User;
import com.app.infinity.repository.ScheduleRepository;
import com.app.infinity.repository.UserRepository;
import com.app.infinity.service.IScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScheduleServiceImpl implements IScheduleService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private ScheduleRepository scheduleRepository;

  @Override
  public ScheduleDTO create(ScheduleDTO scheduleDTO) {
    Schedule schedule = new Schedule();
    User user = userRepository.findById(scheduleDTO.getUserId()).get();

    schedule.setUser(user);
    // schedule.setScheduleDate(scheduleDTO.getScheduleDate());
    schedule.setService(scheduleDTO.getService());

    Schedule result = scheduleRepository.save(schedule);

    return new ScheduleDTO(result);
  }
}
