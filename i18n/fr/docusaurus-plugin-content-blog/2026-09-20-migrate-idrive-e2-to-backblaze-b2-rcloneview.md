---
slug: migrate-idrive-e2-to-backblaze-b2-rcloneview
title: "Migrer d'IDrive e2 vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez des buckets d'IDrive e2 vers Backblaze B2 grâce aux outils de transfert cloud à cloud de RcloneView, à l'aperçu en simulation et à l'historique des tâches."
keywords:
  - migrate idrive e2 to backblaze b2
  - idrive e2 to backblaze b2 transfer
  - s3 compatible storage migration
  - cloud to cloud object storage transfer
  - RcloneView migration guide
  - backblaze b2 bucket migration
  - idrive e2 rcloneview
  - object storage provider switch
tags:
  - RcloneView
  - idrive-e2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer d'IDrive e2 vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Déplacez des buckets de stockage objet entre deux fournisseurs compatibles S3 sans avoir à stocker les fichiers localement au préalable.

Changer de fournisseur de stockage objet compatible S3 implique généralement de démêler des clés d'accès, des points de terminaison et des structures de buckets avant même de déplacer un seul fichier. RcloneView se connecte à la fois à IDrive e2 et à Backblaze B2 en tant que distants natifs, de sorte qu'une migration entre les deux devient un transfert direct de cloud à cloud plutôt qu'un processus en deux étapes de téléchargement puis d'envoi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux distants

IDrive e2 et Backblaze B2 se configurent tous deux via la configuration de distant compatible S3 de RcloneView, chacun nécessitant une clé d'accès, une clé secrète et un point de terminaison. Pour Backblaze B2 en particulier, RcloneView prend également en charge sa méthode native de saisie des identifiants, utilisant un Application Key ID et une Application Key, que certaines équipes préfèrent à la voie compatible S3. Une fois les deux distants apparus dans le Remote Manager, ouvrez deux panneaux d'explorateur côte à côte — un par distant — grâce à la disposition en division horizontale ou verticale de RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote manager with IDrive e2 and Backblaze B2 remotes configured" class="img-large img-center" />

Avec les deux buckets visibles en même temps, vous pouvez parcourir les structures de dossiers de chaque côté avant de lancer un transfert, ce qui permet de repérer tôt les incohérences de nommage ou les dossiers imbriqués inattendus.

## Exécuter le transfert sous forme de tâche de synchronisation

Plutôt que de glisser manuellement des buckets volumineux, configurez une tâche de synchronisation via l'assistant en 4 étapes : sélectionnez IDrive e2 comme source, Backblaze B2 comme destination, et choisissez la synchronisation à sens unique afin que seule la destination soit modifiée pour correspondre à la source — rien ne change sur IDrive e2. À l'étape 2, RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, et vous permet d'ajuster le nombre de transferts de fichiers et d'activer la comparaison de sommes de contrôle afin que les fichiers soient vérifiés par hachage et taille, et pas seulement par date de modification — ce qui compte lors d'une migration entre deux backends de stockage différents.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView sync job configured between two S3-compatible object storage remotes" class="img-large img-center" />

Avant de lancer le transfert réel, utilisez la simulation pour prévisualiser exactement quels fichiers seront copiés et confirmer que rien n'est supprimé ou ignoré de manière inattendue.

## Vérifier la migration

Une fois la synchronisation terminée, l'historique des tâches affiche la taille totale transférée, la vitesse de transfert et le nombre de fichiers pour cette exécution, vous fournissant un enregistrement à comparer aux totaux du bucket source. Pour une vérification supplémentaire, l'outil de comparaison de dossiers de RcloneView peut effectuer une comparaison côte à côte des deux buckets après la migration, signalant tout fichier dont la taille diffère ou qui n'existe que d'un seul côté.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing a completed cloud-to-cloud migration" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre distant IDrive e2 avec sa clé d'accès, sa clé secrète et son point de terminaison.
3. Ajoutez votre distant Backblaze B2 en utilisant soit des identifiants compatibles S3, soit des identifiants natifs.
4. Configurez une tâche de synchronisation à sens unique, exécutez d'abord une simulation, puis lancez-la réellement et vérifiez via l'historique des tâches.

Une migration de bucket propre repose sur la vérification avant et après — les outils de simulation et de comparaison de RcloneView font de ces deux étapes une partie du même flux de travail.

---

**Guides connexes :**

- [Gérer le stockage IDrive e2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Gérer le stockage Backblaze B2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi contre Backblaze B2 contre IDrive e2 — Comparaison de stockage objet](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
