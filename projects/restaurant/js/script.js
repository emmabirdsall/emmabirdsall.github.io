//Initialize jQuery
$(function() { 

    //Changes text of Enter button from Irish to "Welcome" when hovering and changes back to original text when not hovering
   $(".btn-enter").mouseover(function() {
    // Change text of input button
    $(this).html("Welcome");
    $(this).css('color', '#FDF5E6')
    });

    $(".btn-enter").mouseleave(function() {
        // Change text of input button
        $(this).html("F&aacute;ilte");
        $(this).css('color', '#FDF5E6')
    });
    
    //Clicking Enter button takes you to homepage
    $(".btn-enter").click(function() {
        location.href = 'home.html';
    });

    //Begin form validation for Contact page
    $('#contact_form').submit(function(e) {
        //Stops page from refreshing if there are errors
        e.preventDefault();
        //letiables needed for validation
        let cust_name = $('#cust_name').val();
        let pref_contact;
        let cust_comments = $('#cust_comments').val();
        let phone_input;
        let email_input;
    
        //Removes error messages not applicable when form is submitted
        $(".error").remove();
    
        //Validates name to make sure something is entered
        if (cust_name.length < 1) {
          $('#cust_name').after('<span class="error">This field is required</span>');
        }
        //Validates commens box to make sure something is entered
        if (cust_comments.length < 5) {
            $('#cust_comments').after('<span class="error">Please let us know what you are contacting us about</span>');
        }
        //Validation for radio buttons
        if ($('input[name=pref_contact]:checked').length > 0) {
            //Gets value of radio button selected
            pref_contact = $('input[name=pref_contact]:checked').val();

            //Checks if phone radio button is selected and validates phone number entry
            if (pref_contact === 'phone') {
                phone_input = $('#phone_num').val();

                //Error message if phone length is less than 10
                if (phone_input.length < 10) {
                    $('#phone_num').addClass('error');
                    $('#phone_num').html('Please enter a valid phone number');
                }
            } 

            //Checks if email button is selected and validates email entry
            if (pref_contact === 'email') {
                email_input = $('email_address').val();

                //Error message if email address doesn't contain @
                if (String(email_input).indexOf("@") == -1) {
                    $('#email_add').addClass('error');
                    $('#email_add').html('Please enter a valid email address');
                }
                
            } 
            //Error displays on radio button inputs if neither is selected
            if (pref_contact === '') {
            $('#prefer_contact').addClass('error');
            $('#prefer_contact').html('Please select your preferred method');
            }
        }
    }); 

});//End jQuery initialization