---
slug: migrate-sugarsync-to-backblaze-b2-rcloneview
title: "Migrer SugarSync vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez des fichiers de SugarSync vers Backblaze B2 avec RcloneView : connectez les deux remotes, simulez le transfert avec un Dry Run et vérifiez les résultats avec Folder Compare."
keywords:
  - migrer SugarSync vers Backblaze B2
  - transfert SugarSync vers B2
  - migration SugarSync
  - sauvegarde Backblaze B2
  - migration de cloud à cloud
  - RcloneView SugarSync
  - stockage alternatif à SugarSync
  - rclone SugarSync B2
  - GUI de migration cloud
  - sauvegarde stockage objet
tags:
  - RcloneView
  - sugarsync
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer SugarSync vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Déplacez des années de dossiers SugarSync vers des buckets Backblaze B2 sans les télécharger puis les renvoyer à la main.

Les équipes qui utilisent SugarSync depuis longtemps souhaitent souvent placer leurs archives dans un stockage objet, dont les buckets et les clés d'application se prêtent bien à l'automatisation. RcloneView se connecte aux deux services dans une seule fenêtre : vous pouvez ainsi copier des dossiers directement de SugarSync vers Backblaze B2 et vérifier le résultat avant de fermer l'ancien compte. Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture avec la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Ouvrez l'onglet Remote et cliquez sur New Remote. Ajoutez SugarSync avec les identifiants de votre compte, puis Backblaze B2 avec un Application Key ID et une Application Key issus de la page de gestion des clés de Backblaze. Créez d'abord le bucket de destination dans Backblaze pour disposer d'une cible claire.

Placez SugarSync dans un panneau Explorer et le bucket B2 dans un autre. Parcourez les deux pour confirmer l'accès avant de configurer quoi que ce soit.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes SugarSync et Backblaze B2 dans RcloneView" class="img-large img-center" />

## Copier par glisser-déposer ou avec une tâche de synchronisation

Pour un petit dossier, faites-le glisser du panneau SugarSync vers le panneau B2. Le glissement entre remotes différents effectue une copie ; l'original reste donc en place. Pour une migration complète, utilisez l'assistant de synchronisation en 4 étapes : choisir la source et la destination, définir le nombre de transferts, ajouter des filtres et, éventuellement, planifier avec une licence PLUS.

Utilisez une tâche Copy plutôt qu'une tâche Sync pour la première passe, afin que rien ne soit supprimé à la destination.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de SugarSync vers Backblaze B2 dans RcloneView" class="img-large img-center" />

## Prévisualiser, surveiller et vérifier

Lancez d'abord un Dry Run. Il liste les fichiers qui seraient copiés, ce qui vous permet de repérer un chemin erroné avant tout déplacement de données. Pendant l'exécution de la tâche, l'onglet Transferring affiche la progression, la vitesse et le nombre de fichiers.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Surveillance d'un transfert de SugarSync vers B2 dans l'onglet Transferring" class="img-large img-center" />

Une fois terminé, ouvrez Compare pour afficher SugarSync et B2 côte à côte. Les fichiers présents uniquement à gauche sont ceux qui ne sont pas encore arrivés, et vous pouvez les copier directement depuis la vue de comparaison. Job History conserve une trace de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare confirmant que le contenu de SugarSync et de Backblaze B2 correspond" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez SugarSync et Backblaze B2 comme remotes et créez votre bucket cible.
3. Créez une tâche Copy, lancez un Dry Run, puis démarrez le transfert.
4. Vérifiez avec Folder Compare avant de fermer le compte SugarSync.

Une copie vérifiée dans B2 vous permet de mettre fin à l'ancien service en toute confiance.

---

**Guides associés :**

- [Migrer SugarSync vers Google Drive et OneDrive avec RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-google-drive-onedrive-rcloneview)
- [Gérer le stockage SugarSync avec RcloneView](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [Gérer le stockage Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
