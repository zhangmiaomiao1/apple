$(function(){
    //顶部导航小屏的下拉菜单
    var flag=true;
  $(".left").click(function(){
      if(flag){
          $(".left1").css({"transform":"translate(0,6px) rotate(45deg)"})
          $(".left2").css({"transform":"translate(0,-3px) rotate(-45deg)"})
          flag=false;
          $(".menu").css({"height":"500px","visibility":"visible"})
          $(".menu a" ).each(function(index,obj){
              $(obj).css("transition","all 0.1s ease "+index*0.05+"s")
          }).css({"opacity":1,"transform":"rotateY(0deg) scale(1,1)"})
          $(".small").css({"background":"#000"})
          $(".small .left").css({"border": "1px solid #000"})
          $(".right").css({"display":"none"})
      }else{
          $(".left1").css({"transform":"none"})
          $(".left2").css({"transform":"none"})
          flag=true;
          $(".menu").css({"height":"500px","visibility":"hidden"})

          $(".menu a" ).each(function(index,obj){
              $(obj).css("transition","none")
          }).css({"opacity":1,"transform":"rotateY(0deg) scale(1,1)"})
          $(".right").css({"display":"block"})
      }
  })

    //底部点击效果
    $(".slianjie").click(function(){
        var index=$(".slianjie").index(this)
        if(flag){
            $(".shizi").eq(index).css({"transform":"rotate(45deg)"})
            $(".slidelj").eq(index).css("height","auto")
            flag=false;
        }else{
            $(".shizi").eq(index).css({"transform":"rotate(0deg)"})
            $(".slidelj").eq(index).css("height",0)
            flag=true;
        }

    })
    //轮播
    //next 为当前屏幕的
    //now为滑到左边的
    var now=0;
    var next=0;
    $(".con").css("left","100%").eq(0).css("left",0);
    function move(){
        next++;
        if(next==$(".con").length){
            next=0;
        }
        $(".con").eq(now).animate({left:"-100%"});
        $(".con").eq(next).css("left","100%");
        $(".con").eq(next).animate({left:0});
        $(".btn li").css({"background":"#999",border:"none"}).eq(next).css({"background": "#fff", border: "1px solid #0070c9"})
        now=next;
    }
    var t=setInterval(move,2000)
    $(".leftbtn").click(function(){
        next--;
        if(next<=-1){
            next=($(".con").length)-1;
        }
        $(".con").eq(now).animate({left:"100%"});
        $(".con").eq(next).css("left","-100%");
        $(".con").eq(next).animate({left:0});
        now=next;

    })
    //点击小圆点
    $(".btn li").click(function(){
        var index=$(".btn li").index(this);
        next=index;
        $(".con").eq(now).animate({left:"-100%"});
        $(".con").eq(next).css("left","100%");
        $(".con").eq(next).animate({left:0});
        $(".btn li").css({"background":"#999",border:"none"}).eq(next).css({"background": "#fff", border: "1px solid #0070c9"})
        //让now也跟着next的数字变化
        now=next;
    })
    $(".rightbtn").click(function(){
        move();
    })
    $(".banner").hover(function(){
        clearInterval(t);
        $(".leftbtn").fadeIn();
        $(".rightbtn").fadeIn();

    },function(){
        t=setInterval(move,2000);
        $(".leftbtn").fadeOut();
        $(".rightbtn").fadeOut();
    })

})