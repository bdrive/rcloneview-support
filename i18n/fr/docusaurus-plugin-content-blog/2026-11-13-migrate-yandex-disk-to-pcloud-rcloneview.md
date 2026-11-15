---
slug: migrate-yandex-disk-to-pcloud-rcloneview
title: "Migrer de Yandex Disk vers pCloud — transférer des fichiers avec RcloneView"
authors:
  - morgan
description: "Déplacez vos fichiers de Yandex Disk vers pCloud avec RcloneView. Connectez les deux clouds via OAuth, prévisualisez avec Dry Run, copiez de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer yandex disk vers pcloud
  - transfert yandex disk vers pcloud
  - migration yandex disk
  - outil de migration pcloud
  - transfert de cloud à cloud
  - déplacer des fichiers depuis yandex disk
  - rcloneview yandex disk
  - rcloneview pcloud
  - migration cloud rclone gui
tags:
  - RcloneView
  - yandex-disk
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Yandex Disk vers pCloud — transférer des fichiers avec RcloneView

> Déplacez des années de fichiers Yandex Disk vers pCloud grâce à une tâche de copie graphique que vous pouvez prévisualiser, surveiller et vérifier.

Regrouper des comptes de stockage bloque généralement au même endroit : tout télécharger sur un ordinateur portable pour tout renvoyer ensuite. RcloneView connecte Yandex Disk et pCloud côte à côte et copie les fichiers de l'un à l'autre via rclone, sans rien stocker d'abord sur un disque local. Les deux fournisseurs se connectent via une authentification OAuth dans le navigateur, donc aucune clé d'API à générer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Yandex Disk et pCloud comme distants

Ouvrez l'onglet Remote et cliquez sur **New Remote**. Choisissez Yandex Disk, donnez au distant un nom court comme `yandex` et terminez la connexion dans le navigateur. Répétez l'opération pour pCloud avec un nom comme `pcloud`. Les deux apparaissent dans Remote Manager, où vous pourrez les modifier ou les supprimer plus tard.

Une fois connectés, ouvrez deux panneaux Explorer — un par distant — et parcourez les arborescences. Faites un clic droit sur un dossier de premier niveau et choisissez **Get Size** pour voir la quantité de données à déplacer. Ce chiffre vous aide à confirmer que votre offre pCloud dispose d'assez d'espace avant la copie du premier fichier.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and pCloud remotes in RcloneView" class="img-large img-center" />

## Planifier la tâche de copie et la prévisualiser

Pour une migration ponctuelle, une tâche **Copy** est le choix le plus sûr : elle ajoute des fichiers à pCloud sans rien y supprimer. N'utilisez **Sync** que si vous voulez que pCloud reflète exactement Yandex Disk, suppressions comprises.

Créez la tâche dans Job Manager. À l'étape Step 1, choisissez un dossier Yandex Disk comme source et un dossier pCloud comme destination. À l'étape Step 2, envisagez d'activer la comparaison par somme de contrôle afin que les fichiers soient comparés par hash et taille lorsque les deux côtés partagent un type de hash (Yandex Disk utilise MD5, et pCloud ne propose MD5 que pour les comptes de la région US), et conservez le réglage de nouvelles tentatives (par défaut : 3) pour les connexions instables. L'étape Step 3 vous permet d'ignorer ce dont vous n'avez plus besoin — par exemple un âge maximal de fichier, ou des règles personnalisées excluant les images `.iso` ou les dossiers `.git/`.

Avant de lancer, utilisez **Dry Run**. Il liste chaque fichier qui serait copié, si bien qu'un photographe déplaçant 400 GB d'archives RAW peut vérifier l'organisation des dossiers avant d'engager des heures de transfert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from Yandex Disk to pCloud in RcloneView" class="img-large img-center" />

## Lancer et surveiller le transfert

Démarrez la tâche et suivez dans l'onglet Transferring la progression, la vitesse et le nombre de fichiers. Il vaut mieux découper les grandes bibliothèques en plusieurs tâches — une par dossier de premier niveau — pour qu'un incident réseau n'affecte qu'un seul lot. Chaque exécution est enregistrée dans Job History avec son statut, sa taille totale et son nombre de fichiers, ce qui vous donne une piste d'audit de la migration.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to pCloud transfer in the Transferring tab" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois la tâche terminée, ouvrez **Compare** avec le dossier Yandex Disk à gauche et le dossier pCloud à droite. Filtrez sur les fichiers « left-only » et « different » pour repérer ce qui a été ignoré. Copy right envoie les retardataires en un clic.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Yandex Disk and pCloud folders after migration" class="img-large img-center" />

## Pour commencer

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Yandex Disk et pCloud comme distants via leur connexion OAuth dans le navigateur.
3. Créez une tâche Copy de Yandex Disk vers pCloud et vérifiez-la avec Dry Run.
4. Lancez la tâche, puis confirmez le résultat avec Folder Compare avant de fermer votre compte Yandex Disk.

Une migration vérifiée vous permet de fermer l'ancien compte en sachant que chaque dossier est bien arrivé.

---

**Guides associés :**

- [Gérer le stockage Yandex Disk — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Gérer le stockage pCloud — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Résoudre les erreurs de synchronisation Yandex Disk — diagnostiquer et corriger les transferts échoués avec RcloneView](https://rcloneview.com/support/blog/fix-yandex-disk-sync-errors-rcloneview)

<CloudSupportGrid />
