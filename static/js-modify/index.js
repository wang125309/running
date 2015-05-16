require("../../bower_components/zepto/zepto.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
require("../js/share.min.js");
window.onload = function(){
    $("#loading").velocity("fadeOut");
    w = $(window).width();
    h = $(window).height();
    $("#audio").attr({"src":"/ford/public/image/background.mp3","autoplay":""});
    on = false;
    $(".p10-btn1").on("click",function(){
        $('.register').velocity("fadeIn",function(){
                 
        },2000);          
    });
    $(".register").on("touchmove",function(e){
        e.stopPropagation();

    });
    $(".Iagree").on("click",function(){
        $(".form").velocity("fadeIn",function(){},1000);               
    });
    $(".submit").on("click",function(){
            
    });
    $(".p10-btn2").on("click",function(){
    
    });
    $(".music").on("click",function(){
        if(on) {
            on = false;
            document.getElementById("audio").pause();
            $(".music").removeClass("music-play");
        }
        else {
            on = true;
            document.getElementById("audio").play();
            $(".music").addClass("music-play");
        }
    });
    var swiper = new Swiper('.swiper-container', {
        direction:'vertical',
        lazyLoading:true,
        onInit: function() {
            $(".title").velocity("fadeIn",function(){
                $('.p1-text').addClass('textup-p1');
                setTimeout(function(){
                    $('.title-logo').addClass('title-logo-animate');
                },1000);
            },1000);
        },
        onSlideChangeEnd: function(swiper){
            console.log(swiper.activeIndex);
            if(swiper.activeIndex == 0) {
                $(".title").velocity("fadeIn",function(){
                    $('.p1-text').addClass('textup-p1');
                    setTimeout(function(){
                        $('.title-logo').addClass('title-logo-animate');
                    },1000);
                },1000);
            }
            else if(swiper.activeIndex == 1) {
                $('.banner1').addClass('pull-left');
                setTimeout(function(){
                    $('.banner2').addClass('pull-right');
                },1500);
                setTimeout(function(){
                    $('.banner3').addClass('pull-left');
                },3000);
                setTimeout(function(){
                    $('.banner1-text').velocity('fadeIn',function(){
                        $('.banner2-text').velocity('fadeIn',function(){
                            $('.banner3-text').velocity('fadeIn',function(){},1500);
                        },1500);    
                    },1500);  
                },4500);
            }
            else if(swiper.activeIndex == 2) {
                $(".p3-text1").velocity('fadeIn',function(){
                    $('.p3-text2').velocity('fadeIn',function(){
                        $('.p3-text3').addClass('textup-p3-3');
                    },1000);   
                },1000);
            }
            else if(swiper.activeIndex == 3) {
                $(".p4-text").velocity('fadeIn',function(){},1000);
            }
            else if(swiper.activeIndex == 4) {
                $(".p5-text").velocity('fadeIn',function(){},1000);
            }
            else if(swiper.activeIndex == 5) {
                $(".p6-text").velocity('fadeIn',function(){},1000);
            }
            else if(swiper.activeIndex == 6) {
                $(".p7-text").velocity('fadeIn',function(){},1000);
            }
            else if(swiper.activeIndex == 7) {
                $(".p8-text").velocity('fadeIn',function(){},1000);
            }
            else if(swiper.activeIndex == 8) {
            }
            else if(swiper.activeIndex == 9) {
                $(".p10-logo").velocity('fadeIn',function(){
                    $(".p10-btn1").addClass('btn1');
                },2000);
            }
        }
    });
}
