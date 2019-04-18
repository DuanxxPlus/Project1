var flagflag=true;
$('article>form>img').hover(function () {
    $(this).attr('src','../images/order_add2.png');
},function () {
    $(this).attr('src','../images/order_add.png');
});
for(var ind=0;ind<3;ind++){
    $('input.art_input').eq(ind).blur(function () {
        var i=$(this).index('input.art_input');
        var b1,b2='<img src="../images/order_blur2.png" alt="">';
        switch (i) {
            case 0:
                b1='<img src="../images/order_blur.png" alt="">请填写收货人姓名\n';
                if(!$(this).val()){
                    $('.art_blur').eq(i).html(b1);
                }
                else{
                    $('.art_blur').eq(i).html(b2);
                }
                break;
            case 1:
                var v='';
                b1='<img src="../images/order_blur.png" alt="">请选择所在地区\n';
                if(!$(this).val()){
                    $('.art_blur').eq(i).html(b1);
                }
                else{
                    v=$(this).val();
                    var flag=false;
                    for(var ii=0;ii<v.length;ii++){
                        if(isNaN(parseInt(v.charAt(ii)))){
                            flag=true;break;
                        }
                    }
                    flag?$('.art_blur').eq(i).html(b2):$('.art_blur').eq(i).html(b1);
                }
                break;
            case 2:
                b1='<img src="../images/order_blur.png" alt="">请正确填写邮政编码\n';
                var v=$(this).val();
                if(v&&v.length==6){
                    var flag=true;
                    for(var ii=0;ii<v.length;ii++){
                        if(isNaN(parseInt(v.charAt(ii)))){
                            flag=false;break;
                        }
                    }
                    flag?$('.art_blur').eq(i).html(b2):$('.art_blur').eq(i).html(b1);
                }
                else if(!v) $('.art_blur').eq(i).html(b2);
                else $('.art_blur').eq(i).html(b1);
                break;
        }
        $('.art_blur').eq(i).show();
    });
}
for(var ind=3;ind<7;ind++){
    $('input.art_input').eq(ind).blur(function () {
        $('article>form>b,article>form>u').hide();
        var flag=true,flag0;
        for(var i=3;i<7;i++){
            if($('input.art_input').eq(i).val()){
                flag=false;
                break;
            }
        }
        if(flag){
            $('.art_blur').eq(3).html('<img src="../images/order_blur.png" alt="">电话和手机至少填写一项\n');
            $('.art_blur').eq(3).width(146);
            $('.art_blur').eq(3).show();
            $('.art_blur').eq(4).hide();
        }
        else{
            var v0=$('input.art_input').eq(3).val(),b;
            if(v0){
                flag0=true;
                for(var j=0;j<v0.length;j++){
                    if(isNaN(parseInt(v0.charAt(i)))){
                        flag0=false;
                        break;
                    }
                }
                if(flag0&&v0.length==11) b='<img src="../images/order_blur2.png" alt="">';
                else b='<img src="../images/order_blur.png" alt="">请填写有效的手机号码\n';
                $('.art_blur').eq(3).html(b);
                $('.art_blur').eq(3).width(134);
            }
            else $('.art_blur').eq(3).html('');
            $('.art_blur').eq(3).show();

            var flag1,flag2,flag3=true;
            var v1=$('input.art_input').eq(4).val();
            var v2=$('input.art_input').eq(5).val();
            var v3=$('input.art_input').eq(6).val();
            var flag11=true,flag21=true;
            if(v1.length==4||v1.length==3){
                for(var i=0;i<v1.length;i++) {
                    if (isNaN(parseInt(v1.charAt(i)))) {
                        flag11 = false;
                        break;
                    }
                }
                flag1=flag11;
            }
            else flag1=false;
            if(v2.length==7||v2.length==8){
                for(var i=0;i<v1.length;i++) {
                    if (isNaN(parseInt(v1.charAt(i)))) {
                        flag21 = false;
                        break;
                    }
                }
                flag2=flag21;
            }
            else flag2=false;
            for(var i=0;i<v3.length;i++) {
                if (isNaN(parseInt(v3.charAt(i)))) {
                    flag3 = false;
                    break;
                }
            }
            if(flag1&&flag2&&flag3) b='<img src="../images/order_blur2.png" alt="">';
            else b='<img src="../images/order_blur.png" alt="">请填写正确的国内电话号码，如87582688';
            if(!(!v1&&!v2&&!v3)){
                $('.art_blur').eq(4).html(b);
                $('.art_blur').eq(4).show();
            }
            else{
                $('.art_blur').eq(4).hide();
            }
        }
    });
}
$('#detailAddress').blur(function () {
    var v=$(this).val();
    var b,flag;
    if(v&&v.length>1) b='<img src="../images/order_blur2.png" alt="">';
    else if(v){
        b='<img src="../images/order_blur.png" alt="">详细地址必须大于等于二个字\n';
        flag=true;
    }
    else{
        b='<img src="../images/order_blur.png" alt="">请填写详情地址\n';
        flag=false;
    }
    $('#detailAddressBlur').html(b);
    $('#detailAddressBlur').width(flag?171:98);
    $('#detailAddressBlur').show();
});