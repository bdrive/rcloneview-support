---
slug: predefined-filters-sync-file-types-rcloneview
title: "Filtres prédéfinis — Ne synchronisez que les fichiers dont vous avez besoin dans RcloneView"
authors:
  - steve
description: "Utilisez les filtres prédéfinis de RcloneView pour ne synchroniser que les images, vidéos, musiques ou documents plutôt que de transférer des dossiers entiers."
keywords:
  - filtres RcloneView
  - filtres prédéfinis
  - synchroniser types de fichiers
  - filtres de synchronisation cloud
  - synchronisation sélective
  - synchronisation images uniquement
  - filtre de synchronisation vidéo
  - filtre de synchronisation de documents
  - filtre Google Docs
tags:
  - RcloneView
  - feature
  - filters
  - sync
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Filtres prédéfinis — Ne synchronisez que les fichiers dont vous avez besoin dans RcloneView

> Ignorez les types de fichiers dont vous n'avez pas besoin et ne synchronisez que ceux qui vous intéressent, sans écrire de règles d'exclusion à la main.

Toutes les tâches de synchronisation ne devraient pas déplacer tous les fichiers d'un dossier. Un studio photo qui sauvegarde un lecteur partagé rempli de fichiers RAW, de PSD et de quelques PDF isolés ne se soucie généralement que des images — pas des factures qui se trouvent juste à côté. L'étape Paramètres de filtrage de RcloneView propose des filtres prédéfinis en un clic pour les catégories de fichiers courantes, afin de limiter une tâche de synchronisation exactement au contenu qui compte, sans avoir à construire un jeu de règles personnalisé depuis zéro.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que couvrent les filtres prédéfinis

L'étape 3 de l'assistant de synchronisation, Paramètres de filtrage, propose des filtres prédéfinis en un clic pour Musique, Vidéo, Image, Document, Google Docs et Box Docs. En sélectionner un limite la tâche aux types de fichiers correspondants — choisissez Image, par exemple, et la tâche de synchronisation ignore tout le reste dans le dossier source, quelle que soit sa profondeur d'imbrication ou ce qui s'y trouve par ailleurs.

Cela compte pour les dossiers à contenu mixte qui s'accumulent avec le temps : le lecteur partagé d'une équipe marketing rempli de vidéos exportées, de documents de marque et de tableurs n'a pas besoin d'être entièrement reflété vers un distant d'archives vidéo. Un seul filtre prédéfini garde la destination propre sans passage de nettoyage manuel ultérieur.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Sélection d'un filtre de type de fichier prédéfini dans l'assistant de synchronisation de RcloneView" class="img-large img-center" />

Les options Google Docs et Box Docs ciblent spécifiquement les formats de documents natifs propres au fournisseur, qui ne se comportent pas comme des fichiers classiques pendant un transfert — utile lorsque vous synchronisez depuis Google Drive ou Box et que vous souhaitez séparer les documents natifs des fichiers binaires téléversés.

## Combiner filtres prédéfinis et personnalisés

Les filtres prédéfinis ne s'excluent pas des règles personnalisées. Vous pouvez superposer un filtre Image prédéfini avec des exclusions personnalisées supplémentaires — une règle de chemin `/thumbnails/*`, par exemple — pour éliminer les fichiers d'aperçu générés qui pollueraient sinon une synchronisation limitée aux images. Les filtres personnalisés prennent également en charge les contraintes de taille maximale de fichier et d'âge maximal de fichier, si bien qu'un studio photo avec 2 To de fichiers RAW pourrait combiner le filtre Image avec une limite d'âge pour ne synchroniser que les prises de vue récentes plutôt que l'intégralité des archives.

Contrairement aux outils qui ne font que du montage, RcloneView synchronise et compare aussi les dossiers avec la licence FREE, si bien que ce filtrage s'applique aussi bien à un transfert ponctuel qu'à une tâche enregistrée et répétable.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Tâche de synchronisation filtrée transférant uniquement des fichiers image entre deux distants" class="img-large img-center" />

## Vérifier les résultats filtrés avec Dry Run

Avant d'appliquer une synchronisation filtrée à un dossier volumineux ou inconnu, exécutez-la d'abord en mode Dry Run. Dry Run affiche la liste exacte des fichiers qui seraient copiés et supprimés selon les paramètres de filtrage actuels — le moyen le plus rapide de confirmer qu'un filtre prédéfini capture bien ce que vous attendez, et n'exclut pas silencieusement des fichiers que vous vouliez réellement transférer.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'un dry run pour prévisualiser une tâche de synchronisation filtrée avant exécution" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Démarrez une nouvelle tâche de synchronisation et sélectionnez vos distants source et destination.
3. À l'étape 3, Paramètres de filtrage, choisissez un filtre prédéfini correspondant au type de contenu que vous voulez synchroniser.
4. Exécutez Dry Run pour confirmer les résultats, puis enregistrez la tâche pour réutiliser le même filtre lors des prochaines synchronisations.

Filtrer au niveau de la synchronisation, plutôt que de trier les fichiers manuellement au préalable, garde les dossiers de destination centrés sur le contenu dont vous avez réellement besoin.

---

**Guides connexes :**

- [Dry Run — Prévisualiser la synchronisation cloud avant transfert dans RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Comparaison de dossiers avec filtre — Restreindre les comparaisons dans RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Bisync — Synchronisation cloud bidirectionnelle avec RcloneView](https://rcloneview.com/support/blog/bisync-bidirectional-cloud-sync-rcloneview)

<CloudSupportGrid />
