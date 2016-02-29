$(document).ready(function() {

  // step 1
  var element = document.getElementById("js-fadeInElement");
  $(element).addClass('js-fade-element-hide');

  var content = document.getElementById("step-content");
  $(content).addClass('js-fade-element-hide');


  $(window).scroll(function() {
    if( $("#js-fadeInElement").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('step-1');
        $(content).removeClass('js-fade-element-hide');
        $(content).addClass('content-step-1');

      }
    }
  });

  // step 2
  var element_2 = document.getElementById("js-fadeInElement-2");
  $(element_2).addClass('js-fade-element-hide');

  var content_2 = document.getElementById("step-content-2");
  $(content_2).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement-2").length > 0 ) {
      var elementTopToPageTop = $(element_2).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element_2).addClass('step-2');
        $(content_2).removeClass('js-fade-element-hide');
        $(content_2).addClass('content-step-2');
      }
    }
  });

  // step 3
  var element_3 = document.getElementById("js-fadeInElement-3");
  $(element_3).addClass('js-fade-element-hide');

  var content_3 = document.getElementById("step-content-3");
  $(content_3).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement-3").length > 0 ) {
      var elementTopToPageTop = $(element_3).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element_3).addClass('step-3');
        $(content_3).removeClass('js-fade-element-hide');
        $(content_3).addClass('content-step-3');
      }
    }
  });

});