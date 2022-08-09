(function ($){
    "use strict"
     //navbar scrolling
   $(window).scroll(function(){
    if($(this).scrollTop()>200){
        $('.navbar').fadeIn('slow').css('display','flex');
    }else{
        $('.navbar').fadeOut('slow').css('display','none');
    }
   });

//    //smooth scrolling on the navbar links
//    $(".navbar-nav a").on('click',function (event){
//       if(this.hash !==""){
//         event.preventDefault();

//         $('html,body').animate({
//             scrollTop: $(this.hash).offset().top - 45
//         },1500,'easeInOutExpo');

//         if($(this).parents('.navbar-nav').length){
//             $('.navbar-nav .active').removeClass('active');
//             $(this).closest('a').addClass('active');
//         }
//       }
//    });

   //skill bar
   $('.skill-per').each(function(){
    var $this =$(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue:0}).animate({animatedValue: per},{
     duration:2000,
     step:function(){
      $this.attr('per',Math.floor(this.animatedValue) + '%');
     },
     complete:function(){
      $this.attr('per',Math.floor(this.animatedValue) + '%');
     }
    });
});


// for toggle
$(document).ready(function(){
  $("#myBtn").click(function(){
      $("#myCollapse").collapse("toggle");
  });
});


})(jQuery);

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 200, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });





