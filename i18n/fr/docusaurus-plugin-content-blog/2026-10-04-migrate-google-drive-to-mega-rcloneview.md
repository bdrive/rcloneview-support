---
slug: migrate-google-drive-to-mega-rcloneview
title: "Migrer Google Drive vers Mega — Transférer des fichiers avec RcloneView"
authors:
  - morgan
description: "Migrez Google Drive vers Mega avec RcloneView : copie cloud à cloud, aperçu par simulation, filtres et vérification dans une seule interface, sans téléchargement manuel."
keywords:
  - migrer Google Drive vers Mega
  - transfert de Google Drive vers Mega
  - déplacer des fichiers vers Mega
  - RcloneView
  - transfert cloud à cloud
  - stockage cloud Mega
  - migration Google Drive
  - rclone GUI
  - outil de migration cloud
tags:
  - RcloneView
  - google-drive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Google Drive vers Mega — Transférer des fichiers avec RcloneView

> Déplacez toute une bibliothèque Google Drive vers Mega sans rien télécharger ni retéléverser à la main.

Passer de Google Drive à Mega implique généralement d'exporter des archives, d'attendre les téléchargements, puis de tout téléverser à nouveau. RcloneView connecte les deux services comme remotes (distants) et copie de l'un à l'autre depuis une fenêtre à deux volets, avec une simulation (Dry Run) pour prévisualiser le résultat avant de déplacer le moindre fichier. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Google Drive utilise OAuth : RcloneView ouvre votre navigateur, vous vous connectez et le remote est créé automatiquement. Mega utilise une adresse e-mail et un mot de passe, saisis directement dans la boîte de dialogue New Remote. Une fois les deux remotes visibles dans Remote Manager, vous pouvez les ouvrir côte à côte dans deux panneaux Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Google Drive et Mega dans RcloneView" class="img-large img-center" />

Prenons un freelance avec 300 Go de dossiers de projets répartis dans Drive. Parcourir les deux comptes dans des panneaux adjacents lui permet de confirmer les dossiers source et la structure de destination avant de commencer.

## Copier entre les clouds

Faites glisser un dossier du panneau Google Drive vers le panneau Mega. Un glisser-déposer entre des remotes différents effectue une copie : vos données Drive restent donc intactes tant que vous n'en décidez pas autrement. Pour les tâches plus volumineuses, créez plutôt un job Copy dans le Job Manager, qui offre un suivi de progression et un historique conservé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert cloud à cloud de Google Drive vers Mega" class="img-large img-center" />

Si vous ne voulez pas inclure les fichiers Google Docs dans le transfert, le filtre prédéfini « Google Docs » de l'étape de filtrage les exclut. Vous pouvez aussi limiter la taille ou l'ancienneté des fichiers afin de ne déplacer que les données pertinentes.

## Prévisualiser et surveiller le job

Lancez d'abord une simulation (Dry Run). Elle liste les fichiers qui seraient copiés, ce qui permet de repérer un mauvais dossier source avant qu'il ne vous coûte des heures. Démarrez ensuite le job et suivez l'onglet Transferring pour la vitesse, le nombre de fichiers et la progression. Si les longues exécutions posent problème, vous pouvez ajuster le nombre de transferts de fichiers simultanés dans Advanced Settings.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi de la progression du transfert dans RcloneView" class="img-large img-center" />

## Vérifier le résultat

Une fois le job terminé, ouvrez Folder Compare sur les dossiers Drive et Mega. Il met en évidence les fichiers présents uniquement à gauche, uniquement à droite et différents, et vous pouvez copier ce qui manque directement depuis la vue de comparaison. Job History conserve le statut, la durée et la taille de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre Google Drive et Mega" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html) depuis ce lien.
2. Ajoutez Google Drive (OAuth) et Mega (e-mail et mot de passe) depuis New Remote.
3. Ouvrez les deux remotes dans deux panneaux et lancez une simulation sur un dossier de test.
4. Créez un job Copy pour toute la bibliothèque, puis vérifiez-le avec Folder Compare.

Une migration visuelle, sans script, laisse votre Drive intact jusqu'à ce que vous soyez sûr que Mega contient tout.

---

**Guides associés :**

- [Migrer Mega vers Google Drive](https://rcloneview.com/support/blog/migrate-mega-to-google-drive-onedrive-rcloneview)
- [Gérer le stockage cloud Mega](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Dry Run : prévisualiser la synchronisation avant le transfert](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
