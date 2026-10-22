---
slug: migrate-koofr-to-dropbox-rcloneview
title: "Migrer Koofr vers Dropbox — Transférer des fichiers avec RcloneView"
authors:
  - robin
description: "Migrez Koofr vers Dropbox avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, copiez de cloud à cloud et vérifiez le résultat avec Folder Compare."
keywords:
  - migrer Koofr vers Dropbox
  - transfert de Koofr vers Dropbox
  - RcloneView Koofr
  - RcloneView Dropbox
  - migration de cloud à cloud
  - sauvegarde Koofr
  - synchronisation Dropbox
  - rclone GUI
  - déplacer des fichiers entre clouds
  - outil de migration cloud
tags:
  - RcloneView
  - koofr
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Koofr vers Dropbox — Transférer des fichiers avec RcloneView

> Déplacez une bibliothèque Koofr vers Dropbox par un transfert de cloud à cloud, avec un aperçu avant toute copie et une comparaison ensuite.

Passer de Koofr à Dropbox s'explique généralement par un dossier d'équipe partagé, un flux de travail client ou une application qui ne s'intègre qu'à Dropbox. Tout télécharger sur un ordinateur portable puis le renvoyer est lent et fragile. RcloneView, une interface graphique basée sur rclone, connecte les deux services comme remotes et transfère de l'un à l'autre en un seul job, avec un suivi de la progression du début à la fin.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Koofr et Dropbox comme remotes

Ouvrez l'onglet Remote et cliquez sur **New Remote**. Dropbox utilise OAuth via le navigateur : RcloneView ouvre une page de connexion, vous autorisez l'accès, et le remote se connecte sans clé d'API. Si votre cible est un compte Dropbox for Business, activez le paramètre `dropbox_business` lors de la création du remote. Ajoutez Koofr de la même manière depuis la liste des fournisseurs et connectez-vous avec le compte que vous quittez.

RcloneView gère plus de 90 services de stockage cloud depuis une seule fenêtre sous Windows, macOS et Linux ; les deux remotes apparaissent donc côte à côte dans le même explorateur.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Koofr et Dropbox dans RcloneView" class="img-large img-center" />

## Planifier l'organisation des dossiers avant de copier

Ouvrez Koofr dans le panneau gauche de l'explorateur et Dropbox dans le panneau droit. Décidez si vous déplacez tout ou seulement certains dossiers. Un studio photo avec plusieurs années de dossiers clients peut copier une année à la fois, tandis qu'une petite équipe peut déplacer toute l'arborescence en une passe. L'option **Get Size** du menu contextuel indique la quantité de données d'un dossier, ce qui aide à estimer la durée du job.

Utilisez l'étape de filtrage de l'assistant de job pour ignorer le superflu, comme les dossiers `.git/` ou les fichiers dépassant une taille maximale.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers Koofr et Dropbox dans RcloneView" class="img-large img-center" />

## Lancer un Dry Run, puis le transfert

Créez un job depuis l'onglet Home : Koofr comme source, Dropbox comme destination, et choisissez Copy pour laisser les originaux intacts tant que vous n'êtes pas sûr. Lancez d'abord un **Dry Run**. Il liste les fichiers qui seraient copiés, ce qui permet de repérer un mauvais dossier de destination avant tout déplacement de données. Lancez ensuite le job ; un transfert de cloud à cloud circule en flux entre les services, et l'onglet Transferring affiche la vitesse, le nombre de fichiers et la progression.

Dropbox peut ralentir les requêtes lorsqu'il reçoit beaucoup d'appels simultanés. Si des messages de limitation de débit apparaissent, réduisez le nombre de transferts de fichiers dans Advanced Settings et laissez le job réessayer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Koofr vers Dropbox" class="img-large img-center" />

## Vérifier et conserver l'historique des jobs

Une fois la copie terminée, ouvrez **Compare** sur les deux dossiers. Les fichiers Left-only montrent ce qui n'est pas arrivé ; les différences de taille sont signalées séparément. Comblez les écarts en copiant depuis la vue de comparaison, puis consultez **Job History** pour connaître l'état, la durée et le nombre de fichiers de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des jobs de la migration de Koofr vers Dropbox" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Koofr et Dropbox depuis **Remote > New Remote**.
3. Créez un job Copy de Koofr vers Dropbox et lancez un Dry Run.
4. Exécutez le job, puis vérifiez avec Folder Compare avant de supprimer la copie Koofr.

Une migration que l'on peut prévisualiser et vérifier est une migration que l'on peut mener à bien en confiance.

---

**Guides associés :**

- [Gérer le stockage Koofr — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Gérer le stockage Dropbox — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dry Run — Prévisualiser la synchronisation cloud dans RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
