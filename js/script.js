//Initialize jQuery
$(function() {

  //Slideshow
  let swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 600px
      600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 961px
      961: {
      slidesPerView: 3,
      spaceBetween: 30
      }
    }
  });

  //Hamburger Menu
  $('.menu-toggle').click(function() {
    $('.nav').toggleClass('nav--open', 500);
    $(this).toggleClass('open'); 
  });

  //Contact Form validation using jQuery validation plugin
  $("form[name='contact']").validate({
    // Specify validation rules
    rules: {
      fullname: "required",
      email: {
        required: true,
        email: true
      },
      subject: "required",
      message: "required"
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your full name",
      email: "Please enter a valid email address",
      subject: "Please enter a subject",
      message: "Please enter a message"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

  //Code for button to scroll to top
    var btn = $('#topBtn');

  //Shows the button when user scrolls down 20px
  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      btn.show();
    } else {
      btn.hide();
    }
  });

  //Scroll to the top when user clicks button
  btn.click(function(e) {
    e.preventDefault();
    $('html,body').animate({scrollTop:0}, '20');
  });

});//Closure for jQuery initialization
