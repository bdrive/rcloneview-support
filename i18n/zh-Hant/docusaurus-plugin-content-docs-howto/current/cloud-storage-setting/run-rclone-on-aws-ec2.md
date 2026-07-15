---
sidebar_position: 2
description: "逐步指南：在以 Ubuntu 為基礎的 AWS EC2 執行個體上設定並執行 Rclone Remote Control（rcd）daemon，包含 API 存取與 systemd 服務設定。"
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
# 在 AWS EC2 上執行 Rclone Engine

  本指南將說明如何在**以 Ubuntu 為基礎的 EC2 執行個體**上設定 **Rclone 的 rcd daemon**，讓你能夠從 AWS 外部進行遠端 API 存取。

---

## **✅ 步驟總覽**

1. [啟動 EC2 執行個體](#launch-an-ec2-instance)
2. [設定安全群組（開放連接埠 5572）](#adjust-security-group-if-needed)
3. [SSH 連線至執行個體](#ssh-into-the-ec2-instance)
4. [安裝 Rclone](#install-rclone)
5. [執行 rclone rcd daemon](#run-the-rclone-rcd-daemon)
6. [測試從外部存取 Rclone API](#verify-external-api-access)
7. [將 Rclone rcd 設定為 systemd 服務](#run-rclone-rcd-as-a-systemd-service)

---

### 啟動 EC2 執行個體

- 登入 AWS 管理主控台
- 前往 **EC2 → Launch Instance**
- 依下列方式設定：
    - **Name**：rclone-server（或依你的偏好命名）
    - **AMI**：Ubuntu Server 22.04 LTS（或 20.04 LTS）
    - **Instance type**：t2.micro（符合免費方案資格）
    - **Key pair**：建立新的金鑰對，或選擇既有的（用於 SSH 存取）
    - **Storage**：至少 8 GB
    - **Network**：預設 VPC
    - **Security group inbound rules**：
        - SSH（連接埠 22）：僅限你的 IP
        - **Custom TCP（連接埠 5572）：0.0.0.0/0** — Rclone API 所需
- 啟動執行個體

---

### 調整安全群組（如有需要）

前往 EC2 → Instances → 選取你的執行個體 → Security 分頁 → 點選 Security Group → Edit inbound rules：

```
Type: Custom TCP
Port: 5572
Source: 0.0.0.0/0  (or restrict to your IP)
```

---

### SSH 連線至 EC2 執行個體

在你本機的終端機中：

```
chmod 400 /path/to/your-key.pem
ssh -i /path/to/your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

🔗 若需了解如何建立與使用 .pem 金鑰對，請參閱 [AWS 官方「Create a key pair」頁面](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html)。

---

### 安裝 Rclone

```
curl https://rclone.org/install.sh | sudo bash
rclone version
```

---

### 執行 rclone rcd Daemon

```
rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572
```

- --rc-user/--rc-pass：用於保護 API 存取安全
- --rc-addr：監聽所有介面，讓你可以從外部連線
- --rc-web-gui：啟動網頁介面

💡 若要持續運作，建議在 tmux、screen 中執行，或設定為 systemd 服務。

---

### 驗證外部 API 存取

使用 curl 執行簡單的健康檢查：

```
curl -X POST -u admin:admin \
  "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"
```

預期回應：

```
{}
```

這確認了 Rclone remote control（RC）API 正在執行，並且能接受已驗證的請求。

:::important 🛠️ 注意事項
- 請務必將 admin:admin 替換為你啟動 daemon 時所設定的實際 --rc-user 與 --rc-pass。
- 將 `<EC2-PUBLIC-IP-or-DNS>` 替換為 EC2 執行個體的實際公開 IP 或 DNS 名稱。
- 端點必須以 /rc/ 開頭。/rc/noop 指令不會執行任何動作，僅用來確認 API 是否可用。
:::

---

#### **🔐 建議的安全最佳實務**

- 為 --rc-user / --rc-pass 使用強度足夠且獨一無二的憑證
- 透過以下方式限制存取：
    - 在 AWS Security Group 中設定較嚴格的 IP 白名單，或
    - 綁定至特定 IP：`--rc-addr=<your_ip>:5572`
- 為保護傳輸安全，可考慮透過反向代理（例如 Nginx + TLS）或 Cloudflare Tunnel 等服務新增 HTTPS

---
### 將 Rclone rcd 設定為 systemd 服務

若要讓 Rclone daemon（`rcd`）即使在重新開機後仍能持續在背景執行，你可以在你的 Linux 系統（例如 Ubuntu EC2 執行個體）上將其註冊為 systemd 服務。
- 系統開機時會自動啟動。
- 在背景中穩定執行，失敗時會自動重新啟動。

---

#### 1. 建立 systemd 服務檔案

建立以下檔案：

````

```bash
sudo nano /etc/systemd/system/rclone-rcd.service
````

貼上以下內容（依需求調整你的 rc-user、rc-pass 及其他旗標）：

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

> 🔒 **安全提示**：在正式環境中，請將 admin 憑證改為更安全的設定。

---

#### 2. 重新載入 systemd 並啟用服務

```
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable rclone-rcd
sudo systemctl start rclone-rcd
```

---

#### 3. 驗證狀態

確認 daemon 是否正在執行：

```
sudo systemctl status rclone-rcd
```

你應該會看到綠色的 active (running)。

---


完成這些步驟後，你的 Rclone daemon 便會在雲端執行，並可透過 RcloneView 或其他用戶端完整存取——隨時隨地都能有效管理你的遠端儲存空間。

