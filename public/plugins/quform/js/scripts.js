jQuery(document).ready(function($) {
    $('form.quform').Quform();

    // Tooltip settings
    if ($.isFunction($.fn.qtip)) {
        $('.quform-tooltip').qtip({
            content: {
                text: false
            },
            style: {
                classes: 'qtip-default qtip-shadow quform-tt',
                width: '180px'
            },
            position: {
                my: 'left center',
                at: 'right center',
                viewport: $(window),
                adjust: {
                    method: 'shift'
                }
            }
        });
    }

    // Changes subject to a text field when 'Other' is chosen
    $('#subject').replaceSelectWithTextInput({
        onValue: 'Other'
    });
}); // End document ready

(function($) {
    $(window).on('load', function() {
        // Preload images
        var images = [
            'quform/images/close.png',
            'quform/images/success.png',
            'quform/images/error.png',
            'quform/images/default-loading.gif'
        ];

        // Preload images for any active themes
        if ($('.quform-theme-light-light, .quform-theme-light-rounded').length) {
            images = images.concat([
                'quform/themes/light/images/button-active-bg-rep.png',
                'quform/themes/light/images/close.png',
                'quform/themes/light/images/input-active-bg-rep.png'
            ]);
        }

        if ($('.quform-theme-dark-dark, .quform-theme-dark-rounded').length) {
            images = images.concat([
                'quform/themes/dark/images/button-active-bg-rep.png',
                'quform/themes/dark/images/close.png',
                'quform/themes/dark/images/input-active-bg-rep.png',
                'quform/themes/dark/images/loading.gif'
            ]);
        }

        if ($('.quform-theme-minimal-light').length) {
            images = images.concat([
                'quform/themes/minimal/images/close-light.png'
            ]);
        }

        if ($('.quform-theme-minimal-dark').length) {
            images = images.concat([
                'quform/themes/minimal/images/close-dark.png',
                'quform/themes/minimal/images/loading-dark.gif'
            ]);
        }

        $.preloadImages(images);
    });
})(jQuery);


let submitted = false;

function validateName() {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    alert("Name can't be blank");
    return false;
  }
  if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct name"); //Validation Message
    return false;
  }
  return true;
}

function validateMessage(){
    let message = document.getElementById("message").value;
    if(message.length == 0){
        alert("Message cannot be blank");
        return false;
    }
    if (!message.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct message"); //Validation Message
        return false;
      }
      return true;
}



function validateEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    alert("Email can't be blank"); //Validation Message
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    alert("Please enter a correct email address"); //Validation Message
    return false;
  }

  return true;
}



function validateForm() {
  if (!validateName()  || !validateEmail()   || !validateMessage ) {
    alert("Form not submitted"); //Validation Message
    return false;
  } else {
    submitted = true;
    return true;
  }
}