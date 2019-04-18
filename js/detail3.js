$('.art_right_nav>li').click(function () {
    var i=$(this).index();
    $(this).siblings('li').css('color','black');
    $(this).css('color','#ff7300');
    $('.art_right>div').hide();
    $('.art_right>div').eq(i).show();
});
(function () {
    var h=$('aside').height()-390;
    $('aside>ul').css('bottom',h>0?h/2:h);
    var wh=$(window).height();
    if(wh<490) $('aside>img').css('bottom',wh-450+'px');
})();
$(window).resize(function () {
    var h=$('aside').height()-390;
    $('aside>ul').css('bottom',h>0?h/2:h);
    var wh=$(window).height();
    if(wh<490) $('aside>img').css('bottom',wh-450+'px');
});
$('aside>ul a').hover(function () {
    var i=$(this).index('aside>ul a');
    $('aside>ul img').eq(i).attr('src','../images/detail_aside'+(i+1)+'_2.png');
},function () {
    var i=$(this).index('aside>ul a');
    $('aside>ul img').eq(i).attr('src','../images/detail_aside'+(i+1)+'_1.png');
});
$('aside>img').hover(function () {
    $(this).attr('src','../images/detail_aside_up2.png');
},function () {
    $(this).attr('src','../images/detail_aside_up.png');
});
$('aside>img').click(function () {
    $('html,body').animate({'scrollTop':'0px'},300);
});
$('main_submit').click(function () {
    location.href='order.html';
});