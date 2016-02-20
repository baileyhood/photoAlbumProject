// $(document).ready(function() {
//   $('.album-image').attr("src",albums[1].albumCover);
// });




var albumCoverPhotos = function (albumPhotoData) {
  var albumCoverArr = "";
  albums.forEach (function (el){
  albumCoverArr += "<li>";
  albumCoverArr +=  "<div class='album-image-container'>"+"<img class= 'events-profilePic' src='" + el.albumCover + "' alt=''/>" + "</div>";
  albumCoverArr += "<h3>";
  albumCoverArr += el.albumTitle;
  albumCoverArr += "</h3>";
  albumCoverArr += "</li>";


});
  $('.home-wrapper').children('ul').append(albumCoverArr);
};

albumCoverPhotos(albums);
//
// $('.album-image-container').each(function() {
//   $(this).css("background-color","red");
// });
