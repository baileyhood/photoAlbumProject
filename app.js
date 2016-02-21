$(document).ready(function() {


//Adding Photos to Homepage
var albumCoverPhotos = function (albumPhotoData) {
  var albumCoverArr = "";
  albums.forEach (function (el){
  albumCoverArr += "<li>";
  albumCoverArr +=  "<div class='album-image-container'id='" + el.albumRel + "'>"+"<img class= 'albumPhoto' src='" + el.albumCover + "' alt=''/>" + "</div>";
  albumCoverArr += "<h3>";
  albumCoverArr += el.albumTitle;
  albumCoverArr += "</h3>";
  albumCoverArr += "</li>";
});
  $('.home-wrapper').children('ul').append(albumCoverArr);
};

albumCoverPhotos(albums);

// //Clicking Photos
// var selectingPhotos = "";
// $('.home-wrapper').find('li').on('click', function (event) {
//     event.preventDefault();
//     $(selectingPhotos).addClass ('inactive');
//     $(selectingPhotos).removeClass ('inactive');
//   });
//     selectingPhotos = $(this).attr('id');
//     photoGalleryDisplay (selectingPhotos);
// });
//
// var pullAlbumPhotos = function (albumChoice) {
//     var photoList = albums.filter (function(el){
//       return el.albumRel === albumChoice;
//     });
//     return photoList[0].photos;
// };
//
// var photoGalleryDisplay = function (albumDisplay) {
//   chosenAlbum = "";
//   _.each(pullAlbumPhotos(albumDisplay), function (el){
//     chosenAlbum += "<li>";
//     chosenAlbum += "<div class='" + el.albumRel + "</div>";
//     chosenAlbum += "</li>";
//   });
//   $('.album-wrapper').append(chosenAlbum);
// };

var selectingPhotos = "";
$('.home-wrapper').children('ul').find('div').on('click', function (event) {
  $ ('.album-page').removeClass('inactive');
  $ ('.home-page').addClass('inactive');
  selectingPhotos = ($(this).attr('id'));
});

});//end of doc ready
