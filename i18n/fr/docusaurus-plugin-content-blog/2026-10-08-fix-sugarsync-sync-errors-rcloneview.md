---
slug: fix-sugarsync-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation SugarSync — problèmes d'autorisation, de transfert et de fichiers manquants résolus avec RcloneView"
authors:
  - morgan
description: "Diagnostiquez les erreurs de synchronisation SugarSync (autorisation échouée, transferts interrompus, fichiers manquants) grâce aux journaux, à l'historique des tâches et à Folder Compare de RcloneView."
keywords:
  - corriger les erreurs de synchronisation SugarSync
  - erreur rclone SugarSync
  - autorisation SugarSync échouée
  - échec d'envoi SugarSync
  - dépannage SugarSync
  - RcloneView SugarSync
  - remote SugarSync rclone
  - dépannage de la synchronisation cloud
  - SugarSync GUI
tags:
  - RcloneView
  - sugarsync
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation SugarSync — problèmes d'autorisation, de transfert et de fichiers manquants résolus avec RcloneView

> Lorsqu'une tâche SugarSync échoue, l'historique des tâches, les journaux DEBUG et Folder Compare de RcloneView montrent si la cause vient du remote, de la charge de transfert ou de fichiers qui ne sont jamais arrivés.

Une synchronisation SugarSync qui s'arrête sur une erreur vague, ou qui se termine avec des dossiers qui semblent incomplets, est difficile à diagnostiquer avec la seule ligne de commande. RcloneView réunit dans une seule fenêtre la vérification du remote, l'historique de la tâche, le journal et une comparaison côte à côte, ce qui vous permet de travailler à partir de preuves plutôt que de relancer à l'aveugle. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier que le remote se connecte toujours

Si une tâche échoue en quelques secondes, soupçonnez le remote avant les données. Ouvrez Remote Manager depuis l'onglet Remote, modifiez le remote SugarSync et autorisez-le à nouveau si les informations du compte ont changé. Ouvrez ensuite le remote dans un panneau Explorer et parcourez le dossier racine. S'il s'affiche normalement, la connexion est saine et le problème se situe ailleurs.

Dans l'onglet Terminal intégré, vous pouvez aussi exécuter `rclone about "remote:"` (remplacez `remote` par le nom de votre remote) pour vérifier rapidement que le compte répond.

<img src="/support/images/en/blog/new-remote.png" alt="Modification d'un remote SugarSync dans Remote Manager de RcloneView" class="img-large img-center" />

## Consulter l'historique des tâches et activer la journalisation DEBUG

Ouvrez Job History et vérifiez l'état, la durée et le nombre de fichiers de l'exécution échouée. Une tâche qui échoue en cours de route pointe généralement vers des fichiers précis ou la charge de transfert, pas vers les identifiants.

Pour obtenir le message exact par fichier, allez dans Settings > Embedded Rclone, activez la journalisation de rclone, réglez le niveau sur DEBUG, puis cliquez sur Restart Embedded Rclone. Reproduisez l'échec et lisez le journal dans l'onglet Log ou dans le dossier de journaux configuré.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches RcloneView affichant une tâche SugarSync en erreur" class="img-large img-center" />

## Réduire la concurrence et prévisualiser la nouvelle exécution

Les échecs d'envoi intermittents diminuent souvent lorsque moins de fichiers sont déplacés à la fois. À l'étape 2 de l'assistant de synchronisation, réduisez le nombre de transferts de fichiers et réglez les equality checkers sur 4 ou moins, ce qui est la recommandation pour les backends lents. Gardez « Retry entire sync if fails » à 3 pour que les échecs transitoires soient réessayés jusqu'à trois fois.

Avant de relancer, utilisez Dry Run pour passer en revue les fichiers qui seront copiés ou supprimés, afin que la nouvelle tentative ne réserve aucune surprise.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Nouvelle exécution d'une tâche SugarSync avec une concurrence réduite dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Après la nouvelle exécution, ouvrez Compare avec votre dossier local d'un côté et SugarSync de l'autre. Filtrez les fichiers présents uniquement à gauche, uniquement à droite et différents pour voir ce qui manque ou diffère encore, puis copiez seulement ces éléments au lieu de refaire toute la tâche.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare listant les fichiers manquants sur SugarSync" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisez à nouveau le remote SugarSync dans Remote Manager et vérifiez que le dossier racine s'affiche.
3. Consultez Job History et activez la journalisation DEBUG pour la tâche qui échoue.
4. Réduisez la concurrence, lancez un Dry Run, relancez la tâche et confirmez le résultat avec Folder Compare.

Une fois la cause visible dans les journaux et la comparaison, un échec SugarSync devient une correction courte et reproductible.

---

**Guides associés:**

- [Gérer le stockage SugarSync — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [Migrer SugarSync vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [Corriger les erreurs de synchronisation OpenDrive avec RcloneView](https://rcloneview.com/support/blog/fix-opendrive-sync-errors-rcloneview)

<CloudSupportGrid />
