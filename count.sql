select * from (select count(rating) as rcount, sum(rating) as rsum, avg(rating) as ravg, movie_id from ratings group by movie_id) as a order by rcount
