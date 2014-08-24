DROP TABLE occupations;
CREATE TABLE occupations(
  id INTEGER(2) NOT NULL PRIMARY KEY
, occupation VARCHAR(13)
);

LOAD DATA INFILE '/Users/nick/Documents/odw/occupations.csv'
INTO TABLE occupations
fields terminated by ','
lines terminated by '\r\n'
ignore 1 lines
(  id
, occupation);
