------------
--Data Set--
------------
This data set consists of:
    * 100,000 ratings (1-5) from 943 users on 1682 movies.
    * Each user has rated at least 20 movies.
    * Simple demographic info for the users (age, gender, occupation, zip)
   
Ratings - User ID | Movie ID | rating

Users - Demographic information about the users; this is a tab separated list of:
              user id | age | gender | occupation | zip code

Movies - Information about the movies; this is a tab separated list of:
              Movie ID | movie title | release date | unknown | Action | Adventure | Animation |
              Children's | Comedy | Crime | Documentary | Drama | Fantasy |
              Film-Noir | Horror | Musical | Mystery | Romance | Sci-Fi |
              Thriller | War | Western |
        The last 19 fields are the genres, a 1 indicates the movie
        is of that genre, a 0 indicates it is not; movies can be in
        several genres at once.
   
Occupations - A list of the occupations.         

Genres - A list of the genres.

-----------------
---Assignments---
-----------------
For the following assignments, feel free to use any database that you comfortable with, but please use JQuery for the front end presentation.  You will have to be able to explain your design process and programming style to us. If possible, you can demo the system to us.  You can make modifications to the Data Set design above, but be prepared to explain your decisions.

Assignment 1
How would you store this data in a database to efficiently retrieve it? 
Draw up a schema and implement it into any relational database of your choice.  Load the data into the database and query from it.

Assignment 2
How would you provide reports to a user who wants this data summarized?
Generate the following reports for a user to see on the web:
- How many users rated each of the movies and what was the average rating?  Sort the movies by number of ratings.
- What were the average ratings for each genre by male reviewers? What about female reviewers?

Extra
Come up with a report of your own that shows something interesting or a new interpretation of this data set.
