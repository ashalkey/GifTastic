var searchTerm = {q: 'knockout punch'};

console.log($.param(searchTerm));
var queryURL = 
"https://api.giphy.com/v1/gifs/search?q=" + $.param(searchTerm) + "&api_key=M1lXXefs46PgircNYcyBiwrJLlM3O6Vw";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
 
var myGif = $('<img>').attr('src', response.data[0].images.original.url);
$('#gif-buttons').append(myGif);
});
