---
slug: fix-terabox-sync-errors-rcloneview
title: "Résoudre les erreurs de synchronisation Terabox — Comment les corriger avec RcloneView"
authors:
  - morgan
description: "Diagnostiquez et résolvez les échecs courants de synchronisation Terabox dans RcloneView, des délais de connexion aux transferts bloqués, à l'aide des journaux, des tentatives et des filtres."
keywords:
  - erreurs de synchronisation Terabox
  - dépannage RcloneView
  - problèmes de connexion Terabox
  - corriger les erreurs de synchronisation
  - dépannage de synchronisation cloud
  - délai d'attente Terabox
  - rclone terabox
  - correction de transfert bloqué
tags:
  - RcloneView
  - terabox
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs de synchronisation Terabox — Comment les corriger avec RcloneView

> Les tâches de synchronisation Terabox qui se bloquent, expirent ou échouent en cours de route se ramènent généralement à une poignée de causes — les journaux, les paramètres de nouvelle tentative et l'outil d'exécution à blanc de RcloneView permettent de les isoler facilement.

Le stockage gratuit de Terabox en fait une destination de sauvegarde populaire, mais son API peut être moins tolérante que celle de fournisseurs plus importants sous une charge de transfert soutenue, surtout avec de nombreux petits fichiers ou de gros envois par lots. Lorsqu'une tâche Terabox dans RcloneView signale des erreurs ou cesse simplement de progresser, la solution consiste rarement à simplement cliquer à nouveau sur exécuter — il s'agit plutôt d'identifier si la tâche atteint une limite de connexion, une session expirée ou un problème au niveau du fichier, puis d'ajuster les paramètres de la tâche en conséquence. RcloneView synchronise et compare également les dossiers, pas seulement les monte, ce qui vous permet de confirmer exactement ce qui a été transféré ou non avant de réessayer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Schémas courants d'échec de synchronisation Terabox

La plupart des erreurs Terabox dans RcloneView se répartissent en trois groupes. Les erreurs de connexion se manifestent par des délais d'attente ou des connexions refusées en cours de transfert, généralement dues à un trop grand nombre de transferts simultanés atteignant en même temps les limites de débit de Terabox. Les erreurs d'authentification apparaissent lorsqu'un jeton de session Terabox a expiré, ce qui se traduit par l'échec soudain d'une tâche qui fonctionnait auparavant correctement. Les erreurs au niveau du fichier — un seul fichier échouant de manière répétée alors que le reste de la tâche se termine — indiquent généralement un caractère de nom de fichier non pris en charge ou un fichier modifié du côté de Terabox pendant le transfert.

Vérifiez d'abord l'**onglet Transferring** pour voir à quelle catégorie vous avez affaire : une tâche qui échoue immédiatement sur chaque fichier suggère un problème d'authentification, tandis qu'une tâche qui échoue par intermittence sur des fichiers dispersés indique une limitation de débit ou une instabilité de connexion.

<img src="/support/images/en/blog/new-remote.png" alt="Reconnexion d'un remote Terabox dans RcloneView" class="img-large img-center" />

## Lire les journaux et l'historique des tâches

Activez la journalisation détaillée sous **Settings > Embedded Rclone > Enable rclone Logging**, et réglez le niveau de journalisation sur **DEBUG** avant de reproduire le problème. Cela capture la réponse API exacte renvoyée par Terabox, ce qui est bien plus utile pour le diagnostic que l'erreur résumée affichée dans la boîte de dialogue de la tâche. **Job History** dans le Job Manager enregistre également si une exécution échouée était Completed, Errored ou Canceled, ainsi que la taille totale et le nombre de fichiers — utile pour repérer si une erreur s'est produite près du début (probablement une authentification) ou en cours de route (probablement une limitation de débit).

Si une session a expiré, reconnectez le remote Terabox via **Remote Manager** pour actualiser les identifiants avant de relancer la tâche.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Examen de l'historique des tâches Terabox et du statut d'erreur dans RcloneView" class="img-large img-center" />

## Ajuster les tentatives, le nombre de transferts et les filtres

Pour les échecs liés à la limitation de débit, réduisez le **Number of file transfers** et le **Number of multi-thread transfers** à l'étape 2 de l'assistant de tâche — moins de connexions simultanées réduisent le risque que Terabox limite la session en cours de tâche. Augmenter **Retry entire sync if fails** au-delà de la valeur par défaut de 3 donne aux échecs transitoires davantage de chances de se rétablir automatiquement sans intervention manuelle.

Si un type de fichier spécifique échoue systématiquement, ajoutez un filtre personnalisé à l'étape 3 pour l'exclure temporairement, terminez le reste de la synchronisation, puis examinez ce fichier séparément. Exécuter ensuite une **exécution à blanc** confirme que l'exclusion a fonctionné avant de valider la tâche ajustée.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Surveillance d'une tâche de synchronisation Terabox relancée dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Activez la journalisation DEBUG sous Settings > Embedded Rclone avant de reproduire l'erreur.
3. Consultez Job History pour identifier si l'échec est précoce (authentification) ou dispersé (limitation de débit).
4. Réduisez le nombre de transferts ou ajoutez des tentatives, puis confirmez la correction avec une exécution à blanc.

Avec les bons paramètres ajustés aux limites de Terabox, les tâches de synchronisation cessent d'échouer silencieusement et commencent à se terminer de manière fiable.

---

**Guides associés :**

- [Gérer Terabox — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-terabox-cloud-sync-backup-rcloneview)
- [Synchroniser le stockage gratuit Terabox vers d'autres clouds avec RcloneView](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [Résoudre une synchronisation cloud bloquée ou figée — Comment la corriger avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
