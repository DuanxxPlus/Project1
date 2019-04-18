var ayf=1;
$('.areYouFinding>img').click(function () {
    if(ayf%2!=0){
        $('.areYouFinding').height(120);
        $(this).attr('src','../images/board_search_up.png');
    }
    else{
        $('.areYouFinding').height(40);
        $(this).attr('src','../images/board_search_down.png');
    }
    ayf++;
});
$('.nav_location').hover(function () {
    $('.nav_location>img').attr('src','../images/board_nav_up.png');
    $('.nav_location>div').toggle();
    $(this).children('span').css('color','#ff4136');
},function () {
    $('.nav_location>img').attr('src','../images/board_nav_down.png');
    $('.nav_location>div').toggle();
    $(this).children('span').css('color','#666666');
});
$('.nav_minPriceInput,.nav_maxPriceInput').click(function () {
    $('.nav_priceInput').css('background','white');
    $('.nav_InputSubmit').toggle();
});
$('.nav_priceInput').mouseleave(function () {
    $('.nav_priceInput').css('background','none');
    $('.nav_InputSubmit').toggle();
});
$('.nav_locationSwitch>span').hover(function () {
    var index=$(this).index();
    if(index==0) $(this).css({'background':'#ff7300','border-color':'#ff6000'});
    else if(index==4) $(this).parent().children().css({'background':'#ff7300','border-color':'#ff6000'});
    else{
        for(var i=0;i<=index;i++){
            $(this).parent().children().eq(i).css({'background':'#ff7300','border-color':'#ff6000'});
        }
    }
},function () {
    $(this).parent().children().css({'background':'none','border-color':'#e5e5e5'});
});
$('.content>p').hover(function () {
    var i=$(this).index();
    $('.content img').eq(i).css('transform','scale(1.1)');
},function () {
    var i=$(this).index();
    $('.content img').eq(i).css('transform','');
});
$('.ia dd').hover(function () {
    var i=$(this).index('.ia dd');
    console.log(i);
    $('.ia dd span').eq(i).css('color','#ff7300');
},function () {
    var i=$(this).index('.ia dd');
    $('.ia dd span').eq(i).css('color','#696969');
});