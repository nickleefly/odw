DROP TABLE users;
CREATE TABLE users(
  id INTEGER(8) NOT NULL PRIMARY KEY
, age INTEGER(3)
, gender VARCHAR(1)
, occupation VARCHAR(13)
, postalCode VARCHAR(5)
);

LOAD DATA INFILE '/Users/nick/Documents/odw/users.csv'
INTO TABLE users
fields terminated by ','
lines terminated by '\r\n'
ignore 1 lines
(  id
, age
, gender
, occupation
, postalcode);
