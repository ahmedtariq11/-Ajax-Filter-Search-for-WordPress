$.ajax({
        url : ajax_url,
        data : data,
        success : function(response) {
            mafs.find("ul").empty();
            if(response) {
                for(var i = 0 ;  i < response.length ; i++) {
                     var html  = "<li id='movie-" + response[i].id + "'>";
                         html += "  <a href='" + response[i].permalink + "' title='" + response[i].title + "'>";
                         html += "      <img src='" + response[i].poster + "' alt='" + response[i].title + "' />";
                         html += "      <div class='movie-info'>";
                         html += "          <h4>" + response[i].title + "</h4>";
                         html += "          <p>Year: " + response[i].year + "</p>";
                         html += "          <p>Rating: " + response[i].rating + "</p>";
                         html += "          <p>Language: " + response[i].language + "</p>";
                         html += "          <p>Director: " + response[i].director + "</p>";
                         html += "          <p>Genre: " + response[i].genre + "</p>";
                         html += "      </div>";
                         html += "  </a>";
                         html += "</li>";
                     mafs.find("ul").append(html);
                }
            } else {
                var html  = "<li class='no-result'>No matching movies found. Try a different filter or search keyword</li>";
                mafs.find("ul").append(html);
            }
        } 
    });
if(mafsForm.find("#search").val().length !== 0) {
    var search = mafsForm.find("#search").val();
}
if(mafsForm.find("#year").val().length !== 0) {
    var year = mafsForm.find("#year").val();
}
if(mafsForm.find("#rating").val().length !== 0) {
    var rating = mafsForm.find("#rating").val();
}
if(mafsForm.find("#language").val().length !== 0) {
    var language = mafsForm.find("#language").val();
}
if(mafsForm.find("#genre").val().length !== 0) {
    var genre = mafsForm.find("#genre").val();
}
 
var data = {
    action : "my_ajax_filter_search",
    search : search,
    year : year,
    rating : rating,
    language : language,
    genre : genre
}
