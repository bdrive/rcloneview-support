---
slug: vfs-cache-mount-performance-rcloneview
title: "Cache VFS — Améliorer les performances de montage pour les cloud drives dans RcloneView"
authors:
  - tayson
description: "Configurez les modes de cache VFS dans RcloneView pour améliorer les performances des cloud drives montés. Découvrez les stratégies de cache minimal, writes et full pour votre workflow."
keywords:
  - cache VFS
  - performances de montage
  - vitesse de cloud drive
  - cache rclone
  - modes VFS
  - optimisation du cache
  - stockage cloud monté
  - stratégie de cache disque
  - optimisation des performances
  - optimisation de l'accès aux fichiers
tags:
  - vfs
  - mount
  - performance
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cache VFS — Améliorer les performances de montage pour les cloud drives dans RcloneView

> Les cloud drives montés semblent lents par défaut—le cache VFS dans RcloneView échange de l'espace disque contre de la vitesse, vous permettant de travailler à la vitesse d'un disque local.

Lorsque vous montez un cloud drive (Google Drive, Dropbox, AWS S3) via RcloneView, chaque accès à un fichier passe par le réseau. Cela fonctionne, mais cela semble poussif—ouvrir un document prend une ou deux secondes, l'affichage des dossiers rame, et la lecture des fichiers semble bridée. Le cache VFS résout ce problème en mettant en cache localement les fichiers fréquemment consultés.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qu'est-ce que le cache VFS ?

Le cache VFS (Virtual File System) stocke les fichiers récemment consultés et les métadonnées des dossiers sur votre disque local. Lorsque vous ouvrez un fichier depuis un cloud drive monté, RcloneView vérifie d'abord le cache—accès instantané s'il y est, récupération réseau sinon. Au fil de votre travail, le cache grandit ; les entrées les plus anciennes sont évincées pour faire de la place.

Cette stratégie simple élimine la latence réseau des opérations courantes.

## Modes de cache VFS

RcloneView prend en charge trois modes de cache, chacun équilibrant vitesse et utilisation du disque :

### Mode 1 : Off (Sans cache)
Chaque accès passe par le réseau. Le plus sûr pour les fichiers dynamiques, le plus lent pour les accès répétés. À utiliser uniquement si l'espace disque est critique ou si les conflits de cache posent problème.

### Mode 2 : Cache minimal
Met en cache les métadonnées des fichiers (noms, tailles) et les fichiers récemment ouverts. Rapide pour la navigation dans les dossiers et les lectures répétées. Utilise un minimum d'espace disque—généralement moins d'1 Go pour la plupart des workflows.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView remote explorer and mount interface" width="600" />

**Idéal pour** : l'édition de documents, la navigation dans les photos, l'accès régulier aux fichiers sur des machines à espace disque limité.

### Mode 3 : Cache Writes
Comme le mode minimal, mais met également en cache les opérations d'écriture. Les fichiers que vous venez de modifier restent locaux avant la synchronisation en arrière-plan. Accélère considérablement les workflows avec des écritures fréquentes.

**Idéal pour** : la création de contenu, le montage vidéo, les opérations de fichiers en masse—des modifications à haut volume avant la synchronisation cloud.

### Mode 4 : Cache Full
Mise en cache agressive—tous les fichiers consultés sont mis en cache de façon permanente jusqu'à effacement manuel. Le plus rapide pour les accès répétés, mais avec la plus grande empreinte disque. Nécessite une gestion manuelle du cache.

**Idéal pour** : les données archivées, les workflows à forte lecture, les machines disposant d'un large espace disque.

## Configurer le cache VFS dans RcloneView

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView cloud-to-cloud transfer configuration" width="600" />

Ouvrez RcloneView et accédez à une configuration de montage :

1. Sélectionnez votre remote cloud (par ex. Google Drive)
2. Allez dans **Advanced Settings** → **VFS Cache**
3. Choisissez le mode de cache : Minimal, Writes ou Full
4. Définissez le répertoire de cache (par défaut : `/tmp/rcloneview-cache` sous Linux, `%TEMP%\rcloneview-cache` sous Windows)
5. Configurez la limite de taille du cache (par ex. 10 Go)—RcloneView évince automatiquement les anciens fichiers en cas de dépassement
6. Activez le backend de cache si vous utilisez un SSD local pour plus de vitesse

Appliquez et remontez—les performances s'améliorent instantanément.

## Bonnes pratiques pour le répertoire de cache

- **Placez le cache sur un stockage rapide** : SSD préférable à un HDD
- **Séparez-le du système** : utilisez une partition dédiée pour éviter de remplir votre disque système
- **Surveillez l'utilisation du disque** : vérifiez régulièrement la taille du cache ; augmentez la limite si les évictions sont fréquentes
- **Nettoyez périodiquement** : effacez les anciens caches si vous cessez d'utiliser un remote (sans risque—le cache se reconstruit)

## Gains de performance en conditions réelles

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView monitoring and performance tracking" width="600" />

Sans cache, l'affichage de la liste d'un dossier de 50 Mo prend 2 à 3 secondes. Avec le cache minimal, c'est instantané dès le deuxième accès. Écrire sur un drive monté ? Avec le cache writes activé, vous obtenez des vitesses de disque local (millisecondes) au lieu de la latence réseau (secondes).

Compromis : nécessite 5 à 50 Go d'espace disque selon votre workflow. Pour la plupart des utilisateurs, cela en vaut la peine.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un nouveau montage pour votre stockage cloud.
3. Dans Advanced Settings, activez le cache Minimal (commencez de façon conservatrice).
4. Remontez et testez—ouvrez des fichiers, parcourez des dossiers, mesurez l'amélioration de vitesse.
5. Si votre workflow implique des écritures intensives, passez au mode de cache Writes.
6. Surveillez le taux de succès du cache dans le panneau de statistiques ; ajustez les limites de taille selon les besoins.

Le cache VFS est l'une des fonctionnalités les plus puissantes et méconnues de RcloneView—un petit réglage, un gain de vitesse massif.

---

**Guides connexes :**

- [Monter un stockage cloud comme lecteur local — Guide complet dans RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Corriger les transferts cloud lents — Accélérer la synchronisation dans RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Remote Alias — Créer des raccourcis et des chemins personnalisés dans RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
