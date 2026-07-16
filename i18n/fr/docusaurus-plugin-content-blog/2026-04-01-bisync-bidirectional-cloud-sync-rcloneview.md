---
slug: bisync-bidirectional-cloud-sync-rcloneview
title: "Bisync : véritable synchronisation cloud bidirectionnelle avec RcloneView"
authors:
  - tayson
description: "Utilisez la fonctionnalité bisync de rclone via RcloneView pour maintenir deux emplacements cloud synchronisés dans les deux sens. Découvrez quand utiliser bisync, comment le configurer et comment gérer les conflits."
keywords:
  - bisync rcloneview
  - synchronisation cloud bidirectionnelle rclone
  - guide rclone bisync
  - synchronisation cloud à double sens
  - synchronisation dans les deux sens
  - configuration bisync rcloneview
  - synchronisation bidirectionnelle rclone
  - synchronisation bidirectionnelle google drive
  - synchronisation à double sens onedrive
  - miroir bidirectionnel de dossier cloud
tags:
  - RcloneView
  - sync
  - cloud-sync
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync : véritable synchronisation cloud bidirectionnelle avec RcloneView

> La synchronisation standard de rclone (Sync) est unidirectionnelle — elle fait correspondre la destination à la source. Bisync va plus loin : les changements effectués à l'un ou l'autre emplacement se propagent vers l'autre. Si vous ajoutez un fichier à l'emplacement A, il apparaît à l'emplacement B, et vice versa. Voici comment le configurer dans RcloneView.

La plupart des scénarios de synchronisation cloud sont à sens unique : une machine locale sauvegarde vers le cloud, ou un cloud principal se reflète vers un cloud de sauvegarde. Mais certains workflows nécessitent une véritable synchronisation bidirectionnelle — un dossier partagé que deux personnes modifient, une machine de travail et une machine personnelle qui doivent rester synchronisées, ou deux comptes cloud qui agissent comme des égaux. La commande `bisync` de rclone offre cette possibilité, et RcloneView permet de la configurer sans ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Sync vs Bisync : quelle est la différence ?

| Comportement | rclone sync | rclone bisync |
|----------|------------|--------------|
| Direction | À sens unique (source → destination) | Bidirectionnelle (les deux sens) |
| Suppressions | Supprime de la destination si absent de la source | Propage les suppressions dans les deux sens |
| Conflits | La source l'emporte toujours | Gestion explicite des conflits requise |
| Risque de perte de données | Possible si la direction est incorrecte | Risque plus faible ; les deux côtés sont vérifiés |
| Complexité | Simple | Plus complexe ; configuration soignée requise |

## Quand utiliser Bisync

**Utilisez bisync quand :**
- Deux personnes ou systèmes contribuent des modifications au même dossier.
- Vous modifiez des fichiers sur plusieurs appareils qui ne peuvent pas toujours être en ligne simultanément.
- Vous maintenez deux comptes cloud comme des miroirs actifs avec des changements des deux côtés.

**Utilisez la synchronisation classique quand :**
- Vous avez un côté principal (source) et un côté secondaire clairement définis.
- Un seul côté crée de nouveaux fichiers — l'autre est en lecture seule.
- La simplicité et la prévisibilité sont des priorités.

## Configuration de Bisync dans RcloneView

Bisync nécessite une initialisation unique (resync) pour établir un état de référence avant que les exécutions suivantes puissent suivre les changements.

### Étape 1 — Ajoutez vos deux distants

Assurez-vous que les deux emplacements sont configurés comme distants dans RcloneView. Par exemple :
- `gdrive-work:/Projects/Active/` (compte professionnel Google Drive)
- `onedrive-home:/Projects/Active/` (compte personnel OneDrive)

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes for bisync in RcloneView" class="img-large img-center" />

### Étape 2 — Exécutez le resync initial

La première exécution de bisync doit utiliser `--resync` pour établir la référence. Dans le panneau **Terminal** de RcloneView :

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --resync --verbose
```

Cela crée les fichiers d'état de référence (stockés dans `~/.cache/rclone/bisync/`) que bisync utilise pour détecter les changements lors des exécutions suivantes. Le resync rend les deux côtés identiques en copiant les fichiers les plus récents vers chaque côté.

### Étape 3 — Créez un job Bisync dans RcloneView

1. Ouvrez **Jobs** dans RcloneView.
2. Sélectionnez **Custom Command** ou utilisez le panneau Terminal.
3. Saisissez la commande bisync pour les exécutions régulières :

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --verbose --log-file /tmp/bisync.log
```

4. Enregistrez comme job et planifiez-le pour s'exécuter toutes les heures ou tous les jours.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule bisync job in RcloneView" class="img-large img-center" />

## Gestion des conflits

Bisync détecte les conflits lorsqu'un fichier est modifié aux deux emplacements entre deux exécutions. Par défaut, rclone bisync signale ces conflits et n'écrase aucune des deux versions.

Ajoutez `--conflict-resolve newer` pour privilégier automatiquement le fichier le plus récent :

```bash
rclone bisync path1 path2 --conflict-resolve newer
```

Ou `--conflict-resolve larger` pour privilégier le fichier le plus volumineux (utile pour les scénarios de croissance de documents).

Les fichiers en conflit qui ne sont pas résolus automatiquement sont renommés avec un suffixe `.conflict` afin que les deux versions soient conservées.

## Options courantes de Bisync

| Option | Objectif |
|------|---------|
| `--resync` | Initialise ou rétablit la référence (à utiliser une seule fois) |
| `--conflict-resolve newer` | Résout automatiquement les conflits en privilégiant le fichier le plus récent |
| `--filters-file /path/to/filters` | Applique des règles d'inclusion/exclusion |
| `--max-delete 10` | Interrompt si plus de 10 fichiers seraient supprimés (sécurité) |
| `--dry-run` | Prévisualise les changements sans rien modifier |
| `--verbose` | Sortie détaillée pour le débogage |

L'option `--max-delete` est particulièrement importante — elle empêche bisync de supprimer accidentellement un grand nombre de fichiers en cas de mauvaise configuration.

## Surveillance des exécutions Bisync

Vérifiez la sortie de bisync dans **Job History** de RcloneView après chaque exécution :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor bisync results in RcloneView" class="img-large img-center" />

Une exécution bisync saine affiche :
- Les fichiers copiés de path1 vers path2
- Les fichiers copiés de path2 vers path1
- Les conflits détectés et la manière dont ils ont été résolus
- Le temps total et les statistiques de transfert

## Limites de Bisync

- **Non adapté aux modifications simultanées d'un même fichier** — bisync compare entre les exécutions, pas en temps réel.
- **La propagation des suppressions peut être dangereuse** — un fichier supprimé d'un côté sera supprimé de l'autre côté après la prochaine exécution.
- **Nécessite un état stable entre les exécutions** — si une exécution échoue en cours de route, relancez avec `--resync` pour reconstruire la référence.
- **Les chemins volumineux sont plus lents** — la comparaison de référence analyse entièrement les deux emplacements à chaque exécution.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Configurez les deux distants** dans RcloneView.
3. **Exécutez le `--resync` initial** depuis le terminal de RcloneView pour établir la référence.
4. **Planifiez des exécutions bisync régulières** pour une synchronisation continue.

Bisync apporte une véritable synchronisation à double sens à toute paire de distants pris en charge par rclone — disques locaux, fournisseurs cloud, partages NAS, et plus encore.

---

**Guides connexes :**

- [Sync, Copy, Move — Différences expliquées](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Règles de filtrage et synchronisation sélective](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Éviter la perte de données due à une direction de synchronisation incorrecte](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
