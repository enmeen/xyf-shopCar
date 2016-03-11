window.onload = function() {
    changeRem();
    switchNav();

    /*自适应更换rem*/
    function changeRem() {
        var ww = $(document.body).width();
        var htm = $('html');
        console.log(ww);
        var math = ww * 32 / 640;
        var percentage = ww / 640;
        console.log(percentage);
        htm.css('font-size', math + 'px');
        console.log(htm.css('font-size'));
    };
    /*确保价格字体大于等于16px*/
    function keepFont() {
        var productPrice = $('.product-price');
        var ppfs = productPrice.eq(0).css('font-size');
        console.log(ppfs);
        if (parseInt(ppfs) < 16) {
            productPrice.each(function() {
                $(this).css('font-size', '16px')
            })
        }
    }
    /*nav切换事件*/
    function switchNav() {
        var navLi = $('.nav-ul').eq(0).children('li');
        //获取当前li的marginleft值
        var ccc = listMargintop();
     console.log(ccc);
        navLi.each(function() { //绑定tap事件
            $(this).on('tap', function(e) {
                e.stopPropagation(); //防止冒泡
                navLi.each(function() { //重置on类
                    $(this).removeClass('on');
                });
                var listcls = e.target.className;
                var nub = listcls.substr(-1, 1);
                var ccc = listMargintop();
                console.log(ccc);
                navLi.each(function(index) {
                   /* console.log(index, nub);*/
                    if (index < nub) { $(this).animate({ 'margin-left': ccc[index] - ccc[nub] + 'px' });
                        }
                    if (index == nub) {
                        $(this).animate({ 'margin-left': -ccc[nub ] + 'px' });
                     
                    }


                })
              

                $(this).addClass('on');

                /*var liLeft = $(this).offset().left; //移动选中项目至最左端
                 $(this).animate({ 'margin-left': -liLeft + 'px' });*/

            })
        })

    }
    /*提取nav li 距离左端的距离*/
    function listMargintop() {
        var listLeft = [];
        var navLi = $('.nav-ul').eq(0).children('li');
        navLi.each(function(index) {
            listLeft.push($(this).offset().left);
        })
        return listLeft;
    }

}
