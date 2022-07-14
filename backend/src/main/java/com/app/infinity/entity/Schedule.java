package com.app.infinity.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_schedule")
public class Schedule implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "user_id")
  private User user;

  @Column(nullable = false)
  final private LocalDateTime currDate = LocalDateTime.now();

  @Column(nullable = false, unique = true)
  private LocalDateTime scheduleDate;

  @Column(length = 150, nullable = false)
  private String service;

}
