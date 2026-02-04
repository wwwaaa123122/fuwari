---
title: 通过Cloudflare Tunnel使用SSH
published: 2026-02-04
description: '通过Cloudflare Tunnel连接无公网IP的服务'
image: '../images/SSH_Cloudflare.webp'
tags: [tech]
category: 'cloudflare,tunnel,ssh'
draft: false 
lang: 'zh_CN'
---
# 前言  
在没有公网的条件下我们想访问无公网IP往往只能通过FRP或IPv6，本篇文章将介绍使用Cloudflare Tunnel连接内网中的SSH服务  
# 准备  
## 先决条件  
- [Cloudflare](https://dash.cloudflare.com)账号，没有的自行注册一个，并需绑定一张信用卡（不会扣费） 
- 一个托管在Cloudflare上的域名  
## 安装Tunnel  
打开[Zero Trust](https://one.dash.cloudflare.com)团队名随便写一个，在左侧边栏找到 **网络** ，选择 **连接器** 。进来后点击 **添加隧道** ，隧道类型选项 **Cloudflared** ，名称依旧随便取，保存隧道后选择系统类型，下面我以ubuntu 64-bit 为例  
### 安装 cloudflared  
可将给的shell脚本保存为.sh执行，连上需远程ssh的终端，执行  
```bash
cat << 'EOF' > Install_cloudflared.sh
#!/bin/bash

# Add cloudflare gpg key
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg | sudo tee /usr/share/keyrings/cloudflare-public-v2.gpg >/dev/null

# Add this repo to your apt repositories
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# install cloudflared
sudo apt-get update && sudo apt-get install cloudflared
EOF
```
赋予权限  
```bash
chmod +x Install_cloudflared.sh
```
执行脚本安装  
```bash
./Install_cloudflared.sh
```

### 连接  
执行连接页面给的 *让计算机每次启动时自动运行隧道* 这条命令
```bash
sudo cloudflared service install <你的令牌>
```

若 **Connectors** 列表中出现了您的设备，则说明安装成功。

# 配置Tunnel及应用  
#### 发布应用程序路由  
- 子域：随便填 示例：ssh  
- 域：选择你的域名  
- 路径：空着  
- 服务类型：SSH  
- URL：127.0.0.1  

### 配置应用程序  
侧栏中选中 **访问控制** → **应用程序** → **添加应用程序**   

类型选择 **自托管** ，名称依旧随便写，会话持续时间看你自己，我这里选的是6小时  

点击 **添加公共主机名** 
输入方式默认，但子域及域要填写与***发布应用程序路由***  **一致的** ，展开下面的**浏览器呈现设置** 启用*允许自动 Cloudflared 身份验证*   
浏览器呈现选择**SSH**   
下面需创建一个策略，名称依旧随便写，操作选择*允许*   
认证方式自己选一个方便的，我这里选的是EMAIL即邮箱，其它的看自己最后点保存，回到配置页面，选择好刚刚配置的规则，没其它要求一直点下一步，至此配置就结束了。  

#  最终体验  
打开你的域名，此时应会跳转到Cloudflare的验证界面，按照你自己选择的验证方式过后应该就会跳转到输入*User* 的界面，输入你的用户名提交后输入密码，至此就大功告成了。