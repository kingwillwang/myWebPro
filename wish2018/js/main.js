var imgs = [
    "./img/wish_1.png",
    "./img/wish_2.png",
    "./img/wish_3.png",
    "./img/wish_4.png",
    "./img/wish_5.png",
    "./img/wish_6.png",
    "./img/wish_7.png",
    "./img/wish_8.png",
    "./img/wish_9.png",
    "./img/wish_10.png",
    "./img/wish_11.png",
    "./img/wish_12.png",
    "./img/wish_13.png",
    "./img/wish_14.png",
    "./img/wish_15.png",
    "./img/wish_16.png",
    "./img/wish_17.png",
    "./img/wish_18.png",
    "./img/wish_19.png",
    "./img/wish_20.png",
    "./img/wish_21.png",
    "./img/wish_22.png",
    "./img/wish_23.png",
    "./img/wish_24.png",
    "./img/wish_25.png",
    "./img/wish_26.png",
    "./img/wish_27.png",
    "./img/wish_28.png",
    "./img/wish_29.png",
    "./img/wish_30.png",
    "./img/wish_31.png",
    "./img/wish_32.png",
    "./img/wish_33.png",
    "./img/wish_34.png",
    "./img/wish_35.png",
    "./img/wish_36.png",
    "./img/wish_37.png",
    "./img/wish_38.png",
    "./img/wish_39.png",
    "./img/wish_40.png"
];


var time = null;
var sex;

window.onload = init;

//初始化
function init() {
    loadImg();
    chooseMan();
    chooseWoman();
    checkName();
}

//预加载图片
function loadImg() {
    //获取数组长度，进度元素，设置页数，进度初始值
    var index = 0,
        len = imgs.length,
        count = 0,
        $progress = $('.loading');

    //遍历数组，获取数组内全部路径
    $.each(imgs, function(i,src) {

        //声明一个图像对象
        var imgObj = new Image();

        //设置所有图片在加载中或者加载失败时触发时间
        $(imgObj).on("load error",function(){

            //设置进度显示数字（因为each会自动循环 每次都会用获得数组数量除以总数从而获得百分比）
            $progress.html(Math.round((count + 1) / len * 100) + "%");

            //如果循环次数等于数组长度 即代表全部图片加载完毕
            if(count >= len - 1){
                wait();
            }

            //每一次循环加1
            count++;
        });

        //设置所有图片的路径等于数组内的路径
        imgObj.src = src;
    });
}

//图片加载完成后等待0.5秒
function wait() {
    clearTimeout(time);
    time = setTimeout(doAction, 500);
}

//动画效果
function timing() {
    clearTimeout(time);
    time = setTimeout(function() {
        $('#p1_muyu_change').removeClass('p1_muyu').addClass('p1_muyu_after');
    },2700);
}

//页面跳转
function doAction() {
    $('#pageContent1').css('display' ,'none');
    $('#pageContent2').css('display' ,'block');
    $('#page1').css('display' ,'block');
    timing();
}

function chooseMan() {
    $('.p1_left').click(function(event){
        $('#woman').prop('checked',false);
        $('#man').prop('checked',true);
        $('.radio-bg-left').css('background-color','#d60b3b');
        $('.radio-bg-right').css('background-color','#fff');
        event.stopPropagation();
        sex = 1;
    });
}

function chooseWoman() {
    $(".p1_right").click(function(event){
        $('#man').prop('checked',false);
        $('#woman').prop('checked',true);
        $('.radio-bg-right').css('background-color','#d60b3b');
        $('.radio-bg-left').css('background-color','#fff');
        event.stopPropagation();
        sex = 2;
    });
}

function checkName() {
    $('.p1_muyu').click(function(){
        $('#p1_mugun_click').removeClass('p1_mugun').addClass('p1_mugun_move');
    });
}


// //设置上一张下一张触发事件
// $(".btn").on("click",function(){
//     if("prev" === $(this).data("control")){
//
//         //上一张index变量先-1再和0比较大小
//         index = Math.max(0,--index);
//
//         //可以选择三元或者上面的写法处理
// //                      index = (--index<=0)?0:--index;
//     }else{
//
//         //下一张index变量先+1再和0比较大小
//         index = Math.min(len - 1, ++index);
//     }
//
//     //设置页面标题页数
//     document.title = (index + 1) + "/" + len;
//
//     //设置每一次点击获取对应图片路径
//     $("#img").attr("src",imgs[index]);
// });