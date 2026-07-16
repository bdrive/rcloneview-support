---
slug: fix-onedrive-sync-errors-rcloneview
title: "Résoudre les erreurs de synchronisation OneDrive — Comment les corriger avec RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les erreurs de synchronisation Microsoft OneDrive courantes dans RcloneView — des jetons OAuth expirés et limites de débit aux transferts bloqués et écarts de somme de contrôle."
keywords:
  - onedrive sync errors rcloneview
  - fix onedrive sync issues
  - onedrive rate limit error rclone
  - onedrive authentication expired rcloneview
  - microsoft onedrive transfer stalled
  - fix onedrive connection rcloneview
  - onedrive backup errors troubleshoot
  - cloud sync troubleshooting guide
  - onedrive rclone gui fix
  - resolve onedrive sync failures
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs de synchronisation OneDrive — Comment les corriger avec RcloneView

> Les erreurs de synchronisation OneDrive dans RcloneView remontent généralement à l'une de trois causes — jetons OAuth expirés, limites de débit de l'API, ou paramètres de transfert mal configurés — et chacune a une solution claire dans l'application.

Microsoft OneDrive est l'une des plateformes cloud professionnelles les plus largement déployées, mais le comportement de son API peut parfois produire des erreurs de synchronisation qui laissent les transferts bloqués, incomplets, ou en échec silencieux. RcloneView vous offre un environnement structuré pour diagnostiquer ces problèmes grâce à des journaux horodatés, une surveillance des transferts en temps réel, et des contrôles de tâches granulaires — sans avoir besoin de passer par la ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Consultez d'abord l'onglet Log

Avant de modifier tout paramètre, ouvrez l'onglet **Log** dans la vue Info en bas de RcloneView. Chaque opération de transfert et de synchronisation y écrit des entrées horodatées, y compris les codes d'erreur renvoyés par l'API de OneDrive. Un message `AccessDenied` ou `InvalidAuthenticationToken` indique un jeton OAuth expiré ; un message `429 Too Many Requests` indique une limite de débit ; et une erreur `EOF` ou de connexion signale généralement une interruption réseau plutôt qu'un problème spécifique à OneDrive.

Identifier la classe d'erreur exacte avant d'apporter des modifications fait gagner du temps — la correction d'un problème de jeton est complètement différente de celle d'une limite de débit.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and log tab in RcloneView for diagnosing OneDrive sync errors" class="img-large img-center" />

## Réauthentifiez-vous lorsque le jeton OAuth expire

Les connexions OneDrive dans RcloneView utilisent l'authentification OAuth par navigateur. Le jeton d'accès se rafraîchit automatiquement pendant les sessions actives, mais si un distant est resté inactif pendant une période prolongée, le jeton peut expirer complètement — provoquant l'échec de toutes les tâches de synchronisation ciblant ce compte OneDrive avec des erreurs d'authentification.

La solution est simple : allez dans l'onglet **Remote** > **Remote Manager**, repérez le distant OneDrive, et cliquez sur **Edit**. RcloneView ouvrira une fenêtre de navigateur pour vous permettre de vous reconnecter et d'obtenir un nouveau jeton. Une fois enregistré, relancez la tâche échouée. Aucune modification de la configuration de la tâche n'est nécessaire — seul le rafraîchissement des identifiants est requis.

<img src="/support/images/en/blog/new-remote.png" alt="Editing a OneDrive remote in RcloneView Remote Manager to refresh OAuth token" class="img-large img-center" />

## Réduisez les transferts simultanés en cas d'erreurs de limite de débit

OneDrive applique des limites de débit d'API par utilisateur, et les tâches configurées avec un nombre élevé de transferts de fichiers simultanés peuvent déclencher des réponses `429` — provoquant des échecs partiels ou des nouvelles tentatives qui ralentissent considérablement la tâche globale. Le nombre de tentatives par défaut (3 essais) masque souvent les problèmes de limite de débit, les faisant ressembler à des erreurs intermittentes.

Ouvrez la tâche dans **Job Manager** et cliquez sur **Edit**. À l'étape 2 (Advanced Settings), réduisez le **Number of file transfers** par rapport à la valeur par défaut, à 2 ou 4. Si la tâche utilise un nombre élevé de vérificateurs d'égalité, réduisez également cette valeur — la recommandation officielle est de 4 ou moins pour les backends qui répondent lentement aux requêtes de métadonnées. Enregistrez la tâche, puis relancez-la.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing OneDrive job settings to reduce concurrent transfers in RcloneView" class="img-large img-center" />

## Utilisez le mode Dry Run avant de relancer une tâche échouée

Une synchronisation partielle peut laisser le dossier de destination dans un état incohérent — certains fichiers transférés, d'autres non. Avant de relancer une tâche échouée, utilisez le mode **dry run** pour prévisualiser exactement quels fichiers seront copiés ou supprimés. Le dry run n'apporte aucune modification ; il génère une liste complète des opérations prévues afin que vous puissiez vérifier que la tâche se terminera proprement à partir du point où elle s'est arrêtée.

Dans Job Manager, sélectionnez la tâche et choisissez **Dry Run** parmi les options d'exécution. Examinez attentivement la liste des fichiers, en particulier si le dossier source a changé pendant l'exécution de la tâche précédente.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Dry run preview of OneDrive sync job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet **Log** après une tâche échouée pour identifier la classe d'erreur spécifique avant d'apporter des modifications.
3. Pour les erreurs d'authentification, modifiez le distant OneDrive dans Remote Manager et réauthentifiez-vous via le navigateur.
4. Pour les erreurs de limite de débit, réduisez les transferts de fichiers simultanés à 2–4 dans les Advanced Settings de l'étape 2 de la tâche, puis relancez d'abord avec un aperçu dry run.

La plupart des erreurs de synchronisation OneDrive se résolvent en quelques minutes une fois que vous avez fait correspondre la solution à la cause racine — l'historique des tâches et les journaux de RcloneView vous donnent tout ce dont vous avez besoin pour y arriver rapidement.

---

**Guides connexes :**

- [Résoudre les transferts cloud bloqués — Comment les corriger avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [Migrer OneDrive vers Amazon S3 — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Synchroniser Backblaze B2 vers OneDrive — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-backblaze-b2-to-onedrive-rcloneview)

<CloudSupportGrid />
