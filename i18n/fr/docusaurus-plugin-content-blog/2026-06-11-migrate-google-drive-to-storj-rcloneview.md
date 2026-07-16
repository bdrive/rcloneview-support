---
slug: migrate-google-drive-to-storj-rcloneview
title: "Migrer de Google Drive vers Storj — Transférer des fichiers avec RcloneView"
authors:
  - jay
description: "Découvrez comment migrer vos fichiers Google Drive vers le stockage décentralisé Storj avec RcloneView — un guide étape par étape pour les transferts cloud à cloud."
keywords:
  - migrer Google Drive vers Storj
  - migration Google Drive vers Storj
  - stockage cloud décentralisé Storj
  - migration cloud RcloneView
  - déplacer des fichiers de Google Drive vers Storj
  - transfert cloud à cloud RcloneView
  - interface S3 compatible Storj
  - outil de migration Google Drive
  - sauvegarde cloud décentralisée RcloneView
tags:
  - RcloneView
  - google-drive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Google Drive vers Storj — Transférer des fichiers avec RcloneView

> Déplacez l'intégralité de votre Google Drive vers le stockage décentralisé et chiffré de bout en bout de Storj sans écrire une seule commande.

Les équipes qui stockent des fichiers de projet sensibles sur Google Drive atteignent souvent un point où elles souhaitent une meilleure souveraineté des données, des coûts de sortie réduits, ou un accès compatible S3 pour leur chaîne d'outils. Storj distribue des fragments de fichiers sur des nœuds indépendants répartis dans le monde entier, offrant par conception un chiffrement de bout en bout et une redondance géographique. RcloneView simplifie cette migration : connectez les deux remotes via une configuration authentifiée par navigateur, puis exécutez une tâche de copie qui transfère les fichiers de Google Drive vers Storj via votre machine locale.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Google Drive et Storj en tant que remotes

Avant de transférer quoi que ce soit, les deux comptes cloud doivent être enregistrés dans RcloneView en tant que remotes. Google Drive utilise l'authentification OAuth via navigateur — ouvrez l'onglet Remote, cliquez sur **New Remote**, sélectionnez Google Drive, et RcloneView lance une fenêtre de navigateur pour vous permettre d'autoriser la connexion. Aucune clé API ni identifiant à gérer manuellement.

Storj utilise un accès compatible S3. Dans l'assistant New Remote de RcloneView, sélectionnez le type de fournisseur **S3** et choisissez Storj comme fournisseur S3. Saisissez votre Access Key ID Storj, votre Secret Access Key, et le point de terminaison de la passerelle S3 Storj. Une fois enregistré, le remote apparaît dans le panneau de l'explorateur, vous offrant une vue familière de type explorateur de fichiers pour vos buckets Storj.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Storj as remotes in RcloneView" class="img-large img-center" />

Une fois les deux remotes enregistrés, vous pouvez les ouvrir côte à côte dans l'explorateur à double panneau de RcloneView. Faites glisser un dossier du panneau de gauche (Google Drive) vers le panneau de droite (Storj) pour une copie ponctuelle rapide, ou configurez une tâche gérée pour les migrations plus importantes.

## Configurer la tâche de migration

Pour migrer un Google Drive complet — une agence de design avec 300 Go de ressources ou une équipe de recherche avec des années de documents partagés — utiliser une tâche (Job) est la bonne approche. Cliquez sur **Job Manager** dans l'onglet Home, puis sur **Add Job**. Définissez la source sur votre remote et dossier Google Drive, et la destination sur votre bucket Storj. Choisissez **Copy** comme type de tâche pour transférer tous les fichiers source sans supprimer les originaux de Google Drive.

À l'étape 2 (Advanced Settings), définissez le nombre de transferts de fichiers simultanés en fonction de votre connexion. Le nombre par défaut de 4 transferts multi-threads fonctionne bien pour la plupart des connexions internet. Activez la vérification **checksum** pour garantir l'intégrité des fichiers — RcloneView compare les sommes de contrôle après chaque transfert, détectant toute corruption survenue pendant le transit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Google Drive to Storj copy job in RcloneView" class="img-large img-center" />

L'étape 3 vous permet d'ajouter des règles de filtrage si vous souhaitez migrer uniquement certains types de fichiers — par exemple, exclure les fichiers de travail `.tmp` ou limiter le transfert aux fichiers de moins d'un certain âge. Cela est particulièrement utile lors de la migration d'un espace de travail actif où certains fichiers temporaires ne doivent pas suivre vers le nouveau fournisseur de stockage.

## Surveiller et vérifier le transfert

Une fois que vous cliquez sur **Run**, l'onglet Transferring en bas de RcloneView affiche la progression en direct : vitesse de transfert, nombre de fichiers et taille totale déplacée. Pour les migrations volumineuses, RcloneView poursuit la tâche en arrière-plan même si vous naviguez vers d'autres remotes — et si le transfert est interrompu, définir le nombre de tentatives à l'étape 2 garantit qu'il reprendra là où il s'est arrêté.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Google Drive to Storj migration job in RcloneView" class="img-large img-center" />

Une fois la tâche terminée, utilisez la fonction **Folder Compare** de RcloneView (onglet Home > Compare) pour vérifier que les deux côtés correspondent. Pointez le panneau de gauche vers votre source Google Drive et le panneau de droite vers votre destination Storj. Folder Compare fera apparaître tous les fichiers qui n'existent que d'un seul côté ou dont la taille diffère, vous donnant une piste d'audit claire avant de commencer à démanteler l'espace de travail Google Drive.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to Storj migration" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Google Drive via **Remote tab > New Remote** et effectuez la connexion OAuth via navigateur.
3. Ajoutez votre remote Storj en utilisant le type de fournisseur S3 avec votre Access Key Storj, votre Secret Key et le point de terminaison de la passerelle.
4. Ouvrez **Job Manager**, créez une tâche Copy de votre dossier Google Drive vers votre bucket Storj, activez le checksum à l'étape 2, puis cliquez sur Run.

L'architecture de Storj offre par défaut à vos fichiers une distribution géographique et un chiffrement de bout en bout — RcloneView vous permet d'atteindre cette destination en quelques minutes, plutôt qu'en des heures de scripting.

---

**Guides connexes :**

- [Migrer de Dropbox vers Storj avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [Migrer de OneDrive vers Storj avec RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-storj-rcloneview)
- [Gérer le stockage cloud Storj — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
