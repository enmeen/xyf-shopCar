window.onload = function() {
    changeRem();
    keepFont();
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
}
