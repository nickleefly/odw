DROP TABLE ratings;
CREATE TABLE ratings(
  id INTEGER(4) NOT NULL
, Movie_ID INTEGER(4) NOT NULL
, Rating INTEGER(1)
, PRIMARY KEY(id, Movie_ID)
);

LOAD DATA INFILE '/Users/nick/Documents/odw/ratings.csv'
INTO TABLE ratings
fields terminated by ','
lines terminated by '\r\n'
ignore 1 lines
(  id
, Movie_ID
, Rating);
