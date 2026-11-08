---
slug: migrate-pcloud-to-jottacloud-rcloneview
title: "Migrer pCloud vers Jottacloud — Transférer des fichiers avec RcloneView"
authors:
  - alex
description: "Migrez pCloud vers Jottacloud avec RcloneView : connectez les deux remotes, prévisualisez avec un Dry Run, copiez de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer pCloud vers Jottacloud
  - transfert de pCloud vers Jottacloud
  - migration pCloud Jottacloud
  - RcloneView pCloud
  - RcloneView Jottacloud
  - transfert de cloud à cloud
  - déplacer des fichiers depuis pCloud
  - migration de stockage cloud européen
  - migration rclone GUI
tags:
  - RcloneView
  - pcloud
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer pCloud vers Jottacloud — Transférer des fichiers avec RcloneView

> Déplacez une bibliothèque pCloud vers Jottacloud de cloud à cloud, avec un aperçu d'abord et une vérification à la fin.

Un photographe qui regroupe des archives clients, ou une famille qui déplace des dossiers partagés vers un nouveau fournisseur, fait face à la même corvée : des milliers de fichiers situés dans un cloud doivent atterrir dans un autre. Tout télécharger sur un ordinateur portable puis le renvoyer est lent et fragile. RcloneView connecte pCloud et Jottacloud dans une seule fenêtre, exécute la copie entre les deux et propose Dry Run et Folder Compare pour confirmer le résultat. RcloneView permet de monter ET de synchroniser plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter pCloud et Jottacloud comme remotes

Ouvrez l'onglet Remote et choisissez New Remote. pCloud se connecte via OAuth : votre navigateur s'ouvre, vous approuvez l'accès et RcloneView se connecte automatiquement. Ajoutez Jottacloud comme second remote en suivant les invites à l'écran pour ce fournisseur.

Lorsque les deux apparaissent dans Remote Manager, ouvrez-les côte à côte dans deux panneaux Explorer. Parcourir d'abord la source et la destination vous aide à décider quels dossiers déplacer et où ils doivent aller.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes pCloud et Jottacloud dans RcloneView" class="img-large img-center" />

## Planifier la copie avec des filtres et un Dry Run

L'étape 3 de l'assistant de tâches vous permet de limiter le transfert par taille de fichier maximale, âge de fichier maximal ou profondeur de dossier. Les filtres prédéfinis couvrent les fichiers Music, Video, Image et Document, et des règles personnalisées peuvent exclure des motifs tels que les dossiers `.git/` ou les fichiers `.iso`, ce qui est pratique pour ignorer les programmes d'installation et les images disque.

Lancez un Dry Run avant la tâche réelle. Il liste les fichiers qui seraient copiés ou supprimés sans modifier aucun des deux côtés. Pour une migration, choisissez une tâche Copy plutôt qu'une synchronisation en miroir, afin que rien de ce qui se trouve déjà dans Jottacloud ne soit supprimé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de pCloud vers Jottacloud dans RcloneView" class="img-large img-center" />

## Lancer le transfert et suivre la progression

Démarrez la tâche et suivez-la dans l'onglet Transferring, qui affiche la progression, la vitesse et le nombre de fichiers. Pour une grande bibliothèque, augmentez le nombre de transferts de fichiers à l'étape 2, mais gardez un nombre modeste de vérificateurs d'égalité si l'un des backends répond lentement. « Retry entire sync if fails » vaut 3 par défaut, ce qui absorbe les erreurs réseau passagères.

Si une session ne suffit pas, enregistrez la tâche dans Job Manager et relancez-la plus tard. Une tâche Copy ne transfère que les fichiers manquants ou différents, de sorte que les exécutions répétées reprennent là où la précédente s'est arrêtée.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'une tâche Copy de pCloud vers Jottacloud dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois la tâche terminée, ouvrez Compare avec pCloud à gauche et Jottacloud à droite. Les filtres pour les fichiers présents uniquement à gauche, uniquement à droite et différents montrent ce qu'il reste à déplacer, et l'action de copie vers la droite transfère les retardataires. Job History conserve l'état, la taille, la vitesse et le nombre de fichiers de chaque exécution comme trace de la migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers pCloud et Jottacloud après la migration" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez pCloud (OAuth) et Jottacloud comme remotes.
3. Créez une tâche Copy avec des filtres, puis lancez un Dry Run.
4. Exécutez la tâche, puis confirmez le résultat avec Folder Compare.

Laissez le compte pCloud intact tant que Compare n'indique pas que les deux côtés correspondent.

---

**Guides associés :**

- [Gérer le stockage pCloud — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Gérer le stockage Jottacloud — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migrer Jottacloud vers pCloud avec RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-pcloud-rcloneview)

<CloudSupportGrid />
