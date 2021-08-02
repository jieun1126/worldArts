
$(function(){

    $('nav>ul>li').mouseenter(function(){
        $('.submenu>li').stop().slideDown(100);
    });
    // .mouseleave > 마우스가 선택한 요소에서 나갔을때 
    // .slideUp > 선택 요소를 말아올리듯 숨김
    $('nav>ul>li').mouseleave(function(){
        $('.submenu>li').stop().slideUp(100);
    });


    var x = 0;
    setInterval (function(){
        if(x<2){
        x++;
        }else {
            x = 0;
        }
        var sp = x*(-300)+"px";
        $(".sliderList").animate({top:sp},400);
    },3000);
 });
