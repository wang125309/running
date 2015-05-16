require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");
require("../js/share.min.js");

window.onload = function() {
    $("#loading").velocity("fadeOut");
    h = $(window).height();
    w = $(window).width();
    $(".background").css({
        "background-position":1608+w/2+"px "+(2*h)+"px"
    });
    lx = 0;
    ly = 0;
    lz = 0;
    count = 0;
    var deviceMotionHandler = function(eventData) {
        console.log(eventData);
        xm = Math.round(eventData.alpha*10)/10;
        x = Math.round(2*h/180*xm+(2*h+w/2));
        xm -= 180;
        //z = Math.round(4*h/180*(Math.round(eventData.beta*10)/10-90));
        //z = (Math.round(Math.round(eventData.beta*10))/10);
        z = Math.round(Math.round(eventData.beta*10)/10/90*h+h);
        y = Math.round(2*h/180*Math.round(eventData.gamma*10)/10);
        if(Math.abs((x+y)-(lx+ly))>3||Math.abs((z)-(lz))>3) {
            $(".background").css({
                "background-position":x+y+"px "+z+"px"
            });
            lx = x;
            ly = y;
            lz = z;
        }
    };
    var u = navigator.userAgent;
    if (u.indexOf('iPhone') > -1) {
        window.addEventListener('deviceorientation',deviceMotionHandler,false);
        $(".move").addClass("move-iphone");
        $(".move-text").html("横向移动");
        setTimeout(function(){
            $(".move").velocity("fadeOut");
            $(".move-text").velocity("fadeOut");
        },3000);
    }
    else {
        x = 0;
        y = 0;
        mx = 2*h+w/2;
        my = 2*h;
        $(".move").addClass("move-android");
        $(".move-text").html("清扫观赏全景");
        setTimeout(function(){
            $(".move").velocity("fadeOut");
            $(".move-text").velocity("fadeOut");
        },3000);
        document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);
        $(".background").on("touchstart",function(e){
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        });
        $(".background").on("touchend",function(e){
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        });
        $(".background").on("touchmove",function(e){
                console.log(e.touches[0]);
                e.preventDefault();
                setTimeout(function(){
                    mx += e.touches[0].clientX - x-2;
                    x = e.touches[0].clientX;
                    my += e.touches[0].clientY-y-2;
                    y = e.touches[0].clientY;
                    if(my>h&&my<2*h) {
                    $(".background").css({
                        "background-position":mx+"px "+my+"px"
                        });
                    }
                    else if(my<h){

                    $(".background").css({
                        "background-position":mx+"px "+h+"px"
                        });
                    }
                    else if(my>2*h) {
                    $(".background").css({
                        "background-position":mx+"px "+2*h+"px"
                        });

                    }
                },5);
        });
    }
};
