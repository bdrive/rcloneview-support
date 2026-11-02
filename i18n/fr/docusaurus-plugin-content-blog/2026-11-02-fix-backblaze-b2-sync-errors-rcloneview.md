---
slug: fix-backblaze-b2-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Backblaze B2 — diagnostic et résolution avec RcloneView"
authors:
  - alex
description: "Dépannez les erreurs de synchronisation Backblaze B2 avec RcloneView : vérifiez la portée de l'Application Key, lisez les journaux, ajustez transferts et nouvelles tentatives, et vérifiez le résultat avec Folder Compare."
keywords:
  - corriger les erreurs de synchronisation Backblaze B2
  - Backblaze B2 401 unauthorized
  - autorisations application key B2
  - échec de synchronisation B2
  - dépannage rclone B2
  - RcloneView Backblaze B2
  - erreurs d'envoi B2
  - dépannage de la synchronisation cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - backblaze-b2
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Backblaze B2 — diagnostic et résolution avec RcloneView

> La plupart des échecs de synchronisation B2 se ramènent à quelques causes : la portée de la clé, les nouvelles tentatives ou des journaux que vous n'avez pas encore consultés.

Une synchronisation Backblaze B2 qui se bloque ou signale des erreurs se corrige généralement en quelques minutes dès que l'on voit ce que rclone rapporte réellement. RcloneView affiche l'état des jobs, les journaux et un terminal intégré dans une seule fenêtre, ce qui permet de diagnostiquer sans deviner. Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture avec la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier d'abord l'Application Key

Les remotes B2 s'authentifient avec un Application Key ID et une Application Key. Si un job échoue immédiatement avec une erreur d'autorisation, les suspects habituels sont une clé limitée à un autre bucket, une clé sans droit d'écriture, ou une erreur de copier-coller où l'ID de clé et la clé sont inversés ou suivis d'un espace.

Ouvrez Remote Manager, modifiez le remote B2 et saisissez à nouveau les deux valeurs. Si vous générez une nouvelle clé dans la page de gestion des clés de Backblaze, n'oubliez pas que l'Application Key complète n'est affichée qu'une seule fois, à sa création. Parcourez ensuite le bucket dans l'Explorer : si la liste s'affiche mais que les envois échouent, la clé n'a probablement pas le droit d'écriture.

<img src="/support/images/en/blog/new-remote.png" alt="Modification d'un remote Backblaze B2 dans RcloneView" class="img-large img-center" />

## Lire Job History et les journaux

Ouvrez Job History pour voir l'état de chaque exécution (Completed, Errored ou Canceled), sa durée, ses fichiers et sa vitesse. Une exécution qui ne génère des erreurs que sur certains fichiers indique des problèmes propres à ces fichiers ; une exécution qui échoue dès le départ indique un problème d'identifiants ou de connectivité.

Pour plus de détails, activez la journalisation rclone dans Settings > Embedded Rclone, réglez le niveau de journal sur DEBUG, redémarrez le rclone intégré et reproduisez le problème. L'onglet Log et le fichier journal affichent alors des entrées horodatées dans lesquelles vous pouvez rechercher le fichier ou le message en cause.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History affichant des exécutions en erreur et terminées dans RcloneView" class="img-large img-center" />

## Ajuster les transferts et les nouvelles tentatives

Les erreurs lors de longues exécutions proviennent souvent d'une concurrence trop élevée. Dans les Advanced Settings du job, réduisez le nombre de transferts de fichiers et d'equality checkers (4 checkers ou moins sont recommandés pour les backends lents). Conservez « Retry entire sync if fails » à sa valeur par défaut de 3 afin que les coupures réseau transitoires se résorbent d'elles-mêmes. Pour un photographe qui synchronise des milliers de fichiers RAW pendant la nuit, réduire la concurrence est un premier ajustement raisonnable lorsque des erreurs apparaissent.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi en direct des transferts dans l'onglet Transferring de RcloneView" class="img-large img-center" />

## Vérifier et relancer en toute sécurité

Après les modifications, lancez un Dry Run pour prévisualiser ce qui serait copié ou supprimé. Exécutez ensuite le job et utilisez Folder Compare entre le dossier local et le bucket B2 : les fichiers left-only sont ceux qu'il reste à envoyer, et les fichiers different révèlent des écarts de taille. Utilisez Copy right pour combler les manques, puis comparez à nouveau jusqu'à obtenir un résultat propre.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare confirmant une synchronisation B2 dans RcloneView" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Saisissez à nouveau votre Application Key ID et votre Key B2 dans Remote Manager.
3. Activez la journalisation DEBUG et relancez le job en échec.
4. Réduisez la concurrence, lancez un Dry Run, puis vérifiez avec Folder Compare.

Un passage méthodique sur les clés, les journaux et les paramètres transforme la plupart des erreurs B2 en correction rapide.

---

**Guides associés :**

- [Gérer Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation Wasabi](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)
- [Dry Run : prévisualiser la synchronisation avant le transfert](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
