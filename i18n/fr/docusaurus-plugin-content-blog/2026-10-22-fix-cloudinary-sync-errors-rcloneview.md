---
slug: fix-cloudinary-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Cloudinary — Problèmes de connexion, de transfert et de fichiers manquants résolus avec RcloneView"
authors:
  - jay
description: "Corrigez les erreurs de synchronisation Cloudinary avec RcloneView : revérifiez le remote, lisez l'historique des tâches et les journaux DEBUG, réduisez la concurrence et vérifiez les résultats avec Folder Compare."
keywords:
  - corriger les erreurs de synchronisation Cloudinary
  - échec de synchronisation Cloudinary
  - erreur rclone Cloudinary
  - dépannage RcloneView
  - fichiers manquants Cloudinary
  - journal DEBUG rclone
  - comparaison de dossiers
  - dépannage de la synchronisation cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Cloudinary — Problèmes de connexion, de transfert et de fichiers manquants résolus avec RcloneView

> Lorsqu'une tâche Cloudinary échoue, l'historique des tâches, les journaux DEBUG et Folder Compare de RcloneView indiquent si la cause est le remote, la charge de transfert ou des fichiers qui ne sont jamais arrivés.

Une synchronisation Cloudinary qui s'arrête avec une erreur vague, ou qui se termine avec des dossiers qui semblent incomplets, est difficile à diagnostiquer uniquement en ligne de commande. RcloneView réunit la vérification du remote, l'enregistrement de la tâche, le journal et une comparaison côte à côte dans une seule fenêtre, ce qui vous permet de travailler à partir de preuves plutôt que de relancer à l'aveugle. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier que le remote se connecte toujours

Si une tâche échoue en quelques secondes, soupçonnez le remote avant les données. Ouvrez Remote Manager depuis l'onglet Remote, modifiez le remote Cloudinary et saisissez à nouveau les identifiants s'ils ont changé ou expiré. Ouvrez ensuite le remote dans un panneau Explorer et parcourez le dossier racine. S'il s'affiche normalement, la connexion est saine et le problème se situe ailleurs.

Dans l'onglet Terminal intégré, vous pouvez aussi exécuter `rclone about "remote:"`, en remplaçant `remote` par le nom de votre remote, pour vérifier rapidement que le compte répond.

<img src="/support/images/en/blog/new-remote.png" alt="Modification d'un remote Cloudinary dans Remote Manager de RcloneView" class="img-large img-center" />

## Lire l'historique des tâches et activer la journalisation DEBUG

Ouvrez Job History et vérifiez l'état, la durée et le nombre de fichiers de l'exécution en échec. Une tâche qui échoue en cours de route pointe généralement vers des fichiers précis ou la charge de transfert, pas vers les identifiants.

Pour obtenir le message exact par fichier, allez dans Settings > Embedded Rclone, activez la journalisation rclone, définissez le niveau sur DEBUG et cliquez sur Restart Embedded Rclone. Reproduisez l'échec et lisez le journal dans l'onglet Log ou dans le dossier de journaux que vous avez configuré.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches RcloneView montrant une tâche Cloudinary en erreur" class="img-large img-center" />

## Réduire la concurrence et prévisualiser la réexécution

Les échecs intermittents s'atténuent souvent lorsque moins de fichiers sont déplacés en même temps. À l'étape 2 de l'assistant de synchronisation, réduisez le nombre de transferts de fichiers et définissez les equality checkers sur 4 ou moins, ce qui est la recommandation pour les backends lents. Conservez « Retry entire sync if fails » sur 3 afin que les échecs transitoires soient retentés jusqu'à trois fois.

Avant de relancer, utilisez Dry Run pour examiner les fichiers qui seront copiés ou supprimés, afin que la nouvelle tentative ne vous réserve pas de surprise.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Réexécution d'une tâche Cloudinary avec une concurrence réduite dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Après la réexécution, ouvrez Compare avec votre dossier local d'un côté et Cloudinary de l'autre. Filtrez les fichiers left-only, right-only et different pour voir ce qui manque encore ou diffère, puis copiez uniquement ces éléments au lieu de répéter toute la tâche.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare listant les fichiers manquants sur Cloudinary" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Revérifiez le remote Cloudinary dans Remote Manager et confirmez que le dossier racine s'affiche.
3. Consultez Job History et activez la journalisation DEBUG pour la tâche en échec.
4. Réduisez la concurrence, lancez un Dry Run, relancez, puis confirmez le résultat avec Folder Compare.

Une fois la cause visible dans les journaux et la comparaison, un échec Cloudinary devient une correction courte et reproductible.

---

**Guides associés :**

- [Gérer le stockage Cloudinary — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-cloudinary-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation SugarSync avec RcloneView](https://rcloneview.com/support/blog/fix-sugarsync-sync-errors-rcloneview)
- [Journaliser et déboguer les transferts cloud — Résoudre les problèmes dans RcloneView](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)

<CloudSupportGrid />
