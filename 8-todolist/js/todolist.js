// giao！
$(function () {
    load();
    $("#title").keydown(function (e) {
        if (e.keyCode === 13) {
            if ($(this).val() === "") {
                alert("sir，what question？");
            } else {
                // console.log($(this).val());
                var local = getData();
                local.push({ title: $(this).val(), done: false })
                savaData(local);
                $(this).val("");
                load();
            }
        }
    })

    function getData() {
        var data = localStorage.getItem("todolist");
        if (data === null) {
            return [];
        } else {
            return JSON.parse(data);
        }
    }

    function savaData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }


    function load() {
        var local = getData();
        $("ol,ul").empty();
        var todoCount = 0;
        var doneCount = 0;
        $.each(local, function (i, ele) {
            // console.log(i);
            if (ele.done) {
                doneCount++;
                $("ul").prepend("<li><input type='checkbox' checked='checked'><p>" + ele.title + "</p><a href='javascript:;' id='" + i + "'></a></li>")

            } else {
                todoCount++;
                $("ol").prepend("<li><input type='checkbox'><p>" + ele.title + "</p><a href='javascript:;' id='" + i + "'></a></li>")

            }
        })
        // console.log(doneCount);
        // console.log(todoCount);
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }



    $("ul,ol").on("click", "a", function () {
        var local = getData();
        var index = $(this).attr("id");
        // console.log(index);
        local.splice(index, 1);
        savaData(local);
        load();
    })

    $("ul,ol").on("click", "input", function () {
        var local = getData();
        var index = $(this).siblings("a").attr("id");
        // console.log(index);
        // console.log($(this).prop("checked"));
        local[index].done = $(this).prop("checked");
        savaData(local);
        load();

    })
})








































// // 不得不承认，我是废物
// $(function () {
//     load();
//     // var todolist = [];
//     // $(todolist).push("233");
//     //首先是我要能够点击得到enter就能保存数据
//     $("#title").keydown(function (e) {
//         // console.log(e.keyCode);
//         if (e.keyCode === 13) {
//             if ($(this).val() === "") {
//                 alert("请输入您要的操作");
//             } else {
//                 var toDoList = { title: $("#title").val(), done: false };
//                 var local = getData();//首先获得本地数据
//                 // local.push({ title: $("#title").val(), done: false });
//                 local.push(toDoList);//加入数据
//                 // console.log(local);
//                 savaData(local);//保存数据；
//                 // console.log(localStorage.getItem("todolist"));
//                 $(this).val("");
//                 load();
//             }
//         }
//     })

//     //获取数据
//     // getData();
//     function getData() {
//         var data = localStorage.getItem("todolist");
//         if (data === null) {
//             return [];
//         } else {
//             return JSON.parse(data);
//         }
//     }
//     //存储数据
//     // console.log(data);
//     // savaData();
//     function savaData(data) {
//         localStorage.setItem("todolist", JSON.stringify(data));
//     }
//     //数据在页面打开就能自动渲染

//     function load() {
//         // console.log(1);
//         var local = getData();
//         $("ol").empty();
//         $.each(local, function (i, ele) {
//             // console.log(i);
//             // console.log(ele.done);
//             if (ele.done) {
//                 $("ul").prepend("<li><input type = 'checkbox' checked = checked ><p>" + ele.title + "</p> <a href='javascript:;'  id='" + i + "'></a></li>")
//             } else {
//                 $("ol").prepend("<li ><input type = 'checkbox' checked = checked ><p>" + ele.title + "</p> <a href='javascript:;' id='" + i + "'></a></li>")
//             }
//         })
//     }
//     //每次保存的数据都能够自动创建一行
//     //点击相应的小圆点就能删除相应的行

//     // $("li").click(function () {
//     //     console.log($(this).index());;
//     // })

//     $("ol , ul").on("click", "a", function () {
//         var local = getData();
//         var index = $(this).attr("id");
//         console.log(index);
//         local.splice(index, 1);
//         savaData(local);
//         load();
//     })

//     //进行中的按钮选择后可以实现将进行中一行的改变为完成的
//     //
// })









































// $(function() {
//     // alert(11);
//     // 1. 按下回车 把完整数据 存储到本地存储里面
//     // 存储的数据格式  var todolist = [{title: "xxx", done: false}]
//     load();
//     $("#title").on("keydown", function(event) {
//         if (event.keyCode === 13) {
//             if ($(this).val() === "") {
//                 alert("请输入您要的操作");
//             } else {
//                 // 先读取本地存储原来的数据
//                 var local = getDate();
//                 // console.log(local);
//                 // 把local数组进行更新数据 把最新的数据追加给local数组
//                 local.push({ title: $(this).val(), done: false });
//                 // 把这个数组local 存储给本地存储
//                 saveDate(local);
//                 // 2. toDoList 本地存储数据渲染加载到页面
//                 load();
//                 $(this).val("");
//             }
//         }
//     });
//     // 3. toDoList 删除操作
//     $("ol, ul").on("click", "a", function() {
//         // alert(11);
//         // 先获取本地存储
//         var data = getDate();
//         console.log(data);
//         // 修改数据
//         var index = $(this).attr("id");
//         console.log(index);
//         data.splice(index, 1);
//         // 保存到本地存储
//         saveDate(data);
//         // 重新渲染页面
//         load();
//     });
//     // 4. toDoList 正在进行和已完成选项操作
//     $("ol, ul").on("click", "input", function() {
//         // alert(11);
//         // 先获取本地存储的数据
//         var data = getDate();
//         // 修改数据
//         var index = $(this).siblings("a").attr("id");
//         console.log(index);
//         // data[?].done = ?
//         data[index].done = $(this).prop("checked");
//         console.log(data);

//         // 保存到本地存储
//         saveDate(data);
//         // 重新渲染页面
//         load();
//     });
//     // 读取本地存储的数据
//     function getDate() {
//         var data = localStorage.getItem("todolist");
//         if (data !== null) {
//             // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
//             return JSON.parse(data);
//         } else {
//             return [];
//         }
//     }
//     // 保存本地存储数据
//     function saveDate(data) {
//         localStorage.setItem("todolist", JSON.stringify(data));
//     }
//     // 渲染加载数据
//     function load() {
//         // 读取本地存储的数据
//         var data = getDate();
//         console.log(data);
//         // 遍历之前先要清空ol里面的元素内容
//         $("ol, ul").empty();
//         var todoCount = 0; // 正在进行的个数
//         var doneCount = 0; // 已经完成的个数
//         // 遍历这个数据
//         $.each(data, function(i, n) {
//             // console.log(n);
//             if (n.done) {
//                 $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
//                 doneCount++;
//             } else {
//                 $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
//                 todoCount++;
//             }

//         });
//         $("#todocount").text(todoCount);
//         $("#donecount").text(doneCount);

//     }

// })