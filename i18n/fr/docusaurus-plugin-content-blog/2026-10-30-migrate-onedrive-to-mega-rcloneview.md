---
slug: migrate-onedrive-to-mega-rcloneview
title: "Migrer OneDrive vers Mega — transférer des fichiers avec RcloneView"
authors:
  - jay
description: "Déplacez des fichiers de Microsoft OneDrive vers Mega avec RcloneView : connectez les deux remotes, lancez un dry run, copiez de cloud à cloud et vérifiez le résultat avec Folder Compare."
keywords:
  - migrer OneDrive vers Mega
  - transfert OneDrive vers Mega
  - déplacer des fichiers OneDrive vers Mega
  - outil de migration OneDrive Mega
  - transfert de cloud à cloud
  - RcloneView OneDrive
  - RcloneView Mega
  - client GUI Mega
tags:
  - RcloneView
  - onedrive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer OneDrive vers Mega — transférer des fichiers avec RcloneView

> Déplacez une bibliothèque OneDrive vers Mega avec une tâche de cloud à cloud visuelle et reproductible, plutôt que de télécharger puis de retéléverser à la main.

Déplacer des années de documents de Microsoft OneDrive vers Mega implique généralement un long détour par votre propre disque. RcloneView connecte les deux services en tant que remotes et copie directement de l'un à l'autre, avec un aperçu avant toute écriture et une comparaison ensuite pour prouver que rien n'a été oublié. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter OneDrive et Mega comme remotes

OneDrive utilise OAuth via le navigateur : choisissez Microsoft OneDrive lors de l'ajout d'un remote, connectez-vous, et RcloneView stocke le jeton. Mega est différent : il demande directement votre adresse e-mail et votre mot de passe, ayez-les donc à portée de main avant de commencer.

Donnez des noms clairs aux remotes, par exemple `onedrive-main` et `mega-archive`. Des noms clairs sont utiles plus tard, quand vous lisez l'historique des tâches ou copiez un chemin complet comme `onedrive-main:Projects` dans le terminal rclone.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes OneDrive et Mega dans RcloneView" class="img-large img-center" />

## Planifier la copie avant de l'exécuter

Ouvrez les deux remotes dans des panneaux Explorer côte à côte et parcourez les dossiers à déplacer. Utilisez Get Size sur la source pour estimer la quantité de données à transférer, et vérifiez que votre compte Mega dispose de la place nécessaire.

Choisissez **Copy** plutôt que Sync pour une première migration. Une copie ne supprime jamais rien à la destination ; un mauvais choix de dossier ne peut donc pas effacer de données. Utilisez l'étape de filtrage pour ignorer les types de fichiers inutiles, ou limiter par taille maximale ou par ancienneté.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud entre deux remotes dans RcloneView" class="img-large img-center" />

## Lancer un dry run, puis le vrai transfert

Dry Run liste ce qui serait copié sans écrire le moindre octet. Examinez-le, puis exécutez la tâche. L'onglet Transferring affiche la progression, la vitesse et le nombre de fichiers, et vous pouvez annuler une tâche en cours à tout moment.

Pour les grandes bibliothèques, réduisez le nombre de transferts de fichiers simultanés si Mega vous limite, et conservez le nombre de tentatives par défaut afin que de brèves coupures réseau n'interrompent pas la tâche.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'une tâche de copie dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois la tâche terminée, ouvrez Compare avec OneDrive à gauche et Mega à droite. Les filtres permettent d'afficher les fichiers présents uniquement à gauche, de sorte que tout transfert en échec ressort immédiatement. Vous pouvez copier les retardataires depuis la même vue. L'historique des tâches (Job History) enregistre l'état, la taille, la vitesse et le nombre de fichiers de l'exécution.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Résultats de Folder Compare entre OneDrive et Mega" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez OneDrive (OAuth) et Mega (e-mail et mot de passe) comme remotes.
3. Créez une tâche Copy de OneDrive vers Mega, lancez un dry run, puis exécutez-la.
4. Vérifiez avec Folder Compare avant de retirer la source.

Une migration que l'on peut prévisualiser, surveiller et vérifier est une migration que l'on peut mener à bien en confiance.

---

**Guides associés :**

- [Gérer le stockage Mega — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Gérer le stockage OneDrive — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrer Google Drive vers Mega — transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-mega-rcloneview)

<CloudSupportGrid />
