$(()=>{
  $('.aboutMeLink').click(function(){
       $('html, body').animate({
           scrollTop: $('#aboutMe').position().top },
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
})
