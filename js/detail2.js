var div;
(function () {
    var w=$(window).width();
    $('h2').css('background-position','-'+(1920-w)/2+'px 0');
})();
$(window).resize(function () {
    var w=$(window).width();
    $('h2').css('background-position','-'+(1920-w)/2+'px 0');
});
$('.company').hover(function () {
    $('.company>span>img').attr('src','../images/detail_inf_up.png');
},function () {
    $('.company>span>img').attr('src','../images/detail_inf_down.png');
});
$('.main_left>ul>li').click(function () {
    $(this).siblings().css('border-color','white');
    $(this).css('border-color','#ff7300');
});
$('.main_left>a').hover(function () {
    $('.main_left>div').show();
},function () {
    $('.main_left>div').hide();
});
$('.main_left>a').mousemove(function (e) {
    var sbX=e.clientX,sbY=e.clientY;
    var x=sbX-$(this).offset().left-100,y=sbY-$(this).offset().top-100;
    if(x<0) x=0;
    else if(x>179) x=179;
    if(y<0) y=0;
    else if(y>179) y=179;
    $(this).children('div').css({'left':x+'px','top':y+'px'});
    $(this).siblings('div').css({'background-position':'-'+2*x+'px -'+2*y+'px','background-size':'758px 758px'});
});
$('.main_buy p>span').click(function () {
    var i=$(this).index('.main_buy p>span');
    var v=parseInt($('#buyNumber').val());
    if(i) $('#buyNumber').val(v+1);
    else if(v) $('#buyNumber').val(v-1);
});
$('#buyNumber').blur(function () {
    if(!$(this).val()) $(this).val('0');
});
function previ(n) {
    if(!n) return 2;
    else return n-1;
}
function nex(n) {
    if(n==2) return 0;
    else return n+1;
}
function ppp() {
    if(flag1){
        flag1=false;
        var ul=$('.main_right>div>ul');
        ul.eq(mi).animate({'left':'112px'},200);
        ul.eq(previ(mi)).animate({'left':'0'},200);
        ul.eq(nex(mi)).animate({'left':'-112px'},0);
        mi=previ(mi);
        $('.main_right>u').eq(mi).siblings('u').css('background','#d5d5d5');
        $('.main_right>u').eq(mi).css('background','#ff7300');
        setTimeout(function () {
            flag1=true;
        },200);
    }
}
function nnn() {
    if(flag1){
        flag1=false;
        var ul=$('.main_right>div>ul');
        ul.eq(mi).animate({'left':'-112px'},200);
        ul.eq(nex(mi)).animate({'left':'0'},200);
        ul.eq(previ(mi)).animate({'left':'112'},0);
        mi=nex(mi);
        $('.main_right>u').eq(mi).siblings('u').css('background','#d5d5d5');
        $('.main_right>u').eq(mi).css('background','#ff7300');
        setTimeout(function () {
            flag1=true;
        },200);
    }
}
var mi=0,flag1=true;
$('.main_right_previous').click(ppp);
$('.main_right_next').click(nnn);
$('.main_right>img').hover(function () {
    $(this).attr('src',$(this).attr('src').replace(/1/g,'2'));
},function () {
    $(this).attr('src',$(this).attr('src').replace(/2/g,'1'));
});
$('.main_right>u').click(function () {
    var i=$(this).index('.main_right>u');
    if(i==previ(mi)) ppp();
    else if(i==nex(mi)) nnn();
});
$('.main_left>p img').hover(function () {
    $(this).attr('src',$(this).attr('src').replace(/1/g,'2'));
},function () {
    $(this).attr('src',$(this).attr('src').replace(/2/g,'1'));
});