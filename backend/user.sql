CREATE USER javinha WITH PASSWORD 'spring';

GRANT SELECT, INSERT, UPDATE ON tb_user, tb_schedule TO javinha;