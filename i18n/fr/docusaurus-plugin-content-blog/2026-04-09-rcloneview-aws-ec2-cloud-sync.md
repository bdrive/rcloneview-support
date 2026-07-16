---
slug: rcloneview-aws-ec2-cloud-sync
title: "Exécuter RcloneView sur AWS EC2 pour une synchronisation cloud côté serveur"
authors:
  - tayson
description: "Exécutez RcloneView sur une instance AWS EC2 pour la synchronisation cloud, la migration et la sauvegarde côté serveur. Accédez à l'interface graphique à distance et exploitez la bande passante d'EC2 pour des transferts rapides."
keywords:
  - rcloneview
  - aws ec2 cloud sync
  - rcloneview ec2
  - server cloud sync
  - ec2 rclone gui
  - cloud migration server
  - headless cloud sync
  - ec2 data transfer
  - aws ec2 file manager
  - server-side cloud transfer
tags:
  - platform
  - amazon-s3
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exécuter RcloneView sur AWS EC2 pour une synchronisation cloud côté serveur

> Exécuter RcloneView sur une instance AWS EC2 vous offre une bande passante de niveau serveur pour les transferts cloud, un fonctionnement 24h/24 et 7j/7 pour les tâches planifiées, et supprime la nécessité de faire transiter les données par votre machine locale.

Lorsque vous migrez des téraoctets entre fournisseurs cloud, votre connexion Internet locale devient le goulot d'étranglement. Une instance AWS EC2 dotée d'une connexion réseau gigabit peut transférer des données entre services cloud à des vitesses que votre connexion domestique ou professionnelle ne peut égaler. Exécuter RcloneView sur EC2 permet également aux transferts de se poursuivre 24h/24 et 7j/7 sans devoir laisser une machine locale allumée, et les données circulant entre S3 et d'autres services AWS restent au sein du réseau d'Amazon — souvent sans frais de sortie.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi exécuter RcloneView sur EC2

- **Vitesse** : les instances EC2 situées dans les centres de données AWS disposent de connexions réseau multi-gigabit. Les transferts entre S3 et des fournisseurs externes exploitent cette bande passante au lieu de votre connexion locale.
- **Transfert S3 gratuit** : le transfert de données entre EC2 et S3 au sein de la même région est gratuit. Pour les migrations S3 vers cloud à grande échelle, l'exécution sur EC2 élimine le coût le plus important — les frais de sortie locaux.
- **Fonctionnement 24h/24 et 7j/7** : les tâches planifiées s'exécutent en continu sans avoir à laisser un ordinateur de bureau allumé. L'instance EC2 gère les sauvegardes nocturnes, les migrations hebdomadaires et les tâches de synchronisation continues.
- **Proximité des données** : si vos données sources se trouvent sur AWS (S3, EBS, EFS), exécuter RcloneView sur EC2 les place à proximité pour une latence minimale.
- **Accès en équipe** : plusieurs membres de l'équipe peuvent accéder à distance à la même instance RcloneView, en partageant les configurations et les historiques de tâches.

## Configuration d'une instance EC2

### Choix de l'instance

Pour la plupart des charges de travail RcloneView, une instance de taille petite à moyenne suffit :

- **t3.medium** (2 vCPU, 4 Go de RAM) : convient aux tâches de synchronisation légères et aux petites migrations.
- **m5.large** (2 vCPU, 8 Go de RAM) : mieux adapté aux transferts simultanés et aux opérations sur de gros fichiers.
- **c5.xlarge** (4 vCPU, 8 Go de RAM) : pour les charges de migration lourdes avec de nombreux transferts en parallèle.

Choisissez une instance dans la même région que vos buckets S3 pour éviter les coûts de transfert inter-régions.

### Système d'exploitation

Lancez l'instance avec Ubuntu Server LTS ou Amazon Linux 2. Les deux prennent en charge RcloneView sans problème. Installez un environnement de bureau léger pour l'interface graphique :

```
# Ubuntu
sudo apt update && sudo apt install -y xfce4 xrdp

# Amazon Linux 2
sudo yum install -y xrdp xfce
```

Activez et démarrez le service RDP afin de pouvoir vous connecter à distance à l'interface graphique.

### Configuration du groupe de sécurité

Ouvrez les ports suivants dans votre groupe de sécurité EC2 :

- **Port 3389** (RDP) : pour l'accès à distance à l'interface graphique. Restreignez-le à votre adresse IP.
- **Port 22** (SSH) : pour l'accès au terminal. Restreignez-le à votre adresse IP.
- **Port 53682** (facultatif) : si vous devez exécuter des flux OAuth depuis l'instance EC2, il s'agit du port de rappel OAuth par défaut de rclone. Vous pouvez aussi utiliser la configuration OAuth sans interface graphique (headless).

## Installation de RcloneView sur EC2

Connectez-vous en SSH à l'instance et téléchargez RcloneView :

1. Téléchargez l'AppImage Linux ou le paquet .deb depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Rendez l'AppImage exécutable : `chmod +x RcloneView-*.AppImage`
3. Connectez-vous via RDP et lancez RcloneView depuis l'environnement de bureau.

## OAuth sans interface graphique pour les fournisseurs cloud

Les instances EC2 ne disposent généralement pas de navigateur local pour les flux OAuth. Pour les fournisseurs nécessitant OAuth (Google Drive, OneDrive, Dropbox), utilisez l'authentification headless :

1. Sur votre machine locale, exécutez `rclone authorize "drive"` (ou le fournisseur concerné) pour terminer le flux OAuth.
2. Copiez le jeton (token) obtenu.
3. Sur l'instance EC2, collez le jeton dans la configuration du distant RcloneView.

Vous pouvez également configurer RcloneView avec une instance rclone externe et définir le jeton OAuth via le gestionnaire de connexions de RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="Configuring external rclone on EC2 for RcloneView" class="img-large img-center" />

## Configuration de l'accès S3

Pour l'accès à S3 depuis EC2, utilisez un rôle d'instance IAM plutôt que des clés d'accès statiques. Attachez à l'instance EC2 un rôle IAM disposant des autorisations S3, et rclone utilisera le service de métadonnées d'instance pour obtenir automatiquement des identifiants temporaires. Cette approche est plus sécurisée que le stockage des clés d'accès sur l'instance.

Dans la configuration du distant S3 de RcloneView, laissez les champs de clé d'accès et de clé secrète vides et définissez l'authentification d'environnement pour utiliser le profil d'instance.

## Exécution de migrations à grande échelle

Grâce à la bande passante d'EC2, des migrations volumineuses qui prendraient des jours sur une connexion domestique se terminent en quelques heures :

- **1 To de Google Drive vers S3** : environ 2 à 4 heures à vitesse soutenue.
- **10 To de S3 vers Backblaze B2** : environ 1 à 2 jours selon la limitation de débit de l'API B2.
- **Réplication S3 inter-régions** : quasiment à la vitesse du réseau au sein d'AWS.

Les transferts multithread de RcloneView tirent pleinement parti de la capacité réseau d'EC2. Réglez les transferts sur 16-32 et les vérifications sur 16 pour un débit maximal sur les instances les plus puissantes.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Large-scale migration running on EC2 in RcloneView" class="img-large img-center" />

## Planification de tâches côté serveur

Le planificateur intégré de RcloneView gère les tâches récurrentes. Configurez des sauvegardes nocturnes de Google Drive vers S3, une synchronisation hebdomadaire entre S3 et Backblaze B2, ou une réplication quotidienne vers une région de reprise après sinistre. L'instance EC2 exécute ces tâches que vous soyez connecté via RDP ou non.

Laissez l'instance EC2 fonctionner en continu pour les tâches planifiées, ou utilisez une planification de démarrage/arrêt (via AWS Instance Scheduler ou une fonction Lambda) pour n'exécuter l'instance que pendant les fenêtres de sauvegarde.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling server-side sync jobs on EC2 in RcloneView" class="img-large img-center" />

## Gestion des coûts

Les coûts EC2 varient selon le type d'instance et la durée d'exécution :

- **t3.medium à la demande** : ~0,042 $/heure (30 $/mois si elle fonctionne 24h/24 et 7j/7)
- **Instances spot** : jusqu'à 90 % moins chères pour les charges de travail interruptibles comme les migrations ponctuelles.
- **Instances réservées** : tarif horaire réduit pour les configurations de synchronisation côté serveur de longue durée.

Pour les migrations ponctuelles, utilisez une instance spot — lancez-la, effectuez la migration, vérifiez, puis résiliez-la. Pour les sauvegardes planifiées récurrentes, une instance réservée t3.small ou t3.medium est économique.

À noter : le transfert de données S3 au sein de la même région depuis EC2 est gratuit. Le transfert de données sortant vers Internet (par exemple vers Backblaze B2 ou Google Drive) entraîne les frais de sortie AWS standards.

## Pour commencer

1. Lancez une instance EC2 avec Ubuntu ou Amazon Linux et un environnement de bureau.
2. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) et installez-le sur l'instance.
3. Configurez les distants en utilisant l'OAuth headless pour les fournisseurs cloud et les rôles IAM pour S3.
4. Exécutez des migrations et planifiez des tâches de sauvegarde en exploitant la bande passante d'EC2.
5. Résiliez ou arrêtez l'instance lorsqu'elle n'est pas nécessaire pour maîtriser les coûts.

Exécuter RcloneView sur EC2 vous offre la vitesse du réseau des centres de données AWS, la commodité d'une interface graphique pour gérer les transferts, et un fonctionnement 24h/24 et 7j/7 pour les tâches planifiées — la configuration idéale pour les migrations cloud à grande échelle et la synchronisation continue côté serveur.

---

**Guides connexes :**

- [Ajouter AWS S3 et les services compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Ajouter OneDrive en mode headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)
- [Google Drive en mode headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)
- [Exemple avec rclone externe](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
