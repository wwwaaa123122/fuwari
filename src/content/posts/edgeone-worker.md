---
title: edgeone加速worker
published: 2025-07-29
description: '如何使用edgeone加速cf worker'
image: 'https://fuwari.cn-nb1.rains3.com/aluona.jpg'
tags: [cloudflare,edgeone]
category: 'tech'
draft: false 
lang: 'zh_CN'
---
有人问：主包主包cloudflare worker访问速度太慢了，有没有更强势的访问速度呢？

有的兄弟，有的

去 [edgeone](https://edgeone.ai/zh/get-free-plan) 拿下不要钱的计划，添加你的域名，验证所有权，这步如果不会请退出

回到我们的cloudflare，选择你想加速的worker，添加自定义域，**选择路由**，选择你要加速的根域名，在你想要加速的子域+eo（方便区分），如我要加速www.91sssvip.top，就填wwweo.91sssvip.top/\*，在去cloudflare添加dns解析A记录随便指向一个IP，但**一定要开小黄云**，保存回到edgeone

添加加速域名，我就填www，v6随便，我个人选择关闭，源站就写刚刚路由的域名协议https即可，**回源Host头一定要选使用源站域名**，最后保存就好啦

END
