---
slug: sync-storj-to-backblaze-b2-rcloneview
title: "Synchroniser Storj vers Backblaze B2 — Sauvegarde cloud avec RcloneView"
authors:
  - alex
description: "Synchronisez des fichiers du stockage décentralisé Storj vers Backblaze B2 avec RcloneView. Conservez une copie redondante hors réseau de vos données compatibles S3."
keywords:
  - Storj vers Backblaze B2
  - synchroniser Storj
  - sauvegarde Storj
  - synchronisation Backblaze B2
  - sauvegarde de stockage décentralisé
  - Storj RcloneView
  - synchronisation de stockage compatible S3
  - sauvegarde cloud à cloud
  - redondance du stockage d'objets
  - synchronisation RcloneView
tags:
  - RcloneView
  - storj
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Storj vers Backblaze B2 — Sauvegarde cloud avec RcloneView

> Conservez une copie redondante et centralisée de vos données de stockage décentralisé Storj sur Backblaze B2 avec RcloneView — une seule tâche, deux architectures de stockage très différentes.

Storj répartit des fragments de fichiers chiffrés sur un réseau de nœuds indépendant, ce qui est excellent pour la résistance à la censure et le coût, mais cela signifie aussi que les équipes veulent souvent une sauvegarde conventionnelle et hébergée de façon centralisée comme seconde couche de protection. Backblaze B2 remplit bien ce rôle : un bucket standard compatible S3 avec une récupération simple. RcloneView se connecte aux deux via sa prise en charge des remotes compatibles S3 et déplace les données directement entre eux, sans disque de transit local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Storj et Backblaze B2

Ajoutez Storj comme remote dans RcloneView en utilisant son point de terminaison de passerelle compatible S3 et l'autorisation d'accès, ou la paire de clés d'accès Storj native, selon la configuration de votre projet. Ajoutez Backblaze B2 séparément en utilisant votre Application Key ID et votre Application Key depuis la console B2. Les deux remotes apparaissent alors comme des arborescences de fichiers navigables côte à côte dans les panneaux Explorateur, afin que vous puissiez confirmer la structure des buckets et le nombre d'objets avant de créer une tâche de synchronisation.

RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux, de sorte que la même interface que vous utilisez pour Storj et B2 gère également tous les autres clouds déjà présents dans votre pile.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Storj and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Créer la tâche de synchronisation

Créez une tâche de synchronisation à sens unique avec votre bucket Storj comme source et un bucket Backblaze B2 comme destination — « Modifier uniquement la destination » garde B2 comme un miroir pur qui n'écrit jamais vers Storj. Dans l'étape Paramètres avancés (Advanced Settings), activez la comparaison de somme de contrôle afin que les fichiers soient comparés par hachage et taille plutôt que par simple date de modification, ce qui compte lorsque les métadonnées d'objet se comportent différemment entre deux backends de stockage distincts.

Pour une équipe archivant un jeu de données décentralisé — disons un groupe de recherche avec 4 To de séquences vidéo fragmentées sur Storj —, l'étape Filtrage (Filtering) permet de délimiter la portée de la première exécution par âge de fichier ou extension, afin de valider le pipeline sur un sous-ensemble avant de s'engager dans le transfert complet. Une fois la synchronisation initiale terminée, les réexécutions planifiées ne déplacent que les objets nouveaux ou modifiés.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Storj bucket to Backblaze B2 with RcloneView" class="img-large img-center" />

Exécutez d'abord le Mode simulation (Dry Run). Il liste chaque objet qui serait copié sans rien transférer, ce qui est le moyen le plus sûr de confirmer la portée avant de déplacer des données entre deux fournisseurs aux caractéristiques de prix et de récupération différentes.

## Surveiller et vérifier le transfert

Suivez la progression dans l'onglet Transfert (Transferring) de la Vue d'informations inférieure — le nombre de fichiers, la vitesse de transfert et le pourcentage d'achèvement se mettent à jour en direct pendant l'exécution de la synchronisation. Une fois terminé, ouvrez Comparer les dossiers (Folder Compare) entre la source Storj et la destination B2 pour confirmer que chaque objet est arrivé et correspond en taille, détectant ainsi tout objet ayant échoué en cours de route en raison d'un incident réseau de part ou d'autre.

L'Historique des tâches (Job History) conserve un enregistrement permanent de chaque exécution de synchronisation, incluant la durée, le volume total de données déplacées et le statut, vous offrant ainsi une piste d'audit montrant exactement à quel moment votre sauvegarde B2 a été mise à jour pour la dernière fois par rapport à Storj.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Storj to Backblaze B2 sync job history in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Storj comme remote en utilisant son point de terminaison compatible S3 et les identifiants d'accès.
3. Ajoutez Backblaze B2 en utilisant votre Application Key ID et votre Application Key.
4. Créez une tâche de synchronisation à sens unique, exécutez le Mode simulation, puis exécutez-la pour refléter Storj vers B2.

Une seconde copie hébergée de façon centralisée des données de stockage décentralisé comble une lacune facile à négliger dans la plupart des stratégies de sauvegarde, et RcloneView permet d'en faire une routine planifiée et pilotée par interface graphique plutôt qu'une tâche manuelle.

---

**Guides connexes :**

- [Gérer la synchronisation cloud décentralisée Storj avec RcloneView](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Migrer Backblaze B2 vers Wasabi avec RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)
- [Corriger les erreurs de téléversement Storj avec RcloneView](https://rcloneview.com/support/blog/fix-storj-upload-errors-rcloneview)

<CloudSupportGrid />
