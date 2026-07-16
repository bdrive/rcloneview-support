---
slug: manage-cloudinary-cloud-sync-backup-rcloneview
title: "Gérer le stockage Cloudinary — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - jay
description: "Découvrez comment gérer, synchroniser et sauvegarder vos ressources numériques Cloudinary vers Amazon S3, Google Drive ou tout autre stockage cloud avec RcloneView."
keywords:
  - gérer Cloudinary avec RcloneView
  - sauvegarde Cloudinary vers S3
  - synchronisation Cloudinary Google Drive
  - Cloudinary rclone
  - sauvegarde des ressources Cloudinary
  - gestion du stockage cloud Cloudinary
  - synchroniser les fichiers Cloudinary
  - sauvegarde des ressources numériques Cloudinary
tags:
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Cloudinary — Synchronisation et sauvegarde de fichiers avec RcloneView

> Cloudinary héberge vos ressources images et vidéos de production — RcloneView vous permet de les sauvegarder vers Amazon S3, Google Drive ou tout autre cloud sans écrire la moindre ligne de script.

Cloudinary est devenue la plateforme de référence pour les développeurs et les équipes créatives qui gèrent de vastes bibliothèques d'images, de vidéos et de fichiers multimédias riches. Mais tout stocker uniquement sur Cloudinary crée un point de défaillance unique : une suppression massive accidentelle, un problème de compte ou une panne d'API peuvent rendre toute votre bibliothèque multimédia inaccessible en quelques minutes. RcloneView, construit sur le backend Cloudinary de rclone, vous offre une interface visuelle pour parcourir, synchroniser et sauvegarder votre compte Cloudinary vers tout autre stockage cloud pris en charge — en conservant une copie vérifiée que vous contrôlez.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Cloudinary à RcloneView

Ouvrez RcloneView et accédez à l'onglet Remote, puis cliquez sur New Remote. Sélectionnez Cloudinary dans la liste des fournisseurs et saisissez vos identifiants pour terminer la configuration. Une fois connecté, votre stockage Cloudinary apparaît comme un distant navigable dans le panneau de l'explorateur — utilisez l'arborescence de dossiers à gauche pour parcourir votre bibliothèque multimédia, et la liste de fichiers à droite pour inspecter chaque ressource avec son nom, sa taille et sa date de modification.

L'affichage en miniatures est particulièrement utile pour le contenu Cloudinary : passez en mode miniature dans la liste de fichiers pour obtenir une grille visuelle de vos images plutôt que de simples noms de fichiers, ce qui permet de confirmer facilement que vous regardez le bon dossier avant de déclencher une opération.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudinary as a new remote in RcloneView" class="img-large img-center" />

## Sauvegarder les ressources Cloudinary vers un autre cloud

Avec Cloudinary ouvert dans un panneau de l'explorateur et une destination comme Amazon S3, Backblaze B2 ou Google Drive ouverte dans l'autre, lancez une tâche de synchronisation via l'onglet Home > Sync. L'assistant en 4 étapes vous permet de configurer précisément ce qui est transféré :

- Sélectionnez votre dossier Cloudinary comme source et votre cloud de sauvegarde comme destination
- Utilisez les filtres de fichiers prédéfinis à l'étape 3 (Image, Vidéo) pour cibler des types de médias spécifiques et ignorer les fichiers inutiles
- Définissez un âge de fichier maximal pour exécuter des synchronisations incrémentielles qui ne capturent que les ressources récemment mises à jour

Exécutez toujours un **Dry Run** en premier — il prévisualise exactement les fichiers qui seront transférés ou ignorés sans rien toucher. Pour une grande bibliothèque Cloudinary, cela permet de détecter une mauvaise configuration des filtres avant qu'elle n'entraîne des sauvegardes manquées.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop interface for transferring Cloudinary assets to S3 backup" class="img-large img-center" />

## Planifier des sauvegardes Cloudinary automatisées

Pour une protection continue des ressources, RcloneView PLUS ajoute une planification de type crontab à l'étape 4 de l'assistant de synchronisation. Une synchronisation nocturne à 2 h récupère les ressources téléversées dans la journée tout en maintenant l'utilisation de la bande passante en dehors des heures de pointe. Utilisez l'aperçu Simulate schedule pour vérifier les prochaines heures d'exécution avant d'enregistrer — aucune surprise lors du premier déclenchement planifié.

Une fois en cours d'exécution, les notifications de fin de tâche vous informent du statut, du nombre de fichiers transférés et du volume de données. Pour les équipes qui gèrent des dizaines de transformations et de téléversements Cloudinary actifs par jour, cette alerte passive vous permet de savoir que la sauvegarde s'est correctement déroulée sans avoir à vous connecter pour vérifier.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a nightly scheduled backup of Cloudinary assets in RcloneView" class="img-large img-center" />

## Vérifier l'exhaustivité de la sauvegarde

Utilisez la fonction Folder Compare (onglet Home > Compare) pour comparer à tout moment votre source Cloudinary avec la destination de sauvegarde. RcloneView affiche côte à côte les fichiers présents uniquement à gauche, uniquement à droite, identiques et différents — vous pouvez repérer les lacunes de couverture en un coup d'œil et copier les fichiers manquants directement depuis la vue de comparaison, sans créer de nouvelle tâche. Pour les ressources multimédias critiques, l'activation des sommes de contrôle dans les Advanced Settings de la tâche de synchronisation vérifie le contenu des fichiers au-delà de la simple correspondance de taille, confirmant que chaque fichier est arrivé intact.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between Cloudinary source and S3 backup destination" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Cloudinary comme distant via l'onglet Remote > New Remote et terminez la configuration.
3. Ajoutez votre destination de sauvegarde (Amazon S3, Backblaze B2, Google Drive) comme second distant.
4. Créez une tâche de synchronisation de Cloudinary vers la destination, exécutez un Dry Run, puis activez la planification PLUS pour des sauvegardes quotidiennes automatisées.

Cloudinary héberge vos ressources de production les plus visibles — conserver une copie synchronisée dans un second cloud transforme un point de défaillance unique en une sauvegarde fiable, vérifiable et entièrement sous votre contrôle.

---

**Guides connexes :**

- [Gérer les ressources numériques sur plusieurs clouds avec RcloneView](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [Gérer le stockage Amazon S3 — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Sauvegarder Google Photos vers un disque externe ou un NAS avec RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
