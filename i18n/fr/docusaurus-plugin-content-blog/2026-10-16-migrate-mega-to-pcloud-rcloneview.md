---
slug: migrate-mega-to-pcloud-rcloneview
title: "Migrer de Mega vers pCloud — transférer des fichiers avec RcloneView"
authors:
  - morgan
description: "Migrez de Mega vers pCloud avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, copiez de cloud à cloud et vérifiez le résultat avec Folder Compare."
keywords:
  - migrer de mega vers pcloud
  - transfert de mega vers pcloud
  - déplacer des fichiers de mega vers pcloud
  - RcloneView mega
  - RcloneView pcloud
  - migration de cloud à cloud
  - synchronisation mega pcloud
  - transférer des fichiers mega
tags:
  - RcloneView
  - mega
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Mega vers pCloud — transférer des fichiers avec RcloneView

> Déplacez un compte Mega entier vers pCloud avec un travail de copie prévisualisable et vérifiable, plutôt qu'un téléchargement puis un nouvel envoi manuels.

Passer de Mega à pCloud implique généralement des milliers de fichiers répartis dans des dossiers imbriqués, et la voie du navigateur oblige à tout télécharger d'abord. RcloneView connecte les deux services côte à côte et transfère de cloud à cloud, avec un Dry Run pour prévisualiser le travail et Folder Compare pour confirmer que rien n'a été oublié. RcloneView gère plus de 90 services de stockage cloud depuis une seule fenêtre sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Mega et pCloud comme remotes

Mega utilise la saisie d'identifiants : ajoutez un nouveau remote, choisissez Mega et saisissez votre e-mail et votre mot de passe. pCloud utilise OAuth via le navigateur : RcloneView ouvre une page de connexion, vous approuvez l'accès et le remote se connecte automatiquement, sans clé d'API à copier.

Une fois les deux remotes créés, ouvrez-les dans deux panneaux Explorer. Parcourez chaque côté pour confirmer que le compte est accessible et pour voir comment l'arborescence est organisée avant de déplacer quoi que ce soit.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Mega et pCloud dans RcloneView" class="img-large img-center" />

## Planifier le transfert

Décidez si vous voulez le compte entier ou seulement une partie. Une approche courante consiste à copier un dossier de premier niveau par travail, ce qui garde chaque exécution courte et facile à relancer. Dans l'assistant de synchronisation, vous pouvez limiter la portée avec des filtres : taille maximale de fichier, ancienneté maximale ou groupes prédéfinis tels que Document, Image ou Video.

Choisissez Copy plutôt que Sync si pCloud contient déjà des fichiers que vous souhaitez conserver, car une synchronisation unidirectionnelle aligne la destination sur la source. Lancez d'abord un Dry Run : il liste les fichiers qui seraient copiés ou supprimés sans rien modifier.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers Mega et pCloud avant la migration" class="img-large img-center" />

## Lancer la migration et suivre la progression

Faites glisser un dossier du panneau Mega vers le panneau pCloud pour une copie ponctuelle rapide, ou enregistrez un travail pour des exécutions répétables. Le glisser-déposer entre remotes différents copie au lieu de déplacer, de sorte que vos données Mega restent intactes tant que vous n'êtes pas satisfait.

Suivez la progression dans l'onglet Transferring, qui affiche la vitesse, le nombre de fichiers et le pourcentage. Si vous déplacez une grosse archive, réduisez le nombre de transferts simultanés dans Advanced Settings afin que les limites de compte de Mega risquent moins d'interrompre l'exécution. Les travaux de synchronisation relancent l'exécution complète en cas d'échec (par défaut : 3 fois).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Mega vers pCloud" class="img-large img-center" />

## Vérifier et terminer

Une fois la copie terminée, ouvrez Folder Compare sur les deux racines. Les filtres affichent les fichiers présents uniquement à gauche, uniquement à droite, identiques et différents, et vous pouvez copier les retardataires en un clic. Job History enregistre l'heure de début, la durée, le statut et le nombre de fichiers de chaque exécution, ce qui est utile comme journal de migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique du travail de migration de Mega vers pCloud" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote Mega (e-mail et mot de passe) et un remote pCloud (connexion via le navigateur).
3. Lancez un Dry Run sur un dossier, puis exécutez le travail de copie.
4. Utilisez Folder Compare pour vérifier, puis recommencez avec les dossiers restants.

Une migration par étapes et vérifiée vous permet de quitter Mega en étant sûr que chaque fichier est bien arrivé.

---

**Guides associés :**

- [Migrer de pCloud vers Mega](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Gérer le stockage Mega](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Gérer le stockage pCloud](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
