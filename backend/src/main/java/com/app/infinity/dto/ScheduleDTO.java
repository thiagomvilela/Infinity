package com.app.infinity.dto;

import com.app.infinity.entity.Schedule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleDTO {

  private Long id;

  @NotNull(message = "The userId must not be null or empty")
  @Positive(message = "The userId must be positive")
  private Long userId;

  @NotNull(message = "The scheduleDate must not be null or empty")
  private LocalDateTime scheduleDate;

  @NotNull(message = "The service must not be null or empty")
  @Size(min = 2, max = 150, message = "The service must be between 2 and 150 characters")
  private String service;

  public ScheduleDTO(Schedule schedule){
    this.id = schedule.getId();
    this.scheduleDate = schedule.getScheduleDate();
    this.userId = schedule.getUser().getId();
    this.service = schedule.getService();
  }

}
