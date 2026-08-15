---
slug: cloud-storage-drone-survey-mapping-rcloneview
title: "Stockage cloud pour les entreprises de relevés et de cartographie par drone — Gérer de vastes ensembles de données avec RcloneView"
authors:
  - jay
description: "Gérez les images de relevés par drone, les orthomosaïques et les jeux de données LiDAR sur plusieurs fournisseurs de stockage cloud grâce aux outils de synchronisation, de montage et de comparaison de RcloneView."
keywords:
  - stockage cloud relevé par drone
  - sauvegarde entreprise de cartographie
  - stockage de fichiers orthomosaïque
  - synchronisation cloud données LiDAR
  - sauvegarde imagerie drone
  - gestion de données géospatiales
  - RcloneView relevé par drone
  - stockage cloud entreprise de relevés
  - transfert de données de drone
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

# Stockage cloud pour les entreprises de relevés et de cartographie par drone — Gérer de vastes ensembles de données avec RcloneView

> Les captures de vol brutes, les orthomosaïques traitées et les nuages de points s'accumulent rapidement — RcloneView les garde organisés sur chaque cloud utilisé par votre équipe.

Un seul vol de relevé par drone peut produire des dizaines de milliers d'images brutes, et les résultats traités comme les orthomosaïques et les nuages de points LiDAR atteignent couramment plusieurs dizaines de gigaoctets par site. Les entreprises de relevés et de cartographie répartissent généralement ces données entre un disque local rapide pour le traitement actif, un stockage cloud pour la livraison aux clients, et un niveau d'archivage moins coûteux pour les projets terminés — ce qui signifie que les fichiers doivent constamment se déplacer entre plusieurs emplacements. RcloneView gère ces déplacements depuis une seule interface, sans jongler entre des outils de téléversement distincts pour chaque fournisseur.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Organiser les captures brutes et les livrables traités

Configurez des distants séparés pour votre archive de captures brutes, votre espace de travail de traitement et l'emplacement cloud où les livrables finaux sont partagés avec les clients. L'explorateur multi-panneaux de RcloneView permet d'afficher jusqu'à quatre emplacements côte à côte, afin de vérifier qu'une orthomosaïque traitée correspond bien à son dossier de vol source avant d'archiver les images brutes hors du disque local.

<img src="/support/images/en/blog/new-remote.png" alt="Configuration de distants cloud pour des données de relevé par drone dans RcloneView" class="img-large img-center" />

S3, Azure ou Backblaze B2 peuvent être connectés avec un accès complet en lecture/écriture dès la licence FREE, ce qui compte pour les entreprises de relevés qui déplacent de vastes jeux de données traitées vers du stockage objet pour un accès client à long terme sans coût par poste.

## Synchroniser de vastes jeux de données de vol sans téléversements manuels

Configurez une tâche de synchronisation avec la source réglée sur votre dossier de capture local et la destination sur le stockage cloud, puis ajustez le nombre de transferts de fichiers simultanés dans Advanced Settings selon votre bande passante de téléversement — des milliers de petites images brutes tirent parti d'une concurrence plus élevée, contrairement à une poignée de gros fichiers traités. Utilisez le filtre max file age pour ne synchroniser que les vols récents lors des journées de terrain intenses, laissant de la bande passante disponible pour les livrables urgents.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Synchronisation d'images de relevé par drone vers le stockage cloud avec RcloneView" class="img-large img-center" />

Exécutez un Dry Run avant la première synchronisation d'un nouveau site pour confirmer que la structure des dossiers et le nombre de fichiers correspondent à ce qu'indique le journal de vol, ce qui permet de repérer un dossier manquant avant qu'il ne devienne un problème visible pour le client.

## Vérifier les livrables avec Folder Compare

Avant de livrer un projet à un client ou de l'archiver, utilisez Folder Compare pour vérifier que tout ce qui a été téléversé sur le stockage cloud correspond au dossier de traitement local. Il signale les fichiers présents d'un seul côté et ceux dont la taille diffère, ce qui permet de repérer un téléversement interrompu avant qu'un client ne découvre une tuile manquante dans son orthomosaïque.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison de fichiers locaux de relevé par drone avec le stockage cloud dans RcloneView" class="img-large img-center" />

Pour les clients de relevés récurrents, enregistrez ces processus comme tâches de synchronisation planifiées (licence PLUS) afin que les données de chaque nouveau vol arrivent dans le bon dossier client selon le planning que vous configurez, l'historique des tâches (Job History) conservant une trace précise du moment de livraison de chaque jeu de données.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez des distants pour votre disque de capture local, votre espace de traitement et le stockage cloud de livraison aux clients.
3. Configurez une tâche de synchronisation avec une concurrence de transfert ajustée à la taille habituelle de vos jeux de données de vol.
4. Exécutez Folder Compare après chaque téléversement pour confirmer que le jeu de données a été transféré intégralement avant d'archiver les captures brutes.

Garder les données de vol organisées entre plusieurs niveaux de stockage réduit le temps passé à chercher des fichiers et renforce la confiance dans la complétude de chaque livraison client.

---

**Guides connexes :**

- [Stockage cloud pour l'agriculture — Gérer les données de terrain avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [Stockage cloud pour la gestion de projets de construction avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Accélérer les transferts cloud volumineux avec RcloneView](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
