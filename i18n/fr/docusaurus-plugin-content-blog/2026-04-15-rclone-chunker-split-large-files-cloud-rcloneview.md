---
slug: rclone-chunker-split-large-files-cloud-rcloneview
title: "Distant Chunker de rclone — Diviser les fichiers volumineux pour tout stockage cloud avec RcloneView"
authors:
  - tayson
description: "Utilisez le distant virtuel Chunker de rclone dans RcloneView pour diviser les fichiers volumineux et les téléverser vers des fournisseurs cloud avec des limites strictes de taille par fichier."
keywords:
  - rclone chunker
  - diviser fichiers volumineux cloud
  - distant chunker RcloneView
  - limite de téléversement de fichiers volumineux
  - contournement de la limite de taille de fichier cloud
  - guide rclone chunker
  - téléversement de fichiers divisés cloud
  - distant virtuel chunker
  - distant virtuel rclone
  - stockage cloud pour fichiers volumineux
tags:
  - RcloneView
  - feature
  - cloud-storage
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Distant Chunker de rclone — Diviser les fichiers volumineux pour tout stockage cloud avec RcloneView

> Lorsque la limite de taille par fichier d'un fournisseur cloud bloque votre téléversement, le distant virtuel Chunker de rclone divise les fichiers de manière transparente — RcloneView le configure et l'utilise sans aucune ligne de commande requise.

De nombreux fournisseurs de stockage cloud imposent des limites strictes de taille par fichier — Dropbox plafonne les téléversements à 50 Go par fichier, et certains services gratuits ou d'entrée de gamme appliquent des plafonds de 5 à 10 Go. Pour les utilisateurs qui stockent des exports de bases de données, des exports vidéo non compressés ou de grandes archives dépassant ces limites, le distant virtuel **Chunker** de rclone offre la solution : il divise les fichiers en morceaux plus petits avant le téléversement et les réassemble de manière transparente lors du téléchargement. RcloneView configure et utilise Chunker via son interface standard de gestion des distants.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qu'est-ce que le distant Chunker ?

Chunker fait partie des **enveloppes de distants virtuels** de rclone — une couche qui modifie la façon dont les fichiers sont traités avant d'atteindre le backend cloud réel. Contrairement aux distants standard qui se connectent directement à un fournisseur cloud, Chunker intercepte les fichiers dépassant une limite de taille configurée et les divise en plusieurs morceaux avant le téléversement. Chaque morceau est stocké comme un fichier séparé avec une convention de nommage que rclone reconnaît pour un réassemblage transparent lorsque vous lisez ou téléchargez via le même distant Chunker.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Chunker virtual remote in RcloneView" class="img-large img-center" />

Dans RcloneView, les distants virtuels comme Chunker sont créés via le même flux **onglet Distant > Nouveau distant** que les distants standard — vous sélectionnez Chunker comme fournisseur, spécifiez le distant de base et configurez la taille des morceaux. Le résultat apparaît dans l'explorateur aux côtés de vos autres distants, avec un découpage transparent invisible dans votre flux de travail.

## Créer un distant Chunker dans RcloneView

1. Assurez-vous d'abord que votre distant de base est déjà configuré (par exemple, votre distant Dropbox ou OneDrive).
2. Allez dans **onglet Distant > Nouveau distant** et sélectionnez **Chunker** dans la section des distants virtuels.
3. Spécifiez le **distant sous-jacent** (votre distant de base préconfiguré) et un sous-répertoire optionnel à l'intérieur de celui-ci.
4. Définissez la **taille des morceaux** en dessous de la limite de taille de fichier de votre fournisseur — par exemple, 4 Go pour la plupart des fournisseurs, ou 45 Go pour Dropbox afin de rester sous le plafond de 50 Go.
5. Enregistrez le distant Chunker — il apparaît maintenant dans l'explorateur comme n'importe quel autre distant.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Using a Chunker remote for large file uploads in RcloneView" class="img-large img-center" />

Lorsque vous faites glisser un fichier vidéo de 30 Go vers le distant Chunker, RcloneView le téléverse sous forme de plusieurs morceaux (par exemple, huit fichiers de 4 Go) vers le cloud sous-jacent. La relecture du fichier via le même distant Chunker le réassemble de manière transparente — votre application voit un seul fichier continu.

## Cas d'usage pratiques

Un ingénieur de données archivant chaque nuit des exports de base de données de 20 Go vers un service cloud avec une limite de fichier de 10 Go crée un distant Chunker enveloppant ce service avec des morceaux de 8 Go. La tâche de synchronisation du Gestionnaire de tâches s'exécute de la même manière que tout autre transfert cloud — le découpage est totalement transparent pour la configuration de la tâche.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling large file uploads via Chunker remote in RcloneView" class="img-large img-center" />

**Combiner Chunker avec Crypt** crée une pile de distants virtuels avancée : enveloppez d'abord votre distant de base avec **Crypt** (pour un chiffrement de bout en bout), puis enveloppez le distant Crypt avec **Chunker** (pour le découpage). Résultat : les morceaux sont chiffrés avant le téléversement, et le fournisseur ne voit que des blobs chiffrés opaques divisés en morceaux de taille limitée. C'est une excellente approche pour les fichiers volumineux sensibles sur tout fournisseur cloud — RcloneView gère les deux couches via sa gestion standard des distants, sans ligne de commande requise.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre distant cloud de base (le fournisseur avec des limites de taille de fichier) comme distant standard.
3. Allez dans **onglet Distant > Nouveau distant**, sélectionnez **Chunker**, et spécifiez votre distant de base et la taille des morceaux.
4. Transférez des fichiers volumineux via le distant Chunker — le découpage et le réassemblage se produisent de manière transparente.

Chunker débloque le stockage cloud de fichiers volumineux sur des fournisseurs qui rejetteraient autrement le téléversement — un distant virtuel puissant pour les flux de travail à forte intensité de données où les limites de taille de fichier bloqueraient autrement les opérations.

---

**Guides connexes :**

- [Distants virtuels — Combiner, Union, Alias avec RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Configuration du distant Crypt sans ligne de commande avec RcloneView](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [Corriger les erreurs de limite de taille de fichier cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-file-size-limit-errors-rcloneview)

<CloudSupportGrid />
