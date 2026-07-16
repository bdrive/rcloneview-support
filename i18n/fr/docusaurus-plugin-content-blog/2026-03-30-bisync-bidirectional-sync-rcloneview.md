---
slug: bisync-bidirectional-sync-rcloneview
title: "Bisync — Synchronisation bidirectionnelle cloud dans RcloneView"
authors:
  - tayson
description: "Découvrez comment utiliser la synchronisation bidirectionnelle bisync de RcloneView pour maintenir vos fichiers locaux et vos fichiers cloud synchronisés dans les deux sens, sur plusieurs appareils et fournisseurs."
keywords:
  - bisync rcloneview
  - synchronisation bidirectionnelle
  - synchronisation cloud à double sens
  - rclone bisync
  - synchronisation de fichiers cloud
  - synchronisation de fichiers à double sens
  - configuration de bisync
  - synchronisation rcloneview
  - synchronisation multi-appareils
  - sauvegarde bidirectionnelle
tags:
  - feature
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync — Synchronisation bidirectionnelle cloud dans RcloneView

> Bisync propage les modifications dans les deux sens, gardant vos fichiers locaux et votre stockage cloud parfaitement en miroir sans écraser l'un ou l'autre côté.

Les opérations de synchronisation classiques sont unidirectionnelles : elles font correspondre la destination à la source, en supprimant à la destination tout ce qui n'existe pas dans la source. Bisync fonctionne différemment. Il suit les modifications de chaque côté depuis la dernière exécution et propage les ajouts, modifications et suppressions dans les deux directions. RcloneView expose la fonctionnalité bisync de rclone via son interface graphique, rendant la synchronisation cloud bidirectionnelle accessible sans écrire de scripts en ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionne Bisync

La commande bisync de rclone maintient une paire de fichiers de listage qui enregistrent l'état de la source (Path1) et de la destination (Path2) après chaque exécution réussie. Lors des exécutions suivantes, bisync compare l'état actuel de chaque côté à son listage stocké pour déterminer ce qui a changé. Les nouveaux fichiers sur Path1 sont copiés vers Path2, les nouveaux fichiers sur Path2 sont copiés vers Path1, et les suppressions sont reproduites dans les deux directions.

La détection des conflits est intégrée. Si le même fichier est modifié des deux côtés entre deux exécutions, bisync le signale comme un conflit plutôt que d'écraser silencieusement une version. Le comportement par défaut renomme la copie en conflit, préservant les deux versions afin que vous puissiez résoudre la différence manuellement. Ceci est essentiel pour les workflows partagés où plusieurs utilisateurs ou appareils peuvent modifier le même document.

La première exécution de bisync nécessite l'option `--resync` pour établir les listages de référence initiaux. RcloneView gère cela automatiquement lorsque vous créez une nouvelle tâche bisync — l'exécution initiale effectue un resync, et toutes les exécutions planifiées suivantes fonctionnent en mode delta normal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Bisync bidirectional transfer configuration in RcloneView" class="img-large img-center" />

## Configurer Bisync dans RcloneView

Pour créer une tâche bisync dans RcloneView, ouvrez le gestionnaire de tâches et sélectionnez bisync comme type d'opération. Choisissez vos deux chemins — par exemple, un répertoire local comme `/home/user/Documents` comme Path1 et un dossier Google Drive comme Path2. Vous pouvez également effectuer un bisync entre deux remotes cloud, comme maintenir un dossier Dropbox en miroir avec OneDrive.

Les règles de filtrage fonctionnent avec bisync tout comme avec la synchronisation standard. Utilisez des motifs d'inclusion et d'exclusion pour limiter bisync à des types de fichiers ou des sous-répertoires spécifiques. Par exemple, vous pourriez effectuer un bisync uniquement sur les fichiers `*.docx` et `*.xlsx` entre un dossier de projet local et un répertoire OneDrive partagé, en ignorant les fichiers temporaires et les métadonnées du système d'exploitation.

Le planificateur de tâches de RcloneView prend en charge l'exécution de bisync à intervalles réguliers — toutes les 15 minutes, toutes les heures, ou selon un planning cron personnalisé. Des intervalles fréquents minimisent la fenêtre propice aux conflits et garantissent une synchronisation quasi en temps réel entre votre machine locale et le stockage cloud.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a bisync job from the RcloneView job manager" class="img-large img-center" />

## Cas d'usage pratiques de Bisync

**Synchronisation de documents multi-appareils :** Gardez un dossier de documents de travail synchronisé entre votre ordinateur de bureau et le stockage cloud. Lorsque vous modifiez un fichier sur votre ordinateur portable (qui se synchronise vers le même dossier cloud via sa propre tâche bisync), les modifications se propagent à tous les appareils connectés lors de l'exécution suivante.

**Dossiers de projet collaboratifs :** Les équipes partageant un dossier de stockage cloud peuvent utiliser bisync pour maintenir des copies de travail locales. Les modifications locales de chaque membre de l'équipe sont poussées vers le cloud, et les modifications distantes des collègues sont récupérées automatiquement. La détection des conflits garantit que des modifications simultanées n'écrasent pas silencieusement les unes les autres.

**Workflows hybrides local-cloud :** Les développeurs ou designers qui ont besoin d'un accès rapide aux fichiers locaux tout en souhaitant une sauvegarde cloud peuvent effectuer un bisync de leurs répertoires de projet. Les opérations sur les fichiers locaux restent instantanées, tandis que la copie cloud reste à jour à des fins de sauvegarde et de partage.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring bisync job in RcloneView" class="img-large img-center" />

## Bonnes pratiques pour Bisync

Exécutez bisync selon un planning cohérent pour minimiser les conflits. Plus l'intervalle entre les exécutions est long, plus le risque de modifications conflictuelles est élevé. Pour les répertoires de travail actifs, un intervalle de 15 à 30 minutes offre un bon équilibre entre réactivité et utilisation des ressources. Évitez d'exécuter bisync sur des arborescences de répertoires extrêmement volumineuses sans filtres, car la comparaison des listages peut être chronophage. Utilisez l'historique des tâches de RcloneView pour surveiller les conflits récurrents et ajuster votre workflow en conséquence.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Bisync job history showing completed two-way synchronization runs" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configurez vos remotes source et destination (dossier local, Google Drive, OneDrive, etc.).
3. Créez une nouvelle tâche bisync dans le gestionnaire de tâches et exécutez le resync initial.
4. Planifiez la tâche bisync pour qu'elle s'exécute à l'intervalle de votre choix pour une synchronisation bidirectionnelle continue.

Bisync dans RcloneView apporte une véritable synchronisation cloud bidirectionnelle à votre ordinateur de bureau, sans scripts, sans tâches cron, sans complexité en ligne de commande.

---

**Guides associés :**

- [Sync, Copy, Move — Différences expliquées dans RcloneView](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Règles de filtrage et synchronisation sélective dans RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView vs Syncthing — Comparaison](https://rcloneview.com/support/blog/rcloneview-vs-syncthing-comparison)

<CloudSupportGrid />
