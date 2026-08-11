---
slug: fix-hidrive-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation HiDrive — sauvegarde cloud fiable avec RcloneView"
authors:
  - jay
description: "Diagnostiquez et corrigez les erreurs de synchronisation HiDrive courantes — expiration de jeton, délais d'attente et transferts échoués — grâce aux outils intégrés de nouvelle tentative et de journalisation de RcloneView."
keywords:
  - erreur de synchronisation HiDrive
  - corriger erreur de connexion HiDrive
  - échec de sauvegarde HiDrive
  - dépannage de synchronisation cloud HiDrive
  - HiDrive RcloneView
  - jeton OAuth HiDrive expiré
  - échec de téléversement HiDrive
  - problèmes de synchronisation HiDrive Strato
  - dépannage du stockage cloud
  - HiDrive rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - hidrive
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation HiDrive — sauvegarde cloud fiable avec RcloneView

> Les téléversements bloqués, les sessions expirées et les échecs de synchronisation silencieux sur HiDrive proviennent généralement d'une poignée de causes corrigibles — voici comment les diagnostiquer et les résoudre dans RcloneView.

Les utilisateurs de HiDrive qui sauvegardent des photos, des documents ou des fichiers professionnels rencontrent souvent des tâches de synchronisation qui s'arrêtent en cours de transfert ou qui échouent à s'authentifier après plusieurs semaines d'inactivité. Ces problèmes sont rarement causés par le stockage lui-même — il s'agit presque toujours d'une incohérence de jeton, de synchronisation temporelle ou de configuration de filtre, que RcloneView peut détecter et corriger directement depuis son interface. RcloneView synchronise et compare également des dossiers sur HiDrive — avec la licence FREE, sans mise à niveau requise.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnostiquer la cause racine

HiDrive se connecte à RcloneView via une connexion OAuth dans le navigateur, et la plupart des erreurs de synchronisation se répartissent en trois catégories : autorisation expirée, coupures réseau temporaires ou filtre mal configuré. Commencez par ouvrir le panneau **Job History** (historique des tâches) dans le Job Manager — chaque exécution échouée enregistre son statut comme Completed, Errored ou Canceled, ainsi que le temps exact passé et les fichiers transférés avant l'échec.

Si l'erreur apparaît dès le début d'une tâche, il s'agit généralement d'un problème d'autorisation. Si des fichiers sont transférés partiellement avant l'arrêt, il s'agit plus probablement d'un délai d'attente réseau ou d'une interruption sur un fichier volumineux. Identifier le schéma observé permet de réduire considérablement le champ de la correction avant même de toucher aux paramètres.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Panneau Job History de RcloneView affichant le statut d'exécution et les erreurs de synchronisation HiDrive" class="img-large img-center" />

## Ré-authentification et ajustement du comportement de nouvelle tentative

Lorsqu'une session HiDrive expire, ajouter à nouveau le distant (remote) via Remote Manager et effectuer à nouveau la connexion dans le navigateur restaure la connexion sans supprimer les configurations de tâches existantes. Une fois reconnecté, retournez à l'**étape 2 : Advanced Settings** de l'assistant de synchronisation et vérifiez que **Retry entire sync if fails** est réglé au-dessus de 1 — la valeur par défaut de 3 relance automatiquement une tâche échouée au lieu de la laisser bloquée en état d'erreur.

Pour les dossiers contenant de nombreux petits fichiers, abaissez également le **Number of equality checkers** à 4 ou moins, car des backends plus lents comme HiDrive peuvent expirer lorsque RcloneView vérifie trop de fichiers simultanément. Activer la comparaison par **checksum** plutôt que de se fier uniquement à la date de modification permet aussi d'éviter les faux positifs de « fichier modifié » qui déclenchent des retéléversements inutiles.

<img src="/support/images/en/blog/new-remote.png" alt="Reconnexion d'un distant HiDrive dans RcloneView après une erreur d'autorisation" class="img-large img-center" />

## Exécuter un Dry Run avant de valider les modifications

Avant de relancer une synchronisation HiDrive volumineuse après une correction, utilisez **Dry Run** pour simuler la tâche. Il liste précisément les fichiers qui seront copiés ou supprimés sans effectuer aucune modification réelle, ce qui constitue le moyen le plus rapide de confirmer si vos réglages de nouvelle tentative et de filtre ont réellement résolu l'erreur plutôt que de simplement la masquer. Cette étape est particulièrement utile après avoir ajusté l'âge maximal des fichiers ou les règles de filtre personnalisées, car un filtre mal configuré peut exclure silencieusement des fichiers que vous souhaitiez synchroniser.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuration des paramètres de tâche de synchronisation et des filtres pour une sauvegarde HiDrive dans RcloneView" class="img-large img-center" />

Si l'erreur persiste après ces étapes, activez la journalisation rclone dans Settings > Embedded Rclone, réglez le niveau de journal sur DEBUG, redémarrez le processus rclone intégré et reproduisez l'échec — le fichier journal obtenu précise la réponse API exacte renvoyée par HiDrive.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Job History et déterminez si l'erreur HiDrive survient au début ou en cours de transfert.
3. Ré-authentifiez le distant HiDrive et ajustez les paramètres de nouvelle tentative, de checksum et d'equality checkers.
4. Exécutez un Dry Run pour confirmer la correction avant de lancer la synchronisation complète.

Une routine de sauvegarde HiDrive fiable repose sur la détection précoce de ces petites erreurs de configuration, et les outils d'historique des tâches et de Dry Run de RcloneView rendent ce diagnostic simple.

---

**Guides associés :**

- [Gérer le stockage HiDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Corriger l'expiration du jeton OAuth cloud — Comment résoudre avec RcloneView](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [Dépanner les erreurs Rclone — Comment résoudre avec RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
