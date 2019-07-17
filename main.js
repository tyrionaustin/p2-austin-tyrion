(function() {
  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
}());




var interval = 1500;
var random_display = 0;
var imageDir = "images/";

var imageNum = 0; imageArray = new Array(); imageArray[imageNum++] = new imageItem(imageDir + "dadson.jpg");

imageArray[imageNum++] = new imageItem(imageDir + "baby.jpg"); imageArray[imageNum++] = new imageItem(imageDir + "dad_baby.jpg"); imageArray[imageNum++] = new imageItem(imageDir + "dadsun.jpg"); imageArray[imageNum++] = new imageItem(imageDir + "fatherson.jpg");

var totalImages = imageArray.length;

function imageItem(image_location) { this.image_item = new Image(); this.image_item.src = image_location; } function get_ImageItemLocation(imageObj) { return(imageObj.image_item.src) }

function randNum(x, y) { var range = y - x + 1; return Math.floor(Math.random() * range) + x; }

function getNextImage() { if (random_display) { imageNum = randNum(0, totalImages-1); } else { imageNum = (imageNum+1) % totalImages; }

var new_image = get_ImageItemLocation(imageArray[imageNum]); return(new_image); }

function getPrevImage() { imageNum = (imageNum-1) % totalImages; var new_image = get_ImageItemLocation(imageArray[imageNum]); return(new_image); }

function prevImage(place) { var new_image = getPrevImage(); document[place].src = new_image; }

function switchImage(place) { var new_image = getNextImage(); document[place].src = new_image; var recur_call = "switchImage('"+place+"')"; timerID = setTimeout(recur_call, interval); }
