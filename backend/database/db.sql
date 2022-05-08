CREATE DATABASE n3lims

CREATE TABLE studies(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) UNIQUE NOT NULL,
  description VARCHAR(255)
  started TIMESTAMP WITH TIME ZONE NOT NULL,
  ended TIMESTAMP WITH TIME ZONE
);