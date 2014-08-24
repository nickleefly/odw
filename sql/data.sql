

select m.id, m.release_date, m.movie_title, r.rating, g.genre, u.postalCode from movies m inner join genres_movies gm on gm.movies_id = m.id inner join genres g on gm.genres_id = g.id inner join ratings r on r.movie_id = m.id inner join users u on u.id = r.id limit 10;

select sum(r.Rating) as ratings_sum, u.postalCode as postalCode from ratings r inner join users u on u.id = r.id where u.postalCode REGEXP '^-?[0-9]+$' and u.postalCode > 0 group by u.postalCode;