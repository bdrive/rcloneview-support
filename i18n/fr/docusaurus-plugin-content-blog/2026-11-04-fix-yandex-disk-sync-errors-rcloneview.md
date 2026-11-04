---
slug: fix-yandex-disk-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Yandex Disk — diagnostiquer et résoudre les transferts échoués avec RcloneView"
authors:
  - kai
description: "Corrigez les erreurs de synchronisation Yandex Disk avec RcloneView : réautoriser OAuth, ajuster les checkers et les nouvelles tentatives, lire les journaux DEBUG et vérifier les résultats avec Dry Run et Folder Compare."
keywords:
  - corriger les erreurs de synchronisation Yandex Disk
  - échec du transfert Yandex Disk
  - réautoriser OAuth Yandex Disk
  - dépannage RcloneView Yandex Disk
  - la synchronisation Yandex Disk ne fonctionne pas
  - erreurs rclone Yandex
  - dépannage de la synchronisation cloud
  - journal de débogage rclone
  - échec de la sauvegarde Yandex Disk
  - tâche Yandex Disk en erreur
tags:
  - RcloneView
  - yandex-disk
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Yandex Disk — diagnostiquer et résoudre les transferts échoués avec RcloneView

> Une méthode pas à pas pour comprendre pourquoi une tâche Yandex Disk a échoué et la corriger sans tout recopier.

Une tâche Yandex Disk qui se termine en « Errored » dans Job History est frustrante, surtout si elle s'est exécutée pendant la nuit. La plupart des échecs relèvent de quelques catégories : une connexion expirée, un parallélisme trop élevé pour un backend lent, ou une erreur de chemin et de filtre. RcloneView fournit les paramètres et les journaux nécessaires pour les distinguer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Commencer par Job History et l'onglet Log

Ouvrez **Job History** et repérez l'exécution échouée. Son statut, sa durée, sa taille totale et son nombre de fichiers indiquent si la tâche a échoué immédiatement (probablement l'authentification ou le chemin) ou en cours de route (probablement une limitation de débit ou un fichier précis). Consultez ensuite l'onglet **Log** de la Info View en bas pour voir les entrées horodatées autour de l'échec.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History affichant une exécution en erreur dans RcloneView" class="img-large img-center" />

Si le journal est trop succinct, allez dans Settings > Embedded Rclone, activez rclone Logging, réglez le niveau sur DEBUG, cliquez sur Restart Embedded Rclone et reproduisez le problème. Le fichier obtenu montre précisément quelle opération a échoué.

## Réautoriser une connexion expirée ou refusée

Yandex Disk se connecte via OAuth dans le navigateur. Si la liste d'un dossier échoue immédiatement, ou si chaque fichier est en erreur avec un message d'autorisation, ouvrez Remote Manager, modifiez le remote Yandex Disk et terminez à nouveau la connexion dans le navigateur. Actualisez ensuite le panneau Explorer. Une liste affichée correctement confirme la connexion avant de lancer une tâche.

<img src="/support/images/en/blog/new-remote.png" alt="Modification et réautorisation d'un remote dans RcloneView" class="img-large img-center" />

## Ajuster les paramètres de la tâche pour un backend plus lent

Si les erreurs n'apparaissent que sur les grosses tâches, réduisez la charge. Dans les Advanced Settings de l'assistant Sync, diminuez le nombre de transferts de fichiers et gardez les equality checkers à 4 ou moins pour les backends lents (la valeur par défaut est 8). Les 3 nouvelles tentatives par défaut de la synchronisation complète sont utiles contre les pannes passagères ; laissez-les activées. Envisagez d'activer checksum lorsque vous devez vérifier le contenu, et pas seulement la taille.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Paramètres avancés et planification des tâches dans RcloneView" class="img-large img-center" />

## Confirmer la correction sans tout recopier

Lancez un **Dry Run** pour voir ce qui serait encore transféré, puis relancez la tâche. Ouvrez **Compare** pour comparer Yandex Disk à la source : les fichiers présents uniquement à gauche ou différents (left-only, different) indiquent ce qui reste, et vous pouvez ne copier que ceux-ci.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare utilisé pour confirmer les différences restantes" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Examinez l'exécution échouée dans Job History et l'onglet Log.
3. Réautorisez le remote Yandex Disk si la liste échoue.
4. Réduisez les transferts et les checkers, faites un Dry Run, puis relancez et utilisez Compare.

Un diagnostic méthodique transforme un vague statut « Errored » en une courte liste de problèmes à corriger.

---

**Guides associés :**

- [Corriger les erreurs de quota plein sur Yandex Disk](https://rcloneview.com/support/blog/fix-yandex-disk-quota-full-errors-rcloneview)
- [Gérer la synchronisation cloud et la sauvegarde de Yandex Disk](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Synchroniser Yandex Disk vers Google Drive et S3](https://rcloneview.com/support/blog/sync-yandex-disk-google-drive-s3-rcloneview)

<CloudSupportGrid />
