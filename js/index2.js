var flag=0;
$('.menu>ul>li').hover(function () {
    flag++;
    var index=$(this).index();
    var t;
    if(flag==1) t=200;
    else t=0;
    $('.menu div').eq(index).animate({'width':'972px'},t);
    $('.menu div').eq(index).css({'border':'1px solid #e5e5e5','border-left':'none'});
},function () {
    var index=$(this).index();
    $('.menu div').eq(index).animate({'width':'0px','border':'none'},0);
    $('.menu div').eq(index).css({'border':'none'});
});
$('.menu').mouseleave(function () {
    flag=0;
});