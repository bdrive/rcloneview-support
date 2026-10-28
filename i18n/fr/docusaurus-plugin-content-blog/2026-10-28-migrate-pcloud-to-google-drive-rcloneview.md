---
slug: migrate-pcloud-to-google-drive-rcloneview
title: "Migrer pCloud vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - morgan
description: "Déplacez des fichiers de pCloud vers Google Drive avec RcloneView : connectez les deux remotes, lancez un Dry Run, copiez de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer pcloud vers google drive
  - transfert pcloud vers google drive
  - déplacer des fichiers pcloud vers google drive
  - migration pcloud google drive
  - transfert de cloud à cloud
  - rcloneview pcloud
  - rcloneview google drive
  - migration alternative à pcloud
  - transférer des données pcloud
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer pCloud vers Google Drive — Transférer des fichiers avec RcloneView

> Déplacez un compte pCloud entier vers Google Drive sans avoir à tout télécharger d'abord sur votre propre disque.

Les équipes qui standardisent sur Google Workspace héritent souvent d'années de fichiers stockés dans pCloud. Les télécharger puis les renvoyer à la main est lent et sujet aux erreurs. RcloneView connecte les deux services depuis une seule fenêtre, copie de cloud à cloud et vous permet de vérifier le résultat dossier par dossier avant de fermer l'ancien compte.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter pCloud et Google Drive

Les deux services utilisent la connexion OAuth via le navigateur dans RcloneView, il n'y a donc aucune clé d'API à coller. Ouvrez l'onglet Remote, cliquez sur New Remote, choisissez pCloud et autorisez l'accès dans la fenêtre du navigateur qui s'ouvre. Répétez l'opération pour Google Drive. Une fois les deux affichés dans Remote Manager, ouvrez-les côte à côte dans deux panneaux Explorer : pCloud à gauche, Google Drive à droite.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes pCloud et Google Drive dans RcloneView" class="img-large img-center" />

Parcourez d'abord l'arborescence pCloud et utilisez Get Size sur vos dossiers de premier niveau. Un studio photo disposant de 1,5 To de dossiers de projets, par exemple, peut planifier la migration dossier par dossier plutôt qu'en un seul job géant.

## Copier de cloud à cloud

Pour quelques dossiers, faites-les glisser du panneau pCloud vers le panneau Google Drive. Un glisser-déposer entre deux remotes différents effectue une Copy, vos originaux pCloud restent donc intacts. Pour un compte entier, créez plutôt un job : ouvrez l'assistant Sync, choisissez pCloud comme source et Google Drive comme destination, puis un job de type Copy afin que rien ne soit supprimé d'un côté ni de l'autre.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de pCloud vers Google Drive dans RcloneView" class="img-large img-center" />

Dans Advanced Settings, une valeur modérée pour Number of file transfers est un bon point de départ ; Google Drive applique des limites d'API, une concurrence très élevée peut donc déclencher des nouvelles tentatives. Laissez "Retry entire sync if fails" à sa valeur par défaut de 3 pour que de brèves coupures réseau ne mettent pas fin au job.

## Dry Run, filtres et surveillance

Avant l'exécution réelle, utilisez Dry Run pour prévisualiser les fichiers qui seront copiés. L'étape Filtering permet d'exclure le superflu, comme les dossiers `.git/`, ou de limiter par taille maximale de fichier et ancienneté, ce qui est pratique lorsque seuls les projets récents doivent être déplacés. Une fois le job lancé, l'onglet Transferring affiche la progression, la vitesse et le nombre de fichiers, et Job History conserve une trace de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Consultation de l'historique du job pCloud vers Google Drive dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois le job terminé, ouvrez Compare avec pCloud à gauche et Google Drive à droite. Filtrez sur les fichiers left-only pour voir ce qui n'est pas arrivé, puis copiez-les directement depuis la vue de comparaison. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux ; le même outil couvre donc le déplacement et la vérification.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre pCloud et Google Drive dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** sur [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez pCloud et Google Drive comme remotes via New Remote.
3. Lancez un Dry Run sur un job Copy de pCloud vers Google Drive, puis exécutez-le pour de bon.
4. Utilisez Compare pour confirmer qu'il ne reste aucun fichier left-only avant de fermer l'ancien compte.

Une copie par étapes associée à une vérification visuelle transforme un transfert de compte risqué en tâche de routine.

---

**Guides associés :**

- [Synchroniser pCloud vers Google Drive — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-pcloud-to-google-drive-rcloneview)
- [Migrer Google Drive vers pCloud — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [Gérer le stockage pCloud — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
