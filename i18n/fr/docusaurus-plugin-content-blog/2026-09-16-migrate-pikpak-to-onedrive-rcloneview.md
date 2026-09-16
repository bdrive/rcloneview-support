---
slug: migrate-pikpak-to-onedrive-rcloneview
title: "Migrer de PikPak vers OneDrive — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez vos fichiers de PikPak vers OneDrive avec RcloneView, une interface graphique rclone qui migre le stockage cloud sans ligne de commande."
keywords:
  - migrer pikpak vers onedrive
  - transfert pikpak onedrive
  - migration pikpak onedrive
  - rclone gui pikpak
  - outil de migration cloud à cloud
  - sauvegarde pikpak onedrive
  - transférer fichiers pikpak
  - migration rcloneview
  - stockage cloud pikpak
  - outil de synchronisation onedrive
tags:
  - RcloneView
  - pikpak
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de PikPak vers OneDrive — Transférer des fichiers avec RcloneView

> Regroupez dans OneDrive les fichiers que vous avez accumulés sur PikPak, sans rien télécharger sur votre disque local au préalable.

PikPak est une destination très prisée pour les téléchargements hors ligne et les liens magnet, mais ce n'est pas là que la plupart des gens souhaitent conserver leurs fichiers durablement — c'est généralement le rôle d'OneDrive, avec son intégration à Microsoft 365. Déplacer manuellement tout d'un service à l'autre implique de télécharger vers un disque local puis de tout réuploader, ce qui est lent et facilement interrompu. RcloneView effectue directement le transfert entre les deux remotes en une seule tâche.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter PikPak et OneDrive en tant que remotes

Ouvrez **onglet Remote > New Remote** et ajoutez d'abord PikPak, en suivant les instructions à l'écran pour authentifier votre compte. Ajoutez ensuite OneDrive, qui utilise la connexion OAuth par navigateur de RcloneView — une fenêtre s'ouvre, vous vous connectez, et le remote se connecte automatiquement sans qu'il soit nécessaire de copier-coller une clé API.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout de PikPak et OneDrive en tant que nouveaux remotes dans RcloneView" class="img-large img-center" />

Une fois que les deux remotes apparaissent dans Remote Manager, ouvrez-les côte à côte dans l'Explorer à deux volets pour confirmer que vous regardez les bons dossiers avant de configurer le transfert.

## Configurer la tâche de migration

Cliquez sur **Sync** dans l'onglet Home pour lancer l'assistant en 4 étapes. À l'étape 1, sélectionnez votre dossier PikPak comme source et le dossier OneDrive cible comme destination, et choisissez **One-way (modifying destination only)** pour que PikPak reste intact pendant qu'OneDrive reçoit la copie.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration d'une tâche de transfert de PikPak vers OneDrive dans RcloneView" class="img-large img-center" />

À l'étape 2, augmentez le nombre de transferts de fichiers si vous déplacez de nombreux petits fichiers, et à l'étape 3, appliquez un filtre de taille maximale ou d'extension si vous ne voulez déplacer que certains contenus en premier. Exécutez un **Dry Run** avant le transfert réel — il liste précisément ce qui sera copié, ce qui permet de repérer une mauvaise sélection de dossier avant qu'elle ne vous fasse perdre du temps.

## Surveiller et vérifier le transfert

Démarrez la tâche et passez à l'onglet **Transferring** pour suivre la progression, la vitesse et le nombre de fichiers en temps réel. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, vous pouvez donc continuer à consulter d'autres remotes pendant que la tâche PikPak vers OneDrive s'exécute en arrière-plan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches montrant une migration de PikPak vers OneDrive terminée" class="img-large img-center" />

Une fois la tâche terminée, consultez **Job History** pour connaître la taille totale et le nombre de fichiers transférés, puis utilisez **Folder Compare** pour confirmer que les deux côtés correspondent avant de considérer la migration comme achevée.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez vos comptes PikPak et OneDrive en tant que remotes via Remote Manager.
3. Créez une tâche de synchronisation à sens unique de PikPak vers OneDrive et exécutez d'abord un Dry Run.
4. Exécutez la tâche et vérifiez le résultat avec Job History et Folder Compare.

Une fois le contenu de PikPak installé dans OneDrive, il est prêt pour la collaboration et l'intégration Office qu'offre OneDrive.

---

**Guides associés :**

- [Migrer de PikPak vers Google Drive](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [Synchroniser PikPak, Google Drive et S3](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)
- [Corriger les erreurs de synchronisation PikPak](https://rcloneview.com/support/blog/fix-pikpak-sync-errors-rcloneview)

<CloudSupportGrid />
