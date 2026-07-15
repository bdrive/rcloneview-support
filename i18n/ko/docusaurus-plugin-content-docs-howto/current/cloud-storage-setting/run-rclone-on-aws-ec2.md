---
sidebar_position: 2
description: "Ubuntu 기반 AWS EC2 인스턴스에서 Rclone Remote Control(rcd) 데몬을 설정하고 실행하는 단계별 가이드로, API 접근 및 systemd 서비스 구성을 포함합니다."
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
# AWS EC2에서 Rclone 엔진 실행하기

  이 가이드는 **Ubuntu 기반 EC2 인스턴스**에서 **Rclone의 rcd 데몬**을 설정하여 AWS 외부에서 원격 API 접근이 가능하도록 하는 과정을 안내합니다.

---

## **✅ 단계별 개요**

1. [EC2 인스턴스 시작](#launch-an-ec2-instance)
2. [보안 그룹 설정(포트 5572 열기)](#adjust-security-group-if-needed)
3. [인스턴스에 SSH 접속](#ssh-into-the-ec2-instance)
4. [Rclone 설치](#install-rclone)
5. [rclone rcd 데몬 실행](#run-the-rclone-rcd-daemon)
6. [외부에서 Rclone API 접근 테스트](#verify-external-api-access)
7. [systemd 서비스로 Rclone rcd 실행](#run-rclone-rcd-as-a-systemd-service)

---

### EC2 인스턴스 시작

- AWS Management Console에 로그인합니다  
- **EC2 → Launch Instance**로 이동합니다  
- 다음과 같이 구성합니다:  
    - **이름**: rclone-server (원하는 이름 사용 가능)  
    - **AMI**: Ubuntu Server 22.04 LTS (또는 20.04 LTS)   
    - **인스턴스 유형**: t2.micro (프리 티어 사용 가능)  
    - **키 페어**: 새로 생성하거나 기존 키 페어 선택 (SSH 접속용)  
    - **스토리지**: 최소 8GB  
    - **네트워크**: 기본 VPC  
    - **보안 그룹 인바운드 규칙**:  
        - SSH (포트 22): 사용자의 IP로 제한  
        - **커스텀 TCP (포트 5572): 0.0.0.0/0** — Rclone API에 필요  
- 인스턴스를 시작합니다  

---

### 보안 그룹 설정(필요 시)

EC2 → Instances → 인스턴스 선택 → Security 탭 → Security Group 클릭 → 인바운드 규칙 편집:

```
Type: Custom TCP
Port: 5572
Source: 0.0.0.0/0  (or restrict to your IP)
```

---

### 인스턴스에 SSH 접속

로컬 터미널에서:

```
chmod 400 /path/to/your-key.pem
ssh -i /path/to/your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

🔗 .pem 키 페어 생성 및 사용에 대한 안내는 [AWS의 공식 “Create a key pair” 페이지](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html)를 참고하세요.

---

### Rclone 설치

```
curl https://rclone.org/install.sh | sudo bash
rclone version
```

---

### rclone rcd 데몬 실행

```
rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572
```

- --rc-user/--rc-pass: API 접근을 보호합니다
- --rc-addr: 모든 인터페이스에서 수신하여 외부에서 연결할 수 있게 합니다
- --rc-web-gui: 웹 인터페이스를 실행합니다

💡 지속적인 운영을 위해서는 tmux, screen 또는 systemd 서비스로 실행하는 것을 고려하세요.

---

### 외부 API 접근 확인

curl을 사용하여 간단한 상태 확인을 실행합니다:

```
curl -X POST -u admin:admin \
  "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"
```

예상되는 응답:

```
{}
```

이는 Rclone 원격 제어(RC) API가 실행 중이며 인증된 요청을 수락하고 있음을 확인해줍니다.

:::important 🛠️ 참고 사항
- 데몬을 시작할 때 정의한 실제 --rc-user 및 --rc-pass 값으로 admin:admin을 반드시 교체하세요.
- `<EC2-PUBLIC-IP-or-DNS>`를 EC2 인스턴스의 실제 퍼블릭 IP 또는 DNS 이름으로 교체하세요.
- 엔드포인트는 반드시 /rc/로 시작해야 합니다. /rc/noop 명령은 아무 작업도 수행하지 않고 단순히 API가 사용 가능한지 확인합니다.
:::

---

#### **🔐 권장 보안 모범 사례**

- --rc-user / --rc-pass에는 강력하고 고유한 자격 증명을 사용하세요  
- 다음과 같은 방법으로 접근을 제한하세요:
    - AWS 보안 그룹에서 IP 화이트리스트를 좁게 설정하거나, 또는   
    - 특정 IP에 바인딩: `--rc-addr=<your_ip>:5572`  
- 트래픽을 보호하려면 리버스 프록시(예: Nginx + TLS)나 Cloudflare Tunnel 같은 서비스를 통해 HTTPS를 추가하는 것을 고려하세요    

---
### systemd 서비스로 Rclone rcd 실행

재부팅 후에도 Rclone 데몬(`rcd`)이 백그라운드에서 계속 실행되도록 하려면, Linux 시스템(Ubuntu EC2 인스턴스 등)에서 이를 systemd 서비스로 등록할 수 있습니다.
- 시스템 부팅 시 자동으로 시작됩니다.
- 실패 시 자동 재시작으로 백그라운드에서 안정적으로 실행됩니다.

---

#### 1. systemd 서비스 파일 생성

다음 파일을 생성합니다:

````

```bash
sudo nano /etc/systemd/system/rclone-rcd.service
````

다음 내용을 붙여넣습니다(필요에 따라 rc-user, rc-pass, 기타 플래그 조정):

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

> 🔒 **보안 참고**: 프로덕션 환경에서는 admin 자격 증명을 안전한 값으로 변경하세요.

---

#### 2. systemd 재로드 및 서비스 활성화

```
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable rclone-rcd
sudo systemctl start rclone-rcd
```

---

#### 3. 상태 확인

데몬이 실행 중인지 확인하려면:

```
sudo systemctl status rclone-rcd
```

초록색으로 active (running)이 표시되어야 합니다.

---


이 단계들을 통해 Rclone 데몬이 클라우드에서 실행되며, RcloneView 또는 다른 클라이언트를 통해 완전히 접근할 수 있어 어디서든 원격 스토리지를 효율적으로 관리할 준비가 됩니다.
