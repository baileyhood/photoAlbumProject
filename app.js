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

//Pulls Album Photos

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
  var photoBlah = showPhotoAlbums(selectedPhotoAlbums);
});

//LIGHTBOX
//1. Toggle to Lightbox Section

// $('body').on("click", ".photo-list", function (event) {
// console.log("Photo click is working!");
// event.preventDefault();
// $ ('.lightbox-page').removeClass('inactive');
// $ ('.album-page').addClass('inactive');
// var selectedPhotos = ($(this).attr('src'));
// var selectedFull = selectedPhoto.replace(/thumb\.png/gi,"full.jpeg");
// console.log(selectedFull);
// setPhotoFull(selectedFull);
// });
//
// var setPhotoFull = function (photofullget) {
//   var photoFull = "";
//   photoFull += "<div class='photoFullDiv'><img src='" + photofullget + "' /></div>";
//   console.log(photoFull);
// $(".photoFullView").html(photoFull);}

// $('.albumContent').on("click",'img', function(el) {
//   el.preventDefault();
//   console.log("CLICK");
//   $("section").removeClass("active");
//   $(".photoView").addClass("active");
//   var selectedPhoto = $(this).attr("src");
//   var selectedFull = selectedPhoto.replace(/thumb\.png/gi,"full.jpeg");
//   console.log(selectedFull);
//   setPhotoFull(selectedFull);
// });
// var setPhotoFull = function (photofullget) {
//   var photoFull = "";
//     photoFull += "<div class='photoFullDiv'><img src='" + photofullget + "' /></div>";
//     console.log(photoFull);
//   $(".photoFullView").html(photoFull);
// };



// var filterLargePhotos = function (photo_choice) {
//   var emptyArr = albums.filter (function (item,idx) {
//     console.log (item.photos[0].photoRel);
//     return item.photos[0].photoRel === photo_choice;
//   });
//   return emptyArr[0].photos;
// };
//
// //for the above filter function, we are filtering out any
// // photoRel property that doesn't match the class-name and then putting
// //objects into separate array.
//
// var showLightbox = function (rel) {
//   varDisplayLightbox = "";
//   _.each(filterLargePhotos(rel), function (el) {
//   varDisplayLightbox += "<h1>" + el.photoName + "</h1>";
//   varDisplayLightbox += "<div class ='lightbox-image-container'>";
//   varDisplayLightbox += "<img class= 'lightboxPhoto' src='" + el.photoFull + "' alt=''/>";
//   varDisplayLightbox +="</div>";
// });
// $('.lightbox-page').append(varDisplayLightbox);
// };
});//end of doc ready
