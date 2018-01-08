$("#button").on("click", function () {
    var animal = $(this).attr("data-animal");
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    animal + "&api_key=9Yg1G0Q2WcHlIz7JXSNh1kUJ3bvl9jDR&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .done(function(response) {
        console.log(queryURL);
        console.log(response);
    })
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            var animalDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating" + rating);
            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#animals").append(animalDiv);
        }
    }
});