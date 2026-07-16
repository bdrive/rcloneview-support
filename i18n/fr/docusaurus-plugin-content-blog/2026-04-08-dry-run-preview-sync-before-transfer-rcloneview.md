---
slug: dry-run-preview-sync-before-transfer-rcloneview
title: "Prévisualiser les changements de synchronisation avec le mode simulation avant le transfert dans RcloneView"
authors:
  - tayson
description: "Utilisez le mode simulation (dry run) dans RcloneView pour prévisualiser les changements de synchronisation avant de transférer des fichiers. Détectez les suppressions inattendues et les incompatibilités de filtres avant qu'elles ne causent une perte de données."
keywords:
  - rcloneview
  - dry run
  - preview sync
  - rclone dry run
  - sync preview
  - safe cloud sync
  - prevent data loss
  - sync simulation
  - cloud transfer preview
  - compare before sync
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Prévisualiser les changements de synchronisation avec le mode simulation avant le transfert dans RcloneView

> Une synchronisation mal configurée peut supprimer des milliers de fichiers en quelques secondes. **RcloneView** vous permet de prévisualiser chaque changement grâce à un mode simulation avant qu'un seul octet ne soit transféré, vous offrant une confiance totale avant de valider une synchronisation.

L'opération de synchronisation est l'une des fonctionnalités les plus puissantes de rclone. Elle fait correspondre la destination à la source, en transférant les nouveaux fichiers, en mettant à jour ceux qui ont changé, et en supprimant les fichiers qui n'existent plus à la source. Cette dernière partie, la suppression, est ce qui rend la synchronisation à la fois puissante et dangereuse.

Un mode simulation (dry run) simule l'ensemble de l'opération de synchronisation sans réellement déplacer, copier ou supprimer quoi que ce soit. Il vous montre exactement ce qui se passerait : quels fichiers seraient transférés, lesquels seraient supprimés, et lesquels seraient ignorés. Vous examinez le résultat, vérifiez qu'il correspond à vos attentes, et ensuite seulement vous exécutez la synchronisation réelle.

RcloneView intègre le mode simulation directement dans son flux de synchronisation, ce qui permet de prévisualiser facilement les changements via l'interface graphique avant de valider. Que vous synchronisiez deux distants cloud ou que vous sauvegardiez des fichiers locaux vers le cloud, un mode simulation devrait toujours être votre première étape.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que fait le mode simulation

Lorsque vous activez le mode simulation, rclone effectue exactement la même analyse que pour une synchronisation réelle : il scanne la source et la destination, compare les fichiers par taille, horodatage ou somme de contrôle, et établit une liste des opérations à effectuer. La seule différence est qu'aucune de ces opérations n'est réellement exécutée.

Le résultat du mode simulation vous indique :
- **Fichiers à transférer** : les fichiers nouveaux ou modifiés qui seraient copiés de la source vers la destination.
- **Fichiers à supprimer** : les fichiers de destination qui n'existent pas à la source et qui seraient supprimés.
- **Fichiers ignorés** : les fichiers identiques des deux côtés et qui ne nécessitent aucune action.
- **Volume de données total** : la quantité de données qui serait transférée, ce qui vous aide à estimer le temps et la bande passante nécessaires.

Cette simulation est en lecture seule. Aucun fichier n'est déplacé, copié ou supprimé. Votre source et votre destination restent totalement intactes.

## Pourquoi le mode simulation est essentiel pour les opérations destructives

La commande `sync` est intrinsèquement destructive car elle supprime les fichiers présents à la destination mais absents de la source. C'est voulu, c'est ce qui distingue la synchronisation de la copie. Mais cela signifie aussi que les erreurs ont des conséquences :

- **Mauvais sens de synchronisation** : si vous inversez accidentellement la source et la destination, la synchronisation supprime vos fichiers source pour correspondre à une destination vide ou obsolète.
- **Chemin incorrect** : synchroniser vers le mauvais répertoire peut écraser des fichiers sans rapport ou déclencher des suppressions massives.
- **Mauvaise configuration des filtres** : si vos filtres d'inclusion/exclusion sont incorrects, des fichiers que vous vouliez conserver pourraient être exclus du scan de la source et donc supprimés à la destination.
- **Authentification expirée** : si le distant source a des identifiants expirés, il peut apparaître vide, ce qui entraîne la suppression de tout le contenu à la destination.

Un mode simulation détecte chacun de ces problèmes avant qu'aucun dommage ne survienne. Les quelques secondes nécessaires pour examiner le résultat peuvent vous épargner des heures de travail de récupération.

## Comment activer le mode simulation dans RcloneView

RcloneView offre un moyen simple d'exécuter des prévisualisations de synchronisation :

1. Ouvrez le **Gestionnaire de tâches** et sélectionnez la tâche de synchronisation que vous souhaitez prévisualiser.
2. Ajoutez l'indicateur `--dry-run` dans la section **Indicateurs personnalisés** de la configuration de la tâche.
3. Exécutez la tâche. RcloneView simulera la synchronisation et affichera les résultats.
4. Examinez le résultat dans le moniteur de transfert pour voir ce qui se passerait.
5. Si tout semble correct, retirez l'indicateur `--dry-run` et exécutez la tâche pour de vrai.

Vous pouvez aussi utiliser le terminal intégré pour exécuter directement une commande en mode simulation :
```
rclone sync source: dest: --dry-run
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Lire le résultat du mode simulation

Le résultat du mode simulation utilise le même format qu'une synchronisation réelle, mais aucune opération n'est exécutée. Voici ce qu'il faut vérifier :

**Les fichiers transférés** sont listés avec leurs chemins et leurs tailles. Vérifiez qu'il s'agit bien des fichiers que vous attendez de voir mis à jour ou ajoutés. Si vous voyez des fichiers transférés qui devraient déjà être synchronisés, cela peut indiquer une incohérence d'horodatage ou une différence de somme de contrôle à examiner.

**Les fichiers supprimés** sont les éléments les plus critiques à examiner. Chaque fichier listé pour suppression sera définitivement retiré de la destination lors d'une synchronisation réelle. Si vous voyez ici des fichiers que vous souhaitez conserver, votre chemin source, vos filtres ou le sens de synchronisation peuvent nécessiter un ajustement.

**Les fichiers ignorés** confirment que les fichiers déjà synchronisés sont correctement identifiés. Un résultat de mode simulation sain devrait afficher majoritairement des fichiers ignorés, avec un petit nombre de transferts et de suppressions.

**Les statistiques récapitulatives** à la fin indiquent le nombre total de transferts, de suppressions et le volume de données global. Comparez ces chiffres à vos attentes. Si vous synchronisez un dossier dans lequel vous avez modifié un seul fichier, mais que le mode simulation affiche des milliers de transferts, quelque chose est mal configuré.

## Surprises courantes détectées par le mode simulation

Voici des scénarios réels où un mode simulation a évité une perte de données :

**Suppression massive inattendue** : vous configurez une synchronisation de Google Drive vers S3, mais le jeton Google Drive a expiré. Rclone voit une source vide et prévoit de tout supprimer à la destination. Le mode simulation affiche des milliers de suppressions et zéro transfert, signalant immédiatement le problème.

**Incompatibilité de filtre** : vous avez ajouté un filtre d'exclusion pour les fichiers `*.tmp`, mais vous avez accidentellement tapé `*.tmpl`, ce qui correspond à vos fichiers de modèle Terraform. Le mode simulation montre que ces fichiers de modèle seraient supprimés de la destination, vous alertant sur la faute de frappe.

**Mauvais répertoire de base** : vous vouliez synchroniser `remote:projects/2026`, mais avez tapé `remote:projects`. Le mode simulation révèle que les fichiers de toutes les années de projet seraient synchronisés, écrasant potentiellement des fichiers dans des sous-répertoires que vous ne vouliez pas toucher.

**Problèmes de sensibilité à la casse** : déplacer des fichiers entre un distant insensible à la casse (comme OneDrive) et un distant sensible à la casse (comme S3) peut créer des fichiers en double. Le mode simulation affiche ces transferts inattendus afin que vous puissiez gérer les conflits de casse avant qu'ils ne se multiplient.

## Intégrer le mode simulation à votre flux de travail

Pour une sécurité maximale, intégrez le mode simulation à votre procédure opérationnelle standard :

**Pour les synchronisations manuelles** : exécutez toujours un mode simulation avant toute opération de synchronisation. Examinez le résultat, puis retirez l'indicateur et exécutez la synchronisation réelle. La minute supplémentaire vaut la tranquillité d'esprit.

**Pour les nouvelles tâches planifiées** : lors de la création d'une nouvelle synchronisation planifiée, exécutez-la d'abord manuellement avec `--dry-run`. N'activez la planification qu'après avoir vérifié que le résultat du mode simulation correspond à vos attentes.

**Après des changements de configuration** : chaque fois que vous modifiez la source, la destination, les filtres ou les indicateurs d'une tâche, exécutez un mode simulation avant la prochaine exécution. Les changements de configuration peuvent avoir des effets secondaires inattendus qu'un mode simulation révélera.

**Périodiquement pour les tâches existantes** : même les tâches planifiées stables et exécutées depuis longtemps bénéficient d'un examen occasionnel en mode simulation. Les changements dans les données source, la configuration du distant ou le comportement du fournisseur peuvent modifier le comportement de synchronisation au fil du temps.

## Combiner le mode simulation avec les fonctionnalités de comparaison

La fonctionnalité de comparaison de dossiers de RcloneView complète le mode simulation en offrant une vue visuelle côte à côte du contenu de la source et de la destination. Utilisées ensemble, elles vous donnent une visibilité complète avant la synchronisation :

1. Utilisez la fonctionnalité **Comparer** pour inspecter visuellement les différences entre la source et la destination.
2. Exécutez un **mode simulation** pour voir exactement ce que l'opération de synchronisation ferait face à ces différences.
3. Vérifiez que les opérations prévues correspondent à ce que vous avez observé dans la comparaison.
4. Exécutez la synchronisation en toute confiance.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

La fonctionnalité de comparaison vous montre l'état actuel, tandis que le mode simulation vous montre les actions prévues. Ensemble, elles éliminent les incertitudes et vous garantissent de comprendre à la fois ce qui diffère et ce qui sera fait à ce sujet.

## Avancé : utiliser --dry-run avec d'autres indicateurs

Le mode simulation fonctionne avec tous les autres indicateurs rclone, ce qui vous permet de simuler exactement votre configuration de production :

- `--dry-run --backup-dir remote:backup` prévisualise à la fois la synchronisation et l'endroit où les copies de sauvegarde seraient stockées.
- `--dry-run --filter-from filters.txt` vérifie que vos règles de filtrage produisent les résultats attendus.
- `--dry-run --max-age 24h` simule la synchronisation des seuls fichiers modifiés au cours des dernières 24 heures.
- `--dry-run -v` ajoute une sortie détaillée pour plus d'informations sur chaque opération prévue.

Cette composabilité signifie que vous pouvez tester n'importe quelle configuration en toute sécurité avant de la déployer en production.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez une tâche de synchronisation avec la source et la destination souhaitées.
3. Ajoutez `--dry-run` aux indicateurs personnalisés et exécutez la tâche pour prévisualiser les changements.
4. Examinez attentivement le résultat, puis retirez l'indicateur et exécutez la synchronisation réelle.

Le mode simulation ne coûte rien, ne prend que quelques secondes, et peut éviter une perte de données catastrophique. Faites-en la première étape de chaque opération de synchronisation, et vous ne serez plus jamais surpris par ce qu'une synchronisation fait à vos fichiers.

---

**Guides associés :**

- [Synchroniser des stockages distants instantanément](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
