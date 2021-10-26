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

    //Contact Form function and validation
    /*
    var form = $('#form'),
    email = $('#email'),
    name = $('#name'),
    subject = $('#subject'),
    message = $('#message'),
    info = $('#info'),
    submit = $("#submit");

    form.on('input', '#email, #name, #subject, #message', function() {
        $(this).css('border-color', '');
        info.html('').slideUp();
    });
    
    submit.on('click', function(e) {
        e.preventDefault();
        if(validate()) {
            $.ajax({
            type: "POST",
            url: "../php/mailer.php",
            data: form.serialize(),
            dataType: "json"
        }).done(function(data) {
            if(data.success) {
            email.val('');
            name.val('');
            subject.val('');
            message.val('');
            info.html('Message sent!').css('color', 'green').slideDown();
        } else {
            info.html('Cannot send mail at this time, sorry! Please use the above email link instead.').css('color', 'red').slideDown();
        }
        });
        } 
    });
    
    function validate() {
        var valid = true;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
        if(!regex.test(email.val())) {
            email.css('border-color', 'red');
            valid = false;
        }
        if($.trim(name.val()) === "") {
            name.css('border-color', 'red');
            valid = false;
        }
        if($.trim(subject.val()) === "") {
            subject.css('border-color', 'red');
            valid = false;
        }
        if($.trim(message.val()) === "") {
            message.css('border-color', 'red');
            valid = false;
        }
  
        return valid;
    }
    */
      
});//Closure for jQuery initialization
