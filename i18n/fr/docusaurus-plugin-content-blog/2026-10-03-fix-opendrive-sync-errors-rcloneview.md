---
slug: fix-opendrive-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation OpenDrive — Problèmes de connexion, d'envoi et de listage résolus avec RcloneView"
authors:
  - kai
description: "Diagnostiquez les erreurs de synchronisation OpenDrive, comme les échecs de connexion, les envois interrompus et les fichiers manquants, grâce à l'historique des tâches, aux journaux et à Folder Compare de RcloneView."
keywords:
  - corriger les erreurs de synchronisation OpenDrive
  - erreur rclone OpenDrive
  - échec de connexion OpenDrive
  - échec d'envoi OpenDrive
  - dépannage OpenDrive
  - RcloneView OpenDrive
  - remote OpenDrive rclone
  - dépannage de la synchronisation cloud
  - OpenDrive GUI
tags:
  - RcloneView
  - opendrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation OpenDrive — Problèmes de connexion, d'envoi et de listage résolus avec RcloneView

> Lorsqu'une synchronisation OpenDrive échoue, l'historique des tâches, les journaux et Folder Compare dans RcloneView indiquent si la cause vient des identifiants, de la charge de transfert ou de fichiers qui ne sont jamais arrivés.

Une synchronisation en échec s'explique rarement d'elle-même. Une tâche peut s'arrêter immédiatement, se terminer avec des fichiers manquants ou laisser un dossier qui semble incomplet. Plutôt que de relancer à l'aveugle, vous pouvez lire l'historique des tâches de RcloneView, activer la journalisation DEBUG et comparer les deux côtés pour trouver la vraie cause. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Écarter les problèmes de connexion et d'identifiants

Si une tâche échoue en quelques secondes, soupçonnez le remote lui-même. Ouvrez Remote Manager depuis l'onglet Remote, modifiez le remote OpenDrive et saisissez de nouveau les informations du compte. Ouvrez ensuite le remote dans un panneau Explorer et parcourez le dossier racine. S'il s'affiche normalement, la connexion est saine et l'échec vient d'ailleurs.

Vous pouvez aussi exécuter `rclone about "remote:"` dans l'onglet Terminal intégré, en remplaçant `remote` par le nom de votre remote, pour vérifier que le compte répond.

<img src="/support/images/en/blog/new-remote.png" alt="Modification d'un remote OpenDrive dans Remote Manager de RcloneView" class="img-large img-center" />

## Lire l'historique des tâches et activer les journaux DEBUG

Ouvrez Job History et examinez l'état, la durée et le nombre de fichiers de l'exécution en échec. Une tâche qui s'interrompt en cours de route sur une erreur pointe généralement vers un fichier précis ou un problème de charge de transfert, plutôt que vers une mauvaise connexion.

Pour voir le message exact par fichier, allez dans Settings > Embedded Rclone, activez la journalisation de rclone, définissez le niveau sur DEBUG et redémarrez le rclone intégré. Reproduisez l'échec, puis lisez le journal dans l'onglet Log ou dans le dossier de journaux que vous avez configuré.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches RcloneView avec une tâche OpenDrive en erreur" class="img-large img-center" />

## Réduire la charge des transferts interrompus

Les envois qui échouent par intermittence s'améliorent souvent lorsque moins de fichiers sont déplacés en même temps. À l'étape 2 de l'assistant de synchronisation, réduisez le nombre de transferts de fichiers et d'equality checkers (la recommandation pour les backends lents est de 4 ou moins). Laissez « Retry entire sync if fails » à 3 pour que les échecs transitoires soient automatiquement retentés.

Utilisez un Dry Run avant la nouvelle exécution pour confirmer que la liste des fichiers à copier ou à supprimer correspond à vos attentes.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Nouvelle exécution d'une tâche OpenDrive avec une concurrence réduite dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Après la nouvelle exécution, ouvrez Compare avec le dossier local d'un côté et OpenDrive de l'autre. Filtrez les fichiers left-only, right-only et different pour voir exactement ce qui manque encore ou ne correspond pas, puis copiez uniquement ces éléments au lieu de répéter toute la tâche.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare affichant des fichiers manquants sur OpenDrive" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Saisissez de nouveau les identifiants OpenDrive dans Remote Manager et vérifiez que le dossier racine s'affiche.
3. Consultez Job History et activez la journalisation DEBUG pour la tâche en échec.
4. Réduisez la concurrence, lancez un Dry Run, relancez la tâche et confirmez avec Folder Compare.

Une fois la cause identifiée grâce aux journaux et aux comparaisons, les échecs OpenDrive deviennent une correction courte et reproductible.

---

**Guides associés :**

- [Gérer le stockage OpenDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation Gofile avec RcloneView](https://rcloneview.com/support/blog/fix-gofile-sync-errors-rcloneview)
- [Corriger les synchronisations cloud bloquées avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
