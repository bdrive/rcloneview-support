---
slug: migrate-yandex-disk-to-wasabi-rcloneview
title: "Migrer Yandex Disk vers Wasabi — Transférer des fichiers avec RcloneView"
authors:
  - alex
description: "Migrez Yandex Disk vers le stockage objet Wasabi avec RcloneView : connectez les deux remotes, lancez un Dry Run, copiez de cloud à cloud et vérifiez avec des checksums."
keywords:
  - migrer Yandex Disk vers Wasabi
  - sauvegarde Yandex Disk
  - migration vers Wasabi
  - RcloneView Yandex Disk
  - RcloneView Wasabi
  - transfert de cloud à cloud
  - sauvegarde S3
  - rclone GUI
  - migration de stockage objet
  - outil de migration cloud
tags:
  - RcloneView
  - yandex-disk
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Yandex Disk vers Wasabi — Transférer des fichiers avec RcloneView

> Copiez une archive Yandex Disk vers des buckets Wasabi sans détour par le disque local, et confirmez que chaque fichier est bien arrivé.

Yandex Disk fonctionne comme un lecteur personnel, mais les archives à long terme et les données de projet partagées relèvent souvent d'un stockage objet compatible S3, où vous contrôlez les buckets et les clés d'accès. RcloneView connecte Yandex Disk et Wasabi comme remotes dans une seule fenêtre et exécute le transfert de l'un à l'autre ; vous n'avez donc pas à stocker d'abord des téraoctets sur un disque local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer les deux remotes

Yandex Disk se connecte via le navigateur : choisissez-le dans **Remote > New Remote**, autorisez l'accès, et le remote se connecte. Wasabi se configure comme fournisseur compatible S3. Créez un bucket dans la console Wasabi, générez une Access Key et une Secret Key, puis saisissez-les dans RcloneView avec l'endpoint de la région de votre bucket.

Wasabi est un fournisseur compatible S3 ; il fonctionne donc avec la même configuration de remote que les autres services compatibles S3.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Yandex Disk et Wasabi dans RcloneView" class="img-large img-center" />

## Choisir ce qu'il faut déplacer

Parcourez Yandex Disk dans un panneau de l'explorateur et votre bucket Wasabi dans l'autre. Un schéma courant consiste à utiliser un bucket pour l'archive, dont les dossiers de premier niveau reprennent les dossiers Yandex. Le stockage objet n'a pas de véritables dossiers : gardez donc des noms cohérents et évitez les chemins très longs.

Si une partie du disque contient des fichiers jetables, utilisez l'étape de filtrage du job pour les exclure par extension, taille maximale ou ancienneté, afin de ne migrer que l'essentiel.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Glisser des fichiers entre Yandex Disk et Wasabi dans RcloneView" class="img-large img-center" />

## Dry Run et transfert

Créez un job avec Yandex Disk comme source et votre bucket Wasabi comme destination. Choisissez Copy pour que la source reste intacte jusqu'à la vérification du résultat. Lancez un **Dry Run** pour prévisualiser la liste des fichiers, puis démarrez le job. Dans Advanced Settings, vous pouvez activer la comparaison par **checksum**, qui vérifie les hachages et la taille lorsque le fournisseur les prend en charge, et ajuster le nombre de transferts de fichiers simultanés si Yandex ralentit.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi en direct d'un transfert de Yandex Disk vers Wasabi" class="img-large img-center" />

## Vérifier et planifier les suites

Une fois le job terminé, ouvrez **Compare** sur les deux emplacements pour trouver les fichiers left-only ou différents, et copiez les retardataires depuis la vue de comparaison. Si Yandex Disk reste utilisé pendant la transition, une licence PLUS permet de planifier le job avec une temporisation de style crontab afin que les nouveaux fichiers continuent d'arriver dans Wasabi jusqu'à la bascule.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'un job récurrent de Yandex Disk vers Wasabi" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Yandex Disk et Wasabi depuis **Remote > New Remote**.
3. Créez un job Copy, lancez un Dry Run, puis démarrez le transfert.
4. Vérifiez avec Folder Compare avant de supprimer quoi que ce soit à la source.

Une fois l'archive placée dans un bucket que vous contrôlez, supprimer l'ancienne copie devient une décision réfléchie plutôt qu'un pari.

---

**Guides associés :**

- [Gérer le stockage Yandex Disk — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrations cloud vérifiées par checksum avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
