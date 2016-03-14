window.onload = function () {
    "use strict";
    /*nav点击切换事件*/
    function switchNav(parele, chiele, actcls) {
        var n;
        var navUl = $(parele).eq(0);
        var navLi = navUl.children(chiele);
        var navli_left = navLi.eq(1).offset().left - navUl.offset().left;
        var shadow = $('.nav .shadow').eq(0);
        console.log(shadow);
        //获取当前li的marginleft值;
        navLi.each(function () { //绑定tap事件
            $(this).on('tap', function(e) {
                e.stopPropagation(); //防止冒泡
                $(this).siblings().removeClass(actcls); //重置其余兄弟元素上的class
                $(this).addClass(actcls);
                n = $(this).index();
                var offleft = n * navli_left;
                var maxleft = navli_left*navLi.length - $('.nav').eq(0).width();
                if (offleft > maxleft) {//判断是否到尾部
                    navUl.animate({ 'transform': 'translateX(' + (-maxleft) + 'px)' });
                    shadow.hide();
                } else {
                    navUl.animate({ 'transform': 'translateX(' + (-n * navli_left) + 'px)' });
                    shadow.show();
                }

            });
        });

    }
    /*右滑返回顶部*/
    function turnRight () {
        var nav = $('.nav').eq(0);
        var activeClass = $('.nav-ul .on').eq(0);
        var firstLi = $('.nav-ul li').eq(0);
        var navUl = $('.nav-ul').eq(0);
        nav.on('swipeRight', function() {
            firstLi.siblings().removeClass('on');
            firstLi.addClass('on');
            navUl.animate({ 'transform': 'translateX(0)' });

        })
    }
    /*刷新时的初始化*/

    switchNav('.nav-ul', 'li', 'on');
    turnRight();
    $(window).resize(function () { //屏幕尺寸发生变化时，执行。

        switchNav('.nav-ul', 'li', 'on');
        turnRight();
    });
};
