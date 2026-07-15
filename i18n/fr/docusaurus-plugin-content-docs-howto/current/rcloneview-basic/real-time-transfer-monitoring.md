---
sidebar_position: 11
description: "Suivez les opérations de fichiers actives et terminées telles que la synchronisation, la copie et la suppression dans RcloneView grâce à l'interface Job Monitor."
keywords:
  - rcloneview
  - Job Monitor
  - Transfer Log
  - Rclone API Logs
  - transfert de fichiers
  - progression de la synchronisation
  - journaux de tâches
tags:
  - RcloneView
  - Job-Management
  - Monitoring
  - Transfer-log
  - Completed-log
  - API-log
  - Sync
date: 2025-06-22
author: Jay
---
# Job Monitor

RcloneView propose une interface **Job Monitor** pour aider les utilisateurs à suivre, examiner et gérer l'état des opérations de fichiers en cours et terminées, telles que la synchronisation, la copie et la suppression. L'interface se compose de trois onglets principaux :

## Onglet Transfer - Tâches en cours

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="transfer log" class="img-medium img-center" />
Cet onglet affiche toutes les tâches de transfert de fichiers actuellement actives.

**Colonnes :**
- **Job** : Indique le type d'opération (par ex. Sync, Copy, Delete).
- **Source / Destination** : Affiche le chemin d'origine et de destination.
- **Received Size** : Quantité de données transférées / taille totale.
- **Speed** : Vitesse de transfert actuelle.
- **Progress** : Barre de progression visuelle de la tâche en cours.
- **Percentage** : Pourcentage d'achèvement du transfert.
- **Time Left** : Temps restant estimé.
- **Job ID** : ID interne utilisé pour référencer cette tâche.
- **Cancel** : Cliquez sur l'icône ❌ pour annuler la tâche en cours.

## Onglet Completed - Historique des tâches

<img src="/support/images/en/howto/rcloneview-basic/completed-log.png" alt="completed log" class="img-medium img-center" />
Cet onglet répertorie toutes les tâches précédemment exécutées et leurs résultats.

**Colonnes :**
- **Job** : Le type d'opération (Sync, Copy, Delete, etc.).
- **Source / Destination** : Chemin de la source et de la destination.
- **Status** : Statut du résultat (par ex. Success, Errors).
- **Started At** : Heure de début de la tâche.
- **Time Spent** : Durée totale de la tâche.
- **Files** : Nombre de fichiers transférés.
- **Size** : Taille totale des données.
- **Speed** : Vitesse de transfert moyenne.
- **Job ID** : Référence interne de la tâche.
- **Delete** : icône <img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> pour supprimer l'enregistrement.

## Onglet Log - Journaux de communication API

<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="log tab" class="img-medium img-center" />

Cet onglet affiche les journaux backend issus de la communication de RcloneView avec l'API Rclone.

**Colonnes :**
- **Time** : Horodatage de la demande d'opération.
- **Event Type** : Niveau de journalisation (par ex. INFO, ERROR).
- **Job Type** : Le type d'opération (Sync, Copy, Delete, etc.).
- **Message** : Résultat de l'opération.
- **Details** : Métadonnées internes supplémentaires (par ex. ID de tâche en JSON).

Utilisez cet onglet pour le dépannage ou l'examen des interactions au niveau du système.

:::tip
- Chaque enregistrement de tâche est lié entre les onglets par son **Job ID**.
- Les journaux sont automatiquement mis à jour en temps réel.
- Les onglets Completed et Log conservent l'historique même après le redémarrage de l'application, sauf suppression manuelle.
:::
