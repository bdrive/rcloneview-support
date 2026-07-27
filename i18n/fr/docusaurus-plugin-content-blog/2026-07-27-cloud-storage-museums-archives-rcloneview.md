---
slug: cloud-storage-museums-archives-rcloneview
title: "Stockage cloud pour musées et archives — Préservation numérique avec RcloneView"
authors:
  - tayson
description: "Les musées et les archives utilisent RcloneView pour synchroniser, vérifier et sauvegarder des collections numérisées entre le stockage cloud et des niveaux d'archivage froid."
keywords:
  - stockage cloud pour musées
  - sauvegarde d'archives numériques
  - logiciel de préservation numérique
  - synchronisation de collections d'archives
  - flux de numérisation muséale
  - synchronisation d'archives en stockage froid
  - archives RcloneView
  - vérification par comparaison de dossiers
  - sauvegarde multi-cloud pour musées
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stockage cloud pour musées et archives — Préservation numérique avec RcloneView

> Les collections numérisées ne sont sûres que si chaque copie est vérifiée, pas seulement téléversée — RcloneView donne aux archivistes un moyen de le prouver.

Un musée d'histoire régionale qui numérise 40 000 négatifs photographiques fait face à un problème qui n'a rien à voir avec la numérisation elle-même : une fois qu'un fichier maître TIFF existe, il doit résider dans deux emplacements de stockage indépendants, et quelqu'un doit confirmer que ces copies restent identiques au fil des années. RcloneView gère directement ce flux de vérification, en reliant le stockage cloud de travail à des niveaux d'archivage à long terme et en offrant au personnel une comparaison dossier par dossier plutôt qu'un message aveugle « téléversement terminé ».

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Fichiers maîtres et copies d'accès

Les archives maintiennent généralement deux niveaux : des fichiers maîtres non compressés (TIFF, WAV, ProRes) conservés à des fins de préservation, et des copies d'accès plus légères (JPEG, MP3, H.264) utilisées pour l'exposition publique ou les demandes des chercheurs. L'explorateur multi-panneaux de RcloneView permet au personnel de garder les deux niveaux visibles côte à côte — un panneau connecté au lecteur cloud de travail où les conservateurs téléversent les éléments récemment numérisés, un autre connecté à un remote d'archivage froid tel qu'un stockage de classe Amazon S3 Glacier ou Backblaze B2 pour les maîtres.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau remote cloud dans RcloneView pour le stockage d'archives" class="img-large img-center" />

Comme RcloneView se connecte à plus de 90 fournisseurs, une institution n'est pas enfermée dans le produit de stockage froid d'un seul fournisseur. Un musée peut conserver ses maîtres chez un fournisseur et répliquer une seconde copie chez un autre fournisseur pour une redondance de reprise après sinistre, le tout géré depuis la même fenêtre.

## Vérifier l'intégrité entre les copies

Téléverser un fichier une seule fois n'est pas de la préservation — confirmer qu'il correspond toujours à l'original des années plus tard, oui. La fonction de comparaison de dossiers de RcloneView vérifie deux emplacements côte à côte et signale les fichiers qui diffèrent en taille, n'existent que d'un seul côté, ou ont rencontré une erreur pendant le transfert. Les archivistes qui effectuent un contrôle de fixité périodique peuvent orienter la comparaison vers la collection de travail et le miroir d'archivage, puis examiner le filtre « fichiers différents » pour détecter une corruption silencieuse ou des transferts incomplets avant qu'ils ne deviennent des pertes permanentes.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Examen des résultats de comparaison de dossiers entre deux emplacements de stockage d'archives" class="img-large img-center" />

Contrairement aux outils cloud qui ne font que monter des lecteurs, RcloneView synchronise et compare aussi des dossiers — avec la licence FREE — de sorte que les contrôles d'intégrité ne nécessitent pas de niveau payant pour commencer.

## Sauvegarde planifiée des métadonnées de catalogue

Les systèmes de gestion de collections (bases de données CMS, instruments de recherche, enregistrements EAD/MARC) changent constamment à mesure que les éléments sont catalogués. Le Job Manager de RcloneView permet à une archive de définir une tâche de synchronisation récurrente qui reflète le dossier d'exportation du CMS vers le stockage cloud selon un calendrier (licence PLUS), afin que les sauvegardes de métadonnées se fassent automatiquement au lieu de dépendre d'un membre du personnel se souvenant d'exécuter une exportation manuelle.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de sauvegarde récurrente pour les métadonnées d'archives dans RcloneView" class="img-large img-center" />

Le mode Dry Run permet à l'équipe de numérisation de prévisualiser exactement quels fichiers une synchronisation va toucher avant de l'exécuter, ce qui compte lorsqu'une tâche pourrait autrement écraser un enregistrement de catalogue corrigé par une version obsolète.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote pour votre stockage cloud principal et un second remote pour votre fournisseur d'archivage froid ou de sauvegarde hors site.
3. Exécutez une synchronisation initiale de vos maîtres numérisés, puis utilisez la comparaison de dossiers pour confirmer que les deux copies correspondent.
4. Configurez une tâche récurrente pour les métadonnées de catalogue afin que le travail de catalogage ne risque jamais d'être perdu.

Une collection n'est jamais plus sûre que sa copie la moins vérifiée — intégrer cette vérification dans une routine, plutôt que de faire confiance qu'elle a eu lieu, est ce qui permet de préserver des décennies de travail de numérisation dans un état récupérable.

---

**Guides connexes :**

- [Gérer les téléversements vers Internet Archive avec RcloneView](https://rcloneview.com/support/blog/manage-internet-archive-uploads-with-rcloneview)
- [Synchroniser Google Drive avec Internet Archive — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-internet-archive-rcloneview)
- [Stockage cloud pour la recherche et le milieu universitaire — Guide avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-research-academia-rcloneview)

<CloudSupportGrid />
