---
slug: fix-idrive-e2-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation IDrive e2 — dépanner le stockage compatible S3 avec RcloneView"
authors:
  - kai
description: "Corrigez les erreurs de synchronisation IDrive e2 courantes dans RcloneView, des problèmes de clé d'accès aux transferts bloqués et fichiers non concordants, avec des solutions claires étape par étape."
keywords:
  - erreurs de synchronisation idrive e2
  - corriger idrive e2 rcloneview
  - erreur de clé d'accès idrive e2
  - délai de connexion idrive e2
  - échec d'envoi idrive e2
  - dépannage rcloneview
  - synchronisation s3 idrive e2
  - erreurs de sauvegarde idrive e2
  - erreurs de stockage compatible s3
  - dépannage du stockage cloud
tags:
  - RcloneView
  - idrive-e2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation IDrive e2 — dépanner le stockage compatible S3 avec RcloneView

> Les tâches de synchronisation IDrive e2 rejettent les identifiants, se bloquent en cours de transfert ou laissent des fichiers non concordants ? **RcloneView** vous donne la visibilité nécessaire pour isoler la cause et relancer les transferts.

IDrive e2 est un service de stockage objet compatible S3, si bien que la plupart des problèmes de synchronisation remontent aux mêmes causes récurrentes : une paire de clés d'accès erronée, un point de terminaison régional incorrect, ou un transfert interrompu par un incident réseau en cours de route. RcloneView se connecte à IDrive e2 avec un accès complet en lecture/écriture dès la licence FREE, et ses outils Job History, l'onglet Log et Dry Run permettent d'identifier précisément où une tâche a échoué au lieu de la relancer à l'aveugle. Ce guide couvre les erreurs de synchronisation IDrive e2 les plus courantes et la manière de résoudre chacune d'elles directement depuis RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Clé d'accès ou authentification rejetée

Si un remote IDrive e2 renvoie soudainement une erreur d'authentification, la cause la plus courante est un Access Key ID ou une Secret Access Key régénérée ou révoquée côté IDrive e2 après la configuration du remote dans RcloneView, ou une URL de point de terminaison qui ne correspond plus à la région du compte.

**Comment corriger :**

Ouvrez Remote Manager, sélectionnez le remote IDrive e2, puis ressaisissez l'Access Key ID et la Secret Access Key actuelles depuis votre tableau de bord IDrive e2. Vérifiez soigneusement que le champ point de terminaison correspond exactement à la région affichée dans votre compte IDrive e2, car un point de terminaison erroné produit le même rejet qu'une clé incorrecte. Si le remote échoue toujours, supprimez-le puis recréez-le via l'assistant New Remote pour obtenir une configuration propre.

<img src="/support/images/en/blog/new-remote.png" alt="Reconfiguring an IDrive e2 remote in RcloneView" class="img-large img-center" />

## Tâches de synchronisation bloquées ou en erreur dans Job History

Une tâche qui copie une partie d'un bucket puis affiche « Errored », ou qui semble se figer en cours de route, est généralement due à une coupure réseau passagère, une limitation de débit temporaire du point de terminaison S3, ou un objet unique au nom problématique qui bloque le reste du lot.

**Comment corriger :**

Consultez Job History et filtrez sur « Errored » pour voir précisément quelle exécution et à quel horodatage l'échec s'est produit. Augmentez le compteur « Retry entire sync if fails » à l'étape 2 de l'assistant de tâche — la valeur par défaut de 3 corrige automatiquement la plupart des échecs passagers. Si un objet particulier échoue systématiquement, excluez-le via une règle de filtre personnalisée à l'étape 3 et vérifiez que le reste du transfert se termine.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry settings for an IDrive e2 sync job in RcloneView" class="img-large img-center" />

## Envois lents ou limités

Les points de terminaison de stockage objet limitent parfois une connexion qui ouvre trop de flux simultanés, ce qui se traduit par des envois qui rampent bien en dessous de la vitesse attendue plutôt que par un échec pur et simple.

**Comment corriger :**

Réduisez les valeurs « Number of file transfers » et « Number of multi-thread transfers » à l'étape 2 de l'assistant de synchronisation — un nombre de flux simultanés élevé peut déclencher une limitation sur certains backends compatibles S3. Observez l'onglet Transferring pour vérifier que la vitesse se stabilise après la modification, et activez la comparaison par somme de contrôle pour éviter que les fichiers relancés ne soient retransférés inutilement.

## Fichiers non concordants après une synchronisation

Si le nombre ou la taille des objets sur IDrive e2 ne correspond pas à la source à la fin d'une synchronisation, il s'agit généralement d'une erreur de direction de synchronisation ou d'une règle de filtre excluant plus que prévu, et non d'un bug côté stockage.

**Comment corriger :**

Exécutez un Dry Run avant la synchronisation réelle pour prévisualiser exactement ce qui sera copié ou supprimé, et repérer les erreurs de direction avant qu'elles n'affectent votre bucket. Utilisez ensuite Folder Compare entre la source et le remote IDrive e2 — les outils de détection des changements de taille de Folder Compare font rapidement apparaître les dossiers qui diffèrent, et la synchronisation comme la comparaison sont disponibles avec la licence FREE de RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and IDrive e2 bucket contents in RcloneView" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ressaisissez ou recréez votre remote IDrive e2 si l'authentification échoue.
3. Consultez Job History pour localiser le point d'échec exact et ajustez les réglages de réessai, de filtre ou de threads en conséquence.
4. Exécutez Dry Run et Folder Compare après chaque correction pour confirmer que la synchronisation est propre par la suite.

Une courte routine de diagnostic — d'abord Job History, puis Dry Run, puis Compare — règle la plupart des problèmes de synchronisation IDrive e2 sans jamais ouvrir de terminal.

---

**Guides associés :**

- [Gérer le stockage IDrive e2 — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Gérer IDrive e2 comme sauvegarde cloud compatible S3 — RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Corriger les échecs d'envoi multipart S3 avec RcloneView](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
