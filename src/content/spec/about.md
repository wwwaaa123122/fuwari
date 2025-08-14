# About
初中生一位

## 联系我？

[微信](https://fuwari.cn-nb1.rains3.com/qrwechat.png)

[QQ](https://fuwari.cn-nb1.rains3.com/qrqq.png)

邮箱：i@mcxclr.top

[B站](https://space.bilibili.com/3493078983772353)

[telegram](https://t.me/wwwaaa123122)

<h2>五年之约倒计时</h2>
<div id="five-year-countdown" style="font-size:1.5em;font-weight:bold;color:#ff6600;"></div>

<script>
(function() {
  const endDate = new Date("2030-07-20T00:00:00").getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
      document.getElementById("five-year-countdown").innerText = "成年了！🎉🎉🎉";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("five-year-countdown").innerText =
      `${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
})();
</script>