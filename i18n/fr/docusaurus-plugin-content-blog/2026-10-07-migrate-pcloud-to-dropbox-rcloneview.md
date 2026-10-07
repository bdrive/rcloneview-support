---
slug: migrate-pcloud-to-dropbox-rcloneview
title: "Migrer pCloud vers Dropbox — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez pCloud vers Dropbox avec RcloneView : connectez les deux services via OAuth, lancez un Dry Run, copiez de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer pCloud vers Dropbox
  - transfert de pCloud vers Dropbox
  - déplacer des fichiers pCloud vers Dropbox
  - outil de migration pCloud Dropbox
  - transfert de cloud à cloud
  - RcloneView
  - rclone GUI
  - synchronisation pCloud
  - synchronisation Dropbox
  - comparaison de dossiers
tags:
  - RcloneView
  - pcloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer pCloud vers Dropbox — Transférer des fichiers avec RcloneView

> Déplacez toute une bibliothèque pCloud vers Dropbox sans la télécharger d'abord sur votre propre disque.

Passer de pCloud à Dropbox signifie généralement qu'une équipe a standardisé Dropbox pour le partage, ou qu'un client l'exige. Télécharger puis renvoyer manuellement des centaines de gigaoctets est lent et source d'erreurs. RcloneView connecte les deux services via rclone et transfère les fichiers de cloud à cloud depuis une seule fenêtre, avec un Dry Run et une étape de vérification.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter pCloud et Dropbox

pCloud et Dropbox utilisent tous deux la connexion OAuth par navigateur dans RcloneView, aucune clé d'API n'est donc nécessaire. Ouvrez l'onglet Remote, cliquez sur **New Remote**, choisissez pCloud et connectez-vous lorsque le navigateur s'ouvre. Répétez l'opération pour Dropbox. Si vous utilisez un compte Dropbox Business, activez le paramètre `dropbox_business = true` pendant la configuration.

RcloneView prend en charge plus de 90 services de stockage cloud sous Windows, macOS et Linux ; les deux comptes apparaissent donc côte à côte sous forme de panneaux Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des distants pCloud et Dropbox dans RcloneView" class="img-large img-center" />

## Prévisualiser la migration avec un Dry Run

Avant de déplacer quoi que ce soit, ouvrez l'assistant Sync et sélectionnez pCloud comme source et un dossier Dropbox comme destination. Utilisez la sémantique **Copy** pour une première migration afin de ne rien modifier côté source. Lancez un **Dry Run** pour lister tous les fichiers qui seraient transférés et vérifier que l'arborescence se retrouve là où vous l'attendez.

Imaginons qu'un graphiste ait 400 Go de dossiers de projet dans pCloud. Un Dry Run permet de repérer les fichiers trop volumineux ou les sous-dossiers inutiles, que vous pouvez exclure à l'étape de filtrage de l'assistant Sync via la taille maximale des fichiers, l'ancienneté des fichiers ou des règles de filtre personnalisées.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de pCloud vers Dropbox" class="img-large img-center" />

## Lancer le transfert et suivre la progression

Démarrez le job et suivez l'onglet Transferring pour la progression et le nombre de fichiers. Dans Advanced Settings, vous pouvez ajuster le nombre de transferts de fichiers et activer la comparaison par somme de contrôle. Si l'exécution échoue en cours de route, le paramètre de nouvelle tentative du job (par défaut 3) relance la synchronisation, et une nouvelle exécution ne copie que ce qui manque.

Les données circulant entre les deux services via rclone, vous n'avez pas besoin d'espace disque local libre pour toute la bibliothèque.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi d'un transfert en cours dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Après le transfert, ouvrez **Compare** depuis l'onglet Home avec pCloud à gauche et Dropbox à droite. Filtrez les fichiers présents uniquement à gauche et les fichiers différents pour repérer les oublis, puis utilisez Copy right pour combler les manques. Consultez Job History pour l'état, la taille et le nombre de fichiers comme trace de la migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre pCloud et Dropbox" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** sur [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez les distants pCloud et Dropbox via la connexion OAuth dans l'onglet Remote.
3. Créez un job Copy de pCloud vers Dropbox et lancez d'abord un Dry Run.
4. Exécutez le job, puis vérifiez avec Folder Compare avant de résilier l'ancien compte.

Une migration par étapes et vérifiée laisse vos données pCloud intactes jusqu'à ce que Dropbox contienne tout ce dont vous avez besoin.

---

**Guides associés :**

- [Migrer pCloud vers OneDrive](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [Synchroniser Dropbox vers pCloud](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)
- [Dry Run — Prévisualiser la synchronisation cloud](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
