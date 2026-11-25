---
slug: fix-system-junk-files-ds-store-thumbs-db-cloud-sync-rcloneview
title: "Éliminer l'encombrement .DS_Store et Thumbs.db dans la synchronisation cloud — Exclure les fichiers système avec RcloneView"
authors:
  - morgan
description: "Empêchez les fichiers .DS_Store, Thumbs.db et desktop.ini d'encombrer vos sauvegardes cloud. Excluez les fichiers parasites du système d'exploitation de vos tâches de synchronisation grâce aux filtres de RcloneView."
keywords:
  - fichiers ds_store synchronisation cloud
  - thumbs.db stockage cloud
  - exclure les fichiers système de la synchronisation
  - desktop.ini sauvegarde cloud
  - rclone exclure ds_store
  - filtres personnalisés RcloneView
  - nettoyer les fichiers parasites de la synchronisation cloud
  - encombrement synchronisation cloud multiplateforme
  - rclone filtrer les fichiers cachés
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Éliminer l'encombrement .DS_Store et Thumbs.db dans la synchronisation cloud — Exclure les fichiers système avec RcloneView

> Gardez les fichiers parasites du système d'exploitation hors de vos dossiers cloud pour que chaque synchronisation ne transporte que les fichiers réellement utilisés.

Ouvrez un dossier cloud partagé synchronisé par une équipe mixte Mac et Windows, et vous trouverez généralement les mêmes invités indésirables dans presque chaque répertoire : `.DS_Store` créé par le Finder de macOS, `Thumbs.db` et `desktop.ini` créés par l'Explorateur Windows. Ils encombrent les listes de fichiers, gonflent le nombre de fichiers et apparaissent comme « différents » chaque fois que deux machines touchent le même dossier. RcloneView vous permet de les exclure des tâches de synchronisation et de nettoyer les copies déjà arrivées dans le cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les fichiers système continuent d'apparaître dans le cloud

Ces fichiers sont des métadonnées, pas du contenu. Le Finder écrit `.DS_Store` pour mémoriser la position des icônes et les réglages d'affichage ; Windows écrit `Thumbs.db` pour mettre en cache les miniatures et `desktop.ini` pour enregistrer la personnalisation des dossiers. Un outil de synchronisation les traite comme n'importe quel autre fichier, si bien qu'une synchronisation unidirectionnelle depuis un MacBook envoie un `.DS_Store` dans chaque dossier qu'il parcourt.

Le problème s'aggrave avec l'échelle. Une agence de design qui sauvegarde 40 000 dossiers de projets peut se retrouver avec des dizaines de milliers de petits fichiers de métadonnées dans son bucket. Chacun est un objet distinct à lister et à comparer, ce qui ralentit les synchronisations suivantes, et chaque fois qu'un collègue parcourt le dossier sur sa propre machine, le fichier change et est transféré à nouveau.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un distant cloud dans RcloneView avant de configurer les exclusions de synchronisation" class="img-large img-center" />

## Exclure les fichiers parasites avec des filtres personnalisés

La solution commence dans l'assistant de synchronisation. Dans **Step 3: Filtering Settings**, ajoutez des règles d'exclusion personnalisées pour `.DS_Store`, `Thumbs.db` et `desktop.ini`. Les filtres personnalisés acceptent des types de fichiers, des dossiers et des règles de chemin : vous pouvez donc aussi exclure les dossiers `.Trashes` ou `.Spotlight-V100` qui apparaissent parfois lorsque vous synchronisez depuis un disque externe formaté sur un Mac.

Avant d'exécuter réellement la tâche, cliquez sur **Dry Run**. La simulation liste chaque fichier qui serait copié ou supprimé, ce qui vous permet de confirmer que les fichiers de métadonnées ont disparu de la liste de transfert. S'ils apparaissent encore, vérifiez l'orthographe de la règle : les règles de filtre sont sensibles à la casse par défaut, donc `Thumbs.db` ne correspond pas à `thumbs.db`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Exécution d'une tâche de synchronisation cloud filtrée dans RcloneView" class="img-large img-center" />

## Nettoyer les fichiers déjà présents dans le cloud

Les filtres bloquent le nouvel encombrement, mais ne suppriment pas ce qui existe déjà. Ouvrez le dossier cloud dans un panneau Explorer et la source locale dans un autre, puis utilisez **Compare**. Les fichiers de métadonnées qui n'existent plus en local apparaissent sous « Show right-only files » ; les copies qui existent encore des deux côtés apparaissent comme des fichiers identiques ou différents. Dans tous les cas, vous pouvez sélectionner les copies côté cloud et les supprimer directement depuis la vue de comparaison.

Soyez prudent avec la synchronisation unidirectionnelle. Une synchronisation qui reflète la source vers la destination supprime les fichiers de destination qui n'existent plus dans la source, mais les fichiers exclus sont entièrement ignorés : un nettoyage dans Compare reste donc la manière la plus claire et la plus délibérée de les supprimer.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare dans RcloneView affichant des fichiers système restants côté cloud" class="img-large img-center" />

## Garder tout propre à chaque exécution

Enregistrez la synchronisation filtrée comme tâche dans Job Manager pour que les exclusions s'appliquent à chaque fois. RcloneView exécute ces tâches avec les mêmes filtres sous Windows, macOS et Linux, ce qui compte lorsque les personnes qui envoient des fichiers utilisent des systèmes d'exploitation différents. Avec une licence PLUS, vous pouvez planifier la tâche, et Job History affiche le nombre de fichiers par exécution : une baisse soudaine après l'ajout des filtres est bon signe que les fichiers parasites ont disparu.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History dans RcloneView affichant le nombre de fichiers après l'exclusion des fichiers système" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez ou modifiez une tâche de synchronisation et ajoutez `.DS_Store`, `Thumbs.db` et `desktop.ini` comme filtres d'exclusion personnalisés à l'étape Step 3.
3. Lancez un Dry Run pour confirmer que les fichiers de métadonnées ne figurent plus dans la liste de transfert.
4. Utilisez Compare pour trouver et supprimer les copies déjà stockées dans le cloud.

Quelques minutes de configuration des filtres suffisent à garder vos dossiers cloud lisibles et vos synchronisations concentrées sur le vrai travail.

---

**Guides associés :**

- [Corriger les filtres de synchronisation qui n'excluent pas les fichiers](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Règles de filtre rclone — Include et Exclude expliqués](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Nettoyer un compte de stockage cloud plein](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)

<CloudSupportGrid />
