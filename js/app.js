$(()=>{
  $('.aboutMeLink').click(function(){
       $('html, body').animate({
           scrollTop: $('#aboutMe').position().top },
           1000
       );
   });

   $('.skillsLink').click(function(){
        $('html, body').animate({
            scrollTop: $('#skills').position().top },
            1000
        );
    });


   $('.projectsLink').click(function(){
        $('html, body').animate({
            scrollTop: $('#projects').position().top },
            1000
        );
    });

   $('.contactLink').click(function(){
        $('html, body').animate({
            scrollTop: $('#contact').position().top },
            1000
        );
    });

    $('.backToTopLink').click(function(){
         $('html, body').animate({
             scrollTop: $('#topTarget').position().top },
             1000
         );
     });
})
