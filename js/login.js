var flag1=false,flag2=0,flag3=true;
$('.goToPassword').hover(function () {
    $(this).attr('src','../images/login_password2.png');
},function () {
    $(this).attr('src','../images/login_password.png');
});
$('.imgLoginImg1').mouseenter(function () {
    flag2++;
    if(flag2==1&&flag3){
        $('.imgLoginImg1').animate({'left':'0px'},500);
        setTimeout(function () {
            if(parseInt($('.imgLoginImg1').css('left'))<1&&flag1){
                $('.imgLoginImg2').show();
                flag3=false;
            }
        },500);
        flag1=true;
    }
});
$('.imgLoginImg').mouseleave(function () {
    if(flag1){
        $('.imgLoginImg2').hide();
        $('.imgLoginImg1').animate({'left':'62px'},500);
        flag1=false;
        flag=0;
    }
});
$('.imgLogin>span,.goToPassword').click(function () {
    $('.imgLogin').toggle();
    $('.passwordLogin').toggle();
});
$('.passwordLogin>img').click(function () {
    $('.imgLogin').toggle();
    $('.passwordLogin').toggle();
    flag2=0;
    flag3=true;
});