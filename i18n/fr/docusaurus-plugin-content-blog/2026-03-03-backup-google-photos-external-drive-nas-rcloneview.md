---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "Comment sauvegarder toutes vos photos Google Photos sur un disque externe ou un NAS avec RcloneView"
authors:
  - tayson
description: "Téléchargez et sauvegardez toute votre bibliothèque Google Photos sur un disque dur externe, un NAS ou un autre cloud — automatiquement et sans perdre la structure de vos albums — grâce à RcloneView."
keywords:
  - google photos backup
  - download all google photos
  - google photos to external drive
  - google photos to nas
  - backup google photos automatically
  - google photos to hard drive
  - google photos rclone
  - google photos sync nas
  - save google photos locally
  - google photos export alternative
tags:
  - google-photos
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment sauvegarder toutes vos photos Google Photos sur un disque externe ou un NAS avec RcloneView

> Google Photos conserve vos souvenirs, mais que se passe-t-il si votre compte est bloqué, si le stockage est saturé, ou si Google change ses règles ? Une sauvegarde locale garantit que vos photos vous appartiennent toujours.

Google Photos est pratique — jusqu'à ce qu'il ne le soit plus. Les limites de stockage, les suspensions de compte et les changements de règles peuvent tous menacer l'accès à des années de photos et vidéos irremplaçables. Google Takeout existe, mais il est terriblement lent, échoue sur les grandes bibliothèques et ne prend pas en charge les mises à jour incrémentielles.

RcloneView offre une meilleure solution : connectez-vous directement à Google Photos, parcourez votre bibliothèque visuellement, et synchronisez tout vers un disque externe, un NAS ou un autre cloud — avec une planification automatique pour que les futures photos soient également sauvegardées.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi sauvegarder Google Photos localement ?

### Google Takeout ne suffit pas

Google Takeout permet d'exporter des photos, mais présente des limites importantes :

- **Lent et peu fiable** — Les grandes bibliothèques échouent souvent en cours d'exportation, ce qui oblige à tout recommencer.
- **Pas de mise à jour incrémentielle** — Chaque exportation est un dump complet. Vous avez pris 500 nouvelles photos ce mois-ci ? Il faut tout exporter à nouveau.
- **Format d'archive ZIP** — Vous obtenez des dizaines de fichiers ZIP qu'il faut extraire et organiser manuellement.
- **Aucune automatisation** — C'est un processus entièrement manuel à chaque fois.

### Les vrais risques du stockage uniquement dans le cloud

- **Quota de stockage dépassé** — Une fois les 15 Go atteints (partagés avec Gmail et Drive), Google vous invite à supprimer des données ou à payer.
- **Blocage de compte** — Une violation des règles, même accidentelle, peut geler l'intégralité de votre compte Google.
- **Changements de service** — Google a déjà abandonné des produits par le passé (Google+, Picasa). Votre stratégie de données doit en tenir compte.

Une sauvegarde locale sur un disque externe ou un NAS vous donne une copie indépendante qu'aucun changement de règles ne peut vous retirer.

## Configurer Google Photos comme remote

### Étape 1 : Ajouter Google Photos dans RcloneView

Ouvrez RcloneView et créez un nouveau remote :

1. Cliquez sur le bouton **Add Remote** dans le Remote Manager.
2. Sélectionnez **Google Photos** dans la liste des fournisseurs.
3. Suivez le flux d'authentification OAuth — RcloneView ouvrira votre navigateur pour autoriser l'accès.
4. Une fois autorisé, votre bibliothèque Google Photos apparaît comme un remote consultable.

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Photos as a remote in RcloneView" class="img-large img-center" />

### Étape 2 : Parcourir votre bibliothèque de photos

Une fois connecté, vous pouvez parcourir votre bibliothèque Google Photos directement dans l'[Explorer](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage) de RcloneView. Google Photos organise les fichiers de la façon suivante :

- **Dossiers Année/Mois** — Les photos sont classées selon des chemins de type `media/by-year/2024/01`.
- **Albums** — Vos albums apparaissent comme des dossiers distincts sous le chemin `album`.
- **Albums partagés** — Accessibles sous `shared-album`.

Cela permet de voir précisément ce que vous sauvegardez avant de lancer un transfert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Photos library in RcloneView Explorer" class="img-large img-center" />

## Stratégie de sauvegarde 1 : Google Photos → Disque dur externe

L'approche la plus simple — copier l'ensemble vers un disque externe connecté en USB.

### Comment procéder

1. **Connectez votre disque externe** et notez la lettre du lecteur (Windows) ou le point de montage (Mac/Linux).
2. **Créez une tâche de copie (Copy job)** dans RcloneView :
   - **Source** : votre remote Google Photos (sélectionnez le dossier `media/by-year` pour toutes les photos)
   - **Destination** : le chemin de votre disque externe (par exemple, `E:\Google Photos Backup`)
3. **Lancez la tâche** — RcloneView télécharge toutes les photos et vidéos en conservant la structure des dossiers.

### Paramètres recommandés

- **Transferts parallèles** : 4 à 6 (l'API Google Photos impose des limites de débit)
- **Type de tâche** : Copy (et non Sync — vous ne voulez pas supprimer les fichiers locaux si vous les retirez de Google Photos)

### Pour les mises à jour incrémentielles

Après la sauvegarde initiale, les exécutions suivantes ne téléchargent que les nouvelles photos. RcloneView compare ce qui se trouve déjà sur votre disque et ignore les fichiers existants. Une première sauvegarde de plusieurs heures devient ainsi une mise à jour quotidienne rapide.

## Stratégie de sauvegarde 2 : Google Photos → NAS Synology

Pour les utilisateurs disposant d'un NAS Synology, RcloneView offre une expérience encore plus intégrée. Depuis la v1.0, les appareils NAS Synology sont [détectés automatiquement](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer) sur votre réseau.

### Comment procéder

1. **Lancez RcloneView** — votre NAS Synology devrait apparaître automatiquement dans l'onglet Local.
2. **Créez une tâche de copie** :
   - **Source** : remote Google Photos
   - **Destination** : un dossier partagé sur votre NAS (par exemple, `/photos/google-backup`)
3. **Planifiez la tâche** pour qu'elle s'exécute quotidiennement ou hebdomadairement via la [planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection for Google Photos backup" class="img-large img-center" />

### Pourquoi le NAS est idéal pour la sauvegarde de photos

- **Toujours actif** — Contrairement à un disque externe, votre NAS est toujours connecté et prêt.
- **Protection RAID** — La plupart des configurations NAS utilisent le RAID pour se protéger des pannes de disque.
- **Accès depuis n'importe où** — Consultez vos photos sauvegardées depuis n'importe quel appareil de votre réseau.
- **Sauvegarde cloud secondaire** — Utilisez une autre tâche RcloneView pour synchroniser le NAS vers S3 ou Backblaze B2 afin d'assurer une redondance hors site.

## Stratégie de sauvegarde 3 : Google Photos → Un autre cloud

Vous souhaitez conserver une copie chez un autre fournisseur cloud ? RcloneView simplifie les transferts de cloud à cloud :

- **Google Photos → OneDrive** — Exploitez votre espace de stockage Microsoft 365.
- **Google Photos → AWS S3** — Archivez vers un stockage d'objets peu coûteux et durable.
- **Google Photos → Backblaze B2** — Stockage de sauvegarde illimité à faible coût.
- **Google Photos → Wasabi** — Compatible S3, sans frais de sortie de données.

Il suffit de créer une tâche de copie avec Google Photos comme source et le cloud cible comme destination. Aucune donnée ne transite par le stockage local de votre machine — RcloneView gère le transfert via son moteur rclone.

## Automatiser la sauvegarde de vos photos

Une sauvegarde ponctuelle, c'est bien. Une sauvegarde automatisée et récurrente, c'est mieux.

### Configurer des sauvegardes planifiées

1. **Créez votre tâche de copie** en utilisant l'une des stratégies ci-dessus.
2. **Ouvrez la planification des tâches (Job Scheduling)** et définissez une planification récurrente :
   - **Quotidienne à 2h du matin** — Récupère toutes les nouvelles photos de la veille.
   - **Hebdomadaire le dimanche** — Une approche plus légère pour les bibliothèques plus petites.
3. **Ajoutez des notifications** pour savoir que tout s'est bien passé :
   - [Alertes Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) pour les équipes
   - [Alertes Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) pour un usage personnel
   - [Alertes Discord](https://rcloneview.com/support/blog/rcloneview-discord-remote-control) pour les communautés

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic Google Photos backups" class="img-large img-center" />

### Utiliser les tâches par lot (Batch Jobs) pour une sauvegarde multi-destinations

Avec les [tâches par lot (Batch Jobs)](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview) de la v1.3, vous pouvez sauvegarder Google Photos vers plusieurs destinations en une seule séquence automatisée :

1. Copier Google Photos → Disque externe
2. Copier Google Photos → NAS
3. Copier Google Photos → Backblaze B2

Un seul clic (ou un seul déclencheur planifié) exécute les trois.

## Suivi et vérification

### Suivi du transfert en temps réel

Suivez la progression de votre sauvegarde en temps réel — nombre de fichiers, vitesses de transfert et temps estimé jusqu'à la fin.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Photos backup progress" class="img-large img-center" />

### Vérifier avec la comparaison de dossiers

Une fois la sauvegarde terminée, utilisez la [comparaison de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) pour vérifier que votre copie locale correspond à la bibliothèque Google Photos. Cela vous garantit que rien n'a été oublié.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Google Photos with local backup" class="img-large img-center" />

### Consulter l'historique des tâches

Consultez l'[historique des tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) pour voir un journal complet des sauvegardes précédentes, incluant les fichiers transférés, les erreurs rencontrées et la durée totale.

## Conseils pour les grandes bibliothèques Google Photos

Si vous avez des dizaines de milliers de photos :

1. **Commencez par les années récentes** — Sauvegardez d'abord les 2 à 3 dernières années, puis remontez dans le temps. Vous protégez ainsi vos souvenirs les plus récents en priorité.
2. **Utilisez la copie incrémentielle** — Après la première exécution, seuls les nouveaux fichiers sont transférés.
3. **Soyez patient avec les limites de débit** — Les limites de l'API Google Photos sont plus strictes que celles de Google Drive. Gardez les transferts parallèles entre 4 et 6.
4. **Relancez en cas d'échec** — La fonctionnalité Retry Failed Jobs de la v1.3 gère avec souplesse les erreurs temporaires de l'API.
5. **Envisagez une planification hors heures de pointe** — Exécutez les grandes sauvegardes la nuit pour éviter la congestion réseau.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) (Windows, macOS, Linux).
2. **Ajoutez Google Photos** comme remote via l'authentification OAuth.
3. **Parcourez votre bibliothèque** dans l'Explorer pour voir ce que vous sauvegardez.
4. **Créez une tâche de copie** vers la destination de votre choix (disque externe, NAS ou cloud).
5. **Planifiez-la** pour des sauvegardes récurrentes automatiques.
6. **Vérifiez** avec la comparaison de dossiers après la première exécution.

Vos photos sont irremplaçables. Votre sauvegarde ne devrait pas dépendre d'un seul fournisseur. RcloneView facilite le maintien d'une copie indépendante — automatiquement, de manière fiable, et sans aucune ligne de commande requise.

---

**Guides associés :**

- [Ajouter un remote via une connexion par navigateur (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Parcourir et gérer les remotes](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Détection et connexion automatique du NAS Synology](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
