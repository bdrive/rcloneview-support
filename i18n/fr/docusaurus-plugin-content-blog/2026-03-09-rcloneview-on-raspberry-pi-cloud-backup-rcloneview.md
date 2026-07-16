---
slug: rcloneview-on-raspberry-pi-cloud-backup-rcloneview
title: "Utiliser RcloneView sur Raspberry Pi — Créez une appliance de sauvegarde cloud basse consommation"
authors:
  - tayson
description: "Transformez votre Raspberry Pi en appliance de sauvegarde cloud 24/7. Configurez RcloneView sur Raspberry Pi pour une synchronisation automatisée entre le stockage local et les fournisseurs cloud."
keywords:
  - rcloneview raspberry pi
  - sauvegarde cloud raspberry pi
  - rclone raspberry pi
  - synchronisation cloud nas raspberry pi
  - stockage cloud raspberry pi
  - appliance de sauvegarde cloud diy
  - sauvegarde s3 raspberry pi
  - synchronisation cloud basse consommation
  - synchronisation google drive raspberry pi
  - sauvegarde automatisée raspberry pi
tags:
  - raspberry-pi
  - platform
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser RcloneView sur Raspberry Pi — Créez une appliance de sauvegarde cloud basse consommation

> Un Raspberry Pi consomme entre 5 et 15 watts. C'est moins qu'une ampoule. Laissez-le tourner 24 h/24, 7 j/7, et il devient une appliance de sauvegarde cloud silencieuse et toujours active, qui synchronise vos données pendant que vous dormez.

Le Raspberry Pi est un ordinateur étonnamment capable pour les tâches de stockage cloud. Associez-le à un disque USB externe et à RcloneView, et vous obtenez une machine de sauvegarde dédiée qui synchronise en permanence les fichiers locaux vers le stockage cloud (ou inversement) — pour une fraction du coût énergétique d'un PC complet ou d'un NAS.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi choisir le Raspberry Pi pour la sauvegarde cloud ?

### Toujours actif, basse consommation

| Appareil | Consommation | Coût annuel (24/7) |
|--------|-----------|-------------------|
| Raspberry Pi 4 | 5–7 W | ~8 $ |
| Raspberry Pi 5 | 8–15 W | ~14 $ |
| PC de bureau | 100–300 W | ~150–400 $ |
| NAS (2 baies) | 20–40 W | ~30–60 $ |

Un Raspberry Pi ne coûte pratiquement rien à faire fonctionner 24 h/24.

### Silencieux et compact

Pas de ventilateur (Pi 4), pas de bruit. Posez-le sur une étagère et oubliez-le.

### Suffisamment performant

Le Raspberry Pi 4 et le Pi 5 peuvent gérer :

- La synchronisation de milliers de fichiers vers le stockage cloud.
- L'exécution de tâches de sauvegarde planifiées.
- Le montage de stockage cloud pour un accès local.
- La gestion simultanée de plusieurs comptes cloud.

## Configuration matérielle

### Matériel recommandé

- **Raspberry Pi 4** (4 Go) ou **Raspberry Pi 5** (4–8 Go).
- **Disque externe USB 3.0** ou SSD pour le stockage local.
- **Carte MicroSD** (32 Go) pour le système d'exploitation.
- **Connexion Ethernet** (recommandée par rapport au Wi-Fi pour les gros transferts).
- **Alimentation** (l'alimentation officielle Pi est recommandée).

### Architecture de stockage

```
External USB Drive → Raspberry Pi → Cloud Storage
                          ↕
                    RcloneView (scheduling, monitoring)
```

Le disque externe contient vos fichiers locaux. RcloneView sur le Pi les synchronise vers le stockage cloud selon une planification.

## Installation

### 1) Installer Raspberry Pi OS

Utilisez Raspberry Pi Imager pour flasher Raspberry Pi OS (64 bits) sur votre carte microSD. L'édition Desktop est nécessaire pour l'interface graphique de RcloneView.

### 2) Installer RcloneView

Téléchargez le paquet `.deb` ARM64 depuis [rcloneview.com](https://rcloneview.com/src/download.html) :

```bash
sudo dpkg -i rcloneview_*_arm64.deb
sudo apt-get install -f
```

### 3) Installer FUSE (pour le montage)

```bash
sudo apt-get install fuse3
```

### 4) Monter votre disque externe

```bash
sudo mkdir /mnt/backup
sudo mount /dev/sda1 /mnt/backup
```

Ajoutez-le à `/etc/fstab` pour un montage automatique au démarrage.

### 5) Lancer RcloneView

```bash
rcloneview
```

Si vous utilisez le mode headless (via VNC), assurez-vous que le VNC est activé dans `raspi-config`.

## Configurer la sauvegarde cloud

### Ajouter vos distants cloud

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Raspberry Pi" class="img-large img-center" />

Ajoutez vos destinations de sauvegarde — Google Drive, S3, Backblaze B2, ou l'un des plus de 70 fournisseurs pris en charge.

### Créer des tâches de sauvegarde

Configurez des tâches de copie de votre disque externe vers le stockage cloud :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create backup job" class="img-large img-center" />

### Planifier des sauvegardes automatisées

Planifiez des sauvegardes nocturnes :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Pi backup jobs" class="img-large img-center" />

## Cas d'usage

### 1) Sauvegarde de serveur de fichiers domestique

Connectez un disque USB contenant les photos de famille, les documents et les médias. Planifiez des sauvegardes nocturnes vers Google Drive ou Backblaze B2.

### 2) Complément au NAS

Si votre NAS ne dispose pas d'une bonne fonction de synchronisation cloud, utilisez un Pi comme passerelle :

```
NAS (SMB share) → Pi (reads via mount) → Cloud Storage (via RcloneView)
```

### 3) Archivage de caméras de sécurité

Sauvegardez les images de vos caméras de sécurité depuis un NVR local vers le stockage cloud pour une protection hors site.

### 4) Sauvegarde de développeur

Synchronisez vos dépôts de code et fichiers de projet vers le stockage cloud :

- Filtrez pour n'inclure que les fichiers source (excluez `node_modules`, `.git`).
- Planifiez des sauvegardes horaires.

### 5) Miroir de bibliothèque multimédia

Conservez un miroir cloud de votre bibliothèque multimédia locale. Utilisez-le pour diffuser depuis Google Drive lorsque vous êtes loin de chez vous.

## Attentes en matière de performances

Soyez réaliste quant aux performances du Pi :

| Tâche | Raspberry Pi 4 | Raspberry Pi 5 |
|------|----------------|----------------|
| Synchronisation de petits fichiers (documents) | Bon | Excellent |
| Transfert de gros fichiers | Limité par l'USB 3/le réseau | Bon |
| Milliers de petits fichiers | Phase de vérification lente | Modéré |
| Transferts chiffrés | Limité par le CPU | Meilleur (support AES) |
| Vitesse réseau | ~300 Mbps (Ethernet Gigabit) | ~1 Gbps |

Pour les gros transferts, la patience aide. Le Pi n'est pas rapide, mais il fonctionne 24 h/24 — il finit par terminer.

### Conseils d'optimisation

- **Réduisez les transferts parallèles** — 2 à 4 est optimal pour le Pi 4. Le Pi 5 peut en gérer 4 à 8.
- **Utilisez l'Ethernet** — le Wi-Fi ajoute de la latence et réduit le débit.
- **Planifiez en heures creuses** — exécutez les tâches intensives la nuit.
- **SSD plutôt que disque dur** — un SSD USB se lit beaucoup plus vite qu'un disque à plateaux.

## Surveiller et vérifier

Suivez vos sauvegardes :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Pi backup transfers" class="img-large img-center" />

Vérifiez avec la comparaison de dossiers :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Pi cloud backup" class="img-large img-center" />

## Fonctionnement headless

Pour une configuration véritablement « configurez et oubliez » :

1. Configurez toutes les tâches et planifications via VNC ou directement.
2. Activez le démarrage automatique de RcloneView (voir le [guide Ubuntu/Debian](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)).
3. Débranchez l'écran et le clavier.
4. Le Pi fonctionne silencieusement, exécutant les tâches planifiées.

## Pour commencer

1. **Procurez-vous un Raspberry Pi 4 ou 5** avec un disque USB externe.
2. **Installez Raspberry Pi OS** (Desktop 64 bits).
3. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
4. **Ajoutez des distants cloud et créez des tâches de sauvegarde**.
5. **Planifiez et oubliez** — votre Pi s'occupe du reste.

L'appliance de sauvegarde cloud la moins chère, la plus silencieuse et la plus efficace que vous puissiez construire.

---

**Guides connexes :**

- [Installer RcloneView sur Ubuntu/Debian](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Définir des limites de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
