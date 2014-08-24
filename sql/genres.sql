DROP TABLE genres;
CREATE TABLE genres(
  id INTEGER(2) NOT NULL PRIMARY KEY
  , genre VARCHAR(11)
);

LOAD DATA INFILE '/Users/nick/Documents/odw/genres.csv'
INTO TABLE genres
fields terminated by ','
lines terminated by '\r\n'
ignore 1 lines
(  id
, genre);
