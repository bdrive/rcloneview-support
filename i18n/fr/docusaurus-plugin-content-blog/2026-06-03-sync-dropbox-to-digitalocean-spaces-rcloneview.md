---
slug: sync-dropbox-to-digitalocean-spaces-rcloneview
title: "Synchroniser Dropbox avec DigitalOcean Spaces — Sauvegarde cloud avec RcloneView"
authors:
  - morgan
description: "Découvrez comment synchroniser et sauvegarder vos fichiers Dropbox vers DigitalOcean Spaces avec RcloneView. Configurez des transferts automatisés de cloud à cloud sans ligne de commande."
keywords:
  - synchroniser Dropbox vers DigitalOcean Spaces
  - sauvegarde Dropbox vers DigitalOcean
  - RcloneView Dropbox DigitalOcean
  - synchronisation cloud à cloud
  - sauvegarde DigitalOcean Spaces
  - sauvegarde Dropbox stockage objet
  - interface graphique de synchronisation cloud
  - RcloneView synchronisation S3
  - sauvegarde cloud automatisée
  - DigitalOcean Spaces rclone
tags:
  - RcloneView
  - dropbox
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Dropbox avec DigitalOcean Spaces — Sauvegarde cloud avec RcloneView

> Sauvegardez automatiquement vos fichiers Dropbox vers le stockage objet DigitalOcean Spaces — sans aucune commande CLI.

Dropbox est un outil de collaboration naturel pour les équipes qui partagent des fichiers au quotidien. DigitalOcean Spaces propose un stockage objet compatible S3, conçu pour les développeurs qui recherchent un stockage évolutif et abordable, intégré à leur infrastructure. Associer les deux avec RcloneView vous offre un pipeline de sauvegarde hors site automatisé : les fichiers restent dans Dropbox pour la collaboration active, tandis que Spaces conserve les copies de sauvegarde durables. RcloneView gère l'intégralité du transfert de cloud à cloud de manière visuelle — aucun terminal requis.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Dropbox et DigitalOcean Spaces

Commencez par ajouter les deux services en tant que remotes dans RcloneView. Pour Dropbox, allez dans **Remote tab > New Remote**, sélectionnez **Dropbox**, puis suivez le flux OAuth dans le navigateur pour autoriser RcloneView. Aucune clé API à copier — la fenêtre du navigateur qui s'ouvre gère l'authentification automatiquement et vous ramène vers RcloneView une fois l'opération terminée.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

Pour DigitalOcean Spaces, créez un second nouveau remote, sélectionnez **S3**, puis choisissez **DigitalOcean** comme fournisseur. Vous aurez besoin d'une **Access Key** et d'une **Secret Key** issues du panneau de contrôle DigitalOcean (sous API > Spaces Keys), ainsi que du **region endpoint** correspondant à votre région Spaces — par exemple `nyc3.digitaloceanspaces.com` pour New York. Une fois les deux remotes enregistrés, ils apparaissent sous forme d'onglets parcourables dans l'explorateur de fichiers de RcloneView.

## Configurer le job de synchronisation

Une fois les deux remotes connectés, cliquez sur **Sync** dans l'**Home tab** pour ouvrir l'assistant de synchronisation en 4 étapes. À l'étape 1, définissez votre dossier Dropbox comme **source** et votre bucket DigitalOcean Spaces (ou un sous-répertoire de celui-ci) comme **destination**. Donnez au job un nom descriptif — `dropbox-spaces-backup` convient bien — et choisissez la **synchronisation à sens unique** pour que la destination reste une réplique fidèle de la source.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job from Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

À l'étape 2, réglez le nombre de transferts de fichiers simultanés en fonction de la capacité de votre connexion. Pour une agence de design avec des milliers de petits fichiers d'assets répartis dans de nombreux dossiers Dropbox, augmenter cette valeur accélère nettement la synchronisation initiale complète. À l'étape 3, ajoutez des règles de filtrage pour exclure tout ce dont vous n'avez pas besoin sur Spaces — par exemple les fichiers `.DS_Store`, les documents Dropbox Paper, ou tout dossier utilisé uniquement pour des brouillons éphémères.

Avant d'exécuter le job pour la première fois, cliquez sur **Dry Run** pour voir exactement quels fichiers seraient transférés ou supprimés. Cela permet de confirmer que vos règles de filtrage fonctionnent comme prévu avant tout déplacement de données.

## Surveiller les transferts en cours

Une fois que vous cliquez sur **Run Job**, l'onglet **Transferring** en bas de RcloneView affiche la progression en temps réel : nombre de fichiers, vitesse de transfert et volume total transféré. Pour une synchronisation initiale importante — un studio de contenu déplaçant 80 000 fichiers depuis un compte Dropbox complet — cette vue permet d'estimer facilement la durée du job et de repérer rapidement d'éventuelles erreurs. Vous pouvez annuler un job en cours à tout moment, et le paramètre de nouvelle tentative (configurable à l'étape 2) gère automatiquement les interruptions réseau passagères.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## Planifier des sauvegardes automatiques (licence PLUS)

Pour une routine de sauvegarde totalement automatisée, les utilisateurs disposant d'une **licence PLUS** peuvent ajouter une planification de type crontab à l'étape 4 de l'assistant de synchronisation. Configurez le job pour qu'il s'exécute chaque nuit, toutes les quelques heures, ou certains jours précis de la semaine. Cliquez sur **Simulate Schedule** avant d'enregistrer pour prévisualiser les prochaines exécutions et confirmer que le calendrier est correct.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Dropbox to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

Une fois planifié, RcloneView exécute le job en arrière-plan et envoie une notification de bureau une fois terminé. La vue **Job History** enregistre chaque exécution — heure de début, durée, nombre de fichiers, taille totale et statut final — afin que vous ayez toujours une trace claire de la dernière exécution de votre sauvegarde Dropbox et de sa réussite.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez **Dropbox** en tant que remote via le flux de connexion OAuth dans le navigateur.
3. Ajoutez **DigitalOcean Spaces** en tant que remote S3 avec votre Access Key, votre Secret Key et le region endpoint.
4. Ouvrez l'assistant de synchronisation, définissez Dropbox comme source et Spaces comme destination, puis cliquez sur **Run Job**.

Une fois cette configuration en place, le contenu de votre Dropbox est continuellement répliqué vers DigitalOcean Spaces — vous offrant une sauvegarde hors site durable et automatiquement maintenue, sans effort manuel continu.

---

**Guides associés :**

- [Gérer Dropbox — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Gérer DigitalOcean Spaces — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Sauvegarder Dropbox vers Backblaze B2 — Stockage cloud abordable avec RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
