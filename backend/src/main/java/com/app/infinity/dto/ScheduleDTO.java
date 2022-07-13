package com.app.infinity.dto;

import com.app.infinity.entity.Schedule;
import com.app.infinity.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleDTO {

  @NotNull(message = "The id must not be null or empty")
  private Long id;

  @NotNull(message = "The user_id must not be null or empty")
  private User user;

  @NotNull(message = "The schedule_date must not be null or empty")
  private LocalDateTime scheduleDate;

  @NotNull(message = "The service must not be null or empty")
  @Size(min = 2, max = 150, message = "The service must be between 2 and 150 characters")
  private String service;

  public ScheduleDTO(Schedule schedule){
    this.id = schedule.getId();
    this.scheduleDate = schedule.getScheduleDate();
    this.user = schedule.getUser();
    this.service = schedule.getService();
  }

}
