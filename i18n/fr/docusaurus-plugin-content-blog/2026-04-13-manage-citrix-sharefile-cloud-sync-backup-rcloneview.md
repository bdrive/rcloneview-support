---
slug: manage-citrix-sharefile-cloud-sync-backup-rcloneview
title: "Gérer le stockage Citrix ShareFile — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - tayson
description: "Découvrez comment connecter et gérer le stockage Citrix ShareFile avec RcloneView. Synchronisez, sauvegardez et transférez vos données ShareFile vers d'autres clouds depuis une seule interface graphique."
keywords:
  - Citrix ShareFile
  - synchronisation ShareFile
  - sauvegarde ShareFile
  - gestion cloud ShareFile
  - RcloneView ShareFile
  - synchronisation de fichiers d'entreprise
  - ShareFile vers le cloud
  - gestion de stockage cloud
  - migration ShareFile
  - synchronisation cloud RcloneView
tags:
  - sharefile
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Citrix ShareFile — Synchronisation et sauvegarde de fichiers avec RcloneView

> Connectez Citrix ShareFile à RcloneView et gérez vos fichiers d'entreprise aux côtés de plus de 90 autres services de stockage cloud depuis une seule interface graphique.

Citrix ShareFile est largement utilisé par les entreprises et les équipes de services professionnels pour le partage sécurisé de fichiers et la gestion de documents. Bien que ShareFile propose son propre client, les équipes qui gèrent des fichiers sur plusieurs plateformes cloud ont souvent besoin d'un outil centralisé. RcloneView, un client GUI construit sur rclone, vous permet de connecter ShareFile aux côtés d'autres services — Google Drive, OneDrive, Amazon S3, et plus encore — depuis une seule interface.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Citrix ShareFile à RcloneView

L'ajout de Citrix ShareFile à RcloneView nécessite les identifiants de votre compte ShareFile ainsi que votre Root Folder ID. Le Root Folder ID identifie le dossier de votre compte ShareFile que rclone utilisera comme racine de la connexion — il se trouve généralement dans l'interface web de ShareFile, sous les propriétés du dossier.

Pour configurer le distant, ouvrez RcloneView et accédez à l'onglet Remote, puis cliquez sur New Remote. Sélectionnez Citrix ShareFile dans la liste des fournisseurs et saisissez la configuration requise, y compris votre Root Folder ID. RcloneView est fourni avec un binaire rclone intégré, aucune installation séparée de rclone n'est donc nécessaire.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Citrix ShareFile remote in RcloneView" class="img-large img-center" />

Une fois connecté, ShareFile apparaît comme un distant dans le File Explorer. Vous pouvez parcourir les dossiers, consulter les métadonnées des fichiers (nom, taille, date de modification) et effectuer des opérations telles que copier, couper, coller, renommer et supprimer — le tout sans quitter l'interface de RcloneView.

## Synchroniser ShareFile avec d'autres services cloud

L'un des avantages pratiques de la gestion de ShareFile via RcloneView est la possibilité de le synchroniser directement avec d'autres stockages cloud. Par exemple, un cabinet juridique peut synchroniser des dossiers clients ShareFile vers Amazon S3 pour un archivage à long terme, ou dupliquer le contenu de ShareFile vers OneDrive pour une intégration avec Microsoft 365.

Pour créer une tâche de synchronisation, cliquez sur le bouton Sync dans l'onglet Home et suivez l'assistant en 4 étapes : sélectionnez votre dossier ShareFile comme source (ou destination), choisissez le distant et le dossier cible, configurez les options de transfert, et ajoutez éventuellement des règles de filtrage. La fonction Dry Run vous permet de prévisualiser exactement quels fichiers seront copiés ou supprimés avant de lancer la synchronisation.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Citrix ShareFile to another cloud with RcloneView" class="img-large img-center" />

Pour une protection continue des données, la synchronisation planifiée (disponible avec la licence PLUS) vous permet d'exécuter des sauvegardes ShareFile selon un planning de type crontab — quotidien, hebdomadaire ou à intervalles personnalisés. Job History suit chaque exécution avec l'heure de début, la durée, le nombre de fichiers et le statut.

## Organiser et comparer le contenu de ShareFile

La fonction Folder Compare de RcloneView est précieuse pour auditer le contenu de ShareFile par rapport à une destination de sauvegarde. Lancez-la via le bouton Compare dans l'onglet Home, sélectionnez ShareFile d'un côté et votre stockage cible de l'autre, et la vue met en évidence les fichiers qui n'existent que d'un seul côté, qui diffèrent en taille, ou qui sont identiques.

Ce flux de travail de comparaison préalable est pratique pour les migrations : effectuez une comparaison avant la synchronisation pour comprendre exactement ce qui va changer. Pour des audits plus ciblés, Folder Compare with Filter (licence PLUS) vous permet de restreindre les comparaisons par type de fichier ou nom de dossier, ce qui est utile lorsque vous travaillez avec de grands référentiels ShareFile.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between ShareFile and backup storage in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet Remote et cliquez sur **New Remote**, puis sélectionnez Citrix ShareFile.
3. Saisissez vos identifiants ShareFile et votre Root Folder ID pour terminer la configuration.
4. Utilisez l'assistant Sync pour créer une tâche de sauvegarde de ShareFile vers le cloud de destination de votre choix.

Gérer ShareFile aux côtés de vos autres services cloud depuis une seule interface réduit les changements de contexte et vous offre un flux de travail cohérent pour la sauvegarde, la migration et l'organisation des fichiers.

---

**Guides connexes :**

- [Gérer la synchronisation et la sauvegarde cloud SharePoint avec RcloneView](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [Migrer Citrix ShareFile vers OneDrive et SharePoint avec RcloneView](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Migration cloud-à-cloud avec RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
