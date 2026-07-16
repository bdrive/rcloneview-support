---
slug: fix-cloud-transfer-stalled-progress-rcloneview
title: "Résoudre un transfert cloud bloqué — Comment corriger le problème avec RcloneView"
authors:
  - tayson
description: "Résolvez les transferts cloud bloqués ou figés dans RcloneView — diagnostiquez les tâches de synchronisation coincées, résolvez les délais d'attente et relancez les transferts sans perte de données."
keywords:
  - transfert cloud bloqué
  - correction synchronisation bloquée
  - blocage de transfert RcloneView
  - envoi cloud bloqué
  - corriger une synchronisation bloquée
  - délai d'attente de transfert rclone
  - sauvegarde cloud sans progression
  - résoudre un transfert figé
  - blocage de transfert cloud
  - récupération après délai d'attente rclone
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre un transfert cloud bloqué — Comment corriger le problème avec RcloneView

> Un transfert affichant 99 % pendant des heures révèle un problème sous-jacent précis — RcloneView vous offre les outils de surveillance et de contrôle nécessaires pour diagnostiquer le blocage et relancer proprement le transfert sans perte de données.

Un transfert cloud qui se fige près de son achèvement, ou une tâche de synchronisation qui s'exécute indéfiniment sans se terminer, est l'un des problèmes de gestion cloud les plus perturbants. Les transferts bloqués résultent généralement de fichiers volumineux atteignant les limites de délai d'attente de l'API, d'interruptions réseau que la logique de nouvelle tentative de rclone ne parvient pas à récupérer, ou d'une limitation côté fournisseur qui fait stagner les connexions. RcloneView met en évidence ce qui se passe et vous permet d'intervenir avec précision.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnostiquer le blocage

Ouvrez l'onglet **Transferring** de RcloneView dans la vue d'informations en bas de l'écran. Ce panneau affiche les tâches actives avec une progression en temps réel : vitesse de transfert, nombre de fichiers et fichier spécifique en cours de traitement. Un blocage y est immédiatement visible : la vitesse chute à 0 B/s tandis qu'un fichier spécifique ne montre plus aucune progression.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView Transferring tab showing a stalled cloud transfer" class="img-large img-center" />

Passez à l'onglet **Log** pour consulter les messages d'erreur. Les causes courantes de blocage y apparaissent avec un horodatage :
- **« too many requests »** — la limitation de débit de l'API ralentit le transfert
- **« connection reset by peer »** — une interruption réseau a rompu la session active
- **« EOF »** ou des messages de délai d'attente — le fournisseur a fermé la connexion pendant l'envoi d'un fichier volumineux

Pour les fichiers très volumineux (fichiers vidéo de plusieurs Go, dumps de bases de données), le problème provient souvent d'un délai d'expiration de session côté fournisseur pendant l'assemblage d'un envoi multipart. L'envoi se termine, mais la session du fournisseur expire avant que celui-ci n'accuse réception des parties complétées, ce qui fait attendre rclone indéfiniment.

## Récupérer un transfert bloqué

Annulez la tâche bloquée en cliquant sur **Cancel** sur la tâche active dans l'onglet Transferring. Les tâches de synchronisation et de copie de RcloneView sont conçues pour un redémarrage sûr — lorsque vous relancez la même tâche, rclone compare ce qui existe déjà à la destination et ignore les fichiers déjà transférés avec succès. Seul le fichier bloqué (et tout ce qui n'avait pas encore commencé) sera retenté.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Canceling and restarting a stalled transfer job in RcloneView" class="img-large img-center" />

Pour des blocages persistants sur des fichiers volumineux spécifiques vers des backends compatibles S3, augmentez la taille des blocs (chunk size) dans les indicateurs globaux rclone de RcloneView (Settings > Embedded Rclone > Global Rclone Flags) : ajoutez `--s3-chunk-size 256M` pour réduire le nombre total d'appels API nécessaires à l'assemblage des fichiers volumineux.

## Prévenir les blocages futurs

Réglez le nombre de tentatives dans les paramètres de tâche (Step 2: Advanced Settings > **Retry entire sync if fails**) à 3 ou plus — cela garantit que les problèmes réseau transitoires déclenchent des nouvelles tentatives automatiques plutôt qu'un échec immédiat de la tâche. Pour les transferts sur des connexions lentes ou instables (VPN, point d'accès mobile), réduire le **nombre de transferts de fichiers** (transferts simultanés) diminue la contention sur la liaison.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing recovered transfers after stall resolution in RcloneView" class="img-large img-center" />

L'onglet **Job History** montre les tendances dans le temps — si la même tâche se bloque systématiquement à un moment précis de la journée, la cause est probablement une limitation de débit côté fournisseur pendant les heures de pointe. Ajuster votre planification à des horaires creux résout ce problème sans aucune modification de configuration.

## Pour commencer

1. Surveillez les transferts dans l'onglet **Transferring** — recherchez une vitesse de 0 B/s sur un fichier spécifique.
2. Consultez l'onglet **Log** pour les messages d'erreur indiquant la cause profonde (délai d'attente, limitation de débit, réinitialisation réseau).
3. Annulez et relancez la tâche — rclone reprend là où il s'est arrêté, en ignorant les fichiers déjà terminés.
4. Augmentez le nombre de tentatives et ajustez la taille des blocs dans Advanced Settings pour éviter de futurs blocages.

Les transferts bloqués sont presque toujours récupérables — l'essentiel est d'identifier si la cause vient du fournisseur, du réseau ou de la configuration, puis d'appliquer la correction ciblée.

---

**Guides connexes :**

- [Récupérer des transferts cloud interrompus ou échoués avec RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Corriger les envois cloud lents — Optimisation de la vitesse avec RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Surveillance de l'historique des tâches et des journaux de transfert avec RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
