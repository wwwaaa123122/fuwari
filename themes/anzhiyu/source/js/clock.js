// 设置倒计时的目标日期
var countDownDate = new Date("July 20, 2030 00:00:00").getTime();

// 每秒更新倒计时
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // 计算天、小时、分钟和秒
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 显示结果
    document.getElementById("countdown").innerHTML =
        days + "天 " + hours + "小时 " +
        minutes + "分钟 " + seconds + "秒 ";

    // 倒计时结束显示提示
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "还有人会看到吗？";
    }
}, 1000);