---
slug: memory-remote-ram-temp-storage-rcloneview
title: "Remote Memory — Stockage temporaire basé sur la RAM dans RcloneView"
authors:
  - casey
description: "Découvrez comment le remote virtuel Memory de RcloneView utilise un stockage temporaire basé sur la RAM pour des tests rapides, la préparation de transferts et des flux de travail cloud jetables."
keywords:
  - memory remote rclone
  - rcloneview memory remote
  - stockage cloud basé sur la RAM
  - virtual remote rcloneview
  - stockage cloud temporaire
  - remote de test rclone
  - transferts cloud de préparation
  - rcloneview virtual remotes
  - stockage jetable rclone
  - stockage de fichiers en mémoire
tags:
  - RcloneView
  - feature
  - guide
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote Memory — Stockage temporaire basé sur la RAM dans RcloneView

> Besoin d'un espace provisoire qui disparaît dès que vous le fermez ? Le remote virtuel **Memory** de RcloneView vous offre un stockage basé sur la RAM pour tester des tâches de synchronisation et préparer des transferts sans toucher au disque.

Parmi les remotes virtuels de RcloneView — Alias, Crypt, Cache, Chunker, Combine, Union, Hasher et Compress — Memory se distingue : il stocke les données entièrement en RAM pendant toute la session, sans rien écrire sur le disque et sans rien laisser à la fermeture. Cette nature temporaire et sans trace est précisément ce qui le rend utile pour un ensemble spécifique de flux de travail plutôt que pour le stockage quotidien.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## À quoi sert le remote Memory

Contrairement à Alias (un raccourci vers un chemin existant) ou à Crypt (chiffrement pour des remotes existants), Memory est un backend de stockage autonome qui n'existe que dans la mémoire du processus rclone en cours d'exécution. Tout ce qui y est copié disparaît dès que l'instance rclone intégrée redémarre ou que l'application se ferme. Cette nature temporaire et sans trace est précisément ce qui le rend utile pour un ensemble spécifique de flux de travail plutôt que pour le stockage quotidien.

RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux — le remote Memory n'est qu'une entrée de plus dans ce même Remote Manager, configurée et utilisée de la même manière que n'importe quelle connexion cloud réelle.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a transfer job in RcloneView" class="img-large img-center" />

## Tester les tâches de synchronisation en toute sécurité

Avant de diriger une nouvelle tâche de synchronisation vers un stockage cloud de production, vous pouvez créer un remote Memory et exécuter d'abord la tâche dessus. Cela confirme que la sélection de la source, les règles de filtre et la structure des dossiers se comportent comme prévu, sans risquer les données réelles côté destination. Combiné à Dry Run, cela vous offre deux niveaux de sécurité : un aperçu simulé, suivi d'une copie de test réelle qui ne coûte rien et ne laisse rien derrière elle.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a test sync job in RcloneView" class="img-large img-center" />

## Préparer des transferts entre fournisseurs

Lorsque vous déplacez des fichiers entre deux fournisseurs cloud qui ne transfèrent pas efficacement en direct, un remote Memory peut servir de relais intermédiaire rapide pour de petits lots — utile pour valider une opération par lots à plusieurs étapes avant de la planifier pour de bon. Comme Memory n'a aucune surcharge d'E/S disque, les petits transferts de préparation se terminent rapidement, ce qui vous permet d'itérer une séquence de lots avec agilité.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Managing remotes in RcloneView's Mount Manager" class="img-large img-center" />

## Configurer un remote Memory

L'ajout d'un remote Memory suit le même processus New Remote que n'importe quelle autre connexion dans RcloneView.

**Comment le configurer :**

1. Ouvrez l'onglet Remote et cliquez sur **New Remote**.
2. Sélectionnez **Memory** dans la liste des types de remotes virtuels.
3. Enregistrez — aucun identifiant ni configuration n'est nécessaire puisque le stockage est entièrement local au processus rclone en cours d'exécution.
4. Utilisez-le comme source ou destination dans n'importe quelle tâche Sync, Copy ou par lots, comme un remote normal.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into a remote in RcloneView" class="img-large img-center" />

## Quand ne pas l'utiliser

Le stockage Memory n'est pas une destination de sauvegarde et ne doit jamais contenir quoi que ce soit que vous devez conserver — redémarrer rclone ou l'application l'efface complètement. Il est également limité par la RAM système disponible, donc il n'est pratique que pour de petits lots de test, et non pour des transferts à grande échelle.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote Memory depuis la section Virtual Remotes de New Remote.
3. Dirigez une tâche de synchronisation de test dessus avant d'exécuter la même tâche vers une destination réelle.
4. Utilisez Job History pour confirmer que le test s'est comporté comme prévu, puis basculez vers votre remote cloud réel.

Un remote jetable basé sur la RAM est un petit ajout, mais il comble un véritable écart entre « simuler avec Dry Run » et « passer en production » lorsque vous construisez un nouveau flux de travail.

---

**Guides connexes :**

- [Remotes virtuels — Combine, Union et Alias dans RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Remote Alias — Chemins raccourcis dans RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)
- [Chiffrer les sauvegardes cloud — Guide du remote Crypt avec RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
