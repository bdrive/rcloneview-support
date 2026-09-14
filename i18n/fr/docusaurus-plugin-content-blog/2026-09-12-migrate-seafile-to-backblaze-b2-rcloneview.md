---
slug: migrate-seafile-to-backblaze-b2-rcloneview
title: "Migrer de Seafile vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez vos bibliothèques Seafile autohébergées vers Backblaze B2 avec RcloneView, une GUI multiplateforme pour des transferts cloud à cloud fiables."
keywords:
  - migrer seafile vers backblaze b2
  - migration seafile backblaze b2
  - sauvegarde cloud seafile
  - migration autohébergé vers le cloud
  - backblaze b2 gui
  - rcloneview seafile
  - transfert de fichiers multiplateforme
  - sauvegarde de bibliothèque seafile
tags:
  - RcloneView
  - seafile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Seafile vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Déplacez vos bibliothèques Seafile autohébergées vers le stockage objet Backblaze B2 sans toucher à la ligne de commande.

Les équipes qui font tourner Seafile sur leur propre matériel ou un serveur privé finissent par se heurter à un mur : les disques locaux se remplissent, la maintenance du serveur devient une charge, ou un projet nécessite une copie hors site pour la reprise après sinistre. Backblaze B2 offre une destination durable et économique pour ces données, mais coordonner le transfert entre une plateforme de synchronisation autohébergée et un stockage objet n'est pas quelque chose que la plupart des gestionnaires de fichiers gèrent bien. RcloneView se connecte à Seafile et à Backblaze B2 comme distants dans la même fenêtre, vous permettant de parcourir, comparer et déplacer des bibliothèques directement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Seafile et Backblaze B2 comme distants

Seafile s'ajoute à RcloneView comme n'importe quel autre distant, vous donnant une liste de fichiers navigable de vos bibliothèques, avec l'arborescence des dossiers et la barre de chemin fil d'Ariane. Backblaze B2 nécessite un Application Key ID et une Application Key, saisis directement lors de la création du distant — pas de redirection OAuth, pas de configuration CLI séparée. Les deux distants apparaissent comme des onglets, et vous pouvez ouvrir Seafile dans un panneau et votre bucket B2 dans un autre en utilisant une division horizontale ou verticale.

Contrairement aux outils qui ne font que du montage, RcloneView synchronise et compare aussi des dossiers — dès la licence FREE, vous n'êtes donc pas limité au simple glisser-déposer pour un transfert ponctuel.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote alongside Seafile in RcloneView" class="img-large img-center" />

Une fois les deux distants visibles, utilisez le glisser-déposer entre panneaux pour les bibliothèques plus petites, ou configurez un job Sync pour les transferts plus importants et continus nécessitant des tentatives répétées et du filtrage.

## Exécuter la migration comme un job Sync

Pour une migration complète de bibliothèque, configurez un job Sync avec Seafile comme source et votre bucket Backblaze B2 comme destination. L'assistant en 4 étapes vous permet de définir le nombre de transferts de fichiers simultanés et le nombre de transferts multithread, ce qui compte lorsque vous déplacez des milliers de petits fichiers typiques des bibliothèques de documents partagés. Activer la comparaison par somme de contrôle garantit que les fichiers sont vérifiés par hash et taille plutôt que présumés corrects après un seul passage.

Avant de valider le transfert, exécutez un Dry Run pour prévisualiser exactement quels fichiers seront copiés. C'est particulièrement utile lors de la migration d'une bibliothèque utilisée activement depuis des années, car cela révèle les fichiers obsolètes ou anormalement volumineux avant qu'ils ne consomment du stockage B2.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Seafile to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

## Filtrer et vérifier le transfert

Les bibliothèques Seafile mélangent souvent types de documents, fichiers temporaires et artefacts d'historique de versions que vous ne voulez pas dupliquer dans B2. Les réglages de filtrage de RcloneView vous permettent d'exclure par type de fichier, chemin ou ancienneté — par exemple en ignorant les dossiers `.git/` dans les bibliothèques liées au code, ou en excluant tout ce qui dépasse un certain nombre d'années pour une migration d'archives. Les filtres personnalisés utilisent des motifs simples comme `.iso` pour exclure une extension ou `/.git/*` pour exclure un chemin au niveau racine.

Une fois le job terminé, Job History enregistre le type d'exécution, la durée, la taille totale, la vitesse de transfert et le nombre de fichiers, vous laissant un historique auquel vous référer si une partie prenante demande si la migration s'est bien terminée.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Seafile to Backblaze B2 migration" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre serveur Seafile comme distant en utilisant les identifiants de votre compte.
3. Créez un distant Backblaze B2 avec votre Application Key ID et votre Application Key.
4. Configurez un job Sync de Seafile vers B2, exécutez un Dry Run, puis lancez-le et confirmez-le dans Job History.

Quitter une infrastructure autohébergée ne signifie pas reconstruire votre flux de travail depuis zéro — avec les deux points de terminaison dans un même explorateur, la migration devient un job unique et traçable.

---

**Guides associés :**

- [Gérer la synchronisation cloud décentralisée Storj](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Synchroniser Nextcloud avec Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Corriger les erreurs de synchronisation Seafile](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
