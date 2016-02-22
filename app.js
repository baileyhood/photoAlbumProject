$(document).ready(function() {


//ADDING PHOTOS TO HOMEPAGE

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

//SELECTING PHOTOS ON HOMEPAGE

var selectedPhotoAlbums = "";
$('.home-wrapper').children('ul').find('div').on('click', function (event) {
  event.preventDefault();
  $ ('.album-page').removeClass('inactive');
  $ ('.home-page').addClass('inactive');
  selectedPhotoAlbums = ($(this).attr('id'));
  showPhotoAlbums(selectedPhotoAlbums);
});

//Pulls Album Photos // using filter to create an array of images that have albumRel
//matching the ID# (i.e. selectedPhotoAlbums)

var grabPhotos = function (album_choice) {
  var emptyArr = albums.filter (function (item) {
    return item.albumRel === album_choice;
  });
  return emptyArr[0].photos;
};

//Displays Album Photos

  var showPhotoAlbums = function(albumPagePhotos) {
  var displayPhotosArr = "";
  _.each(grabPhotos(selectedPhotoAlbums), function (el) {
    displayPhotosArr += "<li class = 'photo-list'>";
    displayPhotosArr += "<div class = 'album-image-picture-container'>";
    displayPhotosArr += "<div class = '" + el.photoRel + "'  </div>";
    displayPhotosArr += "<img class= 'albumPhoto' src='" + el.photoFull + "' alt=''/>";
    displayPhotosArr += "<h4>" + el.photoName + "</h4>";
    displayPhotosArr += "</div";
    displayPhotosArr += "</li>";
  });
  $('.album-wrapper').children('ul').append(displayPhotosArr);
};

//NAVIGATION LINKS ON PHOTO ALBUMS' PAGES

//1. Add Links to NAVIGATION

var navigationLinks = function (albumTitleData) {
  var albumTitleArr = "";
  albums.forEach (function(el){
    albumTitleArr += "<li id = '" + el.albumRel + "'>";
    albumTitleArr += "<div class = 'navigation-link-container' id ='" + el.albumRel + "'>";
    albumTitleArr += "<h4>";
    albumTitleArr += el.albumTitle;
    albumTitleArr += "<h4>";
    albumTitleArr += "</div>";
    albumTitleArr += "</li>";
  });
  $ ('.navigation').append(albumTitleArr);
};
navigationLinks(albums);

//2. Displays New Album that is chosen

selectedPhotoAlbums = "";
$('.navigation').children('li').on('click', function (event) {
  console.log ("Navigation is being clicked");
  event.preventDefault();
  selectedPhotoAlbums = ($(this).attr('id'));
  $('.album-wrapper').not(this).find('li').hide();
  showPhotoAlbums(selectedPhotoAlbums);
});

//BACK HOME BUTTON
$('.back-home-button').on('click','p',function (event){
console.log ("Back Home Button has been clicked");
event.preventDefault();
$ ('.home-page').removeClass('inactive');
$ ('.album-page').addClass('inactive');

});

//LIGHTBOX
//1. Toggle to Lightbox Section

$('.album-wrapper').on("click", "img", function (event) {
event.preventDefault();
console.log("Photo click is working!");
$ ('.lightbox-page').removeClass('inactive');
$ ('.album-page').addClass('inactive');
var selectedPhotos = $(this).attr('src');
console.log("hello",selectedPhotos);
setPhotoFull(selectedPhotos);
});
//2.
var setPhotoFull = function (photofullget) {
  console.log ("this is photofullget",photofullget);
  var photoFull = "";
    photoFull += "<div class ='lightbox-image-container'>";
    photoFull += "<img class= 'lightboxPhoto' src='" + photofullget + "'alt=''/>";
    photoFull += "</div>";
    console.log(photoFull);
    $('.lightbox-page').append(photoFull);
};


//BACK TO ALBUM
$(".back-to-album-button").on("click", function(el) {
  el.preventDefault();
  $ ('.album-page').removeClass('inactive');
  $ ('.lightbox-page').addClass('inactive');
});

});//end of doc ready
