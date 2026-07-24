---
slug: fix-koofr-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Koofr — Dépanner et résoudre avec RcloneView"
authors:
  - morgan
description: "Corrigez les erreurs de synchronisation Koofr courantes dans RcloneView, des échecs de connexion aux limites de quota et transferts bloqués, avec des solutions claires étape par étape."
keywords:
  - erreurs de synchronisation Koofr
  - corriger Koofr RcloneView
  - échec de connexion Koofr
  - délai de connexion Koofr dépassé
  - quota Koofr dépassé
  - dépannage RcloneView
  - synchronisation cloud Koofr
  - erreurs de sauvegarde Koofr
  - Koofr rclone
  - dépannage stockage cloud
tags:
  - RcloneView
  - koofr
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Koofr — Dépanner et résoudre avec RcloneView

> Les tâches de synchronisation Koofr se bloquent, échouent à l'authentification ou ignorent silencieusement des fichiers ? **RcloneView** vous donne la visibilité et les outils nécessaires pour diagnostiquer et résoudre le problème rapidement.

Koofr est une solide solution de stockage cloud européenne, mais comme chez tout fournisseur, les tâches de synchronisation peuvent rencontrer des problèmes d'authentification, des limites de quota ou des erreurs de transfert qui laissent perplexe. Les outils Job History, l'onglet Log et Dry Run de RcloneView permettent d'identifier facilement la cause plutôt que de deviner. Ce guide passe en revue les erreurs de synchronisation Koofr les plus courantes et explique comment les corriger directement depuis RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Échecs de connexion ou d'authentification

Si un remote Koofr cesse soudainement de se connecter, les identifiants enregistrés ont peut-être expiré ou été révoqués côté compte Koofr, ou un changement de mot de passe sur Koofr n'a pas été répercuté dans RcloneView.

**Comment résoudre le problème :**

Ouvrez le Remote Manager, sélectionnez le remote Koofr, et ressaisissez vos identifiants pour rafraîchir la connexion. Si le remote continue d'échouer, supprimez-le puis rajoutez-le comme nouveau remote via l'assistant New Remote plutôt que de modifier celui qui est défaillant — une réauthentification propre résout la plupart des problèmes de session obsolète.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

## Les tâches de synchronisation échouent en cours de route

Une tâche qui copie certains fichiers puis s'arrête, ou qui affiche le statut « Errored » dans Job History, indique généralement un problème réseau temporaire, une limitation de débit, ou un fichier problématique unique (caractères invalides, chemin anormalement long, ou fichier de verrouillage de zéro octet) qui bloque le reste du lot.

**Comment résoudre le problème :**

Ouvrez Job History et filtrez par « Errored » pour voir précisément quelle exécution a échoué et quand. Augmentez le compteur « Retry entire sync if fails » à l'étape 2 de l'assistant de tâche — la valeur par défaut de 3 gère automatiquement la plupart des incidents réseau temporaires. Si le même fichier échoue systématiquement, utilisez une règle de filtre personnalisée à l'étape 3 pour l'exclure temporairement et confirmez que le reste de la synchronisation se termine correctement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry and advanced sync settings in RcloneView" class="img-large img-center" />

## Quota de stockage atteint

Si les envois vers Koofr s'arrêtent en cours de synchronisation sans erreur évidente, vérifiez si le compte a atteint sa limite de stockage. Koofr, comme la plupart des fournisseurs, refuse simplement les nouvelles écritures une fois le quota plein.

**Comment résoudre le problème :**

Exécutez `rclone about "koofr:"` dans l'onglet Rclone Terminal intégré pour vérifier l'utilisation actuelle par rapport à votre quota. Si l'espace est limité, utilisez les outils de détection de changement de taille de Folder Compare pour trouver les dossiers consommant le plus d'espace avant de libérer de la place ou de mettre à niveau votre forfait Koofr.

## Les fichiers ne correspondent plus après la synchronisation

Si les fichiers semblent copiés mais que Koofr affiche des tailles ou des horodatages différents de la source, il s'agit généralement d'un problème de direction ou de timing de synchronisation plutôt que d'un bug propre à Koofr.

**Comment résoudre le problème :**

Exécutez un Dry Run avant la synchronisation réelle pour prévisualiser exactement ce qui sera copié ou supprimé — cela permet de repérer les erreurs de direction avant qu'elles n'affectent vos données. Utilisez ensuite Folder Compare entre la source et le remote Koofr pour confirmer que les deux côtés correspondent. Les outils de synchronisation et de Folder Compare de RcloneView sont tous deux disponibles avec la licence FREE, vous pouvez donc vérifier les résultats sans quitter l'application.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and Koofr folders in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Rajoutez votre remote Koofr si l'authentification échoue, plutôt que de modifier un remote expiré.
3. Consultez Job History pour repérer le point d'échec exact et ajustez les paramètres de nouvelle tentative ou de filtre en conséquence.
4. Exécutez un Dry Run et un Folder Compare après toute correction pour confirmer que la synchronisation est propre par la suite.

Une petite routine de diagnostic — d'abord Job History, puis Dry Run, puis Compare — résout la plupart des problèmes de synchronisation Koofr sans avoir besoin de la ligne de commande.

---

**Guides connexes :**

- [Gérer le stockage Koofr — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr comme hub multi-cloud avec RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Migrer de Koofr vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)

<CloudSupportGrid />
