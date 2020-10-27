$(function() {
    // 1、侧边显示与隐藏
    var flag = true;
    toggletool();

    function toggletool() {
        if ($(document).scrollTop() >= $(".recom").offset().top) {
            $(".side_nav").fadeIn();
        } else {
            $(".side_nav").fadeOut();
        };
    }

    // 3、 页面滚动到某个区域时，左侧电梯导航li添加和删除相应类名


    $(window).scroll(function() {
        toggletool();
        $(".floor .width").each(function(i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top) {
                // console.log(i);
                if (flag) {
                    $(".side_nav li").eq(i).addClass("cureent").siblings().removeClass();
                }

            }
        })


    })


    // 2、给侧边栏li添加点击事件，是页面滚动到指定位置
    $(".side_nav li").click(function() {
        // console.log($(this).index());
        flag = false;
        var scrolls = $(".floor .width").eq($(this).index()).offset().top
        $("body,html").stop().animate({
            scrollTop: scrolls
        }, function() {
            flag = true;
        });
        $(this).addClass("cureent").siblings().removeClass();
    })
})







        