---
slug: sync-onedrive-to-hetzner-storage-box-rcloneview
title: "Synchroniser OneDrive vers Hetzner Storage Box — Sauvegarde cloud avec RcloneView"
authors:
  - jay
description: "Synchronisez OneDrive vers Hetzner Storage Box avec RcloneView. Configurez des sauvegardes SFTP, planifiez des synchronisations automatiques et protégez vos fichiers Microsoft avec un stockage européen."
keywords:
  - sync OneDrive to Hetzner Storage Box
  - Microsoft OneDrive Hetzner backup
  - RcloneView OneDrive Hetzner
  - Hetzner Storage Box SFTP backup
  - cloud storage to Hetzner sync
  - OneDrive backup Europe GDPR
  - cloud file sync automation
  - Hetzner cloud backup tool
  - OneDrive off-site backup
tags:
  - onedrive
  - hetzner
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser OneDrive vers Hetzner Storage Box — Sauvegarde cloud avec RcloneView

> Créez une sauvegarde hors site indépendante de vos fichiers OneDrive en les synchronisant vers Hetzner Storage Box avec RcloneView—aucun script requis.

Hetzner Storage Box est une solution de stockage SFTP hébergée en Europe, économique et appréciée des développeurs et des équipes IT qui souhaitent un stockage de sauvegarde fiable et respectueux de la vie privée, en dehors des grands hyperscalers. Synchroniser le contenu de votre Microsoft OneDrive vers un Hetzner Storage Box avec RcloneView crée une copie hors site totalement indépendante de l'écosystème Microsoft—utile pour la reprise après sinistre, la résidence des données conforme au RGPD, ou la protection contre une suspension inattendue de compte. L'ensemble du flux de travail est configurable via l'interface visuelle de RcloneView, sans écrire la moindre commande rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer OneDrive et Hetzner Storage Box comme remotes

Avant de synchroniser, vous devez enregistrer les deux services comme remotes dans RcloneView. OneDrive utilise une authentification OAuth par navigateur—cliquez sur l'onglet **Remote** → **New Remote** → **OneDrive**, et RcloneView ouvre votre navigateur pour une connexion Microsoft en un clic. Aucune clé API ni identifiant client à gérer manuellement. Les comptes OneDrive personnels et OneDrive Entreprise pour Microsoft 365 fonctionnent tous deux via ce flux.

Hetzner Storage Box se connecte via SFTP. Dans la boîte de dialogue New Remote, sélectionnez **SFTP**, puis saisissez le nom d'hôte de votre Storage Box (au format `u{number}.your-storagebox.de`), votre nom d'utilisateur, et votre mot de passe ou le chemin de votre clé privée SSH. Hetzner prend en charge l'authentification par mot de passe et par clé—les équipes gérant plusieurs destinations de sauvegarde préfèrent souvent les clés SSH pour l'automatisation sans surveillance, sans stocker de mots de passe en clair.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

Une fois que les deux remotes apparaissent dans les onglets de l'explorateur de RcloneView, parcourez chaque côté pour confirmer la connexion avant de créer votre tâche de synchronisation.

## Créer la tâche de synchronisation OneDrive vers Hetzner

Une fois les deux remotes prêts, ouvrez **Job Manager** depuis l'onglet Home et cliquez sur **Add Job**. Dans l'assistant en 4 étapes, définissez votre dossier source OneDrive—cela peut être la racine complète de votre OneDrive ou un sous-dossier spécifique comme `Documents/Contracts` ou un dossier Teams partagé. Définissez le chemin Hetzner Storage Box comme destination.

À l'étape Advanced Settings, configurez les transferts simultanés en fonction de la vitesse de votre connexion et activez la vérification par checksum pour les données critiques. Un cabinet juridique sauvegardant 30 Go de dossiers vers Hetzner peut s'appuyer sur le mode checksum pour vérifier que chaque document arrive intact—détectant toute corruption survenue pendant le transfert. L'étape Filtering permet d'exclure les fichiers de verrouillage temporaires Office (`.tmp`, `.lock`) ou de restreindre la tâche à des types de documents spécifiques comme les PDF et les feuilles de calcul.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Hetzner Storage Box sync job configuration in RcloneView" class="img-large img-center" />

Exécutez d'abord une simulation dry-run—RcloneView affiche précisément les fichiers qui seraient copiés ou supprimés, sans effectuer de modification. Une fois satisfait de l'aperçu, exécutez la tâche. L'onglet **Transferring** en bas affiche la progression du transfert en direct, la vitesse de transfert et le nombre de fichiers tout au long de l'exécution.

## Planifier et surveiller les sauvegardes automatisées

Avec une licence RcloneView PLUS, automatisez votre sauvegarde OneDrive vers Hetzner selon un planning crontab. Définir une synchronisation quotidienne à 03h00 garantit que vos fichiers OneDrive sont sauvegardés vers Hetzner chaque nuit sans intervention manuelle. Le simulateur de planification de l'assistant prévisualise les prochaines heures d'exécution afin que vous puissiez confirmer le schéma avant d'enregistrer la tâche.

L'historique des tâches conserve un journal d'audit complet—chaque exécution enregistre son heure de début, sa durée, sa vitesse de transfert, le nombre de fichiers et son résultat. Si une sauvegarde échoue en raison d'un problème réseau transitoire, la logique de nouvelle tentative configurable de RcloneView relance automatiquement la tâche. Avec les notifications de fin de tâche (disponibles avec PLUS), votre équipe est alertée de tout échec avant le début de la prochaine journée ouvrable—ainsi, aucune fenêtre de sauvegarde ne passe inaperçue.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling daily OneDrive to Hetzner Storage Box sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez **OneDrive** comme remote OAuth via l'onglet Remote → **New Remote** → OneDrive.
3. Ajoutez **Hetzner Storage Box** comme remote SFTP avec votre nom d'hôte et vos identifiants.
4. Créez une tâche de synchronisation dans **Job Manager** avec OneDrive comme source et votre chemin Hetzner comme destination.

Sauvegarder OneDrive vers Hetzner Storage Box vous offre un filet de sécurité économique, hébergé en Europe, qui fonctionne automatiquement—garantissant que vos fichiers Microsoft sont protégés même en cas de panne inattendue des services cloud.

---

**Guides connexes :**

- [Gérer la synchronisation Hetzner Storage Box avec RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Gérer le stockage OneDrive — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Synchroniser Dropbox vers Hetzner Storage Box avec RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)

<CloudSupportGrid />
