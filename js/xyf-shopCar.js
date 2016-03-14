window.onload = function() {
    "use strict";
    /*自适应更换rem*/
    function changeRem(htmFont, screenWidth) {
        var ww = $(document.body).width();
        var htm = $('html');
        var math = ww * htmFont / screenWidth;
        var percentage = ww / screenWidth;
        htm.css('font-size', math + 'px');
    }
    /*nav点击切换事件*/
    function switchNav(parele, chiele, actcls) {
        var n;
        var navUl = $(parele).eq(0);
        var navLi = navUl.children(chiele);
        var navli_left = navLi.eq(1).offset().left - navUl.offset().left;
        //获取当前li的marginleft值;
        navLi.each(function() { //绑定tap事件
            $(this).on('tap', function(e) {
                e.stopPropagation(); //防止冒泡
                $(this).siblings().removeClass(actcls); //重置其余兄弟元素上的class
                $(this).addClass(actcls);
                n = $(this).index();
                navUl.animate({ 'margin-left': -n * navli_left + 'px' });
            });
        });

    }

    /*右滑返回顶部*/
    function turnRight() {
        var nav = $('.nav').eq(0);
        var activeClass = $('.nav-ul .on').eq(0);
        var firstLi = $('.nav-ul li').eq(0);
        var navUl = $('.nav-ul').eq(0);
        nav.on('swipeRight', function() {
            firstLi.siblings().removeClass('on');
            firstLi.addClass('on');
            navUl.animate({ 'margin-left': 0 });

        })
    }
    /*刷新时的初始化*/
    changeRem(32, 640);
    switchNav('.nav-ul', 'li', 'on');
    turnRight();
    $(window).resize(function() { //屏幕尺寸发生变化时，执行。
        changeRem(32, 640);
        switchNav('.nav-ul', 'li', 'on');
        turnRight();
    })
};
