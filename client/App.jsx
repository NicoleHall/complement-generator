var $ = require('jquery');

//  legacy loading for bootstrap for es5
window.jQuery = window.$ = $;
require('bootstrap');

import styles from "styles/main.scss";

import complimentGeneratorHomepage from "pages/complimentGeneratorHomepage";

import swearJar from "pages/swearJar";

$(function(){
  //  what page are we on?
  var url = window.location.pathname;

  //  this is the javascript router
  switch (url) {
    case "/pages/complimentGenerator.html":
      complimentGeneratorHomepage.init();
      break;
    case "/pages/swearJar.html":
      swearJar.init();
      break;
  }

});
