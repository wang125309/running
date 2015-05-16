$(function(){
    $.post("/blow/wxconfig/",{
		"url":location.href
	},function(data){
		wx.config(data);
		wx.ready(function(){
			wx.onMenuShareTimeline({
                link:"http://www.360youtu.com/ford/template/index.html",
                imgUrl:"http://www.360youtu.com/ford/static/image/share-background.jpg",
                title:"锐界人生 不止于超越",
			});
			wx.onMenuShareAppMessage({
                link:"http://www.360youtu.com/ford/template/index.html",
                imgUrl:"http://www.360youtu.com/ford/static/image/share-background.jpg",
                title:"锐界人生 不止于超越",
			});
        });
		wx.error(function(res){
			$.get("/blow/update_access_token/",function(data){
				$.post("/blow/wxconfig/",{
					"url":location.href
				},function(data){
					wx.config(data);
					wx.ready(function(){
		            	wx.onMenuShareTimeline({
                            link:"http://www.360youtu.com/ford/template/index.html",
                            imgUrl:"http://www.360youtu.com/ford/static/image/share-background.jpg",
                            title:"锐界人生 不止于超越",
			            });
			            wx.onMenuShareAppMessage({
                            link:"http://www.360youtu.com/ford/template/index.html",
                            imgUrl:"http://www.360youtu.com/ford/static/image/share-background.jpg",
                            title:"锐界人生 不止于超越",
			            });
                    });
                });
		    });
        });
    });
});
