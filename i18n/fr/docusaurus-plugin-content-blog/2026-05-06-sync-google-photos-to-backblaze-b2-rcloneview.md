---
slug: sync-google-photos-to-backblaze-b2-rcloneview
title: "Synchroniser Google Photos vers Backblaze B2 — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Sauvegardez votre bibliothèque Google Photos vers Backblaze B2 avec RcloneView. Automatisez l'archivage des photos depuis Google Photos directement vers un stockage objet — sans téléchargements manuels."
keywords:
  - sync Google Photos to Backblaze B2
  - Google Photos Backblaze B2 backup
  - RcloneView Google Photos backup
  - Google Photos to B2 transfer
  - backup Google Photos object storage
  - Google Photos archive B2
  - RcloneView photo backup
  - Google Photos cloud backup tool
  - Backblaze B2 photo archive
  - automated Google Photos backup
tags:
  - RcloneView
  - google-photos
  - backblaze-b2
  - cloud-to-cloud
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Photos vers Backblaze B2 — Sauvegarde cloud avec RcloneView

> RcloneView crée un pipeline de sauvegarde automatisé de Google Photos vers Backblaze B2 — gardant votre bibliothèque de photos en sécurité dans un stockage objet à faible coût, sans aucun effort manuel.

Google Photos est la bibliothèque photo de milliards d'utilisateurs, mais s'appuyer sur un seul fournisseur cloud pour des souvenirs irremplaçables comporte un risque réel. Les photographes professionnels, les archivistes familiaux et les créateurs de contenu qui utilisent Google Photos comme bibliothèque principale bénéficient énormément d'une sauvegarde secondaire automatisée vers Backblaze B2 — une plateforme de stockage objet économique. RcloneView gère ce pipeline automatiquement, en synchronisant les nouvelles photos de Google Photos vers B2 selon la planification que vous définissez.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Google Photos et Backblaze B2 dans RcloneView

Les deux fournisseurs sont simples à ajouter dans RcloneView. Pour Google Photos, allez dans l'onglet Remote > New Remote, sélectionnez Google Photos, et effectuez l'authentification OAuth via le navigateur. Pour Backblaze B2, sélectionnez Backblaze B2 et saisissez votre Application Key ID et votre Application Key depuis la console B2.

L'intégration Google Photos de RcloneView expose votre bibliothèque organisée par album et par date. Vous pouvez parcourir les dossiers année/mois et accéder à tous les fichiers multimédias — photos et vidéos — depuis l'explorateur de fichiers.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configurer la tâche de synchronisation Google Photos vers B2

Créez une tâche de synchronisation dans RcloneView avec votre distant Google Photos comme source et un bucket Backblaze B2 comme destination. Un studio de photographie sauvegardant 500 Go de séances clients peut cibler des albums Google Photos spécifiques comme dossiers source, en dirigeant chaque album vers une structure de dossiers B2 correspondante.

Dans les paramètres avancés de la tâche de synchronisation, activez la vérification par **checksum** pour confirmer que chaque fichier photo et vidéo transféré vers B2 correspond à sa source. Ceci est essentiel pour les archives photo, où une corruption silencieuse serait dévastatrice.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Photos to Backblaze B2 in RcloneView" class="img-large img-center" />

## Planifier des sauvegardes photo automatisées (PLUS)

Avec une licence PLUS, planifiez la synchronisation Google Photos vers B2 pour qu'elle s'exécute automatiquement. Une synchronisation quotidienne à 3 h du matin capture les photos et vidéos de la veille sans impacter les performances en journée. La synchronisation incrémentielle de RcloneView ne transfère que les fichiers nouveaux et modifiés, ce qui maintient une durée de tâche courte une fois la sauvegarde complète initiale terminée.

Le filtre **Max file age** peut affiner davantage les synchronisations incrémentielles — en définissant `Max file age: 7d`, seules les photos ajoutées au cours de la dernière semaine sont transférées, idéal pour des tâches de synchronisation fréquentes mais légères.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Photos to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## Surveiller la progression et vérifier l'exhaustivité de la sauvegarde

L'onglet Transfer de RcloneView affiche la progression de la sauvegarde en temps réel : noms de fichiers, vitesse de transfert et octets totaux. Après chaque exécution planifiée, l'historique des tâches (Job History) enregistre un résumé complet. Pour les bibliothèques photo comptant des milliers de fichiers, cet historique sert de preuve d'exhaustivité de la sauvegarde — essentiel pour les photographes qui doivent garantir à leurs clients que leurs images sont archivées en toute sécurité.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos to Backblaze B2 sync progress in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Google Photos (OAuth) et Backblaze B2 (Application Key) comme distants.
3. Créez une tâche de synchronisation de Google Photos vers votre bucket B2 avec le checksum activé.
4. Planifiez des exécutions quotidiennes automatisées avec PLUS et suivez la progression dans Job History.

Avec RcloneView automatisant votre pipeline Google Photos vers Backblaze B2, votre bibliothèque photo est toujours protégée dans une archive cloud secondaire et indépendante.

---

**Guides connexes :**

- [Gérer le stockage Google Photos — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Gérer le stockage Backblaze B2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrer Google Photos vers OneDrive avec RcloneView](https://rcloneview.com/support/blog/migrate-google-photos-to-onedrive-rcloneview)

<CloudSupportGrid />
