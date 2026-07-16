---
slug: serve-webdav-http-from-cloud-rcloneview
title: "Exposer un stockage cloud en WebDAV ou HTTP avec RcloneView"
authors:
  - tayson
description: "Utilisez la commande serve de rclone via RcloneView pour exposer un stockage cloud en tant que serveur WebDAV ou HTTP local. Accédez à vos fichiers dans des applications compatibles WebDAV sans monter de lecteur."
keywords:
  - rclone serve webdav
  - exposer un stockage cloud en webdav
  - rcloneview serve http
  - serveur webdav de stockage cloud
  - serveur local webdav rclone
  - accéder au cloud via webdav
  - servir google drive en webdav
  - guide de la commande rclone serve
  - webdav depuis un stockage cloud
  - fonctionnalité serve de rcloneview
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - feature
  - guide
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exposer un stockage cloud en WebDAV ou HTTP avec RcloneView

> RcloneView peut exposer n'importe quel fournisseur de stockage cloud en tant que serveur WebDAV ou HTTP local. Toute application compatible WebDAV — gestionnaires de fichiers, outils DAM, applications créatives, clients mobiles — peut alors lire et écrire directement les fichiers cloud.

Monter un lecteur cloud avec la couche VFS de rclone est la méthode la plus courante pour exposer un stockage cloud en local. Mais certains scénarios demandent une approche différente : un serveur WebDAV auquel les applications peuvent se connecter via le réseau, un simple serveur HTTP pour servir des fichiers à un navigateur, ou un moyen léger d'accéder à un stockage cloud depuis un appareil qui ne peut pas monter de lecteurs FUSE. La commande `serve` de rclone gère tous ces cas — et RcloneView vous y donne accès via le terminal et l'interface de tâches.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que rclone peut servir

Rclone prend en charge plusieurs protocoles serveur via la commande `rclone serve` :

| Protocole | Cas d'usage |
|----------|----------|
| `webdav` | Gestionnaires de fichiers, outils DAM, applications compatibles WebDAV |
| `http` | Accès navigateur en lecture seule aux fichiers cloud |
| `ftp` | Compatibilité avec les applications héritées |
| `sftp` | Accès sécurisé aux fichiers via shell |
| `s3` | Exposer n'importe quel cloud comme compatible S3 (à utiliser avec des clients S3) |
| `dlna` | Diffusion multimédia vers des appareils compatibles DLNA |

Ce guide se concentre sur WebDAV et HTTP, les protocoles les plus utiles pour les workflows sur poste de travail.

## Cas d'usage 1 : WebDAV pour l'intégration d'applications

De nombreuses applications professionnelles prennent en charge WebDAV nativement : Cyberduck, Finder (macOS), Adobe Bridge, outils DAM, outils de gestion de projet, et plus encore. Exposer votre stockage cloud en WebDAV le rend accessible à ces applications sans montage de lecteur.

### Démarrer un serveur WebDAV depuis RcloneView

Ouvrez le panneau **Terminal** dans RcloneView et exécutez :

```bash
rclone serve webdav gdrive:/Documents/ --addr 127.0.0.1:8888 --user myuser --pass mypassword
```

Cela démarre un serveur WebDAV sur `http://127.0.0.1:8888` exposant votre dossier Google Drive `/Documents/`.

<img src="/support/images/en/blog/new-remote.png" alt="Open RcloneView terminal to start serve command" class="img-large img-center" />

### Se connecter depuis une application

Dans toute application compatible WebDAV, ajoutez une connexion WebDAV :
- **URL** : `http://127.0.0.1:8888`
- **Nom d'utilisateur** : `myuser`
- **Mot de passe** : `mypassword`

L'application verra votre dossier Google Drive Documents comme un partage WebDAV — consultable, lisible et modifiable.

## Cas d'usage 2 : HTTP pour un accès navigateur en lecture seule

Pour partager des fichiers avec des collègues sans leur accorder d'accès au compte cloud, servez un dossier en HTTP :

```bash
rclone serve http s3-remote:my-bucket/reports/ --addr 0.0.0.0:8080
```

N'importe qui sur le réseau peut ouvrir `http://your-machine-ip:8080` dans un navigateur et voir une liste de répertoire avec des liens de téléchargement — aucun compte cloud requis.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse served cloud files in browser" class="img-large img-center" />

## Cas d'usage 3 : Servir en S3 pour la compatibilité avec les clients S3

Une technique puissante : exposer un cloud non-S3 (comme Google Drive ou l'API native de Backblaze B2) en tant que point de terminaison compatible S3, afin que n'importe quel client S3 puisse y accéder :

```bash
rclone serve s3 gdrive:/Backups/ --addr 127.0.0.1:9000 --auth-key ACCESSKEY,SECRETKEY
```

Les clients S3 (AWS CLI, s3cmd, n'importe quel SDK S3) peuvent alors se connecter à `http://127.0.0.1:9000` et interagir avec Google Drive comme s'il s'agissait de S3.

## Créer une tâche serve persistante

Pour exécuter une commande serve au démarrage ou selon une planification :

1. Dans RcloneView, créez une nouvelle **Tâche** en mode **Commande personnalisée**.
2. Saisissez votre commande `rclone serve webdav` avec les options souhaitées.
3. Configurez-la pour qu'elle démarre automatiquement au lancement de RcloneView, ou planifiez-la selon vos besoins.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule serve job to run on startup" class="img-large img-center" />

## Considérations de sécurité

| Scénario | Recommandation |
|----------|---------------|
| Usage local uniquement | Se lier à `127.0.0.1` — non accessible en dehors de votre machine |
| Partage sur réseau local | Se lier à l'IP locale de votre machine, ajouter `--user` et `--pass` |
| Exposé sur Internet | Utiliser HTTPS (ajouter les options `--cert` et `--key`) ou placer derrière un reverse proxy |
| Serveur HTTP public | Utiliser `rclone serve http` avec un VFS en lecture seule : ajouter `--read-only` |

Définissez toujours un nom d'utilisateur/mot de passe pour tout serveur accessible au-delà de `127.0.0.1` :

```bash
rclone serve webdav remote:path --addr 0.0.0.0:8888 --user admin --pass strongpassword --read-only
```

## Options serve utiles

| Option | Fonction |
|------|---------|
| `--addr host:port` | Adresse et port de liaison |
| `--user` / `--pass` | Authentification HTTP Basic |
| `--read-only` | Empêcher les écritures |
| `--vfs-cache-mode full` | Mettre les fichiers en cache localement pour de meilleures performances |
| `--no-modtime` | Désactiver le rapport de date de modification (utile pour certaines applications) |
| `--htpasswd /path/file` | Utiliser un fichier htpasswd pour plusieurs utilisateurs |

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ouvrez le Terminal** dans RcloneView.
3. **Exécutez `rclone serve webdav remote:path --addr 127.0.0.1:8888`** pour démarrer un serveur WebDAV.
4. **Connectez-vous depuis votre application** en utilisant l'URL WebDAV et les identifiants.

WebDAV débloque l'accès au stockage cloud pour des dizaines d'applications qui ne pourraient sinon pas lire vos fichiers cloud. Aucun montage requis.

---

**Guides associés :**

- [Monter un stockage cloud comme lecteur local](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Monter SFTP et SMB comme lecteurs locaux](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Terminal RcloneView : le CLI intégré à l'interface graphique](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)

<CloudSupportGrid />
