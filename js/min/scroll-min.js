$(document).ready(function(){var e=document.getElementById("js-fadeInElement");$(e).addClass("js-fade-element-hide");var n=document.getElementById("step-content");$(n).addClass("js-fade-element-hide"),$(window).scroll(function(){if($("#js-fadeInElement").length>0){var d=$(e).offset().top,t=$(window).scrollTop(),s=window.innerHeight,a=d-t,l=s-a,o=300;l>o&&($(e).addClass("step-1"),$(n).removeClass("js-fade-element-hide"),$(n).addClass("content-step-1"))}});var d=document.getElementById("js-fadeInElement-2");$(d).addClass("js-fade-element-hide");var t=document.getElementById("step-content-2");$(t).addClass("js-fade-element-hide"),$(window).scroll(function(){if($("#js-fadeInElement-2").length>0){var e=$(d).offset().top,n=$(window).scrollTop(),s=window.innerHeight,a=e-n,l=s-a,o=300;l>o&&($(d).addClass("step-2"),$(t).removeClass("js-fade-element-hide"),$(t).addClass("content-step-2"))}});var s=document.getElementById("js-fadeInElement-3");$(s).addClass("js-fade-element-hide");var a=document.getElementById("step-content-3");$(a).addClass("js-fade-element-hide"),$(window).scroll(function(){if($("#js-fadeInElement-3").length>0){var e=$(s).offset().top,n=$(window).scrollTop(),d=window.innerHeight,t=e-n,l=d-t,o=300;l>o&&($(s).addClass("step-3"),$(a).removeClass("js-fade-element-hide"),$(a).addClass("content-step-3"))}})});