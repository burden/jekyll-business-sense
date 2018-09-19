//= require bulma-carousel.min.js
//= require gumshoe/dist/js/gumshoe.js
//= require smooth-scroll/dist/smooth-scroll.js

document.addEventListener('DOMContentLoaded', function () {

  var scroll = new SmoothScroll('a[href*="#"]', {
    easing: 'easeInOutQuint',
    updateURL: false,
    speed: 900,
  });

  gumshoe.init({
  	selector: '[data-gumshoe] a', // Default link selector (must use a valid CSS selector)
  	selectorHeader: '[data-gumshoe-header]', // Fixed header selector (must use a valid CSS selector)
  	container: window, // The element to spy on scrolling in (must be a valid DOM Node)
  	offset: 0, // Distance in pixels to offset calculations
  	activeClass: 'is-active', // Class to apply to active navigation link and its parent list item
  	scrollDelay: true // Wait until scrolling has stopped before updating the navigation
  	//callback: function (nav) {} // Callback to run after setting active link
  });

  // Initialize carousels
  var carousels = bulmaCarousel.attach();

  // Decode email address
  var meta_contact = getAll('meta[name=contact]');
  var meta_key = meta_contact[0].getAttribute('data-key');
  var meta_encoded = meta_contact[0].getAttribute('data-encoded');

  var emails = getAll(".has-secret-email");
  emails.forEach(function(element){
    element.setAttribute("href", "mailto:" + decode_email(meta_key, meta_encoded));
    element.textContent = decode_email(meta_key, meta_encoded);
  });
  var emails = getAll(".has-secret-action");
  emails.forEach(function(element){
    element.setAttribute("action", "https://formspree.io/" + decode_email(meta_key, meta_encoded));
  });
  var emails = getAll(".has-secret-mailto");
  emails.forEach(function(element){
    element.setAttribute("href", "mailto:" + decode_email(meta_key, meta_encoded));
  });

  function decode_email(key, coded) {
    shift=coded.length
    link=""
    for (i=0; i<coded.length; i++) {
      if (key.indexOf(coded.charAt(i))==-1) {
        ltr = coded.charAt(i)
        link += (ltr)
      }
      else {
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
        link += (key.charAt(ltr))
      }
    }
    return link
  }

  // Gallery
  var rootEl = document.documentElement;
  var modals = getAll('.modal');
  var lightboxImages = getAll('.lightbox-image');
  var modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  // attach openModal click event to lightbox-image elements
  if (lightboxImages.length > 0) {
    lightboxImages.forEach(function (element) {
      element.addEventListener('click', function () {
        var target = element.dataset.target;
        openModal(target);
      });
    });
  }

  // attach closeModals click event to elements
  if (modalCloses.length > 0) {
    modalCloses.forEach(function (element) {
      element.addEventListener('click', function (e) {
        e.preventDefault()
        closeModals();
      });
    });
  }

  function openModal(target) {
    var $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target.classList.add('is-active');
  }

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    modals.forEach(function (element) {
      element.classList.remove('is-active');
    });
  }

  // allow escape key to call closeModals
  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
  });

  // Navbar
  // Get all "navbar-burger" elements
  var $navbarBurgers = getAll('.navbar-burger');

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (element) {
      element.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = element.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        element.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // close menu after navbar-item is clicked
  var $navbarItems = getAll('.navbar-item');
  if ($navbarItems.length > 0) {
    $navbarItems.forEach(function(element){
      element.addEventListener('click', function(){
        $burger = document.getElementById('navbarBurger');
        if ($burger.classList.contains('is-active')) {
          $burger.classList.remove('is-active');
          document.getElementById($burger.dataset.target).classList.remove('is-active');
        }
      });
    });
  }

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
});
