---
slug: migrate-mailru-cloud-to-google-drive-rcloneview
title: "Migrer Mail.ru Cloud vers Google Drive — transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez Mail.ru Cloud vers Google Drive avec RcloneView : connectez les deux remotes, lancez un Dry Run, copiez les dossiers de cloud à cloud et vérifiez le résultat avec Folder Compare."
keywords:
  - migrer Mail.ru Cloud vers Google Drive
  - transfert Mail.ru Cloud
  - de Mail.ru vers Google Drive
  - RcloneView Mail.ru
  - migration de cloud à cloud
  - déplacer des fichiers entre clouds
  - sauvegarde Mail.ru Cloud
  - migration avec l'interface graphique rclone
  - outil de migration Google Drive
  - vérification avec Folder Compare
tags:
  - RcloneView
  - mailru
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Mail.ru Cloud vers Google Drive — transférer des fichiers avec RcloneView

> Déplacez vos fichiers Mail.ru Cloud vers Google Drive avec un flux de travail visuel et vérifiable, au lieu de téléchargements et de renvois manuels.

Déplacer des années de documents, de numérisations et de médias hors de Mail.ru Cloud revient généralement à tout télécharger sur un ordinateur portable puis à tout renvoyer. RcloneView, une interface graphique basée sur rclone, connecte les deux services comme remotes afin que vous puissiez copier de l'un à l'autre depuis une seule fenêtre et vérifier le résultat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Ouvrez RcloneView et utilisez **New Remote** pour ajouter Mail.ru Cloud et Google Drive. Google Drive se connecte via OAuth dans votre navigateur ; aucune clé d'API n'est donc nécessaire. Mail.ru Cloud figure parmi les fournisseurs pris en charge ; suivez les instructions à l'écran pour ses identifiants. Une fois les deux affichés dans Remote Manager, ouvrez-les côte à côte dans deux panneaux Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Mail.ru Cloud et Google Drive dans RcloneView" class="img-large img-center" />

RcloneView prend en charge plus de 90 services de stockage cloud depuis une seule fenêtre, sous Windows, macOS et Linux ; la même configuration vaut donc pour toute migration ultérieure.

## Planifier la copie avant de déplacer quoi que ce soit

Parcourez d'abord l'arborescence source. Utilisez **Get Size** sur les dossiers de premier niveau pour estimer le volume, puis décidez de ce qui est déplacé maintenant et de ce qui peut attendre. Une petite entreprise disposant d'un dossier partagé « Contracts » et d'un gros dossier « Archive » pourrait migrer le premier immédiatement et planifier le second en dehors des heures de travail.

Faites glisser un dossier du panneau Mail.ru vers le panneau Google Drive : un glisser entre remotes différents effectue un **Copy**, la source reste donc intacte tant que vous n'êtes pas satisfait. Pour les déplacements plus importants, créez une tâche Copy dans l'assistant Sync, définissez le nombre de transferts dans Advanced Settings et utilisez des filtres pour ignorer les fichiers inutiles, comme les images ISO.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud entre deux remotes dans RcloneView" class="img-large img-center" />

## Dry Run, transfert et suivi

Lancez d'abord un **Dry Run**. Il liste ce qui serait copié sans toucher à aucun des deux côtés, ce qui permet de repérer les mauvais chemins avant qu'ils ne fassent perdre du temps. Quand la liste est correcte, démarrez la tâche et suivez la progression, la vitesse et le nombre de fichiers dans l'onglet Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi d'un transfert en cours dans l'onglet Transferring de RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois la copie terminée, ouvrez **Compare** avec Mail.ru Cloud à gauche et Google Drive à droite. Filtrez les fichiers présents uniquement à gauche ou différents (left-only, different) pour voir ce qui manque ou ne correspond pas, puis copiez-les. Job History conserve l'état, la taille et la durée de vos fichiers.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare affichant les différences entre la source et la destination" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Mail.ru Cloud et Google Drive via **New Remote**.
3. Lancez un Dry Run sur un dossier, puis démarrez la tâche Copy.
4. Confirmez avec Folder Compare avant de fermer l'ancien compte.

Une copie directe de cloud à cloud et vérifiée rend la migration peu risquée et facile à reprendre.

---

**Guides associés :**

- [Gérer la synchronisation de Mail.ru Cloud](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Transférer Mail.ru Cloud vers Google Drive et S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Migrer Mail.ru Cloud vers Backblaze B2](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
