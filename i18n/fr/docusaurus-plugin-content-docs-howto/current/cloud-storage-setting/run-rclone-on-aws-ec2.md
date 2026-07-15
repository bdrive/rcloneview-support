---
sidebar_position: 2
description: "Guide étape par étape pour configurer et exécuter le démon Rclone Remote Control (rcd) sur une instance AWS EC2 basée sur Ubuntu, incluant l'accès API et la configuration du service systemd."
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
# Exécuter le moteur Rclone sur AWS EC2

  Ce guide explique comment configurer le **démon rcd de Rclone** sur une **instance EC2 basée sur Ubuntu**, en permettant l'accès API distant depuis l'extérieur d'AWS.

---

## **✅ Aperçu étape par étape**

1. [Lancer une instance EC2](#launch-an-ec2-instance)
2. [Configurer le groupe de sécurité (ouvrir le port 5572)](#adjust-security-group-if-needed)
3. [Se connecter en SSH à l'instance](#ssh-into-the-ec2-instance)
4. [Installer Rclone](#install-rclone)
5. [Exécuter le démon rclone rcd](#run-the-rclone-rcd-daemon)
6. [Tester l'accès à l'API Rclone depuis l'extérieur](#verify-external-api-access)
7. [Exécuter Rclone rcd en tant que service systemd](#run-rclone-rcd-as-a-systemd-service)

---

### Lancer une instance EC2

- Connectez-vous à la console de gestion AWS  
- Accédez à **EC2 → Launch Instance**  
- Configurez comme suit :  
    - **Nom** : rclone-server (ou votre choix)  
    - **AMI** : Ubuntu Server 22.04 LTS (ou 20.04 LTS)   
    - **Type d'instance** : t2.micro (éligible au niveau gratuit)  
    - **Paire de clés** : Créez-en une nouvelle ou sélectionnez-en une existante (pour l'accès SSH)  
    - **Stockage** : Au moins 8 Go  
    - **Réseau** : VPC par défaut  
    - **Règles entrantes du groupe de sécurité** :  
        - SSH (port 22) : restreint à votre IP  
        - **TCP personnalisé (port 5572) : 0.0.0.0/0** — requis pour l'API Rclone  
- Lancez l'instance  

---

### Ajuster le groupe de sécurité (si nécessaire)

Accédez à EC2 → Instances → Sélectionnez votre instance → Onglet Security → Cliquez sur Security Group → Modifiez les règles entrantes :

```
Type: Custom TCP
Port: 5572
Source: 0.0.0.0/0  (or restrict to your IP)
```

---

### Se connecter en SSH à l'instance EC2

Depuis votre terminal local :

```
chmod 400 /path/to/your-key.pem
ssh -i /path/to/your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

🔗 Pour des instructions sur la création et l'utilisation des paires de clés .pem, consultez [la page officielle d'AWS « Create a key pair »](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html)  .

---

### Installer Rclone

```
curl https://rclone.org/install.sh | sudo bash
rclone version
```

---

### Exécuter le démon rclone rcd

```
rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572
```

- --rc-user/--rc-pass : sécurise l'accès à l'API
- --rc-addr : écoute sur toutes les interfaces afin de permettre une connexion externe
- --rc-web-gui : lance l'interface web

💡 Pour un fonctionnement continu, envisagez de l'exécuter sous tmux, screen, ou en tant que service systemd.

---

### Vérifier l'accès à l'API depuis l'extérieur

Exécutez un simple contrôle de santé avec curl :

```
curl -X POST -u admin:admin \
  "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"
```

Réponse attendue :

```
{}
```

Cela confirme que l'API de contrôle à distance (RC) de Rclone fonctionne et accepte les requêtes authentifiées.

:::important 🛠️ Remarques
- Assurez-vous de remplacer admin:admin par les valeurs réelles de --rc-user et --rc-pass que vous avez définies au démarrage du démon.
- Remplacez `<EC2-PUBLIC-IP-or-DNS>` par l'adresse IP publique ou le nom DNS réel de votre instance EC2.
- Le point de terminaison doit commencer par /rc/. La commande /rc/noop ne fait rien et confirme simplement que l'API est disponible.
:::

---

#### **🔐 Bonnes pratiques de sécurité recommandées**

- Utilisez des identifiants forts et uniques pour --rc-user / --rc-pass  
- Restreignez l'accès via :
    - Une liste blanche d'IP restreinte dans le groupe de sécurité AWS, ou   
    - Une liaison à une IP spécifique : `--rc-addr=<your_ip>:5572`  
- Pour sécuriser le trafic, envisagez d'ajouter le HTTPS via un proxy inverse (par ex. Nginx + TLS) ou des services comme Cloudflare Tunnel    

---
### Exécuter Rclone rcd en tant que service systemd

Pour maintenir le démon Rclone (`rcd`) actif en arrière-plan même après les redémarrages, vous pouvez l'enregistrer en tant que service systemd sur votre système Linux (comme une instance Ubuntu EC2).
- Il démarrera automatiquement au démarrage du système.
- Il s'exécute de manière fiable en arrière-plan avec des redémarrages automatiques en cas d'échec.

---

#### 1. Créer un fichier de service systemd

Créez le fichier suivant :

````

```bash
sudo nano /etc/systemd/system/rclone-rcd.service
````

Collez le contenu suivant (ajustez vos rc-user, rc-pass et autres options selon vos besoins) :

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

> 🔒 **Remarque de sécurité** : Remplacez les identifiants admin par des identifiants sécurisés en environnement de production.

---

#### 2. Recharger systemd et activer le service

```
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable rclone-rcd
sudo systemctl start rclone-rcd
```

---

#### 3. Vérifier le statut

Pour confirmer que le démon est en cours d'exécution :

```
sudo systemctl status rclone-rcd
```

Vous devriez voir active (running) en vert.

---


Grâce à ces étapes, votre démon Rclone s'exécute dans le cloud, entièrement accessible via RcloneView ou d'autres clients — prêt à gérer efficacement votre stockage distant depuis n'importe où.
