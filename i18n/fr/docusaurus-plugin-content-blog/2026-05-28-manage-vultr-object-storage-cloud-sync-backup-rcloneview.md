---
slug: manage-vultr-object-storage-cloud-sync-backup-rcloneview
title: "Gérer Vultr Object Storage — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - alex
description: "Connectez Vultr Object Storage à RcloneView et gérez vos buckets compatibles S3 avec une interface graphique — synchronisez, sauvegardez, montez et automatisez les transferts sans aucune ligne de commande."
keywords:
  - Vultr Object Storage
  - RcloneView Vultr
  - Vultr S3 compatible backup
  - Vultr cloud sync GUI
  - S3-compatible object storage manager
  - Vultr bucket sync
  - object storage backup tool
  - cloud file transfer Vultr
  - Vultr cloud management
  - S3 compatible GUI rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Vultr Object Storage — Synchronisation et sauvegarde de fichiers avec RcloneView

> RcloneView se connecte à l'API compatible S3 de Vultr Object Storage, vous offrant une interface graphique complète pour parcourir les buckets, planifier des sauvegardes et monter le stockage cloud comme un disque local.

Vultr Object Storage est un service de stockage d'objets compatible S3 construit sur l'infrastructure cloud de Vultr, apprécié des développeurs et des équipes d'infrastructure qui ont besoin d'un stockage distribué mondialement et économique aux côtés des offres de calcul de Vultr. Bien que le service soit simple à configurer par programmation, gérer les fichiers au quotidien via la CLI ou écrire des scripts personnalisés est une friction que la plupart des équipes veulent éviter. RcloneView résout ce problème en traitant les buckets Vultr exactement comme n'importe quel autre distant — vous les parcourez dans un explorateur de fichiers à double volet, configurez des tâches de synchronisation récurrentes via un assistant et surveillez les transferts en direct sans écrire une seule commande rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connexion de Vultr Object Storage dans RcloneView

L'ajout de Vultr à RcloneView utilise la configuration standard compatible S3. Ouvrez l'onglet **Remote** et cliquez sur **New Remote**, puis sélectionnez **Amazon S3** comme type de fournisseur. Entrez votre clé d'accès et votre clé secrète Vultr Object Storage — elles sont disponibles dans le panneau de contrôle Vultr sous la section des identifiants de votre instance Object Storage. Dans le champ **Endpoint**, collez l'URL de point de terminaison affichée dans votre tableau de bord Vultr (chaque région de centre de données possède sa propre URL de point de terminaison). Laissez le champ région sur `auto` ou vide ; Vultr gère le routage en fonction du point de terminaison.

Une fois enregistré, votre bucket Vultr apparaît comme un dossier de premier niveau dans le panneau Explorer de RcloneView. Naviguez dans les préfixes d'objets via la barre de chemin de navigation, basculez entre l'affichage en liste et en vignettes, et visualisez le nom, la taille et la date de modification des fichiers d'un coup d'œil. La disposition à double volet vous permet d'ouvrir Vultr dans un panneau et un dossier local, un chemin NAS ou un autre cloud dans l'autre — facilitant les téléversements par glisser-déposer, les téléchargements et les copies entre fournisseurs.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Vultr Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView peut afficher jusqu'à quatre panneaux Explorer simultanément, ce qui est utile lors du déplacement de données entre plusieurs régions Vultr ou du téléversement croisé entre Vultr et un fournisseur comme Backblaze B2.

## Synchronisation et sauvegarde de fichiers vers Vultr Object Storage

Les tâches de sauvegarde automatisées dans RcloneView suivent un assistant en 4 étapes. Sélectionnez votre source — un dossier local, un disque externe ou un autre distant cloud — et choisissez le bucket Vultr comme destination. Nommez la tâche, choisissez la synchronisation unidirectionnelle pour refléter les données vers Vultr, puis configurez le filtrage et les options avancées. Augmenter le nombre de transferts simultanés accélère le débit pour des charges de travail comme une équipe logicielle sauvegardant des artefacts de build nocturnes (des centaines de petits fichiers). Activer la comparaison de sommes de contrôle garantit que chaque fichier arrive identique octet pour octet, ce qui compte lors de l'archivage de binaires compilés ou de vidages de bases de données.

Avant la première exécution réelle, cliquez sur **Dry Run** pour prévisualiser la liste complète des fichiers qui seraient transférés ou supprimés. Cette vérification de sécurité évite les suppressions inattendues dans les buckets partagés. Une fois satisfait, cliquez sur **Run** — l'onglet Transferring en bas de RcloneView affiche le nombre de fichiers, la vitesse de transfert et le total d'octets avec des mises à jour en direct.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Vultr Object Storage in RcloneView" class="img-large img-center" />

Les utilisateurs de RcloneView PLUS peuvent planifier des tâches avec des règles de type crontab — par exemple, une sauvegarde nocturne à 03h00 qui s'exécute du lundi au vendredi — et recevoir des notifications de fin.

## Montage du stockage Vultr comme disque local

La fonctionnalité Mount de RcloneView vous permet d'attacher directement un bucket Vultr comme lettre de lecteur locale (Windows) ou point de montage (macOS/Linux), le rendant accessible à n'importe quelle application sans étapes de synchronisation explicites. Ouvrez **Mount Manager** depuis l'onglet Remote, cliquez sur **New Mount**, sélectionnez votre distant Vultr, puis choisissez le bucket ou le sous-dossier à exposer. Définissez le mode de cache VFS sur **writes** pour la plupart des charges de travail, puis cliquez sur **Save and Mount**.

Le bucket apparaît comme un volume local. Un pipeline CI qui dépose des artefacts de build directement sur un lecteur monté, par exemple, n'a besoin d'aucune connaissance de l'API de Vultr — il écrit des fichiers comme sur un disque local, et rclone gère le téléversement de manière transparente.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Vultr Object Storage bucket as a local drive using RcloneView's Mount Manager" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Dans le panneau de contrôle Vultr, ouvrez votre instance Object Storage et copiez la clé d'accès, la clé secrète et l'URL de point de terminaison.
3. Dans RcloneView, allez dans **Remote tab → New Remote → Amazon S3**, entrez vos identifiants et le point de terminaison Vultr, puis enregistrez.
4. Parcourez votre bucket dans le panneau Explorer ou configurez des tâches de sauvegarde automatisées via le **Job Manager**.

Une fois connecté, Vultr Object Storage s'intègre parfaitement dans tout flux de travail multi-cloud que vous gérez dans RcloneView — aux côtés du stockage local, du NAS et d'autres fournisseurs cloud dans une interface unique.

---

**Guides connexes :**

- [Synchroniser Vultr Object Storage vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Gérer le stockage cloud Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Monter des buckets Amazon S3 comme disque local avec RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
