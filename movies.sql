DROP TABLE movies;
CREATE TABLE movies(
  id INTEGER(4) NOT NULL PRIMARY KEY
, Movie_Title VARCHAR(100)
, release_date DATE
, unknown INT(1)
, Action INT(1)
, Adventure INT(1)
, Animation INT(1)
, Childrens INT(1)
, Comedy INT(1)
, Crime INT(1)
, Documentary INT(1)
, Drama INT(1)
, Fantasy INT(1)
, FilmNoir INT(1)
, Horror INT(1)
, Musical INT(1)
, Mystery INT(1)
, Romance INT(1)
, SciFi INT(1)
, Thriller INT(1)
, War INT(1)
, Western INT(1)
);

LOAD DATA INFILE '/Users/nick/Documents/odw/movies.csv'
INTO TABLE movies
fields terminated by ','
ENCLOSED BY '"'
lines terminated by '\r\n'
ignore 1 lines
(  id
, Movie_Title
, @release_date
, unknown
, Action
, Adventure
, Animation
, Childrens
, Comedy
, Crime
, Documentary
, Drama
, Fantasy
, FilmNoir
, Horror
, Musical
, Mystery
, Romance
, SciFi
, Thriller
, War
, Western)
SET release_date = STR_TO_DATE(@release_date, '%d-%b-%Y');

