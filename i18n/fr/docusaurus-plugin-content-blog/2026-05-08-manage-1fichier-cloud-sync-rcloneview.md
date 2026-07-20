---
slug: manage-1fichier-cloud-sync-rcloneview
title: "Gérer le stockage cloud 1Fichier — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - steve
description: "Connectez 1Fichier à RcloneView pour une gestion de fichiers via une interface graphique, des sauvegardes automatisées et des transferts multi-cloud. Gérez votre bibliothèque 1Fichier sans outils en ligne de commande."
keywords:
  - 1Fichier RcloneView sync
  - manage 1Fichier files GUI
  - 1Fichier cloud backup
  - 1Fichier file transfer RcloneView
  - 1Fichier to Google Drive
  - rclone 1Fichier GUI
  - 1Fichier storage management
  - 1Fichier backup tool
tags:
  - RcloneView
  - 1fichier
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage cloud 1Fichier — Synchronisation et sauvegarde de fichiers avec RcloneView

> Connectez votre compte 1Fichier à RcloneView pour gérer vos fichiers, créer des sauvegardes automatisées et transférer des données vers d'autres fournisseurs cloud — le tout sans toucher à la ligne de commande.

1Fichier est un service français de stockage cloud et d'hébergement de fichiers, apprécié pour ses offres de stockage généreuses et ses fonctionnalités de partage de fichiers. Si l'interface web de 1Fichier permet de parcourir les fichiers et d'effectuer des téléchargements manuels, les utilisateurs qui doivent déplacer de grandes bibliothèques, créer des sauvegardes automatisées ou intégrer 1Fichier dans un flux de travail multi-cloud ont besoin d'un outil plus performant. Le backend 1Fichier de RcloneView gère tout cela via une interface graphique claire.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter 1Fichier à RcloneView

Dans RcloneView, ouvrez **onglet Distant → Nouveau distant** et sélectionnez 1Fichier dans la liste des fournisseurs. L'authentification nécessite votre clé API 1Fichier, que vous pouvez générer dans les paramètres de votre compte 1Fichier, dans la section API. Collez la clé API dans la boîte de dialogue de configuration de RcloneView et enregistrez. Le distant est immédiatement prêt à l'emploi.

Vos dossiers et fichiers 1Fichier apparaissent dans le panneau de l'explorateur, consultables via l'arborescence des dossiers et une liste de fichiers triable. Le nombre total et la taille de n'importe quel dossier sont disponibles via clic droit → **Obtenir la taille**, ce qui est utile pour évaluer la quantité de données dont vous disposez avant de planifier une migration ou une tâche de sauvegarde.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting 1Fichier to RcloneView as a new remote" class="img-large img-center" />

## Télécharger et organiser le contenu 1Fichier

Pour les utilisateurs qui stockent une grande archive de fichiers sur 1Fichier et souhaitent les déplacer vers un fournisseur plus accessible comme Google Drive, OneDrive ou un NAS local, la tâche de copie multi-cloud de RcloneView est l'outil idéal. Ouvrez 1Fichier dans un panneau et la destination dans l'autre, puis créez une tâche de copie dans le gestionnaire de tâches. Définissez une concurrence de transfert appropriée — 1Fichier impose des limites de débit de téléchargement sur les comptes gratuits, les détenteurs de comptes premium bénéficieront donc d'un débit plus rapide.

Filtrez les tâches par type de fichier ou nom de dossier pour migrer le contenu de manière sélective. Par exemple, extrayez uniquement les fichiers vidéo d'une archive au contenu mixte, ou copiez une structure de dossiers spécifique en laissant le reste en place.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from 1Fichier to another cloud in RcloneView" class="img-large img-center" />

## Sauvegarder des fichiers vers 1Fichier

Les fonctionnalités d'hébergement de fichiers de 1Fichier en font une cible de sauvegarde secondaire viable, en particulier pour les utilisateurs qui souhaitent disposer d'une copie archivée en Europe. Créez une tâche de synchronisation ou de copie depuis Google Drive, Dropbox ou un dossier local comme source, avec votre compte 1Fichier comme destination. Le gestionnaire de tâches gère les nouvelles tentatives de transfert en cas d'échec, ce qui est important étant donné que les services d'hébergement de fichiers peuvent présenter des temps de réponse d'API variables.

Suivez la progression du transfert dans l'**onglet Transfert en cours** et consultez l'**historique des tâches** pour un journal d'audit complet de ce qui a été sauvegardé et quand.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring 1Fichier backup transfer progress in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez une clé API dans les paramètres de votre compte 1Fichier.
3. Ajoutez 1Fichier comme distant dans **onglet Distant → Nouveau distant**.
4. Créez des tâches de copie ou de synchronisation pour déplacer ou sauvegarder vos données 1Fichier.

RcloneView fait de 1Fichier un élément gérable de votre boîte à outils de stockage cloud, avec la même interface de glisser-déposer que vous utilisez pour tout autre fournisseur.

---

**Guides connexes :**

- [Télécharger et organiser le stockage 1Fichier avec RcloneView](https://rcloneview.com/support/blog/download-organize-1fichier-cloud-storage-rcloneview)
- [Migration cloud à cloud avec RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Gérer plusieurs comptes cloud avec RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
