$('#order_number').hover(function () {
    $(this).css('border-color','#ff7300');
    $('.order_content>button').eq(0).css('border-right','1px solid #ff7300');
    $('.order_content>button').eq(1).css('border-left','1px solid #ff7300');
},function () {
    $(this).css('border-color','#dddddd');
    $('.order_content>button').eq(0).css('border-right','');
    $('.order_content>button').eq(1).css('border-left','');
});
$('.order_content>button').eq(0).click(function () {
    var v=parseInt($('#order_number').val());
    if(v>0){
        $('#order_number').val(v-1);
        v=(v-1)*0.1;
        v=v.toFixed(2);
        $('.order_allPrice').html(v);
        $('.summary_allPrice').html('货品总金额：'+v+'元');
        $('.summary_shouldPayPrice').html(v);
    }
});
$('.order_content>button').eq(1).click(function () {
    var v=parseInt($('#order_number').val());
    $('#order_number').val(v+1);
    v=(v+1)*0.1;
    v=v.toFixed(2);
    $('.order_allPrice').html(v);
    $('.summary_allPrice').html('货品总金额：'+v+'元');
    $('.summary_shouldPayPrice').html(v);
});
$('#order_number').keyup(function () {
    var v=$(this).val().replace(/\D/gi,'');
    $(this).val(v);
});
$('#order_number').blur(function () {
    if(!$(this).val()) $(this).val('0');
    var v=($(this).val()*0.1).toFixed(2);
    $('.order_allPrice').html(v);
    $('.summary_allPrice').html('货品总金额：'+v+'元');
    $('.summary_shouldPayPrice').html(v);
});