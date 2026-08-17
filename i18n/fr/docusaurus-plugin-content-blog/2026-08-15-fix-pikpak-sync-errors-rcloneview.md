---
slug: fix-pikpak-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation PikPak — Résoudre les problèmes de connexion avec RcloneView"
authors:
  - steve
description: "Dépannez les échecs courants de synchronisation et de connexion PikPak dans RcloneView grâce aux vérifications Dry Run, aux réglages de nouvelle tentative et aux étapes de réauthentification OAuth."
keywords:
  - erreurs de synchronisation PikPak
  - PikPak RcloneView
  - corriger connexion PikPak
  - jeton OAuth PikPak
  - erreurs de sauvegarde PikPak
  - dépannage synchronisation cloud
  - transfert de fichiers PikPak
  - problèmes rclone PikPak
  - réessayer synchronisation PikPak
tags:
  - RcloneView
  - troubleshooting
  - tips
  - pikpak
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation PikPak — Résoudre les problèmes de connexion avec RcloneView

> Les transferts bloqués et les tâches PikPak échouées se ramènent généralement à une poignée de causes réparables — voici comment les diagnostiquer et les résoudre dans RcloneView.

Les tâches de synchronisation PikPak qui échouent en cours de route, restent bloquées sans progresser ou déclenchent des erreurs de connexion sont particulièrement frustrantes lorsque vous comptez sur des sauvegardes planifiées. La plupart de ces problèmes s'expliquent par l'expiration d'un jeton, une concurrence de transfert réglée de façon trop agressive, ou des filtres qui excluent silencieusement les fichiers que vous vous attendiez à synchroniser. RcloneView vous donne les outils de diagnostic — Job History, Dry Run et le terminal intégré — pour isoler la cause réelle plutôt que de deviner.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnostiquer l'échec dans Job History

Avant de modifier le moindre réglage, ouvrez Job Manager et consultez l'entrée de l'exécution échouée dans Job History. Le champ Status indique si la tâche est passée en Errored ou a été Canceled, et Time Spent indique si elle a échoué instantanément (généralement un problème d'authentification) ou en cours de route (généralement un fichier précis ou une coupure réseau). Filtrez par plage de dates pour comparer une exécution échouée à une précédente réussie.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Examen d'une tâche de synchronisation PikPak échouée dans Job History de RcloneView" class="img-large img-center" />

Si la tâche échoue instantanément à chaque tentative, la connexion du distant PikPak a probablement été rompue — retestez-la depuis Remote Manager avant de toucher aux réglages de synchronisation.

## Réauthentifier et retester le distant

Ouvrez Remote Manager, sélectionnez votre distant PikPak et vérifiez que la connexion réussit toujours. Si le test échoue, le distant doit être réajouté avec des identifiants à jour — les connexions PikPak peuvent nécessiter une réauthentification après de longues périodes d'inactivité. Une fois le test réussi, relancez la même tâche en exécution ponctuelle avant de la réenregistrer dans votre planification.

<img src="/support/images/en/blog/new-remote.png" alt="Test d'une connexion à un distant PikPak dans Remote Manager de RcloneView" class="img-large img-center" />

RcloneView connecte PikPak aux côtés de plus de 90 autres fournisseurs dans la même fenêtre, si bien que la réauthentification d'un distant ne perturbe jamais vos autres clouds configurés ni vos tâches de synchronisation.

## Ajuster les réglages de transfert et les filtres

Si les tests de connexion réussissent mais que les transferts restent bloqués, ouvrez les Advanced Settings de la tâche de synchronisation et réduisez le nombre de transferts de fichiers simultanés ainsi que le nombre d'equality checkers — PikPak peut limiter les requêtes parallèles trop agressives. Vérifiez également les Filtering Settings de l'étape 3 : un filtre max file age ou de taille trop large peut ignorer silencieusement des fichiers que vous vous attendiez à voir synchronisés, ce qui ressemble à un échec sans en être un.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Ajustement des réglages de tâche de synchronisation pour une sauvegarde PikPak dans RcloneView" class="img-large img-center" />

Exécutez un Dry Run après chaque modification de réglage. Il liste précisément les fichiers qui seraient copiés ou supprimés sans toucher à votre compte PikPak, ce qui permet de confirmer que la correction fonctionne avant de lancer une synchronisation réelle.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Consultez l'entrée de la tâche échouée dans Job History pour identifier quand et comment elle a échoué.
3. Retestez la connexion du distant PikPak dans Remote Manager et actualisez les identifiants si nécessaire.
4. Réduisez la concurrence de transfert et revérifiez les filtres, puis confirmez avec un Dry Run avant de reprogrammer.

Passer quelques minutes à isoler la cause dans Job History fait gagner bien plus de temps que de relancer sans cesse une tâche qui échoue pour une raison encore non identifiée.

---

**Guides connexes :**

- [Gérer PikPak — Téléchargements cloud avec RcloneView](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [Migrer PikPak vers Google Drive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [Synchroniser PikPak avec Google Drive et S3 avec RcloneView](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)

<CloudSupportGrid />
