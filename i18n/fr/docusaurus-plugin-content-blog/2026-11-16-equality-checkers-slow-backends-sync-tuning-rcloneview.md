---
slug: equality-checkers-slow-backends-sync-tuning-rcloneview
title: "Number of Equality Checkers — Ajuster les comparaisons de synchronisation pour les backends lents dans RcloneView"
authors:
  - kai
description: "Découvrez à quoi sert le réglage Number of equality checkers dans l'assistant de synchronisation de RcloneView et comment l'ajuster pour SFTP, FTP, WebDAV et les distants cloud soumis à des limites de requêtes."
keywords:
  - réglage rclone checkers
  - number of equality checkers
  - rclone checkers GUI
  - ajuster la synchronisation pour backends lents
  - performances de synchronisation SFTP
  - synchronisation WebDAV lente
  - limite de requêtes API cloud synchronisation
  - réglages de synchronisation avancés RcloneView
  - synchronisation avec comparaison de somme de contrôle
tags:
  - RcloneView
  - feature
  - performance
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Number of Equality Checkers — Ajuster les comparaisons de synchronisation pour les backends lents dans RcloneView

> Avant de copier quoi que ce soit, une synchronisation doit déterminer quels fichiers correspondent déjà. Le nombre de checkers détermine la pression que cette étape exerce sur votre stockage.

Chaque tâche Sync dans RcloneView commence par comparer les fichiers source et destination pour déterminer ce qui doit réellement être transféré. Ce travail est effectué par les equality checkers, et le Step 2 de l'assistant de synchronisation vous permet de définir combien s'exécutent en parallèle. La valeur par défaut de 8 convient à la plupart des fournisseurs cloud, mais un petit serveur SFTP, un partage WebDAV ou un fournisseur aux limites d'API strictes se comportent souvent mieux avec moins.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que font les equality checkers

Un checker examine un fichier des deux côtés et décide s'il est identique. Par défaut, la comparaison se fait sur la taille et la date de modification. Si vous cochez **Enable checksum** à la même étape, les fichiers sont comparés par hash et taille, ce qui est plus strict mais demande au backend un hash pour chaque fichier.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Opening a sync job in RcloneView to adjust advanced settings" class="img-large img-center" />

Les checkers sont distincts de **Number of file transfers**, qui contrôle le nombre de fichiers copiés simultanément. Une synchronisation de 200 000 petits fichiers dont la plupart sont inchangés passe bien plus de temps à vérifier qu'à transférer : le nombre de checkers peut donc compter davantage que le nombre de transferts.

## Quand réduire le nombre de checkers

RcloneView recommande d'utiliser 4 ou moins pour les backends lents. Cas typiques :

- **SFTP ou FTP sur un serveur modeste.** Des vérifications parallèles signifient davantage de connexions simultanées, et un petit VPS ou un NAS ancien peut refuser ou brider les sessions supplémentaires.
- **Partages WebDAV** qui répondent lentement aux requêtes de métadonnées.
- **Fournisseurs cloud aux limites de requêtes strictes**, où des rafales de requêtes parallèles déclenchent des erreurs de limitation et des nouvelles tentatives.

Réduire les checkers échange du parallélisme brut contre une progression plus régulière. Si le journal affiche des tentatives répétées ou des erreurs de connexion pendant la phase de comparaison, descendez à 4, puis à 2, et relancez.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring sync progress and speed in the RcloneView Transferring tab" class="img-large img-center" />

## Quand la valeur par défaut suffit

Le stockage objet compatible S3, comme Amazon S3, Wasabi ou Cloudflare R2, supporte généralement 8 checkers sans difficulté, et les disques locaux ou un NAS sur un LAN rapide nécessitent rarement un réglage. RcloneView monte ET synchronise 90+ fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux ; il est donc courant qu'une même machine ait besoin de valeurs de checkers différentes selon les tâches : laissez la tâche S3 par défaut et réduisez uniquement la tâche SFTP.

## Mesurer l'effet avec Dry Run et Job History

Modifiez un seul réglage à la fois. Lancez un Dry Run pour confirmer la portée de la tâche, puis exécutez la synchronisation et ouvrez Job History, qui enregistre Time Spent, Status et le nombre de fichiers de chaque exécution. Comparer deux exécutions de la même tâche avec des valeurs de checkers différentes montre si le changement a aidé. Si le réglage de nouvelle tentative (**Retry entire sync if fails**, par défaut 3) se déclenche sans cesse, c'est un autre signe que le backend demande moins de requêtes parallèles.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Comparing sync run durations in RcloneView Job History after changing the checker count" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Job Manager et modifiez la tâche de synchronisation qui cible votre distant lent.
3. Au Step 2, réglez **Number of equality checkers** sur 4 et décidez si vous avez besoin de **Enable checksum**.
4. Exécutez la tâche, puis comparez Time Spent et le statut avec les exécutions précédentes dans Job History.

Quelques minutes de réglage transforment une synchronisation qui piétine en phase de comparaison en une synchronisation qui se termine sans à-coups.

---

**Guides associés :**

- [Accélérer les transferts cloud — Envois multithread et flux parallèles dans RcloneView](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)
- [Corriger les transferts cloud lents — Accélérer la synchronisation et la copie dans RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Migrations cloud vérifiées par somme de contrôle avec RcloneView (Drive, Dropbox, S3, R2)](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
