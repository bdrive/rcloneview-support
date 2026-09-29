---
slug: migrate-gofile-to-backblaze-b2-rcloneview
title: "Migrer Gofile vers Backblaze B2 — transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez Gofile vers Backblaze B2 avec RcloneView : connectez les deux remotes, testez la copie avec Dry Run, vérifiez avec Folder Compare et conservez une sauvegarde durable."
keywords:
  - migrer gofile vers backblaze b2
  - gofile vers b2
  - sauvegarde gofile
  - migration backblaze b2
  - RcloneView gofile
  - transfert de cloud à cloud
  - outil de transfert de fichiers gofile
  - déplacer des fichiers depuis gofile
  - rclone gofile backblaze
  - migration cloud GUI
tags:
  - RcloneView
  - gofile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Gofile vers Backblaze B2 — transférer des fichiers avec RcloneView

> Déplacez les fichiers partagés via Gofile vers le stockage objet Backblaze B2 et vérifiez que chaque fichier est bien arrivé, sans écrire une seule commande.

Gofile est pratique pour transmettre des fichiers à d'autres personnes, mais ce n'est pas un bon endroit pour conserver l'unique copie d'un document important. Backblaze B2 est un stockage objet conçu pour la conservation à long terme, avec un contrôle au niveau du bucket sur ce que vous gardez. RcloneView connecte les deux services dans une même fenêtre et copie depuis une seule interface, si bien que vous n'avez pas à télécharger puis à renvoyer chaque fichier à la main.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Gofile et Backblaze B2

Gofile s'authentifie avec un Access Token. Copiez-le depuis le champ du jeton d'API de votre page de profil Gofile, puis choisissez Gofile dans **New Remote** et collez-le. Backblaze B2 nécessite un Application Key ID et une Application Key, que vous générez sur la page de gestion des clés de Backblaze. Créez une clé limitée au bucket de destination plutôt qu'une clé principale, afin que les identifiants de la migration ne puissent accéder qu'au strict nécessaire.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Gofile et Backblaze B2 dans RcloneView" class="img-large img-center" />

Une fois les deux remotes créés, ouvrez Gofile dans un panneau Explorer et votre bucket B2 dans un autre. RcloneView affiche jusqu'à quatre panneaux à la fois, vous pouvez donc aussi garder un dossier local ouvert pour des vérifications ponctuelles. Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture et en écriture avec la licence FREE.

## Planifier l'organisation avant de copier

Décidez comment le contenu de Gofile correspondra au bucket. Un studio photo qui livre ses clients dans une douzaine de dossiers Gofile pourrait créer un seul bucket B2 et reproduire chaque dossier sous forme de préfixe de premier niveau, ce qui garde les chemins lisibles par la suite. Créez d'abord les dossiers de destination avec **New Folder** dans le panneau B2.

Faites glisser les dossiers du panneau Gofile vers le panneau B2. Entre des remotes différents, le glisser-déposer effectue une copie ; vos originaux Gofile restent donc intacts jusqu'à ce que vous en décidiez autrement. Pour une migration plus importante et répétable, utilisez plutôt l'assistant Sync : choisissez Gofile comme source, le chemin du bucket comme destination, et donnez à la tâche un nom composé de lettres, de chiffres, de traits d'union ou de tirets bas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Gofile vers Backblaze B2 dans RcloneView" class="img-large img-center" />

## Dry Run, transfert et suivi

Avant l'exécution réelle, utilisez **Dry Run**. Il liste les fichiers qui seraient copiés et ceux qui seraient supprimés, de sorte qu'une source ou une destination erronée est détectée avant de vous coûter quoi que ce soit. Si vous choisissez une synchronisation unidirectionnelle, souvenez-vous qu'elle modifie la destination pour qu'elle corresponde à la source ; un Dry Run vaut bien la minute qu'il demande.

Dans Advanced Settings, vous pouvez régler le nombre de transferts de fichiers simultanés et activer la comparaison par somme de contrôle. Commencez prudemment pour un premier passage, puis augmentez la concurrence si le transfert est stable. Suivez la progression, la vitesse et le nombre de fichiers dans l'onglet **Transferring** en bas de la fenêtre.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi de la progression du transfert dans l'onglet Transferring" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois le transfert terminé, ouvrez **Compare** depuis l'onglet Home avec Gofile à gauche et B2 à droite. Filtrez sur les fichiers left-only pour voir ce qui n'est pas arrivé, et sur les fichiers different pour repérer les écarts de taille. Copy right comble les manques sans renvoyer les fichiers qui correspondent déjà. Job History enregistre chaque exécution avec son statut, sa taille et sa durée, ce qui vous donne une trace de la migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare montrant les différences entre Gofile et B2" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Gofile avec l'Access Token et votre remote Backblaze B2 avec une clé d'application limitée au bucket.
3. Ouvrez les deux remotes côte à côte, lancez un **Dry Run**, puis copiez ou synchronisez les dossiers.
4. Utilisez **Compare** pour confirmer que rien ne manque avant de nettoyer le côté Gofile.

Une copie vérifiée dans B2 transforme des liens de partage temporaires en une sauvegarde que vous maîtrisez.

---

**Guides associés :**

- [Migrer Gofile vers Google Drive](https://rcloneview.com/support/blog/migrate-gofile-to-google-drive-rcloneview)
- [Gérer le stockage Gofile](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Migrer IDrive e2 vers Backblaze B2](https://rcloneview.com/support/blog/migrate-idrive-e2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
