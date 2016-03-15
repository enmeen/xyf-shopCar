window.onload = function() {
    "use strict";
    /*nav点击、滑动切换事件*/
    function switchNav(parelem, chielem, actcls) {
        var n = undefined;
        var navUl = $(parelem).eq(0);
        var navLi = navUl.children(chielem);
        var navli_left = navLi.eq(1).offset().left - navUl.offset().left;
        var shadow = $('.nav .shadow').eq(0);
        var maxleft = navli_left * navLi.length - $('.nav').eq(0).width();
        var nav = $('.nav').eq(0);
        //获取当前li的marginleft值;
        navLi.each(function() { //绑定tap事件
            $(this).on('tap', function(e) {
                e.stopPropagation(); //防止冒泡
                $(this).siblings().removeClass(actcls); //重置其余兄弟元素上的class
                $(this).addClass(actcls);
                n = $(this).index();
                var offleft = n * navli_left;
                if (maxleft > 0 && offleft > maxleft) { //判断是否到尾部
                    navUl.animate({ 'transform': 'translateX(' + (-maxleft) + 'px)' });
                    shadow.hide();
                }
                if (maxleft > 0 && offleft < maxleft) {
                    navUl.animate({ 'transform': 'translateX(' + (-n * navli_left) + 'px)' });
                    shadow.show();
                }
                if (maxleft < 0) {
                    shadow.hide();
                }

            });
        });
    /*左滑返回尾部*/
        function turnLeft() {
            nav.on('swipeLeft', function() {
                if (maxleft < 0) {
                    return
                }
                if (maxleft > 0) {
                    navUl.animate({ 'transform': 'translateX(' + (-maxleft) + 'px)' });
                }
            })
        }
    /*右滑返回顶部*/
        function turnRight() {
            var activeClass = $(actcls).eq(0);
            var firstLi = navLi.eq(0);
            var navUl = $(parelem).eq(0);
            nav.on('swipeRight', function() {
                firstLi.siblings().removeClass(actcls);
                firstLi.addClass(actcls);
                navUl.animate({ 'transform': 'translateX(0)' });
            })
        }
        turnLeft();
        turnRight();

    }
    /*刷新时的初始化*/
    switchNav('.nav-ul', 'li', 'on');
    $(window).resize(function() { //屏幕尺寸发生变化时，执行。
        switchNav('.nav-ul', 'li', 'on');
    });
};
