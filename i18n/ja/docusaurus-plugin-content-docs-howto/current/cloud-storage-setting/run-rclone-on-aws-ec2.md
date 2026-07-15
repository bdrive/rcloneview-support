---
sidebar_position: 2
description: "APIアクセスとsystemdサービス設定を含む、Ubuntuベースの AWS EC2 インスタンス上で Rclone Remote Control (rcd) デーモンをセットアップして実行する手順ガイド。"
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
# AWS EC2 で Rclone Engine を実行する

  このガイドでは、**Ubuntuベースの EC2 インスタンス**上に **Rclone の rcd デーモン**をセットアップし、AWS の外部からリモート API アクセスを有効にする手順を説明します。

---

## **✅ ステップバイステップの概要**

1. [EC2 インスタンスを起動する](#launch-an-ec2-instance)
2. [セキュリティグループを設定する（ポート 5572 を開放）](#adjust-security-group-if-needed)
3. [インスタンスに SSH 接続する](#ssh-into-the-ec2-instance)
4. [Rclone をインストールする](#install-rclone)
5. [rclone rcd デーモンを実行する](#run-the-rclone-rcd-daemon)
6. [外部から Rclone API アクセスをテストする](#verify-external-api-access)
7. [Rclone rcd を systemd サービスとして実行する](#run-rclone-rcd-as-a-systemd-service)

---

### EC2 インスタンスを起動する

- AWS Management Console にログインします
- **EC2 → Launch Instance** に移動します
- 以下のように設定します
    - **Name**: rclone-server（お好みの名前）
    - **AMI**: Ubuntu Server 22.04 LTS（または 20.04 LTS）
    - **Instance type**: t2.micro（無料利用枠対象）
    - **Key pair**: 新規作成するか既存のものを選択（SSH アクセス用）
    - **Storage**: 8 GB 以上
    - **Network**: デフォルト VPC
    - **Security group inbound rules**:
        - SSH（ポート 22）: 自分の IP に制限
        - **カスタム TCP（ポート 5572）: 0.0.0.0/0** — Rclone API に必要
- インスタンスを起動します

---

### セキュリティグループを調整する（必要な場合）

EC2 → Instances → 対象のインスタンスを選択 → Security タブ → Security Group をクリック → Edit inbound rules にアクセスします。

```
Type: Custom TCP
Port: 5572
Source: 0.0.0.0/0  (or restrict to your IP)
```

---

### EC2 インスタンスに SSH 接続する

ローカル端末から以下を実行します。

```
chmod 400 /path/to/your-key.pem
ssh -i /path/to/your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

🔗 .pem キーペアの作成と使用方法については、[AWS 公式の「Create a key pair」ページ](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html) を参照してください。

---

### Rclone をインストールする

```
curl https://rclone.org/install.sh | sudo bash
rclone version
```

---

### rclone rcd デーモンを実行する

```
rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572
```

- --rc-user/--rc-pass: API アクセスを保護します
- --rc-addr: すべてのインターフェースでリッスンし、外部からの接続を可能にします
- --rc-web-gui: Web インターフェースを起動します

💡 常時稼働させるには、tmux、screen、または systemd サービスとして実行することを検討してください。

---

### 外部から API アクセスを確認する

curl を使って簡単なヘルスチェックを実行します。

```
curl -X POST -u admin:admin \
  "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"
```

期待されるレスポンス

```
{}
```

これにより、Rclone remote control（RC）API が稼働しており、認証済みリクエストを受け付けていることが確認できます。

:::important 🛠️ Notes
- admin:admin は、デーモン起動時に定義した実際の --rc-user と --rc-pass に置き換えてください。
- `<EC2-PUBLIC-IP-or-DNS>` は、EC2 インスタンスの実際のパブリック IP または DNS 名に置き換えてください。
- エンドポイントは /rc/ で始まる必要があります。/rc/noop コマンドは何も実行せず、API が利用可能であることを確認するだけです。
:::

---

#### **🔐 推奨されるセキュリティのベストプラクティス**

- --rc-user / --rc-pass には強力で一意の認証情報を使用してください
- 以下の方法でアクセスを制限してください
    - AWS Security Group で IP ホワイトリストを絞り込む、または
    - 特定の IP にバインドする: `--rc-addr=<your_ip>:5572`
- 通信を保護するには、リバースプロキシ（例: Nginx + TLS）や Cloudflare Tunnel などのサービスを使って HTTPS を追加することを検討してください

---
### Rclone rcd を systemd サービスとして実行する

再起動後も Rclone デーモン（`rcd`）をバックグラウンドで実行し続けるには、Linux システム（Ubuntu EC2 インスタンスなど）上で systemd サービスとして登録します。
- システム起動時に自動的に開始されます。
- 失敗時に自動的に再起動し、バックグラウンドで確実に動作します。

---

#### 1. systemd サービスファイルを作成する

以下のファイルを作成します。

````

```bash
sudo nano /etc/systemd/system/rclone-rcd.service
````

以下の内容を貼り付けます（rc-user、rc-pass、その他のフラグは必要に応じて調整してください）。

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

> 🔒 **セキュリティに関する注意**: 本番環境では admin の認証情報を安全なものに変更してください。

---

#### 2. systemd をリロードしてサービスを有効化する

```
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable rclone-rcd
sudo systemctl start rclone-rcd
```

---

#### 3. ステータスを確認する

デーモンが実行中であることを確認するには、以下を実行します。

```
sudo systemctl status rclone-rcd
```

active (running) が緑色で表示されれば成功です。

---


これらの手順により、Rclone デーモンはクラウド上で動作し、RcloneView やその他のクライアントから完全にアクセス可能になり、どこからでもリモートストレージを効率的に管理できるようになります。
