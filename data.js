$(document).ready(function (){
  var whatFilm;
  var p1;
  var p2;
  var p3;
  $(".swayzeMe").on("click", function(){
    whatFilm = $('#1').val().toLowerCase();
    // console.log(whatFilm);
    getData();

  });
  function getData (){
     p1=$.get("https://api.themoviedb.org/3/discover/movie?with_cast=723&api_key=426006a23834affecd834cfdf4937e2c")
    //  .done(function(data) {

    // });
     p2=$.get("https://api.themoviedb.org/3/discover/movie?with_cast=723&page=2&api_key=426006a23834affecd834cfdf4937e2c")
    //  .done(function(data) {

    //  });

     p3=$.get("https://api.themoviedb.org/3/discover/movie?with_cast=723&page=3&api_key=426006a23834affecd834cfdf4937e2c")
    // //  .done(function(data) {
    // console.log(compareMovie(data,whatFilm));
    // // });
    Promise.all([p1, p2, p3]).then(function(data) {
    // console.log(data); // [3, 1337, "foo"]
    console.log(data);
    });


  function compareMovie (data,whatFilm){
    // console.log(whatFilm);
    var results=data.results;
    var title;
    for(i=0; i < results.length; i++){
      title=results[i].title.toLowerCase();
      // console.log(whatFilm,title);
      if(whatFilm===title){
        return "SwayzeDay"




      } else {
        return "Not a SwayzeDay";
      }
      console.log(compareMovie());
    }
  }
}
})
