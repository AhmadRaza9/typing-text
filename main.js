$(document).ready(function () {
    'use strict';
  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: ["Ahmed Raza.", "Developer.", "Freelancer."],
      typeSpeed: 100,
      loop: true,
    });
  });
});