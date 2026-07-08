---
slug: min-age-max-age-time-based-filters-rcloneview
title: "Utiliser les filtres temporels Min-Age et Max-Age dans RcloneView"
authors:
  - tayson
description: "Utilisez les filtres temporels min-age et max-age dans RcloneView pour synchroniser, copier ou sauvegarder uniquement les fichiers modifiés dans une plage horaire spécifique. Transférez les changements récents ou ignorez les anciens fichiers."
keywords:
  - rcloneview
  - filtre min-age
  - filtre max-age
  - synchronisation basée sur le temps
  - rclone min-age
  - rclone max-age
  - synchroniser uniquement les fichiers récents
  - filtrer par date
  - temps de synchronisation incrémentale
  - filtre de date pour synchronisation cloud
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser les filtres temporels Min-Age et Max-Age dans RcloneView

> Toutes les tâches de synchronisation n'ont pas besoin de transférer tous les fichiers. Les filtres temporels de RcloneView vous permettent de cibler uniquement les fichiers modifiés dans une plage horaire spécifique — synchroniser les changements du jour, ignorer les fichiers de plus de 30 jours, ou sauvegarder uniquement les téléversements récents.

Les indicateurs `--min-age` et `--max-age` de rclone sont des outils puissants pour contrôler quels fichiers participent à une opération de synchronisation, de copie ou de déplacement en fonction de leur date de modification. RcloneView expose ces options via son interface de indicateurs personnalisés, permettant un contrôle précis de la sélection de fichiers basée sur le temps sans toucher à la ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprendre Min-Age et Max-Age

Les deux indicateurs fonctionnent comme des filtres temporels sur les dates de modification des fichiers :

- **`--max-age`** : N'inclut que les fichiers modifiés dans la plage horaire spécifiée. Un fichier modifié il y a 2 heures passe le filtre `--max-age 24h`. Un fichier modifié il y a 3 jours échoue au filtre `--max-age 24h` et est ignoré.
- **`--min-age`** : N'inclut que les fichiers modifiés *avant* la plage horaire spécifiée. Un fichier modifié il y a 30 jours passe le filtre `--min-age 7d`. Un fichier modifié hier échoue au filtre `--min-age 7d` et est ignoré.

Pensez-y de cette façon :
- `--max-age 24h` = « fichiers de moins de 24 heures » (modifiés récemment)
- `--min-age 7d` = « fichiers de plus de 7 jours » (non modifiés récemment)

## Format de temps

Les deux indicateurs acceptent des formats de temps flexibles :

| Format | Exemple | Signification |
|---|---|---|
| Durée | `30s`, `5m`, `2h`, `7d`, `4w` | Secondes, minutes, heures, jours, semaines |
| Combiné | `1d2h30m` | 1 jour, 2 heures, 30 minutes |
| Date absolue | `2026-04-01` | Fichiers avant/après le 1er avril 2026 |
| Date et heure | `2026-04-01T15:00:00` | Fichiers avant/après le 1er avril à 15h |

Les valeurs de durée sont relatives à l'heure actuelle au moment de l'exécution de la tâche.

## Cas d'usage 1 : Synchroniser uniquement les changements du jour

Lorsque vous avez un stockage cloud volumineux avec des téraoctets de données mais que vous souhaitez uniquement synchroniser les fichiers modifiés aujourd'hui :

```
--max-age 24h
```

Ajoutez ceci au champ des indicateurs personnalisés dans la configuration de la tâche de RcloneView. La tâche de synchronisation ne prendra en compte que les fichiers modifiés au cours des dernières 24 heures, réduisant considérablement le temps passé à lister et comparer les fichiers. Ceci est utile pour les sauvegardes incrémentales quotidiennes où seul un faible pourcentage de fichiers change chaque jour.

## Cas d'usage 2 : Archiver les anciens fichiers

Déplacez les fichiers de plus de 90 jours du stockage actif vers un stockage froid :

```
--min-age 90d
```

Utilisez ceci avec une opération de **déplacement** (pas de synchronisation) pour transférer les fichiers de plus de 90 jours de Google Drive vers S3 Glacier. Les fichiers sont supprimés de Google Drive après un transfert réussi, libérant de l'espace sur le stockage actif tout en les préservant dans l'archive.

## Cas d'usage 3 : Synchronisation par fenêtre temporelle

Combinez les deux indicateurs pour cibler une plage horaire spécifique. Par exemple, synchroniser les fichiers modifiés entre 7 et 30 jours auparavant :

```
--min-age 7d --max-age 30d
```

Ceci est utile pour les flux de travail d'archivage échelonnés — les fichiers de moins de 7 jours restent sur le stockage actif, les fichiers entre 7 et 30 jours passent au stockage tiède, et les fichiers de plus de 30 jours passent au stockage froid.

## Cas d'usage 4 : Ignorer les fichiers récemment modifiés

Pendant une migration, vous pourriez vouloir ignorer les fichiers en cours de modification active afin d'éviter de transférer un travail incomplet :

```
--min-age 1h
```

Cela garantit que seuls les fichiers stables depuis au moins une heure sont transférés. Les fichiers en cours de modification ou d'enregistrement sont laissés pour la prochaine exécution de synchronisation.

## Cas d'usage 5 : Sauvegarde nocturne du travail récent

Pour une tâche de sauvegarde nocturne qui capture uniquement le travail du jour :

```
--max-age 25h
```

Utiliser 25 heures (au lieu de 24) offre un chevauchement d'une heure avec la sauvegarde du jour précédent, garantissant qu'aucun fichier n'est manqué en raison de différences de timing entre le calendrier de sauvegarde et les dates de modification des fichiers.

## Appliquer des filtres temporels dans RcloneView

Dans la configuration de tâche de RcloneView :

1. Ouvrez les paramètres de la tâche de synchronisation ou de copie.
2. Accédez à la section des options avancées ou des indicateurs personnalisés.
3. Ajoutez `--max-age 24h` ou `--min-age 7d` (ou les deux) dans le champ des indicateurs.
4. Enregistrez la tâche et exécutez-la.

Les indicateurs s'appliquent à chaque comparaison de fichiers pendant la tâche. Les fichiers qui ne répondent pas aux critères temporels sont entièrement ignorés — ils ne sont ni listés, ni comparés, ni transférés. Cela peut réduire considérablement la durée des tâches pour les stockages distants volumineux.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a time-filtered sync job in RcloneView" class="img-large img-center" />

## Combiner avec d'autres filtres

Les filtres temporels fonctionnent conjointement avec d'autres options de filtrage de rclone :

- **Avec include/exclude** : `--max-age 24h --include "*.pdf"` synchronise uniquement les fichiers PDF modifiés au cours des dernières 24 heures.
- **Avec les filtres de taille** : `--max-age 7d --min-size 1M` synchronise uniquement les fichiers de plus de 1 Mo modifiés au cours de la dernière semaine.
- **Avec les filtres de répertoire** : `--max-age 24h --include "/projects/**"` limite la portée à un répertoire spécifique.

Cette composabilité vous permet de créer des règles de transfert précises sans scripts complexes.

## Faire d'abord un essai à blanc

Avant d'exécuter une tâche filtrée par le temps sur des données de production, utilisez le mode d'essai à blanc de RcloneView pour prévisualiser les fichiers qui seront affectés. L'essai à blanc liste les fichiers correspondant à vos critères de filtre sans les transférer réellement. Cela confirme que vos valeurs `--min-age` et `--max-age` sélectionnent les bons fichiers avant de valider l'opération.

## Pièges courants

- **Fuseaux horaires** : Les dates de modification sont comparées en UTC. Si votre fuseau horaire local est significativement décalé par rapport à UTC, ajustez vos valeurs de durée en conséquence ou utilisez des formats de date absolus.
- **Précision du fournisseur** : Certains fournisseurs cloud (notamment Google Drive) rapportent les dates de modification avec une précision limitée. Un fichier modifié « aujourd'hui » sur Google Drive peut avoir un horodatage qui diffère de plusieurs secondes par rapport à la date de modification réelle.
- **Synchronisation vs. Copie avec min-age** : Utiliser `--min-age` avec la synchronisation peut être dangereux — la synchronisation supprime les fichiers sur la destination qui n'existent pas sur la source. Si `--min-age` filtre les fichiers récents de la liste source, la synchronisation peut les supprimer sur la destination. Utilisez la copie (pas la synchronisation) lorsque vous utilisez `--min-age` pour éviter des suppressions non intentionnelles.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez une tâche de synchronisation ou de copie dans le gestionnaire de tâches.
3. Ajoutez les indicateurs `--max-age` ou `--min-age` dans la section des indicateurs personnalisés.
4. Testez avec un essai à blanc pour vérifier la sélection des fichiers.
5. Planifiez la tâche pour des sauvegardes automatisées basées sur le temps.

Les filtres temporels transforment RcloneView en un outil de précision pour les sauvegardes incrémentales, l'archivage échelonné et les opérations de synchronisation ciblées. Utilisez-les pour réduire le temps de transfert, minimiser l'utilisation de la bande passante et mettre en œuvre des flux de travail sophistiqués de cycle de vie des données.

---

**Guides connexes :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
