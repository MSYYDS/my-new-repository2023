//首先明确，这是一个的左部返回函数
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (target == obj.offsetLeft) {
            clearInterval(obj.timer)
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}




















// function animate(obj, target, callback) {
//     clearInterval(obj.timer);
//     obj.timer = setInterval(function () {
//         var step = (target - obj.offsetLeft) / 10;
//         step = step > 0 ? Math.ceil(step) : Math.floor(step);
//         if (obj.offsetLeft == target) {

//             clearInterval(obj.timer);
//             // if(callback){
//             //     callback();
//             // }
//             callback && callback();//与上边一摸一样的的函数，不过写法更高级，也就是利用了逻辑中断；
//         }

//         obj.style.left = obj.offsetLeft + step + 'px';
//     }, 15)
// }