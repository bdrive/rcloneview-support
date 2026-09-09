---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "Migrer de HiDrive vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez des fichiers de HiDrive vers Backblaze B2 avec RcloneView grâce à une synchronisation vérifiée par somme de contrôle, des aperçus en mode simulation et un suivi de l'historique des tâches."
keywords:
  - migrer HiDrive vers Backblaze B2
  - transfert HiDrive Backblaze B2
  - migration cloud HiDrive
  - outil de sauvegarde Backblaze B2
  - RcloneView HiDrive
  - transfert de cloud à cloud
  - migration vérifiée par somme de contrôle
  - de HiDrive vers le stockage objet
  - du cloud européen vers Backblaze B2
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de HiDrive vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Déplacez un compte HiDrive en pleine croissance vers le stockage objet Backblaze B2 grâce à des transferts vérifiés par somme de contrôle et une simulation préalable.

HiDrive convient bien à l'accès quotidien aux fichiers, mais les équipes qui ont besoin d'une conservation à long terme plus économique ou d'une copie de stockage objet hors site se tournent souvent vers Backblaze B2 lorsque le volume de données dépasse ce que prévoit un forfait cloud personnel ou professionnel. RcloneView connecte les deux services depuis la même fenêtre — HiDrive via OAuth et Backblaze B2 avec une Application Key — de sorte que la migration s'exécute comme une seule tâche configurée au lieu de tout télécharger localement au préalable. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter HiDrive et Backblaze B2

HiDrive est ajouté via la connexion OAuth basée sur le navigateur de RcloneView — aucune saisie de clé API séparée n'est nécessaire. Backblaze B2 nécessite un Application Key ID et une Application Key, générés depuis la console du compte Backblaze, saisis directement dans le formulaire de configuration du remote. Une fois que les deux remotes apparaissent dans le Remote Manager, ils s'affichent sous forme d'onglets distincts dans l'Explorer, ce qui permet de parcourir la source HiDrive et la destination B2 côte à côte avant de lancer un transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configurer la tâche de migration

Utilisez le bouton Sync de l'onglet Home pour ouvrir l'assistant en 4 étapes. À l'étape 1, sélectionnez le dossier source HiDrive et le bucket Backblaze B2 comme destination, puis choisissez la synchronisation unidirectionnelle afin que la migration n'écrive que sur B2 sans toucher à HiDrive. L'étape 2 permet d'activer la comparaison par somme de contrôle afin que les fichiers soient comparés par hash et taille plutôt que par la seule date de modification, ce qui compte lors d'un déplacement entre deux backends de stockage très différents. L'étape 3 prend en charge le filtrage par type de fichier, taille maximale ou ancienneté si vous souhaitez d'abord ne migrer qu'un sous-ensemble.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

Exécutez une Dry Run avant le transfert réel — elle liste exactement ce qui sera copié sans déplacer le moindre octet, ce qui est le moyen le plus sûr de repérer un chemin de dossier mal configuré avant qu'il ne se transforme en un transfert indésirable de grande ampleur.

## Vérifier la migration

Une fois la synchronisation terminée, ouvrez Folder Compare entre la source HiDrive et la destination B2 pour confirmer que le nombre de fichiers et les tailles correspondent des deux côtés. Job History enregistre la taille totale transférée, la vitesse de transfert et le nombre de fichiers pour chaque exécution, afin que vous disposiez d'un historique à consulter en cas de doute.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Backblaze B2 folders after migration in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez votre compte HiDrive via OAuth et ajoutez Backblaze B2 avec votre Application Key ID et votre Key.
3. Configurez une tâche de synchronisation unidirectionnelle avec la comparaison par somme de contrôle activée, puis exécutez d'abord une Dry Run.
4. Confirmez le résultat avec Folder Compare et Job History avant de retirer la copie HiDrive.

Passer à Backblaze B2 ne signifie pas abandonner la structure de dossiers et l'organisation des fichiers déjà mises en place sur HiDrive — RcloneView les conserve intactes tout au long du transfert.

---

**Guides associés :**

- [Gérer le stockage HiDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Gérer le stockage Backblaze B2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation HiDrive — Sauvegarde cloud fiable avec RcloneView](https://rcloneview.com/support/blog/fix-hidrive-sync-errors-rcloneview)

<CloudSupportGrid />
