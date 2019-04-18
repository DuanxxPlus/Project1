$('form').hover(function () {
    $('form>input').eq(1).attr('class','submit2');
    $('.searchTypeTitle>span').css('color','black');
    if($('.searchTypeTitle>img').attr('src')=='../images/home_searchUp1.png'){
        $('.searchTypeTitle>img').attr('src','../images/home_searchUp2.png');
    }
    if($('.searchTypeTitle>img').attr('src')=='../images/home_searchDown1.png'){
        $('.searchTypeTitle>img').attr('src','../images/home_searchDown2.png');
    }
},function () {
    $('form>input').eq(1).attr('class','submit1');
    $('.searchTypeTitle>span').css('color','white');
    if($('.searchTypeTitle>img').attr('src')=='../images/home_searchUp2.png'){
        $('.searchTypeTitle>img').attr('src','../images/home_searchUp1.png');
    }
    if($('.searchTypeTitle>img').attr('src')=='../images/home_searchDown2.png'){
        $('.searchTypeTitle>img').attr('src','../images/home_searchDown1.png');
    }
});
$(document).click(function () {
    $('.searchType').hide();
    if($('.searchTypeTitle>img').attr('src')=='../images/home_searchUp1.png'){
        $('.searchTypeTitle>img').attr('src','../images/home_searchDown1.png');
    }
    if($('.searchTypeTitle>img').attr('src')=='../images/home_searchUp2.png'){
        $('.searchTypeTitle>img').attr('src','../images/home_searchDown2.png');
    }
});
$('.searchTypeTitle').click(function (e) {
    $('.searchType').show();
    $('.searchTypeTitle>img').attr('src','../images/home_searchUp2.png');
    e.stopPropagation();
});
$('.searchType>p').click(function () {
    var i=$(this).index();
    $('.searchType img').css('visibility','hidden');
    $('.searchType img').eq(i).css('visibility','visible');
    if(i==0){
        $('form>div>span').html('产品');
        $('form>input').eq(0).attr('placeholder','输入产品名称');
    }
    if(i==1){
        $('form>div>span').html('公司');
        $('form>input').eq(0).attr('placeholder','输入公司名称、地区、主营产品等');
    }
    if(i==2){
        $('form>div>span').html('求购');
        $('form>input').eq(0).attr('placeholder','输入产品名称');
    }
    $('.searchType').hide();
});
$('.searchType>p').hover(function () {
    var i=$(this).index();
    $('.searchType img').eq(i).attr('src','../images/home_searchType2.png');
},function () {
    var i=$(this).index();
    $('.searchType img').eq(i).attr('src','../images/home_searchType1.png');
});
$(window).resize(function () {
    var w=$(window).width();
    console.log($(window).width());
    $('.bigImg').css('background-position-x','-'+(parseInt((1903-w)/2))+'px');
});
(function () {
    $(window).height()>400?$('nav').css('top',(($(window).height()-400)/2)+'px'):$('nav').css('top','0');
})();
(function () {
    $(window).scrollTop()>0?$('nav').show():$('nav').hide();
})();
$(window).resize(function () {
    $(window).height()>400?$('nav').css('top',(($(window).height()-400)/2)+'px'):$('nav').css('top','0');

});
$(window).scroll(function () {
    $(window).scrollTop()>0?$('nav').show():$('nav').hide();
});
$('nav>span').click(function () {
    var i=$(this).index();
    console.log(i);
    if(i==12) $(window).scrollTop(0);
    else{
        var h=$('.content>h6').eq(i).offset().top;
        $(window).scrollTop(h);
    }
});