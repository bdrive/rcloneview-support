---
slug: link-public-shared-links-cloud-rcloneview
title: "Générer des liens publics partagés pour des fichiers cloud avec RcloneView"
authors:
  - tayson
description: "Générez des liens de téléchargement publics pour vos fichiers cloud grâce à la commande link de RcloneView. Partagez des fichiers depuis Google Drive, OneDrive, Dropbox, S3 et bien d'autres sans donner accès à votre compte."
keywords:
  - rcloneview
  - public link cloud file
  - share cloud file link
  - rclone link command
  - generate download link
  - presigned url s3
  - shared link google drive
  - cloud file sharing
  - public url cloud storage
  - share file without account
tags:
  - feature
  - tips
  - collaboration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Générer des liens publics partagés pour des fichiers cloud avec RcloneView

> Partager un fichier cloud implique généralement de se rendre sur l'interface web du fournisseur, d'ajuster les permissions, puis de copier un lien. La fonctionnalité de lien de RcloneView génère des URL partageables directement depuis l'explorateur de fichiers — pour tout fournisseur qui le prend en charge.

Lorsque vous devez partager un fichier stocké dans le cloud avec quelqu'un qui n'a pas accès à votre compte, un lien public ou pré-signé est la solution standard. Google Drive crée des liens partageables, S3 génère des URL pré-signées, et Dropbox propose des liens partagés — chacun via des interfaces et des workflows différents. RcloneView regroupe tout cela en une seule action : clic droit sur un fichier, génération d'un lien, et partage.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionnent les liens publics selon les fournisseurs

Les différents fournisseurs cloud implémentent le partage de fichiers différemment :

| Fournisseur | Type de lien | Expiration par défaut | Remarques |
|---|---|---|---|
| Google Drive | Lien partageable | Pas d'expiration | Modifie les permissions du fichier en « toute personne disposant du lien » |
| OneDrive | Lien de partage | Configurable | Anonyme ou limité à l'organisation |
| Dropbox | Lien partagé | Pas d'expiration | Lien de téléchargement en lecture seule |
| AWS S3 | URL pré-signée | Configurable (max 7 jours) | Temporaire, signée cryptographiquement |
| Backblaze B2 | URL de téléchargement | Pas d'expiration | Nécessite un bucket public ou l'utilisation d'un jeton d'authentification |
| Cloudflare R2 | URL pré-signée | Configurable | URL pré-signées compatibles S3 |

RcloneView utilise en interne la commande `link` de rclone, qui génère automatiquement le type de lien approprié pour chaque fournisseur. Vous n'avez pas besoin de connaître le mécanisme de partage spécifique au fournisseur — RcloneView s'en charge.

## Générer un lien dans RcloneView

Pour générer un lien public pour un fichier :

1. Accédez au fichier dans l'explorateur de RcloneView.
2. Faites un clic droit sur le fichier et sélectionnez l'option lien/partage.
3. RcloneView génère le lien et le copie dans votre presse-papiers (ou l'affiche pour une copie manuelle).

Pour les fournisseurs prenant en charge l'expiration (comme les URL pré-signées S3), vous pouvez spécifier la durée du lien à l'aide de l'option `--expire` dans les options personnalisées. Par exemple, `--expire 24h` crée un lien qui expire au bout de 24 heures.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Generating a public link for a cloud file in RcloneView" class="img-large img-center" />

## Utiliser la commande link via le terminal

Pour plus de contrôle, utilisez le terminal intégré de RcloneView pour exécuter directement la commande link :

```
rclone link remote:path/to/file.pdf
```

Cela affiche l'URL publique. Pour les fournisseurs compatibles S3, ajoutez une expiration :

```
rclone link remote:bucket/file.pdf --expire 48h
```

L'approche par terminal est utile pour générer des liens pour plusieurs fichiers ou pour scripter la génération de liens dans le cadre d'un workflow.

## Comportement spécifique à chaque fournisseur

### Google Drive

Lorsque vous générez un lien pour un fichier Google Drive, rclone modifie les paramètres de partage du fichier en « toute personne disposant du lien peut consulter ». Le lien n'expire pas, sauf si vous révoquez manuellement le partage. Notez que cela modifie les permissions du fichier — toute personne disposant de l'URL peut accéder au fichier.

Pour les comptes Google Workspace, les administrateurs peuvent restreindre le partage de liens aux membres de l'organisation uniquement. Dans ce cas, le lien généré ne fonctionnera que pour les personnes de votre organisation.

### OneDrive et SharePoint

OneDrive génère des liens de partage via l'API Microsoft Graph. Le type de lien dépend des politiques de partage de votre organisation — il peut être anonyme (accessible à tous) ou restreint aux membres de l'organisation. Les comptes OneDrive personnels peuvent créer des liens anonymes.

### AWS S3 et compatibles S3

Les URL pré-signées S3 constituent l'option la plus sécurisée. L'URL contient une signature cryptographique qui accorde un accès temporaire à un objet spécifique. Le lien expire après la durée spécifiée (la valeur par défaut varie, avec un maximum de 7 jours pour les identifiants d'utilisateur IAM). Aucune modification n'est apportée aux permissions de l'objet — l'URL pré-signée elle-même porte l'autorisation.

Cela rend les URL pré-signées S3 idéales pour le partage temporaire de fichiers : le lien fonctionne pendant la durée spécifiée puis devient invalide, sans nécessiter de nettoyage.

### Dropbox

Dropbox crée un lien partagé offrant un accès en lecture seule au fichier. Le lien n'expire pas par défaut sur les forfaits Dropbox Plus et Professional. Sur Dropbox Business, les administrateurs peuvent appliquer des politiques d'expiration.

## Cas d'usage

### Partage rapide de fichiers

Générez un lien pour un rapport, un fichier de conception ou un jeu de données stocké dans le cloud et envoyez-le par e-mail, Slack ou chat. Le destinataire télécharge le fichier sans avoir besoin d'un compte cloud ni d'accès à votre stockage.

### Accès temporaire pour les clients

Pour les freelances et les agences, les URL pré-signées S3 sont idéales pour les livraisons aux clients. Téléversez le livrable sur S3, générez une URL pré-signée valable 7 jours, et envoyez-la au client. Après 7 jours, le lien expire automatiquement — aucun nettoyage manuel nécessaire.

### Diffusion de contenu public

Pour les fichiers destinés à une large diffusion (documentation, versions, kits média), générez un lien permanent depuis Google Drive ou Dropbox et intégrez-le sur votre site web ou votre documentation. RcloneView génère le lien sans avoir à naviguer vers l'interface web du fournisseur.

## Considérations de sécurité

- **Les liens permanents exposent les fichiers indéfiniment** : les liens Google Drive et Dropbox n'expirent pas par défaut. Si vous partagez un fichier sensible, pensez à révoquer le lien lorsque l'accès n'est plus nécessaire.
- **Les URL pré-signées sont limitées dans le temps mais partageables** : toute personne disposant de l'URL peut accéder au fichier pendant la période de validité. Ne partagez pas d'URL pré-signées sur des canaux publics si le fichier est confidentiel.
- **La génération de liens modifie les permissions chez certains fournisseurs** : les liens Google Drive modifient les paramètres de partage du fichier. Cela est visible par les autres utilisateurs ayant accès au fichier.
- **Auditez périodiquement les liens partagés** : passez en revue et révoquez les anciens liens partagés, en particulier pour les fichiers sensibles. L'explorateur de RcloneView facilite la navigation vers les fichiers et la vérification de leur statut de partage.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez vos remotes cloud dans le gestionnaire de remotes.
3. Accédez à un fichier dans l'explorateur et générez un lien public.
4. Pour des liens limités dans le temps, utilisez des URL pré-signées S3 avec l'option `--expire`.

Générer des liens partageables depuis RcloneView vous évite de basculer vers l'interface web de chaque fournisseur. Que vous ayez besoin d'un lien de partage rapide, d'une URL temporaire de livraison client ou d'un lien de téléchargement permanent, RcloneView s'en occupe depuis l'explorateur de fichiers.

---

**Guides connexes :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ajouter AWS S3 et compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Ajouter un remote via connexion par navigateur (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
