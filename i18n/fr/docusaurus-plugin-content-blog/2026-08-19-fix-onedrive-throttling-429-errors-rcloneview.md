---
slug: fix-onedrive-throttling-429-errors-rcloneview
title: "Corriger les erreurs de limitation 429 de OneDrive — Synchronisation fiable avec RcloneView"
authors:
  - steve
description: "Empêchez les erreurs de limitation 429 Too Many Requests de OneDrive d'interrompre vos grandes synchronisations — configurez les tentatives et les limites de transfert dans RcloneView."
keywords:
  - OneDrive 429 error
  - OneDrive throttling fix
  - OneDrive too many requests
  - RcloneView OneDrive sync
  - fix OneDrive API rate limit
  - OneDrive sync failed retry
  - reduce OneDrive throttling
  - OneDrive large sync errors
  - Microsoft Graph API throttling
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

# Corriger les erreurs de limitation 429 de OneDrive — Synchronisation fiable avec RcloneView

> Quand OneDrive commence à renvoyer des erreurs 429 Too Many Requests en pleine synchronisation, la solution n'est pas de relancer aveuglément, mais de réduire la pression que vous exercez sur l'API Microsoft Graph.

OneDrive impose des limites de débit de requêtes sur l'API Microsoft Graph, et une tâche de synchronisation qui déplace des milliers de petits fichiers, ou qui s'exécute en même temps que plusieurs autres tâches, peut rapidement dépasser ces limites, provoquant l'arrêt ou l'échec des transferts en cours de route avec des réponses 429. C'est différent d'une erreur de quota ou de stockage plein — le compte dispose encore d'espace, mais Microsoft rejette temporairement les requêtes parce qu'elles arrivent trop rapidement. RcloneView vous donne un contrôle direct sur la concurrence des transferts et le comportement des tentatives, afin que vous puissiez ajuster une tâche OneDrive pour rester sous le seuil au lieu de marteler l'API et d'échouer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reconnaître une erreur de limitation 429

Consultez l'onglet Log dans l'Info View en bas et recherchez des réponses HTTP 429 ou des messages faisant référence à une limitation de débit pendant une tâche OneDrive — c'est différent d'un échec d'authentification ou d'un message « quota dépassé », qui indiquent des jetons expirés ou un compte plein. Les erreurs de limitation ont tendance à apparaître par rafales en plein milieu de grandes tâches, souvent lorsque de nombreux petits fichiers sont transférés simultanément plutôt que quelques gros fichiers. Si la tâche finit par se terminer après plusieurs tentatives espacées, c'est un signe fort que la logique de nouvelle tentative intégrée se rétablit déjà d'elle-même après la limitation.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing a OneDrive sync job with retries" class="img-large img-center" />

## Réduire la concurrence pour limiter le throttling

La solution la plus directe consiste à réduire le nombre de requêtes que RcloneView envoie à OneDrive en même temps. Dans l'étape Advanced Settings de la tâche de synchronisation, réduisez le nombre de transferts de fichiers et le nombre de vérificateurs d'égalité (equality checkers) — la spécification recommande 4 vérificateurs d'égalité ou moins pour les backends qui limitent de façon agressive, et OneDrive en fait partie. Les transferts multi-thread peuvent aussi être réduits par rapport à la valeur par défaut de 4, ou complètement désactivés en la mettant à 0, ce qui échange une partie du débit brut contre une tâche qui se termine sans déclencher de limites de débit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring transfer settings for a OneDrive sync job" class="img-large img-center" />

## Laisser les tentatives faire leur travail

Les tâches de synchronisation de RcloneView incluent un paramètre « Retry entire sync if fails », réglé par défaut sur 3 tentatives, ce qui suffit souvent à surmonter une fenêtre de limitation temporaire, puisque les limites de débit de OneDrive se réinitialisent après une courte période de refroidissement. Évitez de régler cette valeur sur 1 (désactivant les tentatives) sur toute tâche OneDrive qui déplace un grand nombre de fichiers, car une seule réponse 429 ferait alors échouer toute la tâche au lieu d'être automatiquement relancée. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux, donc si OneDrive n'est qu'un remote parmi plusieurs dans votre flux de travail, vous pouvez échelonner les tâches sur différents fournisseurs pour éviter de concentrer les requêtes sur le backend le plus sujet à la limitation.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a OneDrive sync job to run at off-peak times" class="img-large img-center" />

## Espacer les tâches planifiées

Si vous exécutez des tâches de synchronisation OneDrive selon un planning, évitez de déclencher plusieurs tâches OneDrive exactement au même moment — même sur des dossiers différents, elles partagent la limite de débit du même compte. Les utilisateurs de la licence PLUS peuvent décaler les plannings de type crontab de quelques minutes entre les tâches pour que les requêtes ne s'accumulent pas, et peuvent prévisualiser les prochains horaires d'exécution avec le simulateur de planification avant d'enregistrer. Pour les très gros transferts ponctuels, exécuter la tâche pendant les heures creuses peut aussi réduire le risque de collision avec un autre trafic automatisé sur le même compte Microsoft.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) si ce n'est pas déjà fait.
2. Ouvrez la tâche OneDrive qui génère des erreurs 429 et vérifiez son onglet Log pour repérer le schéma des échecs.
3. Réduisez les transferts de fichiers et les vérificateurs d'égalité dans Advanced Settings, et confirmez que les tentatives sont réglées sur au moins 3.
4. Relancez la tâche et observez l'onglet Transferring pour confirmer qu'elle se termine sans blocage.

Une synchronisation plus lente et régulière qui se termine de façon fiable vaut mieux qu'une synchronisation rapide qui échoue à mi-parcours et vous laisse dans l'incertitude quant à ce qui a réellement été transféré.

---

**Guides associés :**

- [Gérer le stockage OneDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation OneDrive — Comment les résoudre avec RcloneView](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-rcloneview)
- [Corriger les erreurs de limitation de débit des API cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
