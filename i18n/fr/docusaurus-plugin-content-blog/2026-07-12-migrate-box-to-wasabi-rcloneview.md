---
slug: migrate-box-to-wasabi-rcloneview
title: "Migrer de Box vers Wasabi — Transférer des fichiers avec RcloneView"
authors:
  - casey
description: "Déplacez des fichiers de Box vers le stockage cloud chaud Wasabi avec RcloneView, en utilisant la comparaison de dossiers, les tâches de synchronisation et le dry run pour migrer en toute sécurité."
keywords:
  - migrer Box vers Wasabi
  - transfert Box vers Wasabi
  - migration cloud Box
  - stockage chaud Wasabi
  - RcloneView Box Wasabi
  - outil de transfert cloud à cloud
  - sauvegarde de stockage Box
  - logiciel de synchronisation Wasabi
  - déplacer des fichiers entre clouds
  - migration Box S3
tags:
  - box
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Box vers Wasabi — Transférer des fichiers avec RcloneView

> Déplacez directement les fichiers et dossiers d'un compte Box vers le stockage chaud compatible S3 de Wasabi, sans tout faire transiter par un disque local au préalable.

Les équipes qui ont adopté Box pour la collaboration documentaire finissent parfois par le dépasser pour le stockage à long terme, et le stockage objet compatible S3 de Wasabi devient alors la nouvelle destination pour les archives, les bibliothèques média ou les jeux de sauvegarde. RcloneView se connecte aux deux services depuis la même fenêtre, ce qui permet de réaliser un transfert direct de cloud à cloud plutôt qu'un lent cycle de téléchargement puis de mise en ligne via une machine locale.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et Wasabi en tant que remotes

Box s'ajoute via OAuth — cliquer sur New Remote dans l'onglet Remote ouvre une fenêtre de navigateur pour la connexion au compte, et RcloneView se connecte automatiquement une fois l'authentification terminée. Les comptes professionnels qui nécessitent une vue à l'échelle de l'entreprise peuvent définir `box_sub_type = enterprise` lors de la configuration. Wasabi s'ajoute via le type de remote compatible S3, en utilisant une Access Key, une Secret Key et le endpoint Wasabi correspondant à la région cible.

Une fois les deux remotes configurés, ils apparaissent comme des onglets distincts dans l'Explorer, et vous pouvez ouvrir Box dans un panneau et Wasabi dans l'autre pour voir les deux arborescences de fichiers côte à côte avant de déplacer quoi que ce soit.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Wasabi remotes in RcloneView" class="img-large img-center" />

## Comparer avant de transférer

Folder Compare place côte à côte le dossier source Box et le dossier de destination Wasabi et signale ce qui manque de chaque côté, ce qui est déjà identique, et ce qui diffère par la taille. Pour une première migration, c'est le moyen le plus rapide de confirmer que l'ensemble de la bibliothèque Box est bien pris en compte avant de lancer une synchronisation en masse, et cela sert également de passe de vérification une fois le transfert terminé — tout fichier encore marqué « left-only » après la copie mérite un second regard.

Copier depuis Folder Compare ne touche que les fichiers qui n'existent pas encore sur la destination ou qui diffèrent en taille, de sorte qu'une migration partiellement terminée peut être reprise sans recopier les fichiers déjà transférés vers Wasabi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Box and Wasabi folders before migration" class="img-large img-center" />

## Exécuter la migration avec la synchronisation

Pour le transfert en masse, les quatre étapes de l'assistant Sync gèrent la sélection de la source et de la destination, la concurrence des transferts et le filtrage — utile pour exclure les types de fichiers que vous ne voulez pas voir transférés vers Wasabi, comme les fichiers de collaboration temporaires de Box. Dry Run affiche un aperçu exact des fichiers qui seront copiés avant que quoi que ce soit ne bouge, ce qui compte lorsqu'une bibliothèque Box contient des années de contenu accumulé et que les erreurs sont coûteuses à annuler.

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux, de sorte que le même workflow utilisé ici pour Box et Wasabi s'applique à n'importe quelle autre paire de remotes sans avoir à apprendre un nouvel outil. Une fois la tâche de synchronisation enregistrée dans Job Manager, son historique — statut, taille transférée et durée — reste disponible pour référence ultérieure.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a sync job from Box to Wasabi in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Box via une connexion OAuth et Wasabi via des identifiants compatibles S3 dans Remote Manager.
3. Exécutez Folder Compare entre la source Box et la destination Wasabi pour confirmer le périmètre avant le transfert.
4. Créez une tâche Sync avec Dry Run activé en premier, puis exécutez-la pour de bon et suivez la progression dans l'onglet Transferring.

Avec les deux remotes visibles dans le même explorateur, déplacer une bibliothèque Box vers Wasabi devient un workflow unique et guidé plutôt qu'un exercice multi-outils.

---

**Guides connexes :**

- [Gérer le stockage Box — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrer de Box vers Google Drive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
