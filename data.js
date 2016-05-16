$(document).ready(function (){
  var whatFilm;
  $(".swayzeMe").on("click", function(){
    whatFilm = $('#1').val().toLowerCase();
    // console.log(whatFilm);
    getData();

  });
  function getData (){
    $.get("https://api.themoviedb.org/3/discover/movie?with_cast=723&api_key=426006a23834affecd834cfdf4937e2c").done(function(data) {
      compareMovie(data,whatFilm);
    });
  }
  function compareMovie (data,whatFilm){
    console.log(whatFilm);
    var results=data.results;
    var title;
    for(i=0; i < results.length; i++){
      title=results[i].title.toLowerCase();
      // console.log(whatFilm,title);
      if(whatFilm===title){
        console.log("Elana is great");
      }else {
        console.log("Not a SwayzeDay");
      }
      // console.log(results[i].title);

    }
    // console.log(results);
  }
});


// });
