$(document).ready(function(){
  $(".design").click(function() {
    $("#design, .design").toggle();
  });
  $("#design").click(function() {
    $(".design, #design").toggle();
  });
});

$(document).ready(function(){
  $(".development").click(function() {
    $("#development, .development").toggle();
  });
  $("#development").click(function() {
    $(".development, #development").toggle();
  });
});

$(document).ready(function(){
  $(".product").click(function() {
    $("#product, .product").toggle();
  });
  $("#product").click(function() {
    $(".product, #product").toggle();
  });
});


$(document).ready(function(){
  $('.work1').mouseover(function() {
    $('.work1-overlay').show();
  }).mouseout(function() {
    $('.work1-overlay').hide();
  });
});


$(document).ready(function(){
  $(".work2").mouseover(function() {
    $(".work2-overlay").show();
  }).mouseout(function() {
    $(".work2-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work3").mouseover(function() {
    $(".work3-overlay").show();
  }).mouseout(function() {
    $(".work3-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work4").mouseover(function() {
    $(".work4-overlay").show();
  }).mouseout(function() {
    $(".work4-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work5").mouseover(function() {
    $(".work5-overlay").show();
  }).mouseout(function() {
    $(".work5-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work6").mouseover(function() {
    $(".work6-overlay").show();
  }).mouseout(function() {
    $(".work6-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work7").mouseover(function() {
    $(".work7-overlay").show();
  }).mouseout(function() {
    $(".work7-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work8").mouseover(function() {
    $(".work8-overlay").show();
  }).mouseout(function() {
    $(".work8-overlay").hide();
  });
});

//mouse scroll
$(document).ready(function () {
  $("#mouse").click(function () {
      $('html, body').animate({
          scrollTop: $(".aboutUs").offset().top
      }, 100);
  });
});

//message alert
$(document).ready(function(){
  $("#form").submit(function(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (name && email){
      alert ("Hello " + name + ", we have received your message.Thank you for reaching out to us.");
    }
    else {
      alert("Please key in the correct information!");
    }
    
  });

});
