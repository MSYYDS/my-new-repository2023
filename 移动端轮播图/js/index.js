if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
// 第三次工作，我不信了，呜呜
//首先是浏览器加载执行
window.addEventListener('load', function () {
    //轮播图自动播放
    var focus = this.document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    var w = ul.children[0].offsetWidth;
    var index = 0;
    var timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);

    //每次动完我再判断
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            var translatex = -index * w;
            ul.style.transition = 'none';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            var translatex = -index * w;
            ul.style.transition = 'none';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else {
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }

        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');

    })

    //开始触摸事件
    var startX = 0;
    ul.addEventListener('touchstart', function (e) {
        clearInterval(timer);
        startX = e.targetTouches[0].pageX;
    })


    //触摸滑动事件，图片跟着动
    ul.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * w + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;
        e.preventDefault();
    })

    //触摸结束事件，图片滑到到某个位置
    var flag = true;//节流阀
    ul.addEventListener('touchend', function () {
        if (flag) {
            flag = false;
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--;
                } else {
                    index++
                }
                var translatex = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }

        //开启定时器；
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    })

    //返回顶部之作
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    var navTop = nav.offsetTop;

    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= navTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    })

    goBack.addEventListener('click', function () {
        window.scroll(0, 0);
    })
})










// //开始第二次工作，对！工作;好写完了，我傻了
// //首先是浏览器加载完成后执行
// window.addEventListener('load', function () {
//     //选中目标先做自动切换；并且小圆点自动跟随变化
//     var focus = document.querySelector('.focus');
//     var ul = focus.children[0];
//     var ol = focus.children[1];
//     //添加一个定时器
//     var w = ul.children[0].offsetWidth;
//     // console.log(w);
//     var index = 0;
//     var timer = setInterval(function () {
//         index++;
//         var translatex = -index * w;
//         ul.style.transition = 'all .3s';
//         ul.style.transform = 'translateX(' + translatex + 'px)';
//     }, 2000)

//     //每次页面停止后判断
//     ul.addEventListener('transitionend', function () {
//         if (index >= 3) {
//             index = 0;
//         } else if (index < 0) {
//             index = 2;
//         }
//         var translatex = -index * w;
//         ul.style.transition = 'none';
//         ul.style.transform = 'translateX(' + translatex + 'px)';

//         ol.querySelector('.current').classList.remove('current'); //移除属性不会写；
//         ol.children[index].classList.add('current');
//     })


//     //手指触摸事件
//     ul.addEventListener('touchstart', function (e) {
//         clearInterval(timer);
//         startX = e.targetTouches[0].pageX;
//     })

//     //手指滑动事件
//     ul.addEventListener('touchmove', function (e) {
//         moveX = e.targetTouches[0].pageX - startX;
//         var translatex = -index * w + moveX;
//         ul.style.transition = 'none';
//         ul.style.transform = 'translateX(' + translatex + 'px)';
//         e.preventDefault();
//         flag = true;
//     })


//     //手指结束事件
//     var flag = true;
//     ul.addEventListener('touchend', function () {
//         if (flag) {
//             flag = false;
//             if (Math.abs(moveX) > 50) {
//                 if (moveX > 0) {
//                     index--;
//                 } else if (moveX < 0) {
//                     index++;
//                 }
//                 var translatex = -index * w;
//                 ul.style.transition = 'all .3s';
//                 ul.style.transform = 'translateX(' + translatex + 'px)';
//             } else {
//                 var translatex = -index * w;
//                 ul.style.transition = 'all .1s';
//                 ul.style.transform = 'translateX(' + translatex + moveX + 'px)';
//             }
//         }


//         //手指停止触摸开启定时器；
//         clearInterval(timer);
//         timer = setInterval(function () {
//             index++;
//             var translatex = -index * w;
//             ul.style.transition = 'all .3s';
//             ul.style.transform = 'translateX(' + translatex + 'px)';
//         }, 2000)
//     })

//     //返回顶部
//     var nav = document.querySelector('nav');
//     var navTop = nav.offsetTop;
//     var goBack = document.querySelector('.goBack');

//     document.addEventListener('scroll', function () {
//         if (window.pageYOffset >= navTop) {
//             goBack.style.display = 'block';
//         } else {
//             goBack.style.display = 'none';
//         }
//     })

//     goBack.addEventListener('click', function () {
//         window.scroll(0, 0);
//     })


// })













































// //第一次写，速度好慢，因为不熟练，而且需要理解
// window.addEventListener('load', function () {
//     var focus = document.querySelector('.focus');
//     var ul = focus.querySelector('ul');
//     var ol = focus.querySelector('ol');
//     var index = 0;
//     var w = focus.offsetWidth;

//     //首先自动轮播
//     var timer = setInterval(function () {
//         index++;
//         var translatex = -index * w;
//         ul.style.transition = 'all .3s';
//         ul.style.transform = 'translateX(' + translatex + 'px)';
//     }, 2000);

//     //判断index，无缝循环
//     ul.addEventListener('transitionend', function () {
//         if (index >= 3) {
//             index = 0;
//             ul.style.transition = 'none';
//             var translatex = -index * w;
//             ul.style.transform = 'translateX(' + translatex + 'px)';

//         } else if (index < 0) {
//             index = 2;
//             ul.style.transition = 'none';
//             var translatex = -index * w;
//             ul.style.transform = 'translateX(' + translatex + 'px)';
//         }


//         //小圆点跟随移动
//         ol.querySelector('.current').classList.remove('current');
//         ol.children[index].classList.add('current');
//     })

//     var moveX = 0;
//     var x = 0;
//     //图片跟随触摸点移动
//     ul.addEventListener('touchstart', function (e) {
//         clearInterval(timer);
//         x = e.targetTouches[0].pageX;
//     })

//     ul.addEventListener('touchmove', function (e) {
//         moveX = e.targetTouches[0].pageX - x;
//         ul.style.transition = 'none';
//         var translatex = -index * w + moveX;
//         ul.style.transform = 'translateX(' + translatex + 'px)';
//         flag = true;
//         e.preventDefault();
//     })

//     var flag = true;//节流阀，哈哈哈，我自己想的，哇嘎嘎嘎；
//     ul.addEventListener('touchend', function () {
//         if (flag) {
//             flag = false;
//             if (Math.abs(moveX) > 50) {
//                 if (moveX > 0) {
//                     index--;
//                 } else {
//                     index++;
//                 }
//                 var translatex = -index * w;
//                 ul.style.transition = 'all .3s';
//                 ul.style.transform = 'translateX(' + translatex + 'px)';
//             } else {
//                 var translatex = -index * w;
//                 ul.style.transition = 'all .1s';
//                 ul.style.transform = 'translateX(' + translatex + 'px)';
//             }
//         }

//         clearInterval(timer);
//         timer = setInterval(function () {
//             index++;
//             var translatex = -index * w;
//             ul.style.transition = 'all .3s';
//             ul.style.transform = 'translateX(' + translatex + 'px)';
//         }, 2000)
//     })

//     var goBack = document.querySelector('.goBack');
//     var nav = document.querySelector('nav');
//     var search_index = document.querySelector('.search-index');
//     var search_index_Top = search_index.offsetHeight;
//     var navTop = nav.offsetTop;
//     document.addEventListener('scroll', function () {
//         if (window.pageYOffset >= navTop - search_index_Top) {
//             goBack.style.display = 'block';
//         } else {
//             goBack.style.display = 'none';
//         }
//     })

//     goBack.addEventListener('click', function () {
//         window.scroll(0, 0);

//     })



// })







// window.addEventListener('load', function () {
//     // alert(1);
//     // 1. 获取元素 
//     var focus = document.querySelector('.focus');
//     var ul = focus.children[0];
//     // 获得focus 的宽度
//     var w = focus.offsetWidth;
//     var ol = focus.children[1];
//     // 2. 利用定时器自动轮播图图片
//     var index = 0;
//     var timer = setInterval(function () {
//         index++;
//         var translatex = -index * w;
//         ul.style.transition = 'all .3s';
//         ul.style.transform = 'translateX(' + translatex + 'px)';
//     }, 2000);

//     // 等着我们过渡完成之后，再去判断 监听过渡完成的事件 transitionend 
//     ul.addEventListener('transitionend', function () {
//         // 无缝滚动
//         if (index >= 3) {
//             index = 0;
//             // console.log(index);
//             // 去掉过渡效果 这样让我们的ul 快速的跳到目标位置
//             ul.style.transition = 'none';
//             // 利用最新的索引号乘以宽度 去滚动图片
//             var translatex = -index * w;
//             ul.style.transform = 'translateX(' + translatex + 'px)';
//         } else if (index < 0) {
//             index = 2;
//             ul.style.transition = 'none';
//             // 利用最新的索引号乘以宽度 去滚动图片
//             var translatex = -index * w;
//             ul.style.transform = 'translateX(' + translatex + 'px)';
//         }
//         // 3. 小圆点跟随变化
//         // 把ol里面li带有current类名的选出来去掉类名 remove
//         ol.querySelector('.current').classList.remove('current');
//         // 让当前索引号 的小li 加上 current   add
//         ol.children[index].classList.add('current');
//     });

//     // 4. 手指滑动轮播图 
//     // 触摸元素 touchstart： 获取手指初始坐标
//     var startX = 0;
//     var moveX = 0; // 后面我们会使用这个移动距离所以要定义一个全局变量
//     var flag = false;
//     ul.addEventListener('touchstart', function (e) {
//         startX = e.targetTouches[0].pageX;
//         // 手指触摸的时候就停止定时器
//         clearInterval(timer);
//     });
//     // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
//     ul.addEventListener('touchmove', function (e) {
//         // 计算移动距离
//         moveX = e.targetTouches[0].pageX - startX;
//         // 移动盒子：  盒子原来的位置 + 手指移动的距离 
//         var translatex = -index * w + moveX;
//         // 手指拖动的时候，不需要动画效果所以要取消过渡效果
//         ul.style.transition = 'none';
//         ul.style.transform = 'translateX(' + translatex + 'px)';
//         flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
//         e.preventDefault(); // 阻止滚动屏幕的行为
//     });
//     // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
//     ul.addEventListener('touchend', function (e) {
//         if (flag) {
//             // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
//             if (Math.abs(moveX) > 50) {
//                 // 如果是右滑就是 播放上一张 moveX 是正值
//                 if (moveX > 0) {
//                     index--;
//                 } else {
//                     // 如果是左滑就是 播放下一张 moveX 是负值
//                     index++;
//                 }
//                 var translatex = -index * w;
//                 ul.style.transition = 'all .3s';
//                 ul.style.transform = 'translateX(' + translatex + 'px)';
//             } else {
//                 // (2) 如果移动距离小于50像素我们就回弹
//                 var translatex = -index * w;
//                 ul.style.transition = 'all .1s';
//                 ul.style.transform = 'translateX(' + translatex + 'px)';
//             }
//         }
//         // 手指离开的时候就重新开启定时器
//         clearInterval(timer);
//         timer = setInterval(function () {
//             index++;
//             var translatex = -index * w;
//             ul.style.transition = 'all .3s';
//             ul.style.transform = 'translateX(' + translatex + 'px)';
//         }, 2000);
//     });


//     // 返回顶部模块制作
//     var goBack = document.querySelector('.goBack');
//     var nav = document.querySelector('nav');
//     window.addEventListener('scroll', function () {
//         if (window.pageYOffset >= nav.offsetTop) {
//             goBack.style.display = 'block';
//         } else {
//             goBack.style.display = 'none';
//         }
//     });
//     goBack.addEventListener('click', function () {
//         window.scroll(0, 0);
//     })
// })