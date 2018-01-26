window.onload = function () {

    console.log("网页可见区域宽：" + document.body.clientWidth);

    console.log("网页可见区域高：" + document.body.clientHeight);

    console.log("网页可见区域宽（包括边线的宽）：" + document.body.offsetWidth);

    console.log("网页可见区域高（包括边线的高）：" + document.body.offsetHeight);

    console.log("网页正文全文宽：" + document.body.scrollWidth);

    console.log("网页正文全文高：" + document.body.scrollHeight);

    console.log("网页被卷去的高：" + document.body.scrollTop);

    console.log("网页被卷去的左：" + document.body.scrollLeft);




    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    //设置监听，当音乐播放停止，自动停止旋转效果
    audio.addEventListener("ended", function (event) {
        // music.setAttribute("class", ""); //安卓4.4之前版本
        music.style.animationPlayState = "paused";
        music.style.webkitAnimationPlayState = "paused";
    }, false);

    //点击播放（停止）音乐，旋转效果也随之改变
    //鼠标点击
    // music.onclick = function () {
    //     if (audio.paused) {
    //         audio.play();
    //         // this.setAttribute("class", "play"); //安卓4.4之前版本
    //         this.style.animationPlayState = "running";
    //         this.style.webkitAnimationPlayState = "running";
    //     } else {
    //         audio.pause();
    //         // this.setAttribute("class", ""); //安卓4.4之前版本
    //         this.style.animationPlayState = "paused";
    //         this.style.webkitAnimationPlayState = "paused";
    //     }
    // };
    //手机端点击
    music.addEventListener("touchstart", function (event) {
        if (audio.paused) {
            audio.play();
            this.style.animationPlayState = "running";
            this.style.webkitAnimationPlayState = "running";
        } else {
            audio.pause();
            this.style.animationPlayState = "paused";
            this.style.webkitAnimationPlayState = "paused";
        }
    }, false);


    //点击翻页
    page1.addEventListener("touchstart", function () {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";

        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500);

    }, false);

};

