DROP TABLE genres_movies;
CREATE TABLE genres_movies(
  genres_id INTEGER(2) NOT NULL
  , movies_id INTEGER(4) NOT NULL
  , PRIMARY KEY(genres_id, movies_id)
);

select concat('insert into genres_movies select id, ', id, ' from movies m where m.', genre , ' = 1;') from genres;

insert into genres_movies select id, 1 from movies m where m.unknown = 1;
insert into genres_movies select id, 2 from movies m where m.Action = 1;
insert into genres_movies select id, 3 from movies m where m.Adventure = 1;
insert into genres_movies select id, 4 from movies m where m.Animation = 1;
insert into genres_movies select id, 5 from movies m where m.Childrens = 1;
insert into genres_movies select id, 6 from movies m where m.Comedy = 1;
insert into genres_movies select id, 7 from movies m where m.Crime = 1;
insert into genres_movies select id, 8 from movies m where m.Documentary = 1;
insert into genres_movies select id, 9 from movies m where m.Drama = 1;
insert into genres_movies select id, 10 from movies m where m.Fantasy = 1;
insert into genres_movies select id, 11 from movies m where m.FilmNoir = 1;
insert into genres_movies select id, 12 from movies m where m.Horror = 1;
insert into genres_movies select id, 13 from movies m where m.Musical = 1;
insert into genres_movies select id, 14 from movies m where m.Mystery = 1;
insert into genres_movies select id, 15 from movies m where m.Romance = 1;
insert into genres_movies select id, 16 from movies m where m.SciFi = 1;
insert into genres_movies select id, 17 from movies m where m.Thriller = 1;
insert into genres_movies select id, 18 from movies m where m.War = 1;
insert into genres_movies select id, 19 from movies m where m.Western = 1;
