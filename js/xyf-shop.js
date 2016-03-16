window.onload = function() {
    /*nav点击、滑动切换事件*/
    'use strict';
    function switchNav() {
        var n = undefined;
        var navUl = $('.nav-ul').eq(0);
        var navLi = navUl.children('li');
        var navli_left = navLi.eq(1).offset().left - navUl.offset().left;
        var shadow = $('.nav .shadow').eq(0);
        var maxleft = navli_left * navLi.length - $('.nav').eq(0).width(); //导航栏目超出nav宽度的距离。即像右滑动的最大距离
        var nav = $('.nav').eq(0);
        //获取当前li的marginleft值;
        nav.live('tap', function(e) {//1.采用事件委托
            var eTar = e.target;
            var $eTar = $(eTar);//转化为jq对象
            var n = $eTar.index();
            var offleft = n * navli_left;
            $eTar.siblings().removeClass('on');
            $eTar.addClass('on');
            var tagTar = eTar.tagName.toLocaleLowerCase();
            if (tagTar == 'li') {
                if (maxleft > 0 && offleft > maxleft) { //移动距离 大于 最大距离 
                    navUl.css('margin-left', -maxleft + 'px');
                    shadow.hide();
                }
                if (maxleft > 0 && offleft < maxleft) {
                    if (!n) {
                        navUl.css('margin-left', 0);
                    } else {
                        navUl.css('margin-left', -(n - 1) * navli_left + 'px');
                        shadow.show();
                    }

                }
                if (maxleft < 0) { //导航栏项目较小，不必触发滑动
                    shadow.hide();
                }
            }
        })

/*
        navLi.each(function() { //2.原始方达。绑定tap事件
            $(this).on('tap', function(e) {
                e.stopPropagation(); //防止冒泡
                $(this).siblings().removeClass('on'); //重置其余兄弟元素上的class
                $(this).addClass('on');
                n = $(this).index();
                var offleft = n * navli_left; //点击的li元素离左边的距离
                if (maxleft > 0 && offleft > maxleft) { //移动距离 大于 最大距离 
                    navUl.css('margin-left', -maxleft + 'px');
                    shadow.hide();
                }
                if (maxleft > 0 && offleft < maxleft) {
                    if (!n) {
                        navUl.css('margin-left', 0);
                    } else {
                        navUl.css('margin-left', -(n - 1) * navli_left + 'px');
                        shadow.show();
                    }

                }
                if (maxleft < 0) { //导航栏项目较小，不必触发滑动
                    shadow.hide();
                }

            });
        });*/
    }
    /*刷新时的初始化*/
    switchNav();
};
