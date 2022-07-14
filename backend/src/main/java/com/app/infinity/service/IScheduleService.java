package com.app.infinity.service;

import com.app.infinity.dto.ScheduleDTO;

import java.util.ArrayList;
import java.util.List;

public interface IScheduleService {

  ScheduleDTO create (ScheduleDTO scheduleDTO);

  List<ScheduleDTO> getAll();

}
