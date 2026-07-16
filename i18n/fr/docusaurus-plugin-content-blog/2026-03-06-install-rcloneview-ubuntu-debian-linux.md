---
slug: install-rcloneview-ubuntu-debian-linux
title: "Comment installer RcloneView sur Ubuntu et Debian Linux — Guide de configuration complet"
authors:
  - tayson
description: "Guide étape par étape pour installer RcloneView sur Ubuntu 22.04/24.04 et Debian 12. Couvre le téléchargement, les dépendances, la configuration de FUSE pour le montage, et le dépannage des problèmes courants."
keywords:
  - install rcloneview linux
  - rcloneview ubuntu
  - rcloneview debian
  - rclone gui linux
  - rcloneview linux setup
  - cloud sync tool linux
  - rclone desktop linux
  - mount cloud storage linux
  - rcloneview installation guide
  - linux cloud file manager
tags:
  - linux
  - ubuntu
  - debian
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment installer RcloneView sur Ubuntu et Debian Linux — Guide de configuration complet

> RcloneView fonctionne nativement sur Linux. Ce guide vous accompagne dans l'installation sur Ubuntu et Debian, y compris la configuration de FUSE pour monter du stockage cloud en tant que lecteurs locaux.

Les utilisateurs de Linux comptent depuis longtemps sur la ligne de commande de rclone pour la gestion du stockage cloud. RcloneView ajoute une interface graphique complète par-dessus rclone — explorateur de fichiers à deux volets, tâches de synchronisation visuelles, planification et montage en un clic. Voici comment le faire fonctionner sur Ubuntu et Debian.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuration système requise

- **OS** : Ubuntu 20.04, 22.04, 24.04 ou Debian 11, 12
- **Architecture** : x86_64 (AMD64)
- **RAM** : 4 Go minimum (8 Go recommandés pour les transferts volumineux)
- **Disque** : 200 Mo pour l'installation
- **Dépendances** : FUSE 3 (pour le montage), bibliothèques d'exécution Qt 6

## Étape 1 : Télécharger RcloneView

Téléchargez le paquet `.deb` depuis le site officiel :

Visitez [rcloneview.com/src/download.html](https://rcloneview.com/src/download.html) et téléchargez le paquet Linux `.deb`.

## Étape 2 : Installer le paquet

Installez avec `dpkg` :

```bash
sudo dpkg -i rcloneview_*.deb
```

S'il manque des dépendances, corrigez-les :

```bash
sudo apt-get install -f
```

Cela installe RcloneView et récupère automatiquement toutes les bibliothèques Qt requises.

## Étape 3 : Configurer FUSE pour le montage

Pour monter du stockage cloud en tant que répertoires locaux, vous avez besoin de FUSE :

```bash
sudo apt-get install fuse3
```

Vérifiez que FUSE fonctionne :

```bash
fusermount3 --version
```

### Autoriser le montage non-root

Modifiez la configuration de FUSE :

```bash
sudo nano /etc/fuse.conf
```

Décommentez la ligne :

```
user_allow_other
```

Cela permet à RcloneView de monter avec l'option `--allow-other`, rendant les lecteurs montés accessibles à votre utilisateur.

## Étape 4 : Lancer RcloneView

Lancez depuis votre menu d'applications ou le terminal :

```bash
rcloneview
```

Au premier lancement, RcloneView détectera ou téléchargera automatiquement le dernier binaire rclone.

## Étape 5 : Ajouter votre premier remote

Cliquez sur **Add Remote** et configurez votre fournisseur cloud :

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Linux" class="img-large img-center" />

## Étape 6 : Monter du stockage cloud

Montez n'importe quel remote en tant que répertoire local. Accédez à votre Google Drive, vos buckets S3 ou OneDrive comme s'il s'agissait de dossiers locaux :

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount cloud storage on Linux" class="img-large img-center" />

Les remotes montés apparaissent comme des répertoires classiques — parcourez-les dans Nautilus, Dolphin, ou tout autre gestionnaire de fichiers.

## Dépannage

### « rclone not found »

RcloneView inclut ou télécharge rclone automatiquement. S'il ne le trouve pas :

```bash
which rclone
```

Si rclone n'est pas installé, RcloneView vous invitera à le télécharger. Vous pouvez aussi l'installer manuellement :

```bash
sudo apt-get install rclone
```

### Le montage échoue avec « Permission denied »

Assurez-vous que FUSE est installé et que `user_allow_other` est activé dans `/etc/fuse.conf`. Redémarrez ensuite RcloneView.

### Erreurs de bibliothèque Qt

Si vous voyez des erreurs de bibliothèque Qt manquante :

```bash
sudo apt-get install libqt6widgets6 libqt6gui6 libqt6core6 libqt6network6
```

### Alternative AppImage

Si vous préférez ne pas installer à l'échelle du système, RcloneView propose également une AppImage :

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

L'AppImage regroupe toutes les dépendances et fonctionne sans installation.

## Démarrage automatique à la connexion

Pour démarrer RcloneView automatiquement à la connexion, ajoutez-le au démarrage automatique de votre environnement de bureau :

**GNOME (Ubuntu) :**

Créez `~/.config/autostart/rcloneview.desktop` :

```ini
[Desktop Entry]
Type=Application
Name=RcloneView
Exec=rcloneview
Hidden=false
X-GNOME-Autostart-enabled=true
```

Cela garantit que vos tâches de synchronisation planifiées et vos lecteurs montés sont disponibles dès que vous vous connectez.

## Ce que vous pouvez faire maintenant

Avec RcloneView fonctionnant sur Linux, vous pouvez :

- **Parcourir** plus de 70 fournisseurs cloud dans un explorateur à deux volets.
- **Monter** n'importe quel cloud en tant que répertoire local.
- **Synchroniser** entre clouds, NAS et stockage local.
- **Planifier** des tâches de sauvegarde automatisées.
- **Comparer** des dossiers avant la synchronisation pour éviter les conflits.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView running on Linux" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Installez** avec `dpkg -i` et `apt-get install -f`.
3. **Configurez FUSE** pour le montage.
4. **Ajoutez des remotes**, montez, synchronisez et planifiez.

---

**Guides connexes :**

- [Monter du stockage cloud en tant que lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
