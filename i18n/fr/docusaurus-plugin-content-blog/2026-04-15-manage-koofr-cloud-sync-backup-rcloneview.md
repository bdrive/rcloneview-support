---
slug: manage-koofr-cloud-sync-backup-rcloneview
title: "Gérer le stockage Koofr — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - tayson
description: "Gérez le stockage cloud Koofr avec RcloneView — synchronisez, sauvegardez et connectez Koofr à d'autres clouds grâce à une interface graphique basée sur rclone."
keywords:
  - gestion Koofr
  - outil de synchronisation Koofr
  - sauvegarde Koofr
  - RcloneView Koofr
  - interface graphique stockage cloud Koofr
  - transfert de fichiers Koofr
  - stockage cloud européen
  - gestion multi-cloud
  - sauvegarde cloud conforme RGPD
  - Koofr rclone
tags:
  - RcloneView
  - koofr
  - cloud-storage
  - cloud-sync
  - backup
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Koofr — Synchronisation et sauvegarde de fichiers avec RcloneView

> Koofr est un fournisseur de stockage cloud européen axé sur la confidentialité, avec de solides garanties RGPD — RcloneView se connecte à Koofr et l'intègre à votre flux de travail multi-cloud de sauvegarde et de synchronisation.

Koofr est un service de stockage cloud européen respectueux de la vie privée, qui se distingue par son engagement en matière de sécurité des données et sa capacité à agréger des comptes cloud externes. Utiliser RcloneView aux côtés de Koofr vous offre une flexibilité supplémentaire — gérer le stockage natif de Koofr depuis une interface dédiée de gestion de fichiers multi-cloud compatible avec plus de 90 fournisseurs cloud simultanément.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Koofr à RcloneView

Pour ajouter Koofr en tant que remote dans RcloneView, accédez à **Remote tab > New Remote** et sélectionnez **Koofr** dans la liste des fournisseurs. Saisissez vos identifiants Koofr pour terminer la configuration. Une fois enregistré, votre stockage Koofr apparaît dans le panneau d'exploration en tant que remote consultable — vous pouvez parcourir les dossiers, afficher la taille des fichiers et gérer le contenu directement sans ouvrir l'interface web de Koofr.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr as a new remote in RcloneView" class="img-large img-center" />

Pour les équipes utilisant déjà la fonction d'agrégation de comptes de Koofr (qui connecte les comptes Dropbox, Google Drive ou OneDrive via l'interface de Koofr), RcloneView offre une vue complémentaire — permettant de gérer le stockage propre de Koofr indépendamment, aux côtés de ces services externes.

## Synchroniser des fichiers avec Koofr

Un développeur freelance utilisant Koofr comme destination de sauvegarde personnelle peut configurer une tâche de synchronisation dans le **Job Manager** de RcloneView : le dossier de projet local comme source, le remote Koofr comme destination. RcloneView gère la synchronisation incrémentielle — seuls les fichiers modifiés sont transférés lors des exécutions suivantes, ce qui réduit considérablement l'utilisation de la bande passante par rapport à des téléversements complets répétés.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Syncing files to Koofr in RcloneView Job Manager" class="img-large img-center" />

L'emplacement des centres de données de Koofr en Europe en fait une destination de sauvegarde attrayante et conforme au RGPD. Les entreprises ayant besoin de sauvegardes hébergées en Europe pour des raisons de conformité réglementaire peuvent configurer des transferts automatisés depuis des serveurs de fichiers internes vers Koofr grâce à la fonction de planification de RcloneView (licence PLUS). L'aperçu **Dry Run** confirme précisément quels fichiers seront déplacés avant que la moindre donnée ne soit touchée, ce qui évite les écrasements accidentels.

## Transferts inter-fournisseurs impliquant Koofr

RcloneView traite Koofr comme n'importe quel autre remote cloud — vous pouvez configurer librement des transferts entre Koofr et n'importe quel autre fournisseur. Une petite agence de design qui sauvegarde mensuellement ses dossiers de projets Google Drive vers Koofr configure une tâche de copie entre les deux remotes dans l'explorateur à double panneau, en vérifiant les deux côtés avant de lancer l'exécution.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-provider transfer from Google Drive to Koofr in RcloneView" class="img-large img-center" />

La fonction **Folder Compare** vous permet de comparer votre stockage Koofr à n'importe quel autre remote, en identifiant les fichiers présents d'un côté mais absents de l'autre. Cela s'avère utile pour vérifier que des transferts récents se sont bien déroulés dans leur intégralité, ou pour repérer des divergences avant qu'elles ne se transforment en pertes de données.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Accédez à **Remote tab > New Remote**, sélectionnez **Koofr**, et saisissez vos identifiants.
3. Parcourez votre stockage Koofr dans le panneau d'exploration.
4. Créez des tâches de synchronisation ou de copie dans le **Job Manager** entre Koofr et votre stockage local ou d'autres clouds.

Pour les utilisateurs soucieux de leur confidentialité et les équipes soumises au RGPD, Koofr associé à RcloneView offre une gestion cloud professionnelle avec une résidence des données entièrement européenne.

---

**Guides connexes :**

- [Koofr comme hub multi-cloud — Google Drive, OneDrive, Dropbox avec RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Koofr vs Jottacloud — Comparatif de stockage cloud européen avec RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud Jottacloud avec RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
