---
slug: fix-rclone-connection-timeout-large-file-upload-rcloneview
title: "Corriger le délai d'attente de connexion lors des téléversements de fichiers volumineux — Résoudre avec RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les erreurs de délai d'attente de connexion lors du téléversement de fichiers volumineux vers un stockage cloud avec RcloneView. Ajustez la taille des blocs, les nouvelles tentatives et les paramètres de délai d'attente pour des transferts fiables."
keywords:
  - connection timeout large file upload
  - rclone upload timeout fix
  - large file transfer timeout cloud
  - fix cloud upload timeout RcloneView
  - rclone chunk size timeout
  - cloud storage upload failure
  - troubleshoot large file cloud upload
  - S3 multipart upload timeout
tags:
  - RcloneView
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger le délai d'attente de connexion lors des téléversements de fichiers volumineux — Résoudre avec RcloneView

> Les téléversements de fichiers volumineux vers le stockage cloud échouent avec des erreurs de délai d'attente plus souvent que les petits fichiers. Voici comment diagnostiquer la cause profonde et configurer RcloneView pour gérer de manière fiable les transferts de plusieurs Go.

Téléverser une archive vidéo de 20 Go ou un export de base de données de 50 Go vers un stockage cloud est fondamentalement différent de la synchronisation d'un dossier de documents. Les fichiers volumineux mettent à rude épreuve la stabilité de la connexion, épuisent les seuils de délai d'attente par défaut et révèlent des limitations de découpage multipart que les transferts de petits fichiers ne rencontrent jamais. RcloneView expose les indicateurs rclone dont vous avez besoin pour ajuster ces paramètres — via les indicateurs rclone globaux et les paramètres par tâche — sans nécessiter l'écriture de scripts shell.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reconnaître les erreurs de délai d'attente dans RcloneView

Lorsqu'un téléversement de fichier volumineux dépasse le délai d'attente, l'onglet **Log** de RcloneView affiche des entrées comme `Failed to copy: net/http: request canceled (Client.Timeout exceeded)` ou `RequestTimeout: Your socket connection to the server was not read from or written to within the timeout period`. L'onglet Transferring montre le fichier concerné bloqué à un pourcentage partiel avant que la tâche ne signale une erreur.

Les délais d'attente de connexion lors des téléversements volumineux sont les plus fréquents sur :
- Les fournisseurs compatibles S3 avec des fenêtres de temps strictes pour le téléversement des parties
- Les API cloud qui ferment les connexions inactives après 30 à 60 secondes
- Les chemins réseau avec perte de paquets intermittente augmentant la latence aller-retour

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring large file transfer progress in RcloneView" class="img-large img-center" />

## Ajuster la taille des blocs et les indicateurs de délai d'attente

La correction la plus efficace pour les erreurs de délai d'attente sur les fichiers volumineux consiste à ajuster la taille des blocs pour les téléversements multipart. Dans RcloneView, allez dans **Settings → Embedded Rclone → Global Rclone Flags** et ajoutez :

- `--s3-chunk-size 128M` — augmente la taille des blocs multipart S3 de la valeur par défaut de 5 Mo à 128 Mo, réduisant le nombre d'allers-retours API par fichier
- `--s3-upload-cutoff 200M` — définit le seuil de taille de fichier au-delà duquel les téléversements multipart sont utilisés
- `--timeout 5m` — étend le délai d'attente de connexion global à 5 minutes par opération

Pour Google Drive, utilisez `--drive-chunk-size 128M` au lieu de l'indicateur S3. Pour Backblaze B2, utilisez `--b2-chunk-size 128M`.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring global rclone flags for large file uploads in RcloneView" class="img-large img-center" />

## Activer les nouvelles tentatives et la reprise de transfert

Activez **Retry entire sync if fails** à l'étape 2 de l'assistant de synchronisation (réglez sur 3 ou 5 tentatives). La logique de nouvelle tentative de rclone essaie de reprendre les téléversements multipart là où ils se sont arrêtés pour les fournisseurs compatibles S3, minimisant le temps de transfert perdu. Pour les fournisseurs qui ne prennent pas en charge les téléversements reprenables (comme le WebDAV de base), les nouvelles tentatives redémarrent le fichier, mais la tâche globale se poursuit sans retransférer les fichiers déjà terminés.

Réduisez les transferts simultanés pour les tâches de fichiers volumineux. Régler **Number of file transfers** sur 2 à 4 réduit la demande de bande passante maximale et la contention des emplacements de connexion, qui est la cause sous-jacente de nombreuses erreurs de délai d'attente sur les réseaux congestionnés.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting retry and concurrency options for large file transfer in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Consultez l'onglet Log pour les messages d'erreur de délai d'attente après un échec de téléversement de fichier volumineux.
3. Ajoutez `--s3-chunk-size 128M` et `--timeout 5m` aux Global Rclone Flags dans Settings.
4. Réglez les transferts simultanés sur 2 à 4 et activez 3 à 5 nouvelles tentatives dans l'assistant de tâche de synchronisation.

Avec la bonne configuration de taille de blocs et de nouvelles tentatives, RcloneView gère les téléversements de plusieurs Go de manière fiable — même sur des connexions réseau imparfaites.

---

**Guides connexes :**

- [Téléverser des fichiers volumineux vers Google Drive Sync avec RcloneView](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [Corriger les téléversements cloud lents — Optimisation de la vitesse avec RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Corriger les échecs de téléversement multipart S3 avec RcloneView](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
