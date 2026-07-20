---
slug: manage-pixeldrain-cloud-sync-rcloneview
title: "Gérer le stockage cloud Pixeldrain — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez Pixeldrain à RcloneView pour parcourir vos fichiers hébergés et les synchroniser avec d'autres fournisseurs cloud pour la sauvegarde ou l'archivage à long terme."
keywords:
  - Pixeldrain RcloneView
  - synchronisation cloud Pixeldrain
  - sauvegarde Pixeldrain
  - gérer les fichiers Pixeldrain
  - interface rclone Pixeldrain
  - transfert de fichiers Pixeldrain
  - sauvegarde cloud Pixeldrain
  - configuration de synchronisation Pixeldrain
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage cloud Pixeldrain — Synchroniser et sauvegarder des fichiers avec RcloneView

> Pixeldrain est un service d'hébergement de fichiers doté de fonctionnalités de stockage cloud personnel — RcloneView le connecte à votre écosystème cloud plus large pour la sauvegarde et une gestion organisée des fichiers.

Pixeldrain est une plateforme de partage et d'hébergement de fichiers qui fait également office de stockage cloud personnel, permettant aux utilisateurs de téléverser, d'organiser et de partager des fichiers. Bien que l'interface web couvre les opérations de base, les utilisateurs qui ont besoin de synchroniser leur contenu Pixeldrain vers un autre cloud — ou de télécharger des fichiers pour une archive locale — bénéficient d'un outil dédié. RcloneView répertorie Pixeldrain comme fournisseur pris en charge, vous pouvez donc le connecter aux côtés de tous vos autres distants et gérer les transferts depuis une seule interface.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Pixeldrain à RcloneView

Ouvrez RcloneView et accédez à **Remote Manager**. Cliquez sur **New Remote** et parcourez la liste des fournisseurs pour trouver **Pixeldrain**. La connexion utilise votre clé API Pixeldrain, que vous pouvez générer depuis les paramètres de votre compte sur le site web de Pixeldrain. Saisissez la clé API dans le formulaire de configuration et enregistrez.

Une fois enregistré, ouvrez le distant dans le File Explorer. Vos fichiers et répertoires Pixeldrain se chargent dans le panneau, prêts à être parcourus et transférés.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Pixeldrain remote in RcloneView" class="img-large img-center" />

## Parcourir et organiser les fichiers

Le File Explorer de RcloneView affiche votre stockage Pixeldrain avec la même vue arborescente et la même vue en liste utilisées pour tous les autres fournisseurs. Naviguez dans les répertoires, sélectionnez des fichiers et utilisez les options du clic droit pour copier, déplacer ou supprimer. Pour les collections riches en images, passez en **Thumbnail View** pour afficher des aperçus sous forme de grille — utile si vous hébergez des photos ou des captures d'écran sur Pixeldrain et que vous souhaitez identifier le contenu avant de le transférer.

L'ouverture d'un second panneau pointant vers un autre distant — Google Drive, Backblaze B2 ou un dossier local — vous permet de glisser-déposer des fichiers directement entre Pixeldrain et votre destination.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Pixeldrain folders with another cloud in RcloneView" class="img-large img-center" />

## Créer une tâche de sauvegarde

Pour des sauvegardes systématiques de votre contenu Pixeldrain, utilisez la fonctionnalité **Job**. Accédez à **Jobs**, cliquez sur **New Job**, et définissez Pixeldrain comme source. Choisissez n'importe quel distant configuré comme destination. À l'étape 2 de l'assistant de tâche, configurez les options de transfert :

- **Number of transfers** : nombre de fichiers transférés simultanément
- **Dry Run** : prévisualiser ce qui sera copié sans réellement déplacer quoi que ce soit
- **Checksum verification** : activer pour confirmer l'intégrité des données après le transfert

Lancez la tâche, et RcloneView affiche la progression en temps réel avec la vitesse de transfert et le nombre de fichiers. Une fois la tâche terminée, le résultat est consigné dans **Job History**.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Pixeldrain files to another cloud provider" class="img-large img-center" />

## Comparaison de dossiers pour vérification

Après avoir migré du contenu de Pixeldrain vers un autre cloud, l'outil **Folder Compare** vous donne la confiance que le transfert a été complet. Ouvrez côte à côte le dossier source Pixeldrain et le dossier de destination, et RcloneView met en évidence les fichiers qui n'existent que d'un côté ou qui diffèrent en taille. Ceci est particulièrement utile lorsque vous avez effectué la migration sur plusieurs sessions et que vous souhaitez confirmer que rien n'a été oublié.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Pixeldrain sync records" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez votre clé API Pixeldrain depuis les paramètres de votre compte sur pixeldrain.com.
3. Ouvrez **Remote Manager**, cliquez sur **New Remote**, sélectionnez **Pixeldrain**, et saisissez votre clé API.
4. Parcourez vos fichiers et configurez une tâche de sauvegarde vers le cloud de destination de votre choix.

RcloneView facilite le déplacement du contenu Pixeldrain vers une configuration de stockage à long terme plus structurée.

---

**Guides connexes :**

- [Migration cloud à cloud avec RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Corriger les fichiers manquants après une synchronisation cloud](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Historique des tâches et suivi des journaux de transfert](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
