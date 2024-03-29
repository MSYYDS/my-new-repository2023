$(function () {
    //两个全选按钮的操作
    $(".checkall").click(function () {
        console.log($(this).prop("checked"));
        $(".j-checkbox , .checkall").prop("checked", $(this).prop("checked")).parents(".cart-item").addClass("check-cart-item");
        if ($(".j-checkbox , .checkall").prop("checked")) {
            $(".j-checkbox , .checkall").parents(".cart-item").addClass("check-cart-item");
        } else (
            $(".j-checkbox , .checkall").parents(".cart-item").removeClass("check-cart-item")
        )
    })

    //单个按钮的操作
    $(".j-checkbox").click(function () {
        // console.log($(".j-checkbox").length);
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".j-checkbox , .checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })

    //然后是购买数量的控制
    $(".increment").click(function () {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        // console.log($(this).parent().parent().siblings().eq(2).text());

        //单价随数量增加变化
        var p = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        // console.log(p);
        var price = (n * p).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price);
        getSum();
    })

    $(".decrement").click(function () {

        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);

        //单价随数量减少变化
        var p = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        // console.log(p);
        // console.log($(this).parents(".p-num").siblings(".p-price").html());
        var price = (n * p).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price);
        getSum();
    })

    //用户输入，修改n；
    $(".itxt").change(function () {
        var n = $(".itxt").val();
        console.log(n);
        var p = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        var price = (n * p).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price);
        getSum();
    })

    //接着就是总和，这里因为出现变化就得总和一次，所以封装函数好一些；
    getSum();
    function getSum() {
        var count = 0; //这里算总的数量；
        var prices = 0;//这里算总的价钱；
        $(".itxt").each(function (i, ele) {
            // console.log(i);
            // console.log(ele);
            count += parseInt($(ele).val());
        })
        $(".p-sum").each(function (i, ele) {
            prices += parseFloat($(ele).text().substr(1));
        })
        $(".price-sum em").html("￥" + prices.toFixed(2));
        $(".amount-sum em").html(count);

    }

    //删除商品模块；
    $(".p-action").click(function () {
        $(this).parents(".cart-item").remove();
        getSum();
    })
    $(".remove-batch").click(function () {
        if ($(".j-checkbox:checked")) {
            $(".j-checkbox:checked").parents(".cart-item").remove();
        }
        getSum();
    })
    $(".clear-all").click(function () {
        $(".cart-item-list").empty();
        getSum();
    })








})




















































// $(function () {
//     // 1. 全选 全不选功能模块
//     // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
//     // 事件可以使用change
//     $(".checkall").change(function () {
//         // console.log($(this).prop("checked"));
//         $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
//         if ($(this).prop("checked")) {
//             // 让所有的商品添加 check-cart-item 类名
//             $(".cart-item").addClass("check-cart-item");
//         } else {
//             // check-cart-item 移除
//             $(".cart-item").removeClass("check-cart-item");
//         }
//     });
//     // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
//     $(".j-checkbox").change(function () {
//         // if(被选中的小的复选框的个数 === 3) {
//         //     就要选中全选按钮
//         // } else {
//         //     不要选中全选按钮
//         // }
//         // console.log($(".j-checkbox:checked").length);
//         // $(".j-checkbox").length 这个是所有的小复选框的个数
//         if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
//             $(".checkall").prop("checked", true);
//         } else {
//             $(".checkall").prop("checked", false);
//         }
//         if ($(this).prop("checked")) {
//             // 让当前的商品添加 check-cart-item 类名
//             $(this).parents(".cart-item").addClass("check-cart-item");
//         } else {
//             // check-cart-item 移除
//             $(this).parents(".cart-item").removeClass("check-cart-item");
//         }
//     });
//     // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
//     $(".increment").click(function () {
//         // 得到当前兄弟文本框的值
//         var n = $(this).siblings(".itxt").val();
//         // console.log(n);
//         n++;
//         $(this).siblings(".itxt").val(n);
//         // 3. 计算小计模块 根据文本框的值 乘以 当前商品的价格  就是 商品的小计
//         // 当前商品的价格 p
//         var p = $(this).parents(".p-num").siblings(".p-price").html();
//         // console.log(p);
//         p = p.substr(1);
//         console.log(p);
//         var price = (p * n).toFixed(2);
//         // 小计模块
//         // toFixed(2) 可以让我们保留2位小数
//         $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
//         getSum();
//     });
//     $(".decrement").click(function () {
//         // 得到当前兄弟文本框的值
//         var n = $(this).siblings(".itxt").val();
//         if (n == 1) {
//             return false;
//         }
//         // console.log(n);
//         n--;
//         $(this).siblings(".itxt").val(n);
//         // var p = $(this).parent().parent().siblings(".p-price").html();
//         // parents(".p-num") 返回指定的祖先元素
//         var p = $(this).parents(".p-num").siblings(".p-price").html();
//         // console.log(p);
//         p = p.substr(1);
//         console.log(p);
//         // 小计模块
//         $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
//         getSum();
//     });
//     //  4. 用户修改文本框的值 计算 小计模块
//     $(".itxt").change(function () {
//         // 先得到文本框的里面的值 乘以 当前商品的单价
//         var n = $(this).val();
//         // 当前商品的单价
//         var p = $(this).parents(".p-num").siblings(".p-price").html();
//         // console.log(p);
//         p = p.substr(1);
//         $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
//         getSum();
//     });
//     // 5. 计算总计和总额模块
//     getSum();

//     function getSum() {
//         var count = 0; // 计算总件数
//         var money = 0; // 计算总价钱
//         $(".itxt").each(function (i, ele) {
//             count += parseInt($(ele).val());
//         });
//         $(".amount-sum em").text(count);
//         $(".p-sum").each(function (i, ele) {
//             money += parseFloat($(ele).text().substr(1));
//         });
//         $(".price-sum em").text("￥" + money.toFixed(2));
//     }
//     // 6. 删除商品模块
//     // (1) 商品后面的删除按钮
//     $(".p-action a").click(function () {
//         // 删除的是当前的商品
//         $(this).parents(".cart-item").remove();
//         getSum();
//     });
//     // (2) 删除选中的商品
//     $(".remove-batch").click(function () {
//         // 删除的是小的复选框选中的商品
//         $(".j-checkbox:checked").parents(".cart-item").remove();
//         getSum();
//     });
//     // (3) 清空购物车 删除全部商品
//     $(".clear-all").click(function () {
//         $(".cart-item").remove();
//         getSum();
//     })
// })