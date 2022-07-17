CREATE VIEW Schedules_View AS SELECT u.name, s.schedule_date, s.service FROM tb_user as u INNER JOIN tb_schedule as s ON u.id = s.user_id;

INSERT INTO tb_user(name, email, password) VALUES ('Abigail', 'aby@gmail.com', 'aby123');
INSERT INTO tb_user(name, email, password) VALUES ('Arthur', 'arthur@gmail.com', '123');
INSERT INTO tb_user(name, email, password) VALUES ('Nathanael', 'nate@gmail.com', 'nate123');

INSERT INTO tb_schedule(user_id, curr_date, schedule_date, service) VALUES (1, '2022-05-22 19:22:25', '2022-06-23 14:00:00', 'Web Project with React and Next.js')
INSERT INTO tb_schedule(user_id, curr_date, schedule_date, service) VALUES (1, '2022-06-20 11:26:45', '2022-08-22 11:30:00', 'Mobile Project with React Native')
INSERT INTO tb_schedule(user_id, curr_date, schedule_date, service) VALUES (2, '2022-07-01 23:55:20', '2022-07-03 09:30:00', 'Backend Project with Spring Boot')
INSERT INTO tb_schedule(user_id, curr_date, schedule_date, service) VALUES (2, '2022-07-13 01:13:12', '2022-08-01 08:00:00', 'IoT Project')
