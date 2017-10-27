// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery-1.11.1.min
//= require bootstrap.min
//= require owl.carousel.min
//= require jquery.stellar.min
//= require wow.min
//= require classie
//= require jquery.easing.min
//= require waypoints.min
//= require jquery.counterup.min
//= require typed
//= require smoothscroll
//= require theme
//= require bootstrap-notify
//= require custom
//= require rails-ujs
// require turbolinks //disabled
//= require ckeditor/init
// require_tree .

function readURLImage(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('.portfolio_preview').attr('src', e.target.result);
      console.log('imprimindo...');
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$("#portfolio_banner").change(function() {
  readURLImage(this);
});

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile_pic')
                    .attr('src', e.target.result)
                    .width(100)
                    .height(100);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
