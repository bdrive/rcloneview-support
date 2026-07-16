---
slug: manage-terabox-cloud-sync-backup-rcloneview
title: "Gérer le stockage Terabox — Synchroniser et sauvegarder vos fichiers avec RcloneView"
authors:
  - alex
description: "Gérez le stockage cloud Terabox avec RcloneView — synchronisez, sauvegardez et transférez des fichiers sur plus de 90 fournisseurs depuis une seule interface graphique multiplateforme. Aucune ligne de commande requise."
keywords:
  - synchronisation Terabox
  - sauvegarde Terabox
  - gérer le stockage Terabox
  - Terabox RcloneView
  - gestion cloud Terabox
  - transfert de fichiers Terabox
  - synchroniser Terabox vers Google Drive
  - outil de sauvegarde cloud Terabox
  - guide RcloneView Terabox
  - gestionnaire de stockage cloud Terabox
tags:
  - RcloneView
  - terabox
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Terabox — Synchroniser et sauvegarder vos fichiers avec RcloneView

> Connectez Terabox à RcloneView pour une expérience de gestion cloud complète — parcourez, synchronisez, sauvegardez et transférez vos fichiers sans jamais toucher une ligne de commande.

Terabox propose un quota de stockage cloud gratuit généreux, ce qui en fait un choix populaire pour stocker des archives vidéo, des fichiers de projet et des sauvegardes personnelles. Mais gérer efficacement ce stockage — surtout lorsqu'il faut déplacer des fichiers vers d'autres fournisseurs ou planifier des sauvegardes régulières — nécessite un outil adapté. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sur Windows, macOS et Linux, si bien que Terabox s'intègre naturellement à tout flux de travail multi-cloud que vous utilisez déjà.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Terabox à RcloneView

Ajouter Terabox comme distant ne prend qu'une minute. Ouvrez RcloneView et accédez à l'onglet **Remote**, puis cliquez sur **New Remote**. Parcourez la liste des fournisseurs et sélectionnez Terabox, saisissez vos identifiants de compte lorsque demandé, puis enregistrez. RcloneView stocke la connexion dans sa configuration rclone intégrée, vous n'avez donc jamais à répéter cette configuration.

Une fois connecté, Terabox apparaît comme un onglet dans le panneau Explorer. Vous pouvez parcourir vos dossiers, créer de nouveaux répertoires, renommer des fichiers et vérifier l'utilisation du stockage — le tout depuis la même interface à deux volets que vous utilisez pour chaque autre fournisseur. La barre de chemin (fil d'Ariane) facilite la navigation dans des hiérarchies de dossiers profondes sans perdre le fil de votre position.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Terabox as a new remote in RcloneView" class="img-large img-center" />

## Synchroniser et sauvegarder des fichiers depuis Terabox

L'assistant de synchronisation en quatre étapes de RcloneView vous permet de configurer une tâche de sauvegarde Terabox en quelques minutes. Définissez Terabox comme source, choisissez une destination — un dossier local, un disque externe ou un autre fournisseur cloud — et nommez la tâche. L'étape avancée vous permet d'ajuster les transferts simultanés et d'activer la vérification par somme de contrôle, garantissant que chaque fichier arrivé à destination correspond à l'original octet par octet.

Avant de lancer une synchronisation complète, exécutez un **Dry Run** depuis le Job Manager pour prévisualiser exactement quels fichiers seront copiés ou supprimés. Cela est particulièrement utile lorsque vous travaillez avec de grandes archives Terabox, où une suppression accidentelle pourrait être coûteuse. Une fois satisfait de l'aperçu, exécutez la tâche et suivez la progression en temps réel dans l'onglet Transferring en bas de l'écran.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Terabox in RcloneView" class="img-large img-center" />

## Transférer des fichiers Terabox vers d'autres clouds

Un cas d'usage courant consiste à migrer du contenu hors de Terabox vers un fournisseur offrant une résidence des données régionale plus stricte ou des coûts de sortie de données plus faibles. Avec les deux distants ouverts côte à côte dans les panneaux Explorer, vous pouvez glisser-déposer des fichiers directement de Terabox vers Amazon S3, Google Drive, Backblaze B2, ou tout autre fournisseur pris en charge par RcloneView. Le glisser-déposer entre différents distants effectue toujours une copie plutôt qu'un déplacement, de sorte que vos fichiers originaux sur Terabox restent intacts jusqu'à ce que vous décidiez de les supprimer.

Pour les migrations plus importantes, créez une tâche de copie ou de synchronisation dédiée. RcloneView prend en charge la synchronisation 1:N dans la licence FREE, ce qui signifie que vous pouvez envoyer un seul dossier Terabox vers plusieurs destinations en une seule exécution de tâche — utile lorsque vous souhaitez à la fois une sauvegarde principale et une copie d'archivage à froid.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Terabox to another provider" class="img-large img-center" />

## Consulter l'historique des tâches et suivre les transferts

Après chaque exécution, RcloneView enregistre le résultat dans **Job History**. Vous pouvez filtrer par plage de dates, vérifier si une tâche s'est terminée avec succès, a rencontré une erreur ou a été annulée, et consulter le nombre total d'octets transférés ainsi que la vitesse de transfert. Pour quiconque gère une importante bibliothèque Terabox à travers plusieurs flux de travail, cette piste d'audit est inestimable pour repérer les anomalies — un pic soudain du nombre d'erreurs signale souvent une limite de quota ou un problème réseau à examiner.

Les titulaires d'une licence PLUS peuvent attacher une planification de type cron à n'importe quelle tâche Terabox et activer les notifications à la fin de l'exécution, afin que la sauvegarde s'exécute véritablement en toute autonomie.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing Terabox sync results in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet **Remote** et cliquez sur **New Remote**, puis sélectionnez Terabox et saisissez vos identifiants.
3. Parcourez vos dossiers Terabox dans le panneau Explorer et identifiez le contenu que vous souhaitez sauvegarder ou transférer.
4. Créez une tâche de synchronisation ou de copie à l'aide de l'assistant en quatre étapes, exécutez un Dry Run pour vérifier le plan, puis lancez l'exécution.

Une sauvegarde Terabox bien configurée ne prend que quelques minutes à mettre en place et vous donne pleinement confiance que votre contenu stocké est répliqué en toute sécurité partout où vous en avez besoin.

---

**Guides connexes :**

- [Synchroniser le stockage gratuit Terabox vers d'autres clouds avec RcloneView](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [Gérer le stockage cloud MEGA — Synchroniser et sauvegarder vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Migration cloud à cloud avec RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
