(function () {
    $(window).height()>224?$('nav').css('top',(($(window).height()-224)/2)+'px'):$('nav').css('top','0');
})();
(function () {
    $(window).scrollTop()>0?$('nav').show():$('nav').hide();
})();
$(window).resize(function () {
    $(window).height()>224?$('nav').css('top',(($(window).height()-224)/2)+'px'):$('nav').css('top','0');
});
$('nav>span').click(function () {
    var i=$(this).index();
    if(i==7) $('html,body').animate({'scrollTop':'0'},500);
    $('html,body').animate({'scrollTop':$('.contentTitle').eq(i-1).offset().top},500);
});
$(window).scroll(function () {
    $(window).scrollTop()>0?$('nav').show():$('nav').hide();
});
$(window).resize(function () {
    var w=parseInt((1902-$(window).width())/2);
    if(w>351) $('.banner').css('background-position-x','-351px');
    else $('.banner').css('background-position-x','-'+w+'px');
});