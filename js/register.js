function headerOver(num) {
    var ul=document.getElementById('header_ul');
    var li=ul.children;
    if(num==3){
        li[num].children[0].className="star_over";
        li[num].children[1].style.color="#ff7300";
        li[num].children[2].className="header_up";
    }
    else if(num==2){
        li[num].children[0].style.color="#ff7300";
        li[num].children[2].className="header_up";
    }
    else{
        li[num].children[0].style.color="#ff7300";
        li[num].children[1].className="header_up";
    }
    if(num!=0){
        li[num].style=
            "height: 24px;" +
            "margin-top: 0;" +
            "padding: 5px 8px 0;"+
            "border-left: 1px solid #eeeeee;"+
            "z-index: 3";
        li[num-1].style="border-right: 1px solid #ffffff";
        document.getElementsByClassName('header_div'+num)[0].style.display="block";
    }
}
function headerOut(num) {
    var ul=document.getElementById('header_ul');
    var li=ul.children;
    if(num==3){
        li[num].children[0].className="star";
        li[num].children[1].style.color="#555555";
        li[num].children[2].className="";
    }
    else if(num==2){
        li[num].children[0].style.color="#555555";
        li[num].children[2].className="";
    }
    else{
        li[num].children[0].style.color="#555555";
        li[num].children[1].className="";
    }
    if(num!=0){
        li[num].style=
            "height: 17px;" +
            "margin-top: 5px;" +
            "padding: 0 8px;"+
            "border-left: 1px solid #fff;"+
            "z-index: 1";
        li[num-1].style="border-right: 1px solid #eeeeee";
        document.getElementsByClassName('header_div'+num)[0].style.display="none";
    }
}
function rbLoginOver() {
    document.getElementsByClassName('redbageover')[0].style.display="block";
}
function rbLoginOut() {
    document.getElementsByClassName('redbageover')[0].style.display="none";
}
function headerDiv4Over(num) {
    var div=document.getElementsByClassName('header_div4_ul')[0].children[num].children[0];
    var a=document.getElementsByClassName('header_div4_ul')[0].children[num].children[1];
    div.style.background="url(../images/cxt"+(num+1)+"over.png)";
    a.style.color="#ff7300";
}
function headerDiv4Out(num) {
    var div=document.getElementsByClassName('header_div4_ul')[0].children[num].children[0];
    var a=document.getElementsByClassName('header_div4_ul')[0].children[num].children[1];
    div.style.background="url(../images/cxt"+(num+1)+".png)";
    a.style.color="#555555";
}