jQuery(document).ready(function($){function e(){u||(u=!0,window.requestAnimationFrame?window.requestAnimationFrame(n):setTimeout(n,300))}function o(){m||(m=!0,window.requestAnimationFrame?window.requestAnimationFrame(r):setTimeout(r,300))}function t(){p||(p=!0,window.requestAnimationFrame?window.requestAnimationFrame(i):setTimeout(i,300))}function i(){d=$(window).height(),h=s(),$(window).off("scroll",e),$(window).off("scroll",o),"desktop"==h&&($(window).on("scroll",e),$(window).on("scroll",o)),p=!1}function n(){var e=$(window).scrollTop();f.each(function(){var o=$(this),t=o.offset().top,i=o.outerHeight(),n=c.eq(o.index()).children("a");if(o.is(":last-of-type")&&(i-=d),t>e)n.removeClass("read reading");else if(e>=t&&t+i>e){var r=g*(1-(e-t)/i);n.addClass("reading").removeClass("read").find("circle").attr({"stroke-dashoffset":r})}else n.removeClass("reading").addClass("read")}),u=!1}function r(){var e=l.offset().top,o=l.outerHeight(),t=$(window).scrollTop();if(e>t)w.removeClass("fixed").attr("style","");else if(t>=e&&e+o-d>t)w.addClass("fixed").attr("style","");else{var i=Number(f.eq(1).css("padding-top").replace("px",""));w.hasClass("fixed")&&w.removeClass("fixed").css("top",o+i-d+"px")}m=!1}function a(e){var o=location.pathname.split("/"),t=o[o.length-1];t!=e&&history.pushState&&window.history.pushState({path:e},"",e)}function s(){return window.getComputedStyle(l.get(0),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"")}var l=$(".bh-articles");if(l.length>0){var d=$(window).height(),f=l.find("article"),w=$(".bh-read-more"),c=w.find("li"),u=!1,m=!1,p=!1,h=s(),g=parseInt(Math.PI*(2*c.eq(0).find("circle").attr("r")));"desktop"==h&&($(window).on("scroll",e),$(window).on("scroll",o)),$(window).on("resize",t),n(),r(),w.on("click","a",function(o){o.preventDefault();var t=f.eq($(this).parent("li").index()),i=t.offset().top;$(window).off("scroll",e),$("body,html").animate({scrollTop:i+2},300,function(){e(),$(window).on("scroll",e)})})}});