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
  $(".work2").mouseenter(function() {
    $(".work2-overlay").show();
  }).mouseleave(function() {
    $(".work2-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work3").mouseenter(function() {
    $(".work3-overlay").show();
  }).mouseleave(function() {
    $(".work3-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work4").mouseenter(function() {
    $(".work4-overlay").show();
  }).mouseleave(function() {
    $(".work4-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work5").mouseenter(function() {
    $(".work5-overlay").show();
  }).mouseleave(function() {
    $(".work5-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work6").mouseenter(function() {
    $(".work6-overlay").show();
  }).mouseleave(function() {
    $(".work6-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work7").mouseenter(function() {
    $(".work7-overlay").show();
  }).mouseleave(function() {
    $(".work7-overlay").hide();
  });
});

  $(document).ready(function(){
  $(".work8").mouseenter(function() {
    $(".work8-overlay").show();
  }).mouseleave(function() {
    $(".work8-overlay").hide();
  });
});

  $("form#form1").on('submit',function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val() && $("input#message").val() ){
        alert ("Hello " + name + ", we have received your message.Thank you for reaching out to us.");
    }
    else if($("input#name").val() && $("input#email").val()){
        alert("Please type in on the message section...");
    }
   else{
     alert("Please provide correct Name or Email")
   }
});

