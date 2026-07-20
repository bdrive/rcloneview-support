---
slug: fix-cloud-sync-interrupted-network-retry-rcloneview
title: "Résoudre les interruptions de synchronisation cloud dues à des erreurs réseau — Réessayer et reprendre avec RcloneView"
authors:
  - tayson
description: "Découvrez comment récupérer des tâches de synchronisation cloud interrompues par des coupures réseau dans RcloneView. Utilisez les paramètres de nouvelle tentative, les relances depuis l'historique des tâches et le mode Dry Run pour vérifier l'état après une interruption."
keywords:
  - cloud sync interrupted network RcloneView
  - resume interrupted sync rclone
  - fix network error cloud sync
  - retry cloud sync RcloneView
  - cloud backup network drop fix
  - interrupted transfer recovery
  - rclone network retry settings
  - RcloneView sync resume
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les interruptions de synchronisation cloud dues à des erreurs réseau — Réessayer et reprendre avec RcloneView

> Les coupures réseau pendant une synchronisation cloud sont frustrantes mais pas catastrophiques — le mécanisme de nouvelle tentative de RcloneView et la fonction de relance depuis l'historique des tâches permettent de remettre votre transfert sur les rails.

Les interruptions réseau en cours de synchronisation font partie de la réalité, en particulier pour les transferts de longue durée via des connexions domestiques, des VPN ou des connexions limitées. Lorsque la connectivité est perdue pendant une tâche de synchronisation active, les fichiers déjà transférés sont en sécurité — mais vous devez savoir ce qui a été terminé, ce qui a échoué, et comment reprendre correctement. RcloneView propose une configuration des nouvelles tentatives, une relance des tâches depuis l'historique et une vérification par Dry Run pour gérer ce scénario proprement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Que se passe-t-il lorsque le réseau se coupe

Lorsque la connectivité réseau est perdue pendant une tâche de synchronisation, rclone (le moteur derrière RcloneView) tente de relancer les opérations en échec selon la configuration de nouvelle tentative de la tâche. Si le réseau ne revient pas dans la fenêtre de nouvelle tentative, la tâche est signalée comme échouée. Les fichiers correctement transférés avant l'interruption restent à destination — ils ne seront pas corrompus, mais ils ne seront pas non plus re-transférés inutilement lors de la prochaine exécution.

L'essentiel est de comprendre que les tâches de synchronisation RcloneView sont idempotentes : relancer une tâche de synchronisation compare la source et la destination et ne transfère que ce qui manque ou a changé.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing an interrupted sync in RcloneView" class="img-large img-center" />

## Configurer le comportement des nouvelles tentatives

Dans RcloneView, ouvrez votre tâche de synchronisation et accédez à l'étape 2 (options de transfert). Repérez les paramètres de nouvelle tentative :

- **Retry entire sync if fails** : activez cette option pour relancer automatiquement la synchronisation complète si des transferts échouent. La valeur par défaut est de 3 tentatives.
- **Low level retries** : contrôle le nombre de fois qu'un transfert de fichier individuel est retenté avant d'être marqué comme échoué (par défaut : 10)
- **Retry on failure** : garantit que les erreurs transitoires (y compris les délais d'attente réseau) déclenchent des nouvelles tentatives automatiques avec un backoff

Pour les tâches de synchronisation sur des connexions instables, définir **Retry entire sync** sur 5 tout en gardant **Low level retries** à 10 offre une résilience substantielle.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring retry settings in RcloneView job options" class="img-large img-center" />

## Reprendre depuis l'historique des tâches

Si une tâche échoue malgré les nouvelles tentatives, allez dans **Job History** et trouvez l'exécution échouée. L'entrée d'historique indique combien de fichiers ont été transférés et combien ont échoué. Cliquez sur **Re-run** — RcloneView relance la même tâche avec les mêmes paramètres. Comme la synchronisation compare l'état de la source et de la destination, les fichiers déjà transférés sont ignorés et seuls les fichiers restants ou en échec sont traités.

Cette approche est nettement plus rapide que de tout recommencer et évite de re-téléverser des données déjà arrivées en toute sécurité à destination.

## Utiliser Dry Run pour vérifier l'état

Après une interruption réseau, il se peut que vous ne soyez pas certain de l'état actuel de la synchronisation — surtout si l'échec s'est produit en plein milieu d'un fichier volumineux. Activez **Dry Run** sur la tâche et relancez-la. Dry Run montre ce que la prochaine exécution transférerait sans réellement déplacer quoi que ce soit. Cela vous donne une vision claire du nombre de fichiers restants avant de vous engager dans la synchronisation réelle.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Using Dry Run to verify sync state after network interruption" class="img-large img-center" />

## Gérer les interruptions de fichiers volumineux

Pour les transferts de fichiers individuels très volumineux (plusieurs Go), une coupure réseau en plein milieu du fichier signifie que ce fichier sera entièrement re-transféré lors de la prochaine exécution (sauf si le fournisseur cloud prend en charge les téléversements reprenables et le mode de transfert fragmenté de rclone). Pour minimiser la surcharge de re-transfert des fichiers volumineux, activez les **chunked uploads** dans les paramètres avancés de la tâche lorsque cela est pris en charge (fournisseurs compatibles S3, Google Drive). Cela permet aux téléversements partiels de reprendre à partir du dernier fragment terminé.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez les paramètres de votre tâche de synchronisation et activez **Retry entire sync if fails** avec 3 à 5 tentatives.
3. Après une tâche interrompue par le réseau, allez dans **Job History** et utilisez **Re-run** pour reprendre.
4. Utilisez **Dry Run** pour vérifier l'étendue du transfert restant avant la relance finale.

Avec une configuration adéquate des nouvelles tentatives et des relances depuis l'historique des tâches, les interruptions réseau deviennent un désagrément mineur plutôt qu'un échec de synchronisation.

---

**Guides connexes :**

- [Récupérer des transferts interrompus et échoués avec RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Surveillance de l'historique des tâches et des journaux de transfert](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Résoudre les erreurs rclone avec RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
