---
sidebar_position: 2
description: "Schritt-für-Schritt-Anleitung zum Einrichten und Ausführen des Rclone Remote Control (rcd)-Daemons auf einer Ubuntu-basierten AWS-EC2-Instanz, einschließlich API-Zugriff und systemd-Dienstkonfiguration."
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
# Rclone Engine auf AWS EC2 ausführen

  Diese Anleitung führt Sie durch die Einrichtung des **rcd-Daemons von Rclone** auf einer **Ubuntu-basierten EC2-Instanz** und ermöglicht den Remote-API-Zugriff von außerhalb von AWS.

---

## **✅ Schritt-für-Schritt-Überblick**

1. [EC2-Instanz starten](#launch-an-ec2-instance)
2. [Security Group konfigurieren (Port 5572 öffnen)](#adjust-security-group-if-needed)
3. [Per SSH mit der Instanz verbinden](#ssh-into-the-ec2-instance)
4. [Rclone installieren](#install-rclone)
5. [rclone rcd-Daemon ausführen](#run-the-rclone-rcd-daemon)
6. [Rclone-API-Zugriff extern testen](#verify-external-api-access)
7. [Rclone rcd als systemd-Dienst ausführen](#run-rclone-rcd-as-a-systemd-service)

---

### EC2-Instanz starten

- Melden Sie sich in der AWS Management Console an  
- Navigieren Sie zu **EC2 → Launch Instance**  
- Konfigurieren Sie wie folgt:  
    - **Name**: rclone-server (oder nach Ihrer Wahl)  
    - **AMI**: Ubuntu Server 22.04 LTS (oder 20.04 LTS)   
    - **Instanztyp**: t2.micro (Free-Tier-fähig)  
    - **Schlüsselpaar**: Erstellen Sie ein neues oder wählen Sie ein vorhandenes aus (für SSH-Zugriff)  
    - **Speicher**: mindestens 8 GB  
    - **Netzwerk**: Standard-VPC  
    - **Eingehende Regeln der Security Group**:  
        - SSH (Port 22): auf Ihre IP beschränkt  
        - **Custom TCP (Port 5572): 0.0.0.0/0** — erforderlich für die Rclone-API  
- Starten Sie die Instanz  

---

### Security Group anpassen (falls nötig)

Besuchen Sie EC2 → Instances → Ihre Instanz auswählen → Registerkarte „Security" → Klicken Sie auf Security Group → Eingehende Regeln bearbeiten:

```
Type: Custom TCP
Port: 5572
Source: 0.0.0.0/0  (oder auf Ihre IP beschränken)
```

---

### Per SSH mit der EC2-Instanz verbinden

Von Ihrem lokalen Terminal aus:

```
chmod 400 /path/to/your-key.pem
ssh -i /path/to/your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

🔗 Eine Anleitung zum Erstellen und Verwenden von .pem-Schlüsselpaaren finden Sie auf der offiziellen [„Create a key pair"-Seite von AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html).

---

### Rclone installieren

```
curl https://rclone.org/install.sh | sudo bash
rclone version
```

---

### Den rclone rcd-Daemon ausführen

```
rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572
```

- --rc-user/--rc-pass: sichert den API-Zugriff ab
- --rc-addr: lauscht auf allen Schnittstellen, damit Sie sich extern verbinden können
- --rc-web-gui: startet die Weboberfläche

💡 Für den dauerhaften Betrieb empfiehlt es sich, den Daemon unter tmux, screen oder als systemd-Dienst laufen zu lassen.

---

### Externen API-Zugriff überprüfen

Führen Sie mit curl einen einfachen Health-Check durch:

```
curl -X POST -u admin:admin \
  "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"
```

Erwartete Antwort:

```
{}
```

Dies bestätigt, dass die Rclone Remote-Control-API (RC) läuft und authentifizierte Anfragen akzeptiert.

:::important 🛠️ Hinweise
- Ersetzen Sie admin:admin unbedingt durch die tatsächlichen --rc-user- und --rc-pass-Werte, die Sie beim Starten des Daemons festgelegt haben.
- Ersetzen Sie `<EC2-PUBLIC-IP-or-DNS>` durch die tatsächliche öffentliche IP oder den DNS-Namen Ihrer EC2-Instanz.
- Der Endpunkt muss mit /rc/ beginnen. Der Befehl /rc/noop bewirkt nichts und bestätigt lediglich, dass die API verfügbar ist.
:::

---

#### **🔐 Empfohlene Best Practices für die Sicherheit**

- Verwenden Sie starke, eindeutige Anmeldedaten für --rc-user / --rc-pass  
- Beschränken Sie den Zugriff durch:
    - Eine enge IP-Whitelist in der AWS Security Group, oder   
    - Bindung an eine bestimmte IP: `--rc-addr=<your_ip>:5572`  
- Um den Datenverkehr abzusichern, ziehen Sie in Betracht, HTTPS über einen Reverse-Proxy (z. B. Nginx + TLS) oder Dienste wie Cloudflare Tunnel hinzuzufügen    

---
### Rclone rcd als systemd-Dienst ausführen

Damit der Rclone-Daemon (`rcd`) auch nach einem Neustart im Hintergrund weiterläuft, können Sie ihn auf Ihrem Linux-System (z. B. einer Ubuntu-EC2-Instanz) als systemd-Dienst registrieren.
- Er startet automatisch beim Systemstart.
- Er läuft zuverlässig im Hintergrund mit automatischem Neustart bei Fehlern.

---

#### 1. Eine systemd-Dienstdatei erstellen

Erstellen Sie die folgende Datei:

````

```bash
sudo nano /etc/systemd/system/rclone-rcd.service
````

Fügen Sie den folgenden Inhalt ein (passen Sie rc-user, rc-pass und weitere Flags nach Bedarf an):

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

> 🔒 **Sicherheitshinweis**: Ändern Sie die admin-Anmeldedaten in Produktionsumgebungen unbedingt auf sichere Werte.

---

#### 2. systemd neu laden und den Dienst aktivieren

```
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable rclone-rcd
sudo systemctl start rclone-rcd
```

---

#### 3. Status überprüfen

Um zu bestätigen, dass der Daemon läuft:

```
sudo systemctl status rclone-rcd
```

Sie sollten active (running) in Grün sehen.

---


Mit diesen Schritten läuft Ihr Rclone-Daemon in der Cloud und ist vollständig über RcloneView oder andere Clients zugänglich — bereit, Ihren Remote-Speicher effizient von überall aus zu verwalten.
