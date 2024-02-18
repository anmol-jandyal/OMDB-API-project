Welcome to our GitHub repository! Here, we've documented the process of integrating the OMDB API into our project to seamlessly fetch movie-related data. Our repository serves as a comprehensive guide for developers looking to implement OMDB API functionality into their own applications.


STEPS TO INTEGRATE OMDB API TO FETCH MOVIE DATA-

1. Register yourself on the OMDB site  http://surl.li/qqcrd to get a API key to use that in your peoject.


2. We can use the API key along with options.
3. We can use IMDB ID or Title of the movie to        fetch the data.

  
----------------------------------------------
Using id-
http://www.omdbapi.com/?apikey=[yourAPI]&I=[IMDB ID]

Using title-
http://www.omdbapi.com/?apikey=[yourkey]&t=[title of movie]


eg: "http://www.omdbapi.com/?apikey=[yourkey]&t=bahubali"



Once you receive API key understand how to use the options, let see the code snippet for fetching the data.

     API_URL="http://www.omdbapi.com/?apikey=[yourkey]&t="
     
     default async function fetchData(movieTitle) {
      	try {
	           	const resp = await fetch(apiURL + movieTitle);

	          	const data = await resp.json();

		          return data;
	          } catch (error) {
	            	console.log("error triggered: " + error);
	            }
         }
   What I have did here in this code snippet, this above function takes the movie title and returns a promise wrapping the data related to movie.
   Use that data based upon your requirements.


   THIS PROJECT NOT ONLY USES THIS API BUT ALSO USES LOCAL STORAGE TO STORE THE DATA RELATED TO FAVORITE MOVIES.

   Check out the webpage : https://anmol-jandyal.github.io/OMDB-API-project/
  
 
