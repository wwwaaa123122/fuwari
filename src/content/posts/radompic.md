---
title: 自建随机图片API
published: 2025-09-06
description: '利用cloud flare或vercel及github做一个随机图片api'
image: 'https://pic.mcxclr.top'
tags: [API]
category: 'tech'
draft: false 
lang: 'zh_CN'
---
GitHub仓库：  
::github{repo="wwwaaa123122/randompictures"}  
使用JavaScript随机请求public文件夹中的图片，支持cloudflare worker及vercel部署，规避使用r2被cloudflare反薅  
public文件夹中tool.py可以批量重命名并转换为webp格式，原图放入上级目录的origin中  
[演示站](https://pic.mcxclr.top)