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
    div.style.background="url(\"images/cxt"+(num+1)+"over.png\")";
    a.style.color="#ff7300";
}
function headerDiv4Out(num) {
    var div=document.getElementsByClassName('header_div4_ul')[0].children[num].children[0];
    var a=document.getElementsByClassName('header_div4_ul')[0].children[num].children[1];
    div.style.background="url(\"images/cxt"+(num+1)+".png\")";
    a.style.color="#555555";
}
var bannernum=1,bannerflag=false;
function bannerScroll() {
    if(bannerflag){
        if(bannernum==5) bannernum=1;
        else bannernum++;
        bannerflag=false;
    }
    if(bannernum<5) bannernum++;
    else bannernum=1;
    var img=document.getElementsByClassName('banner')[0].children[0].children[0];
    img.setAttribute('src',"images/banner"+bannernum+".png");
    var main_=document.getElementsByTagName('main')[0];
    main_.setAttribute('class',"main"+bannernum);
    var li=document.getElementsByClassName('banner_menu')[0].children;
    for(var i=0;i<li.length;i++){
        li[i].style.background="rgba(255,84,0,0)";
    }
    li[bannernum-1].style.background="rgba(255,84,0,1)";
}
var bannerscroll=window.setInterval(bannerScroll,4000);
function bannerOver() {
    window.clearInterval(bannerscroll);
    document.getElementsByClassName('banner_previous')[0].style.transform="translate(55px,0px)";
    document.getElementsByClassName('banner_next')[0].style.transform="translate(-55px,0px)";
}
function bannerOut() {
    bannerscroll=window.setInterval(bannerScroll,4000);
    document.getElementsByClassName('banner_previous')[0].style.transform="translate(-55px,0px)";
    document.getElementsByClassName('banner_next')[0].style.transform="translate(55px,0px)";
}
function bannerPrevious() {
    if(bannernum==1) bannernum=5;
    else bannernum--;
    var img=document.getElementsByClassName('banner')[0].children[0].children[0];
    img.setAttribute('src',"images/banner"+bannernum+".png");
    var main_=document.getElementsByTagName('main')[0];
    main_.setAttribute('class',"main"+bannernum);
    var li=document.getElementsByClassName('banner_menu')[0].children;
    for(var i=0;i<li.length;i++){
        li[i].style.background="rgba(255,84,0,0)";
    }
    li[bannernum-1].style.background="rgba(255,84,0,1)";
}
function bannerNext() {
    if(bannernum==5) bannernum=1;
    else bannernum++;
    var img=document.getElementsByClassName('banner')[0].children[0].children[0];
    img.setAttribute('src',"images/banner"+bannernum+".png");
    var main_=document.getElementsByTagName('main')[0];
    main_.setAttribute('class',"main"+bannernum);
    var li=document.getElementsByClassName('banner_menu')[0].children;
    for(var i=0;i<li.length;i++){
        li[i].style.background="rgba(255,84,0,0)";
    }
    li[bannernum-1].style.background="rgba(255,84,0,1)";
}
function bannerMenu(num) {
    var li=document.getElementsByClassName('banner_menu')[0].children;
    var img=document.getElementsByClassName('banner')[0].children[0].children[0];
    var main_=document.getElementsByTagName('main')[0];
    for(var i=0;i<li.length;i++){
        li[i].style.background="rgba(255,84,0,0)";
    }
    li[num].style.background="rgba(255,84,0,1)";
    img.setAttribute('src',"images/banner"+(num+1)+".png");
    main_.setAttribute('class',"main"+(num+1));
    bannernum=num+1;
    bannerflag=true;
}
function srEnter(num) {
    document.getElementsByClassName('sr_content')[num].children[1].style.transform="scale(1.05)";
}
function srLeave(num) {
    document.getElementsByClassName('sr_content')[num].children[1].style.transform="";
}
function byEnter(tag) {
    tag.children[0].style.transform="scale(1.1)";
    tag.parentNode.style.borderColor="#ff7300";
}
function byLeave(tag) {
    tag.children[0].style.transform="";
    tag.parentNode.style.borderColor="#f2f2f2";
}