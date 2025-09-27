---
title: fuwari接入评论功能
published: 2025-08-04
description: '让你的fuwari接入评论，并让它在文章末显示出'
image: '../images/comment.jpg'
tags: [fuwari]
category: 'tech'
draft: false 
lang: 'zh_CN'
---
# Giscus
想要接入评论，肯定需要一个三方平台 [Giscus](https://giscus.app/zh-CN)
Giscus就是一个非常合适的平台  
# 配置Giscus
首先去github创建一个存储库，**一定要是公开库**
然后在仓库设置中**启用**`Discussion`功能  
前往https://giscus.app/zh-CN
在`仓库`一栏中点击第二步的蓝字安装giscus，最后填写自己的用户名及刚刚创建的仓库名称  
### 映射
我只建议使用`pathname`：以文章路径区分评论区，即使换域名也能匹配  
其它映射可以看官方介绍  
分类选择**公告（announcements）**  
特性个人建议勾选**1 3 4**  
主题默认即可，也可以尝试官方的其它主题  
最后将给出的JS复制  
# 配置fuwari
在`src/pages/posts/`目录下找到`[...slug].astro`，在它的**135行**插入
```astro
<div id="giscus-comments" style="margin-top: 3rem;">
  你的JS
</div>
```

最后本地测试一下，没问题就可以部署到服务器了