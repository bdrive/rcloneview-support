---
slug: rcloneview-synology-rclone-gui
title: "Utiliser rclone sur un NAS Synology avec une interface graphique : sans SSH"
authors:
  - tayson
description: "Exécutez rclone pour NAS Synology sans SSH ni CLI. Utilisez RcloneView pour gérer les remotes, comparer les changements, chiffrer et automatiser les sauvegardes cloud en toute sécurité."
keywords:
  - synology rclone
  - rclone synology nas
  - rcloneview synology
  - synology cloud backup
  - rclone gui
  - no ssh backup
  - nas to cloud backup
  - rcloneview jobs
  - compare first backup
  - rcloneview crypt remote

tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# Utiliser rclone sur un NAS Synology avec une interface graphique : sans SSH

> Les utilisateurs Synology veulent la puissance de rclone sans les risques de SSH ou de la CLI. RcloneView vous offre un contrôle visuel, des sauvegardes plus sûres et une automatisation reproductible dans un seul espace de travail.

Les outils DSM constituent un bon point de départ, mais de nombreux utilisateurs de NAS finissent par atteindre des limites : lacunes dans la prise en charge du cloud, contrôles limités, et compromis peu clairs en matière de coût ou de sécurité. rclone est la mise à niveau évidente, mais la voie traditionnelle nécessite SSH et des compétences en ligne de commande. Ce guide présente une architecture centrée sur l'interface graphique qui conserve la puissance de rclone tout en supprimant la contrainte de la CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi « Synology rclone » est une recherche si populaire

Les utilisateurs de NAS Synology veulent généralement trois choses :

- Une prise en charge du cloud plus large que celle offerte par les outils DSM
- Un contrôle au niveau des fichiers pour la copie, la synchronisation et les filtres
- Une liberté vis-à-vis du verrouillage propriétaire et des formats de sauvegarde opaques

rclone répond à tout cela, mais la plupart des guides supposent l'usage de SSH et de la CLI. L'intention de recherche réelle est simple : *utiliser rclone sans terminal*.

## rclone est puissant, mais la CLI seule est une barrière

Une configuration rclone typique sur NAS implique :

- Activer SSH
- Se connecter via un terminal
- Modifier ou gérer `rclone.conf`
- Exécuter des commandes manuellement ou via cron

Pour de nombreux utilisateurs de NAS, cela crée un risque réel :

- Une faute de frappe peut supprimer des données
- Aucun aperçu visuel avant une synchronisation
- Les journaux sont difficiles à tracer après un échec

## Une meilleure architecture : le NAS gère le stockage, l'interface graphique gère le contrôle

Idée clé :

- Le NAS reste le **moteur de données**
- RcloneView devient le **centre de contrôle**

Vous utilisez toujours rclone en arrière-plan, mais vous le gérez via une interface visuelle et sécurisée.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS detection and connection" class="img-large img-center" />

## Ce que RcloneView change pour les workflows Synology

- Configuration des remotes sans SSH
- Comparaison visuelle avant tout transfert
- Historique des tâches et journaux au même endroit
- Planification via l'interface graphique au lieu de cron

RcloneView ne remplace pas votre NAS. Il rend votre NAS prêt pour le cloud sans les contraintes de la CLI.

## Options de configuration courantes (sans workflow centré sur SSH)

### Option 1 : NAS comme source, RcloneView comme contrôleur

- Dossiers partagés du NAS -> cibles cloud
- Toutes les opérations de copie/synchronisation/comparaison contrôlées dans RcloneView

### Option 2 : Modèle hybride

- Le NAS stocke les données localement
- RcloneView gère la comparaison, le chiffrement et la planification

## Déroulement étape par étape sans dépendance à SSH

### Étape 1 : Identifier les données du NAS à protéger

- Ignorer les volumes entiers par défaut
- Choisir les dossiers partagés critiques
- Séparer par projet ou par utilisateur

### Étape 2 : Ajouter des remotes cloud dans RcloneView

- Google Drive, OneDrive, S3, Wasabi, Backblaze
- Configuration par OAuth ou par clé

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

### Étape 3 : Traiter les dossiers du NAS comme des sources

- Utiliser des chemins NAS mappés ou montés
- Garder les permissions de lecture/écriture explicites

## Pourquoi l'interface graphique est importante pour NAS + rclone

### Sécurité visuelle

- La distinction entre Copy et Sync est explicite
- Les erreurs de direction sont plus faciles à détecter

### Comparer avant de transférer

- Voir le delta exact avant de déplacer des données
- Filtrer le bruit du NAS comme les fichiers temporaires ou de cache

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

### Moins de risques pour les non-experts

- Aucune syntaxe CLI à mémoriser
- Moins de place pour les erreurs destructrices

## Utiliser Compare avec les données du NAS

Les dossiers NAS contiennent souvent :

- `@eaDir`
- des caches temporaires
- des fichiers générés par des packages

Compare vous aide à identifier les changements réels et à éviter les téléversements inutiles. Il vous donne également une visibilité sur les coûts avant chaque sauvegarde.

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="Compare and copy only changes" class="img-large img-center" />

## Copy vs Sync pour les sauvegardes NAS

### Copy (recommandé par défaut)

- Aucune suppression sur la destination
- Le plus sûr pour les sauvegardes
- Facile à annuler

### Sync (usage avancé uniquement)

- Réservé aux miroirs contrôlés
- Toujours exécuter un Dry Run au préalable

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## Chiffrer les données du NAS avant le téléversement (Crypt Remote)

Le chiffrement du NAS ne protège pas les données une fois qu'elles quittent le NAS. Crypt Remote vous offre un chiffrement côté client avant le téléversement.

- Chiffrement du contenu des fichiers et, en option, des noms de fichiers
- Stockage à connaissance nulle (zero-knowledge) dans le cloud

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select Crypt target folder" class="img-large img-center" />
</div>

## Planification et automatisation sans cron

Enregistrez une copie ou une synchronisation en tant que tâche (Job), puis planifiez-la visuellement.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

Cela vous offre :

- Un historique des tâches et une visibilité sur les échecs
- Une configuration reproductible
- Une transmission plus facile entre équipes

## Scénarios réels de sauvegarde NAS

### NAS domestique -> Google Drive

- Photos et documents
- Restauration rapide d'un fichier unique

### NAS de petit bureau -> S3 ou Wasabi

- Coût prévisible et stockage à long terme
- Tâches de copie contrôlées

### Utilisateur avancé ou administrateur IT

- NAS -> cibles multi-cloud
- Tâches distinctes par département ou par projet

## Considérations de sécurité

- Utiliser des montages en lecture seule lorsque c'est possible
- Séparer les tâches de sauvegarde des tâches de synchronisation
- Tester les restaurations en ouvrant directement les fichiers dans le cloud

## Idées reçues courantes

**« La CLI est toujours meilleure »**
Puissante, mais risquée sur des données de production sur NAS.

**« L'interface graphique est seulement pour les débutants »**
L'interface graphique améliore la sécurité opérationnelle et l'auditabilité.

## Conclusion : rclone est puissant, le contrôle est essentiel

Les utilisateurs Synology choisissent rclone pour sa flexibilité. RcloneView conserve cette puissance tout en supprimant les contraintes de SSH et de la CLI. Vous obtenez des workflows plus sûrs, une meilleure visibilité et des sauvegardes fiables.

Si vous voulez utiliser rclone sur Synology sans terminal, c'est la voie la plus simple.
