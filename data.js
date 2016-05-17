$(document).ready(function (){

  $(".swayzeMe").on("click", function(){
    var inputMovie = $('#1').val().toLowerCase();
    // console.log(inputMovie);
    getData().then(function(movieResults){
      compareMovie(movieResults,inputMovie);

    });

  });
  function getData (){
       var p1 = $.get("https://api.themoviedb.org/3/discover/movie?with_cast=723&api_key=426006a23834affecd834cfdf4937e2c")
    //  .done(function(data) {

    // });
     var p2 = $.get("https://api.themoviedb.org/3/discover/movie?with_cast=723&page=2&api_key=426006a23834affecd834cfdf4937e2c")
    //  .done(function(data) {

    //  });

     var p3 = $.get("https://api.themoviedb.org/3/discover/movie?with_cast=723&page=3&api_key=426006a23834affecd834cfdf4937e2c")
    // //  .done(function(data) {
    // console.log(compareMovie(data,whatFilm));
    // // });
      return Promise.all([p1, p2, p3]);

  }

  function compareMovie (movieResults,inputMovie){
    var SwayzeDay=false;
    // var SwayzeDay=(title===inputMovie);
    for(i=0; i<movieResults.length; i++){
      // console.log(data[i].results);
      for (var j = 0; j < movieResults[i].results.length; j++) {
        // console.log(data[i].results[j]);
        var title=movieResults[i].results[j].title.toLowerCase();
        // console.log(data[i].results[j].title);
        if(title===inputMovie){
          SwayzeDay=true;
        }
      }
    }
    $('.ahpend').empty()
  if(SwayzeDay===false){

    $('.ahpend').append("Not A SwayzeDay!")
  } else {
    

    $('.ahpend').append("SwayzeDay")
  }
}
    // console.log(whatFilm);
    // results=dataresults;
    // var title;
    // for(i=0; i < results.length; i++){
    //   title=results[i].title.toLowerCase();
    //   // console.log(whatFilm,title);
    //   console.log(whatFilm);
    //     if(whatFilm===title){
    //       console.log("SwayzeDay");
    //     //.append()
    //     } else {
    //     console.log("Not a SwayzeDay");
    //     //.append()
    //   }
    // }
    // console.log(whatFilm,data);


});
