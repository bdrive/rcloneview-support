---
slug: remote-management-add-edit-delete-rcloneview
title: "Guide de gestion des distants — Ajouter, modifier et organiser vos connexions cloud dans RcloneView"
authors:
  - tayson
description: "Gérer plus de 70 fournisseurs cloud commence par des distants bien organisés. Apprenez à ajouter, configurer, modifier et organiser vos connexions cloud dans le gestionnaire de distants de RcloneView."
keywords:
  - rcloneview remote manager
  - add cloud remote rcloneview
  - manage cloud connections
  - rclone remote setup
  - cloud connection manager
  - rcloneview configure remote
  - add cloud account rcloneview
  - rcloneview setup guide
  - cloud remote configuration
  - organize cloud accounts
tags:
  - RcloneView
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Guide de gestion des distants — Ajouter, modifier et organiser vos connexions cloud dans RcloneView

> Configurer votre premier distant prend 2 minutes. Le 15e nécessite un système. Voici comment gérer efficacement toutes vos connexions cloud à mesure que votre configuration multi-cloud grandit.

Chaque fournisseur cloud dans RcloneView commence comme un « distant » — une connexion nommée avec des identifiants et une configuration. Lorsque vous avez deux ou trois distants, la gestion est simple. Mais à mesure que vous ajoutez d'autres fournisseurs (et de nombreux utilisateurs finissent avec plus de 10), les garder organisés devient essentiel. Ce guide couvre tout, de l'ajout de votre premier distant à la gestion d'une configuration multi-cloud complexe.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter un nouveau distant

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote" class="img-large img-center" />

Le gestionnaire de distants vous guide dans l'ajout de l'un des 70+ fournisseurs. Chaque type de fournisseur a des champs de configuration différents — Google Drive utilise OAuth, S3 utilise des clés d'accès, WebDAV utilise une URL et des identifiants.

### Types de connexion courants

| Type de connexion | Exemples | Méthode d'authentification |
|----------------|---------|-------------|
| OAuth | Google Drive, OneDrive, Dropbox | Connexion via navigateur |
| Clés d'accès | S3, B2, Wasabi, R2 | Clé + Secret |
| Nom d'utilisateur/Mot de passe | WebDAV, FTP, SFTP | Identifiants |
| Jeton | Box, Mega | Jeton API |

## Conventions de nommage

Un bon nommage évite bien des confusions par la suite. Voici quelques modèles à considérer :

- **Par fournisseur** : `gdrive-personal`, `gdrive-work`, `s3-backup`
- **Par usage** : `backup-primary`, `backup-secondary`, `archive`
- **Par équipe** : `marketing-drive`, `engineering-s3`, `finance-onedrive`

## Modifier la configuration d'un distant

Besoin de mettre à jour des identifiants, changer des points de terminaison ou modifier des paramètres ? Modifiez n'importe quel distant via le gestionnaire de distants sans avoir à le recréer.

Raisons courantes de modification :

- **Jetons OAuth expirés** — ré-autoriser sans perdre les configurations de tâches
- **Clés d'accès modifiées** — mettre à jour les identifiants S3 après une rotation
- **Point de terminaison différent** — changer de région S3 ou de point de terminaison personnalisé

## Configuration avancée

### Distants Crypt

Créez des enveloppes chiffrées autour de distants existants. Un distant crypt chiffre les noms de fichiers et le contenu avant qu'ils n'atteignent le cloud :

### Distants Union/Combine

Fusionnez plusieurs distants en une seule vue virtuelle. Utile pour combiner les niveaux de stockage gratuits de différents fournisseurs.

## Organiser vos distants

À mesure que le nombre de vos distants augmente :

- **Utilisez un nommage cohérent** pour que les distants se trient logiquement
- **Documentez votre configuration** — quel distant sauvegarde vers quel autre
- **Nettoyez les distants inutilisés** — supprimez les anciens comptes d'essai
- **Testez les connexions périodiquement** — les jetons expirés provoquent des échecs silencieux

## Utiliser les distants dans l'explorateur

Une fois configurés, les distants apparaissent dans l'explorateur à deux volets. Sélectionnez n'importe quel distant comme volet source ou destination :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse remotes in explorer" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez votre premier distant** — suivez la configuration guidée.
3. **Nommez-le clairement** pour référence future.
4. **Ajoutez d'autres distants** selon vos besoins.
5. **Gardez-les organisés** avec un nommage cohérent.

Une bonne gestion des distants est le fondement d'une bonne gestion du cloud.

---

**Guides connexes :**

- [Guide du gestionnaire de connexions](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Chiffrer les sauvegardes cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Distants virtuels : Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
