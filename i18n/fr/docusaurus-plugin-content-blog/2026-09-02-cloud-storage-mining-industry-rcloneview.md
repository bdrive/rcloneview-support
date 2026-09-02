---
slug: cloud-storage-mining-industry-rcloneview
title: "Stockage cloud pour les entreprises minières — Gérer les données de levés avec RcloneView"
authors:
  - morgan
description: "Centralisez les données de levés par drone, LiDAR et SIG issues de sites miniers isolés avec RcloneView — un stockage cloud conçu pour les opérations minières."
keywords:
  - stockage cloud pour les entreprises minières
  - sauvegarde cloud pour l'industrie minière
  - stockage de données de levés géologiques
  - synchronisation cloud des données LiDAR
  - sauvegarde de sites miniers isolés
  - RcloneView mines
  - stockage cloud SIG pour l'industrie minière
  - sauvegarde cloud des levés par drone
  - gestion des données d'exploration minière
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stockage cloud pour les entreprises minières — Gérer les données de levés avec RcloneView

> Récupérez les images de drone, les scans LiDAR et les fichiers de levés géologiques depuis les ordinateurs portables sur site isolé et transférez-les vers un stockage cloud centralisé sans équipe informatique dédiée sur place.

Les opérations minières génèrent d'énormes volumes de données géospatiales — survols de drones, nuages de points LiDAR, journaux de forage et modèles CAO — souvent capturées sur des sites à connectivité limitée et sans salle serveur locale. Les équipes de terrain ont besoin d'un moyen fiable de transférer ces données vers un stockage central dès qu'une connexion est disponible, et les ingénieurs du siège doivent pouvoir parcourir et vérifier ces données sans télécharger des téraoctets juste pour vérifier un nombre de fichiers. RcloneView offre aux deux équipes une seule application de bureau qui connecte disques locaux, stockage cloud et stockage objet de niveau archive depuis une seule fenêtre. Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture dès la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Centraliser les données de levés depuis des sites isolés

Les ordinateurs portables de site conservent généralement les captures de drone brutes et les exports LiDAR sous forme de fichiers locaux jusqu'à ce qu'une connexion soit disponible pour les téléverser. Dans RcloneView, un disque local ou un disque externe apparaît dans son propre panneau Explorer juste à côté de vos distants cloud, ce qui permet à un technicien de terrain de parcourir les fichiers de levés du jour et de les copier dans un bucket compatible S3 — Wasabi, AWS S3 ou Backblaze B2 sont des choix courants pour l'archivage à long terme et économique d'images rarement réutilisées mais devant être conservées pour la conformité.

<img src="/support/images/en/blog/new-remote.png" alt="Connexion de disques de levés locaux et de distants de stockage cloud dans RcloneView" class="img-large img-center" />

## Synchroniser les données de site avec des filtres qui ignorent le superflu

Tous les fichiers d'un disque de levés n'ont pas besoin d'atteindre le cloud. L'étape de filtrage de synchronisation de RcloneView permet d'exclure les fichiers temporaires de traitement par extension, de limiter la taille de fichier maximale, ou de limiter la profondeur de synchronisation dans une arborescence de dossiers de projet imbriquée — utile lorsque les dossiers de capture brute côtoient des gigaoctets de rendus intermédiaires qui n'ont jamais besoin de quitter l'ordinateur du site.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Synchronisation de données de levés filtrées d'un disque de site vers le stockage cloud" class="img-large img-center" />

Pour les sites disposant d'une liaison montante satellite ou cellulaire étroite, exécuter la synchronisation la nuit en tant que tâche planifiée (licence PLUS) permet d'automatiser l'essentiel du transfert sans monopoliser la connexion pendant les heures de travail.

## Vérifier l'intégrité des données avant l'archivage

Les enregistrements de levés et de conformité doivent pouvoir prouver leur intégrité une fois arrivés dans le stockage central. Folder Compare place le dossier de site local et l'archive cloud côte à côte, signale les fichiers dont la taille diffère, et permet à la comparaison basée sur des sommes de contrôle de confirmer que le contenu correspond, plutôt que de se fier uniquement aux noms de fichiers et aux horodatages.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison d'un dossier de levés local avec la copie cloud archivée dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez le disque local de votre site et un distant cloud ou compatible S3 pour l'archive.
3. Configurez les filtres de synchronisation pour exclure les fichiers temporaires et intermédiaires.
4. Exécutez un Dry Run, puis enregistrez la tâche et consultez le Job History après chaque synchronisation.

Disposer de données fiables issues de sites isolés signifie moins de surprises lorsque les équipes d'ingénierie et de conformité en ont besoin.

---

**Guides associés :**

- [Stockage cloud pour la construction et la gestion de projets — RcloneView](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Stockage cloud pour l'énergie et les services publics — RcloneView](https://rcloneview.com/support/blog/cloud-storage-energy-utilities-rcloneview)
- [Stockage cloud pour l'architecture, l'ingénierie et la CAO — RcloneView](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)

<CloudSupportGrid />
