$(document).ready(function() {
    var animalGif= ["Tiger", "Dog", "Bear", "Lion", "Puma", "Alligator", "Cheetah", 
    "Leopard", "Snake", "Jaguar"]; 
    var apiKey = "9Yg1G0Q2WcHlIz7JXSNh1kUJ3bvl9jDR"
})

$("button").on("click", function() {
    var animal = $(this).attr("data-animal");
    var apiKey = "9Yg1G0Q2WcHlIz7JXSNh1kUJ3bvl9jDR"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    animal + apiKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .done(function(response) {
        console.log(queryURL);
        console.log(response);
        //var results = response.data;
    //for (var i = 0; i < results.length; i++) {
      //  if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        //    var animalDiv = $("<div>");
          //  var rating = results[i].rating;
            //var p = $("<p>").text("Rating" + rating);
           // var animalImage = $("<img>");
           // animalImage.attr("src", results[i].object.data.url);
           // animalDiv.append(p);
           // animalDiv.append(animalImage);
           // $("#animals").append(animalDiv);
       // }
   // }
    })

    
});