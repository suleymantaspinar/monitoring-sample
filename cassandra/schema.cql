CREATE KEYSPACE IF NOT EXISTS random_sample WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

CREATE TABLE IF NOT EXISTS random_sample.logs (
method text,
time_spent int,
timestamp timestamp PRIMARY KEY
);
