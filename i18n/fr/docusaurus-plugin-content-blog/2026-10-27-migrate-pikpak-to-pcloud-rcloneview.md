---
slug: migrate-pikpak-to-pcloud-rcloneview
title: "Migrer PikPak vers pCloud — transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez PikPak vers pCloud avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, copiez de cloud à cloud et vérifiez le résultat avec Folder Compare."
keywords:
  - migrer PikPak vers pCloud
  - transfert de PikPak vers pCloud
  - déplacer des fichiers PikPak vers pCloud
  - migration PikPak pCloud
  - RcloneView de cloud à cloud
  - synchronisation de PikPak vers pCloud
  - rclone GUI
  - outil de migration cloud
  - transfert de fichiers pCloud
  - vérifier un transfert cloud
tags:
  - RcloneView
  - pikpak
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer PikPak vers pCloud — transférer des fichiers avec RcloneView

> Déplacez votre bibliothèque PikPak vers pCloud directement entre les deux clouds, avec un aperçu d'abord et une vérification à la fin.

PikPak devient souvent une zone d'atterrissage pour les téléchargements et les médias enregistrés, et il faut bien, un jour, donner à ce tas un foyer durable. Tout télécharger sur un ordinateur portable puis le renvoyer vers pCloud est lent et fragile. RcloneView connecte les deux services dans une seule fenêtre et transfère directement de l'un à l'autre, avec des tâches que vous pouvez prévisualiser, répéter et consulter dans l'historique.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter PikPak et pCloud comme remotes

Ouvrez **New Remote** et ajoutez d'abord PikPak, puis pCloud. pCloud utilise OAuth : votre navigateur s'ouvre, vous vous connectez, et le remote se connecte sans clé d'API. Donnez à chaque remote un nom clair, par exemple `pikpak-source` et `pcloud-dest`, afin que les listes de tâches restent lisibles par la suite.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes PikPak et pCloud dans RcloneView" class="img-large img-center" />

Une fois les deux remotes enregistrés, ouvrez chacun dans un panneau Explorer. Parcourir la source et la destination côte à côte vous permet de vérifier que vous regardez les bons comptes avant que quoi que ce soit ne bouge.

## Copier entre les clouds

Faites glisser un dossier du panneau PikPak vers le panneau pCloud. Un glisser-déposer entre des remotes différents effectue une copie : les originaux restent donc dans PikPak jusqu'à ce que vous décidiez de les supprimer. Pour une grande bibliothèque, une tâche Copy enregistrée vaut mieux que le glisser-déposer : elle peut être relancée si la connexion tombe.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de PikPak vers pCloud" class="img-large img-center" />

RcloneView gère plus de 90 services de stockage cloud depuis une seule fenêtre sous Windows, macOS et Linux ; le même outil couvre donc cette migration et tout ce que vous connecterez ensuite.

## Prévisualiser avec Dry Run

Créez la tâche depuis l'assistant Sync ou Job Manager, choisissez vos dossiers source et destination, puis lancez **Dry Run** avant le transfert réel. Il liste les fichiers qui seraient copiés, ce qui permet de repérer sans frais un dossier choisi par erreur. Si vous devez déplacer moins de fichiers, utilisez l'étape de filtrage : définissez une taille de fichier maximale ou excluez les types de fichiers que vous ne voulez pas dans pCloud.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'une tâche de copie dans RcloneView" class="img-large img-center" />

Lorsque l'aperçu vous convient, lancez la tâche et suivez la vitesse et la progression dans l'onglet Transferring. Réduisez le nombre de transferts de fichiers si PikPak commence à ralentir les réponses.

## Vérifier avec Folder Compare

Une fois la tâche terminée, ouvrez **Compare** avec PikPak à gauche et pCloud à droite. Filtrez les fichiers présents uniquement à gauche pour voir ce qui n'est pas arrivé, puis copiez-les. Job History conserve l'état, la taille et le nombre de fichiers de chaque exécution comme trace.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre PikPak et pCloud" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez PikPak et pCloud depuis **New Remote**.
3. Créez une tâche Copy de PikPak vers pCloud et lancez **Dry Run**.
4. Exécutez la tâche, puis vérifiez avec **Compare** avant de supprimer quoi que ce soit à la source.

Une migration que l'on peut prévisualiser et vérifier est une migration dont on peut attendre qu'elle se termine proprement.

---

**Guides associés :**

- [Migrer PikPak vers Google Drive](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [Migrer pCloud vers Mega](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Gérer les téléchargements cloud PikPak](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)

<CloudSupportGrid />
