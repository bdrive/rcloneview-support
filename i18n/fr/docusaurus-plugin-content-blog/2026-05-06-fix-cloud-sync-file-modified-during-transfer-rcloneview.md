---
slug: fix-cloud-sync-file-modified-during-transfer-rcloneview
title: "Résoudre les fichiers modifiés pendant le transfert — Résoudre les conflits de synchronisation cloud avec RcloneView"
authors:
  - tayson
description: "Résolvez les erreurs de synchronisation cloud causées par des fichiers modifiés pendant le transfert dans RcloneView. Apprenez à gérer les conflits de fichiers en cours d'utilisation, les téléversements partiels et les incohérences de synchronisation."
keywords:
  - fix files modified during cloud transfer
  - cloud sync conflict resolution RcloneView
  - file modified during upload error
  - rclone file in use error
  - cloud sync incomplete transfer fix
  - RcloneView sync conflict
  - file locked during sync troubleshooting
  - partial upload cloud sync fix
  - rclone modified during transfer
  - cloud backup file conflict resolution
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - data-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les fichiers modifiés pendant le transfert — Résoudre les conflits de synchronisation cloud avec RcloneView

> Lorsque des fichiers changent pendant que RcloneView les synchronise, les transferts peuvent échouer, produire des téléversements partiels ou créer des copies cloud incohérentes — voici comment détecter et résoudre chaque scénario.

Une source courante d'erreurs de synchronisation cloud est constituée par les fichiers modifiés, verrouillés ou en cours d'écriture pendant l'exécution d'une tâche de synchronisation. Les fichiers de base de données en cours d'écriture par une application, les documents ouverts dans Office ou les fichiers journaux activement complétés par un service en cours d'exécution peuvent tous provoquer des téléversements partiels ou des échecs de transfert. RcloneView affiche clairement ces erreurs dans ses journaux, et rclone propose plusieurs options pour les gérer avec élégance.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifier les erreurs de fichiers en cours d'utilisation dans les journaux RcloneView

Lorsqu'un fichier est verrouillé ou modifié pendant une synchronisation, rclone signale généralement une erreur telle que :
- `Failed to copy: file changed under us - trying again`
- `source file is being written to`
- `partial read detected`

Dans RcloneView, ces erreurs apparaissent dans l'**onglet Journal** en bas de l'interface. Une fois la tâche de synchronisation terminée, vérifiez le journal pour repérer les entrées `ERROR` indiquant des conflits de modification de fichiers. La vue **Historique des tâches** affiche également un statut `Errored` pour les tâches où certains fichiers n'ont pas pu être transférés.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing file transfer errors in RcloneView" class="img-large img-center" />

## Utiliser --ignore-errors et la logique de nouvelle tentative

Par défaut, les tâches de synchronisation de RcloneView sont configurées avec un nombre de tentatives (par défaut : 3) qui relance automatiquement les transferts échoués. Pour les fichiers verrouillés de manière transitoire (par exemple, un fichier brièvement ouvert puis fermé par une application), les nouvelles tentatives réussissent souvent lors des essais suivants.

Pour les tâches de synchronisation où certains fichiers sont systématiquement verrouillés (par exemple, des fichiers de base de données actifs), ajoutez `--ignore-errors` aux options rclone personnalisées dans la configuration de votre tâche de synchronisation. Cela indique à rclone de continuer à synchroniser les autres fichiers même en cas d'échec de certains, en réalisant autant que possible la synchronisation et en consignant les échecs pour examen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring sync job settings to handle file-in-use errors in RcloneView" class="img-large img-center" />

## Exclure les fichiers d'application actifs de la synchronisation

La meilleure solution à long terme pour les conflits de fichiers en cours d'utilisation consiste à exclure du périmètre de la tâche de synchronisation les fichiers toujours en cours d'utilisation active. Les paramètres de filtrage de RcloneView (Étape 3 de l'assistant de synchronisation) prennent en charge des règles d'exclusion personnalisées :

- Exclure les bases de données SQLite : ajoutez `*.db-journal` et `*.db-wal` pour exclure les journaux d'écriture anticipée actifs
- Exclure les fichiers temporaires Office : ajoutez `~$*` pour exclure les fichiers de verrouillage Word/Excel
- Exclure les fichiers journaux en cours d'écriture : ajoutez `*.log` ou des motifs spécifiques

Ces filtres empêchent RcloneView de tenter de synchroniser des fichiers dont on sait qu'ils seront en cours d'utilisation pendant la tâche, éliminant ainsi entièrement cette catégorie d'erreurs.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up file exclusion filters to avoid sync conflicts in RcloneView" class="img-large img-center" />

## Exécuter un essai à blanc pour vérifier l'efficacité des filtres

Après avoir ajouté des filtres d'exclusion, exécutez un **essai à blanc** (dry run) de la tâche de synchronisation pour confirmer que les fichiers filtrés n'apparaissent plus dans la liste de transfert. La sortie de l'essai à blanc affiche chaque fichier qui serait copié — vérifiez que vos fichiers de base de données actifs, fichiers de verrouillage et documents ouverts sont absents de la liste avant d'exécuter la synchronisation réelle.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using dry run to verify filtered file list before syncing in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Après une synchronisation échouée, vérifiez l'onglet Journal et l'Historique des tâches pour repérer les erreurs de modification de fichiers.
3. Ajoutez des filtres d'exclusion personnalisés dans l'assistant de synchronisation pour les fichiers toujours en cours d'utilisation.
4. Exécutez un essai à blanc pour confirmer que vos filtres fonctionnent, puis relancez la tâche de synchronisation.

Gérer les conflits de fichiers en cours d'utilisation dans RcloneView consiste à comprendre quels fichiers exclure et comment configurer les nouvelles tentatives — une fois correctement configuré, vos tâches de synchronisation s'exécutent proprement à chaque fois.

---

**Guides connexes :**

- [Résoudre les fichiers manquants après un transfert de synchronisation cloud — Résoudre avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Règles de filtrage et synchronisation sélective dans RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Récupérer des transferts interrompus ou échoués avec RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
