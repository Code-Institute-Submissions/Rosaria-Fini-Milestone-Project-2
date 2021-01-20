$(document).ready(function() {
     /* Read More / Read Less in the Buched List */
    $(".readmore-btn").on('click', function() {
      $(this).parent().toggleClass("showContent");
    
      
      /* Shorthand if else statement */
      var replaceText = $(this).parent().hasClass("showContent") ? "Read Less" : "Read More";
      $(this).text(replaceText);
    });

       /* Show more button / Gallery */
    $(".gallery-button").on('click', function() {
        $(this).parent().toggleClass("showMore");

        /* Shorthand if else statement */
        var replaceButton = $(this).parent().hasClass("showMore") ? "Show Less" : "Show More";
        $(this).text(replaceButton);
    });

    
});

