---
sidebar_position: 2
description: "在基于 Ubuntu 的 AWS EC2 实例上设置并运行 Rclone Remote Control（rcd）守护进程的分步指南，包括 API 访问和 systemd 服务配置。"
keywords:
  - rcloneview
  - rclone
  - aws
  - ec2
  - remote control
  - rclone rcd
  - systemd
  - ubuntu
  - daemon
  - cloud storage
  - rclone api
  - external rclone
tags:
  - RcloneView
  - aws
  - aws-ec2
  - remote-server
  - rclone-rcd
  - external-rclone
  - rclone
date: 2025-07-03
author: Jay
---
# 在 AWS EC2 上运行 Rclone 引擎

  本指南将介绍如何在**基于 Ubuntu 的 EC2 实例**上设置 **Rclone 的 rcd 守护进程**，从而实现从 AWS 外部进行远程 API 访问。

---

## **✅ 分步概览**

1. [启动 EC2 实例](#launch-an-ec2-instance)
2. [配置安全组（开放端口 5572）](#adjust-security-group-if-needed)
3. [通过 SSH 连接实例](#ssh-into-the-ec2-instance)
4. [安装 Rclone](#install-rclone)
5. [运行 rclone rcd 守护进程](#run-the-rclone-rcd-daemon)
6. [从外部测试 Rclone API 访问](#verify-external-api-access)
7. [将 Rclone rcd 作为 systemd 服务运行](#run-rclone-rcd-as-a-systemd-service)

---

### 启动 EC2 实例

- 登录 AWS 管理控制台
- 进入 **EC2 → Launch Instance**
- 按以下方式进行配置：
    - **Name**：rclone-server（或自定义名称）
    - **AMI**：Ubuntu Server 22.04 LTS（或 20.04 LTS）
    - **Instance type**：t2.micro（符合免费套餐资格）
    - **Key pair**：新建一个或选择现有的（用于 SSH 访问）
    - **Storage**：至少 8 GB
    - **Network**：默认 VPC
    - **Security group inbound rules**（安全组入站规则）：
        - SSH（端口 22）：仅限你自己的 IP
        - **Custom TCP（端口 5572）：0.0.0.0/0** —— Rclone API 所必需
- 启动该实例

---

### 调整安全组（如有需要）

访问 EC2 → Instances → 选择你的实例 → Security 选项卡 → 点击 Security Group → Edit inbound rules：

```
Type: Custom TCP
Port: 5572
Source: 0.0.0.0/0  (or restrict to your IP)
```

---

### 通过 SSH 连接 EC2 实例

在本地终端中执行：

```
chmod 400 /path/to/your-key.pem
ssh -i /path/to/your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

🔗 有关创建和使用 .pem 密钥对的指导，请参阅 [AWS 官方“Create a key pair”页面](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html)。

---

### 安装 Rclone

```
curl https://rclone.org/install.sh | sudo bash
rclone version
```

---

### 运行 rclone rcd 守护进程

```
rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572
```

- --rc-user/--rc-pass：保护 API 访问的安全
- --rc-addr：监听所有网络接口，以便可以从外部连接
- --rc-web-gui：启动 Web 界面

💡 如需持续运行，建议在 tmux、screen 中运行，或将其配置为 systemd 服务。

---

### 验证外部 API 访问

使用 curl 运行一个简单的健康检查：

```
curl -X POST -u admin:admin \
  "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"
```

预期响应：

```
{}
```

这表明 Rclone 远程控制（RC）API 正在运行，并接受经过身份验证的请求。

:::important 🛠️ Notes
- 请务必将 admin:admin 替换为你在启动守护进程时定义的实际 --rc-user 和 --rc-pass。
- 将 `<EC2-PUBLIC-IP-or-DNS>` 替换为该 EC2 实例的实际公网 IP 或 DNS 名称。
- 该端点必须以 /rc/ 开头。/rc/noop 命令不执行任何操作，只是用来确认该 API 是否可用。
:::

---

#### **🔐 推荐的安全最佳实践**

- 为 --rc-user / --rc-pass 使用强且唯一的凭据
- 通过以下方式限制访问：
    - 在 AWS Security Group 中设置严格的 IP 白名单，或
    - 绑定到特定 IP：`--rc-addr=<your_ip>:5572`
- 为保护流量安全，可考虑通过反向代理（如 Nginx + TLS）或 Cloudflare Tunnel 等服务添加 HTTPS

---
### 将 Rclone rcd 作为 systemd 服务运行

为了让 Rclone 守护进程（`rcd`）即使在重启后也能持续在后台运行，你可以将其注册为 Linux 系统（例如 Ubuntu EC2 实例）上的 systemd 服务。
- 系统启动时会自动启动该服务。
- 它会在后台可靠运行，并在失败时自动重启。

---

#### 1. 创建 systemd 服务文件

创建以下文件：

````

```bash
sudo nano /etc/systemd/system/rclone-rcd.service
````

粘贴以下内容（根据需要调整你的 rc-user、rc-pass 及其他参数）：

```
[Unit]
Description=Rclone Remote Control Daemon
After=network-online.target

[Service]
User=ubuntu
ExecStart=/usr/bin/rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572 \
  --rc-web-gui \
  --log-file=/var/log/rclone.log \
  --log-level=INFO
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

> 🔒 **安全提示**：在生产环境中，请将 admin 凭据更改为更安全的值。

---

#### 2. 重新加载 systemd 并启用该服务

```
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable rclone-rcd
sudo systemctl start rclone-rcd
```

---

#### 3. 验证状态

确认该守护进程正在运行：

```
sudo systemctl status rclone-rcd
```

你应该会看到绿色的 active (running) 状态。

---


完成以上步骤后，你的 Rclone 守护进程即可在云端运行，并可通过 RcloneView 或其他客户端完全访问——随时随地高效管理你的远程存储。
