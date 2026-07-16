---
slug: sync-nextcloud-to-backblaze-b2-rcloneview
title: "Synchroniser Nextcloud avec Backblaze B2 — Sauvegarde hors site avec RcloneView"
authors:
  - tayson
description: "Sauvegardez vos données Nextcloud auto-hébergées vers Backblaze B2 avec RcloneView. Connectez-vous via WebDAV et App Key, puis planifiez des sauvegardes hors site automatisées."
keywords:
  - Nextcloud Backblaze B2 backup
  - Nextcloud offsite backup RcloneView
  - Nextcloud WebDAV sync B2
  - self-hosted Nextcloud backup
  - Backblaze B2 Nextcloud cloud backup
  - automated Nextcloud backup
  - Nextcloud disaster recovery
  - RcloneView WebDAV backup
tags:
  - nextcloud
  - backblaze-b2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Nextcloud avec Backblaze B2 — Sauvegarde hors site avec RcloneView

> Nextcloud est excellent pour la collaboration auto-hébergée, mais sans sauvegarde hors site, une seule panne de serveur peut entraîner une perte de données permanente — RcloneView le synchronise automatiquement vers Backblaze B2.

L'auto-hébergement de Nextcloud vous donne un contrôle total sur vos données, mais ce contrôle s'accompagne de responsabilités. Si votre serveur est endommagé, victime d'une rançon ou mis hors service sans sauvegarde adéquate, il n'y a aucun filet de sécurité. Backblaze B2 propose un stockage objet hors site abordable et durable qui s'associe parfaitement à Nextcloud. RcloneView connecte Nextcloud via WebDAV et B2 via une clé d'application (Application Key), vous offrant une interface graphique pour configurer et planifier des sauvegardes récurrentes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connexion à Nextcloud via WebDAV

Ouvrez RcloneView et accédez au **Gestionnaire de remotes**. Cliquez sur **Nouveau remote** et sélectionnez **WebDAV**. Nextcloud expose ses fichiers via WebDAV à un chemin standard. Renseignez :

- **URL** : `https://your-nextcloud-domain/remote.php/dav/files/your-username/`
- **Fournisseur** : Nextcloud
- **Utilisateur** : votre nom d'utilisateur Nextcloud
- **Mot de passe** : le mot de passe de votre compte Nextcloud (ou un mot de passe d'application si la 2FA est activée)

Enregistrez le remote et ouvrez-le dans l'explorateur de fichiers pour confirmer que vos fichiers Nextcloud apparaissent. Parcourez quelques dossiers pour vérifier l'accès.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

## Connexion à Backblaze B2

De retour dans le **Gestionnaire de remotes**, cliquez sur **Nouveau remote** et sélectionnez **Backblaze B2**. Dans la console Backblaze, accédez à **App Keys** et créez une clé avec un accès en lecture/écriture à votre bucket de sauvegarde. Saisissez l'**Application Key ID** et l'**Application Key** dans RcloneView. Enregistrez le remote et ouvrez-le pour vérifier que vos buckets B2 sont accessibles.

Créez le bucket de destination si ce n'est pas déjà fait — pour les sauvegardes Nextcloud, un bucket dédié (par exemple, `nextcloud-backup`) permet de garder les choses organisées.

## Configuration de la tâche de sauvegarde

Accédez à **Tâches** et cliquez sur **Nouvelle tâche**. Configurez :

- **Source** : votre remote WebDAV Nextcloud, pointant vers la racine ou un répertoire spécifique
- **Destination** : votre remote Backblaze B2 et le bucket de sauvegarde

À l'étape 2 de l'assistant de création de tâche, les options recommandées pour les sauvegardes Nextcloud :

- Réglez **transfers** sur 4 (WebDAV a une charge supplémentaire par connexion, donc une concurrence plus faible est plus stable)
- Activez la **vérification de checksum** pour garantir l'intégrité
- Activez **Dry Run** lors de la première exécution pour examiner la portée avant de valider

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud to Backblaze B2 backup job in RcloneView" class="img-large img-center" />

## Planification des sauvegardes automatisées

Avec une licence PLUS, ajoutez une planification à l'étape 3 de l'assistant de création de tâche en utilisant la syntaxe cron. Pour des sauvegardes quotidiennes à 1h du matin : `0 1 * * *`. Pour une exécution hebdomadaire : `0 1 * * 0`. RcloneView exécute la tâche silencieusement en arrière-plan à l'heure planifiée et enregistre le résultat dans l'**historique des tâches**.

Chaque entrée de l'historique des tâches affiche : le nombre de fichiers vérifiés, le nombre de fichiers transférés (seuls les fichiers modifiés sont réenvoyés), le volume de données, la durée et les éventuelles erreurs. Cela vous permet de confirmer rapidement que la sauvegarde nocturne s'est déroulée avec succès sans avoir à ouvrir l'application manuellement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## Notes sur la stratégie de sauvegarde

- La tâche de synchronisation de RcloneView est incrémentale par défaut — seuls les fichiers nouveaux ou modifiés sont transférés après l'exécution initiale
- Envisagez de conserver un versionnement de type **--backup-dir** si vous souhaitez préserver les fichiers supprimés sur B2
- Pour les sauvegardes de la base de données Nextcloud, celles-ci doivent être gérées séparément (mysqldump ou équivalent), mais toutes les données de fichiers du répertoire de données de Nextcloud se synchronisent proprement via WebDAV

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez Nextcloud via WebDAV dans le **Gestionnaire de remotes** en utilisant l'URL de votre serveur et vos identifiants.
3. Connectez Backblaze B2 en utilisant votre Application Key ID et votre Application Key.
4. Créez et planifiez une tâche de synchronisation de Nextcloud vers B2 pour une sauvegarde hors site automatisée chaque nuit.

Une sauvegarde automatisée Nextcloud → Backblaze B2 exécutée chaque nuit signifie que vos données auto-hébergées bénéficient d'une redondance de niveau entreprise à un coût minimal.

---

**Guides connexes :**

- [Synchroniser Nextcloud avec Google Drive et S3 avec RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [Sauvegarder Nextcloud WebDAV avec RcloneView](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
