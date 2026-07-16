---
slug: fix-dropbox-rate-limit-api-errors-rcloneview
title: "Corriger les erreurs de limite de débit de l'API Dropbox — Résoudre les problèmes de transfert avec RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les erreurs de limite de débit 429 de Dropbox dans RcloneView. Réduisez les transferts simultanés, ajustez les vérificateurs et configurez les paramètres de nouvelle tentative pour terminer votre synchronisation."
keywords:
  - Dropbox rate limit error RcloneView
  - fix Dropbox 429 error
  - Dropbox too_many_requests rclone
  - Dropbox API rate limit fix
  - RcloneView Dropbox transfer error
  - Dropbox sync slow rate limit
  - rclone Dropbox throttling
  - fix Dropbox upload rate limit
tags:
  - dropbox
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de limite de débit de l'API Dropbox — Résoudre les problèmes de transfert avec RcloneView

> Dropbox applique des limites de débit d'API qui provoquent des erreurs 429 lors des transferts en masse — ajuster la concurrence et les paramètres de nouvelle tentative dans RcloneView les résout de manière fiable.

Lors de la synchronisation d'un grand nombre de fichiers vers ou depuis Dropbox, vous pouvez rencontrer des erreurs telles que `too_many_requests`, HTTP 429, ou `dropbox: too many requests - retry after X seconds`. Il s'agit de réponses de limite de débit de l'API de Dropbox, et non de défaillances de connexion. La solution consiste à réduire le nombre de requêtes simultanées envoyées par RcloneView, à configurer le comportement de nouvelle tentative et à comprendre quelles opérations déclenchent les limites de Dropbox.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifier l'erreur dans les journaux

Lorsqu'une limitation de débit Dropbox se produit, les erreurs apparaissent dans l'onglet **Log** (Journal) de RcloneView pendant ou après l'exécution d'une tâche. Recherchez les entrées contenant :

- `HTTP 429`
- `too_many_requests`
- `dropbox: retry after`
- `failed to copy: ... rate limit`

Ouvrez l'onglet Log pendant qu'une tâche est en cours d'exécution ou après son achèvement pour voir les messages d'erreur complets. La présence de ces messages confirme une limitation de débit plutôt qu'un problème de réseau ou d'identifiants.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Checking Dropbox rate limit errors in RcloneView job logs" class="img-large img-center" />

## Réduire les transferts simultanés

La cause principale des limites de débit Dropbox est un nombre trop élevé d'appels d'API simultanés. Dans RcloneView, ouvrez votre tâche de synchronisation et allez à l'étape 2 (options de transfert). Réduisez les paramètres suivants :

- **Transfers** (Transferts) : réduisez la valeur par défaut à **2 ou 3** pour Dropbox. L'API Dropbox est plus sensible à la concurrence que les fournisseurs compatibles S3.
- **Checkers** (Vérificateurs) : réduisez à **4 ou moins**. Les vérificateurs effectuent des recherches d'existence de fichiers et de métadonnées, qui comptent également dans les limites de requêtes de l'API Dropbox.

Enregistrez les paramètres de la tâche et relancez-la. Dans la plupart des cas, réduire la concurrence à 2-3 transferts élimine les erreurs de limite de débit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Adjusting transfer concurrency for Dropbox in RcloneView job settings" class="img-large img-center" />

## Configurer la nouvelle tentative en cas d'échec

RcloneView transmet les paramètres de nouvelle tentative de rclone pour les tâches. Dans les options de la tâche, assurez-vous que **retry on failure** (nouvelle tentative en cas d'échec) est activé. Par défaut, rclone retente les transferts échoués jusqu'à 3 fois avec un délai exponentiel. Lorsque Dropbox renvoie une erreur 429 avec un en-tête `retry-after`, rclone respecte cet en-tête et attend avant de réessayer — ce comportement intégré gère automatiquement les limitations de débit transitoires.

Si les erreurs persistent, vous pouvez augmenter le nombre de tentatives dans les options avancées de la tâche. Pour les très grandes bibliothèques Dropbox (plus de 100 000 fichiers), définir les tentatives à 5 ou plus donne à la tâche plus de résilience face à une limitation intermittente.

## Utiliser les heures de faible trafic

Les limites de débit de Dropbox sont plus strictes pendant les périodes de forte utilisation. Planifier vos grandes tâches de synchronisation Dropbox pour qu'elles s'exécutent pendant les heures creuses (tard le soir ou tôt le matin) réduit considérablement le risque d'atteindre les limites. Avec une licence PLUS, utilisez le planificateur cron de RcloneView pour exécuter les tâches Dropbox à `0 3 * * *` (3 h du matin, tous les jours).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Dropbox sync job during off-peak hours in RcloneView" class="img-large img-center" />

## Relancer les tâches échouées depuis l'historique des tâches

Si une tâche de synchronisation Dropbox échoue en cours de route à cause d'une limitation de débit, ne redémarrez pas depuis le début. Allez dans **Job History** (Historique des tâches), trouvez l'exécution échouée et relancez-la. RcloneView ignore les fichiers déjà transférés avec succès et ne retente que ceux qui ont échoué. Combiné à une concurrence réduite, cela permet de reprendre la synchronisation efficacement.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez les paramètres de votre tâche de synchronisation Dropbox, accédez à l'étape 2, et réduisez **Transfers** à 2-3 et **Checkers** à 4.
3. Assurez-vous que la nouvelle tentative en cas d'échec est activée dans les options de la tâche.
4. Relancez la tâche depuis **Job History** pour reprendre là où elle s'est arrêtée.

Avec une concurrence et des paramètres de nouvelle tentative ajustés, les synchronisations Dropbox se terminent de manière fiable même pour les grandes bibliothèques.

---

**Guides connexes :**

- [Corriger les erreurs de quota et de limite de débit de l'API Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Migrer de Dropbox vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [Récupérer les transferts interrompus et échoués avec RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
