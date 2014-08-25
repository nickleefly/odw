# ODW

---
for convenient I exported the database into sql/odw.sql
---

## create odw database

`create database odw;`

## save excel into csv files, load into database

* load genres table

```
DROP TABLE genres;
CREATE TABLE genres(
  id INTEGER(2) NOT NULL PRIMARY KEY
  , genre VARCHAR(11)
);
LOAD DATA INFILE '/path-to/genres.csv'
INTO TABLE genres
fields terminated by ','
lines terminated by '\r\n'
ignore 1 lines
(  id
, genre);
```

 * load movies table

 ```
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
LOAD DATA INFILE '/path-to/movies.csv'
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
```

 * load occupations table

 ```
 DROP TABLE occupations;
CREATE TABLE occupations(
  id INTEGER(2) NOT NULL PRIMARY KEY
, occupation VARCHAR(13)
);
LOAD DATA INFILE '/path-to/occupations.csv'
INTO TABLE occupations
fields terminated by ','
lines terminated by '\r\n'
ignore 1 lines
(  id
, occupation);
```

* load ratings table

```
DROP TABLE ratings;
CREATE TABLE ratings(
  id INTEGER(4) NOT NULL
, Movie_ID INTEGER(4) NOT NULL
, Rating INTEGER(1)
, PRIMARY KEY(id, Movie_ID)
);
LOAD DATA INFILE '/path-to/ratings.csv'
INTO TABLE ratings
fields terminated by ','
lines terminated by '\r\n'
ignore 1 lines
(  id
, Movie_ID
, Rating);
```

* load users table

```
DROP TABLE users;
CREATE TABLE users(
  id INTEGER(8) NOT NULL PRIMARY KEY
, age INTEGER(3)
, gender VARCHAR(1)
, occupation VARCHAR(13)
, postalCode VARCHAR(5)
);
LOAD DATA INFILE '/path-to/users.csv'
INTO TABLE users
fields terminated by ','
lines terminated by '\r\n'
ignore 1 lines
(  id
, age
, gender
, occupation
, postalcode);

```

* create genres and movies many to many table - genres_movies

> detail is in `sql/genres_movies.sql`


```
DROP TABLE genres_movies;
CREATE TABLE genres_movies(
  genres_id INTEGER(2) NOT NULL
  , movies_id INTEGER(4) NOT NULL
  , PRIMARY KEY(genres_id, movies_id)
);
```
> insert data into genres_movies table
> use following script to generate insert script for genres_movies table
> `select concat('insert into genres_movies select id, ', id, ' from movies m where m.', genre , ' = 1;') from genres;`

## run `npm install` in project directory

## run `npm start`

* visit `http://localhost:3000` home page
* visit `http://localhost:3000/users` for user page
	* visit `http://localhost:3000/users/m` for male
	* visit `http://localhost:3000/users/f` for female
* visit `http://localhost:3000/graph` for a graph -- I am using sum rating in a zipcode for displaying

## run `npm test` to test when the application is running

