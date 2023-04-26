$(function () {

    var recommendTop = $(".recommend").offset().top;
    var flag = true; //节流阀
    // console.log(recommendTop);

    //电梯出现的函数；
    getToll();
    function getToll() {
        if ($(document).scrollTop() >= recommendTop) {
            $(".fixedtool").fadeIn();
        } else (
            $(".fixedtool").fadeOut()
        )
    }
    //点击特定的模块后直接跳到相应的板块
    $(".fixedtool li").each(function (i, ele) {

        $(this).click(function () {
            //变颜色
            flag = false;
            $(this).addClass("current").siblings().removeClass("current");
            // console.log($(".floor .w").eq(i).offset().top);
            // console.log(i);
            $("body , html").stop().animate({
                scrollTop: $(".floor .w").eq(i).offset().top
            }, function () {
                flag = true;
            })
        })
    })
    //首先是页面滚动到某个区域后就显示
    $(document).scroll(function () {
        getToll();
        //相应板块被选中后变换颜色
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            })
        }


    })





    //添加节流阀避免bug


})









































// $(function() {
//     // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
//     // 节流阀  互斥锁
//     var flag = true;
//     // 1.显示隐藏电梯导航
//     var toolTop = $(".recommend").offset().top;
//     toggleTool();

//     function toggleTool() {
//         if ($(document).scrollTop() >= toolTop) {
//             $(".fixedtool").fadeIn();
//         } else {
//             $(".fixedtool").fadeOut();
//         };
//     }

//     $(window).scroll(function() {
//         toggleTool();
//         // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名


//         if (flag) {
//             $(".floor .w").each(function(i, ele) {
//                 if ($(document).scrollTop() >= $(ele).offset().top) {
//                     console.log(i);
//                     $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

//                 }
//             })
//         }

//     });
//     // 2. 点击电梯导航页面可以滚动到相应内容区域
//     $(".fixedtool li").click(function() {
//         flag = false;
//         console.log($(this).index());
//         // 当我们每次点击小li 就需要计算出页面要去往的位置
//         // 选出对应索引号的内容区的盒子 计算它的.offset().top
//         var current = $(".floor .w").eq($(this).index()).offset().top;
//         // 页面动画滚动效果
//         $("body, html").stop().animate({
//             scrollTop: current
//         }, function() {
//             flag = true;
//         });
//         // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
//         $(this).addClass("current").siblings().removeClass();
//     })
// })