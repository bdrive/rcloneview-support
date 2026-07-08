---
slug: manage-internet-archive-uploads-with-rcloneview
title: "Comment téléverser et gérer des fichiers Internet Archive avec RcloneView"
authors:
  - tayson
description: "Utilisez RcloneView pour téléverser des fichiers vers Internet Archive, organiser des collections et synchroniser des archives locales. Une interface graphique visuelle pour le backend Internet Archive de rclone."
keywords:
  - internet archive rcloneview
  - upload to internet archive rclone
  - internet archive rclone gui
  - archive.org file upload
  - internet archive cloud sync
  - rcloneview internet archive
  - archive.org bulk upload
  - internet archive backup
  - rclone internet archive backend
  - preserve files internet archive
tags:
  - RcloneView
  - internet-archive
  - cloud-storage
  - backup
  - guide
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment téléverser et gérer des fichiers Internet Archive avec RcloneView

> Internet Archive préserve le savoir humain — livres, musique, logiciels, vidéos et pages web — gratuitement, pour toujours. RcloneView facilite le téléversement, l'organisation et la synchronisation de vos propres fichiers vers archive.org sans toucher à la ligne de commande.

Internet Archive (archive.org) offre un stockage cloud gratuit et permanent pour les fichiers partageables publiquement. Il est utilisé par des chercheurs, des archivistes, des enseignants et toute personne souhaitant contribuer aux biens communs numériques. Le backend Internet Archive de rclone le rend scriptable, et RcloneView enveloppe cette puissance dans une interface visuelle — vous permettant de parcourir vos éléments d'archive, de téléverser de nouveaux fichiers et de synchroniser des collections en quelques clics.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que vous pouvez faire avec RcloneView + Internet Archive

- **Téléverser des fichiers et des dossiers** vers des éléments archive.org existants ou nouveaux
- **Parcourir vos éléments téléversés** visuellement, comme un gestionnaire de fichiers
- **Synchroniser des collections locales** vers Internet Archive à des fins de préservation
- **Copier des fichiers entre** Internet Archive et d'autres fournisseurs cloud
- **Suivre la progression des transferts** en temps réel

## Configurer le distant Internet Archive

### Étape 1 — Obtenir vos identifiants Internet Archive

1. Créez un compte gratuit sur [archive.org](https://archive.org).
2. Allez dans **My Account → Settings → Security** et générez une **clé API de type S3** (clé d'accès + clé secrète). Malgré son nom, il ne s'agit pas d'AWS — c'est l'API compatible S3 propre à archive.org.

### Étape 2 — Ajouter le distant dans RcloneView

Ouvrez RcloneView et cliquez sur **New Remote** :

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote in RcloneView" class="img-large img-center" />

1. Choisissez **Internet Archive** dans la liste des types de distants.
2. Saisissez votre **Access Key ID** et votre **Secret Access Key** provenant d'archive.org.
3. Nommez le distant (par exemple, `internet-archive`) et enregistrez.

### Étape 3 — Parcourir vos éléments

Une fois connecté, RcloneView affiche vos éléments archive.org sous forme de dossiers. Chaque « élément » (item) sur Internet Archive est un conteneur pour un téléversement (comme un album, une numérisation de livre ou une collection de vidéos).

## Téléverser des fichiers vers Internet Archive

### Téléverser un nouvel élément

Pour créer un nouvel élément archive.org et y téléverser des fichiers :

1. Dans le panneau de droite de RcloneView, naviguez à l'intérieur de votre distant `internet-archive`.
2. Créez un nouveau dossier avec un identifiant d'élément unique (par exemple, `my-1980s-radio-recordings`).
3. Faites glisser-déposer des fichiers depuis votre panneau local vers le dossier de l'élément.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse and upload to Internet Archive items" class="img-large img-center" />

RcloneView transfère les fichiers et affiche la progression en direct. Internet Archive traite les téléversements de manière asynchrone — votre élément sera accessible publiquement en quelques minutes à quelques heures, selon la taille des fichiers.

### Téléverser vers un élément existant

Naviguez vers un dossier d'élément existant et copiez ou déplacez des fichiers dedans. RcloneView gère automatiquement le téléversement multipart et la logique de nouvelles tentatives.

## Synchroniser une collection d'archives locale

Pour garder un dossier local synchronisé avec un élément Internet Archive — idéal pour les projets d'archivage continus :

1. Ouvrez **Jobs** dans RcloneView.
2. Définissez la **Source** sur votre dossier local (par exemple, `D:\my-archive-project`).
3. Définissez la **Destination** sur votre élément Internet Archive (par exemple, `internet-archive:my-1980s-radio-recordings`).
4. Choisissez le mode **Sync** pour ne téléverser que les fichiers nouveaux ou modifiés.
5. Planifiez son exécution hebdomadaire ou à la demande.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync job to Internet Archive" class="img-large img-center" />

## Télécharger et copier depuis Internet Archive

RcloneView fonctionne dans les deux sens. Vous pouvez également :

- **Télécharger des fichiers** depuis des éléments archive.org publics vers votre machine locale.
- **Copier des éléments** depuis Internet Archive vers un autre cloud (par exemple, archive.org → Google Drive ou Backblaze B2) pour une préservation redondante.

## Remarques importantes sur le backend Internet Archive

| Comportement | Détail |
|----------|--------|
| Création d'élément | Les nouveaux dossiers deviennent de nouveaux éléments archive.org |
| Visibilité | Les éléments téléversés sont publics par défaut |
| Suppression de fichiers | Les suppressions sont mises en file d'attente ; archive.org les traite lentement |
| Sommes de contrôle | Les sommes MD5 sont vérifiées lors du téléversement |
| Limites de débit | Respectez les limites d'exploration d'archive.org — évitez de solliciter excessivement l'API |

## Cas d'usage

**Projets d'archivage numérique** — Téléversez des numérisations, des enregistrements ou des documents que vous souhaitez préserver de façon permanente dans le domaine public.

**Préservation de logiciels** — Contribuez d'anciens logiciels, jeux ou ROMs (lorsque les licences le permettent) à l'archive.

**Redondance de sauvegarde** — Utilisez Internet Archive comme niveau de sauvegarde secondaire gratuit pour des données non sensibles et partageables publiquement.

**Jeux de données de recherche** — Téléversez des jeux de données sous licence publique afin que les chercheurs du monde entier puissent y accéder.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Générez vos clés API archive.org** sur archive.org, dans les paramètres du compte.
3. **Ajoutez le distant Internet Archive** dans l'assistant de configuration des distants de RcloneView.
4. **Téléversez, synchronisez et préservez** — vos fichiers vivront sur archive.org gratuitement, pour toujours.

Internet Archive sauvegarde le web et la culture humaine depuis 1996. RcloneView facilite grandement la contribution de vos propres documents numériques.

---

**Guides connexes :**

- [Chiffrer des sauvegardes cloud avec RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Automatiser des sauvegardes cloud quotidiennes](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Stratégie de sauvegarde multi-cloud](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
