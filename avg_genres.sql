
select count(r.rating), sum(r.rating), avg(r.rating) as ravg from ratings r
inner join genres_movies gm on gm.movies_id = r.movie_id
inner join genres g on g.id = gm.genres_id
inner join users u on u.id = r.id
where u.gender = 'M'
group by g.genre;
