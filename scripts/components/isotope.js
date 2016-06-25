// Blog Masonry



$( document ).ready(function() {

  var $container = $('.blog-masonry-container');

  // initialize Masonry after all images have loaded

  $container.imagesLoaded( function (){
     $container.isotope({
      itemSelector: '.blog-masonry-item',
      layoutMode: 'masonry'
    });
  });


     


  
  
  $('.blog-filters li').click(function() {
    var current = $(this);
    
    current.siblings('li').removeClass('active');
    current.addClass('active');
    
    var filterValue = current.attr('data-filter');
    var container = current.closest('.blog-masonry').find('.blog-masonry-container');
    container.isotope({ filter: filterValue });
  });
});
  
  