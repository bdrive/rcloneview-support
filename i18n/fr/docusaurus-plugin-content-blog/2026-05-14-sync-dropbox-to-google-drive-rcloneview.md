---
slug: sync-dropbox-to-google-drive-rcloneview
title: "Synchroniser Dropbox avec Google Drive — automatisez vos sauvegardes cloud avec RcloneView"
authors:
  - casey
description: "Découvrez comment synchroniser automatiquement Dropbox avec Google Drive grâce à RcloneView. Configurez des tâches de sauvegarde cloud à cloud récurrentes avec planification, filtrage et suivi des transferts en temps réel."
keywords:
  - sync Dropbox to Google Drive
  - Dropbox Google Drive sync
  - Dropbox to Google Drive backup
  - cloud to cloud sync RcloneView
  - automate Dropbox Google Drive transfer
  - rclone Dropbox Google Drive GUI
  - Dropbox cloud backup solution
  - recurring cloud sync job
  - cross-cloud backup automation
  - RcloneView cloud sync tool
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Dropbox avec Google Drive — automatisez vos sauvegardes cloud avec RcloneView

> Gardez vos données Dropbox et Google Drive synchronisées automatiquement — sans scripts, sans terminal, sans services de synchronisation tiers coûteux.

De nombreuses équipes s'appuient sur Dropbox pour le partage de fichiers au quotidien, mais une stratégie cloud intelligente consiste à conserver une copie redondante chez un second fournisseur comme Google Drive. Que vous cherchiez à vous protéger contre des suppressions accidentelles, à préparer une migration d'espace de travail, ou à satisfaire une politique de sauvegarde à deux clouds, RcloneView vous offre un pipeline planifié et piloté par une interface graphique pour synchroniser Dropbox vers Google Drive de manière fiable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Dropbox et Google Drive en tant que remotes

Avant de planifier une tâche de synchronisation, RcloneView a besoin de connexions autorisées aux deux fournisseurs. Ouvrez l'application, allez dans l'onglet **Remote**, puis cliquez sur **New Remote**. Sélectionnez **Dropbox** dans la liste des fournisseurs et effectuez la connexion OAuth via le navigateur — aucune clé API n'est requise. Répétez l'opération pour **Google Drive**, en vous authentifiant avec votre compte Google.

Les deux remotes apparaissent désormais dans le gestionnaire de remotes et sont accessibles depuis n'importe quel panneau Explorer. Vous pouvez parcourir vos dossiers Dropbox dans le panneau de gauche et votre destination Google Drive dans le panneau de droite, ce qui facilite l'identification de la source et de la destination avant de créer une tâche.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Google Drive remotes in RcloneView" class="img-large img-center" />

Pour les équipes utilisant **Dropbox for Business**, définissez le paramètre `dropbox_business = true` lors de la configuration du remote. Pour les **Google Shared Drives**, activez l'option des lecteurs partagés afin que les dossiers d'équipe soient accessibles dans l'explorateur de remotes.

## Créer une tâche de synchronisation avec planification

Une fois les deux remotes connectés, rendez-vous dans l'onglet **Home** et cliquez sur **Sync** pour ouvrir l'assistant de création de tâche. À l'étape 1, sélectionnez votre dossier Dropbox comme source et un dossier Google Drive comme destination. Donnez à la tâche un nom descriptif comme `dropbox-to-gdrive-backup`.

À l'étape 2, ajustez le nombre de transferts simultanés selon la vitesse de votre connexion. Activer la **vérification par checksum** garantit que l'intégrité des fichiers est confirmée octet par octet, et pas seulement par taille. L'étape 3 vous permet de filtrer par type de fichier — par exemple, en excluant les fichiers `.tmp` ou `.lnk` que Dropbox laisse parfois dans les dossiers d'équipe synchronisés.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled Dropbox to Google Drive sync job in RcloneView" class="img-large img-center" />

C'est à l'étape 4 que l'automatisation entre en jeu. Avec une **licence PLUS**, définissez une planification de type cron — par exemple, chaque nuit à 2h00 — pour que le contenu récent de Dropbox soit automatiquement répliqué vers Google Drive. Utilisez l'expression cron `0 2 * * *` pour une exécution quotidienne, ou `0 2 * * 0` pour une synchronisation hebdomadaire le dimanche. Le bouton **Simulate schedule** vous permet de prévisualiser les prochaines exécutions avant d'enregistrer.

## Suivre les transferts en direct et consulter l'historique

Une fois votre tâche lancée, l'onglet **Transferring** en bas de l'application affiche la progression des transferts en temps réel : nombre de fichiers, vitesse de transfert, volume total de données déplacées, et un bouton d'annulation si vous devez interrompre en cours d'exécution. Pour une agence créative synchronisant 80 Go d'archives de projets de Dropbox vers Google Drive, vous pouvez observer le statut de chaque fichier se mettre à jour au fur et à mesure des transferts.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Dropbox to Google Drive sync" class="img-large img-center" />

Après chaque exécution, la vue **Job History** enregistre le type d'exécution (manuelle ou planifiée), la durée, le nombre total d'octets transférés, la vitesse et le statut final — Completed, Errored ou Canceled. Si une exécution rencontre une limite temporaire de taux d'appel API de la part de Dropbox ou de Google Drive, le mécanisme de nouvelle tentative intégré (par défaut : 3 tentatives) gère les échecs transitoires sans intervention manuelle.

## Vérifier les résultats de la synchronisation avec Folder Compare

Après la synchronisation initiale complète, utilisez l'outil **Folder Compare** de RcloneView pour valider que les deux côtés correspondent. Lancez-le depuis l'onglet Home, sélectionnez votre source Dropbox et votre destination Google Drive, puis cliquez sur Compare. Les résultats affichent les fichiers présents uniquement à gauche (pas encore synchronisés), les fichiers présents uniquement à droite (ajoutés manuellement à Drive), les fichiers identiques et les fichiers dont la taille ne correspond pas.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Dropbox and Google Drive are in sync" class="img-large img-center" />

Effectuez un **Dry Run** avant la première synchronisation en direct afin de prévisualiser précisément quels fichiers seront copiés ou supprimés. Ceci est particulièrement important lors de la synchronisation d'un dossier d'équipe Dropbox actif — vous voulez confirmer la portée de l'opération avant que le moindre changement n'affecte la destination Google Drive.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Dropbox via connexion OAuth (onglet Remote > New Remote).
3. Ajoutez votre remote Google Drive de la même manière.
4. Créez une tâche Sync allant de Dropbox vers Google Drive avec la planification de votre choix.

Avec un pipeline Dropbox-vers-Google Drive correctement mis en place, vos données vivent dans deux clouds — vous protégeant contre les pannes de fournisseur, les suppressions accidentelles et les surprises de facturation.

---

**Guides associés :**

- [Migrer de Dropbox vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Gérer Dropbox — synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Synchroniser Google Drive avec Dropbox avec RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
